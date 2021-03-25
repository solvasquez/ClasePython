# region LIBRERIAS
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from time import sleep
# endregion LIBRERIAS

# region CONFIGURACION DEL NAVEGADOR 
options = Options()
options.binary_location = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"
navegador = webdriver.Chrome(options=options, executable_path="C:\\Projects\\ClasePython\\chromedriver.exe")
# endregion CONFIGURACION DEL NAVEGADOR  

# region COMANDOS WEBDRIVER 
navegador.get("https://youtube.com")
navegador.find_element_by_id("search").send_keys("Redbone childish gambino")
navegador.find_element_by_id("search").click()
navegador.minimize_window()
navegador.maximize_window()
navegador.get("http://enanosbuenosaires.com/")
navegador.quit()
# endregion COMANDOS WEBDRIVER