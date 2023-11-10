
"""import os 

var_curl = "curl -X POST https://monelk.tsoftglobal.com/factor-tsoft-2023/_bulk -u elastic:E6CdLUwbzRT5ceAjVz4q --data-binary datos.json"
resultado = os.system(var_curl)
print(resultado)

"""

"""CONSULTA A ELASTIC LOS SERVICIOS ASOCIADOS AL CLIENTE"""

import requests
import os

url = 'https://monelk.tsoftglobal.com/factor-tsoft-anexo-v1/_doc'
headers = {
    'kbn-xsrf': 'reporting',
    'Content-Type': 'application/json'
}
data = "json/\datos.json"

print(data)
with open(data, 'r') as f:
    datos = f.read()

auth = ('elastic', 'E6CdLUwbzRT5ceAjVz4q')

response = requests.post(url, headers=headers, data=datos, auth=auth, verify=False)

if response.status_code == 200 or response.status_code == 201:
    data = response.json()
    print(data)
    print(datos)
    print(response)
else:
    print('Error al insertar los datos:', response.status_code)

