#!/bin/bash

# Carpeta de archivos fuente
SRC_DIR="./src/collisions"

# Carpeta de salida
OUT_FILE="./public/emscripten/index.js"

# Base compilation flags
EMCC_FLAGS="-s WASM=1 \
    -std=c++11 \
    -s EXPORTED_FUNCTIONS='[\"_CircleToCircleCollision\"]' \
    -s EXPORTED_RUNTIME_METHODS='[\"ccall\", \"cwrap\"]'"

# Add optimization flag for production
if [ "$1" != "dev" ]; then
    EMCC_FLAGS="$EMCC_FLAGS -O3"
fi

# Encuentra todos los archivos .cpp dentro de SRC_DIR
CPP_FILES=$(find "$SRC_DIR" -name "*.cpp")

# Ejecuta la compilación
eval "emcc $CPP_FILES -o $OUT_FILE $EMCC_FLAGS"

echo "✅ WASM application build successfully!"
