<script setup lang="ts">
import { ref } from 'vue'
import { FdsPre } from '@madsb/dkfds-vue3'

// Demo state for playground
const sampleJson = ref({
  user: {
    id: 12345,
    name: 'Anders Hansen',
    email: 'anders.hansen@example.dk',
    roles: ['user', 'editor'],
    active: true,
    lastLogin: '2024-01-15T10:30:00Z',
  },
  preferences: {
    language: 'da',
    theme: 'light',
    notifications: {
      email: true,
      push: false,
    },
  },
})

const jsIntroSnippet = `const greeting = 'Hello, World!';
console.log(greeting);

function calculate(a, b) {
  return a + b;
}`

const yamlConfigSnippet = `server:
  host: localhost
  port: 3000
database:
  type: postgresql
  url: postgres://localhost/db
logging:
  level: info
  format: json`

const jsAsyncSnippet = `// Async function with error handling
async function fetchUserData(userId) {
  try {
    const response = await fetch(\`/api/users/\${userId}\`);
    if (!response.ok) {
      throw new Error('Failed to fetch user');
    }
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}`

const pythonClassSnippet = `class UserManager:
    def __init__(self, database):
        self.db = database

    def create_user(self, name, email):
        user_data = {
            'name': name,
            'email': email,
            'created_at': datetime.now()
        }
        return self.db.insert('users', user_data)

    def get_user(self, user_id):
        return self.db.find('users', {'id': user_id})`

const htmlFormSnippet = `<!DOCTYPE html>
<html lang='da'>
<head>
    <meta charset='UTF-8'>
    <title>DKFDS Form</title>
</head>
<body>
    <form class='form-container'>
        <div class='form-group'>
            <label for='name'>Navn</label>
            <input type='text' id='name' required>
        </div>
        <button type='submit'>Send</button>
    </form>
</body>
</html>`

const logOutput = `[2024-01-15 10:30:15] INFO: Application started
[2024-01-15 10:30:16] DEBUG: Database connection established
[2024-01-15 10:30:17] INFO: Server listening on port 3000
[2024-01-15 10:32:45] WARN: High memory usage detected
[2024-01-15 10:33:12] ERROR: Failed to connect to external API
[2024-01-15 10:33:13] INFO: Retrying connection in 5 seconds
[2024-01-15 10:33:18] INFO: Connection restored`

const terminalCommands = `$ pnpm install @madsb/dkfds-vue3
$ pnpm dev

> dkfds-demo@1.0.0 dev
> vite

  VITE v4.5.0  ready in 250 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help`

const csvDataset = `id,name,email,department,active
1,"Anders Hansen",anders@example.dk,IT,true
2,"Maria Larsen",maria@example.dk,HR,true
3,"Lars Nielsen",lars@example.dk,Finance,false
4,"Sofie Andersen",sofie@example.dk,Marketing,true
5,"Mikkel Jensen",mikkel@example.dk,IT,true`

const previewHtmlStructure = `<FdsFormgroup>
  <FdsLabel for=\"email\">Email Address</FdsLabel>
  <FdsInput id=\"email\" type=\"email\" />
</FdsFormgroup>`

const previewVueScript = `<script setup lang=\"ts\">
import { ref } from 'vue'
import { FdsFormgroup, FdsLabel, FdsInput } from '@madsb/dkfds-vue3'

const email = ref('')
<\/script>`

const getPrePlaygroundState = () => ({
  contentType: 'code' as const,
  header: 'Code Example',
  codeValue: `const message = "Hello, Denmark!";\nconsole.log(message);`,
  jsonValue: JSON.stringify({ name: 'Test User', active: true }, null, 2),
  slotContent: `Plain text content\nwith line breaks\nand spacing`,
})
</script>

