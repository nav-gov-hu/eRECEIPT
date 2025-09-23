
function CreateFileRefs()
{
var fr=new Array();
            
fr[1]=['http://schemas.nav.gov.hu/EDOCUMENTSTORE/1.1/api', 'http___schemas_nav_gov_hu_edocumentstore_1_1_api.html'];
fr[2]=['http://schemas.nav.gov.hu/EDOCUMENTSTORE/1.1/message', 'http___schemas_nav_gov_hu_edocumentstore_1_1_message.html'];
fr[3]=['http://schemas.nav.gov.hu/NTCA/1.0/common', 'http___schemas_nav_gov_hu_ntca_1_0_common.html'];
fr[4]=['http://schemas.nav.gov.hu/ERECEIPT/1.1/communicationData', 'http___schemas_nav_gov_hu_ereceipt_1_1_communicationdata.html'];
fr[5]=['http://schemas.nav.gov.hu/ERECEIPT/1.1/base', 'http___schemas_nav_gov_hu_ereceipt_1_1_base.html'];
fr[6]=['eDocumentStoreApi.xsd', 'edocumentstoreapi_xsd.html'];
fr[7]=['AppRegistrationRequestType', 'appregistrationrequesttype.html'];
fr[8]=['software', 'software.html'];
fr[9]=['userId', 'userid.html'];
fr[10]=['AppRegistrationResponseType', 'appregistrationresponsetype.html'];
fr[11]=['appExpiresIn', 'appexpiresin.html'];
fr[12]=['appToken', 'apptoken.html'];
fr[13]=['ClientEventRequestType', 'clienteventrequesttype.html'];
fr[14]=['eventCode', 'eventcode.html'];
fr[15]=['eventDescription', 'eventdescription.html'];
fr[16]=['eventTimestamp', 'eventtimestamp.html'];
fr[17]=['documentNumber', 'documentnumber.html'];
fr[18]=['issueEndDateTime', 'issueenddatetime.html'];
fr[19]=['searchKey', 'searchkey.html'];
fr[20]=['searchKeyTimestamp', 'searchkeytimestamp.html'];
fr[21]=['ClientEventResponseType', 'clienteventresponsetype.html'];
fr[22]=['GetDocumentRequestType', 'getdocumentrequesttype.html'];
fr[23]=['notificationToken', 'notificationtoken.html'];
fr[24]=['searchKey', 'searchkey1.html'];
fr[25]=['searchKeyTimestamp', 'searchkeytimestamp1.html'];
fr[26]=['documentGrossAmountHUF', 'documentgrossamounthuf.html'];
fr[27]=['documentNumber', 'documentnumber1.html'];
fr[28]=['issueEndDateTime', 'issueenddatetime1.html'];
fr[29]=['QRCodeSignature', 'qrcodesignature.html'];
fr[30]=['QRCodeSignCertSerial', 'qrcodesigncertserial.html'];
fr[31]=['GetDocumentResponseType', 'getdocumentresponsetype.html'];
fr[32]=['documentClass', 'documentclass.html'];
fr[33]=['documentEnvelope', 'documentenvelope.html'];
fr[34]=['reportClass', 'reportclass.html'];
fr[35]=['reportEnvelope', 'reportenvelope.html'];
fr[36]=['groupIdentificationNumber', 'groupidentificationnumber.html'];
fr[37]=['ntcaVerificationCode', 'ntcaverificationcode.html'];
fr[38]=['offlineCreated', 'offlinecreated.html'];
fr[39]=['searchKey', 'searchkey2.html'];
fr[40]=['searchKeyTimestamp', 'searchkeytimestamp2.html'];
fr[41]=['subscriptionExpirationTime', 'subscriptionexpirationtime.html'];
fr[42]=['taxNumber', 'taxnumber.html'];
fr[43]=['AppRegistrationRequest', 'appregistrationrequest.html'];
fr[44]=['AppRegistrationResponse', 'appregistrationresponse.html'];
fr[45]=['ClientEventRequest', 'clienteventrequest.html'];
fr[46]=['ClientEventResponse', 'clienteventresponse.html'];
fr[47]=['GetDocumentRequest', 'getdocumentrequest.html'];
fr[48]=['GetDocumentResponse', 'getdocumentresponse.html'];
fr[49]=['eDocumentStoreMessage.xsd', 'edocumentstoremessage_xsd.html'];
fr[50]=['BasicEDocumentStoreRequestType', 'basicedocumentstorerequesttype.html'];
fr[51]=['AtomicStringType8192', 'atomicstringtype8192.html'];
fr[52]=['JwtTokenType', 'jwttokentype.html'];
fr[53]=['common.xsd', 'common_xsd.html'];
fr[54]=['BasicHeaderType', 'basicheadertype.html'];
fr[55]=['headerVersion', 'headerversion.html'];
fr[56]=['requestId', 'requestid.html'];
fr[57]=['requestVersion', 'requestversion.html'];
fr[58]=['timestamp', 'timestamp.html'];
fr[59]=['BasicRequestType', 'basicrequesttype.html'];
fr[60]=['header', 'header.html'];
fr[61]=['user', 'user.html'];
fr[62]=['BasicResponseType', 'basicresponsetype.html'];
fr[63]=['header', 'header1.html'];
fr[64]=['result', 'result.html'];
fr[65]=['BasicResultType', 'basicresulttype.html'];
fr[66]=['errorCode', 'errorcode.html'];
fr[67]=['funcCode', 'funccode.html'];
fr[68]=['message', 'message.html'];
fr[69]=['notifications', 'notifications.html'];
fr[70]=['CryptoType', 'cryptotype.html'];
fr[71]=['cryptoType', 'cryptotype1.html'];
fr[72]=['GeneralErrorHeaderResponseType', 'generalerrorheaderresponsetype.html'];
fr[73]=['NotificationsType', 'notificationstype.html'];
fr[74]=['notification', 'notification.html'];
fr[75]=['NotificationType', 'notificationtype.html'];
fr[76]=['notificationCode', 'notificationcode.html'];
fr[77]=['notificationText', 'notificationtext.html'];
fr[78]=['TechnicalValidationResultType', 'technicalvalidationresulttype.html'];
fr[79]=['message', 'message1.html'];
fr[80]=['validationErrorCode', 'validationerrorcode.html'];
fr[81]=['validationResultCode', 'validationresultcode.html'];
fr[82]=['UserHeaderType', 'userheadertype.html'];
fr[83]=['login', 'login.html'];
fr[84]=['passwordHash', 'passwordhash.html'];
fr[85]=['predecessorTaxNumber', 'predecessortaxnumber.html'];
fr[86]=['requestSignature', 'requestsignature.html'];
fr[87]=['taxNumber', 'taxnumber1.html'];
fr[88]=['GeneralErrorHeaderResponse', 'generalerrorheaderresponse.html'];
fr[89]=['GeneralExceptionResponse', 'generalexceptionresponse.html'];
fr[90]=['AtomicStringType100', 'atomicstringtype100.html'];
fr[91]=['AtomicStringType1024', 'atomicstringtype1024.html'];
fr[92]=['AtomicStringType128', 'atomicstringtype128.html'];
fr[93]=['AtomicStringType15', 'atomicstringtype15.html'];
fr[94]=['AtomicStringType16', 'atomicstringtype16.html'];
fr[95]=['AtomicStringType2', 'atomicstringtype2.html'];
fr[96]=['AtomicStringType200', 'atomicstringtype200.html'];
fr[97]=['AtomicStringType2048', 'atomicstringtype2048.html'];
fr[98]=['AtomicStringType255', 'atomicstringtype255.html'];
fr[99]=['AtomicStringType256', 'atomicstringtype256.html'];
fr[100]=['AtomicStringType32', 'atomicstringtype32.html'];
fr[101]=['AtomicStringType4', 'atomicstringtype4.html'];
fr[102]=['AtomicStringType4000', 'atomicstringtype4000.html'];
fr[103]=['AtomicStringType50', 'atomicstringtype50.html'];
fr[104]=['AtomicStringType512', 'atomicstringtype512.html'];
fr[105]=['AtomicStringType64', 'atomicstringtype64.html'];
fr[106]=['AtomicStringType8', 'atomicstringtype8.html'];
fr[107]=['BankAccountNumberType', 'bankaccountnumbertype.html'];
fr[108]=['BusinessResultCodeType', 'businessresultcodetype.html'];
fr[109]=['CommunityVatNumberType', 'communityvatnumbertype.html'];
fr[110]=['CountryCodeType', 'countrycodetype.html'];
fr[111]=['CountyCodeType', 'countycodetype.html'];
fr[112]=['CurrencyType', 'currencytype.html'];
fr[113]=['EntityIdType', 'entityidtype.html'];
fr[114]=['FunctionCodeType', 'functioncodetype.html'];
fr[115]=['GenericDateType', 'genericdatetype.html'];
fr[116]=['GenericDecimalType', 'genericdecimaltype.html'];
fr[117]=['GenericTimestampType', 'generictimestamptype.html'];
fr[118]=['GenericUnsignedIntegerType', 'genericunsignedintegertype.html'];
fr[119]=['LocalizationType', 'localizationtype.html'];
fr[120]=['LoginType', 'logintype.html'];
fr[121]=['PlateNumberType', 'platenumbertype.html'];
fr[122]=['PostalCodeType', 'postalcodetype.html'];
fr[123]=['RequestPageType', 'requestpagetype.html'];
fr[124]=['ResponsePageType', 'responsepagetype.html'];
fr[125]=['SHA256Type', 'sha256type.html'];
fr[126]=['SHA512Type', 'sha512type.html'];
fr[127]=['SimpleText100NotBlankType', 'simpletext100notblanktype.html'];
fr[128]=['SimpleText1024NotBlankType', 'simpletext1024notblanktype.html'];
fr[129]=['SimpleText15NotBlankType', 'simpletext15notblanktype.html'];
fr[130]=['SimpleText200NotBlankType', 'simpletext200notblanktype.html'];
fr[131]=['SimpleText255NotBlankType', 'simpletext255notblanktype.html'];
fr[132]=['SimpleText50NotBlankType', 'simpletext50notblanktype.html'];
fr[133]=['SimpleText512NotBlankType', 'simpletext512notblanktype.html'];
fr[134]=['SwiftCodeType', 'swiftcodetype.html'];
fr[135]=['TaxIdentificationNumberType', 'taxidentificationnumbertype.html'];
fr[136]=['TaxpayerIdType', 'taxpayeridtype.html'];
fr[137]=['TechnicalResultCodeType', 'technicalresultcodetype.html'];
fr[138]=['VatCodeType', 'vatcodetype.html'];
fr[139]=['communicationData.xsd', 'communicationdata_xsd.html'];
fr[140]=['AeInternalMetric', 'aeinternalmetric.html'];
fr[141]=['aeInternalMetricId', 'aeinternalmetricid.html'];
fr[142]=['aeInternalMetricValue', 'aeinternalmetricvalue.html'];
fr[143]=['AeInternalMetricListType', 'aeinternalmetriclisttype.html'];
fr[144]=['aeInternalMetric', 'aeinternalmetric1.html'];
fr[145]=['AeStateType', 'aestatetype.html'];
fr[146]=['aeInternalMetric', 'aeinternalmetric2.html'];
fr[147]=['batteryLevel', 'batterylevel.html'];
fr[148]=['freeStorage', 'freestorage.html'];
fr[149]=['gsmCell', 'gsmcell.html'];
fr[150]=['mobileConnection', 'mobileconnection.html'];
fr[151]=['provider', 'provider.html'];
fr[152]=['signalStrength', 'signalstrength.html'];
fr[153]=['AppSoftwareType', 'appsoftwaretype.html'];
fr[154]=['softwareId', 'softwareid.html'];
fr[155]=['softwareMainVersion', 'softwaremainversion.html'];
fr[156]=['softwareOperation', 'softwareoperation.html'];
fr[157]=['CashRegisterEventType', 'cashregistereventtype.html'];
fr[158]=['eventCode', 'eventcode1.html'];
fr[159]=['eventDescription', 'eventdescription1.html'];
fr[160]=['CashRegisterInfoType', 'cashregisterinfotype.html'];
fr[161]=['cashRegisterEvent', 'cashregisterevent.html'];
fr[162]=['cashRegisterPosition', 'cashregisterposition.html'];
fr[163]=['cashRegisterState', 'cashregisterstate.html'];
fr[164]=['cashRegisterTechnicalInfo', 'cashregistertechnicalinfo.html'];
fr[165]=['cashRegisterTimeUpdate', 'cashregistertimeupdate.html'];
fr[166]=['CashRegisterPositionType', 'cashregisterpositiontype.html'];
fr[167]=['height', 'height.html'];
fr[168]=['latitude', 'latitude.html'];
fr[169]=['longitude', 'longitude.html'];
fr[170]=['CashRegisterStateType', 'cashregisterstatetype.html'];
fr[171]=['aeBlockUnblockState', 'aeblockunblockstate.html'];
fr[172]=['aeState', 'aestate.html'];
fr[173]=['cashRegisterWorkState', 'cashregisterworkstate.html'];
fr[174]=['errors', 'errors.html'];
fr[175]=['fiscalDayState', 'fiscaldaystate.html'];
fr[176]=['lastRecordCounter', 'lastrecordcounter.html'];
fr[177]=['lastSentRecordCounter', 'lastsentrecordcounter.html'];
fr[178]=['CashRegisterTechnicalInfoType', 'cashregistertechnicalinfotype.html'];
fr[179]=['cashRegisterSoftware', 'cashregistersoftware.html'];
fr[180]=['communicationProtocolVersion', 'communicationprotocolversion.html'];
fr[181]=['epdProcessIdentifiers', 'epdprocessidentifiers.html'];
fr[182]=['hardwareTechnicalInfo', 'hardwaretechnicalinfo.html'];
fr[183]=['imei', 'imei.html'];
fr[184]=['imsi', 'imsi.html'];
fr[185]=['operatorSite', 'operatorsite.html'];
fr[186]=['posAssignedBankAccounts', 'posassignedbankaccounts.html'];
fr[187]=['registrationNumber', 'registrationnumber.html'];
fr[188]=['schemaVersion', 'schemaversion.html'];
fr[189]=['vat', 'vat.html'];
fr[190]=['CashRegisterTimeUpdateType', 'cashregistertimeupdatetype.html'];
fr[191]=['changeDuration', 'changeduration.html'];
fr[192]=['changeMode', 'changemode.html'];
fr[193]=['newTime', 'newtime.html'];
fr[194]=['oldTime', 'oldtime.html'];
fr[195]=['EndpointsListType', 'endpointslisttype.html'];
fr[196]=['endpoints', 'endpoints.html'];
fr[197]=['EndpointType', 'endpointtype.html'];
fr[198]=['httpMethod', 'httpmethod.html'];
fr[199]=['sequence', 'sequence.html'];
fr[200]=['service', 'service.html'];
fr[201]=['url', 'url.html'];
fr[202]=['EpdProcessIdentifiersType', 'epdprocessidentifierstype.html'];
fr[203]=['currentAeBlockUnblockStateProcessId', 'currentaeblockunblockstateprocessid.html'];
fr[204]=['currentOperatorSiteProcessId', 'currentoperatorsiteprocessid.html'];
fr[205]=['currentSoftwareProcessId', 'currentsoftwareprocessid.html'];
fr[206]=['currentVatProcessId', 'currentvatprocessid.html'];
fr[207]=['nextOperatorSiteProcessId', 'nextoperatorsiteprocessid.html'];
fr[208]=['nextSoftwareProcessId', 'nextsoftwareprocessid.html'];
fr[209]=['nextVatProcessId', 'nextvatprocessid.html'];
fr[210]=['FirmwareSliceType', 'firmwareslicetype.html'];
fr[211]=['firmwareDownloadUrl', 'firmwaredownloadurl.html'];
fr[212]=['firmwareHash', 'firmwarehash.html'];
fr[213]=['firmwareSliceNumber', 'firmwareslicenumber.html'];
fr[214]=['HardwareTechnicalInfoType', 'hardwaretechnicalinfotype.html'];
fr[215]=['aeHardwareVersion', 'aehardwareversion.html'];
fr[216]=['aeName', 'aename.html'];
fr[217]=['aeSoftware', 'aesoftware.html'];
fr[218]=['cashRegisterHardwareVersion', 'cashregisterhardwareversion.html'];
fr[219]=['cashRegisterName', 'cashregistername.html'];
fr[220]=['modemName', 'modemname.html'];
fr[221]=['modemSoftwareVersion', 'modemsoftwareversion.html'];
fr[222]=['OperatorSiteType', 'operatorsitetype.html'];
fr[223]=['coTaxPayer', 'cotaxpayer.html'];
fr[224]=['operatorSiteValidFrom', 'operatorsitevalidfrom.html'];
fr[225]=['shop', 'shop.html'];
fr[226]=['taxPayer', 'taxpayer.html'];
fr[227]=['PosAssignedBankAccountListType', 'posassignedbankaccountlisttype.html'];
fr[228]=['posAssignedBankAccountNumber', 'posassignedbankaccountnumber.html'];
fr[229]=['ProductItemType', 'productitemtype.html'];
fr[230]=['categoryCode', 'categorycode.html'];
fr[231]=['categoryNameLevel4', 'categorynamelevel4.html'];
fr[232]=['dtszkId', 'dtszkid.html'];
fr[233]=['productId', 'productid.html'];
fr[234]=['productManufacturer', 'productmanufacturer.html'];
fr[235]=['productName', 'productname.html'];
fr[236]=['state', 'state.html'];
fr[237]=['unitOfMeasure', 'unitofmeasure.html'];
fr[238]=['validFrom', 'validfrom.html'];
fr[239]=['validTo', 'validto.html'];
fr[240]=['vtsz', 'vtsz.html'];
fr[241]=['ProductListType', 'productlisttype.html'];
fr[242]=['productItem', 'productitem.html'];
fr[243]=['SoftwareType', 'softwaretype.html'];
fr[244]=['softwareDevContact', 'softwaredevcontact.html'];
fr[245]=['softwareDevCountryCode', 'softwaredevcountrycode.html'];
fr[246]=['softwareDevName', 'softwaredevname.html'];
fr[247]=['softwareDevTaxNumber', 'softwaredevtaxnumber.html'];
fr[248]=['softwareHash', 'softwarehash.html'];
fr[249]=['softwareId', 'softwareid1.html'];
fr[250]=['softwareLastUpdateTime', 'softwarelastupdatetime.html'];
fr[251]=['softwareMainVersion', 'softwaremainversion1.html'];
fr[252]=['softwareName', 'softwarename.html'];
fr[253]=['softwareOperation', 'softwareoperation1.html'];
fr[254]=['TaxpayerAddressItemType', 'taxpayeraddressitemtype.html'];
fr[255]=['taxpayerAddress', 'taxpayeraddress.html'];
fr[256]=['taxpayerAddressClass', 'taxpayeraddressclass.html'];
fr[257]=['TaxpayerAddressListType', 'taxpayeraddresslisttype.html'];
fr[258]=['taxpayerAddressItem', 'taxpayeraddressitem.html'];
fr[259]=['TaxpayerDataType', 'taxpayerdatatype.html'];
fr[260]=['incorporation', 'incorporation.html'];
fr[261]=['taxNumberDetail', 'taxnumberdetail.html'];
fr[262]=['taxpayerAddressList', 'taxpayeraddresslist.html'];
fr[263]=['taxpayerName', 'taxpayername.html'];
fr[264]=['taxpayerShortName', 'taxpayershortname.html'];
fr[265]=['vatGroupMembership', 'vatgroupmembership.html'];
fr[266]=['TeaorCodeListType', 'teaorcodelisttype.html'];
fr[267]=['teaorCode', 'teaorcode.html'];
fr[268]=['VatGroupType', 'vatgrouptype.html'];
fr[269]=['collectorCode', 'collectorcode.html'];
fr[270]=['vatContent', 'vatcontent.html'];
fr[271]=['vatLabel', 'vatlabel.html'];
fr[272]=['vatPercentage', 'vatpercentage.html'];
fr[273]=['VatListType', 'vatlisttype.html'];
fr[274]=['vat', 'vat1.html'];
fr[275]=['VatType', 'vattype.html'];
fr[276]=['vatGroup', 'vatgroup.html'];
fr[277]=['vatValidFrom', 'vatvalidfrom.html'];
fr[278]=['AeBlockUnblockStateType', 'aeblockunblockstatetype.html'];
fr[279]=['BlockUnblockType', 'blockunblocktype.html'];
fr[280]=['CashRegisterWorkStateType', 'cashregisterworkstatetype.html'];
fr[281]=['CertificateSigningRequestType', 'certificatesigningrequesttype.html'];
fr[282]=['CertificateType', 'certificatetype.html'];
fr[283]=['CertificateTypeType', 'certificatetypetype.html'];
fr[284]=['CMSCertificateSigningRequestType', 'cmscertificatesigningrequesttype.html'];
fr[285]=['EventCodeType', 'eventcodetype.html'];
fr[286]=['FiscalDayStateType', 'fiscaldaystatetype.html'];
fr[287]=['GpsType', 'gpstype.html'];
fr[288]=['HttpMethodType', 'httpmethodtype.html'];
fr[289]=['IncorporationType', 'incorporationtype.html'];
fr[290]=['MobileConnectionType', 'mobileconnectiontype.html'];
fr[291]=['PercentageType', 'percentagetype.html'];
fr[292]=['PrintMessageType', 'printmessagetype.html'];
fr[293]=['ProductStateType', 'productstatetype.html'];
fr[294]=['QueryCertificateResultType', 'querycertificateresulttype.html'];
fr[295]=['RegistrationNumberType', 'registrationnumbertype.html'];
fr[296]=['ServiceType', 'servicetype.html'];
fr[297]=['SoftwareIdType', 'softwareidtype.html'];
fr[298]=['SoftwareOperationType', 'softwareoperationtype.html'];
fr[299]=['TaxpayerAddressClassType', 'taxpayeraddressclasstype.html'];
fr[300]=['TeaorCodeType', 'teaorcodetype.html'];
fr[301]=['UnitOfMeasureType', 'unitofmeasuretype.html'];
fr[302]=['UrlType', 'urltype.html'];
fr[303]=['eReceiptBase.xsd', 'ereceiptbase_xsd.html'];
fr[304]=['AdditionalDataType', 'additionaldatatype.html'];
fr[305]=['dataDescription', 'datadescription.html'];
fr[306]=['dataName', 'dataname.html'];
fr[307]=['dataValue', 'datavalue.html'];
fr[308]=['AdditionalHeadType', 'additionalheadtype.html'];
fr[309]=['additionalData', 'additionaldata.html'];
fr[310]=['AdditionalLinesType', 'additionallinestype.html'];
fr[311]=['additionalLine', 'additionalline.html'];
fr[312]=['AdditionalLineType', 'additionallinetype.html'];
fr[313]=['additionalLineData', 'additionallinedata.html'];
fr[314]=['lineNumber', 'linenumber.html'];
fr[315]=['AddressType', 'addresstype.html'];
fr[316]=['detailedAddress', 'detailedaddress.html'];
fr[317]=['simpleAddress', 'simpleaddress.html'];
fr[318]=['AttachmentType', 'attachmenttype.html'];
fr[319]=['fileBinary', 'filebinary.html'];
fr[320]=['fileExtension', 'fileextension.html'];
fr[321]=['BasicEReceiptRequestType', 'basicereceiptrequesttype.html'];
fr[322]=['APNumber', 'apnumber.html'];
fr[323]=['BasicEReceiptResponseType', 'basicereceiptresponsetype.html'];
fr[324]=['APNumber', 'apnumber1.html'];
fr[325]=['callbackRequired', 'callbackrequired.html'];
fr[326]=['CommerceCollectorListType', 'commercecollectorlisttype.html'];
fr[327]=['commercialCollector', 'commercialcollector.html'];
fr[328]=['CommerceCollectorType', 'commercecollectortype.html'];
fr[329]=['collectorCode', 'collectorcode1.html'];
fr[330]=['collectorGrossAmount', 'collectorgrossamount.html'];
fr[331]=['collectorNetAmount', 'collectornetamount.html'];
fr[332]=['collectorVatAmount', 'collectorvatamount.html'];
fr[333]=['CustomerInfoType', 'customerinfotype.html'];
fr[334]=['customerAddress', 'customeraddress.html'];
fr[335]=['customerBankAccountNumber', 'customerbankaccountnumber.html'];
fr[336]=['customerName', 'customername.html'];
fr[337]=['customerVatData', 'customervatdata.html'];
fr[338]=['customerVatStatus', 'customervatstatus.html'];
fr[339]=['CustomerTaxNumberType', 'customertaxnumbertype.html'];
fr[340]=['groupMemberTaxNumber', 'groupmembertaxnumber.html'];
fr[341]=['CustomerVatDataType', 'customervatdatatype.html'];
fr[342]=['communityVatNumber', 'communityvatnumber.html'];
fr[343]=['customerTaxNumber', 'customertaxnumber.html'];
fr[344]=['thirdStateTaxId', 'thirdstatetaxid.html'];
fr[345]=['DailyCashFlowDetailListType', 'dailycashflowdetaillisttype.html'];
fr[346]=['dailyCashFlowDetail', 'dailycashflowdetail.html'];
fr[347]=['DailyCashFlowDetailType', 'dailycashflowdetailtype.html'];
fr[348]=['amount', 'amount.html'];
fr[349]=['commerceCollectorList', 'commercecollectorlist.html'];
fr[350]=['count', 'count.html'];
fr[351]=['fulfillmentDate', 'fulfillmentdate.html'];
fr[352]=['DetailedAddressType', 'detailedaddresstype.html'];
fr[353]=['building', 'building.html'];
fr[354]=['city', 'city.html'];
fr[355]=['countryCode', 'countrycode.html'];
fr[356]=['door', 'door.html'];
fr[357]=['floor', 'floor.html'];
fr[358]=['lotNumber', 'lotnumber.html'];
fr[359]=['number', 'number.html'];
fr[360]=['postalCode', 'postalcode.html'];
fr[361]=['publicPlaceCategory', 'publicplacecategory.html'];
fr[362]=['region', 'region.html'];
fr[363]=['staircase', 'staircase.html'];
fr[364]=['streetName', 'streetname.html'];
fr[365]=['DocumentAdditionalDataType', 'documentadditionaldatatype.html'];
fr[366]=['additionalHead', 'additionalhead.html'];
fr[367]=['additionalLines', 'additionallines.html'];
fr[368]=['attachment', 'attachment.html'];
fr[369]=['documentNumber', 'documentnumber2.html'];
fr[370]=['DocumentControlDataType', 'documentcontroldatatype.html'];
fr[371]=['balanceChange', 'balancechange.html'];
fr[372]=['documentNumber', 'documentnumber3.html'];
fr[373]=['recordCounter', 'recordcounter.html'];
fr[374]=['ForeignCurrencyType', 'foreigncurrencytype.html'];
fr[375]=['currencyAmount', 'currencyamount.html'];
fr[376]=['currencyCode', 'currencycode.html'];
fr[377]=['currencyHufAmount', 'currencyhufamount.html'];
fr[378]=['exchangeRate', 'exchangerate.html'];
fr[379]=['FuelCardInfoType', 'fuelcardinfotype.html'];
fr[380]=['authorizationNumber', 'authorizationnumber.html'];
fr[381]=['fuelCardNumber', 'fuelcardnumber.html'];
fr[382]=['vehicleRegistrationNumber', 'vehicleregistrationnumber.html'];
fr[383]=['HealthFundInfoType', 'healthfundinfotype.html'];
fr[384]=['healthFundAddress', 'healthfundaddress.html'];
fr[385]=['healthFundCardNumber', 'healthfundcardnumber.html'];
fr[386]=['healthFundCode', 'healthfundcode.html'];
fr[387]=['healthFundMemberNumber', 'healthfundmembernumber.html'];
fr[388]=['healthFundName', 'healthfundname.html'];
fr[389]=['InstrumentType', 'instrumenttype.html'];
fr[390]=['afrAmount', 'aframount.html'];
fr[391]=['cardPaymentAmount', 'cardpaymentamount.html'];
fr[392]=['cashHufAmount', 'cashhufamount.html'];
fr[393]=['foreignCurrency', 'foreigncurrency.html'];
fr[394]=['otherPayment', 'otherpayment.html'];
fr[395]=['szepCardAmount', 'szepcardamount.html'];
fr[396]=['MetaDataType', 'metadatatype.html'];
fr[397]=['APNumber', 'apnumber2.html'];
fr[398]=['documentNumber', 'documentnumber4.html'];
fr[399]=['documentOperation', 'documentoperation.html'];
fr[400]=['electronicInvoiceHash', 'electronicinvoicehash.html'];
fr[401]=['taxpayerId', 'taxpayerid.html'];
fr[402]=['OtherPaymentType', 'otherpaymenttype.html'];
fr[403]=['otherPaymentCode', 'otherpaymentcode.html'];
fr[404]=['otherPaymentHufAmount', 'otherpaymenthufamount.html'];
fr[405]=['PaymentInstrumentsType', 'paymentinstrumentstype.html'];
fr[406]=['paymentInstrument', 'paymentinstrument.html'];
fr[407]=['PaymentInstrumentType', 'paymentinstrumenttype.html'];
fr[408]=['documentPaymentAmount', 'documentpaymentamount.html'];
fr[409]=['documentPaymentMethod', 'documentpaymentmethod.html'];
fr[410]=['ReportHeaderType', 'reportheadertype.html'];
fr[411]=['additionalData', 'additionaldata1.html'];
fr[412]=['coTaxPayer', 'cotaxpayer1.html'];
fr[413]=['issueStartDateTime', 'issuestartdatetime.html'];
fr[414]=['ntcaControlCode', 'ntcacontrolcode.html'];
fr[415]=['recordCounter', 'recordcounter1.html'];
fr[416]=['shop', 'shop1.html'];
fr[417]=['taxPayer', 'taxpayer1.html'];
fr[418]=['ShopType', 'shoptype.html'];
fr[419]=['shopName', 'shopname.html'];
fr[420]=['shopShortName', 'shopshortname.html'];
fr[421]=['SignedDocumentEnvelopeType', 'signeddocumentenvelopetype.html'];
fr[422]=['customerEnvelopeData', 'customerenvelopedata.html'];
fr[423]=['envelopeData', 'envelopedata.html'];
fr[424]=['envelopeHash', 'envelopehash.html'];
fr[425]=['envelopeSignature', 'envelopesignature.html'];
fr[426]=['envelopeVersion', 'envelopeversion.html'];
fr[427]=['SignedReportEnvelopeType', 'signedreportenvelopetype.html'];
fr[428]=['customerEnvelopeData', 'customerenvelopedata1.html'];
fr[429]=['envelopeData', 'envelopedata1.html'];
fr[430]=['envelopeHash', 'envelopehash1.html'];
fr[431]=['envelopeSignature', 'envelopesignature1.html'];
fr[432]=['envelopeVersion', 'envelopeversion1.html'];
fr[433]=['SimpleAddressType', 'simpleaddresstype.html'];
fr[434]=['additionalAddressDetail', 'additionaladdressdetail.html'];
fr[435]=['city', 'city1.html'];
fr[436]=['countryCode', 'countrycode1.html'];
fr[437]=['postalCode', 'postalcode1.html'];
fr[438]=['region', 'region1.html'];
fr[439]=['TaxNumberType', 'taxnumbertype.html'];
fr[440]=['countyCode', 'countycode.html'];
fr[441]=['taxpayerId', 'taxpayerid1.html'];
fr[442]=['vatCode', 'vatcode.html'];
fr[443]=['TaxPayerType', 'taxpayertype.html'];
fr[444]=['groupIdentificationNumber', 'groupidentificationnumber1.html'];
fr[445]=['taxNumber', 'taxnumber2.html'];
fr[446]=['taxPayerName', 'taxpayername1.html'];
fr[447]=['taxPayerShortName', 'taxpayershortname1.html'];
fr[448]=['APNumberType', 'apnumbertype.html'];
fr[449]=['AtomicCsrType', 'atomiccsrtype.html'];
fr[450]=['CancellationReasonType', 'cancellationreasontype.html'];
fr[451]=['CashPaymentTitleType', 'cashpaymenttitletype.html'];
fr[452]=['CollectorCodeType', 'collectorcodetype.html'];
fr[453]=['CustomerAppEventCodeType', 'customerappeventcodetype.html'];
fr[454]=['CustomerVatStatusType', 'customervatstatustype.html'];
fr[455]=['DataNameType', 'datanametype.html'];
fr[456]=['Digit4Type', 'digit4type.html'];
fr[457]=['DocumentCategoryType', 'documentcategorytype.html'];
fr[458]=['DocumentClassType', 'documentclasstype.html'];
fr[459]=['DocumentDateType', 'documentdatetype.html'];
fr[460]=['DocumentNumberType', 'documentnumbertype.html'];
fr[461]=['DocumentOperationType', 'documentoperationtype.html'];
fr[462]=['DocumentUnboundedIndexType', 'documentunboundedindextype.html'];
fr[463]=['EANType', 'eantype.html'];
fr[464]=['EncryptedSymmetricInitialVectorType', 'encryptedsymmetricinitialvectortype.html'];
fr[465]=['EncryptedSymmetricKeyType', 'encryptedsymmetrickeytype.html'];
fr[466]=['ExchangeRateType', 'exchangeratetype.html'];
fr[467]=['File512kBinaryType', 'file512kbinarytype.html'];
fr[468]=['FileExtensionType', 'fileextensiontype.html'];
fr[469]=['ItemNatureType', 'itemnaturetype.html'];
fr[470]=['LineNumberType', 'linenumbertype.html'];
fr[471]=['ModificationReasonType', 'modificationreasontype.html'];
fr[472]=['MonetaryType', 'monetarytype.html'];
fr[473]=['NtcaControlCodeType', 'ntcacontrolcodetype.html'];
fr[474]=['PaymentMethodType', 'paymentmethodtype.html'];
fr[475]=['ProcessIdentifierType', 'processidentifiertype.html'];
fr[476]=['ReportClassType', 'reportclasstype.html'];    
 return fr;          
}

