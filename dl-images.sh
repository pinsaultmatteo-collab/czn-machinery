#!/usr/bin/env bash
# À lancer depuis la racine du repo : bash dl-images.sh
if [ ! -f build.js ]; then echo "⚠ Lance ce script depuis la racine du repo (là où est build.js)"; exit 1; fi
BASE="https://czn-machinery.com"
ok=0; fail=0
while read -r p; do
  [ -z "$p" ] && continue
  mkdir -p ".${p%/*}"
  if curl -fsSL "$BASE$p" -o ".$p"; then echo "OK   $p"; ok=$((ok+1)); else echo "FAIL $p"; fail=$((fail+1)); fi
done <<'EOF'
/images/SJW-18-PRO/mini-pelle-sonca-sjw-18-pro-avant.webp
/images/SJW-18-PRO/mini-pelle-sonca-sjw-18-pro-profil.webp
/images/SJW-18-PRO/mini-pelle-sonca-sjw-18-pro-moteur.webp
/images/SJW-18-PRO/mini-pelle-sonca-sjw-18-pro-pedales.webp
/images/XCAVATOR/XC12js/FOND/mini-pelle-xcavator-xc12js-vue-avant.webp
/images/XCAVATOR/XC12js/FOND/mini-pelle-xcavator-xc12js-bras-excavation-etendu.webp
/images/XCAVATOR/XC12js/FOND/mini-pelle-xcavator-xc12js-siege-cabine.webp
/images/XCAVATOR/XC12js/FOND/mini-pelle-xcavator-xc12js-moteur.webp
/images/XCAVATOR/XC12S/FOND/mini-pelle-xcavator-xc12s-vue-avant.webp
/images/XCAVATOR/XC12S/FOND/mini-pelle-xcavator-xc12s-vue-avant-gauche.webp
/images/XCAVATOR/XC12S/FOND/mini-pelle-xcavator-xc12s-profil-avant-droit.webp
/images/XCAVATOR/XC12S/FOND/mini-pelle-xcavator-xc12s-profil-droit-excavation.webp
/images/XCAVATOR/XC18PRO/mini-pelle-xcs-18-pro-vue-avant.webp
/images/XCAVATOR/XC18PRO/mini-pelle-xcs-18-pro-vue-profil-droit.webp
/images/XCAVATOR/XC18PRO/FOND/mini-pelle-xcavator-xc18spro-vue-ensemble.webp
/images/XCAVATOR/XC18PRO/FOND/mini-pelle-xcavator-xc18spro-moteur.webp
/images/XCAVATOR/XC25S/FOND/mini-pelle-xcavator-xc25s-vue-avant-droite.webp
/images/XCAVATOR/XC25S/FOND/mini-pelle-xcavator-xc25s-profil-gauche.webp
/images/XCAVATOR/XC25S/FOND/mini-pelle-xcavator-xc25s-vue-arriere-droite.webp
/images/XCAVATOR/XC25S/FOND/mini-pelle-xcavator-xc25s-profil-droit-excavation.webp
/images/SJ-08EL/mini-tombereau-sonca-sj-08el-profil-avant-droit.webp
/images/SJ-08EL/mini-tombereau-sonca-sj-08el-profil-avant-deplie.webp
/images/SJ-08EL/mini-tombereau-sonca-sj-08el-moteur.webp
/images/SJ-05E/mini-tombereau-sonca-sj-05e-profil-gauche.webp
/images/SJ-05E/mini-tombereau-sonca-sj-05e-biais-arriere-droit.webp
/images/SJ-05E/mini-tombereau-sonca-sj-05e-chenilles.webp
/images/SJ-05E/mini-tombereau-sonca-sj-05e-moteur.webp
/images/SJ-05EL/mini-tombereau-sonca-sj-05el-profil-avant-droit.webp
/images/SJ-05EL/mini-tombereau-sonca-sj-05el-profil-droit.webp
/images/SJ-05EL/mini-tombereau-sonca-sj-05el-profil-droit-releve.webp
/images/SJ-05EL/mini-tombereau-sonca-sj-05el-moteur.webp
/images/SJ-05EL/mini-tombereau-sonca-sj-05el-manettes.webp
/images/SJ-05-EM/mini-tombereau-sonca-sj-05m-vue-ensemble.webp
/images/SJ-05-EM/mini-tombereau-sonca-sj-05m-chenilles.webp
/images/SJ-05-EM/mini-tombereau-sonca-sj-05m-moteur.webp
/images/SJ-05-EM/mini-tombereau-sonca-sj-05m-manettes.webp
/images/SJW460W/mini-chargeur-sonca-sj-460-w-profil.webp
/images/SJW460W/mini-chargeur-sonca-sj-460-w-biais.webp
/images/SJW460W/mini-chargeur-sonca-sj-460-w-moteur.webp
/images/SJW460W/mini-chargeur-sonca-sj-460-w-panneau-de-controle.webp
/images/SJW460W/mini-chargeur-sonca-sj-460-w-radiateur.webp
/images/SJW460T/mini-chargeur-sonca-sj-460-t-profil-leve.webp
/images/SJW460T/mini-chargeur-sonca-sj-460-t-moteur.webp
/images/SJW460T/mini-chargeur-sonca-sj-460-t-radiateur.webp
/images/SJW460T/mini-chargeur-sonca-sj-460-t-tableau-de-commandes.webp
/images/SJ490W/mini-chargeur-sonca-sj-490-w-profil-droit-leve.webp
/images/SJ490W/mini-chargeur-sonca-sj-490-w-moteur.webp
/images/SJ490W/mini-chargeur-sonca-sj-490-w-radiateur.webp
/images/SJ490W/mini-chargeur-sonca-sj-490-w-manettes.webp
/images/SJ490W/mini-chargeur-sonca-sj-490-w-siege.webp
EOF
echo ""
echo "Terminé : $ok téléchargées, $fail échecs."
