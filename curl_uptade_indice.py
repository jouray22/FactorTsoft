import requests

# Define la URL de tu Elasticsearch y el índice
url = 'https://monelk.tsoftglobal.com/factor-tsoft-ppm-v1/_update_by_query'

headers = {
    'kbn-xsrf': 'reporting',
    'Content-Type': 'application/json'
}

# Define el cuerpo del query
query = {
    "script": {
        "source": "ctx._source.is_reference = true",
        "lang": "painless"
    },
    "query": {
        "match": {
            "ID": "64125"
        }
    }
}

auth = ('elastic', 'E6CdLUwbzRT5ceAjVz4q')

response = requests.post(url, headers=headers, json=query, auth=auth, verify=False)

if response.status_code == 200:
    print("Consulta ejecutada exitosamente.")
    print(response)
else:
    print(f"Error al ejecutar la consulta. Código de estado: {response.status_code}")
    print(response.text)
