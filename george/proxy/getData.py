import requests
from bs4 import *
url = 'http://dmartin.org:8026/merchantpoi/v1/merchantpoisvc.svc/merchantpoi'

end = '?PostalCode=10013&MCCCode=5812'

def getUrl(zipCode, MCCCode):
    return 'http://dmartin.org:8026/merchantpoi/v1/merchantpoisvc.svc/merchantpoi' + '?PostalCode=' + str(zipCode) + '&MCCCode=' + str(MCCCode)

fullURL = getUrl(10013, 5812);
response = requests.get(fullURL)
print(response.text)
soup = BeautifulSoup(response.text, "xml")

merchant_list = soup.find_all('MerchantPOI');



