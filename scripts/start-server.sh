#!/bin/bash

# Start Server Script for Open Data Dashboard
# This script starts a local web server to serve the website

echo "🚀 Starting the webserver..."
echo ""

# Find an available port
PORT=8000
while netstat -tln 2>/dev/null | grep -q ":$PORT "; do
    PORT=$((PORT + 1))
done

echo "Le dashboard is available at: http://localhost:$PORT"

# Check if Python is available
if command -v python3 &> /dev/null; then
    echo "Using Python 3"
    cd "$(dirname "$0")/../public"
    python3 -m http.server $PORT
elif command -v python &> /dev/null; then
    echo "Using Python"
    cd "$(dirname "$0")/../public"
    python -m http.server $PORT
else
    echo "Error: Python is not installed"
    exit 1
fi
