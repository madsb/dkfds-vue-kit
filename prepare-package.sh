#!/bin/bash
# Script to prepare packages for local installation

echo "📦 Preparing @madsb/dkfds-vue-kit packages for local use..."

# Save current directory
ORIGINAL_DIR=$(pwd)

# Function to update dependencies
update_deps() {
  local file=$1
  echo "Updating $file..."
  
  # Replace workspace:* with actual versions
  sed -i '' 's/"@madsb\/dkfds-vue-kit-core": "workspace:\*"/"@madsb\/dkfds-vue-kit-core": "0.9.0"/g' "$file"
  sed -i '' 's/"@madsb\/dkfds-vue-kit-utils": "workspace:\*"/"@madsb\/dkfds-vue-kit-utils": "0.9.0"/g' "$file"
}

# Build packages in order
echo "🔨 Building packages..."
cd packages/utils && pnpm run build
cd ../core && pnpm run build

# Create temp copies with fixed versions
cd "$ORIGINAL_DIR"
echo "📝 Creating package copies with fixed versions..."

# Copy packages to temp directory
rm -rf temp-packages
mkdir -p temp-packages

cp -r packages/utils temp-packages/
cp -r packages/core temp-packages/
cp -r packages/dkfds-vue-kit temp-packages/

# Update dependencies in temp copies
update_deps "temp-packages/core/package.json"
update_deps "temp-packages/dkfds-vue-kit/package.json"

# Copy built files to main package
echo "📂 Copying built files to main package..."
cp -r packages/core/dist/* temp-packages/dkfds-vue-kit/core/
cp -r packages/utils/dist/* temp-packages/dkfds-vue-kit/utils/
cp -r packages/core/src/assets temp-packages/dkfds-vue-kit/core/src/

# Pack packages
echo "📦 Creating tarballs..."
cd temp-packages/utils && pnpm pack
cd ../core && pnpm pack
cd ../dkfds-vue-kit && pnpm pack

# Move tarballs to root
cd "$ORIGINAL_DIR"
mkdir -p dist-packages
mv temp-packages/*/*.tgz dist-packages/

# Clean up
rm -rf temp-packages

echo "✅ Packages ready in dist-packages/"
echo ""
echo "To use in your project:"
echo "  npm install $(pwd)/dist-packages/madsb-dkfds-vue-kit-0.9.0.tgz"
echo ""
echo "Or for development with linking:"
echo "  cd packages/dkfds-vue-kit && npm link"
echo "  cd /your/project && npm link @madsb/dkfds-vue-kit"