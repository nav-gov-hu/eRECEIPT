
function CreateFileRefs()
{
var fr=new Array();
            
fr[1]=['http://schemas.nav.gov.hu/NTCA/1.0/common', 'http___schemas_nav_gov_hu_ntca_1_0_common.html'];
fr[2]=['http://schemas.nav.gov.hu/NAVINOTIFICATION/1.1/customer', 'http___schemas_nav_gov_hu_navinotification_1_1_customer.html'];
fr[3]=['common.xsd', 'common_xsd.html'];
fr[4]=['BasicHeaderType', 'basicheadertype.html'];
fr[5]=['headerVersion', 'headerversion.html'];
fr[6]=['requestId', 'requestid.html'];
fr[7]=['requestVersion', 'requestversion.html'];
fr[8]=['timestamp', 'timestamp.html'];
fr[9]=['BasicRequestType', 'basicrequesttype.html'];
fr[10]=['header', 'header.html'];
fr[11]=['user', 'user.html'];
fr[12]=['BasicResponseType', 'basicresponsetype.html'];
fr[13]=['header', 'header1.html'];
fr[14]=['result', 'result.html'];
fr[15]=['BasicResultType', 'basicresulttype.html'];
fr[16]=['errorCode', 'errorcode.html'];
fr[17]=['funcCode', 'funccode.html'];
fr[18]=['message', 'message.html'];
fr[19]=['notifications', 'notifications.html'];
fr[20]=['CryptoType', 'cryptotype.html'];
fr[21]=['cryptoType', 'cryptotype1.html'];
fr[22]=['GeneralErrorHeaderResponseType', 'generalerrorheaderresponsetype.html'];
fr[23]=['NotificationsType', 'notificationstype.html'];
fr[24]=['notification', 'notification.html'];
fr[25]=['NotificationType', 'notificationtype.html'];
fr[26]=['notificationCode', 'notificationcode.html'];
fr[27]=['notificationText', 'notificationtext.html'];
fr[28]=['TechnicalValidationResultType', 'technicalvalidationresulttype.html'];
fr[29]=['message', 'message1.html'];
fr[30]=['validationErrorCode', 'validationerrorcode.html'];
fr[31]=['validationResultCode', 'validationresultcode.html'];
fr[32]=['UserHeaderType', 'userheadertype.html'];
fr[33]=['login', 'login.html'];
fr[34]=['passwordHash', 'passwordhash.html'];
fr[35]=['predecessorTaxNumber', 'predecessortaxnumber.html'];
fr[36]=['requestSignature', 'requestsignature.html'];
fr[37]=['taxNumber', 'taxnumber.html'];
fr[38]=['GeneralErrorHeaderResponse', 'generalerrorheaderresponse.html'];
fr[39]=['GeneralExceptionResponse', 'generalexceptionresponse.html'];
fr[40]=['AtomicStringType100', 'atomicstringtype100.html'];
fr[41]=['AtomicStringType1024', 'atomicstringtype1024.html'];
fr[42]=['AtomicStringType128', 'atomicstringtype128.html'];
fr[43]=['AtomicStringType15', 'atomicstringtype15.html'];
fr[44]=['AtomicStringType16', 'atomicstringtype16.html'];
fr[45]=['AtomicStringType2', 'atomicstringtype2.html'];
fr[46]=['AtomicStringType200', 'atomicstringtype200.html'];
fr[47]=['AtomicStringType2048', 'atomicstringtype2048.html'];
fr[48]=['AtomicStringType255', 'atomicstringtype255.html'];
fr[49]=['AtomicStringType256', 'atomicstringtype256.html'];
fr[50]=['AtomicStringType32', 'atomicstringtype32.html'];
fr[51]=['AtomicStringType4', 'atomicstringtype4.html'];
fr[52]=['AtomicStringType4000', 'atomicstringtype4000.html'];
fr[53]=['AtomicStringType50', 'atomicstringtype50.html'];
fr[54]=['AtomicStringType512', 'atomicstringtype512.html'];
fr[55]=['AtomicStringType64', 'atomicstringtype64.html'];
fr[56]=['AtomicStringType8', 'atomicstringtype8.html'];
fr[57]=['BankAccountNumberType', 'bankaccountnumbertype.html'];
fr[58]=['BusinessResultCodeType', 'businessresultcodetype.html'];
fr[59]=['CommunityVatNumberType', 'communityvatnumbertype.html'];
fr[60]=['CountryCodeType', 'countrycodetype.html'];
fr[61]=['CountyCodeType', 'countycodetype.html'];
fr[62]=['CurrencyType', 'currencytype.html'];
fr[63]=['EntityIdType', 'entityidtype.html'];
fr[64]=['FunctionCodeType', 'functioncodetype.html'];
fr[65]=['GenericDateType', 'genericdatetype.html'];
fr[66]=['GenericDecimalType', 'genericdecimaltype.html'];
fr[67]=['GenericTimestampType', 'generictimestamptype.html'];
fr[68]=['GenericUnsignedIntegerType', 'genericunsignedintegertype.html'];
fr[69]=['LocalizationType', 'localizationtype.html'];
fr[70]=['LoginType', 'logintype.html'];
fr[71]=['PlateNumberType', 'platenumbertype.html'];
fr[72]=['PostalCodeType', 'postalcodetype.html'];
fr[73]=['RequestPageType', 'requestpagetype.html'];
fr[74]=['ResponsePageType', 'responsepagetype.html'];
fr[75]=['SHA256Type', 'sha256type.html'];
fr[76]=['SHA512Type', 'sha512type.html'];
fr[77]=['SimpleText100NotBlankType', 'simpletext100notblanktype.html'];
fr[78]=['SimpleText1024NotBlankType', 'simpletext1024notblanktype.html'];
fr[79]=['SimpleText15NotBlankType', 'simpletext15notblanktype.html'];
fr[80]=['SimpleText200NotBlankType', 'simpletext200notblanktype.html'];
fr[81]=['SimpleText255NotBlankType', 'simpletext255notblanktype.html'];
fr[82]=['SimpleText50NotBlankType', 'simpletext50notblanktype.html'];
fr[83]=['SimpleText512NotBlankType', 'simpletext512notblanktype.html'];
fr[84]=['SwiftCodeType', 'swiftcodetype.html'];
fr[85]=['TaxIdentificationNumberType', 'taxidentificationnumbertype.html'];
fr[86]=['TaxpayerIdType', 'taxpayeridtype.html'];
fr[87]=['TechnicalResultCodeType', 'technicalresultcodetype.html'];
fr[88]=['VatCodeType', 'vatcodetype.html'];
fr[89]=['customer.xsd', 'customer_xsd.html'];
fr[90]=['GetNotificationRequestType', 'getnotificationrequesttype.html'];
fr[91]=['pagination', 'pagination.html'];
fr[92]=['sessionId', 'sessionid.html'];
fr[93]=['GetNotificationResponseType', 'getnotificationresponsetype.html'];
fr[94]=['pagination', 'pagination1.html'];
fr[95]=['rows', 'rows.html'];
fr[96]=['sessionExpireIn', 'sessionexpirein.html'];
fr[97]=['sessionId', 'sessionid1.html'];
fr[98]=['GetSessionRequestType', 'getsessionrequesttype.html'];
fr[99]=['GetSessionResponseType', 'getsessionresponsetype.html'];
fr[100]=['rows', 'rows1.html'];
fr[101]=['NotificationRowsType', 'notificationrowstype.html'];
fr[102]=['row', 'row.html'];
fr[103]=['NotificationRowType', 'notificationrowtype.html'];
fr[104]=['notificationToken', 'notificationtoken.html'];
fr[105]=['requestId', 'requestid1.html'];
fr[106]=['userId', 'userid.html'];
fr[107]=['RequestPaginationType', 'requestpaginationtype.html'];
fr[108]=['page', 'page.html'];
fr[109]=['rowCount', 'rowcount.html'];
fr[110]=['ResponsePaginationType', 'responsepaginationtype.html'];
fr[111]=['page', 'page1.html'];
fr[112]=['rowCount', 'rowcount1.html'];
fr[113]=['totalRowCount', 'totalrowcount.html'];
fr[114]=['SessionRowsType', 'sessionrowstype.html'];
fr[115]=['row', 'row1.html'];
fr[116]=['SessionRowType', 'sessionrowtype.html'];
fr[117]=['sessionExpireIn', 'sessionexpirein1.html'];
fr[118]=['sessionId', 'sessionid2.html'];
fr[119]=['GetNotificationRequest', 'getnotificationrequest.html'];
fr[120]=['GetNotificationResponse', 'getnotificationresponse.html'];
fr[121]=['GetSessionRequest', 'getsessionrequest.html'];
fr[122]=['GetSessionResponse', 'getsessionresponse.html'];
fr[123]=['Min1Max1000Type', 'min1max1000type.html'];    
 return fr;          
}