function CreateWordIndex()
{
var w=[
            
['true',[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439,440,441,442,443,444,445,446,447,448,449,450,451,452,453,454,455,456,457,458,459,460,461,462,463,464,465,466,467,468,469,470,471,472,473,474,475,476]],
['vevői',[6,7,8,9,10,12,13,14,15,16,19,20,21,22,24,25,31,39,40,41,43,44,45,46,303,421,422,453]],
['alkalmazások',[6]],
['által',[6,7,9,139,145,152,178,180,188,190,192,285,302,303,374,378]],
['hívható',[6]],
['szolgáltatások',[6]],
['kérés-válasz',[6]],
['objektumait',[6]],
['leíró',[6,53,70,134,139,157,159,303,379,383]],
['describing',[6]],
['request-response',[6]],
['objects',[6]],
['services',[6,10,12,303,339,340]],
['that',[6,13,21,31,38,45,46,139,170,174,178,181,202,203,204,205,206,207,208,209,241,242,303,315,472]],
['called',[6,139,195,197,200]],
['customer',[6,7,8,9,10,12,13,14,15,16,19,20,22,24,25,31,39,40,43,44,303,333,334,335,336,337,341,365,383,387,421,422,450,453,469]],
['applications',[6,13,21,45,46]],
['version',[6,7,8,49,53,54,55,57,139,153,155,178,180,188,202,205,208,214,215,218,221,243,251,303,421,426,427,432]],
['27--',[6,49]],
['schema',[6,49,53,139,178,188,303]],
['targetnamespace',[6,49,53,139,303]],
['http',[6,13,17,22,23,26,27,29,30,31,41,49,53,139,288,303]],
['schemas',[6,49,53,139,303]],
['edocumentstore',[6,49]],
['elementformdefault',[6,49,53,139,303]],
['qualified',[6,49,53,139,303]],
['attributeformdefault',[6,49,53,139,303]],
['unqualified',[6,49,53,139,303]],
['xmlns',[6,13,17,22,23,26,27,29,30,31,41,49,53,139,303]],
['xmlschema',[6,13,17,22,23,26,27,29,30,31,41,49,53,139,303]],
['communication',[6,7,8,139,178,180]],
['ereceipt',[6,7,10,13,21,22,31,49,50,139,303,321,323]],
['communicationdata',[6,139,303]],
['base',[6,7,10,13,14,17,21,22,26,27,31,32,33,34,35,43,44,45,46,47,48,49,50,51,52,53,70,72,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,145,147,148,149,151,152,157,159,166,167,170,174,178,180,183,184,188,190,191,192,202,203,204,205,206,207,208,209,214,215,216,218,219,220,221,222,223,225,226,254,255,259,261,268,269,271,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,321,323,339,374,375,379,380,381,382,383,385,386,387,388,402,403,418,443,448,449,450,451,452,453,454,455,456,457,458,459,460,461,462,463,464,465,466,467,468,469,470,471,472,473,474,475,476]],
['common',[6,7,9,10,13,15,16,18,20,21,22,25,28,31,36,37,40,41,42,49,50,53,139,153,155,190,193,194,210,212,222,224,227,228,229,230,231,232,233,234,235,238,239,240,243,244,245,246,247,248,250,251,252,259,263,264,265,275,277,289,293,299,301,303,304,305,307,321,323,333,335,336,341,342,344,352,353,354,355,356,357,358,359,360,361,362,363,364,374,376,379,380,381,382,383,385,386,387,388,396,400,401,410,413,418,419,420,421,424,426,427,430,432,433,434,435,436,437,438,439,440,441,442,443,446,447,450,451,454,455,461,471,472,474]],
['ntca',[6,31,37,49,53,139,303,410,414,473]],
['message',[6,10,12,13,22,49,53,64,65,68,78,79,89,139,285,292]],
['import',[6,49,139,303]],
['namespace',[6,49,139,303]],
['schemalocation',[6,49,139,303]],
['edocumentstoremessage',[6]],
['ereceiptbase',[6,139]],
['annotation',[6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439,440,441,442,443,444,445,446,447,448,449,450,451,452,453,454,455,456,457,458,459,460,461,462,463,464,465,466,467,468,469,470,471,472,473,474,475,476]],
['documentation',[6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439,440,441,442,443,444,445,446,447,448,449,450,451,452,453,454,455,456,457,458,459,460,461,462,463,464,465,466,467,468,469,470,471,472,473,474,475,476]],
['lang',[6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439,440,441,442,443,444,445,446,447,448,449,450,451,452,453,454,455,456,457,458,459,460,461,462,463,464,465,466,467,468,469,470,471,472,473,474,475,476]],
['complextype',[6,7,10,13,21,22,31,43,44,45,46,47,48,49,50,53,54,59,62,65,70,72,73,75,78,82,88,89,139,140,143,145,153,157,160,166,170,178,190,195,197,202,210,214,222,227,229,241,243,254,257,259,266,268,273,275,303,304,308,310,312,315,318,321,323,326,328,333,339,341,345,347,352,365,370,374,379,383,389,396,402,405,407,410,418,421,427,433,439,443]],
['name',[6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439,440,441,442,443,444,445,446,447,448,449,450,451,452,453,454,455,456,457,458,459,460,461,462,463,464,465,466,467,468,469,470,471,472,473,474,475,476]],
['appregistrationrequesttype',[6,7,43]],
['alkalmazás',[6,7,8,9,10,12,43,44]],
['regisztrációját',[6,7,10,43,44]],
['megvalósító',[6,7,10,22,31,43,44,47,48]],
['szolgáltatás',[6,7,10,13,21,22,31,43,44,45,46,47,48,139,153,156,197,200,201,243,253,296,298,302,303,339,340]],
['kérés',[6,7,13,22,43,45,47,49,50,53,54,56,57,58,59,60,61,82,86,139,281,284,303,321]],
['típusa',[6,7,10,13,21,22,31,32,34,139,153,156,157,241,242,243,253,283,298,303,308,370,389,454,455,457]],
['type',[6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,49,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,110,112,113,114,118,119,120,122,123,124,125,126,134,135,137,139,140,143,144,145,146,150,153,154,155,156,157,158,160,161,162,163,164,165,166,168,169,170,171,172,173,175,176,177,178,179,181,182,185,186,187,189,190,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,216,217,219,220,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,272,273,274,275,276,277,278,279,280,281,282,283,284,286,289,290,293,295,296,297,298,299,300,301,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,373,374,376,377,378,379,383,384,389,390,391,392,393,394,395,396,397,398,399,400,401,402,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439,440,441,442,443,444,445,446,447,448,449,450,451,452,453,454,455,456,457,458,459,460,461,462,463,464,465,466,467,468,469,470,471,472,473,474,476]],
['service',[6,7,10,13,21,22,23,31,45,46,47,48,139,145,151,190,192,196,197,200,201,296,298,302,303,469]],
['request',[6,7,13,22,43,45,47,49,50,53,54,56,57,58,59,60,61,82,86,139,281,284,303,321]],
['application',[6,7,8,9,10,12,13,14,15,16,19,20,22,24,25,31,39,40,41,43,44,303,453]],
['registration',[6,7,10,43,44,53,109,121,139,295,296,303,379,382]],
['complexcontent',[6,7,10,13,21,22,31,43,44,45,46,47,48,49,50,53,72,88,89,303,321,323,339,418,443]],
['extension',[6,7,10,13,21,22,31,43,44,45,46,47,48,49,50,53,70,72,88,89,303,318,320,321,323,339,418,443,468]],
['basicheadertype',[6,7,49,50,53,54,59,60,62,63,303,321]],
['rendszerben',[6,7,10,13,21,22,31,53,82,87]],
['alkalmazott',[6,7,10,13,21,22,31,303,374,378]],
['általános',[6,7,10,13,21,22,31,49,50,53,72,115,116,117,118,303,321,323]],
['típus',[6,7,10,13,21,22,31,49,51,52,53,70,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,112,113,114,118,119,120,122,123,124,125,126,127,128,129,130,131,132,133,134,135,137,139,140,143,145,153,160,170,190,195,197,214,220,222,227,241,243,254,256,257,259,260,262,266,268,273,274,278,279,280,281,282,284,286,289,290,293,295,296,297,299,300,301,303,304,310,312,315,318,320,321,323,326,328,333,339,341,345,347,365,374,379,383,396,402,405,407,418,439,443,448,449,450,451,452,453,456,458,459,460,461,462,463,464,465,466,467,468,469,470,471,472,473,474,476]],
['adatai',[6,7,8,10,13,21,22,31,35,53,54,59,60,61,62,63,82,139,153,178,179,185,210,214,217,222,223,224,226,243,259,261,275,276,303,333,337,341,345,346,347,370,371,389,393,396,410,412,417,418,443]],
['general',[6,7,10,13,21,22,31,53,88,89]],
['response',[6,7,10,13,21,22,31,44,46,48,53,54,56,57,58,62,63,78,88,89,139,259,303,323]],
['data',[6,7,10,13,21,22,31,49,50,53,54,56,57,59,60,61,62,63,64,65,82,139,153,157,159,160,165,178,185,214,217,222,226,229,236,243,254,255,259,261,275,276,303,304,305,306,307,308,309,310,311,312,313,321,323,333,337,341,345,346,347,352,365,366,367,370,389,393,396,410,411,417,418,421,422,423,427,428,429,433,434,443,450,455,466]],
['used',[6,7,10,12,13,21,22,30,31,139,145,149,150,178,180,187,222,223,226,303,410,412,417,464,465]],
['system',[6,7,9,10,13,21,22,31,139,160,163,170,190,191,292,303,474]],
['sequence',[6,7,10,13,22,31,53,54,59,62,65,73,75,78,82,139,140,143,145,153,157,160,166,170,178,190,195,196,197,199,202,210,213,214,222,227,229,241,243,254,257,259,266,268,273,275,303,304,308,310,312,318,321,323,326,328,333,339,345,347,352,365,370,374,379,383,389,396,402,405,407,410,418,421,427,433,439,443]],
['element',[6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439,440,441,442,443,444,445,446,447]],
['software',[6,7,8,43,139,153,154,155,156,178,179,202,205,208,210,211,212,214,217,221,243,244,245,246,247,248,249,250,251,252,253,296,297,298]],
['appsoftwaretype',[6,7,8,139,153]],
['fejlesztői',[6,7,8,31,33,35,37,139,170,176,177]],
['verzió',[6,7,8,53,54,57,139,214,215]],
['development',[6,7,8,139,170,176,177]],
['details',[6,7,8,139,178,179,202,204,207,222,224]],
['userid',[6,7,9,43]],
['simpletext50notblanktype',[6,7,9,53,65,66,70,71,132,139,229,233,243,247,252,303,341,344,352,353,356,357,358,359,361,362,363,379,380,381,382,383,385,386,387,388,433,438]],
['backend',[6,7,9]],
['nyilvántartott',[6,7,9]],
['felhasználói',[6,7,9]],
['azonosító',[6,7,9,53,113,139,229,232,233,303,455,475]],
['amelyből',[6,7,9]],
['tokent',[6,7,9]],
['képzi',[6,7,9]],
['rendszer',[6,7,9,49,50,139,190,191,292,303,321,323,474]],
['user',[6,7,9,53,59,61,82,83,84,85,87,303,450]],
['registered',[6,7,9]],
['from',[6,7,9,139,145,152,197,199,210,211,229,238]],
['which',[6,7,9,10,12,31,38,53,54,57,139,197,199,200]],
['generates',[6,7,9]],
['token',[6,7,9,10,11,12,22,23,49,52]],
['appregistrationresponsetype',[6,10,44]],
['válasz',[6,10,21,31,44,46,48,53,54,56,57,58,62,63,89,139,259,303,323]],
['implementing',[6,10,31]],
['basicresponsetype',[6,10,21,31,53,62,72,303,323]],
['apptoken',[6,10,12,44]],
['jwttokentype',[6,10,12,49,52]],
['számára',[6,10,12,13,21,45,46,53,123,124]],
['generált',[6,10,12,13,19,20,22,24,25,31,39,40,53,113]],
['egyedi',[6,10,12,53,54,56,139,145,149,303,304,306,455]],
['amellyel',[6,10,12]],
['nyugtatár',[6,10,12]],
['szolgáltatásokat',[6,10,12]],
['kell',[6,10,12,31,38,41,139,160,161,162,165,170,172,178,182,197,199,200,275,277,292,303,352,360,433,437]],
['hívni',[6,10,12]],
['auth',[6,10,12]],
['header-ben',[6,10,12]],
['átadva',[6,10,12]],
['unique',[6,10,12,53,54,56,139,145,149,303,304,306,455]],
['generated',[6,10,12,13,19,20,22,24,25,31,39,40,53,113]],
['must',[6,10,12,31,38,41,139,275,277]],
['call',[6,10,12,31,41,139,195,196,197,198]],
['receipt',[6,10,12,22,23,26,31,32,47,48,303,457,458,460,464,465]],
['store',[6,10,12]],
['passed',[6,10,12]],
['header',[6,10,12,21,31,44,46,48,53,54,55,59,60,62,63,72,88,323]],
['appexpiresin',[6,10,11,44]],
['nonnegativeinteger',[6,10,11,139,145,147,148,170,176,177,190,191,210,213,303,347,350,370,373,410,415,470]],
['navi',[6,10,11]],
['érvényességi',[6,10,11]],
['időtartama',[6,10,11]],
['másodpercben',[6,10,11,139,190,191]],
['duration',[6,10,11]],
['validity',[6,10,11,139,229,238,239]],
['seconds',[6,10,11,139,190,191,287]],
['getdocumentrequesttype',[6,22,47]],
['dokumentum',[6,13,17,22,27,31,38,47,48,139,296,303,308,310,365,366,367,369,370,372,396,398,399,460,461]],
['nyugta',[6,22,31,32,47,48,303,457,458,460,464,465]],
['számla',[6,22,31,32,47,48,303,396,400,458,460]],
['egyszerűsített',[6,22,31,32,47,48,303,458,460]],
['letöltést',[6,22,31,47,48]],
['download',[6,22,31,48,139,296]],
['document',[6,13,17,18,22,27,28,31,32,33,36,38,42,47,48,139,170,176,177,296,303,308,309,310,347,350,351,365,366,367,368,369,370,372,396,398,399,400,410,411,413,421,423,450,457,458,460,461,469,473]],
['invoice',[6,22,31,32,47,48,303,396,400,458,460]],
['simplified',[6,22,31,32,47,48,303,458,460]],
['basicedocumentstorerequesttype',[6,13,22,49,50]],
['searchkeytimestamp',[6,13,20,22,25,31,40,45,47,48]],
['generictimestamptype',[6,13,16,18,20,22,25,28,31,40,41,53,54,58,117,139,190,193,194,222,224,229,238,239,243,250,275,277,303,410,413]],
['alkalmazában',[6,13,14,15,16,19,20,22,24,25,31,39,40]],
['keresőkulcs',[6,13,19,20,22,24,25,31,39,40]],
['előállításának',[6,13,20,22,25,31,40]],
['időpontja',[6,13,16,20,22,25,31,40,139,243,250]],
['time',[6,13,18,20,22,25,28,31,40,53,54,58,139,190,191,192,193,194,243,250,303,410,413]],
['generation',[6,13,20,22,25,31,40]],
['search',[6,13,19,20,22,24,25,31,39,40,139,241,242]],
['searchkey',[6,13,19,22,24,31,39,45,47,48]],
['base64binary',[6,13,19,22,23,24,29,30,31,39,139,282,284,303,421,422,423,425,427,428,429,431,449,464,465,467]],
['értéke',[6,13,19,22,24,31,39,53,82,84,86,139,140,142,170,176,177,303,304,307,374,377,378]],
['value',[6,13,19,22,24,31,39,49,51,52,53,82,84,86,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,145,147,148,149,151,152,157,159,166,167,170,174,176,177,178,180,183,184,188,190,191,192,210,212,214,215,216,218,219,220,221,268,271,278,279,280,283,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,307,328,330,331,332,374,377,379,380,381,382,383,385,386,387,388,396,400,402,403,421,424,427,430,448,449,450,451,452,453,454,455,456,457,458,459,460,461,462,463,466,467,468,469,470,471,472,473,474,475,476]],
['notificationtoken',[6,22,23,47]],
['minoccurs',[6,13,15,22,23,31,36,53,54,55,65,66,68,69,78,79,80,82,85,139,145,146,147,148,149,150,151,152,157,159,160,161,162,165,170,172,174,178,182,186,202,203,204,205,206,207,208,209,214,215,216,217,218,219,220,221,222,223,227,229,234,239,240,243,245,247,259,262,264,265,275,276,303,308,309,312,313,328,331,332,333,334,335,336,337,339,340,347,349,352,353,356,357,358,359,362,363,365,366,367,368,374,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,400,407,409,410,411,412,418,420,421,426,427,428,432,433,438,439,440,442,443,444,447]],
['feliratkozás',[6,22,23,31,41]],
['esetén',[6,22,23,31,36,41,42,139,160,162,170,172,178,182,222,226,268,270,272,291,303,304,307,396,401,410,417,439,441,443,444,445,469]],
['bizonylat',[6,13,18,22,23,26,28,31,32,33,34,139,170,176,177,303,347,350,410,413,421,423,457,458,460,469,476]],
['lekérdezhetővé',[6,22,23]],
['válásakor',[6,22,23]],
['értesítés',[6,22,23,53,73,74,75,76,77]],
['szolgáltatónak',[6,22,23]],
['átadandó',[6,22,23]],
['értesítési',[6,22,23]],
['case',[6,22,23,31,38,41,139,160,163,165,222,223,226,303,396,401,410,412,417,439,441]],
['subscription',[6,22,23,31,41]],
['notification',[6,22,23,53,69,73,74,75,76,77]],
['forwarded',[6,22,23]],
['provider',[6,22,23,139,145,151,172]],
['when',[6,22,23,139,190,194,303,339,340]],
['becomes',[6,22,23]],
['queryable',[6,22,23]],
['documentnumber',[6,13,17,22,27,45,47,303,365,369,370,372,396,398]],
['documentnumbertype',[6,13,17,22,27,303,365,369,370,372,396,398,460]],
['vagy',[6,13,17,22,27,31,42,139,153,156,190,191,243,253,298,303,315,339,340,365,369,370,372,396,398,400,443,445,451,454,460,463]],
['módosító',[6,13,17,22,27,303,365,369,370,372,396,398,400,460,461]],
['okirat',[6,13,17,22,27,303,365,369,370,372,396,398,400,460,461]],
['sorszáma',[6,13,17,22,27,139,210,213,303,312,314,365,369,370,372,396,398]],
['sequential',[6,13,17,22,27,303,312,314,365,369,370,372,396,398,460]],
['number',[6,13,17,22,27,30,31,36,42,53,54,55,57,82,85,87,107,109,121,135,136,139,178,180,183,184,186,188,197,199,210,213,227,228,229,240,243,247,255,259,261,268,271,289,295,303,312,314,316,321,322,323,324,333,335,339,340,341,342,343,344,352,356,358,359,365,369,370,372,373,379,380,381,382,383,385,387,396,397,398,401,410,415,433,434,439,441,443,444,445,448,456,460,470]],
['original',[6,13,17,22,27,303,365,369,370,372,396,398,460,461]],
['modification',[6,13,17,22,27,303,365,369,370,372,396,398,400,460,461,471]],
['documentgrossamounthuf',[6,22,26,47]],
['monetarytype',[6,22,26,303,328,330,331,332,347,348,374,375,407,408,472]],
['bruttó',[6,22,26,303,328,330]],
['végösszege',[6,22,26]],
['forintban',[6,22,26,303,374,377,378,389,391,392,395,402,404]],
['gross',[6,22,26,303,328,330]],
['total',[6,22,26,303,328,330,331,332]],
['amount',[6,22,26,303,346,347,348,374,375,377,389,391,393,394,395,402,404,407,408]],
['qrcodesignature',[6,22,29,47]],
['aláírása',[6,22,29]],
['base64',[6,22,29,139,284,303,421,422,423,425,427,428,429,431]],
['formátumban',[6,22,29,31,33,35,139,281,282,284,287,302]],
['code',[6,13,14,22,29,30,31,37,53,65,66,75,76,78,80,108,110,111,112,114,122,125,126,134,137,138,139,157,158,170,176,177,178,187,229,230,243,245,248,266,267,268,269,285,300,303,328,329,352,355,360,362,374,376,383,386,402,403,404,410,414,433,436,437,438,439,440,442,452,453,463,473]],
['signature',[6,22,29,53,82,86,303,421,425,427,431]],
['format',[6,22,29,31,33,139,281,282,284,302,303,315]],
['qrcodesigncertserial',[6,22,30,47]],
['aláírásához',[6,22,30]],
['használt',[6,22,30,139,145,149,150,151,178,180,187,222,223,226,303,410,412,417,464,465]],
['tanúsítvány',[6,22,30,139,281,282,283,284,294,296]],
['sorozatszáma',[6,22,30]],
['serial',[6,22,30,303,370,373,410,415]],
['certificate',[6,22,30,139,281,282,283,284,294,296]],
['sign',[6,22,30,139,166,168,169,268,270,271,272,291]],
['issueenddatetime',[6,13,18,22,28,45,47]],
['időbélyeg',[6,13,18,22,28,53,117,303,410,413]],
['zárásának',[6,13,18,22,28]],
['pontos',[6,13,18,22,28,303,410,413]],
['ideje',[6,13,18,22,28,53,54,58,139,190,191,303,410,413]],
['órája',[6,13,18,22,28,139,160,165,303,410,413]],
['szerint',[6,13,18,22,28,53,54,57,110,139,166,167,168,169,190,194,303,352,355,362,374,376,410,413,433,436,438]],
['timestamp',[6,7,13,18,22,28,43,45,47,50,53,54,58,60,63,117,303,321,410,413]],
['exact',[6,13,18,22,28,303,410,413]],
['closing',[6,13,18,22,28,139,292,303,451]],
['according',[6,13,18,22,28,139,160,163,164,166,167,266,267,303,410,413]],
['clock',[6,13,18,22,28,139,160,165,190,192,303,410,413]],
['getdocumentresponsetype',[6,31,48]],
['choice',[6,31,303,315,341]],
['subscriptionexpirationtime',[6,31,41,48]],
['megadja',[6,31,41]],
['meddig',[6,31,41]],
['érvényes',[6,31,41,139,268,272]],
['lejárat',[6,31,41]],
['után',[6,31,38,41]],
['applikációnak',[6,31,41]],
['újra',[6,31,41]],
['hívnia',[6,31,41]],
['getdocument',[6,31,41]],
['végpontot',[6,31,41]],
['megújításához',[6,31,41]],
['returns',[6,31,41]],
['long',[6,31,41]],
['valid',[6,31,41,139,268,272]],
['after',[6,31,38,41,139,160,161,163,275,277,292]],
['expiration',[6,31,41]],
['client',[6,13,21,31,41,45,46,53,54,57]],
['endpoint',[6,31,41,139,195,196,197,198,199]],
['again',[6,31,41]],
['renew',[6,31,41,139,296]],
['taxnumber',[6,31,42,48,53,54,56,61,82,87,223,226,303,412,417,443,445]],
['taxpayeridtype',[6,31,36,42,53,82,85,87,136,139,259,265,303,396,401,439,441]],
['bizonylatot',[6,31,36,42,303,458]],
['kiállító',[6,31,36,42]],
['adózó',[6,31,36,42,53,82,87,139,222,223,226,254,255,259,263,264,265,303,374,378,410,412,417,443,445,446,447]],
['adószámának',[6,31,42]],
['első',[6,31,36,42]],
['karaktere',[6,31,36,42]],
['Áfa-csoport',[]],
['tagság',[6,31,36,42,303,443,444,445]],
['tagi',[6,31,42,303,443,445]],
['first',[6,31,36,42,139,197,199]],
['characters',[6,31,36,42,53,127,128,129,130,131,132,133,139,268,269,303,328,329,374,376]],
['taxpayer',[6,31,36,42,53,82,85,87,139,185,222,224,226,241,254,255,256,257,258,259,262,263,264,265,296,299,303,410,417,439,442]],
['creates',[6,31,36,42]],
['part',[6,31,36,42,303,443,444,445,464,465]],
['group',[6,31,36,42,139,259,265,303,339,340,341,343,347,349,396,401,439,441,443,444,445]],
['member',[6,31,42,303,339,340,383,387,443,445]],
['groupidentificationnumber',[6,31,36,48,223,226,303,412,417,443,444]],
['csoportazonosító',[6,31,36,303,339,340,341,343,396,401,439,441,443,444]],
['számának',[6,31,36]],
['identification',[6,31,36,53,135,303,304,306,339,340,341,343,344,383,387,396,401,439,441,443,444,455]],
['offlinecreated',[6,31,38,48]],
['boolean',[6,31,38,303,323,325]],
['amennyiben',[6,31,38,139,160,165,303,352,360,362,433,437,438]],
['on-line',[6,31,38]],
['beküldés',[6,31,38,139,296]],
['valamilyen',[6,31,38]],
['okból',[6,31,38]],
['meghiúsult',[6,31,38]],
['kapcsolat',[6,31,38]],
['helyrállása',[6,31,38]],
['beküldeni',[6,31,38,139,160,161]],
['ebben',[6,31,38]],
['esetben',[6,31,38]],
['mezőben',[6,31,38]],
['jelezni',[6,31,38]],
['hogy',[6,31,38,53,54,57,139,210,212]],
['off-line',[6,31,38]],
['került',[6,31,38,139,160,165]],
['beküldésre',[6,31,38]],
['online',[6,31,38,139,153,156,243,253,298]],
['submission',[6,31,38,139,296]],
['failed',[6,31,38]],
['some',[6,31,38]],
['reason',[6,31,38,303,450,471]],
['submitted',[6,31,32,34,38]],
['connection',[6,31,38,139,290]],
['established',[6,31,38]],
['field',[6,31,38,53,125,126,303,304,305,306,455,472]],
['indicate',[6,31,38,303,439,442]],
['offline',[6,31,38]],
['ntcaverificationcode',[6,31,37,48]],
['sha256type',[6,31,37,53,125,139,243,248]],
['ellenőrző',[6,31,37,139,170,176,177,243,248,303,410,414,473]],
['leírását',[6,31,37,139,170,176,177]],
['lásd',[6,31,37,139,170,176,177,303,421,422,423,427,428,429]],
['dokumentáció',[6,31,37,139,170,176,177]],
['„nav',[6,31,37,139,170,176,177]],
['képzése”',[6,31,37,139,170,176,177]],
['fejezetében',[6,31,37,139,170,176,177]],
['verification',[6,31,37,139,170,176,177,243,248]],
['documentclass',[6,31,32,48]],
['documentclasstype',[6,31,32,303,458]],
['beküldött',[6,31,32,34,139,170,177]],
['documentenvelope',[6,31,33,48]],
['signeddocumentenvelopetype',[6,31,33,303,421]],
['boríték',[6,31,33,303,421,426,427,432]],
['dokumentációban',[6,31,33,35]],
['meghatározott',[6,31,33]],
['envelope',[6,31,33,303,421,424,425,426,427,428,430,431,432]],
['specified',[6,31,33]],
['developer',[6,31,33,139,243,244,245,246,247]],
['reportclass',[6,31,34,48]],
['reportclasstype',[6,31,34,303,476]],
['pénztárjelentés',[6,31,34,303,476]],
['pénzmozgás',[6,31,34,303,460,469,476]],
['voucher',[6,31,34,303,451]],
['cash',[6,31,34,139,160,161,163,178,183,184,285,296,303,389,392,451,474]],
['report',[6,31,34,139,160,161,163,303,427,429,460,476]],
['flow',[6,31,34]],
['reportenvelope',[6,31,35,48]],
['signedreportenvelopetype',[6,31,35,303,427]],
['riport',[6,31,35,139,160,303,427,429,476]],
['előírt',[6,31,35]],
['clienteventrequesttype',[6,13,45]],
['applikációk',[6,13,21,45,46]],
['eseménybeküldést',[6,13,21,45,46]],
['lehetővé',[6,13,21,45,46]],
['tevő',[6,13,21,45,46]],
['allows',[6,13,21,45,46]],
['submit',[6,13,21,45,46]],
['events',[6,13,21,45,46,139,160,161,285]],
['eventtimestamp',[6,13,16,45]],
['történt',[6,13,14,15,16,303,339,340]],
['esemény',[6,13,14,15,16,139,157,158,159,285]],
['date',[6,13,16,53,115,139,222,224,275,277,303,347,351,459]],
['event',[6,13,14,15,16,139,157,158,159,160,161,285,303,453]],
['eventcode',[6,13,14,45,139,157,158,161]],
['customerappeventcodetype',[6,13,14,303,453]],
['kódja',[6,13,14,139,157,158,243,248,285,303,352,362,383,386,402,403,433,438]],
['eventdescription',[6,13,15,45,139,157,159,161]],
['simpletext200notblanktype',[6,13,15,53,130,139,243,244,259,264]],
['leírása',[6,13,15,303,304,305]],
['description',[6,13,15,139,303,304,305,312]],
['clienteventresponsetype',[6,21,46]],
['appregistrationrequest',[6,43]],
['objektuma',[6,43,44,45,46,47,48]],
['object',[6,43,44,45,46,47,48]],
['appregistrationresponse',[6,44]],
['getdocumentrequest',[6,47]],
['downloading',[6,47]],
['getdocumentresponse',[6,48]],
['clienteventrequest',[6,45]],
['clienteventresponse',[6,46]],
['requestid',[7,13,22,43,45,47,50,53,54,56,60,63,321]],
['requestversion',[7,13,22,43,45,47,50,53,54,57,60,63,321]],
['headerversion',[7,13,22,43,45,47,50,53,54,55,60,63,321]],
['softwareid',[8,139,153,154,179,217,243,249]],
['softwareoperation',[8,139,153,156,179,217,243,253]],
['softwaremainversion',[8,139,153,155,179,217,243,251]],
['result',[10,21,31,44,46,48,53,62,64,65,67,72,78,81,88,108,137,139,241,242,294,323]],
['envelopeversion',[33,35,303,421,426,427,432]],
['envelopedata',[33,35,303,421,423,424,425,427,429,430,431]],
['customerenvelopedata',[33,35,303,421,422,424,425,427,428,430,431]],
['envelopehash',[33,35,303,421,424,427,430]],
['envelopesignature',[33,35,303,421,425,427,431]],
['enyugta',[49,50,303,321,323]],
['specifikus',[49,50,303,321,323]],
['adatok',[49,50,53,59,62,64,65,139,303,321,323,365,379,383,421,422,423,425,427,428,429,431]],
['specific',[49,50,303,312,313,321,323]],
['basic',[49,50,53,59,62,64,65,303,321,323]],
['simpletype',[49,51,52,53,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,145,147,148,149,151,152,157,159,166,167,170,174,178,180,183,184,188,190,191,192,214,215,216,218,219,220,221,268,271,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,374,375,379,380,381,382,383,385,386,387,388,402,403,448,449,450,451,452,453,454,455,456,457,458,459,460,461,462,463,464,465,466,467,468,469,470,471,472,473,474,475,476]],
['atomicstringtype8192',[49,51,52]],
['atomi',[49,51,53,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,303,449]],
['string',[49,51,53,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,119,127,128,129,130,131,132,133,134,139,140,141,142,145,149,151,157,159,170,174,178,180,183,184,188,190,192,214,215,216,218,219,220,221,268,271,278,279,280,283,285,286,287,288,290,292,294,295,296,297,298,300,302,303,402,403,448,452,453,456,457,458,460,463,468,469,473,475,476]],
['hosszra',[49,51,53,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106]],
['atomic',[49,51,53,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,303,449]],
['length',[49,51,53,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,110,111,112,136,138,139,297]],
['restriction',[49,51,52,53,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,145,147,148,149,151,152,157,159,166,167,170,174,178,180,183,184,188,190,191,192,214,215,216,218,219,220,221,268,271,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,374,375,379,380,381,382,383,385,386,387,388,402,403,448,449,450,451,452,453,454,455,456,457,458,459,460,461,462,463,464,465,466,467,468,469,470,471,472,473,474,475,476]],
['minlength',[49,51,53,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,109,113,120,121,122,134,139,300,303,379,380,381,448,449,453,455,456,463,468,475]],
['maxlength',[49,51,53,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,109,113,120,121,122,134,139,140,141,142,145,149,151,157,159,170,174,178,180,183,184,188,190,192,214,215,216,218,219,220,221,268,271,278,279,280,283,285,286,287,288,290,292,294,295,296,298,300,302,303,379,380,381,382,383,385,386,387,388,402,403,448,449,452,453,455,456,457,458,460,463,467,468,469,473,475,476]],
['pattern',[49,52,53,107,109,110,111,112,113,115,117,120,121,122,125,126,127,128,129,130,131,132,133,134,135,136,138,139,145,151,178,180,188,190,192,287,292,295,297,300,303,402,403,448,449,452,453,455,456,459,460,463,468,473,475]],
['project',[53,139,303]],
['séma',[53,139,178,188,303]],
['author',[53,139,303]],
['informatikai',[53,139,303]],
['intézet',[53,139,303]],
['--atomi',[53]],
['típusok',[53]],
['types--',[53]],
['atomicstringtype100',[53,90,127]],
['atomicstringtype1024',[53,91,128]],
['atomicstringtype128',[53,92,126]],
['atomicstringtype15',[53,54,55,57,93,109,120,122,129,139,289,301,303,421,426,427,432,450,451,454,471,474]],
['atomicstringtype16',[53,94]],
['atomicstringtype2',[53,95,110,111,138]],
['atomicstringtype200',[53,96,130]],
['atomicstringtype2048',[53,97]],
['atomicstringtype255',[53,98,131,303,455]],
['atomicstringtype256',[53,99]],
['atomicstringtype32',[53,100,113,121]],
['atomicstringtype4',[53,101,112]],
['atomicstringtype4000',[53,102]],
['atomicstringtype50',[53,103,107,132,139,293]],
['atomicstringtype512',[53,104,133]],
['atomicstringtype64',[53,105,125]],
['atomicstringtype8',[53,106,108,114,136,137,139,299,303,461]],
['genericdatetype',[53,115]],
['Általános',[]],
['dátum',[53,115,303,459]],
['generic',[53,72,115,116,117,118]],
['genericdecimaltype',[53,116,303,472]],
['lebegőpontos',[53,116]],
['érték',[53,116,139,291]],
['float',[53,116]],
['point',[53,116,139,268,270,272,291]],
['decimal',[53,116,139,166,168,169,268,270,272,291,303,466,472]],
['datetime',[53,117]],
['genericunsignedintegertype',[53,118]],
['egész',[53,118,139,145,147,152,268,271,303,374,377]],
['szám',[53,118,139,229,240,303,339,340,341,343,352,358,396,401,433,434,439,441,443,444,448,456]],
['unsigned',[53,118]],
['integer',[53,118,135,139,145,147,152,166,167]],
['mininclusive',[53,118,123,124,139,145,152,303,459,462,470]],
['sha256',[53,125,139,243,248]],
['megadására',[53,107,125,126]],
['szolgáló',[53,107,125,126,303,304,312]],
['holding',[53,125,126]],
['0-9a-f',[53,125,126,303,473]],
['sha512type',[53,126]],
['sha512',[53,126]],
['simpletext100notblanktype',[53,75,76,78,80,127,303,418,419,420,443,446,447]],
['legfeljebb',[53,127,128,129,130,131,132,133,139,166,168,169]],
['karaktert',[53,127,128,129,130,131,132,133]],
['tartalmazó',[53,127,128,129,130,131,132,133,139,241,242]],
['szöveg',[53,75,77,127,128,129,130,131,132,133]],
['maximum',[53,127,128,129,130,131,132,133,139,166,168,169,303,472]],
['simpletext1024notblanktype',[53,65,68,75,77,78,79,128,139,229,235]],
['simpletext15notblanktype',[53,129,139,153,155,229,230,232,240,243,251]],
['simpletext255notblanktype',[53,131,139,229,231,234,303,304,305,352,354,364,433,434,435]],
['simpletext512notblanktype',[53,70,133,139,243,246,259,263,303,304,307,333,336]],
['--Üzleti',[]],
['katalógus',[53]],
['elemek',[53]],
['business',[53,108]],
['catalog',[53]],
['elements--',[53]],
['bankaccountnumbertype',[53,107,139,227,228,303,333,335]],
['bankszámla',[53,107,139,178,186,227,228]],
['bank',[53,107,139,178,186,227,228,303,333,335]],
['account',[53,107,139,178,186,227,228,303,333,335]],
['0-9a-za-z',[53,107]],
['communityvatnumbertype',[53,109,303,341,342]],
['közösségi',[53,109,303,341,342]],
['adószám',[53,109,136,139,259,261,296,303,339,341,342,343,439]],
['community',[53,109,303,341,342]],
['0-9a-z',[53,109]],
['countrycodetype',[53,110,139,243,245,303,352,355,433,436]],
['országkód',[53,110,303,352,355,433,436]],
['alpha-2',[53,110,303,352,355,362,433,436,438]],
['szabvány',[53,110,112,139,166,167,168,169,303,352,355,362,433,436,438]],
['country',[53,110,139,243,245,303,352,355,362,433,436,438]],
['countycodetype',[53,111,303,439,440]],
['megyekód',[53,111,303,439,440]],
['county',[53,111,303,439,440]],
['currencytype',[53,112,303,374,376]],
['pénznem',[53,112]],
['szerinti',[53,112,139,266,267,287,303,326,327,328,333,338,347,349,454]],
['hosszú',[53,112]],
['currency',[53,112,303,374,375,376,377,378,389,393]],
['three',[53,112]],
['digit',[53,112,303,439,442,456,463]],
['platenumbertype',[53,121]],
['kereskedelmi',[53,121]],
['gépjármű',[53,121]],
['forgalmi',[53,121,139,268,269,303,326,327,328,329,330,331,332,345,346,347,349,452,460,476]],
['rendszáma',[53,121]],
['csak',[53,121,139,160,162,170,172,178,182]],
['betűk',[53,121]],
['számok',[53,121]],
['commercial',[53,121,303,326,327,328]],
['motor',[53,121]],
['vehicle',[53,121,303,379,382]],
['letters',[53,121,303,379,382]],
['numbers',[53,121,303,379,382]],
['only',[53,121,139,160,162,170,172,178,182,303,379,382]],
['a-z0-9ÖŐÜŰ',[]],
['postalcodetype',[53,122,303,352,360,433,437]],
['irányítószám',[53,122,303,352,360,433,437]],
['a-z0-9',[53,122,134,303,455,475]],
['a-z0-9\s\-',[53,122]],
['swiftcodetype',[53,134]],
['swift',[53,134]],
['kódot',[53,134]],
['a-z2-9',[53,134]],
['a-np-z0-9',[53,134]],
['taxidentificationnumbertype',[53,135]],
['adóazonosító',[53,135,303,341,344]],
['totaldigits',[53,135,139,145,148,166,167,190,191,291,303,466,470,472]],
['nyolc',[53,136]],
['jegyű',[53,136,303,456,463]],
['törzsszám',[53,136]],
['része',[53,136]],
['8-digit',[53,136]],
['core',[53,136,303,396,401,439,441,465]],
['section',[53,136]],
['vatcodetype',[53,138,303,439,442]],
['--közös',[53]],
['businessresultcodetype',[53,108]],
['Üzleti',[]],
['eredmény',[53,65,67,78,81,108,137]],
['enumeration',[53,108,114,119,137,139,278,279,280,283,285,286,288,289,290,293,294,296,298,299,301,303,450,451,454,457,458,461,469,471,474,476]],
['error',[53,65,66,78,80,88,108,114,137,139,170,174,280,285,294,303,450]],
['hiba',[53,108,114,137,139,285,294,303,450]],
['warn',[53,108]],
['figyelmeztetés',[53,108]],
['info',[53,108,139,160,161,163,210,296]],
['tájékoztatás',[53,108,139,292,296]],
['information',[53,108,139,170,176,177,292,303,365,370,371,379,383]],
['entityidtype',[53,54,56,113]],
['a-za-z0-9',[53,113,120]],
['functioncodetype',[53,65,67,114]],
['funkciókód',[53,114]],
['function',[53,114]],
['sikeres',[53,114]],
['művelet',[53,114,303,396,399,461]],
['successful',[53,114]],
['operation',[53,72,88,89,114,139,153,156,222,225,243,253,296,298,303,396,399,410,416,461]],
['localizationtype',[53,119]],
['lokalizációt',[53,119]],
['jelölő',[53,119]],
['localization',[53,119]],
['magyar',[53,119,139,145,151]],
['hungarian',[53,119]],
['angol',[53,119]],
['english',[53,119]],
['német',[53,119]],
['german',[53,119]],
['logintype',[53,82,83,120]],
['felhasználónév',[53,120]],
['login',[53,61,82,83,120,139,145,150,151]],
['requestpagetype',[53,123]],
['lapozó',[53,123,124]],
['paraméter',[53,123,124]],
['kérések',[53,123]],
['page',[53,123,124]],
['parameter',[53,123,124]],
['requests',[53,123]],
['responsepagetype',[53,124]],
['válaszok',[53,124]],
['responses',[53,124]],
['technicalresultcodetype',[53,78,81,137]],
['technikai',[53,78,82,83,84,85,87,137,139,285,292,296,303,450]],
['technical',[53,78,82,83,84,85,87,137,139,140,143,144,145,146,160,164,178,182,214,285,292,296,303,450]],
['critical',[53,137]],
['kritikus',[53,137]],
['tranzakcionális',[53,54,59,60,62,63]],
['transactional',[53,54,59,60,62,63]],
['azonosítója',[53,54,56,139,140,141,145,149,153,154,202,203,204,205,206,207,208,209,243,249,297,303,304,306]],
['minden',[53,54,56,72]],
['üzenetváltásnál',[53,54,56]],
['adószámonként',[53,54,56]],
['identifier',[53,54,56,139,145,149,202,205,207,208,209,229,232,233,303,379,380,475]],
['with',[53,54,56,139,145,147,197,199,210,212,243,248,268,270,271,272,289,291]],
['every',[53,54,56,72,88,89]],
['exchange',[53,54,56,303,374,378,466]],
['transaction',[53,54,56,303,469]],
['keletkezésének',[53,54,58]],
['verziószáma',[53,54,55,57,139,178,180,188]],
['hívó',[53,54,57]],
['melyik',[53,54,57]],
['interfész',[53,54,57,303,421,426,427,432]],
['küld',[53,54,57,303,458,476]],
['adatot',[53,54,57,139,160,162,165]],
['várja',[53,54,57]],
['választ',[53,54,57]],
['indicating',[53,54,57]],
['datastructure',[53,54,57]],
['sends',[53,54,57]],
['expected',[53,54,57]],
['basicrequesttype',[53,59]],
['alap',[53,59,62,64,65,303,421,427]],
['userheadertype',[53,59,61,82]],
['authentikációs',[53,59,61,82,139,296]],
['authentication',[53,59,61,82,139,283]],
['basicresulttype',[53,62,64,65,89]],
['válaszeredmény',[53,62,64,65]],
['funccode',[53,64,65,67,89]],
['feldolgozási',[53,65,66,67,68,78,79]],
['processing',[53,65,66,67,68,78,79]],
['errorcode',[53,64,65,66,89]],
['hibakód',[53,65,66,78,80]],
['üzenet',[53,65,68,78,79,139,178,189,285,292]],
['notifications',[53,64,65,69,73,89]],
['notificationstype',[53,65,69,73]],
['egyéb',[53,65,69,73,139,145,151,285,298,303,308,309,310,311,312,313,365,366,367,389,394,402,403,410,411,450,451,454,457,458,460,471,474,476]],
['értesítések',[53,65,69,73]],
['miscellaneous',[53,65,69,73]],
['cryptotype',[53,70,71,82,84,86,139,210,212,303,396,400,421,424,427,430]],
['kriptográfiai',[53,70]],
['metódust',[53,70]],
['denoting',[53,70]],
['cryptographic',[53,70]],
['method',[53,70,139,153,156,190,192,197,198,243,253,303,396,399,407,409,474]],
['simplecontent',[53,70]],
['attribute',[53,70,71]],
['required',[53,70,71,84,86,212,303,323,325,400,424,430]],
['generalerrorheaderresponsetype',[53,72,88]],
['hibatípus',[53,72]],
['rest',[53,72,88,89]],
['operációra',[53,72,88,89]],
['fault',[53,72]],
['notificationtype',[53,73,74,75]],
['maxoccurs',[53,73,74,139,160,161,195,227,241,242,257,258,266,273,275,276,303,308,309,310,311,312,313,326,345,389,393,394,405,406,410,411]],
['unbounded',[53,69,73,74]],
['Értesítés',[]],
['notificationcode',[53,74,75,76]],
['notificationtext',[53,74,75,77]],
['text',[53,75,77]],
['technicalvalidationresulttype',[53,78]],
['validációs',[53,78,80,81]],
['választípus',[53,78]],
['validation',[53,78,80,81,139,222,224,275,277]],
['validationresultcode',[53,78,81]],
['validationerrorcode',[53,78,80]],
['felhasználó',[53,82,83,84,85,87]],
['neve',[53,82,83,139,197,200,243,246,252,259,263,264,303,333,336,352,364,383,388,418,419,420,433,434,443,446,447]],
['passwordhash',[53,61,82,84]],
['jelszavának',[53,82,84]],
['hash',[53,82,84,86,139,210,212,303,396,400,421,424,427,430]],
['password',[53,82,84]],
['regisztrált',[53,82,87]],
['adószáma',[53,82,85,87,139,243,247,303,339,340,443,445]],
['nevében',[53,82,85,87]],
['tevékenykedik',[53,82,85,87]],
['whose',[53,82,85,87]],
['operates',[53,82,85,87]],
['predecessortaxnumber',[53,61,82,85]],
['jogelőd',[53,82,85]],
['requestsignature',[53,61,82,86]],
['aláírásának',[53,82,86]],
['--Általános',[]],
['responses--',[53]],
['generalerrorheaderresponse',[53,88]],
['összes',[53,88,89]],
['vonatkozó',[53,88,89,139,178,189,303,308,310,311,312,313,365,366,367]],
['hibaválasz',[53,88]],
['generikus',[53,88,89]],
['elementje',[53,88,89]],
['generalexceptionresponse',[53,89]],
['kivétel',[53,89]],
['exception',[53,89]],
['e-pénztárgépek',[139]],
['kommunikációs',[139,178,180]],
['eseteiben',[139]],
['containing',[139,241,242]],
['e-cash',[139,157,160,161,162,163,164,165,166,167,168,169,170,172,173,174,176,178,179,180,181,182,185,190,192,197,200,202,205,208,214,218,219,222,223,224,225,226,275,277,280,292,296,298,302,303,321,322,323,324,370,373,396,397,410,412,415,416,417,458,476]],
['register',[139,157,160,161,162,163,164,165,166,167,168,169,170,172,173,174,176,178,179,180,181,182,183,184,185,197,200,202,205,208,214,218,219,222,223,224,225,226,275,277,280,285,292,296,298,302,303,321,322,323,324,370,373,396,397,410,412,415,416,417,458,476]],
['cases',[139]],
['--created',[139]],
['liquid',[139]],
['studio',[139]],
['https',[139,302]],
['liquid-technologies',[139]],
['e-pénztárgép',[139,160,162,163,164,165,166,167,168,169,170,172,173,178,180,181,182,185,188,197,200,202,214,218,219,222,224,225,226,280,296,298,302,303,321,322,323,324,396,397,410,416,417,458,476]],
['unitofmeasuretype',[139,229,237,301]],
['mennyiség',[139,229,237,293,301]],
['egység',[139,140,143,144,145,146,229,237,293,301]],
['unit',[139,160,162,214,217,220,229,237,293,301]],
['measure',[139,229,237,293,301]],
['piece',[139,301]],
['darab',[139,210,213,301]],
['kilogram',[139,301]],
['kilogramm',[139,301]],
['metrikus',[139,301]],
['tonna',[139,301]],
['metric',[139,140,141,142,301]],
['kilowatt',[139,301]],
['hour',[139,301]],
['minute',[139,301]],
['perc',[139,287,301]],
['month',[139,301]],
['hónap',[139,301]],
['liter',[139,301]],
['kilometer',[139,301]],
['kilométer',[139,301]],
['cubic',[139,301]],
['meter',[139,301]],
['köbméter',[139,301]],
['square',[139,301]],
['négyzetméter',[139,301]],
['méter',[139,301]],
['linear',[139,301]],
['folyóméter',[139,301]],
['carton',[139,301]],
['karton',[139,301]],
['pack',[139,301]],
['csomag',[139,301]],
['saját',[139,301]],
['mennyiségi',[139,301]],
['megnevezés',[139,229,231,235,301]],
['productstatetype',[139,229,236,293]],
['active',[139,293]],
['aktív',[139,293]],
['blockunblocktype',[139,279]],
['blokkolás',[139,279,296]],
['block',[139,170,171,278,279,280,285,296]],
['unblock',[139,278,279,285,296]],
['feloldás',[139,279,296]],
['cashregisterworkstatetype',[139,170,173,280]],
['állapot',[139,145,170,171,172,173,278,280,285,296]],
['work',[139,170,173,280]],
['state',[139,145,160,163,164,170,171,172,173,175,178,181,202,203,229,236,242,278,280,285,286,303,341,344]],
['működik',[139,278,280]],
['nincs',[139,278,280,303,450]],
['blokkolva',[139,278,280]],
['working',[139,278,280]],
['blocked',[139,278,280,285]],
['blokkolt',[139,278,280,285]],
['állapotban',[139,278,280]],
['hibás',[139,280,303,450,471]],
['aeblockunblockstatetype',[139,170,171,278]],
['blokkolási',[139,170,171,278]],
['gpstype',[139,166,168,169,287]],
['wgs84',[139,166,167,168,169,287]],
['koordináták',[139,287]],
['másodperc',[139,287]],
['coordinates',[139,287]],
['degrees',[139,166,168,169,287]],
['minutes',[139,287]],
['httpmethodtype',[139,197,198,288]],
['metódusok',[139,288]],
['listája',[139,170,174,195,268,273,275,288]],
['list',[139,143,160,161,170,174,195,241,242,257,259,262,268,273,275,288,296,303,326,345]],
['methods',[139,288,303,407,408]],
['post',[139,288]],
['incorporationtype',[139,259,260,289]],
['gazdasági',[139,259,260,289]],
['incorporation',[139,259,260,289]],
['organization',[139,289]],
['társaság',[139,289]],
['economical',[139,289]],
['company',[139,289]],
['self',[139,289]],
['employed',[139,289]],
['egyéni',[139,289]],
['vállalkozó',[139,289]],
['private',[139,289,303,454]],
['entrepreneur',[139,289]],
['taxable',[139,289,303,396,401,439,441]],
['person',[139,289,303,396,401,439,441,454]],
['adószámos',[139,289]],
['magánszemély',[139,289]],
['mobileconnectiontype',[139,145,150,290]],
['Átviteli',[]],
['technológia',[139,145,150,290]],
['mobile',[139,290]],
['technology',[139,145,150,290]],
['percentagetype',[139,268,270,272,291]],
['százalékos',[139,291]],
['százalékjel',[139,268,270,272,291]],
['nélkül',[139,145,147,268,270,272,291]],
['szükség',[139,268,270,272,291]],
['tizedesponttal',[139,291]],
['tizedesjegyre',[139,291]],
['kerekítve',[139,291]],
['percentage',[139,268,270,271,272,291]],
['without',[139,145,147,268,270,272,291]],
['necessary',[139,268,270,272,291]],
['rounded',[139,291]],
['places',[139,166,168,169,291,303,472]],
['fractiondigits',[139,291,303,466,472]],
['maxinclusive',[139,145,147,291]],
['printmessagetype',[139,292]],
['interfészen',[139,292]],
['átadott',[139,292]],
['amelyet',[139,197,200,292]],
['pénztárzárást',[139,292]],
['követően',[139,275,277,292]],
['nyomtatni',[139,292]],
['nyomtatón',[139,292]],
['print',[139,292,296]],
['interface',[139,292,303,421,426,427,432]],
['printed',[139,292]],
['printer',[139,292]],
['a-za-z0-9aáeéiíoóöőuúüűaÁeÉiÍoÓÖŐuÚÜŰ',[]],
['certificatesigningrequesttype',[139,281]],
['aláírási',[139,281,284]],
['signing',[139,281,283,284]],
['atomiccsrtype',[139,281,303,449]],
['cmscertificatesigningrequesttype',[139,284]],
['certificatetype',[139,282]],
['kiállított',[139,170,176,282]],
['issued',[139,282]],
['certificatetypetype',[139,283]],
['autentikációs',[139,283]],
['aláíró',[139,283]],
['querycertificateresulttype',[139,294]],
['lekérdezés',[139,259,294,296]],
['eredménye',[139,294]],
['query',[139,259,294,296]],
['complete',[139,294]],
['kész',[139,294]],
['progress',[139,294]],
['folyamatban',[139,294]],
['registrationnumbertype',[139,178,187,295]],
['Üzembehelyezési',[]],
['servicetype',[139,197,200,296]],
['lista',[139,143,241,257,259,262,296,303,345]],
['pénztárgép',[139,285,296]],
['blocking',[139,296]],
['unblocking',[139,296]],
['product',[139,229,233,235,236,296,303,450,469]],
['terméktörzs',[139,296]],
['letöltés',[139,296]],
['update',[139,190,192,194,243,250,296]],
['szoftver',[139,178,179,202,205,208,210,211,214,217,243,248,250,296]],
['frissítés',[139,296]],
['Üzemeltetés',[]],
['befejezése',[139,296]],
['lekérdezése',[139,296]],
['hello',[139,296]],
['operator',[139,178,185,190,192,202,204,207,296]],
['site',[139,178,185,202,204,207,222,224,296,299]],
['adózói',[139,222,224,241,254,256,257,258,259,262,296,299]],
['adatlekérdezés',[139,296]],
['owner',[139,222,223,226,296,303,410,412,417]],
['change',[139,190,191,296,303,370,371,451]],
['Átszemélyesítés',[]],
['küldés',[139,296]],
['belföldi',[139,296,303,341,343,454]],
['ellenőrzés',[139,296]],
['eszköz',[139,296,303,474]],
['regisztráció',[139,296]],
['megújítása',[139,296]],
['expired',[139,296]],
['lejárt',[139,296]],
['törzs',[139,296]],
['sound',[139,296]],
['hangfálj',[139,296]],
['file',[139,210,213,296,303,318,319,365,368,396,400,421,424,427,430,467,468]],
['logo',[139,296]],
['logó',[139,296]],
['machine',[139,296]],
['status',[139,170,229,236,296,303,333,338,454]],
['send',[139,296]],
['missing',[139,296]],
['hiányzó',[139,296]],
['beküldése',[139,296]],
['softwareidtype',[139,153,154,243,249,297]],
['program',[139,153,154,155,156,243,244,245,246,247,249,251,252,253,297]],
['0-9a-z\-',[139,297]],
['softwareoperationtype',[139,153,156,243,253,298]],
['epénztárgép',[139,178,183,298]],
['működési',[139,153,156,243,253,298]],
['alapú',[139,153,156,170,172,178,182,190,192,214,243,253,298]],
['hardveres',[139,153,156,243,253,298]],
['ae-based',[139,153,156,243,253,298]],
['hardware',[139,153,156,214,215,218,219,243,253,298]],
['android',[139,298]],
['felhős',[139,298]],
['cloud',[139,298]],
['huawei',[139,298]],
['other',[139,145,151,285,298,303,308,309,310,311,365,366,367,389,394,402,403,410,411,450,451,454,457,458,460,471,474,476]],
['taxpayeraddressclasstype',[139,254,256,299]],
['address',[139,241,254,255,256,257,258,259,262,299,303,315,316,317,333,334,352,383,384,433,434]],
['székhely',[139,299]],
['headquarter',[139,299]],
['telephely',[139,299]],
['office',[139,299]],
['branch',[139,299]],
['fióktelep',[139,299]],
['teaorcodetype',[139,266,267,300]],
['teÁor',[]],
['urltype',[139,197,201,210,211,302]],
['meghívandó',[139,195,197,201,302]],
['szabványos',[139,302]],
['url-je',[139,197,201,302]],
['host',[139,302]],
['port',[139,302]],
['resource',[139,302]],
['standard',[139,166,168,169,302]],
['reqested',[139,302]],
['fiscaldaystatetype',[139,170,175,286]],
['adóügyi',[139,170,175,286]],
['státusz',[139,286,303,454]],
['fiscal',[139,170,175,286]],
['opened',[139,286]],
['nyitott',[139,286]],
['closed',[139,286]],
['zárt',[139,286]],
['eventcodetype',[139,157,158,285]],
['power',[139,285]],
['bekapcsolása',[139,285]],
['shutdown',[139,285]],
['leállása',[139,285]],
['miatt',[139,285]],
['blokkolta',[139,285]],
['magát',[139,285]],
['itself',[139,285]],
['vége',[139,285]],
['küldött',[139,285]],
['megjelenítése',[139,285]],
['nyomtatása',[139,285]],
['nyugtázva',[139,285]],
['display',[139,285]],
['printing',[139,285]],
['sent',[139,160,161,163,170,174,177,285,303,458,476]],
['confirmed',[139,285]],
['fontos',[139,285]],
['jelentése',[139,285]],
['reporting',[139,285]],
['important',[139,285]],
['aeinternalmetric',[139,140,143,144,145,146,172]],
['belső',[139,140,141,142,143,144,145,146,170,174]],
['mérőszámai',[139,140,143,144,145,146]],
['internal',[139,140,141,142,143,144,145,146,170,174]],
['indicators',[139,140,143,144,145,146]],
['aeinternalmetricid',[139,140,141,144]],
['appinfo',[139,140,141,142,145,146,147,148,149,150,151,152,153,154,155,156,157,159,160,161,162,163,164,165,166,167,168,169,170,172,173,174,178,179,180,182,183,184,186,187,188,189,190,191,192,193,194,210,212,213,214,215,216,217,218,219,220,221,227,228,243,244,245,246,247,248,249,250,251,252,253,268,269,270,271,272,273,274,275,276,277,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,347,348,349,350,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,401,402,403,404,405,406,407,408,409,410,411,413,414,415,421,422,423,424,425,427,428,429,430,431,433,434,435,436,437,438,439,440,441,442]],
['legacymapping',[139,140,141,142,145,146,147,148,149,150,151,152,153,154,155,156,157,159,160,161,162,163,164,165,166,167,168,169,170,172,173,174,178,179,180,182,183,184,186,187,188,189,190,191,192,193,194,210,212,213,214,215,216,217,218,219,220,221,227,228,243,244,245,246,247,248,249,250,251,252,253,268,269,270,271,272,273,274,275,276,277,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,347,348,349,350,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,401,402,403,404,405,406,407,408,409,410,411,413,414,415,421,422,423,424,425,427,428,429,430,431,433,434,435,436,437,438,439,440,441,442]],
['mező',[139,140,141,145,146,153,154,155,156,170,172,178,182,186,227,228,243,244,245,246,247,249,251,252,253,268,270,271,272,273,274,275,276,277,303,304,305,306,308,309,310,311,312,313,314,315,316,317,323,325,326,327,333,334,335,337,338,339,340,341,342,344,347,348,349,350,352,353,355,356,357,358,362,363,365,366,367,370,371,373,389,390,393,394,395,396,399,405,406,410,411,415,421,422,423,424,425,427,428,429,430,431,433,436,438,439,440,442]],
['mérőszám',[139,140,141,142]],
['aeinternalmetricvalue',[139,140,142,144]],
['aeinternalmetriclisttype',[139,143,145,146]],
['aestatetype',[139,145,170,172]],
['freestorage',[139,145,148,172]],
['ae-ben',[139,145,148,152,178,183,184,214,220,221]],
['működő',[139,145,148,152]],
['adattárolón',[139,145,148]],
['lévő',[139,145,148,178,183,184,214,220,221]],
['szabad',[139,145,148]],
['tároló',[139,145,148]],
['kapacitás',[139,145,148]],
['kbyte',[139,145,148]],
['free',[139,145,148]],
['storage',[139,145,148]],
['capacity',[139,145,148]],
['device',[139,145,148]],
['signalstrength',[139,145,152,172]],
['modem',[139,145,152,178,183,214,220,221]],
['mért',[139,145,152]],
['hálózati',[139,145,152]],
['térerőt',[139,145,152]],
['dbm-ig',[139,145,152]],
['terjedő',[139,145,152]],
['skálán',[139,145,152]],
['negatív',[139,145,152]],
['számmal',[139,145,147,152]],
['ábrázolva',[139,145,152]],
['network',[139,145,152]],
['signal',[139,145,152]],
['strength',[139,145,152]],
['measured',[139,145,152]],
['operating',[139,145,152,266,267]],
['expressed',[139,145,152,268,270,271,272]],
['negative',[139,145,152]],
['scale',[139,145,152]],
['negativeinteger',[139,145,152]],
['batterylevel',[139,145,147,172]],
['akkumulátor',[139,145,147]],
['töltöttség',[139,145,147]],
['vezető',[139,145,147]],
['nullák',[139,145,147]],
['battery',[139,145,147]],
['charge',[139,145,147,303,469]],
['leading',[139,145,147]],
['zeros',[139,145,147]],
['mobileconnection',[139,145,150,172]],
['legutóbbi',[139,145,150,151,243,250]],
['bejelentkezés',[139,145,150,151]],
['során',[139,145,150,151,210,212]],
['átviteli',[139,139,145,150,290]],
['transmission',[139,145,150]],
['during',[139,145,150,151]],
['last',[139,145,149,150,151,170,174,176,177,178,181,202,243,250]],
['infrastruktúrát',[139,145,151]],
['biztosító',[139,145,151]],
['fizikai',[139,145,151]],
['mobilszolgáltató',[139,145,151]],
['telekom',[139,145,151]],
['telenor',[139,145,151]],
['vodafone',[139,145,151]],
['mobil',[139,145,151]],
['physical',[139,145,151]],
['infrastructure',[139,145,151]],
['0|1|2|3',[139,145,151]],
['gsmcell',[139,145,149,172]],
['legutóbb',[139,145,149,178,187]],
['cella',[139,145,149]],
['cell',[139,145,149]],
['hardwaretechnicalinfotype',[139,178,182,214]],
['műszaki',[139,160,164,178,182,214]],
['jellemzői',[139,160,164,178,182,214]],
['hw-based',[139,178,182,214]],
['features',[139,178,182,214]],
['aename',[139,182,214,216]],
['gyártói',[139,214,216,219]],
['típusnév',[139,214,216]],
['manufacturer',[139,214,216,219,229,234]],
['aehardwareversion',[139,182,214,215]],
['hardver',[139,214,215,219]],
['aesoftware',[139,182,214,217]],
['softwaretype',[139,178,179,214,217,243]],
['ae-n',[139,214,217]],
['futó',[139,178,179,202,205,214,217]],
['modemname',[139,182,214,220]],
['kiolvasott',[139,178,183,184,214,220,221]],
['megnevezése',[139,214,220,229,234]],
['modemsoftwareversion',[139,182,214,221]],
['szoftververziója',[139,214,221]],
['cashregistername',[139,182,214,219]],
['típusmegjelölése',[139,214,219]],
['designation',[139,214,219]],
['cashregisterhardwareversion',[139,182,214,218]],
['hardververziója',[139,214,218]],
['cashregistereventtype',[139,157,160,161]],
['e-pénztárgépben',[139,157,160,161,170,174]],
['bekövetkezett',[139,157,160,161]],
['események',[139,157,160,161]],
['naplózás',[139,157]],
['adata',[139,157,159]],
['descriptive',[139,157,159]],
['cashregisterpositiontype',[139,160,162,166]],
['földrajzi',[139,160,162,166,168,169]],
['helye',[139,160,162,166,222,225,303,410,416]],
['geographical',[139,160,162,166]],
['location',[139,160,162,166,222,224,225,303,410,416]],
['latitude',[139,162,166,168]],
['nillable',[139,166,168,169]],
['szélessége',[139,166,168]],
['fokban',[139,166,168,169]],
['tizedesjegy',[139,166,168,169]],
['pontossággal',[139,166,168,169]],
['előjelet',[139,166,168,169]],
['használva',[139,166,168,169]],
['using',[139,166,168,169,303,379,382]],
['longitude',[139,162,166,169]],
['hosszúsága',[139,166,169]],
['height',[139,162,166,167]],
['tengerszint',[139,166,167]],
['feletti',[139,166,167]],
['magassága',[139,166,167]],
['méterben',[139,166,167]],
['altitude',[139,166,167]],
['above',[139,166,167]],
['level',[139,166,167,229,231]],
['metres',[139,166,167]],
['cashregisterstatetype',[139,160,163,170]],
['rendszerállapot',[139,160,163,170]],
['statisztika',[139,160,163,170]],
['statistics',[139,160,163,170]],
['cashregisterworkstate',[139,163,170,173]],
['aeblockunblockstate',[139,163,170,171]],
['fiscaldaystate',[139,163,170,175]],
['állapota',[139,170,175]],
['lastsentrecordcounter',[139,163,170,177]],
['utoljára',[139,170,176,177]],
['recordcounter',[139,170,176,177,303,370,373,410,415]],
['further',[139,170,176,177,303,433,434]],
['generate',[139,170,176,177]],
['chapter',[139,170,176,177]],
['lastrecordcounter',[139,163,170,176]],
['e-pénztárgépen',[139,170,176,178,179,202,205,208,222,223,275,277,303,370,373,410,412,415]],
['aestate',[139,163,170,172]],
['kitölteni',[139,160,162,170,172,178,182,303,352,360,433,437]],
['should',[139,160,161,163,170,172,178,182,197,199]],
['filled',[139,170,172,178,182,303,352,360,433,437]],
['based',[139,170,172,178,182]],
['errors',[139,160,163,170,174]],
['utolsó',[139,160,161,163,170,174]],
['cashregisterstate',[139,160,163,170,174]],
['rekord',[139,170,174]],
['küldése',[139,170,174]],
['jelentkezett',[139,170,174]],
['hibák',[139,160,163,170,174]],
['kódjainak',[139,170,174]],
['codes',[139,170,174,268]],
['have',[139,170,174]],
['occurred',[139,170,174]],
['since',[139,170,174]],
['record',[139,170,174]],
['cashregistertechnicalinfotype',[139,160,164,178]],
['cashregistersoftware',[139,164,178,179]],
['imei',[139,164,178,183]],
['száma',[139,178,183,184,186,227,228,303,321,322,323,324,379,381,383,385,396,397]],
['imsi',[139,164,178,184]],
['epénztárgépben',[139,178,184]],
['operatorsite',[139,164,178,185]],
['operatorsitetype',[139,178,185,222]],
['üzemeltetői',[139,178,185,202,204,207]],
['üzemeltetési',[139,178,185,202,204,207,222,224,225,303,410,416]],
['hely',[139,178,185,202,204,207,222,224]],
['vattype',[139,178,189,273,274,275]],
['aktuális',[139,160,163,164,178,189,202,203,204,205,206]],
['Áfa-tábla',[]],
['current',[139,160,163,164,178,181,189,202,203,204,205,206,303,469]],
['table',[139,178,189,202,206,209]],
['registrationnumber',[139,164,178,187]],
['üzembehelyezési',[139,139,178,187,295]],
['latest',[139,178,187,188]],
['installation',[139,178,187]],
['communicationprotocolversion',[139,164,178,180]],
['protokoll',[139,178,180]],
['protocol',[139,178,180]],
['schemaversion',[139,164,178,188]],
['legfrissebb',[139,178,188]],
['aminek',[139,178,188]],
['képzett',[139,178,188]],
['üzenetek',[139,178,188]],
['megfelelnek',[139,178,188]],
['epdprocessidentifiers',[139,164,178,181]],
['epdprocessidentifierstype',[139,178,181,202]],
['jelenlegi',[139,178,181,202]],
['állapotát',[139,178,181,202]],
['előállító',[139,178,181,202]],
['végrehajtott',[139,178,181,202,203,204,205,206]],
['utasítások',[139,178,181,202]],
['valamint',[139,178,181,202]],
['legutolsó',[139,178,181,202]],
['átvett',[139,178,181,202]],
['időzített',[139,178,181,202]],
['folyamat',[139,178,181,202,203,204,205,206,207,208,209,303,475]],
['azonosítói',[139,178,181,202]],
['process',[139,178,181,202,203,204,205,206,207,208,209,303,475]],
['executed',[139,178,181,202,203,204,205,206,207,208,209]],
['instructions',[139,178,181,202]],
['produce',[139,178,181,202]],
['received',[139,178,181,202]],
['timed',[139,178,181,202]],
['hardwaretechnicalinfo',[139,164,178,182]],
['posassignedbankaccounts',[139,164,178,186]],
['posassignedbankaccountlisttype',[139,178,186,227]],
['terminálhoz',[139,178,186,227,228]],
['rendelt',[139,178,186,227,228]],
['assigned',[139,178,186,227,228]],
['terminal',[139,178,186,227,228]],
['cashregistertimeupdatetype',[139,160,165,190]],
['állítás',[139,190]],
['oldtime',[139,165,190,194]],
['amikor',[139,190,194]],
['átállítás',[139,190,194]],
['régi',[139,190,194]],
['bekövetkezik',[139,190,194]],
['occurs',[139,190,194]],
['newtime',[139,165,190,193]],
['beállított',[139,190,193]],
['setting',[139,160,165,190,193]],
['changeduration',[139,165,190,191]],
['diszkréten',[139,190,191]],
['változtatja',[139,190,191]],
['időt',[139,190,191]],
['hanem',[139,190,191]],
['időtávon',[139,190,191]],
['gyorsítja',[139,190,191]],
['lassítja',[139,190,191]],
['akkor',[139,160,165,190,191]],
['átmenet',[139,190,191]],
['does',[139,190,191]],
['discretely',[139,190,191]],
['accelerates',[139,190,191]],
['slows',[139,190,191]],
['down',[139,190,191]],
['over',[139,190,191]],
['interval',[139,190,191]],
['transition',[139,190,191]],
['changemode',[139,165,190,192]],
['időállítás',[139,190,192]],
['módja',[139,190,192,303,396,399,407,409]],
['1-gsm',[139,190,192]],
['szinkronizáció',[139,190,192]],
['2-szervizes',[139,190,192]],
['beavatkozás',[139,190,192]],
['3-Üzemeltető',[]],
['módosítva',[139,190,192]],
['4-számítógép',[139,190,192]],
['e-pénztárgépeknél',[139,190,192]],
['számítógép',[139,190,192]],
['órájához',[139,190,192]],
['szinkronizálva',[139,190,192]],
['5-egyéb',[139,190,192]],
['automatikus',[139,190,192]],
['synchronisation',[139,190,192]],
['2-intervention',[139,190,192]],
['3-adjusted',[139,190,192]],
['4-for',[139,190,192]],
['computer-based',[139,190,192]],
['registers',[139,190,192]],
['synchronized',[139,190,192]],
['computer',[139,190,192]],
['5-other',[139,190,192]],
['automatic',[139,190,192]],
['1|2|3|4|5',[139,190,192]],
['operatorsitevalidfrom',[139,185,222,224]],
['érvényesség',[139,139,222,224,229,238,239]],
['kezdete',[139,222,224]],
['start',[139,222,224]],
['shop',[139,185,222,225,303,410,416,418,419,420]],
['shoptype',[139,222,225,303,410,416,418]],
['taxpayertype',[139,222,223,226,303,410,412,417,443]],
['üzemeltető',[139,222,223,226,303,410,412,417]],
['üzemanyagkúton',[139,139,222,222,223,226,303,303,410,410,412,417]],
['kétvállalkozós',[139,222,223,226,303,410,412,417]],
['üzemanyag',[139,222,226,303,410,417]],
['tulajdonos',[139,222,226,303,410,417]],
['fuel',[139,222,223,226,303,379,381,410,412,417,457,458,460]],
['two-operator',[139,222,223,226,303,410,412,417]],
['well',[139,222,223,226,303,410,412,417]],
['cotaxpayer',[139,185,222,223,303,410,412]],
['Üzemanyagkúton',[]],
['posassignedbankaccountnumber',[139,186,227,228]],
['főverziója',[139,153,155,243,251]],
['main',[139,153,155,243,251,303,396]],
['softwarename',[139,179,217,243,252]],
['softwarehash',[139,179,217,243,248]],
['algoritmussal',[139,243,248]],
['kiszámított',[139,243,248]],
['calculated',[139,243,248]],
['algorithm',[139,243,248]],
['softwarelastupdatetime',[139,179,217,243,250]],
['frissítésének',[139,243,250]],
['softwaredevname',[139,179,217,243,246]],
['fejlesztőjének',[139,243,244,245,246,247]],
['softwaredevcontact',[139,179,217,243,244]],
['elektronikus',[139,243,244,303,396,400]],
['elérhetősége',[139,243,244]],
['electronic',[139,243,244,303,396,400]],
['contact',[139,243,244]],
['softwaredevcountrycode',[139,179,217,243,245]],
['iso-3166',[139,243,245]],
['alpha2',[139,243,245]],
['országkódja',[139,243,245]],
['softwaredevtaxnumber',[139,179,217,243,247]],
['taxpayeraddressitemtype',[139,254,257,258]],
['címsor',[139,254,257,258]],
['adat',[139,229,236,254,257,258,303,304,307,308,309,310,311,312,313,365,366,367,410,411,450,466]],
['item',[139,210,213,254,257,258,303,312,313,314,469]],
['taxpayeraddressclass',[139,254,256,258]],
['taxpayeraddress',[139,254,255,258]],
['detailedaddresstype',[139,254,255,303,315,316,352]],
['címadatai',[139,254,255]],
['productitemtype',[139,229,241,242]],
['termék',[139,229,235,236,303,450]],
['adattípus',[139,229]],
['dtszkid',[139,229,232,242]],
['dtszk',[139,229,232]],
['productid',[139,229,233,242]],
['terméken',[139,229,233]],
['feltüntetett',[139,229,233,303,374,377]],
['productname',[139,229,235,242]],
['productmanufacturer',[139,229,234,242]],
['gyártó',[139,229,234]],
['validfrom',[139,229,238,242]],
['Érvényesség',[]],
['-tól',[139,229,238]],
['validto',[139,229,239,242]],
['státusza',[139,229,236,303,333,338]],
['vtsz',[139,229,240,242]],
['vámtarifa',[139,229,240]],
['customs',[139,229,240]],
['tariff',[139,229,240]],
['categorycode',[139,229,230,242]],
['kategória',[139,229,230,231,275,277]],
['category',[139,229,230,231,275,277,303,352,361,450]],
['categorynamelevel4',[139,229,231,242]],
['szint',[139,229,231]],
['unitofmeasure',[139,229,237,242]],
['taxpayeraddresslisttype',[139,257,259,262]],
['taxpayeraddressitem',[139,257,258,262]],
['productlisttype',[139,241]],
['productitem',[139,241,242]],
['keresési',[139,241,242]],
['feltételnek',[139,241,242]],
['megfelelt',[139,241,242]],
['termékeket',[139,241,242]],
['eredménylista',[139,241,242]],
['products',[139,241,242]],
['match',[139,241,242]],
['criteria',[139,241,242]],
['taxpayerdatatype',[139,259]],
['taxpayername',[139,223,226,259,263,303,412,417,443,446]],
['taxpayershortname',[139,223,226,259,264,303,412,417,443,447]],
['rövidített',[139,259,264]],
['shortened',[139,259,264]],
['taxnumberdetail',[139,259,261]],
['taxnumbertype',[139,259,261,303,339,340,439,443,444,445]],
['részletes',[139,259,261,303,315,316,352]],
['detailed',[139,259,261,303,315,316,352]],
['vatgroupmembership',[139,259,265]],
['csoport',[139,259,265,303,339,340]],
['tagsága',[139,259,265]],
['membership',[139,259,265]],
['taxpayeraddresslist',[139,259,262]],
['teaorcodelisttype',[139,266]],
['üzlet',[139,266,267,303,418,419,420]],
['tevékenységei',[139,266]],
['activities',[139,266,267]],
['teaorcode',[139,266,267]],
['tevékenysége',[139,266,267]],
['endpointslisttype',[139,195]],
['endpointok',[139,195]],
['endpoints',[139,195,196]],
['endpointtype',[139,195,196,197]],
['hívás',[139,195,196]],
['paraméterei',[139,195,196]],
['parameters',[139,160,164,195,196]],
['positiveinteger',[139,197,199]],
['hívásának',[139,197,198,199]],
['sorrendje',[139,197,199]],
['1-től',[139,197,199,303,370,373,410,415]],
['kezdődően',[139,197,199]],
['kisebb',[139,197,199]],
['sorszámú',[139,197,199]],
['endpointtal',[139,197,199]],
['először',[139,197,199]],
['meghívni',[139,197,199]],
['order',[139,197,199]],
['requested',[139,197,199,201]],
['starting',[139,197,199]],
['lower',[139,197,199]],
['httpmethod',[139,196,197,198]],
['metódusa',[139,197,198]],
['hívjon',[139,197,200]],
['vatgrouptype',[139,268,275,276]],
['kulcsok',[139,268,271,275]],
['collectorcode',[139,268,269,276,303,327,328,329]],
['collectorcodetype',[139,268,269,303,328,329,452]],
['gyűjtő',[139,268,269,303,328,329]],
['jele',[139,268,269,303,328,329]],
['karakteren',[139,268,269,303,328,329,374,376]],
['collector',[139,268,269,303,326,327,328,329,330,331,332,452]],
['vatpercentage',[139,268,272,276]],
['Áfa-kulcs',[]],
['százalékban',[139,268,270,272]],
['kifejezve',[139,268,270,271,272]],
['tizedespontot',[139,268,270,272]],
['alkalmazva',[139,268,270,272]],
['rate',[139,268,270,271,272,275,276,303,374,378,466]],
['where',[139,268,270,272]],
['vatcontent',[139,268,270,276]],
['adott',[139,268,270,275,276,303,312,313,328,330,331,332,352,362,433,438,469]],
['kulcshoz',[139,268,270]],
['tartozó',[139,268,270,303,328,330,331,332]],
['tartalom',[139,268,270]],
['content',[139,268,270,303,304,305,421,426,427,432]],
['vatlabel',[139,268,271,276]],
['egyes',[139,268,271]],
['mértéke',[139,268,271]],
['számban',[139,268,271]],
['százalékjellel',[139,268,271]],
['each',[139,268,271]],
['whole',[139,268,271,303,308,365,366]],
['vatlisttype',[139,273]],
['kódok',[139,273]],
['rates',[139,275,277]],
['vatvalidfrom',[139,189,274,275,277]],
['azon',[139,275,277]],
['időpont',[139,275,277]],
['amit',[139,275,277]],
['kulcsokat',[139,275,277]],
['címkéket',[139,275,277]],
['alkalmazni',[139,275,277]],
['labels',[139,275,277]],
['applied',[139,275,277]],
['vatgroup',[139,189,274,275,276]],
['kulcs',[139,275,276,303,464,465]],
['cashregisterinfotype',[139,160]],
['cashregisterevent',[139,160,161]],
['naplója',[139,160,161]],
['adatszolgáltatás',[139,160,161,163,303,370]],
['eseményeket',[139,160,161]],
['occured',[139,160,161,163]],
['previous',[139,160,161,163]],
['cashregistertechnicalinfo',[139,160,164]],
['állapotának',[139,160,163,164]],
['megfelelően',[139,160,163,164]],
['illetve',[139,160,163]],
['tekintetében',[139,160,163]],
['cashregisterposition',[139,160,162]],
['műholdas',[139,160,162]],
['helymeghatározásra',[139,160,162]],
['alkalmas',[139,160,162]],
['applicable',[139,160,162]],
['cashregistertimeupdate',[139,160,165]],
['állításra',[139,160,165]],
['óraállítás',[139,160,165]],
['körülményeiről',[139,160,165]],
['szolgáltatni',[139,160,165]],
['been',[139,160,165]],
['then',[139,160,165]],
['currentvatprocessid',[139,181,202,206]],
['processidentifiertype',[139,202,203,204,205,206,207,208,209,303,475]],
['táblát',[139,202,206,209]],
['érvényre',[139,202,203,204,205,206,207,208,209]],
['juttató',[139,202,203,204,205,206,207,208,209]],
['utasítás',[139,202,203,204,205,206,207,208,209]],
['instruction',[139,202,203,204,205,206,207,208,209]],
['enforces',[139,202,203,204,205,206,208]],
['nextvatprocessid',[139,181,202,209]],
['következő',[139,202,207,209]],
['jövőben',[139,202,207,208,209]],
['végrehajtandó',[139,202,207,208,209]],
['future',[139,202,207,208,209]],
['will',[139,202,207,209]],
['enforce',[139,202,207,209]],
['next',[139,202,207,208,209]],
['currentoperatorsiteprocessid',[139,181,202,204]],
['adatokat',[139,202,204,207]],
['nextoperatorsiteprocessid',[139,181,202,207]],
['currentsoftwareprocessid',[139,181,202,205]],
['verziót',[139,202,205,208]],
['running',[139,202,205]],
['nextsoftwareprocessid',[139,181,202,208]],
['következően',[139,202,208]],
['futtatandó',[139,202,208]],
['currentaeblockunblockstateprocessid',[139,181,202,203]],
['állapotot',[139,202,203]],
['firmwareslicetype',[139,210]],
['letöltöthető',[139,210,213]],
['állomány',[139,210,212,213,303,365,368,396,400,421,424,427,430]],
['downloadable',[139,210,213]],
['firmwareslicenumber',[139,210,213]],
['firmwarehash',[139,210,212]],
['letöltött',[139,210,212]],
['amely',[139,210,212,303,315]],
['segítségével',[139,210,212]],
['ellenőrizhető',[139,210,212]],
['letöltötés',[139,210,212]],
['sérült',[139,210,212]],
['downloaded',[139,210,211,212]],
['equal',[139,210,212]],
['this',[139,210,211,212]],
['firmwaredownloadurl',[139,210,211]],
['letöltéséhez',[139,210,211]],
['szükséges',[139,210,211,303,323,325]],
['simpleaddress',[223,225,226,303,315,317,334,384,412,416,417,418,443]],
['detailedaddress',[223,225,226,303,315,316,334,384,412,416,417,418,443]],
['shopname',[225,303,416,418,419]],
['shopshortname',[225,303,416,418,420]],
['countrycode',[255,303,316,317,352,355,433,436]],
['region',[255,303,316,317,352,362,433,438]],
['postalcode',[255,303,316,317,352,360,433,437]],
['city',[255,303,316,317,352,354,433,435]],
['streetname',[255,303,316,352,364]],
['publicplacecategory',[255,303,316,352,361]],
['building',[255,303,316,352,353]],
['staircase',[255,303,316,352,363]],
['floor',[255,303,316,352,357,433,434]],
['door',[255,303,316,352,356,433,434]],
['lotnumber',[255,303,316,352,358]],
['taxpayerid',[261,303,339,340,343,396,401,439,441,444,445]],
['vatcode',[261,303,339,340,343,439,442,444,445]],
['countycode',[261,303,339,340,343,439,440,444,445]],
['apnumbertype',[303,321,322,323,324,396,397,448]],
['applikáció',[303,453]],
['eseménykód',[303,453]],
['digit4type',[303,456]],
['eantype',[303,463]],
['file512kbinarytype',[303,318,319,467]],
['bináris',[303,318,319,467]],
['fájl',[303,318,319,467,468]],
['512kb',[303,467]],
['binary',[303,318,319,467]],
['fileextensiontype',[303,318,320,468]],
['kiterjesztés',[303,318,320,468]],
['cancellationreasontype',[303,450]],
['sztornózás',[303,450]],
['cancellation',[303,450,461,469]],
['Ügyfél',[]],
['elállása',[303,450,471]],
['kezelői',[303,450]],
['téves',[303,450]],
['bevitel',[303,450,451]],
['incorrect',[303,450]],
['input',[303,450,451,472]],
['fizetőeszköz',[303,389,402,403,404,405,406,407,450,451]],
['instrument',[303,389,405,406,407,450,451,474]],
['készleten',[303,450]],
['stock',[303,450]],
['bizonylattípus',[303,450]],
['kibocsátása',[303,450]],
['sikertelen',[303,450]],
['használat',[303,450]],
['unsuccesfull',[303,450]],
['ügyfél',[303,303,450,450,471]],
['próbavásárlás',[303,450]],
['test',[303,450]],
['purchase',[303,339,340,450]],
['cashpaymenttitletype',[303,451]],
['pénztári',[303,451]],
['befizetés-kifizetés',[303,451]],
['csere',[303,451]],
['jogcímei',[303,451]],
['payment',[303,389,390,394,402,403,404,405,406,407,408,409,451,474]],
['title',[303,451]],
['váltópénz',[303,451]],
['coin',[303,451]],
['pénztáros',[303,451]],
['pénzfelvétel',[303,451]],
['withdraw',[303,451]],
['cashier',[303,451]],
['díjbeszedés',[303,451]],
['collection',[303,451]],
['sorsjegy',[303,451]],
['eladás',[303,451]],
['sale',[303,451,460]],
['lottery',[303,451]],
['ticket',[303,451]],
['előleg',[303,451]],
['advance',[303,451]],
['pénztár',[303,451,460]],
['hiány',[303,451]],
['deficit',[303,451]],
['borravaló',[303,451]],
['befizetés',[303,451]],
['fölözés',[303,451]],
['skimming',[303,451]],
['levétel',[303,451]],
['utalvány',[303,451]],
['kivét',[303,451]],
['take',[303,451]],
['ajándékkártya',[303,451]],
['gift',[303,451]],
['card',[303,379,381,383,385,389,391,395,451,458,460,474]],
['bérkifizetés',[303,451]],
['salary',[303,451]],
['munkabér',[303,451]],
['pre-payment',[303,451]],
['postaköltség',[303,451]],
['postal',[303,451]],
['cost',[303,451]],
['rezsi',[303,451]],
['costs',[303,451]],
['Áruvásárlás',[]],
['purchasing',[303,451]],
['goods',[303,339,340,451,469,471]],
['záróösszeg',[303,451]],
['balance',[303,370,371,451,476]],
['kifizetés',[303,451]],
['payments',[303,451]],
['készpénzfelvétel',[303,451]],
['cashback',[303,451]],
['gyüjtő',[303,452]],
['|n|tam|aam|eam|atk|tra|sec|art|ant|eue|ho',[303,452]],
['customervatstatustype',[303,333,338,454]],
['vevő',[303,333,334,335,336,337,338,341,365,383,387,454]],
['customers',[303,333,338,454]],
['domestic',[303,341,343,454]],
['alany',[303,454]],
['subject',[303,454]],
['természetes',[303,454]],
['személy',[303,454]],
['külföldi',[303,454]],
['non-vat',[303,454]],
['non-natural',[303,454]],
['foreign',[303,374,389,393,454]],
['natural',[303,454]],
['datanametype',[303,304,306,455]],
['adatmező',[303,304,305,306,455]],
['documentcategorytype',[303,457]],
['health',[303,383,384,385,386,387,388,457,458,460]],
['egészségkártya',[303,383,385,457]],
['Üzemanyagkártya',[]],
['consume',[303,457,458]],
['fogyasztási',[303,457,458,460,469]],
['összesítő',[303,457,458,460,469]],
['consumption',[303,457,458,460,469]],
['summary',[303,457,458,460,469]],
['deferred',[303,457,458,460]],
['szállodai',[303,457,458,460]],
['átterhelés',[303,457,460]],
['hotel',[303,457,458,460]],
['milyen',[303,458,476]],
['class',[303,458,476]],
['what',[303,458,476]],
['Üzemanyagkártyás',[]],
['értékesítési',[303,458]],
['sales',[303,458,469]],
['egészségkártyás',[303,458,460]],
['fund',[303,383,384,385,386,387,388,458,460]],
['átterhelési',[303,458]],
['simplifiedinvoice',[303,458]],
['normalinvoice',[303,458]],
['normál',[303,458]],
['normal',[303,458]],
['documentdatetype',[303,347,351,459]],
['2010-01-01',[303,459]],
['sorszám',[303,370,373,410,415,460,462]],
['uk|ek|sz|ny|pm|pj|sa|fo|ot',[303,460]],
['nn|nz',[303,460]],
['napnyitás',[303,460]],
['értékesítés',[303,303,460,469]],
['jelentés',[303,345,346,347,460,476]],
['napi',[303,326,327,328,330,331,332,345,346,347,460,476]],
['open',[303,460,476]],
['cashflow',[303,345,346,347,460,469,476]],
['cashregister',[303,460,476]],
['daily',[303,326,327,328,330,331,332,345,346,347,460,476]],
['documentoperationtype',[303,396,399,461]],
['create',[303,461]],
['eredeti',[303,461]],
['documentum',[303,461]],
['modify',[303,461]],
['dokumentumot',[303,461]],
['storno',[303,461]],
['érvénytelenítése',[303,461]],
['documentunboundedindextype',[303,462]],
['index',[303,462]],
['encryptedsymmetricinitialvectortype',[303,464]],
['kiegészítő',[303,464]],
['részének',[303,464,465]],
['titkosításához',[303,464,465]],
['szimmetrikus',[303,464,465]],
['symmetric',[303,464,465]],
['encrypt',[303,464,465]],
['additional',[303,304,312,464]],
['encryptedsymmetrickeytype',[303,465]],
['itemnaturetype',[303,469]],
['tétel',[303,312,314,469]],
['jellege',[303,352,361,433,434,469]],
['nature',[303,469]],
['Értékesítés',[]],
['sztornó',[303,469]],
['engedmény',[303,469]],
['discount',[303,469]],
['üzletpolitikai',[303,469]],
['kedvezmény',[303,469]],
['non-business',[303,469]],
['policy',[303,469]],
['preferences',[303,469]],
['felár',[303,469]],
['extra',[303,469]],
['göngyöleg',[303,469]],
['visszaváltás',[303,469]],
['returnable',[303,469]],
['packing',[303,469]],
['visszáru',[303,469,471]],
['returned',[303,469]],
['vevőt',[303,469]],
['érintő',[303,469]],
['tranzakció',[303,469]],
['involving',[303,469]],
['linenumbertype',[303,312,314,470]],
['tételszám',[303,470]],
['line',[303,470]],
['modificationreasontype',[303,471]],
['defective',[303,471]],
['vásárlástól',[303,471]],
['customer’s',[303,471]],
['right',[303,471]],
['rescission',[303,471]],
['pénzérték',[303,472]],
['számjegy',[303,379,381,439,440,442,472]],
['tizedesjegyet',[303,472]],
['tartalmazhat',[303,472]],
['money',[303,472]],
['digits',[303,439,440,472]],
['include',[303,472]],
['exchangeratetype',[303,374,378,466]],
['Árfolyam',[]],
['minexclusive',[303,466]],
['ntcacontrolcodetype',[303,410,414,473]],
['bizonylaton',[303,410,414,473]],
['szereplő',[303,308,309,410,411,414,473]],
['control',[303,370,410,414,473]],
['paymentmethodtype',[303,407,409,474]],
['fizetés',[303,407,408,409,474]],
['szep',[303,474]],
['szÉp',[]],
['kártya',[303,389,395,474]],
['készpénz',[303,389,392,474]],
['bankkártya',[303,474]],
['hitelkártya',[303,474]],
['helyettesítő',[303,474]],
['debit',[303,474]],
['credit',[303,474]],
['cash-substitute',[303,474]],
['azonnali',[303,474]],
['fizetési',[303,407,408,409,474]],
['immediate',[303,389,390,474]],
['riportot',[303,476]],
['cashregisteropenbalance',[303,476]],
['pénztárnyitás',[303,476]],
['dailycashflow',[303,476]],
['additionaldatatype',[303,304,308,309,312,313,410,411]],
['további',[303,304,312,433,434]],
['leírására',[303,304,312]],
['dataname',[303,304,306,309,313,411]],
['datadescription',[303,304,305,309,313,411]],
['tartalmának',[303,304,305,421,426,427,432]],
['szöveges',[303,304,305]],
['datavalue',[303,304,307,309,313,411]],
['receiptadditional',[303,304,307]],
['otherdocumentadditional',[303,304,307]],
['invoiceadditional',[303,304,307]],
['additionaldata',[303,304,307,308,309,366,410,411]],
['receiptcore',[303,304,307]],
['otherdocumentcore',[303,304,307]],
['invoicecore',[303,304,307]],
['attachmenttype',[303,318,365,368]],
['csatoltmány',[303,318]],
['attachment',[303,318,365,368]],
['filebinary',[303,318,319,368]],
['csatolt',[303,318,319,320,365,368]],
['attached',[303,318,319,320,365,368]],
['fileextension',[303,318,320,368]],
['például',[303,318,320]],
['example',[303,318,320]],
['additionalheadtype',[303,308,365,366]],
['egészére',[303,308,365,366]],
['dokumentumon',[303,308,309,410,411]],
['relation',[303,308,309,410,411]],
['additionallinestype',[303,310,365,367]],
['tételeire',[303,310,365,367]],
['items',[303,310,311,328,330,331,332,365,367]],
['additionalline',[303,310,311,367]],
['additionallinetype',[303,310,311,312]],
['tételekre',[303,310,311]],
['linenumber',[303,311,312,314]],
['additionallinedata',[303,311,312,313]],
['tételre',[303,312,313]],
['addresstype',[303,315,333,334,383,384,418,443]],
['egyszerű',[303,315,317,433]],
['címet',[303,315]],
['tartalmaz',[303,315]],
['includes',[303,315]],
['either',[303,315]],
['simple',[303,315,317,433]],
['simpleaddresstype',[303,315,317,433]],
['basicereceiptrequesttype',[303,321]],
['apnumber',[303,321,322,323,324,396,397]],
['basicereceiptresponsetype',[303,323]],
['callbackrequired',[303,323,325]],
['visszahívás',[303,323,325]],
['callback',[303,323,325]],
['commercecollectorlisttype',[303,326,347,349]],
['gyüjtők',[303,326]],
['commerce',[303,326,327,328,347,348,349]],
['collectors',[303,326,347,349]],
['commercialcollector',[303,326,327,349]],
['commercecollectortype',[303,326,327,328]],
['forgalom',[303,326,327,328,347,348]],
['gyűjtők',[303,326,327,328,347,349]],
['összesítés',[303,326,327,328]],
['collectorgrossamount',[303,327,328,330]],
['gyűjtőbe',[303,328,330,331,332]],
['tételek',[303,328,330,331,332]],
['összértéke',[303,328,330,331,332]],
['given',[303,328,330,331,332,352,362,433,438]],
['collectornetamount',[303,327,328,331]],
['nettó',[303,328,331]],
['collectorvatamount',[303,327,328,332]],
['customerinfotype',[303,333]],
['customervatstatus',[303,333,338]],
['customervatdata',[303,333,337]],
['customervatdatatype',[303,333,337,341]],
['alanyisági',[303,333,337,341]],
['subjectivity',[303,333,337,341]],
['customername',[303,333,336]],
['customeraddress',[303,333,334]],
['címe',[303,333,334,383,384]],
['customerbankaccountnumber',[303,333,335]],
['bankszámlaszáma',[303,333,335]],
['customertaxnumbertype',[303,339,341,343]],
['lehet',[303,339,341,343,370,373,410,415]],
['groupmembertaxnumber',[303,339,340,343]],
['termékbeszerzés',[303,339,340]],
['igénybevétele',[303,339,340]],
['alatt',[303,339,340]],
['done',[303,339,340]],
['under',[303,339,340]],
['customertaxnumber',[303,337,341,343]],
['communityvatnumber',[303,337,341,342]],
['thirdstatetaxid',[303,337,341,344]],
['harmadik',[303,341,344]],
['országbeli',[303,341,344]],
['third',[303,341,344]],
['dailycashflowdetailtype',[303,345,346,347]],
['detail',[303,345,346,347]],
['commercecollectorlist',[303,346,347,349]],
['bontás',[303,347,349]],
['összege',[303,347,348,374,375,407,408]],
['count',[303,346,347,350]],
['darabszáma',[303,347,350]],
['fulfillmentdate',[303,346,347,351]],
['bizonylatok',[303,347,351]],
['teljesítési',[303,347,351]],
['dátuma',[303,347,351]],
['fulfillment',[303,347,351]],
['dailycashflowdetaillisttype',[303,345]],
['dailycashflowdetail',[303,345,346]],
['címadatok',[303,352,433,434]],
['tartomány',[303,352,362,433,438]],
['értelmezhető',[303,352,360,362,433,437,438]],
['országban',[303,352,362,433,438]],
['alpha',[303,352,362,433,438]],
['province',[303,352,362,433,438]],
['appropriate',[303,352,362,433,438]],
['értékkel',[303,352,360,433,437]],
['interpreted',[303,352,360,433,437]],
['need',[303,352,360,433,437]],
['település',[303,352,354,433,435]],
['settlement',[303,352,354,433,435]],
['közterület',[303,352,361,364,433,434]],
['public',[303,352,361,364,433,434]],
['place',[303,352,361,364,433,434]],
['házszám',[303,352,359,433,434]],
['house',[303,352,359,433,434]],
['Épület',[]],
['lépcsőház',[303,352,363]],
['emelet',[303,352,357,433,434]],
['ajtó',[303,352,356,433,434]],
['helyrajzi',[303,352,358,433,434]],
['documentadditionaldatatype',[303,365]],
['tájékoztatási',[303,365]],
['változott',[303,365,369,370,372,396,398]],
['struktúra',[303,365,369,370,372,396,398]],
['additionalhead',[303,365,366]],
['dokumentumhoz',[303,365,368]],
['additionallines',[303,365,367]],
['documentcontroldatatype',[303,370]],
['rész',[303,370]],
['bejegyzés',[303,370,373,410,415]],
['belül',[303,370,373,410,415]],
['sorszámozva',[303,370,373,410,415]],
['szigorúan',[303,370,373,410,415]],
['monoton',[303,370,373,410,415]],
['növekvő',[303,370,373,410,415]],
['benne',[303,370,373,410,415]],
['kihagyás',[303,370,373,410,415]],
['within',[303,370,373,410,415]],
['numbered',[303,370,373,410,415]],
['strictly',[303,370,373,410,415]],
['monotonic',[303,370,373,410,415]],
['ascending',[303,370,373,410,415]],
['skips',[303,370,373,410,415]],
['balancechange',[303,370,371]],
['instrumenttype',[303,370,371,389]],
['fióktartalom',[303,370,371]],
['változásának',[303,370,371]],
['foreigncurrencytype',[303,374,389,393]],
['valutában',[303,374,375,389,393]],
['befizetett',[303,374,389,393]],
['összeg',[303,374,389,393]],
['currencyamount',[303,374,375,393]],
['valuta',[303,374,375,377,378]],
['currencycode',[303,374,376,393]],
['valutanem',[303,374,376]],
['nagybetűvel',[303,374,376]],
['exchangerate',[303,374,378,393]],
['egységének',[303,374,378]],
['kifejezett',[303,374,378]],
['currencyhufamount',[303,374,377,393]],
['összegének',[303,374,377]],
['árfolyamon',[303,374,377]],
['számolva',[303,374,377]],
['fuelcardinfotype',[303,379]],
['fuelcardnumber',[303,379,381]],
['legalább',[303,379,381]],
['négy',[303,379,381]],
['authorizationnumber',[303,379,380]],
['engedélyezési',[303,379,380]],
['azonosítószám',[303,379,380,383,387]],
['authorisation',[303,379,380]],
['vehicleregistrationnumber',[303,379,382]],
['rendszám',[303,379,382]],
['kizárólag',[303,379,382]],
['betűket',[303,379,382]],
['számokat',[303,379,382]],
['feltüntetve',[303,379,382]],
['healthfundinfotype',[303,383]],
['egészségpénztár',[303,383,384,386,388]],
['healthfundname',[303,383,388]],
['healthfundaddress',[303,383,384]],
['healthfundcode',[303,383,386]],
['healthfundmembernumber',[303,383,387]],
['tagszáma',[303,383,387]],
['egészségpénztári',[303,383,387]],
['healthfundcardnumber',[303,383,385]],
['cashhufamount',[303,371,389,392]],
['forint',[303,389,392]],
['foreigncurrency',[303,371,389,393]],
['cardpaymentamount',[303,371,389,391]],
['bankkártyás',[303,389,391]],
['bevételek',[303,389,390,391,394,395]],
['szepcardamount',[303,371,389,395]],
['aframount',[303,371,389,390]],
['otherpayment',[303,371,389,394]],
['otherpaymenttype',[303,389,394,402]],
['fizetőeszközben',[303,389,394]],
['megszerzett',[303,389,394]],
['metadatatype',[303,396]],
['üzleti',[53,108,303,396]],
['documentoperation',[303,396,399]],
['adóalany',[303,396,401,439,441]],
['törzsszáma',[303,396,401,439,441]],
['csoportos',[303,396,401,439,441]],
['taxation',[303,396,401,439,441,442]],
['arrangement',[303,396,401,439,441]],
['electronicinvoicehash',[303,396,400]],
['lenyomata',[303,396,400,421,424,427,430]],
['otherpaymentcode',[303,394,402,403]],
['ajÁnd|hŰsÉg|smart|gÖngy|kupon|egyeb-',[]],
['otherpaymenthufamount',[303,394,402,404]],
['egyenlege',[303,402,404]],
['paymentinstrumentstype',[303,405]],
['fizetőeszközök',[303,405]],
['instruments',[303,405]],
['paymentinstrument',[303,405,406]],
['paymentinstrumenttype',[303,405,406,407]],
['documentpaymentmethod',[303,406,407,409]],
['módok',[303,407,408,409]],
['documentpaymentamount',[303,406,407,408]],
['reportheadertype',[303,410]],
['issuestartdatetime',[303,410,413]],
['nyitásának',[303,410,413]],
['opening',[303,410,413]],
['ntcacontrolcode',[303,410,414]],
['boriték',[303,421,424,425,427,428,430,431]],
['tipus',[303,421,427]],
['signed',[303,421,427]],
['verziója',[303,421,426,427,432]],
['base64-ben',[303,421,422,423,425,427,428,429,431]],
['kódolt',[303,421,422,423,425,427,428,429,431]],
['tartalma',[303,421,422,423,427,428,429]],
['coredocument',[303,421,423]],
['encoded',[303,421,422,423,425,427,428,429,431]],
['form',[303,421,422,423,425,427,428,429,431]],
['customerdocument',[303,421,422]],
['aláirása',[303,421,425,427,431]],
['corereport',[303,427,429]],
['customerreport',[303,427,428]],
['címtípus',[303,433]],
['additionaladdressdetail',[303,317,433,434]],
['adóalanyiság',[303,439,442]],
['típusának',[303,439,442]],
['jelzésére',[303,439,442]],
['payer',[303,443,445,446,447]],
['rövid',[303,418,420,443,447]],
['short',[303,418,420,443,447]],
['Üzlet',[]]
 ];
 return w;
}
        