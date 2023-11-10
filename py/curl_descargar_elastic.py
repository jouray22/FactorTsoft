
import os 

var_curl = "curl -XGET https://monelk.tsoftglobal.com/factor-tsoft-ppm-v1/_search -u elastic:E6CdLUwbzRT5ceAjVz4q -k -o datos_ppm.json"
resultado = os.system(var_curl)
print(resultado)

curl -X GET "https://monelk.tsoftglobal.com/factor-tsoft-ppm-v1/_search" -H 'Content-Type: application/json' -d'
{
  "query": {
    "match_all": {}
  }
}
'