function CreateWordIndex()
{
var w=[
            
['true',[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123]],
['project',[3]],
['ntca',[3,89]],
['common',[3,89,90,92,93,97,98,99,103,105,106,107,108,110,111,116,118]],
['séma',[3]],
['author',[3]],
['informatikai',[3]],
['intézet',[3]],
['version',[3,4,5,7]],
['schema',[3,89]],
['xmlns',[3,89]],
['http',[3,89]],
['schemas',[3,89]],
['xmlschema',[3,89]],
['targetnamespace',[3,89]],
['elementformdefault',[3,89]],
['qualified',[3,89]],
['attributeformdefault',[3,89]],
['unqualified',[3,89]],
['--atomi',[3]],
['típusok',[3]],
['atomic',[3,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56]],
['types--',[3]],
['simpletype',[3,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,123]],
['name',[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123]],
['atomicstringtype100',[3,40,77]],
['annotation',[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123]],
['documentation',[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123]],
['lang',[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123]],
['atomi',[3,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56]],
['string',[3,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,69,77,78,79,80,81,82,83,84]],
['típus',[3,20,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,62,63,64,68,69,70,72,73,74,75,76,77,78,79,80,81,82,83,84,85,87]],
['hosszra',[3,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56]],
['type',[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,60,62,63,64,68,69,70,72,73,74,75,76,84,85,87,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122]],
['length',[3,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,60,61,62,86,88]],
['restriction',[3,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,123]],
['base',[3,20,22,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,93,98,99,119,120,121,122,123]],
['minlength',[3,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,59,63,70,71,72,84]],
['value',[3,32,34,36,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,123]],
['maxlength',[3,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,59,63,70,71,72,84]],
['atomicstringtype1024',[3,41,78]],
['atomicstringtype128',[3,42,76]],
['atomicstringtype15',[3,4,5,7,43,59,70,72,79]],
['atomicstringtype16',[3,44]],
['atomicstringtype2',[3,45,60,61,88]],
['atomicstringtype200',[3,46,80]],
['atomicstringtype2048',[3,47]],
['atomicstringtype255',[3,48,81]],
['atomicstringtype256',[3,49]],
['atomicstringtype32',[3,50,63,71]],
['atomicstringtype4',[3,51,62]],
['atomicstringtype4000',[3,52]],
['atomicstringtype50',[3,53,57,82]],
['atomicstringtype512',[3,54,83]],
['atomicstringtype64',[3,55,75]],
['atomicstringtype8',[3,56,58,64,86,87]],
['genericdatetype',[3,65]],
['Általános',[]],
['dátum',[3,65]],
['generic',[3,22,65,66,67,68]],
['date',[3,65]],
['pattern',[3,57,59,60,61,62,63,65,67,70,71,72,75,76,77,78,79,80,81,82,83,84,85,86,88]],
['genericdecimaltype',[3,66]],
['lebegőpontos',[3,66]],
['érték',[3,66]],
['float',[3,66]],
['point',[3,66]],
['decimal',[3,66]],
['generictimestamptype',[3,4,8,67]],
['időbélyeg',[3,67]],
['timestamp',[3,4,8,10,13,67,90,98,119,121]],
['datetime',[3,67]],
['genericunsignedintegertype',[3,68]],
['egész',[3,68,89,123]],
['szám',[3,68,89,123]],
['unsigned',[3,68]],
['integer',[3,68,85,89,123]],
['mininclusive',[3,68,73,74,89,123]],
['sha256type',[3,75]],
['sha256',[3,75]],
['megadására',[3,57,75,76]],
['szolgáló',[3,57,75,76]],
['field',[3,75,76]],
['holding',[3,75,76]],
['code',[3,15,16,25,26,28,30,58,60,61,62,64,72,75,76,84,87,88]],
['0-9a-f',[3,75,76]],
['sha512type',[3,76]],
['sha512',[3,76]],
['simpletext100notblanktype',[3,25,26,28,30,77,89,103,106]],
['legfeljebb',[3,77,78,79,80,81,82,83]],
['karaktert',[3,77,78,79,80,81,82,83]],
['tartalmazó',[3,77,78,79,80,81,82,83]],
['szöveg',[3,25,27,77,78,79,80,81,82,83]],
['maximum',[3,77,78,79,80,81,82,83,89,107,109,110,112]],
['characters',[3,77,78,79,80,81,82,83]],
['simpletext1024notblanktype',[3,15,18,25,27,28,29,78]],
['simpletext15notblanktype',[3,79]],
['simpletext200notblanktype',[3,80]],
['simpletext255notblanktype',[3,81]],
['simpletext50notblanktype',[3,15,16,20,21,82,89,90,92,93,97,116,118]],
['simpletext512notblanktype',[3,20,83]],
['--Üzleti',[]],
['katalógus',[3]],
['elemek',[3]],
['business',[3,58]],
['catalog',[3]],
['elements--',[3]],
['bankaccountnumbertype',[3,57]],
['bankszámla',[3,57]],
['bank',[3,57]],
['account',[3,57]],
['number',[3,4,5,7,32,35,37,57,59,71,85,86,89,107,108,109,110,111,112,113]],
['0-9a-za-z',[3,57]],
['communityvatnumbertype',[3,59]],
['közösségi',[3,59]],
['adószám',[3,59,86]],
['community',[3,59]],
['registration',[3,59,71]],
['0-9a-z',[3,59]],
['countrycodetype',[3,60]],
['országkód',[3,60]],
['alpha-2',[3,60]],
['szabvány',[3,60,62]],
['szerint',[3,4,7,60]],
['country',[3,60]],
['countycodetype',[3,61]],
['megyekód',[3,61]],
['county',[3,61]],
['currencytype',[3,62]],
['pénznem',[3,62]],
['szerinti',[3,62]],
['hosszú',[3,62]],
['currency',[3,62]],
['three',[3,62]],
['digit',[3,62]],
['platenumbertype',[3,71]],
['kereskedelmi',[3,71]],
['gépjármű',[3,71]],
['forgalmi',[3,71]],
['rendszáma',[3,71]],
['csak',[3,71]],
['betűk',[3,71]],
['számok',[3,71]],
['commercial',[3,71]],
['motor',[3,71]],
['vehicle',[3,71]],
['letters',[3,71]],
['numbers',[3,71]],
['only',[3,71]],
['a-z0-9ÖŐÜŰ',[]],
['postalcodetype',[3,72]],
['irányítószám',[3,72]],
['a-z0-9',[3,72,84]],
['a-z0-9\s\-',[3,72]],
['swiftcodetype',[3,84]],
['swift',[3,84]],
['kódot',[3,84]],
['leíró',[3,20,84]],
['a-z2-9',[3,84]],
['a-np-z0-9',[3,84]],
['taxidentificationnumbertype',[3,85]],
['adóazonosító',[3,85]],
['identification',[3,85]],
['totaldigits',[3,85]],
['taxpayeridtype',[3,32,35,37,86]],
['nyolc',[3,86]],
['jegyű',[3,86]],
['törzsszám',[3,86]],
['része',[3,86]],
['8-digit',[3,86]],
['core',[3,86]],
['section',[3,86]],
['vatcodetype',[3,88]],
['--közös',[3]],
['businessresultcodetype',[3,58]],
['Üzleti',[]],
['eredmény',[3,15,17,28,31,58,87]],
['result',[3,12,14,15,17,22,28,31,38,58,87,93,99,120,122]],
['enumeration',[3,58,64,69,87]],
['error',[3,15,16,28,30,38,58,64,87]],
['hiba',[3,58,64,87]],
['warn',[3,58]],
['figyelmeztetés',[3,58]],
['info',[3,58]],
['tájékoztatás',[3,58]],
['information',[3,58]],
['entityidtype',[3,4,6,63,89,103,105]],
['generált',[3,63]],
['azonosító',[3,63]],
['generated',[3,63]],
['a-za-z0-9',[3,63,70]],
['functioncodetype',[3,15,17,64]],
['funkciókód',[3,64]],
['function',[3,64]],
['sikeres',[3,64]],
['művelet',[3,64]],
['successful',[3,64]],
['operation',[3,22,38,39,64]],
['localizationtype',[3,69]],
['lokalizációt',[3,69]],
['jelölő',[3,69]],
['localization',[3,69]],
['magyar',[3,69]],
['hungarian',[3,69]],
['angol',[3,69]],
['english',[3,69]],
['német',[3,69]],
['german',[3,69]],
['logintype',[3,32,33,70]],
['felhasználónév',[3,70]],
['login',[3,11,32,33,70]],
['requestpagetype',[3,73,89,107,108]],
['lapozó',[3,73,74]],
['paraméter',[3,73,74]],
['kérések',[3,73]],
['számára',[3,73,74]],
['page',[3,73,74,89,91,94,107,108,110,111]],
['parameter',[3,73,74]],
['requests',[3,73]],
['responsepagetype',[3,74,89,110,111]],
['válaszok',[3,74]],
['responses',[3,74]],
['technicalresultcodetype',[3,28,31,87]],
['technikai',[3,28,32,33,34,35,37,87]],
['technical',[3,28,32,33,34,35,37,87]],
['critical',[3,87]],
['kritikus',[3,87]],
['complextype',[3,4,9,12,15,20,22,23,25,28,32,38,39,89,90,93,98,99,101,103,107,110,114,116,119,120,121,122]],
['basicheadertype',[3,4,9,10,12,13,89,90,98]],
['kérés',[3,4,6,7,8,9,10,11,32,36,89,98,119,121]],
['tranzakcionális',[3,4,9,10,12,13]],
['adatai',[3,4,9,10,11,12,13,32]],
['transactional',[3,4,9,10,12,13]],
['data',[3,4,6,7,9,10,11,12,13,14,15,32,89,93,95,101,102,114,115]],
['request',[3,4,6,7,8,9,10,11,32,36,89,98,103,105,107,119,121]],
['sequence',[3,4,9,12,15,23,25,28,32,89,90,93,99,101,103,107,110,114,116]],
['element',[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,89,90,91,92,93,94,95,96,97,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122]],
['requestid',[3,4,6,10,13,89,90,98,102,103,105,119,121]],
['válasz',[3,4,6,7,8,12,13,39,89,93,99,110,120,122]],
['azonosítója',[3,4,6,89,90,92,93,97,103,105,106,116,118]],
['minden',[3,4,6,22]],
['üzenetváltásnál',[3,4,6]],
['adószámonként',[3,4,6]],
['egyedi',[3,4,6]],
['identifier',[3,4,6,89,90,92,93,97,103,105,106,116,118]],
['response',[3,4,6,7,8,12,13,28,38,39,89,93,99,110,120,122]],
['unique',[3,4,6]],
['with',[3,4,6]],
['taxnumber',[3,4,6,11,32,37]],
['every',[3,4,6,22,38,39]],
['exchange',[3,4,6]],
['transaction',[3,4,6]],
['keletkezésének',[3,4,8]],
['ideje',[3,4,8,89,93,96,116,117]],
['time',[3,4,8,89,93,96,116,117]],
['requestversion',[3,4,7,10,13,90,98,119,121]],
['verziószáma',[3,4,5,7]],
['hogy',[3,4,7]],
['hívó',[3,4,7]],
['melyik',[3,4,7]],
['interfész',[3,4,7]],
['verzió',[3,4,7]],
['küld',[3,4,7]],
['adatot',[3,4,7]],
['várja',[3,4,7]],
['választ',[3,4,7]],
['indicating',[3,4,7]],
['which',[3,4,7]],
['datastructure',[3,4,7]],
['client',[3,4,7]],
['sends',[3,4,7]],
['expected',[3,4,7]],
['headerversion',[3,4,5,10,13,90,98,119,121]],
['minoccurs',[3,4,5,15,16,18,19,28,29,30,32,35,89,90,91,92,93,95,99,100,101,102,114,115]],
['header',[3,4,5,9,10,12,13,22,38,93,99,120,122]],
['basicrequesttype',[3,9]],
['alap',[3,9,12,14,15]],
['adatok',[3,9,12,14,15,89,93,95,101,102,114,115]],
['basic',[3,9,12,14,15]],
['user',[3,9,11,32,33,34,35,37]],
['userheadertype',[3,9,11,32]],
['authentikációs',[3,9,11,32]],
['authentication',[3,9,11,32]],
['basicresponsetype',[3,12,22,89,93,99]],
['basicresulttype',[3,12,14,15,39]],
['válaszeredmény',[3,12,14,15]],
['funccode',[3,14,15,17,39]],
['feldolgozási',[3,15,16,17,18,28,29]],
['processing',[3,15,16,17,18,28,29]],
['errorcode',[3,14,15,16,39]],
['hibakód',[3,15,16,28,30]],
['message',[3,14,15,18,28,29,39]],
['üzenet',[3,15,18,28,29]],
['notifications',[3,14,15,19,23,39]],
['notificationstype',[3,15,19,23]],
['egyéb',[3,15,19,23]],
['értesítések',[3,15,19,23]],
['miscellaneous',[3,15,19,23]],
['cryptotype',[3,20,21,32,34,36]],
['kriptográfiai',[3,20]],
['metódust',[3,20]],
['denoting',[3,20]],
['cryptographic',[3,20]],
['method',[3,20]],
['simplecontent',[3,20]],
['extension',[3,20,22,38,39,89,90,93,98,99,119,120,121,122]],
['attribute',[3,20,21]],
['required',[3,20,21,34,36]],
['generalerrorheaderresponsetype',[3,22,38]],
['hibatípus',[3,22]],
['rest',[3,22,38,39]],
['operációra',[3,22,38,39]],
['fault',[3,22]],
['complexcontent',[3,22,38,39,89,90,93,98,99,119,120,121,122]],
['notification',[3,19,23,24,25,26,27,89,90,93,95,98,99,100,101,102,103,104,114,115,116,119,120,121,122]],
['notificationtype',[3,23,24,25]],
['maxoccurs',[3,23,24,89,101,102,114,115]],
['unbounded',[3,19,23,24]],
['Értesítés',[]],
['notificationcode',[3,24,25,26]],
['notificationtext',[3,24,25,27]],
['text',[3,25,27]],
['technicalvalidationresulttype',[3,28]],
['validációs',[3,28,30,31]],
['választípus',[3,28]],
['validation',[3,28,30,31]],
['validationresultcode',[3,28,31]],
['validationerrorcode',[3,28,30]],
['felhasználó',[3,32,33,34,35,37]],
['neve',[3,32,33]],
['passwordhash',[3,11,32,34]],
['jelszavának',[3,32,34]],
['hash',[3,32,34,36]],
['értéke',[3,32,34,36]],
['password',[3,32,34]],
['rendszerben',[3,32,37]],
['regisztrált',[3,32,37]],
['adózó',[3,32,37]],
['adószáma',[3,32,35,37]],
['nevében',[3,32,35,37]],
['tevékenykedik',[3,32,35,37]],
['taxpayer',[3,32,35,37]],
['whose',[3,32,35,37]],
['operates',[3,32,35,37]],
['predecessortaxnumber',[3,11,32,35]],
['jogelőd',[3,32,35]],
['requestsignature',[3,11,32,36]],
['aláírásának',[3,32,36]],
['signature',[3,32,36]],
['--Általános',[]],
['responses--',[3]],
['generalerrorheaderresponse',[3,38]],
['összes',[3,38,39,89,110,113]],
['vonatkozó',[3,38,39]],
['hibaválasz',[3,38]],
['generikus',[3,38,39]],
['elementje',[3,38,39]],
['general',[3,38,39]],
['generalexceptionresponse',[3,39]],
['kivétel',[3,39]],
['exception',[3,39]],
['navinotification',[89]],
['customer',[89,90,93,101,103,119,120]],
['import',[89]],
['namespace',[89]],
['schemalocation',[89]],
['ereceipt',[89]],
['simple',[89]],
['types',[89]],
['min1max1000type',[89,107,109,110,112,123]],
['között',[89,123]],
['beleértve',[89,123]],
['between',[89,123]],
['inclusive',[89,123]],
['maxinclusive',[89,123]],
['groups',[89]],
['complex',[89]],
['requestpaginationtype',[89,90,91,107]],
['lapozás',[89,90,91,93,94,107,110]],
['lekérdezés',[89,90,92,93,96,97,101,103,105,107,116,117,118,119,120]],
['objektum',[89,90,93,98,99,101,103,107,110,114,116]],
['típusa',[89,90,93,98,99,101,103,107,110,114,116]],
['pagination',[89,90,91,93,94,107,110,119,120]],
['object',[89,90,93,98,99,101,103,107,110,114,116,119,120,121,122]],
['rowcount',[89,91,94,107,109,110,112]],
['lekérdezésben',[89,107,108,109,110,111,112,113]],
['szereplő',[89,107,108,109,110,111,112,113]],
['sorok',[89,107,109,110,112,113]],
['maximális',[89,107,109,110,112]],
['száma',[89,107,108,109,110,111,112,113]],
['rows',[89,93,95,99,100,107,109,110,112,113,120,122]],
['query',[89,90,92,93,96,97,101,103,107,108,109,110,111,112,113,116,117,118,119,120]],
['oldal',[89,107,108,110,111]],
['responsepaginationtype',[89,93,94,110]],
['totalrowcount',[89,94,110,113]],
['nonnegativeinteger',[89,93,96,110,113,116,117]],
['total',[89,110,113]],
['getnotificationrequesttype',[89,90,119]],
['Ügyfél',[]],
['notifikációk',[89,90,93,101,103,119,120]],
['sessionid',[89,90,92,93,97,115,116,118,119,120]],
['munkamenet',[89,90,92,93,96,97,116,117,118]],
['session',[89,90,92,93,96,97,99,100,114,115,116,117,118]],
['paraméterei',[89,90,91,93,94]],
['parameters',[89,90,91,93,94]],
['notificationrowtype',[89,101,102,103]],
['userid',[89,102,103,106]],
['eszköz',[89,103,106]],
['device',[89,103,106]],
['notificationtoken',[89,102,103,104]],
['base64binary',[89,103,104]],
['feliratkozás',[89,103,104]],
['esetén',[89,103,104]],
['bizonylat',[89,103,104]],
['lekérdezhetővé',[89,103,104]],
['válásakor',[89,103,104]],
['értesítés',[3,23,24,25,26,27,89,103,104]],
['szolgáltatónak',[89,103,104]],
['átadandó',[89,103,104]],
['értesítési',[89,103,104]],
['token',[89,103,104]],
['case',[89,103,104]],
['subscription',[89,103,104]],
['forwarded',[89,103,104]],
['service',[89,103,104]],
['provider',[89,103,104]],
['when',[89,103,104]],
['receipt',[89,103,104]],
['becomes',[89,103,104]],
['queryable',[89,103,104]],
['notificationrowstype',[89,93,95,101]],
['lista',[89,93,95,99,100,101,114]],
['list',[89,93,95,101,114]],
['notifikációs',[89,93,95,98,99,100,101,102,114,115,116,121,122]],
['getnotificationresponsetype',[89,93,120]],
['sessionexpirein',[89,93,96,115,116,117,120]],
['lejárati',[89,93,96,116,117]],
['másodpercekben',[89,93,96,116,117]],
['expiration',[89,93,96,116,117]],
['seconds',[89,93,96,116,117]],
['sessionrowtype',[89,114,115,116]],
['aktív',[89,98,99,100,114,115,116,121,122]],
['active',[89,98,99,100,114,115,116,121,122]],
['sessionrowstype',[89,99,100,114]],
['getsessionrequesttype',[89,98,121]],
['sessionok',[89,98,99,121,122]],
['sessions',[89,98,99,121,122]],
['getsessionresponsetype',[89,99,122]],
['elements',[89]],
['getnotificationrequest',[89,119]],
['objektuma',[89,119,120,121,122]],
['getnotificationresponse',[89,120]],
['getsessionrequest',[89,121]],
['getsessionresponse',[89,122]]
 ];
 return w;
}
        