"""CONSULTA A ELASTIC LOS SERVICIOS ASOCIADOS AL CLIENTE"""

import requests
import os

url = 'https://monelk.tsoftglobal.com/factor-tsoft-v2-test1/_search'
headers = {
    'kbn-xsrf': 'reporting',
    'Content-Type': 'application/json'
}

auth = ('elastic', 'E6CdLUwbzRT5ceAjVz4q')

response = requests.get(url, headers=headers, auth=auth, verify=False)

if response.status_code == 200:
    data = response.json()
    print(data)
else:
    print('Error al obtener los datos:', response.status_code)

