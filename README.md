# iohk

## Installation via Custom script

This Bash script automates the installation process for Playwright, a popular end-to-end testing framework for web applications. It performs the following tasks:

Checks for Node.js: Verifies if Node.js is installed on the system. If not, it provides a message prompting the user to install Node.js.
Installs Playwright globally: If Playwright is not installed globally, it installs it using npm install -g playwright.
Installs project dependencies: If Playwright is not listed as a dependency in the current project, it installs it using npm install playwright.
Installs Node modules: Checks if the node_modules directory exists. If not, it installs Node modules using npm install.
Runs Playwright tests: Executes Playwright tests located in the specified test file (replace your_test_file.js with your actual test file).

Usage:

Make the script executable using chmod +x install-and-run-pw.sh.
Run the script: ./install_and_run_playwright.sh

![alt text](doc_data/image.png)