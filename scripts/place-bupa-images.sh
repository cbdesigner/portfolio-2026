#!/usr/bin/env bash
#
# Coloca las 5 capturas del caso Bupa Agenda en public/images/bupa/
# con los nombres que espera la página (src/app/bupa-design-system/page.tsx).
#
# Uso 1 — pasar las 5 rutas EN ORDEN:
#   ./scripts/place-bupa-images.sh \
#     /ruta/captura1.png \   # AvailableMedicalCenter
#     /ruta/captura2.png \   # Calendar
#     /ruta/captura3.png \   # Booking mobile (claro/oscuro)
#     /ruta/captura4.png \   # Board completo del flujo
#     /ruta/captura5.png     # Responsive con grid
#
# Uso 2 — pasar una carpeta: toma los 5 PNG/JPG más recientes de ahí.
#   ./scripts/place-bupa-images.sh ~/Downloads
#
# Uso 3 — sin argumentos: toma los 5 PNG/JPG más recientes del Escritorio
#   (ordenados del más antiguo al más nuevo) y los asigna en ese orden.
#
set -euo pipefail

DEST="$(cd "$(dirname "$0")/.." && pwd)/public/images/bupa"
NAMES=(medical-center.png calendar.png booking-mobile.png agenda-board.png responsive.png)

mkdir -p "$DEST"

if [ "$#" -eq 5 ]; then
  SRCS=("$@")
elif [ "$#" -eq 1 ] && [ -d "$1" ]; then
  DIR="$1"
  echo "Tomando las 5 imágenes más recientes de: $DIR…"
  while IFS= read -r f; do SRCS+=("$f"); done < <(
    ls -t "$DIR"/*.{png,PNG,jpg,JPG,jpeg,JPEG} 2>/dev/null | head -5 | tail -r
  )
  if [ "${#SRCS[@]}" -ne 5 ]; then
    echo "✗ Esperaba 5 imágenes en $DIR y encontré ${#SRCS[@]}." >&2
    exit 1
  fi
elif [ "$#" -eq 0 ]; then
  echo "Sin argumentos: tomando las 5 imágenes más recientes del Escritorio…"
  # 5 archivos de imagen más recientes, en orden cronológico (antiguo → nuevo)
  while IFS= read -r f; do SRCS+=("$f"); done < <(
    ls -t "$HOME/Desktop"/*.{png,PNG,jpg,JPG,jpeg,JPEG} 2>/dev/null | head -5 | tail -r
  )
  if [ "${#SRCS[@]}" -ne 5 ]; then
    echo "✗ Esperaba 5 imágenes en ~/Desktop y encontré ${#SRCS[@]}." >&2
    echo "  Pásalas como argumentos en orden, o pasa una carpeta: ./scripts/place-bupa-images.sh ~/Downloads" >&2
    exit 1
  fi
else
  echo "✗ Pasa exactamente 5 rutas (o ninguna para usar ~/Downloads)." >&2
  exit 1
fi

for i in "${!NAMES[@]}"; do
  src="${SRCS[$i]}"
  dst="$DEST/${NAMES[$i]}"
  if [ ! -f "$src" ]; then
    echo "✗ No existe: $src" >&2
    exit 1
  fi
  cp "$src" "$dst"
  echo "✓ ${NAMES[$i]}  ←  $(basename "$src")"
done

echo ""
echo "Listo. 5 imágenes colocadas en public/images/bupa/"
