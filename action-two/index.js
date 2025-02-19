const core = require('@actions/core');

try {
  const name = core.getInput('name');
  console.log(`Greetings, ${name} from Action Two!`);
} catch (error) {
  core.setFailed(error.message);
}
