
if ! command -v node &> /dev/null; then
    echo "Node.js is not installed. Please install Node.js first."
    exit 1
fi

if ! npm list --depth=0 | grep -q "playwright"; then
    echo "Installing project dependencies..."
    npm install playwright
fi

if ! [[ -d "node_modules" ]]; then
    echo "Node modules are not installed. Installing now..."
    npm install
fi

npm start