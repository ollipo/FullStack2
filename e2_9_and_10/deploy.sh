#!/bin/sh
npm run build
rm -rf ../e3_6_to_8/build
cp -r build ../e3_6_to_8
