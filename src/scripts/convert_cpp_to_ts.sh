#!/bin/bash

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
CPP_DIR="$SCRIPT_DIR/../collisions"
TS_DIR="$SCRIPT_DIR/../constants"

mkdir -p "$TS_DIR" 

for CPP_FILE in "$CPP_DIR"/*.cpp; do
  BASE_NAME=$(basename "$CPP_FILE" .cpp)
  TS_FILE="$TS_DIR/${BASE_NAME}.ts"

  if [ ! -f "$CPP_FILE" ]; then
    echo "❌ file not found: $CPP_FILE"
    continue
  fi

  CONTENT=$(grep -v '#include <emscripten.h>' "$CPP_FILE" \
    | sed 's/extern "C"//g' \
    | sed 's/^{//g' \
    | sed 's/^}//g')

  CONTENT=$(echo "$CONTENT" | sed 's/^\( \{2\}\)//')
  CONTENT=$(echo "$CONTENT" | awk 'NF{print; blank=0} !NF && !blank{print ""; blank=1}')

  {
    echo "export const ${BASE_NAME} = \`$CONTENT\`;"
  } > "$TS_FILE"

  echo "✅ File generated: $BASE_NAME.ts"
  echo
done

