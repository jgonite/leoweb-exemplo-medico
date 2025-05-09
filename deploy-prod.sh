#!/bin/bash

set -e  # Se der erro, para o script

# 2. Compilar o Angular com as variáveis já injetadas
rm -rf dist
echo "[2/4] Buildando Angular"
ng build --configuration production

# 3. Gerar imagem Docker
echo "[3/4] Sincronizando arquivos no bucket s3..."
aws s3 sync ./dist/exemplo-medico/browser s3://ex-1.leo-web.com  --delete \
  --cache-control "no-cache, no-store, must-revalidate" \
  --expires 0


echo "✅ Deploy concluído!"