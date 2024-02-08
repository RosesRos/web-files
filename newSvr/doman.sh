#!/bin/bash

# get parametrs from post datas
dir=${0%/*}
param1=$1
# param2=$2

newDirectory () {
    base_path="${dir}/$param1/public_html/"
    last_id=$(ls -d ${base_path}source* | awk -F 'source' '{print $NF}' | sort -n | tail -n1)
    if [[ -z "$last_id" ]]; then
        next_id=1
    else
        next_id=$((last_id + 1))
    fi
    new_dir="${base_path}source${next_id}"
    cp -R ${dir}/crazyheets.com/public_html/source $new_dir
    rm -rf $new_dir/img
    chown -R admin:admin ${dir}/crazyheets.com/public_html/img
    cp -R ${dir}/crazyheets.com/public_html/source/img/avas ${dir}/crazyheets.com/public_html/img
    mv ${dir}/crazyheets.com/public_html/img $new_dir
    echo "new dir: https://$param1/source${next_id}"
}
newDirectory