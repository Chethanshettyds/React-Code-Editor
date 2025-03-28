// Initialize CodeMirror Editor
var editor = CodeMirror.fromTextArea(document.getElementById("codeEditor"), {
  mode: "javascript",
  lineNumbers: true,
  theme: "dracula",
  autoCloseBrackets: true,
  matchBrackets: true
});

// Function to Run the Code
function runCode() {
  const code = editor.getValue();
  const terminal = document.getElementById("terminal");
  
  try {
      console.clear();
      terminal.innerHTML = ""; // Clear previous output

      // Capture console logs
      const originalConsoleLog = console.log;
      console.log = function (message) {
          terminal.innerHTML += `<div class="text-green-400">${message}</div>`;
          originalConsoleLog.apply(console, arguments);
      };

      eval(code); // Execute JS code
      console.log = originalConsoleLog; // Restore console log
  } catch (error) {
      console.error(error);
      terminal.innerHTML += `<div class="text-red-400">${error}</div>`;
  }
}

// Function to Clear Code Editor and Terminal
function clearEditor() {
  editor.setValue(""); // Clear code editor
  document.getElementById("terminal").innerHTML = ""; // Clear terminal output
}

// Attach Functions to Buttons
document.getElementById("runButton").addEventListener("click", runCode);
document.getElementById("clearButton").addEventListener("click", clearEditor);