<template>
  <Story title="Data Display/Pre" icon="carbon:code">
    <!-- Showcase all pre variations -->
    <Variant title="Showcase" icon="carbon:grid">
      <div class="container py-6">
        <div class="row">
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Code Block</h3>
            <FdsPre header="JavaScript Example" :code="jsIntroSnippet" />
          </div>
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">JSON Data</h3>
            <FdsPre
              header="API Response"
              :json="{ status: 'success', data: { id: 1, name: 'Test' }, timestamp: '2024-01-15' }"
            />
          </div>
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Configuration</h3>
            <FdsPre header="YAML Config" :code="yamlConfigSnippet" />
          </div>
        </div>
        <p class="mt-4 mb-0">
          The Pre component follows DKFDS v11 specifications for displaying code blocks and
          preformatted text. Try switching themes using the global theme switcher to see how it
          adapts to different contexts.
        </p>
      </div>
    </Variant>

    <!-- Programming languages demonstration -->
    <Variant title="Code Languages" icon="carbon:application">
      <div class="container py-6">
        <div>
          <div>
            <h3 class="h6 mb-2">JavaScript</h3>
            <FdsPre header="Function Example" :code="jsAsyncSnippet" />
          </div>

          <div>
            <h3 class="h6 mb-2">Python</h3>
            <FdsPre header="Class Definition" :code="pythonClassSnippet" />
          </div>

          <div>
            <h3 class="h6 mb-2">HTML</h3>
            <FdsPre header="Form Structure" :code="htmlFormSnippet" />
          </div>
        </div>
        <p class="mt-4 mb-0">
          Pre components handle various programming languages with consistent monospace formatting
          and proper line spacing for readability.
        </p>
      </div>
    </Variant>

    <!-- JSON formatting demonstration -->
    <Variant title="JSON Formatting" icon="carbon:data-structured">
      <div class="container py-6">
        <div>
          <div>
            <h3 class="h6 mb-2">Simple Object</h3>
            <FdsPre
              header="User Profile"
              :json="{
                id: 123,
                name: 'Maria Larsen',
                email: 'maria@example.dk',
                verified: true,
              }"
            />
          </div>

          <div>
            <h3 class="h6 mb-2">Complex Structure</h3>
            <FdsPre header="Application Settings" :json="sampleJson" />
          </div>

          <div>
            <h3 class="h6 mb-2">Array Data</h3>
            <FdsPre
              header="Menu Items"
              :json="{
                navigation: [
                  { id: 1, title: 'Hjem', url: '/', active: true },
                  { id: 2, title: 'Om os', url: '/about', active: false },
                  { id: 3, title: 'Kontakt', url: '/contact', active: false },
                  {
                    id: 4,
                    title: 'Services',
                    url: '/services',
                    active: false,
                    children: [
                      { id: 41, title: 'Web Development', url: '/services/web' },
                      { id: 42, title: 'Consulting', url: '/services/consulting' },
                    ],
                  },
                ],
              }"
            />
          </div>
        </div>
        <p class="mt-4 mb-0">
          JSON objects are automatically formatted with proper indentation for enhanced readability.
          Large JSON objects over 65,535 characters will show a warning message.
        </p>
      </div>
    </Variant>

    <!-- Content variations -->
    <Variant title="Content Types" icon="carbon:document">
      <div class="container py-6">
        <div>
          <div>
            <h3 class="h6 mb-2">Log Output</h3>
            <FdsPre header="Application Logs" :code="logOutput" />
          </div>

          <div>
            <h3 class="h6 mb-2">Command Line</h3>
            <FdsPre header="Terminal Commands" :code="terminalCommands" />
          </div>

          <div>
            <h3 class="h6 mb-2">Data Format</h3>
            <FdsPre header="CSV Data" :code="csvDataset" />
          </div>
        </div>
        <p class="mt-4 mb-0">
          Pre components preserve exact formatting including whitespace, making them ideal for logs,
          command output, and structured data formats.
        </p>
      </div>
    </Variant>

    <!-- Interactive playground -->
    <Variant title="Playground" icon="carbon:game-console" :init-state="getPrePlaygroundState">
      <template #default="{ state }">
        <div class="container py-6 d-flex flex-column align-items-center justify-content-center">
          <FdsPre
            v-if="state.contentType === 'code'"
            :header="state.header"
            :code="state.codeValue"
          />
          <FdsPre
            v-else-if="state.contentType === 'json'"
            :header="state.header"
            :json="JSON.parse(state.jsonValue)"
          />
          <FdsPre v-else :header="state.header">
            {{ state.slotContent }}
          </FdsPre>
        </div>
      </template>

      <template #controls="{ state }">
        <HstSelect
          v-model="state.contentType"
          title="Content Type"
          :options="[
            { value: 'code', label: 'Code String' },
            { value: 'json', label: 'JSON Object' },
            { value: 'slot', label: 'Slot Content' },
          ]"
        />

        <HstText v-model="state.header" title="Header Text" />

        <HstTextarea
          v-if="state.contentType === 'code'"
          v-model="state.codeValue"
          title="Code Content"
          :rows="6"
        />

        <HstTextarea
          v-if="state.contentType === 'json'"
          v-model="state.jsonValue"
          title="JSON String"
          :rows="4"
        />

        <HstTextarea
          v-if="state.contentType === 'slot'"
          v-model="state.slotContent"
          title="Slot Content"
          :rows="4"
        />
      </template>
    </Variant>
  </Story>
</template>
