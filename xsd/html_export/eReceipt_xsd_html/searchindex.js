
function CreateFileRefs()
{
var fr=new Array();
            
fr[1]=['http://schemas.nav.gov.hu/NTCA/1.0/common', 'http___schemas_nav_gov_hu_ntca_1_0_common.html'];
fr[2]=['http://schemas.nav.gov.hu/OSA/3.0/api', 'http___schemas_nav_gov_hu_osa_3_0_api.html'];
fr[3]=['http://schemas.nav.gov.hu/OSA/3.0/base', 'http___schemas_nav_gov_hu_osa_3_0_base.html'];
fr[4]=['http://schemas.nav.gov.hu/OSA/3.0/data', 'http___schemas_nav_gov_hu_osa_3_0_data.html'];
fr[5]=['http://schemas.nav.gov.hu/ERECEIPT/1.1/communicationData', 'http___schemas_nav_gov_hu_ereceipt_1_1_communicationdata.html'];
fr[6]=['http://schemas.nav.gov.hu/ERECEIPT/1.1/documentData', 'http___schemas_nav_gov_hu_ereceipt_1_1_documentdata.html'];
fr[7]=['http://schemas.nav.gov.hu/ERECEIPT/1.1/documentMessage', 'http___schemas_nav_gov_hu_ereceipt_1_1_documentmessage.html'];
fr[8]=['http://schemas.nav.gov.hu/ERECEIPT/1.1/api', 'http___schemas_nav_gov_hu_ereceipt_1_1_api.html'];
fr[9]=['http://schemas.nav.gov.hu/ERECEIPT/1.1/base', 'http___schemas_nav_gov_hu_ereceipt_1_1_base.html'];
fr[10]=['http://schemas.nav.gov.hu/ERECEIPT/1.1/reportMessage', 'http___schemas_nav_gov_hu_ereceipt_1_1_reportmessage.html'];
fr[11]=['common.xsd', 'common_xsd.html'];
fr[12]=['BasicHeaderType', 'basicheadertype.html'];
fr[13]=['headerVersion', 'headerversion.html'];
fr[14]=['requestId', 'requestid.html'];
fr[15]=['requestVersion', 'requestversion.html'];
fr[16]=['timestamp', 'timestamp.html'];
fr[17]=['BasicRequestType', 'basicrequesttype.html'];
fr[18]=['header', 'header.html'];
fr[19]=['user', 'user.html'];
fr[20]=['BasicResponseType', 'basicresponsetype.html'];
fr[21]=['header', 'header1.html'];
fr[22]=['result', 'result.html'];
fr[23]=['BasicResultType', 'basicresulttype.html'];
fr[24]=['errorCode', 'errorcode.html'];
fr[25]=['funcCode', 'funccode.html'];
fr[26]=['message', 'message.html'];
fr[27]=['notifications', 'notifications.html'];
fr[28]=['CryptoType', 'cryptotype.html'];
fr[29]=['cryptoType', 'cryptotype1.html'];
fr[30]=['GeneralErrorHeaderResponseType', 'generalerrorheaderresponsetype.html'];
fr[31]=['NotificationsType', 'notificationstype.html'];
fr[32]=['notification', 'notification.html'];
fr[33]=['NotificationType', 'notificationtype.html'];
fr[34]=['notificationCode', 'notificationcode.html'];
fr[35]=['notificationText', 'notificationtext.html'];
fr[36]=['TechnicalValidationResultType', 'technicalvalidationresulttype.html'];
fr[37]=['message', 'message1.html'];
fr[38]=['validationErrorCode', 'validationerrorcode.html'];
fr[39]=['validationResultCode', 'validationresultcode.html'];
fr[40]=['UserHeaderType', 'userheadertype.html'];
fr[41]=['login', 'login.html'];
fr[42]=['passwordHash', 'passwordhash.html'];
fr[43]=['predecessorTaxNumber', 'predecessortaxnumber.html'];
fr[44]=['requestSignature', 'requestsignature.html'];
fr[45]=['taxNumber', 'taxnumber.html'];
fr[46]=['GeneralErrorHeaderResponse', 'generalerrorheaderresponse.html'];
fr[47]=['GeneralExceptionResponse', 'generalexceptionresponse.html'];
fr[48]=['AtomicStringType100', 'atomicstringtype100.html'];
fr[49]=['AtomicStringType1024', 'atomicstringtype1024.html'];
fr[50]=['AtomicStringType128', 'atomicstringtype128.html'];
fr[51]=['AtomicStringType15', 'atomicstringtype15.html'];
fr[52]=['AtomicStringType16', 'atomicstringtype16.html'];
fr[53]=['AtomicStringType2', 'atomicstringtype2.html'];
fr[54]=['AtomicStringType200', 'atomicstringtype200.html'];
fr[55]=['AtomicStringType2048', 'atomicstringtype2048.html'];
fr[56]=['AtomicStringType255', 'atomicstringtype255.html'];
fr[57]=['AtomicStringType256', 'atomicstringtype256.html'];
fr[58]=['AtomicStringType32', 'atomicstringtype32.html'];
fr[59]=['AtomicStringType4', 'atomicstringtype4.html'];
fr[60]=['AtomicStringType4000', 'atomicstringtype4000.html'];
fr[61]=['AtomicStringType50', 'atomicstringtype50.html'];
fr[62]=['AtomicStringType512', 'atomicstringtype512.html'];
fr[63]=['AtomicStringType64', 'atomicstringtype64.html'];
fr[64]=['AtomicStringType8', 'atomicstringtype8.html'];
fr[65]=['BankAccountNumberType', 'bankaccountnumbertype.html'];
fr[66]=['BusinessResultCodeType', 'businessresultcodetype.html'];
fr[67]=['CommunityVatNumberType', 'communityvatnumbertype.html'];
fr[68]=['CountryCodeType', 'countrycodetype.html'];
fr[69]=['CountyCodeType', 'countycodetype.html'];
fr[70]=['CurrencyType', 'currencytype.html'];
fr[71]=['EntityIdType', 'entityidtype.html'];
fr[72]=['FunctionCodeType', 'functioncodetype.html'];
fr[73]=['GenericDateType', 'genericdatetype.html'];
fr[74]=['GenericDecimalType', 'genericdecimaltype.html'];
fr[75]=['GenericTimestampType', 'generictimestamptype.html'];
fr[76]=['GenericUnsignedIntegerType', 'genericunsignedintegertype.html'];
fr[77]=['LocalizationType', 'localizationtype.html'];
fr[78]=['LoginType', 'logintype.html'];
fr[79]=['PlateNumberType', 'platenumbertype.html'];
fr[80]=['PostalCodeType', 'postalcodetype.html'];
fr[81]=['RequestPageType', 'requestpagetype.html'];
fr[82]=['ResponsePageType', 'responsepagetype.html'];
fr[83]=['SHA256Type', 'sha256type.html'];
fr[84]=['SHA512Type', 'sha512type.html'];
fr[85]=['SimpleText100NotBlankType', 'simpletext100notblanktype.html'];
fr[86]=['SimpleText1024NotBlankType', 'simpletext1024notblanktype.html'];
fr[87]=['SimpleText15NotBlankType', 'simpletext15notblanktype.html'];
fr[88]=['SimpleText200NotBlankType', 'simpletext200notblanktype.html'];
fr[89]=['SimpleText255NotBlankType', 'simpletext255notblanktype.html'];
fr[90]=['SimpleText50NotBlankType', 'simpletext50notblanktype.html'];
fr[91]=['SimpleText512NotBlankType', 'simpletext512notblanktype.html'];
fr[92]=['SwiftCodeType', 'swiftcodetype.html'];
fr[93]=['TaxIdentificationNumberType', 'taxidentificationnumbertype.html'];
fr[94]=['TaxpayerIdType', 'taxpayeridtype.html'];
fr[95]=['TechnicalResultCodeType', 'technicalresultcodetype.html'];
fr[96]=['VatCodeType', 'vatcodetype.html'];
fr[97]=['invoiceApi.xsd', 'invoiceapi_xsd.html'];
fr[98]=['AdditionalQueryParamsType', 'additionalqueryparamstype.html'];
fr[99]=['currency', 'currency.html'];
fr[100]=['groupMemberTaxNumber', 'groupmembertaxnumber.html'];
fr[101]=['invoiceAppearance', 'invoiceappearance.html'];
fr[102]=['invoiceCategory', 'invoicecategory.html'];
fr[103]=['name', 'name.html'];
fr[104]=['paymentMethod', 'paymentmethod.html'];
fr[105]=['source', 'source.html'];
fr[106]=['taxNumber', 'taxnumber1.html'];
fr[107]=['AnnulmentDataType', 'annulmentdatatype.html'];
fr[108]=['annulmentDecisionDate', 'annulmentdecisiondate.html'];
fr[109]=['annulmentDecisionUser', 'annulmentdecisionuser.html'];
fr[110]=['annulmentVerificationStatus', 'annulmentverificationstatus.html'];
fr[111]=['AnnulmentOperationListType', 'annulmentoperationlisttype.html'];
fr[112]=['annulmentOperation', 'annulmentoperation.html'];
fr[113]=['AnnulmentOperationType', 'annulmentoperationtype.html'];
fr[114]=['annulmentOperation', 'annulmentoperation1.html'];
fr[115]=['index', 'index1.html'];
fr[116]=['invoiceAnnulment', 'invoiceannulment.html'];
fr[117]=['AuditDataType', 'auditdatatype.html'];
fr[118]=['batchIndex', 'batchindex.html'];
fr[119]=['index', 'index2.html'];
fr[120]=['insCusUser', 'inscususer.html'];
fr[121]=['insdate', 'insdate.html'];
fr[122]=['originalRequestVersion', 'originalrequestversion.html'];
fr[123]=['source', 'source1.html'];
fr[124]=['transactionId', 'transactionid.html'];
fr[125]=['BasicOnlineInvoiceRequestType', 'basiconlineinvoicerequesttype.html'];
fr[126]=['software', 'software.html'];
fr[127]=['BasicOnlineInvoiceResponseType', 'basiconlineinvoiceresponsetype.html'];
fr[128]=['software', 'software1.html'];
fr[129]=['BusinessValidationResultType', 'businessvalidationresulttype.html'];
fr[130]=['message', 'message2.html'];
fr[131]=['pointer', 'pointer.html'];
fr[132]=['validationErrorCode', 'validationerrorcode1.html'];
fr[133]=['validationResultCode', 'validationresultcode1.html'];
fr[134]=['DateIntervalParamType', 'dateintervalparamtype.html'];
fr[135]=['dateFrom', 'datefrom.html'];
fr[136]=['dateTo', 'dateto.html'];
fr[137]=['DateTimeIntervalParamType', 'datetimeintervalparamtype.html'];
fr[138]=['dateTimeFrom', 'datetimefrom.html'];
fr[139]=['dateTimeTo', 'datetimeto.html'];
fr[140]=['GeneralErrorResponseType', 'generalerrorresponsetype.html'];
fr[141]=['software', 'software2.html'];
fr[142]=['technicalValidationMessages', 'technicalvalidationmessages.html'];
fr[143]=['InvoiceChainDigestResultType', 'invoicechaindigestresulttype.html'];
fr[144]=['availablePage', 'availablepage.html'];
fr[145]=['currentPage', 'currentpage.html'];
fr[146]=['invoiceChainElement', 'invoicechainelement.html'];
fr[147]=['InvoiceChainDigestType', 'invoicechaindigesttype.html'];
fr[148]=['batchIndex', 'batchindex1.html'];
fr[149]=['customerTaxNumber', 'customertaxnumber.html'];
fr[150]=['insDate', 'insdate1.html'];
fr[151]=['invoiceNumber', 'invoicenumber.html'];
fr[152]=['invoiceOperation', 'invoiceoperation.html'];
fr[153]=['originalRequestVersion', 'originalrequestversion1.html'];
fr[154]=['supplierTaxNumber', 'suppliertaxnumber.html'];
fr[155]=['InvoiceChainElementType', 'invoicechainelementtype.html'];
fr[156]=['invoiceChainDigest', 'invoicechaindigest.html'];
fr[157]=['invoiceLines', 'invoicelines.html'];
fr[158]=['invoiceReferenceData', 'invoicereferencedata.html'];
fr[159]=['InvoiceChainQueryType', 'invoicechainquerytype.html'];
fr[160]=['invoiceDirection', 'invoicedirection.html'];
fr[161]=['invoiceNumber', 'invoicenumber1.html'];
fr[162]=['taxNumber', 'taxnumber2.html'];
fr[163]=['InvoiceDataResultType', 'invoicedataresulttype.html'];
fr[164]=['auditData', 'auditdata.html'];
fr[165]=['compressedContentIndicator', 'compressedcontentindicator.html'];
fr[166]=['electronicInvoiceHash', 'electronicinvoicehash.html'];
fr[167]=['invoiceData', 'invoicedata.html'];
fr[168]=['InvoiceDigestResultType', 'invoicedigestresulttype.html'];
fr[169]=['availablePage', 'availablepage1.html'];
fr[170]=['currentPage', 'currentpage1.html'];
fr[171]=['invoiceDigest', 'invoicedigest.html'];
fr[172]=['InvoiceDigestType', 'invoicedigesttype.html'];
fr[173]=['batchIndex', 'batchindex2.html'];
fr[174]=['completenessIndicator', 'completenessindicator.html'];
fr[175]=['currency', 'currency1.html'];
fr[176]=['customerGroupMemberTaxNumber', 'customergroupmembertaxnumber.html'];
fr[177]=['customerName', 'customername.html'];
fr[178]=['customerTaxNumber', 'customertaxnumber1.html'];
fr[179]=['index', 'index3.html'];
fr[180]=['insDate', 'insdate2.html'];
fr[181]=['invoiceAppearance', 'invoiceappearance1.html'];
fr[182]=['invoiceCategory', 'invoicecategory1.html'];
fr[183]=['invoiceDeliveryDate', 'invoicedeliverydate.html'];
fr[184]=['invoiceIssueDate', 'invoiceissuedate.html'];
fr[185]=['invoiceNetAmount', 'invoicenetamount.html'];
fr[186]=['invoiceNetAmountHUF', 'invoicenetamounthuf.html'];
fr[187]=['invoiceNumber', 'invoicenumber2.html'];
fr[188]=['invoiceOperation', 'invoiceoperation1.html'];
fr[189]=['invoiceVatAmount', 'invoicevatamount.html'];
fr[190]=['invoiceVatAmountHUF', 'invoicevatamounthuf.html'];
fr[191]=['modificationIndex', 'modificationindex.html'];
fr[192]=['originalInvoiceNumber', 'originalinvoicenumber.html'];
fr[193]=['paymentDate', 'paymentdate.html'];
fr[194]=['paymentMethod', 'paymentmethod1.html'];
fr[195]=['source', 'source2.html'];
fr[196]=['supplierGroupMemberTaxNumber', 'suppliergroupmembertaxnumber.html'];
fr[197]=['supplierName', 'suppliername.html'];
fr[198]=['supplierTaxNumber', 'suppliertaxnumber1.html'];
fr[199]=['transactionId', 'transactionid1.html'];
fr[200]=['InvoiceLinesType', 'invoicelinestype.html'];
fr[201]=['maxLineNumber', 'maxlinenumber.html'];
fr[202]=['newCreatedLines', 'newcreatedlines.html'];
fr[203]=['InvoiceNumberQueryType', 'invoicenumberquerytype.html'];
fr[204]=['batchIndex', 'batchindex3.html'];
fr[205]=['invoiceDirection', 'invoicedirection1.html'];
fr[206]=['invoiceNumber', 'invoicenumber3.html'];
fr[207]=['supplierTaxNumber', 'suppliertaxnumber2.html'];
fr[208]=['InvoiceOperationListType', 'invoiceoperationlisttype.html'];
fr[209]=['compressedContent', 'compressedcontent.html'];
fr[210]=['invoiceOperation', 'invoiceoperation2.html'];
fr[211]=['InvoiceOperationType', 'invoiceoperationtype.html'];
fr[212]=['electronicInvoiceHash', 'electronicinvoicehash1.html'];
fr[213]=['index', 'index4.html'];
fr[214]=['invoiceData', 'invoicedata1.html'];
fr[215]=['invoiceOperation', 'invoiceoperation3.html'];
fr[216]=['InvoiceQueryParamsType', 'invoicequeryparamstype.html'];
fr[217]=['additionalQueryParams', 'additionalqueryparams.html'];
fr[218]=['mandatoryQueryParams', 'mandatoryqueryparams.html'];
fr[219]=['relationalQueryParams', 'relationalqueryparams.html'];
fr[220]=['transactionQueryParams', 'transactionqueryparams.html'];
fr[221]=['InvoiceReferenceDataType', 'invoicereferencedatatype.html'];
fr[222]=['modificationIndex', 'modificationindex1.html'];
fr[223]=['modificationTimestamp', 'modificationtimestamp.html'];
fr[224]=['modifyWithoutMaster', 'modifywithoutmaster.html'];
fr[225]=['originalInvoiceNumber', 'originalinvoicenumber1.html'];
fr[226]=['ManageAnnulmentRequestType', 'manageannulmentrequesttype.html'];
fr[227]=['annulmentOperations', 'annulmentoperations.html'];
fr[228]=['exchangeToken', 'exchangetoken.html'];
fr[229]=['ManageInvoiceRequestType', 'manageinvoicerequesttype.html'];
fr[230]=['exchangeToken', 'exchangetoken1.html'];
fr[231]=['invoiceOperations', 'invoiceoperations.html'];
fr[232]=['MandatoryQueryParamsType', 'mandatoryqueryparamstype.html'];
fr[233]=['insDate', 'insdate3.html'];
fr[234]=['invoiceIssueDate', 'invoiceissuedate1.html'];
fr[235]=['originalInvoiceNumber', 'originalinvoicenumber2.html'];
fr[236]=['NewCreatedLinesType', 'newcreatedlinestype.html'];
fr[237]=['lineNumberIntervalEnd', 'linenumberintervalend.html'];
fr[238]=['lineNumberIntervalStart', 'linenumberintervalstart.html'];
fr[239]=['PointerType', 'pointertype.html'];
fr[240]=['line', 'line.html'];
fr[241]=['originalInvoiceNumber', 'originalinvoicenumber3.html'];
fr[242]=['tag', 'tag.html'];
fr[243]=['value', 'value.html'];
fr[244]=['ProcessingResultListType', 'processingresultlisttype.html'];
fr[245]=['annulmentData', 'annulmentdata.html'];
fr[246]=['originalRequestVersion', 'originalrequestversion2.html'];
fr[247]=['processingResult', 'processingresult.html'];
fr[248]=['ProcessingResultType', 'processingresulttype.html'];
fr[249]=['batchIndex', 'batchindex4.html'];
fr[250]=['businessValidationMessages', 'businessvalidationmessages.html'];
fr[251]=['compressedContentIndicator', 'compressedcontentindicator1.html'];
fr[252]=['index', 'index5.html'];
fr[253]=['invoiceStatus', 'invoicestatus.html'];
fr[254]=['originalRequest', 'originalrequest.html'];
fr[255]=['technicalValidationMessages', 'technicalvalidationmessages1.html'];
fr[256]=['QueryInvoiceChainDigestRequestType', 'queryinvoicechaindigestrequesttype.html'];
fr[257]=['invoiceChainQuery', 'invoicechainquery.html'];
fr[258]=['page', 'page.html'];
fr[259]=['QueryInvoiceChainDigestResponseType', 'queryinvoicechaindigestresponsetype.html'];
fr[260]=['invoiceChainDigestResult', 'invoicechaindigestresult.html'];
fr[261]=['QueryInvoiceCheckResponseType', 'queryinvoicecheckresponsetype.html'];
fr[262]=['invoiceCheckResult', 'invoicecheckresult.html'];
fr[263]=['QueryInvoiceDataRequestType', 'queryinvoicedatarequesttype.html'];
fr[264]=['invoiceNumberQuery', 'invoicenumberquery.html'];
fr[265]=['QueryInvoiceDataResponseType', 'queryinvoicedataresponsetype.html'];
fr[266]=['invoiceDataResult', 'invoicedataresult.html'];
fr[267]=['QueryInvoiceDigestRequestType', 'queryinvoicedigestrequesttype.html'];
fr[268]=['invoiceDirection', 'invoicedirection2.html'];
fr[269]=['invoiceQueryParams', 'invoicequeryparams.html'];
fr[270]=['page', 'page1.html'];
fr[271]=['QueryInvoiceDigestResponseType', 'queryinvoicedigestresponsetype.html'];
fr[272]=['invoiceDigestResult', 'invoicedigestresult.html'];
fr[273]=['QueryTaxpayerRequestType', 'querytaxpayerrequesttype.html'];
fr[274]=['taxNumber', 'taxnumber3.html'];
fr[275]=['QueryTaxpayerResponseType', 'querytaxpayerresponsetype.html'];
fr[276]=['infoDate', 'infodate.html'];
fr[277]=['taxpayerData', 'taxpayerdata.html'];
fr[278]=['taxpayerValidity', 'taxpayervalidity.html'];
fr[279]=['QueryTransactionListRequestType', 'querytransactionlistrequesttype.html'];
fr[280]=['insDate', 'insdate4.html'];
fr[281]=['page', 'page2.html'];
fr[282]=['requestStatus', 'requeststatus.html'];
fr[283]=['QueryTransactionListResponseType', 'querytransactionlistresponsetype.html'];
fr[284]=['transactionListResult', 'transactionlistresult.html'];
fr[285]=['QueryTransactionStatusRequestType', 'querytransactionstatusrequesttype.html'];
fr[286]=['returnOriginalRequest', 'returnoriginalrequest.html'];
fr[287]=['transactionId', 'transactionid2.html'];
fr[288]=['QueryTransactionStatusResponseType', 'querytransactionstatusresponsetype.html'];
fr[289]=['processingResults', 'processingresults.html'];
fr[290]=['RelationalQueryParamsType', 'relationalqueryparamstype.html'];
fr[291]=['invoiceDelivery', 'invoicedelivery.html'];
fr[292]=['invoiceNetAmount', 'invoicenetamount1.html'];
fr[293]=['invoiceNetAmountHUF', 'invoicenetamounthuf1.html'];
fr[294]=['invoiceVatAmount', 'invoicevatamount1.html'];
fr[295]=['invoiceVatAmountHUF', 'invoicevatamounthuf1.html'];
fr[296]=['paymentDate', 'paymentdate1.html'];
fr[297]=['RelationQueryDateType', 'relationquerydatetype.html'];
fr[298]=['queryOperator', 'queryoperator.html'];
fr[299]=['queryValue', 'queryvalue.html'];
fr[300]=['RelationQueryMonetaryType', 'relationquerymonetarytype.html'];
fr[301]=['queryOperator', 'queryoperator1.html'];
fr[302]=['queryValue', 'queryvalue1.html'];
fr[303]=['SoftwareType', 'softwaretype.html'];
fr[304]=['softwareDevContact', 'softwaredevcontact.html'];
fr[305]=['softwareDevCountryCode', 'softwaredevcountrycode.html'];
fr[306]=['softwareDevName', 'softwaredevname.html'];
fr[307]=['softwareDevTaxNumber', 'softwaredevtaxnumber.html'];
fr[308]=['softwareId', 'softwareid.html'];
fr[309]=['softwareMainVersion', 'softwaremainversion.html'];
fr[310]=['softwareName', 'softwarename.html'];
fr[311]=['softwareOperation', 'softwareoperation.html'];
fr[312]=['TaxpayerAddressItemType', 'taxpayeraddressitemtype.html'];
fr[313]=['taxpayerAddress', 'taxpayeraddress.html'];
fr[314]=['taxpayerAddressType', 'taxpayeraddresstype.html'];
fr[315]=['TaxpayerAddressListType', 'taxpayeraddresslisttype.html'];
fr[316]=['taxpayerAddressItem', 'taxpayeraddressitem.html'];
fr[317]=['TaxpayerDataType', 'taxpayerdatatype.html'];
fr[318]=['incorporation', 'incorporation.html'];
fr[319]=['taxNumberDetail', 'taxnumberdetail.html'];
fr[320]=['taxpayerAddressList', 'taxpayeraddresslist.html'];
fr[321]=['taxpayerName', 'taxpayername.html'];
fr[322]=['taxpayerShortName', 'taxpayershortname.html'];
fr[323]=['vatGroupMembership', 'vatgroupmembership.html'];
fr[324]=['TokenExchangeResponseType', 'tokenexchangeresponsetype.html'];
fr[325]=['encodedExchangeToken', 'encodedexchangetoken.html'];
fr[326]=['tokenValidityFrom', 'tokenvalidityfrom.html'];
fr[327]=['tokenValidityTo', 'tokenvalidityto.html'];
fr[328]=['TransactionListResultType', 'transactionlistresulttype.html'];
fr[329]=['availablePage', 'availablepage2.html'];
fr[330]=['currentPage', 'currentpage2.html'];
fr[331]=['transaction', 'transaction.html'];
fr[332]=['TransactionQueryParamsType', 'transactionqueryparamstype.html'];
fr[333]=['index', 'index6.html'];
fr[334]=['invoiceOperation', 'invoiceoperation4.html'];
fr[335]=['transactionId', 'transactionid3.html'];
fr[336]=['TransactionResponseType', 'transactionresponsetype.html'];
fr[337]=['transactionId', 'transactionid4.html'];
fr[338]=['TransactionType', 'transactiontype.html'];
fr[339]=['insCusUser', 'inscususer1.html'];
fr[340]=['insDate', 'insdate5.html'];
fr[341]=['itemCount', 'itemcount.html'];
fr[342]=['originalRequestVersion', 'originalrequestversion3.html'];
fr[343]=['requestStatus', 'requeststatus1.html'];
fr[344]=['source', 'source3.html'];
fr[345]=['technicalAnnulment', 'technicalannulment.html'];
fr[346]=['transactionId', 'transactionid5.html'];
fr[347]=['GeneralErrorResponse', 'generalerrorresponse.html'];
fr[348]=['ManageAnnulmentRequest', 'manageannulmentrequest.html'];
fr[349]=['ManageAnnulmentResponse', 'manageannulmentresponse.html'];
fr[350]=['ManageInvoiceRequest', 'manageinvoicerequest.html'];
fr[351]=['ManageInvoiceResponse', 'manageinvoiceresponse.html'];
fr[352]=['QueryInvoiceChainDigestRequest', 'queryinvoicechaindigestrequest.html'];
fr[353]=['QueryInvoiceChainDigestResponse', 'queryinvoicechaindigestresponse.html'];
fr[354]=['QueryInvoiceCheckRequest', 'queryinvoicecheckrequest.html'];
fr[355]=['QueryInvoiceCheckResponse', 'queryinvoicecheckresponse.html'];
fr[356]=['QueryInvoiceDataRequest', 'queryinvoicedatarequest.html'];
fr[357]=['QueryInvoiceDataResponse', 'queryinvoicedataresponse.html'];
fr[358]=['QueryInvoiceDigestRequest', 'queryinvoicedigestrequest.html'];
fr[359]=['QueryInvoiceDigestResponse', 'queryinvoicedigestresponse.html'];
fr[360]=['QueryTaxpayerRequest', 'querytaxpayerrequest.html'];
fr[361]=['QueryTaxpayerResponse', 'querytaxpayerresponse.html'];
fr[362]=['QueryTransactionListRequest', 'querytransactionlistrequest.html'];
fr[363]=['QueryTransactionListResponse', 'querytransactionlistresponse.html'];
fr[364]=['QueryTransactionStatusRequest', 'querytransactionstatusrequest.html'];
fr[365]=['QueryTransactionStatusResponse', 'querytransactionstatusresponse.html'];
fr[366]=['TokenExchangeRequest', 'tokenexchangerequest.html'];
fr[367]=['TokenExchangeResponse', 'tokenexchangeresponse.html'];
fr[368]=['AnnulmentVerificationStatusType', 'annulmentverificationstatustype.html'];
fr[369]=['IncorporationType', 'incorporationtype.html'];
fr[370]=['InvoiceDirectionType', 'invoicedirectiontype.html'];
fr[371]=['InvoiceStatusType', 'invoicestatustype.html'];
fr[372]=['ManageAnnulmentOperationType', 'manageannulmentoperationtype.html'];
fr[373]=['ManageInvoiceOperationType', 'manageinvoiceoperationtype.html'];
fr[374]=['OriginalRequestVersionType', 'originalrequestversiontype.html'];
fr[375]=['QueryNameType', 'querynametype.html'];
fr[376]=['QueryOperatorType', 'queryoperatortype.html'];
fr[377]=['RequestStatusType', 'requeststatustype.html'];
fr[378]=['SoftwareIdType', 'softwareidtype.html'];
fr[379]=['SoftwareOperationType', 'softwareoperationtype.html'];
fr[380]=['SourceType', 'sourcetype.html'];
fr[381]=['TaxpayerAddressTypeType', 'taxpayeraddresstypetype.html'];
fr[382]=['invoiceBase.xsd', 'invoicebase_xsd.html'];
fr[383]=['AddressType', 'addresstype.html'];
fr[384]=['detailedAddress', 'detailedaddress.html'];
fr[385]=['simpleAddress', 'simpleaddress.html'];
fr[386]=['DetailedAddressType', 'detailedaddresstype.html'];
fr[387]=['building', 'building.html'];
fr[388]=['city', 'city.html'];
fr[389]=['countryCode', 'countrycode.html'];
fr[390]=['door', 'door.html'];
fr[391]=['floor', 'floor.html'];
fr[392]=['lotNumber', 'lotnumber.html'];
fr[393]=['number', 'number.html'];
fr[394]=['postalCode', 'postalcode.html'];
fr[395]=['publicPlaceCategory', 'publicplacecategory.html'];
fr[396]=['region', 'region.html'];
fr[397]=['staircase', 'staircase.html'];
fr[398]=['streetName', 'streetname.html'];
fr[399]=['SimpleAddressType', 'simpleaddresstype.html'];
fr[400]=['additionalAddressDetail', 'additionaladdressdetail.html'];
fr[401]=['city', 'city1.html'];
fr[402]=['countryCode', 'countrycode1.html'];
fr[403]=['postalCode', 'postalcode1.html'];
fr[404]=['region', 'region1.html'];
fr[405]=['TaxNumberType', 'taxnumbertype.html'];
fr[406]=['countyCode', 'countycode.html'];
fr[407]=['taxpayerId', 'taxpayerid.html'];
fr[408]=['vatCode', 'vatcode.html'];
fr[409]=['InvoiceAppearanceType', 'invoiceappearancetype.html'];
fr[410]=['InvoiceCategoryType', 'invoicecategorytype.html'];
fr[411]=['InvoiceDateType', 'invoicedatetype.html'];
fr[412]=['InvoiceIndexType', 'invoiceindextype.html'];
fr[413]=['InvoiceTimestampType', 'invoicetimestamptype.html'];
fr[414]=['InvoiceUnboundedIndexType', 'invoiceunboundedindextype.html'];
fr[415]=['LineNumberType', 'linenumbertype.html'];
fr[416]=['MonetaryType', 'monetarytype.html'];
fr[417]=['PaymentMethodType', 'paymentmethodtype.html'];
fr[418]=['invoiceData.xsd', 'invoicedata_xsd.html'];
fr[419]=['AdditionalDataType', 'additionaldatatype.html'];
fr[420]=['dataDescription', 'datadescription.html'];
fr[421]=['dataName', 'dataname.html'];
fr[422]=['dataValue', 'datavalue.html'];
fr[423]=['AdvanceDataType', 'advancedatatype.html'];
fr[424]=['advanceIndicator', 'advanceindicator.html'];
fr[425]=['advancePaymentData', 'advancepaymentdata.html'];
fr[426]=['AdvancePaymentDataType', 'advancepaymentdatatype.html'];
fr[427]=['advanceExchangeRate', 'advanceexchangerate.html'];
fr[428]=['advanceOriginalInvoice', 'advanceoriginalinvoice.html'];
fr[429]=['advancePaymentDate', 'advancepaymentdate.html'];
fr[430]=['AggregateInvoiceLineDataType', 'aggregateinvoicelinedatatype.html'];
fr[431]=['lineDeliveryDate', 'linedeliverydate.html'];
fr[432]=['lineExchangeRate', 'lineexchangerate.html'];
fr[433]=['AircraftType', 'aircrafttype.html'];
fr[434]=['airCargo', 'aircargo.html'];
fr[435]=['operationHours', 'operationhours.html'];
fr[436]=['takeOffWeight', 'takeoffweight.html'];
fr[437]=['BatchInvoiceType', 'batchinvoicetype.html'];
fr[438]=['batchIndex', 'batchindex5.html'];
fr[439]=['invoice', 'invoice.html'];
fr[440]=['ContractNumbersType', 'contractnumberstype.html'];
fr[441]=['contractNumber', 'contractnumber.html'];
fr[442]=['ConventionalInvoiceInfoType', 'conventionalinvoiceinfotype.html'];
fr[443]=['contractNumbers', 'contractnumbers.html'];
fr[444]=['costCenters', 'costcenters.html'];
fr[445]=['customerCompanyCodes', 'customercompanycodes.html'];
fr[446]=['dealerCodes', 'dealercodes.html'];
fr[447]=['deliveryNotes', 'deliverynotes.html'];
fr[448]=['ekaerIds', 'ekaerids.html'];
fr[449]=['generalLedgerAccountNumbers', 'generalledgeraccountnumbers.html'];
fr[450]=['glnNumbersCustomer', 'glnnumberscustomer.html'];
fr[451]=['glnNumbersSupplier', 'glnnumberssupplier.html'];
fr[452]=['itemNumbers', 'itemnumbers.html'];
fr[453]=['materialNumbers', 'materialnumbers.html'];
fr[454]=['orderNumbers', 'ordernumbers.html'];
fr[455]=['projectNumbers', 'projectnumbers.html'];
fr[456]=['shippingDates', 'shippingdates.html'];
fr[457]=['supplierCompanyCodes', 'suppliercompanycodes.html'];
fr[458]=['CostCentersType', 'costcenterstype.html'];
fr[459]=['costCenter', 'costcenter.html'];
fr[460]=['CustomerCompanyCodesType', 'customercompanycodestype.html'];
fr[461]=['customerCompanyCode', 'customercompanycode.html'];
fr[462]=['CustomerDeclarationType', 'customerdeclarationtype.html'];
fr[463]=['productFeeWeight', 'productfeeweight.html'];
fr[464]=['productStream', 'productstream.html'];
fr[465]=['CustomerInfoType', 'customerinfotype.html'];
fr[466]=['customerAddress', 'customeraddress.html'];
fr[467]=['customerBankAccountNumber', 'customerbankaccountnumber.html'];
fr[468]=['customerName', 'customername1.html'];
fr[469]=['customerVatData', 'customervatdata.html'];
fr[470]=['customerVatStatus', 'customervatstatus.html'];
fr[471]=['CustomerTaxNumberType', 'customertaxnumbertype.html'];
fr[472]=['groupMemberTaxNumber', 'groupmembertaxnumber1.html'];
fr[473]=['CustomerVatDataType', 'customervatdatatype.html'];
fr[474]=['communityVatNumber', 'communityvatnumber.html'];
fr[475]=['customerTaxNumber', 'customertaxnumber2.html'];
fr[476]=['thirdStateTaxId', 'thirdstatetaxid.html'];
fr[477]=['DealerCodesType', 'dealercodestype.html'];
fr[478]=['dealerCode', 'dealercode.html'];
fr[479]=['DeliveryNotesType', 'deliverynotestype.html'];
fr[480]=['deliveryNote', 'deliverynote.html'];
fr[481]=['DetailedReasonType', 'detailedreasontype.html'];
fr[482]=['case', 'case.html'];
fr[483]=['reason', 'reason.html'];
fr[484]=['DieselOilPurchaseType', 'dieseloilpurchasetype.html'];
fr[485]=['dieselOilQuantity', 'dieseloilquantity.html'];
fr[486]=['purchaseDate', 'purchasedate.html'];
fr[487]=['purchaseLocation', 'purchaselocation.html'];
fr[488]=['vehicleRegistrationNumber', 'vehicleregistrationnumber.html'];
fr[489]=['DiscountDataType', 'discountdatatype.html'];
fr[490]=['discountDescription', 'discountdescription.html'];
fr[491]=['discountRate', 'discountrate.html'];
fr[492]=['discountValue', 'discountvalue.html'];
fr[493]=['EkaerIdsType', 'ekaeridstype.html'];
fr[494]=['ekaerId', 'ekaerid.html'];
fr[495]=['FiscalRepresentativeType', 'fiscalrepresentativetype.html'];
fr[496]=['fiscalRepresentativeAddress', 'fiscalrepresentativeaddress.html'];
fr[497]=['fiscalRepresentativeBankAccountNumber', 'fiscalrepresentativebankaccountnumber.html'];
fr[498]=['fiscalRepresentativeName', 'fiscalrepresentativename.html'];
fr[499]=['fiscalRepresentativeTaxNumber', 'fiscalrepresentativetaxnumber.html'];
fr[500]=['GeneralLedgerAccountNumbersType', 'generalledgeraccountnumberstype.html'];
fr[501]=['generalLedgerAccountNumber', 'generalledgeraccountnumber.html'];
fr[502]=['GlnNumbersType', 'glnnumberstype.html'];
fr[503]=['glnNumber', 'glnnumber.html'];
fr[504]=['InvoiceDataType', 'invoicedatatype.html'];
fr[505]=['completenessIndicator', 'completenessindicator1.html'];
fr[506]=['invoiceIssueDate', 'invoiceissuedate2.html'];
fr[507]=['invoiceMain', 'invoicemain.html'];
fr[508]=['invoiceNumber', 'invoicenumber4.html'];
fr[509]=['InvoiceDetailType', 'invoicedetailtype.html'];
fr[510]=['additionalInvoiceData', 'additionalinvoicedata.html'];
fr[511]=['cashAccountingIndicator', 'cashaccountingindicator.html'];
fr[512]=['conventionalInvoiceInfo', 'conventionalinvoiceinfo.html'];
fr[513]=['currencyCode', 'currencycode.html'];
fr[514]=['exchangeRate', 'exchangerate.html'];
fr[515]=['invoiceAccountingDeliveryDate', 'invoiceaccountingdeliverydate.html'];
fr[516]=['invoiceAppearance', 'invoiceappearance2.html'];
fr[517]=['invoiceCategory', 'invoicecategory2.html'];
fr[518]=['invoiceDeliveryDate', 'invoicedeliverydate1.html'];
fr[519]=['invoiceDeliveryPeriodEnd', 'invoicedeliveryperiodend.html'];
fr[520]=['invoiceDeliveryPeriodStart', 'invoicedeliveryperiodstart.html'];
fr[521]=['paymentDate', 'paymentdate2.html'];
fr[522]=['paymentMethod', 'paymentmethod2.html'];
fr[523]=['periodicalSettlement', 'periodicalsettlement.html'];
fr[524]=['selfBillingIndicator', 'selfbillingindicator.html'];
fr[525]=['smallBusinessIndicator', 'smallbusinessindicator.html'];
fr[526]=['utilitySettlementIndicator', 'utilitysettlementindicator.html'];
fr[527]=['InvoiceHeadType', 'invoiceheadtype.html'];
fr[528]=['customerInfo', 'customerinfo.html'];
fr[529]=['fiscalRepresentativeInfo', 'fiscalrepresentativeinfo.html'];
fr[530]=['invoiceDetail', 'invoicedetail.html'];
fr[531]=['supplierInfo', 'supplierinfo.html'];
fr[532]=['InvoiceMainType', 'invoicemaintype.html'];
fr[533]=['batchInvoice', 'batchinvoice.html'];
fr[534]=['invoice', 'invoice1.html'];
fr[535]=['InvoiceReferenceType', 'invoicereferencetype.html'];
fr[536]=['modificationIndex', 'modificationindex2.html'];
fr[537]=['modifyWithoutMaster', 'modifywithoutmaster1.html'];
fr[538]=['originalInvoiceNumber', 'originalinvoicenumber4.html'];
fr[539]=['InvoiceType', 'invoicetype.html'];
fr[540]=['invoiceHead', 'invoicehead.html'];
fr[541]=['invoiceLines', 'invoicelines1.html'];
fr[542]=['invoiceReference', 'invoicereference.html'];
fr[543]=['invoiceSummary', 'invoicesummary.html'];
fr[544]=['productFeeSummary', 'productfeesummary.html'];
fr[545]=['ItemNumbersType', 'itemnumberstype.html'];
fr[546]=['itemNumber', 'itemnumber.html'];
fr[547]=['LineAmountsNormalType', 'lineamountsnormaltype.html'];
fr[548]=['lineGrossAmountData', 'linegrossamountdata.html'];
fr[549]=['lineNetAmountData', 'linenetamountdata.html'];
fr[550]=['lineVatData', 'linevatdata.html'];
fr[551]=['lineVatRate', 'linevatrate.html'];
fr[552]=['LineAmountsSimplifiedType', 'lineamountssimplifiedtype.html'];
fr[553]=['lineGrossAmountSimplified', 'linegrossamountsimplified.html'];
fr[554]=['lineGrossAmountSimplifiedHUF', 'linegrossamountsimplifiedhuf.html'];
fr[555]=['lineVatRate', 'linevatrate1.html'];
fr[556]=['LineGrossAmountDataType', 'linegrossamountdatatype.html'];
fr[557]=['lineGrossAmountNormal', 'linegrossamountnormal.html'];
fr[558]=['lineGrossAmountNormalHUF', 'linegrossamountnormalhuf.html'];
fr[559]=['LineModificationReferenceType', 'linemodificationreferencetype.html'];
fr[560]=['lineNumberReference', 'linenumberreference.html'];
fr[561]=['lineOperation', 'lineoperation.html'];
fr[562]=['LineNetAmountDataType', 'linenetamountdatatype.html'];
fr[563]=['lineNetAmount', 'linenetamount.html'];
fr[564]=['lineNetAmountHUF', 'linenetamounthuf.html'];
fr[565]=['LinesType', 'linestype.html'];
fr[566]=['line', 'line1.html'];
fr[567]=['mergedItemIndicator', 'mergeditemindicator.html'];
fr[568]=['LineType', 'linetype.html'];
fr[569]=['lineAmountsNormal', 'lineamountsnormal.html'];
fr[570]=['lineAmountsSimplified', 'lineamountssimplified.html'];
fr[571]=['additionalLineData', 'additionallinedata.html'];
fr[572]=['advanceData', 'advancedata.html'];
fr[573]=['aggregateInvoiceLineData', 'aggregateinvoicelinedata.html'];
fr[574]=['conventionalLineInfo', 'conventionallineinfo.html'];
fr[575]=['depositIndicator', 'depositindicator.html'];
fr[576]=['dieselOilPurchase', 'dieseloilpurchase.html'];
fr[577]=['GPCExcise', 'gpcexcise.html'];
fr[578]=['intermediatedService', 'intermediatedservice.html'];
fr[579]=['lineDescription', 'linedescription.html'];
fr[580]=['lineDiscountData', 'linediscountdata.html'];
fr[581]=['lineExpressionIndicator', 'lineexpressionindicator.html'];
fr[582]=['lineModificationReference', 'linemodificationreference.html'];
fr[583]=['lineNatureIndicator', 'linenatureindicator.html'];
fr[584]=['lineNumber', 'linenumber.html'];
fr[585]=['lineProductFeeContent', 'lineproductfeecontent.html'];
fr[586]=['netaDeclaration', 'netadeclaration.html'];
fr[587]=['newTransportMean', 'newtransportmean.html'];
fr[588]=['obligatedForProductFee', 'obligatedforproductfee.html'];
fr[589]=['productCodes', 'productcodes.html'];
fr[590]=['productFeeClause', 'productfeeclause.html'];
fr[591]=['quantity', 'quantity.html'];
fr[592]=['referencesToOtherLines', 'referencestootherlines.html'];
fr[593]=['unitOfMeasure', 'unitofmeasure.html'];
fr[594]=['unitOfMeasureOwn', 'unitofmeasureown.html'];
fr[595]=['unitPrice', 'unitprice.html'];
fr[596]=['unitPriceHUF', 'unitpricehuf.html'];
fr[597]=['LineVatDataType', 'linevatdatatype.html'];
fr[598]=['lineVatAmount', 'linevatamount.html'];
fr[599]=['lineVatAmountHUF', 'linevatamounthuf.html'];
fr[600]=['MaterialNumbersType', 'materialnumberstype.html'];
fr[601]=['materialNumber', 'materialnumber.html'];
fr[602]=['NewTransportMeanType', 'newtransportmeantype.html'];
fr[603]=['aircraft', 'aircraft.html'];
fr[604]=['vehicle', 'vehicle.html'];
fr[605]=['vessel', 'vessel.html'];
fr[606]=['brand', 'brand.html'];
fr[607]=['engineNum', 'enginenum.html'];
fr[608]=['firstEntryIntoService', 'firstentryintoservice.html'];
fr[609]=['serialNum', 'serialnum.html'];
fr[610]=['OrderNumbersType', 'ordernumberstype.html'];
fr[611]=['orderNumber', 'ordernumber.html'];
fr[612]=['PaymentEvidenceDocumentDataType', 'paymentevidencedocumentdatatype.html'];
fr[613]=['evidenceDocumentDate', 'evidencedocumentdate.html'];
fr[614]=['evidenceDocumentNo', 'evidencedocumentno.html'];
fr[615]=['obligatedAddress', 'obligatedaddress.html'];
fr[616]=['obligatedName', 'obligatedname.html'];
fr[617]=['obligatedTaxNumber', 'obligatedtaxnumber.html'];
fr[618]=['ProductCodesType', 'productcodestype.html'];
fr[619]=['productCode', 'productcode.html'];
fr[620]=['ProductCodeType', 'productcodetype.html'];
fr[621]=['productCodeOwnValue', 'productcodeownvalue.html'];
fr[622]=['productCodeValue', 'productcodevalue.html'];
fr[623]=['productCodeCategory', 'productcodecategory.html'];
fr[624]=['ProductFeeClauseType', 'productfeeclausetype.html'];
fr[625]=['customerDeclaration', 'customerdeclaration.html'];
fr[626]=['productFeeTakeoverData', 'productfeetakeoverdata.html'];
fr[627]=['ProductFeeDataType', 'productfeedatatype.html'];
fr[628]=['productFeeAmount', 'productfeeamount.html'];
fr[629]=['productFeeCode', 'productfeecode.html'];
fr[630]=['productFeeMeasuringUnit', 'productfeemeasuringunit.html'];
fr[631]=['productFeeQuantity', 'productfeequantity.html'];
fr[632]=['productFeeRate', 'productfeerate.html'];
fr[633]=['ProductFeeSummaryType', 'productfeesummarytype.html'];
fr[634]=['paymentEvidenceDocumentData', 'paymentevidencedocumentdata.html'];
fr[635]=['productChargeSum', 'productchargesum.html'];
fr[636]=['productFeeData', 'productfeedata.html'];
fr[637]=['productFeeOperation', 'productfeeoperation.html'];
fr[638]=['ProductFeeTakeoverDataType', 'productfeetakeoverdatatype.html'];
fr[639]=['takeoverAmount', 'takeoveramount.html'];
fr[640]=['takeoverReason', 'takeoverreason.html'];
fr[641]=['ProjectNumbersType', 'projectnumberstype.html'];
fr[642]=['projectNumber', 'projectnumber.html'];
fr[643]=['ReferencesToOtherLinesType', 'referencestootherlinestype.html'];
fr[644]=['referenceToOtherLine', 'referencetootherline.html'];
fr[645]=['ShippingDatesType', 'shippingdatestype.html'];
fr[646]=['shippingDate', 'shippingdate.html'];
fr[647]=['SummaryByVatRateType', 'summarybyvatratetype.html'];
fr[648]=['vatRate', 'vatrate.html'];
fr[649]=['vatRateGrossData', 'vatrategrossdata.html'];
fr[650]=['vatRateNetData', 'vatratenetdata.html'];
fr[651]=['vatRateVatData', 'vatratevatdata.html'];
fr[652]=['SummaryGrossDataType', 'summarygrossdatatype.html'];
fr[653]=['invoiceGrossAmount', 'invoicegrossamount.html'];
fr[654]=['invoiceGrossAmountHUF', 'invoicegrossamounthuf.html'];
fr[655]=['SummaryNormalType', 'summarynormaltype.html'];
fr[656]=['invoiceNetAmount', 'invoicenetamount2.html'];
fr[657]=['invoiceNetAmountHUF', 'invoicenetamounthuf2.html'];
fr[658]=['invoiceVatAmount', 'invoicevatamount2.html'];
fr[659]=['invoiceVatAmountHUF', 'invoicevatamounthuf2.html'];
fr[660]=['summaryByVatRate', 'summarybyvatrate.html'];
fr[661]=['SummarySimplifiedType', 'summarysimplifiedtype.html'];
fr[662]=['vatContentGrossAmount', 'vatcontentgrossamount.html'];
fr[663]=['vatContentGrossAmountHUF', 'vatcontentgrossamounthuf.html'];
fr[664]=['vatRate', 'vatrate1.html'];
fr[665]=['SummaryType', 'summarytype.html'];
fr[666]=['summaryNormal', 'summarynormal.html'];
fr[667]=['summarySimplified', 'summarysimplified.html'];
fr[668]=['summaryGrossData', 'summarygrossdata.html'];
fr[669]=['SupplierCompanyCodesType', 'suppliercompanycodestype.html'];
fr[670]=['supplierCompanyCode', 'suppliercompanycode.html'];
fr[671]=['SupplierInfoType', 'supplierinfotype.html'];
fr[672]=['communityVatNumber', 'communityvatnumber1.html'];
fr[673]=['exciseLicenceNum', 'exciselicencenum.html'];
fr[674]=['groupMemberTaxNumber', 'groupmembertaxnumber2.html'];
fr[675]=['individualExemption', 'individualexemption.html'];
fr[676]=['supplierAddress', 'supplieraddress.html'];
fr[677]=['supplierBankAccountNumber', 'supplierbankaccountnumber.html'];
fr[678]=['supplierName', 'suppliername1.html'];
fr[679]=['supplierTaxNumber', 'suppliertaxnumber3.html'];
fr[680]=['VatAmountMismatchType', 'vatamountmismatchtype.html'];
fr[681]=['case', 'case1.html'];
fr[682]=['vatRate', 'vatrate2.html'];
fr[683]=['VatRateGrossDataType', 'vatrategrossdatatype.html'];
fr[684]=['vatRateGrossAmount', 'vatrategrossamount.html'];
fr[685]=['vatRateGrossAmountHUF', 'vatrategrossamounthuf.html'];
fr[686]=['VatRateNetDataType', 'vatratenetdatatype.html'];
fr[687]=['vatRateNetAmount', 'vatratenetamount.html'];
fr[688]=['vatRateNetAmountHUF', 'vatratenetamounthuf.html'];
fr[689]=['VatRateType', 'vatratetype.html'];
fr[690]=['marginSchemeIndicator', 'marginschemeindicator.html'];
fr[691]=['noVatCharge', 'novatcharge.html'];
fr[692]=['vatAmountMismatch', 'vatamountmismatch.html'];
fr[693]=['vatContent', 'vatcontent.html'];
fr[694]=['vatDomesticReverseCharge', 'vatdomesticreversecharge.html'];
fr[695]=['vatExemption', 'vatexemption.html'];
fr[696]=['vatOutOfScope', 'vatoutofscope.html'];
fr[697]=['vatPercentage', 'vatpercentage.html'];
fr[698]=['VatRateVatDataType', 'vatratevatdatatype.html'];
fr[699]=['vatRateVatAmount', 'vatratevatamount.html'];
fr[700]=['vatRateVatAmountHUF', 'vatratevatamounthuf.html'];
fr[701]=['VehicleType', 'vehicletype.html'];
fr[702]=['engineCapacity', 'enginecapacity.html'];
fr[703]=['enginePower', 'enginepower.html'];
fr[704]=['kms', 'kms.html'];
fr[705]=['VesselType', 'vesseltype.html'];
fr[706]=['activityReferred', 'activityreferred.html'];
fr[707]=['length', 'length.html'];
fr[708]=['sailedHours', 'sailedhours.html'];
fr[709]=['InvoiceData', 'invoicedata2.html'];
fr[710]=['CustomerVatStatusType', 'customervatstatustype.html'];
fr[711]=['DataNameType', 'datanametype.html'];
fr[712]=['EkaerIdType', 'ekaeridtype.html'];
fr[713]=['ExchangeRateType', 'exchangeratetype.html'];
fr[714]=['LineNatureIndicatorType', 'linenatureindicatortype.html'];
fr[715]=['LineOperationType', 'lineoperationtype.html'];
fr[716]=['MarginSchemeType', 'marginschemetype.html'];
fr[717]=['ProductCodeCategoryType', 'productcodecategorytype.html'];
fr[718]=['ProductCodeValueType', 'productcodevaluetype.html'];
fr[719]=['ProductFeeMeasuringUnitType', 'productfeemeasuringunittype.html'];
fr[720]=['ProductFeeOperationType', 'productfeeoperationtype.html'];
fr[721]=['ProductStreamType', 'productstreamtype.html'];
fr[722]=['QuantityType', 'quantitytype.html'];
fr[723]=['RateType', 'ratetype.html'];
fr[724]=['TakeoverType', 'takeovertype.html'];
fr[725]=['UnitOfMeasureType', 'unitofmeasuretype.html'];
fr[726]=['communicationData.xsd', 'communicationdata_xsd.html'];
fr[727]=['AeInternalMetric', 'aeinternalmetric.html'];
fr[728]=['aeInternalMetricId', 'aeinternalmetricid.html'];
fr[729]=['aeInternalMetricValue', 'aeinternalmetricvalue.html'];
fr[730]=['AeInternalMetricListType', 'aeinternalmetriclisttype.html'];
fr[731]=['aeInternalMetric', 'aeinternalmetric1.html'];
fr[732]=['AeStateType', 'aestatetype.html'];
fr[733]=['aeInternalMetric', 'aeinternalmetric2.html'];
fr[734]=['batteryLevel', 'batterylevel.html'];
fr[735]=['freeStorage', 'freestorage.html'];
fr[736]=['gsmCell', 'gsmcell.html'];
fr[737]=['mobileConnection', 'mobileconnection.html'];
fr[738]=['provider', 'provider.html'];
fr[739]=['signalStrength', 'signalstrength.html'];
fr[740]=['AppSoftwareType', 'appsoftwaretype.html'];
fr[741]=['softwareId', 'softwareid1.html'];
fr[742]=['softwareMainVersion', 'softwaremainversion1.html'];
fr[743]=['softwareOperation', 'softwareoperation1.html'];
fr[744]=['CashRegisterEventType', 'cashregistereventtype.html'];
fr[745]=['eventCode', 'eventcode.html'];
fr[746]=['eventDescription', 'eventdescription.html'];
fr[747]=['CashRegisterInfoType', 'cashregisterinfotype.html'];
fr[748]=['cashRegisterEvent', 'cashregisterevent.html'];
fr[749]=['cashRegisterPosition', 'cashregisterposition.html'];
fr[750]=['cashRegisterState', 'cashregisterstate.html'];
fr[751]=['cashRegisterTechnicalInfo', 'cashregistertechnicalinfo.html'];
fr[752]=['cashRegisterTimeUpdate', 'cashregistertimeupdate.html'];
fr[753]=['CashRegisterPositionType', 'cashregisterpositiontype.html'];
fr[754]=['height', 'height.html'];
fr[755]=['latitude', 'latitude.html'];
fr[756]=['longitude', 'longitude.html'];
fr[757]=['CashRegisterStateType', 'cashregisterstatetype.html'];
fr[758]=['aeBlockUnblockState', 'aeblockunblockstate.html'];
fr[759]=['aeState', 'aestate.html'];
fr[760]=['cashRegisterWorkState', 'cashregisterworkstate.html'];
fr[761]=['errors', 'errors.html'];
fr[762]=['fiscalDayState', 'fiscaldaystate.html'];
fr[763]=['lastRecordCounter', 'lastrecordcounter.html'];
fr[764]=['lastSentRecordCounter', 'lastsentrecordcounter.html'];
fr[765]=['CashRegisterTechnicalInfoType', 'cashregistertechnicalinfotype.html'];
fr[766]=['cashRegisterSoftware', 'cashregistersoftware.html'];
fr[767]=['communicationProtocolVersion', 'communicationprotocolversion.html'];
fr[768]=['epdProcessIdentifiers', 'epdprocessidentifiers.html'];
fr[769]=['hardwareTechnicalInfo', 'hardwaretechnicalinfo.html'];
fr[770]=['imei', 'imei.html'];
fr[771]=['imsi', 'imsi.html'];
fr[772]=['operatorSite', 'operatorsite.html'];
fr[773]=['posAssignedBankAccounts', 'posassignedbankaccounts.html'];
fr[774]=['registrationNumber', 'registrationnumber.html'];
fr[775]=['schemaVersion', 'schemaversion.html'];
fr[776]=['vat', 'vat.html'];
fr[777]=['CashRegisterTimeUpdateType', 'cashregistertimeupdatetype.html'];
fr[778]=['changeDuration', 'changeduration.html'];
fr[779]=['changeMode', 'changemode.html'];
fr[780]=['newTime', 'newtime.html'];
fr[781]=['oldTime', 'oldtime.html'];
fr[782]=['EndpointsListType', 'endpointslisttype.html'];
fr[783]=['endpoints', 'endpoints.html'];
fr[784]=['EndpointType', 'endpointtype.html'];
fr[785]=['httpMethod', 'httpmethod.html'];
fr[786]=['sequence', 'sequence.html'];
fr[787]=['service', 'service.html'];
fr[788]=['url', 'url.html'];
fr[789]=['EpdProcessIdentifiersType', 'epdprocessidentifierstype.html'];
fr[790]=['currentAeBlockUnblockStateProcessId', 'currentaeblockunblockstateprocessid.html'];
fr[791]=['currentOperatorSiteProcessId', 'currentoperatorsiteprocessid.html'];
fr[792]=['currentSoftwareProcessId', 'currentsoftwareprocessid.html'];
fr[793]=['currentVatProcessId', 'currentvatprocessid.html'];
fr[794]=['nextOperatorSiteProcessId', 'nextoperatorsiteprocessid.html'];
fr[795]=['nextSoftwareProcessId', 'nextsoftwareprocessid.html'];
fr[796]=['nextVatProcessId', 'nextvatprocessid.html'];
fr[797]=['FirmwareSliceType', 'firmwareslicetype.html'];
fr[798]=['firmwareDownloadUrl', 'firmwaredownloadurl.html'];
fr[799]=['firmwareHash', 'firmwarehash.html'];
fr[800]=['firmwareSliceNumber', 'firmwareslicenumber.html'];
fr[801]=['HardwareTechnicalInfoType', 'hardwaretechnicalinfotype.html'];
fr[802]=['aeHardwareVersion', 'aehardwareversion.html'];
fr[803]=['aeName', 'aename.html'];
fr[804]=['aeSoftware', 'aesoftware.html'];
fr[805]=['cashRegisterHardwareVersion', 'cashregisterhardwareversion.html'];
fr[806]=['cashRegisterName', 'cashregistername.html'];
fr[807]=['modemName', 'modemname.html'];
fr[808]=['modemSoftwareVersion', 'modemsoftwareversion.html'];
fr[809]=['OperatorSiteType', 'operatorsitetype.html'];
fr[810]=['coTaxPayer', 'cotaxpayer.html'];
fr[811]=['operatorSiteValidFrom', 'operatorsitevalidfrom.html'];
fr[812]=['shop', 'shop.html'];
fr[813]=['taxPayer', 'taxpayer.html'];
fr[814]=['PosAssignedBankAccountListType', 'posassignedbankaccountlisttype.html'];
fr[815]=['posAssignedBankAccountNumber', 'posassignedbankaccountnumber.html'];
fr[816]=['ProductItemType', 'productitemtype.html'];
fr[817]=['categoryCode', 'categorycode.html'];
fr[818]=['categoryNameLevel4', 'categorynamelevel4.html'];
fr[819]=['dtszkId', 'dtszkid.html'];
fr[820]=['productId', 'productid.html'];
fr[821]=['productManufacturer', 'productmanufacturer.html'];
fr[822]=['productName', 'productname.html'];
fr[823]=['state', 'state.html'];
fr[824]=['unitOfMeasure', 'unitofmeasure1.html'];
fr[825]=['validFrom', 'validfrom.html'];
fr[826]=['validTo', 'validto.html'];
fr[827]=['vtsz', 'vtsz.html'];
fr[828]=['ProductListType', 'productlisttype.html'];
fr[829]=['productItem', 'productitem.html'];
fr[830]=['SoftwareType', 'softwaretype1.html'];
fr[831]=['softwareDevContact', 'softwaredevcontact1.html'];
fr[832]=['softwareDevCountryCode', 'softwaredevcountrycode1.html'];
fr[833]=['softwareDevName', 'softwaredevname1.html'];
fr[834]=['softwareDevTaxNumber', 'softwaredevtaxnumber1.html'];
fr[835]=['softwareHash', 'softwarehash.html'];
fr[836]=['softwareId', 'softwareid2.html'];
fr[837]=['softwareLastUpdateTime', 'softwarelastupdatetime.html'];
fr[838]=['softwareMainVersion', 'softwaremainversion2.html'];
fr[839]=['softwareName', 'softwarename1.html'];
fr[840]=['softwareOperation', 'softwareoperation2.html'];
fr[841]=['TaxpayerAddressItemType', 'taxpayeraddressitemtype1.html'];
fr[842]=['taxpayerAddress', 'taxpayeraddress1.html'];
fr[843]=['taxpayerAddressClass', 'taxpayeraddressclass.html'];
fr[844]=['TaxpayerAddressListType', 'taxpayeraddresslisttype1.html'];
fr[845]=['taxpayerAddressItem', 'taxpayeraddressitem1.html'];
fr[846]=['TaxpayerDataType', 'taxpayerdatatype1.html'];
fr[847]=['incorporation', 'incorporation1.html'];
fr[848]=['taxNumberDetail', 'taxnumberdetail1.html'];
fr[849]=['taxpayerAddressList', 'taxpayeraddresslist1.html'];
fr[850]=['taxpayerName', 'taxpayername1.html'];
fr[851]=['taxpayerShortName', 'taxpayershortname1.html'];
fr[852]=['vatGroupMembership', 'vatgroupmembership1.html'];
fr[853]=['TeaorCodeListType', 'teaorcodelisttype.html'];
fr[854]=['teaorCode', 'teaorcode.html'];
fr[855]=['VatGroupType', 'vatgrouptype.html'];
fr[856]=['collectorCode', 'collectorcode.html'];
fr[857]=['vatContent', 'vatcontent1.html'];
fr[858]=['vatLabel', 'vatlabel.html'];
fr[859]=['vatPercentage', 'vatpercentage1.html'];
fr[860]=['VatListType', 'vatlisttype.html'];
fr[861]=['vat', 'vat1.html'];
fr[862]=['VatType', 'vattype.html'];
fr[863]=['vatGroup', 'vatgroup.html'];
fr[864]=['vatValidFrom', 'vatvalidfrom.html'];
fr[865]=['AeBlockUnblockStateType', 'aeblockunblockstatetype.html'];
fr[866]=['BlockUnblockType', 'blockunblocktype.html'];
fr[867]=['CashRegisterWorkStateType', 'cashregisterworkstatetype.html'];
fr[868]=['CertificateSigningRequestType', 'certificatesigningrequesttype.html'];
fr[869]=['CertificateType', 'certificatetype.html'];
fr[870]=['CertificateTypeType', 'certificatetypetype.html'];
fr[871]=['CMSCertificateSigningRequestType', 'cmscertificatesigningrequesttype.html'];
fr[872]=['EventCodeType', 'eventcodetype.html'];
fr[873]=['FiscalDayStateType', 'fiscaldaystatetype.html'];
fr[874]=['GpsType', 'gpstype.html'];
fr[875]=['HttpMethodType', 'httpmethodtype.html'];
fr[876]=['IncorporationType', 'incorporationtype1.html'];
fr[877]=['MobileConnectionType', 'mobileconnectiontype.html'];
fr[878]=['PercentageType', 'percentagetype.html'];
fr[879]=['PrintMessageType', 'printmessagetype.html'];
fr[880]=['ProductStateType', 'productstatetype.html'];
fr[881]=['QueryCertificateResultType', 'querycertificateresulttype.html'];
fr[882]=['RegistrationNumberType', 'registrationnumbertype.html'];
fr[883]=['ServiceType', 'servicetype.html'];
fr[884]=['SoftwareIdType', 'softwareidtype1.html'];
fr[885]=['SoftwareOperationType', 'softwareoperationtype1.html'];
fr[886]=['TaxpayerAddressClassType', 'taxpayeraddressclasstype.html'];
fr[887]=['TeaorCodeType', 'teaorcodetype.html'];
fr[888]=['UnitOfMeasureType', 'unitofmeasuretype1.html'];
fr[889]=['UrlType', 'urltype.html'];
fr[890]=['documentData.xsd', 'documentdata_xsd.html'];
fr[891]=['DocumentDataType', 'documentdatatype.html'];
fr[892]=['consumeSummaryNumber', 'consumesummarynumber.html'];
fr[893]=['fuelCardInfo', 'fuelcardinfo.html'];
fr[894]=['healthFundInfo', 'healthfundinfo.html'];
fr[895]=['document', 'document.html'];
fr[896]=['documentIssueDate', 'documentissuedate.html'];
fr[897]=['documentNumber', 'documentnumber.html'];
fr[898]=['issueEndDateTime', 'issueenddatetime.html'];
fr[899]=['issueStartDateTime', 'issuestartdatetime.html'];
fr[900]=['DocumentDetailType', 'documentdetailtype.html'];
fr[901]=['additionalDocumentData', 'additionaldocumentdata.html'];
fr[902]=['documentCategory', 'documentcategory.html'];
fr[903]=['paymentInstruments', 'paymentinstruments.html'];
fr[904]=['DocumentHeadType', 'documentheadtype.html'];
fr[905]=['coTaxPayer', 'cotaxpayer1.html'];
fr[906]=['customerInfo', 'customerinfo1.html'];
fr[907]=['documentDetail', 'documentdetail.html'];
fr[908]=['shop', 'shop1.html'];
fr[909]=['taxPayer', 'taxpayer1.html'];
fr[910]=['DocumentReferenceType', 'documentreferencetype.html'];
fr[911]=['cancellationReason', 'cancellationreason.html'];
fr[912]=['modificationReason', 'modificationreason.html'];
fr[913]=['modificationIndex', 'modificationindex3.html'];
fr[914]=['originalDocumentNumber', 'originaldocumentnumber.html'];
fr[915]=['DocumentType', 'documenttype.html'];
fr[916]=['documentHead', 'documenthead.html'];
fr[917]=['documentLines', 'documentlines.html'];
fr[918]=['documentReference', 'documentreference.html'];
fr[919]=['documentSummary', 'documentsummary.html'];
fr[920]=['InvoiceControlDataType', 'invoicecontroldatatype.html'];
fr[921]=['balanceChange', 'balancechange.html'];
fr[922]=['documentNumber', 'documentnumber1.html'];
fr[923]=['documentRoundingAmount', 'documentroundingamount.html'];
fr[924]=['issueEndDateTime', 'issueenddatetime1.html'];
fr[925]=['issueStartDateTime', 'issuestartdatetime1.html'];
fr[926]=['ntcaControlCode', 'ntcacontrolcode.html'];
fr[927]=['recordCounter', 'recordcounter.html'];
fr[928]=['shop', 'shop2.html'];
fr[929]=['InvoiceCoreDataType', 'invoicecoredatatype.html'];
fr[930]=['invoiceData', 'invoicedata3.html'];
fr[931]=['metaData', 'metadata.html'];
fr[932]=['LineAmountsDocumentType', 'lineamountsdocumenttype.html'];
fr[933]=['collectorCode', 'collectorcode1.html'];
fr[934]=['lineGrossAmountDocument', 'linegrossamountdocument.html'];
fr[935]=['lineGrossAmountDocumentHUF', 'linegrossamountdocumenthuf.html'];
fr[936]=['LinesType', 'linestype1.html'];
fr[937]=['line', 'line2.html'];
fr[938]=['LineType', 'linetype1.html'];
fr[939]=['additionalLineData', 'additionallinedata1.html'];
fr[940]=['EANCode', 'eancode.html'];
fr[941]=['itemNature', 'itemnature.html'];
fr[942]=['lineAmountsDocument', 'lineamountsdocument.html'];
fr[943]=['lineDescription', 'linedescription1.html'];
fr[944]=['lineNatureIndicator', 'linenatureindicator1.html'];
fr[945]=['lineNumber', 'linenumber1.html'];
fr[946]=['productCodes', 'productcodes1.html'];
fr[947]=['quantity', 'quantity1.html'];
fr[948]=['unitOfMeasure', 'unitofmeasure2.html'];
fr[949]=['unitOfMeasureOwn', 'unitofmeasureown1.html'];
fr[950]=['unitPrice', 'unitprice1.html'];
fr[951]=['unitPriceHUF', 'unitpricehuf1.html'];
fr[952]=['OtherDocumentCoreDataType', 'otherdocumentcoredatatype.html'];
fr[953]=['metaData', 'metadata1.html'];
fr[954]=['otherDocumentData', 'otherdocumentdata.html'];
fr[955]=['ProductCodesType', 'productcodestype1.html'];
fr[956]=['productCode', 'productcode1.html'];
fr[957]=['ProductCodeType', 'productcodetype1.html'];
fr[958]=['productCodeOwnValue', 'productcodeownvalue1.html'];
fr[959]=['productCodeValue', 'productcodevalue1.html'];
fr[960]=['productCodeCategory', 'productcodecategory1.html'];
fr[961]=['ReceiptCoreDataType', 'receiptcoredatatype.html'];
fr[962]=['metaData', 'metadata2.html'];
fr[963]=['receiptData', 'receiptdata.html'];
fr[964]=['SummaryDocumentType', 'summarydocumenttype.html'];
fr[965]=['collectorCode', 'collectorcode2.html'];
fr[966]=['vatContentGrossAmount', 'vatcontentgrossamount1.html'];
fr[967]=['vatContentGrossAmountHUF', 'vatcontentgrossamounthuf1.html'];
fr[968]=['SummaryGrossDataType', 'summarygrossdatatype1.html'];
fr[969]=['documentGrossAmount', 'documentgrossamount.html'];
fr[970]=['documentGrossAmountHUF', 'documentgrossamounthuf.html'];
fr[971]=['documentRoundingAmount', 'documentroundingamount1.html'];
fr[972]=['SummaryType', 'summarytype1.html'];
fr[973]=['ntcaControlCode', 'ntcacontrolcode1.html'];
fr[974]=['summaryDocument', 'summarydocument.html'];
fr[975]=['summaryGrossData', 'summarygrossdata1.html'];
fr[976]=['SupplierInfoType', 'supplierinfotype1.html'];
fr[977]=['communityVatNumber', 'communityvatnumber2.html'];
fr[978]=['exciseLicenceNum', 'exciselicencenum1.html'];
fr[979]=['groupMemberTaxNumber', 'groupmembertaxnumber3.html'];
fr[980]=['individualExemption', 'individualexemption1.html'];
fr[981]=['supplierAddress', 'supplieraddress1.html'];
fr[982]=['supplierBankAccountNumber', 'supplierbankaccountnumber1.html'];
fr[983]=['supplierName', 'suppliername2.html'];
fr[984]=['supplierTaxNumber', 'suppliertaxnumber4.html'];
fr[985]=['LineNatureIndicatorType', 'linenatureindicatortype1.html'];
fr[986]=['ProductCodeCategoryType', 'productcodecategorytype1.html'];
fr[987]=['ProductCodeValueType', 'productcodevaluetype1.html'];
fr[988]=['QuantityType', 'quantitytype1.html'];
fr[989]=['documentMessage.xsd', 'documentmessage_xsd.html'];
fr[990]=['CoreDocumentType', 'coredocumenttype.html'];
fr[991]=['otherDocumentCore', 'otherdocumentcore.html'];
fr[992]=['receiptCore', 'receiptcore.html'];
fr[993]=['invoiceControl', 'invoicecontrol.html'];
fr[994]=['invoiceCore', 'invoicecore.html'];
fr[995]=['CustomerDocumentType', 'customerdocumenttype.html'];
fr[996]=['invoiceAdditional', 'invoiceadditional.html'];
fr[997]=['otherDocumentAdditional', 'otherdocumentadditional.html'];
fr[998]=['receiptAdditional', 'receiptadditional.html'];
fr[999]=['decryptKey', 'decryptkey.html'];
fr[1000]=['CoreDocument', 'coredocument.html'];
fr[1001]=['CustomerDocument', 'customerdocument.html'];
fr[1002]=['eReceiptApi.xsd', 'ereceiptapi_xsd.html'];
fr[1003]=['BlockUnblockRequestType', 'blockunblockrequesttype.html'];
fr[1004]=['BlockUnblockResponseType', 'blockunblockresponsetype.html'];
fr[1005]=['blockUnblock', 'blockunblock.html'];
fr[1006]=['blockUnblockProcessId', 'blockunblockprocessid.html'];
fr[1007]=['CashRegisterInfoRequestType', 'cashregisterinforequesttype.html'];
fr[1008]=['cashRegisterInfo', 'cashregisterinfo.html'];
fr[1009]=['CashRegisterInfoResponseType', 'cashregisterinforesponsetype.html'];
fr[1010]=['CommMgrRequestType', 'commmgrrequesttype.html'];
fr[1011]=['CommMgrResponseType', 'commmgrresponsetype.html'];
fr[1012]=['endpoints', 'endpoints1.html'];
fr[1013]=['DocumentRequestType', 'documentrequesttype.html'];
fr[1014]=['cashRegisterSignCertificate', 'cashregistersigncertificate.html'];
fr[1015]=['decryptKey', 'decryptkey1.html'];
fr[1016]=['documentClass', 'documentclass.html'];
fr[1017]=['documentEnvelope', 'documentenvelope.html'];
fr[1018]=['groupIdentificationNumber', 'groupidentificationnumber.html'];
fr[1019]=['lastRecordCounter', 'lastrecordcounter1.html'];
fr[1020]=['ntcaVerificationCode', 'ntcaverificationcode.html'];
fr[1021]=['offlineCreated', 'offlinecreated.html'];
fr[1022]=['qRCodeExpired', 'qrcodeexpired.html'];
fr[1023]=['recordCounter', 'recordcounter1.html'];
fr[1024]=['searchKey', 'searchkey.html'];
fr[1025]=['searchKeyTimestamp', 'searchkeytimestamp.html'];
fr[1026]=['sendMissingDocumentProcessId', 'sendmissingdocumentprocessid.html'];
fr[1027]=['taxNumber', 'taxnumber4.html'];
fr[1028]=['DocumentResponseType', 'documentresponsetype.html'];
fr[1029]=['taxNumber', 'taxnumber5.html'];
fr[1030]=['EndOfOperationRequestType', 'endofoperationrequesttype.html'];
fr[1031]=['cashRegisterWorkState', 'cashregisterworkstate1.html'];
fr[1032]=['coTaxpayerLastRecordCounter', 'cotaxpayerlastrecordcounter.html'];
fr[1033]=['lastRecordCounter', 'lastrecordcounter2.html'];
fr[1034]=['EndOfOperationResponseType', 'endofoperationresponsetype.html'];
fr[1035]=['GetProductByCodeRequestType', 'getproductbycoderequesttype.html'];
fr[1036]=['productCode', 'productcode2.html'];
fr[1037]=['GetProductByCodeResponseType', 'getproductbycoderesponsetype.html'];
fr[1038]=['numberOfProducts', 'numberofproducts.html'];
fr[1039]=['products', 'products.html'];
fr[1040]=['HelloRequestType', 'hellorequesttype.html'];
fr[1041]=['currentAeBlockUnblockStateProcessId', 'currentaeblockunblockstateprocessid1.html'];
fr[1042]=['currentVatProcessId', 'currentvatprocessid1.html'];
fr[1043]=['currentOperatorSiteProcessId', 'currentoperatorsiteprocessid1.html'];
fr[1044]=['HelloResponseType', 'helloresponsetype.html'];
fr[1045]=['OperatorSiteUpdateRequestType', 'operatorsiteupdaterequesttype.html'];
fr[1046]=['OperatorSiteUpdateResponseType', 'operatorsiteupdateresponsetype.html'];
fr[1047]=['operatorSite', 'operatorsite1.html'];
fr[1048]=['operatorSiteUpdateProcessId', 'operatorsiteupdateprocessid.html'];
fr[1049]=['OwnerChangeRequestType', 'ownerchangerequesttype.html'];
fr[1050]=['authenticationCertificateRequest', 'authenticationcertificaterequest.html'];
fr[1051]=['cashRegisterWorkState', 'cashregisterworkstate2.html'];
fr[1052]=['coTaxpayerLastRecordCounter', 'cotaxpayerlastrecordcounter1.html'];
fr[1053]=['lastRecordCounter', 'lastrecordcounter3.html'];
fr[1054]=['registrationNumber', 'registrationnumber1.html'];
fr[1055]=['signingCertificateRequest', 'signingcertificaterequest.html'];
fr[1056]=['OwnerChangeResponseType', 'ownerchangeresponsetype.html'];
fr[1057]=['authenticationCertificateEndpoint', 'authenticationcertificateendpoint.html'];
fr[1058]=['blockUnblock', 'blockunblock1.html'];
fr[1059]=['blockUnblockProcessId', 'blockunblockprocessid1.html'];
fr[1060]=['operatorSite', 'operatorsite2.html'];
fr[1061]=['operatorSiteProcessId', 'operatorsiteprocessid.html'];
fr[1062]=['signingCertificateEndpoint', 'signingcertificateendpoint.html'];
fr[1063]=['PrintTechnicalInfoRequestType', 'printtechnicalinforequesttype.html'];
fr[1064]=['PrintTechnicalInfoResponseType', 'printtechnicalinforesponsetype.html'];
fr[1065]=['printMessage', 'printmessage.html'];
fr[1066]=['printTechnicalInfoProcessId', 'printtechnicalinfoprocessid.html'];
fr[1067]=['QueryCertificateResponseType', 'querycertificateresponsetype.html'];
fr[1068]=['certificate', 'certificate.html'];
fr[1069]=['certificateType', 'certificatetype1.html'];
fr[1070]=['queryCertificateResult', 'querycertificateresult.html'];
fr[1071]=['QueryTaxpayerRequestType', 'querytaxpayerrequesttype1.html'];
fr[1072]=['taxNumber', 'taxnumber6.html'];
fr[1073]=['QueryTaxpayerResponseType', 'querytaxpayerresponsetype1.html'];
fr[1074]=['infoDate', 'infodate1.html'];
fr[1075]=['taxpayerData', 'taxpayerdata1.html'];
fr[1076]=['taxpayerValidity', 'taxpayervalidity1.html'];
fr[1077]=['RegistrationRequestType', 'registrationrequesttype.html'];
fr[1078]=['authenticationCertificateRequest', 'authenticationcertificaterequest1.html'];
fr[1079]=['imei', 'imei1.html'];
fr[1080]=['imsi', 'imsi1.html'];
fr[1081]=['registrationNumber', 'registrationnumber2.html'];
fr[1082]=['signingCertificateRequest', 'signingcertificaterequest1.html'];
fr[1083]=['software', 'software3.html'];
fr[1084]=['RegistrationResponseType', 'registrationresponsetype.html'];
fr[1085]=['authenticationCertificateEndpoint', 'authenticationcertificateendpoint1.html'];
fr[1086]=['operatorSite', 'operatorsite3.html'];
fr[1087]=['operatorSiteProcessId', 'operatorsiteprocessid1.html'];
fr[1088]=['signingCertificateEndpoint', 'signingcertificateendpoint1.html'];
fr[1089]=['vat', 'vat2.html'];
fr[1090]=['vatProcessId', 'vatprocessid.html'];
fr[1091]=['RenewCertificateRequestType', 'renewcertificaterequesttype.html'];
fr[1092]=['certificateRequest', 'certificaterequest.html'];
fr[1093]=['CMSCertificateRequest', 'cmscertificaterequest.html'];
fr[1094]=['certificateType', 'certificatetype2.html'];
fr[1095]=['renewCertificateCode', 'renewcertificatecode.html'];
fr[1096]=['taxNumber', 'taxnumber7.html'];
fr[1097]=['RenewCertificateResponseType', 'renewcertificateresponsetype.html'];
fr[1098]=['certificateEndpoint', 'certificateendpoint.html'];
fr[1099]=['certificateType', 'certificatetype3.html'];
fr[1100]=['ReportRequestType', 'reportrequesttype.html'];
fr[1101]=['cashRegisterSignCertificate', 'cashregistersigncertificate1.html'];
fr[1102]=['decryptKey', 'decryptkey2.html'];
fr[1103]=['groupIdentificationNumber', 'groupidentificationnumber1.html'];
fr[1104]=['lastRecordCounter', 'lastrecordcounter4.html'];
fr[1105]=['ntcaVerificationCode', 'ntcaverificationcode1.html'];
fr[1106]=['offlineCreated', 'offlinecreated1.html'];
fr[1107]=['qRCodeExpired', 'qrcodeexpired1.html'];
fr[1108]=['recordCounter', 'recordcounter2.html'];
fr[1109]=['reportClass', 'reportclass.html'];
fr[1110]=['reportEnvelope', 'reportenvelope.html'];
fr[1111]=['searchKey', 'searchkey1.html'];
fr[1112]=['searchKeyTimestamp', 'searchkeytimestamp1.html'];
fr[1113]=['sendMissingDocumentProcessId', 'sendmissingdocumentprocessid1.html'];
fr[1114]=['taxNumber', 'taxnumber8.html'];
fr[1115]=['ReportResponseType', 'reportresponsetype.html'];
fr[1116]=['taxNumber', 'taxnumber9.html'];
fr[1117]=['SendMissingDocumentRequestType', 'sendmissingdocumentrequesttype.html'];
fr[1118]=['SendMissingDocumentResponseType', 'sendmissingdocumentresponsetype.html'];
fr[1119]=['recordCounter', 'recordcounter3.html'];
fr[1120]=['sendMissingDocumentProcessId', 'sendmissingdocumentprocessid2.html'];
fr[1121]=['SoftwareUpdateRequestType', 'softwareupdaterequesttype.html'];
fr[1122]=['SoftwareUpdateResponseType', 'softwareupdateresponsetype.html'];
fr[1123]=['firmwareInstallDueDate', 'firmwareinstallduedate.html'];
fr[1124]=['firmwareSlice', 'firmwareslice.html'];
fr[1125]=['softwareUpdateProcessId', 'softwareupdateprocessid.html'];
fr[1126]=['VatUpdateRequestType', 'vatupdaterequesttype.html'];
fr[1127]=['VatUpdateResponseType', 'vatupdateresponsetype.html'];
fr[1128]=['vat', 'vat3.html'];
fr[1129]=['vatUpdateProcessId', 'vatupdateprocessid.html'];
fr[1130]=['BlockUnblockRequest', 'blockunblockrequest.html'];
fr[1131]=['BlockUnblockResponse', 'blockunblockresponse.html'];
fr[1132]=['CashRegisterInfoRequest', 'cashregisterinforequest.html'];
fr[1133]=['CashRegisterInfoResponse', 'cashregisterinforesponse.html'];
fr[1134]=['CommMgrRequest', 'commmgrrequest.html'];
fr[1135]=['CommMgrResponse', 'commmgrresponse.html'];
fr[1136]=['DocumentRequest', 'documentrequest.html'];
fr[1137]=['DocumentResponse', 'documentresponse.html'];
fr[1138]=['EndOfOperationRequest', 'endofoperationrequest.html'];
fr[1139]=['EndOfOperationResponse', 'endofoperationresponse.html'];
fr[1140]=['GetProductByCodeRequest', 'getproductbycoderequest.html'];
fr[1141]=['GetProductByCodeResponse', 'getproductbycoderesponse.html'];
fr[1142]=['HelloRequest', 'hellorequest.html'];
fr[1143]=['HelloResponse', 'helloresponse.html'];
fr[1144]=['OperatorSiteUpdateRequest', 'operatorsiteupdaterequest.html'];
fr[1145]=['OperatorSiteUpdateResponse', 'operatorsiteupdateresponse.html'];
fr[1146]=['OwnerChangeRequest', 'ownerchangerequest.html'];
fr[1147]=['OwnerChangeResponse', 'ownerchangeresponse.html'];
fr[1148]=['PrintTechnicalInfoRequest', 'printtechnicalinforequest.html'];
fr[1149]=['PrintTechnicalInfoResponse', 'printtechnicalinforesponse.html'];
fr[1150]=['QueryCertificateResponse', 'querycertificateresponse.html'];
fr[1151]=['QueryTaxpayerRequest', 'querytaxpayerrequest1.html'];
fr[1152]=['QueryTaxpayerResponse', 'querytaxpayerresponse1.html'];
fr[1153]=['RegistrationRequest', 'registrationrequest.html'];
fr[1154]=['RegistrationResponse', 'registrationresponse.html'];
fr[1155]=['RenewCertificateRequest', 'renewcertificaterequest.html'];
fr[1156]=['RenewCertificateResponse', 'renewcertificateresponse.html'];
fr[1157]=['ReportRequest', 'reportrequest.html'];
fr[1158]=['ReportResponse', 'reportresponse.html'];
fr[1159]=['SendMissingDocumentRequest', 'sendmissingdocumentrequest.html'];
fr[1160]=['SendMissingDocumentResponse', 'sendmissingdocumentresponse.html'];
fr[1161]=['SoftwareUpdateRequest', 'softwareupdaterequest.html'];
fr[1162]=['SoftwareUpdateResponse', 'softwareupdateresponse.html'];
fr[1163]=['VatUpdateRequest', 'vatupdaterequest.html'];
fr[1164]=['VatUpdateResponse', 'vatupdateresponse.html'];
fr[1165]=['eReceiptBase.xsd', 'ereceiptbase_xsd.html'];
fr[1166]=['AdditionalDataType', 'additionaldatatype1.html'];
fr[1167]=['dataDescription', 'datadescription1.html'];
fr[1168]=['dataName', 'dataname1.html'];
fr[1169]=['dataValue', 'datavalue1.html'];
fr[1170]=['AdditionalHeadType', 'additionalheadtype.html'];
fr[1171]=['additionalData', 'additionaldata.html'];
fr[1172]=['AdditionalLinesType', 'additionallinestype.html'];
fr[1173]=['additionalLine', 'additionalline.html'];
fr[1174]=['AdditionalLineType', 'additionallinetype.html'];
fr[1175]=['additionalLineData', 'additionallinedata2.html'];
fr[1176]=['lineNumber', 'linenumber2.html'];
fr[1177]=['AddressType', 'addresstype1.html'];
fr[1178]=['detailedAddress', 'detailedaddress1.html'];
fr[1179]=['simpleAddress', 'simpleaddress1.html'];
fr[1180]=['AttachmentType', 'attachmenttype.html'];
fr[1181]=['fileBinary', 'filebinary.html'];
fr[1182]=['fileExtension', 'fileextension.html'];
fr[1183]=['BasicEReceiptRequestType', 'basicereceiptrequesttype.html'];
fr[1184]=['APNumber', 'apnumber.html'];
fr[1185]=['BasicEReceiptResponseType', 'basicereceiptresponsetype.html'];
fr[1186]=['APNumber', 'apnumber1.html'];
fr[1187]=['callbackRequired', 'callbackrequired.html'];
fr[1188]=['CommerceCollectorListType', 'commercecollectorlisttype.html'];
fr[1189]=['commercialCollector', 'commercialcollector.html'];
fr[1190]=['CommerceCollectorType', 'commercecollectortype.html'];
fr[1191]=['collectorCode', 'collectorcode3.html'];
fr[1192]=['collectorGrossAmount', 'collectorgrossamount.html'];
fr[1193]=['collectorNetAmount', 'collectornetamount.html'];
fr[1194]=['collectorVatAmount', 'collectorvatamount.html'];
fr[1195]=['CustomerInfoType', 'customerinfotype1.html'];
fr[1196]=['customerAddress', 'customeraddress1.html'];
fr[1197]=['customerBankAccountNumber', 'customerbankaccountnumber1.html'];
fr[1198]=['customerName', 'customername2.html'];
fr[1199]=['customerVatData', 'customervatdata1.html'];
fr[1200]=['customerVatStatus', 'customervatstatus1.html'];
fr[1201]=['CustomerTaxNumberType', 'customertaxnumbertype1.html'];
fr[1202]=['groupMemberTaxNumber', 'groupmembertaxnumber4.html'];
fr[1203]=['CustomerVatDataType', 'customervatdatatype1.html'];
fr[1204]=['communityVatNumber', 'communityvatnumber3.html'];
fr[1205]=['customerTaxNumber', 'customertaxnumber3.html'];
fr[1206]=['thirdStateTaxId', 'thirdstatetaxid1.html'];
fr[1207]=['DailyCashFlowDetailListType', 'dailycashflowdetaillisttype.html'];
fr[1208]=['dailyCashFlowDetail', 'dailycashflowdetail.html'];
fr[1209]=['DailyCashFlowDetailType', 'dailycashflowdetailtype.html'];
fr[1210]=['amount', 'amount.html'];
fr[1211]=['commerceCollectorList', 'commercecollectorlist.html'];
fr[1212]=['count', 'count.html'];
fr[1213]=['fulfillmentDate', 'fulfillmentdate.html'];
fr[1214]=['DetailedAddressType', 'detailedaddresstype1.html'];
fr[1215]=['building', 'building1.html'];
fr[1216]=['city', 'city2.html'];
fr[1217]=['countryCode', 'countrycode2.html'];
fr[1218]=['door', 'door1.html'];
fr[1219]=['floor', 'floor1.html'];
fr[1220]=['lotNumber', 'lotnumber1.html'];
fr[1221]=['number', 'number1.html'];
fr[1222]=['postalCode', 'postalcode2.html'];
fr[1223]=['publicPlaceCategory', 'publicplacecategory1.html'];
fr[1224]=['region', 'region2.html'];
fr[1225]=['staircase', 'staircase1.html'];
fr[1226]=['streetName', 'streetname1.html'];
fr[1227]=['DocumentAdditionalDataType', 'documentadditionaldatatype.html'];
fr[1228]=['additionalHead', 'additionalhead.html'];
fr[1229]=['additionalLines', 'additionallines.html'];
fr[1230]=['attachment', 'attachment.html'];
fr[1231]=['documentNumber', 'documentnumber2.html'];
fr[1232]=['DocumentControlDataType', 'documentcontroldatatype.html'];
fr[1233]=['balanceChange', 'balancechange1.html'];
fr[1234]=['documentNumber', 'documentnumber3.html'];
fr[1235]=['recordCounter', 'recordcounter4.html'];
fr[1236]=['ForeignCurrencyType', 'foreigncurrencytype.html'];
fr[1237]=['currencyAmount', 'currencyamount.html'];
fr[1238]=['currencyCode', 'currencycode1.html'];
fr[1239]=['currencyHufAmount', 'currencyhufamount.html'];
fr[1240]=['exchangeRate', 'exchangerate1.html'];
fr[1241]=['FuelCardInfoType', 'fuelcardinfotype.html'];
fr[1242]=['authorizationNumber', 'authorizationnumber.html'];
fr[1243]=['fuelCardNumber', 'fuelcardnumber.html'];
fr[1244]=['vehicleRegistrationNumber', 'vehicleregistrationnumber1.html'];
fr[1245]=['HealthFundInfoType', 'healthfundinfotype.html'];
fr[1246]=['healthFundAddress', 'healthfundaddress.html'];
fr[1247]=['healthFundCardNumber', 'healthfundcardnumber.html'];
fr[1248]=['healthFundCode', 'healthfundcode.html'];
fr[1249]=['healthFundMemberNumber', 'healthfundmembernumber.html'];
fr[1250]=['healthFundName', 'healthfundname.html'];
fr[1251]=['InstrumentType', 'instrumenttype.html'];
fr[1252]=['afrAmount', 'aframount.html'];
fr[1253]=['cardPaymentAmount', 'cardpaymentamount.html'];
fr[1254]=['cashHufAmount', 'cashhufamount.html'];
fr[1255]=['foreignCurrency', 'foreigncurrency.html'];
fr[1256]=['otherPayment', 'otherpayment.html'];
fr[1257]=['szepCardAmount', 'szepcardamount.html'];
fr[1258]=['MetaDataType', 'metadatatype.html'];
fr[1259]=['APNumber', 'apnumber2.html'];
fr[1260]=['documentNumber', 'documentnumber4.html'];
fr[1261]=['documentOperation', 'documentoperation.html'];
fr[1262]=['electronicInvoiceHash', 'electronicinvoicehash2.html'];
fr[1263]=['taxpayerId', 'taxpayerid1.html'];
fr[1264]=['OtherPaymentType', 'otherpaymenttype.html'];
fr[1265]=['otherPaymentCode', 'otherpaymentcode.html'];
fr[1266]=['otherPaymentHufAmount', 'otherpaymenthufamount.html'];
fr[1267]=['PaymentInstrumentsType', 'paymentinstrumentstype.html'];
fr[1268]=['paymentInstrument', 'paymentinstrument.html'];
fr[1269]=['PaymentInstrumentType', 'paymentinstrumenttype.html'];
fr[1270]=['documentPaymentAmount', 'documentpaymentamount.html'];
fr[1271]=['documentPaymentMethod', 'documentpaymentmethod.html'];
fr[1272]=['ReportHeaderType', 'reportheadertype.html'];
fr[1273]=['additionalData', 'additionaldata1.html'];
fr[1274]=['coTaxPayer', 'cotaxpayer2.html'];
fr[1275]=['issueStartDateTime', 'issuestartdatetime2.html'];
fr[1276]=['ntcaControlCode', 'ntcacontrolcode2.html'];
fr[1277]=['recordCounter', 'recordcounter5.html'];
fr[1278]=['shop', 'shop3.html'];
fr[1279]=['taxPayer', 'taxpayer2.html'];
fr[1280]=['ShopType', 'shoptype.html'];
fr[1281]=['shopName', 'shopname.html'];
fr[1282]=['shopShortName', 'shopshortname.html'];
fr[1283]=['SignedDocumentEnvelopeType', 'signeddocumentenvelopetype.html'];
fr[1284]=['customerEnvelopeData', 'customerenvelopedata.html'];
fr[1285]=['envelopeData', 'envelopedata.html'];
fr[1286]=['envelopeHash', 'envelopehash.html'];
fr[1287]=['envelopeSignature', 'envelopesignature.html'];
fr[1288]=['envelopeVersion', 'envelopeversion.html'];
fr[1289]=['SignedReportEnvelopeType', 'signedreportenvelopetype.html'];
fr[1290]=['customerEnvelopeData', 'customerenvelopedata1.html'];
fr[1291]=['envelopeData', 'envelopedata1.html'];
fr[1292]=['envelopeHash', 'envelopehash1.html'];
fr[1293]=['envelopeSignature', 'envelopesignature1.html'];
fr[1294]=['envelopeVersion', 'envelopeversion1.html'];
fr[1295]=['SimpleAddressType', 'simpleaddresstype1.html'];
fr[1296]=['additionalAddressDetail', 'additionaladdressdetail1.html'];
fr[1297]=['city', 'city3.html'];
fr[1298]=['countryCode', 'countrycode3.html'];
fr[1299]=['postalCode', 'postalcode3.html'];
fr[1300]=['region', 'region3.html'];
fr[1301]=['TaxNumberType', 'taxnumbertype1.html'];
fr[1302]=['countyCode', 'countycode1.html'];
fr[1303]=['taxpayerId', 'taxpayerid2.html'];
fr[1304]=['vatCode', 'vatcode1.html'];
fr[1305]=['TaxPayerType', 'taxpayertype.html'];
fr[1306]=['groupIdentificationNumber', 'groupidentificationnumber2.html'];
fr[1307]=['taxNumber', 'taxnumber10.html'];
fr[1308]=['taxPayerName', 'taxpayername2.html'];
fr[1309]=['taxPayerShortName', 'taxpayershortname2.html'];
fr[1310]=['APNumberType', 'apnumbertype.html'];
fr[1311]=['AtomicCsrType', 'atomiccsrtype.html'];
fr[1312]=['CancellationReasonType', 'cancellationreasontype.html'];
fr[1313]=['CashPaymentTitleType', 'cashpaymenttitletype.html'];
fr[1314]=['CollectorCodeType', 'collectorcodetype.html'];
fr[1315]=['CustomerAppEventCodeType', 'customerappeventcodetype.html'];
fr[1316]=['CustomerVatStatusType', 'customervatstatustype1.html'];
fr[1317]=['DataNameType', 'datanametype1.html'];
fr[1318]=['Digit4Type', 'digit4type.html'];
fr[1319]=['DocumentCategoryType', 'documentcategorytype.html'];
fr[1320]=['DocumentClassType', 'documentclasstype.html'];
fr[1321]=['DocumentDateType', 'documentdatetype.html'];
fr[1322]=['DocumentNumberType', 'documentnumbertype.html'];
fr[1323]=['DocumentOperationType', 'documentoperationtype.html'];
fr[1324]=['DocumentUnboundedIndexType', 'documentunboundedindextype.html'];
fr[1325]=['EANType', 'eantype.html'];
fr[1326]=['EncryptedSymmetricInitialVectorType', 'encryptedsymmetricinitialvectortype.html'];
fr[1327]=['EncryptedSymmetricKeyType', 'encryptedsymmetrickeytype.html'];
fr[1328]=['ExchangeRateType', 'exchangeratetype1.html'];
fr[1329]=['File512kBinaryType', 'file512kbinarytype.html'];
fr[1330]=['FileExtensionType', 'fileextensiontype.html'];
fr[1331]=['ItemNatureType', 'itemnaturetype.html'];
fr[1332]=['LineNumberType', 'linenumbertype1.html'];
fr[1333]=['ModificationReasonType', 'modificationreasontype.html'];
fr[1334]=['MonetaryType', 'monetarytype1.html'];
fr[1335]=['NtcaControlCodeType', 'ntcacontrolcodetype.html'];
fr[1336]=['PaymentMethodType', 'paymentmethodtype1.html'];
fr[1337]=['ProcessIdentifierType', 'processidentifiertype.html'];
fr[1338]=['ReportClassType', 'reportclasstype.html'];
fr[1339]=['reportMessage.xsd', 'reportmessage_xsd.html'];
fr[1340]=['CashFlowReportType', 'cashflowreporttype.html'];
fr[1341]=['balanceChange', 'balancechange2.html'];
fr[1342]=['changeAmount', 'changeamount.html'];
fr[1343]=['paymentTitleCode', 'paymenttitlecode.html'];
fr[1344]=['reportHeader', 'reportheader.html'];
fr[1345]=['reportNumber', 'reportnumber.html'];
fr[1346]=['roundingDifferenceAmount', 'roundingdifferenceamount.html'];
fr[1347]=['CashRegisterOpenBalanceReportType', 'cashregisteropenbalancereporttype.html'];
fr[1348]=['openBalance', 'openbalance.html'];
fr[1349]=['reportHeader', 'reportheader1.html'];
fr[1350]=['reportNumber', 'reportnumber1.html'];
fr[1351]=['taxationDay', 'taxationday.html'];
fr[1352]=['CashRegisterReportType', 'cashregisterreporttype.html'];
fr[1353]=['balanceAmountNoRounding', 'balanceamountnorounding.html'];
fr[1354]=['balanceAmountWidthRounding', 'balanceamountwidthrounding.html'];
fr[1355]=['balanceChange', 'balancechange3.html'];
fr[1356]=['balanceChangeSum', 'balancechangesum.html'];
fr[1357]=['dailyCancelledInvoice', 'dailycancelledinvoice.html'];
fr[1358]=['dailyCancelledReceipt', 'dailycancelledreceipt.html'];
fr[1359]=['dailyModificationInvoice', 'dailymodificationinvoice.html'];
fr[1360]=['dailyModificationReceipt', 'dailymodificationreceipt.html'];
fr[1361]=['dailyModificationSum', 'dailymodificationsum.html'];
fr[1362]=['dailyPaymentOther', 'dailypaymentother.html'];
fr[1363]=['dailyPaymentSum', 'dailypaymentsum.html'];
fr[1364]=['dailyRevenueInvoice', 'dailyrevenueinvoice.html'];
fr[1365]=['dailyRevenueOther', 'dailyrevenueother.html'];
fr[1366]=['dailyRevenueReceipt', 'dailyrevenuereceipt.html'];
fr[1367]=['dailyRevenueSum', 'dailyrevenuesum.html'];
fr[1368]=['dailyTipAmount', 'dailytipamount.html'];
fr[1369]=['fuelCardCancellations', 'fuelcardcancellations.html'];
fr[1370]=['fuelCardModifications', 'fuelcardmodifications.html'];
fr[1371]=['fuelCardSales', 'fuelcardsales.html'];
fr[1372]=['fuelCardTransactionSum', 'fuelcardtransactionsum.html'];
fr[1373]=['healthFundCancellations', 'healthfundcancellations.html'];
fr[1374]=['healthFundModifications', 'healthfundmodifications.html'];
fr[1375]=['healthFundSales', 'healthfundsales.html'];
fr[1376]=['healthFundTransactionSum', 'healthfundtransactionsum.html'];
fr[1377]=['reportHeader', 'reportheader2.html'];
fr[1378]=['reportNumber', 'reportnumber2.html'];
fr[1379]=['roundingAmountSum', 'roundingamountsum.html'];
fr[1380]=['CoreReportType', 'corereporttype.html'];
fr[1381]=['CashFlowReport', 'cashflowreport.html'];
fr[1382]=['CashRegisterOpenBalanceReport', 'cashregisteropenbalancereport.html'];
fr[1383]=['CashRegisterReport', 'cashregisterreport.html'];
fr[1384]=['DailyCashFlowReport', 'dailycashflowreport.html'];
fr[1385]=['OtherReport', 'otherreport.html'];
fr[1386]=['CustomerReportType', 'customerreporttype.html'];
fr[1387]=['decryptKey', 'decryptkey3.html'];
fr[1388]=['reportAdditional', 'reportadditional.html'];
fr[1389]=['DailyCashFlowReportType', 'dailycashflowreporttype.html'];
fr[1390]=['closureCounter', 'closurecounter.html'];
fr[1391]=['dailyInvoice', 'dailyinvoice.html'];
fr[1392]=['dailyInvoiceCancellation', 'dailyinvoicecancellation.html'];
fr[1393]=['dailyInvoiceModification', 'dailyinvoicemodification.html'];
fr[1394]=['dailyReceipt', 'dailyreceipt.html'];
fr[1395]=['dailyReceiptCancellation', 'dailyreceiptcancellation.html'];
fr[1396]=['dailyReceiptModification', 'dailyreceiptmodification.html'];
fr[1397]=['dailySimplifiedInvoice', 'dailysimplifiedinvoice.html'];
fr[1398]=['dailySimplifiedInvoiceCancellation', 'dailysimplifiedinvoicecancellation.html'];
fr[1399]=['dailySimplifiedInvoiceModification', 'dailysimplifiedinvoicemodification.html'];
fr[1400]=['reportHeader', 'reportheader3.html'];
fr[1401]=['reportNumber', 'reportnumber3.html'];
fr[1402]=['sumCommerceAmount', 'sumcommerceamount.html'];
fr[1403]=['OtherReportDataListType', 'otherreportdatalisttype.html'];
fr[1404]=['otherReportData', 'otherreportdata.html'];
fr[1405]=['OtherReportDataType', 'otherreportdatatype.html'];
fr[1406]=['otherDocumentDataName', 'otherdocumentdataname.html'];
fr[1407]=['otherDocumentDataValue', 'otherdocumentdatavalue.html'];
fr[1408]=['OtherReportType', 'otherreporttype.html'];
fr[1409]=['otherDocument', 'otherdocument.html'];
fr[1410]=['otherDocumentDescription', 'otherdocumentdescription.html'];
fr[1411]=['otherReportDataList', 'otherreportdatalist.html'];
fr[1412]=['reportHeader', 'reportheader4.html'];
fr[1413]=['reportNumber', 'reportnumber4.html'];
fr[1414]=['CoreReport', 'corereport.html'];
fr[1415]=['CustomerReport', 'customerreport.html'];    
 return fr;          
}

function CreateWordIndex()
{
var w=[
            
['true',[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439,440,441,442,443,444,445,446,447,448,449,450,451,452,453,454,455,456,457,458,459,460,461,462,463,464,465,466,467,468,469,470,471,472,473,474,475,476,477,478,479,480,481,482,483,484,485,486,487,488,489,490,491,492,493,494,495,496,497,498,499,500,501,502,503,504,505,506,507,508,509,510,511,512,513,514,515,516,517,518,519,520,521,522,523,524,525,526,527,528,529,530,531,532,533,534,535,536,537,538,539,540,541,542,543,544,545,546,547,548,549,550,551,552,553,554,555,556,557,558,559,560,561,562,563,564,565,566,567,568,569,570,571,572,573,574,575,576,577,578,579,580,581,582,583,584,585,586,587,588,589,590,591,592,593,594,595,596,597,598,599,600,601,602,603,604,605,606,607,608,609,610,611,612,613,614,615,616,617,618,619,620,621,622,623,624,625,626,627,628,629,630,631,632,633,634,635,636,637,638,639,640,641,642,643,644,645,646,647,648,649,650,651,652,653,654,655,656,657,658,659,660,661,662,663,664,665,666,667,668,669,670,671,672,673,674,675,676,677,678,679,680,681,682,683,684,685,686,687,688,689,690,691,692,693,694,695,696,697,698,699,700,701,702,703,704,705,706,707,708,709,710,711,712,713,714,715,716,717,718,719,720,721,722,723,724,725,726,727,728,729,730,731,732,733,734,735,736,737,738,739,740,741,742,743,744,745,746,747,748,749,750,751,752,753,754,755,756,757,758,759,760,761,762,763,764,765,766,767,768,769,770,771,772,773,774,775,776,777,778,779,780,781,782,783,784,785,786,787,788,789,790,791,792,793,794,795,796,797,798,799,800,801,802,803,804,805,806,807,808,809,810,811,812,813,814,815,816,817,818,819,820,821,822,823,824,825,826,827,828,829,830,831,832,833,834,835,836,837,838,839,840,841,842,843,844,845,846,847,848,849,850,851,852,853,854,855,856,857,858,859,860,861,862,863,864,865,866,867,868,869,870,871,872,873,874,875,876,877,878,879,880,881,882,883,884,885,886,887,888,889,890,891,892,893,894,895,896,897,898,899,900,901,902,903,904,905,906,907,908,909,910,911,912,913,914,915,916,917,918,919,920,921,922,923,924,925,926,927,928,929,930,931,932,933,934,935,936,937,938,939,940,941,942,943,944,945,946,947,948,949,950,951,952,953,954,955,956,957,958,959,960,961,962,963,964,965,966,967,968,969,970,971,972,973,974,975,976,977,978,979,980,981,982,983,984,985,986,987,988,989,990,991,992,993,994,995,996,997,998,999,1000,1001,1002,1003,1004,1005,1006,1007,1008,1009,1010,1011,1012,1013,1014,1015,1016,1017,1018,1019,1020,1021,1022,1023,1024,1025,1026,1027,1028,1029,1030,1031,1032,1033,1034,1035,1036,1037,1038,1039,1040,1041,1042,1043,1044,1045,1046,1047,1048,1049,1050,1051,1052,1053,1054,1055,1056,1057,1058,1059,1060,1061,1062,1063,1064,1065,1066,1067,1068,1069,1070,1071,1072,1073,1074,1075,1076,1077,1078,1079,1080,1081,1082,1083,1084,1085,1086,1087,1088,1089,1090,1091,1092,1093,1094,1095,1096,1097,1098,1099,1100,1101,1102,1103,1104,1105,1106,1107,1108,1109,1110,1111,1112,1113,1114,1115,1116,1117,1118,1119,1120,1121,1122,1123,1124,1125,1126,1127,1128,1129,1130,1131,1132,1133,1134,1135,1136,1137,1138,1139,1140,1141,1142,1143,1144,1145,1146,1147,1148,1149,1150,1151,1152,1153,1154,1155,1156,1157,1158,1159,1160,1161,1162,1163,1164,1165,1166,1167,1168,1169,1170,1171,1172,1173,1174,1175,1176,1177,1178,1179,1180,1181,1182,1183,1184,1185,1186,1187,1188,1189,1190,1191,1192,1193,1194,1195,1196,1197,1198,1199,1200,1201,1202,1203,1204,1205,1206,1207,1208,1209,1210,1211,1212,1213,1214,1215,1216,1217,1218,1219,1220,1221,1222,1223,1224,1225,1226,1227,1228,1229,1230,1231,1232,1233,1234,1235,1236,1237,1238,1239,1240,1241,1242,1243,1244,1245,1246,1247,1248,1249,1250,1251,1252,1253,1254,1255,1256,1257,1258,1259,1260,1261,1262,1263,1264,1265,1266,1267,1268,1269,1270,1271,1272,1273,1274,1275,1276,1277,1278,1279,1280,1281,1282,1283,1284,1285,1286,1287,1288,1289,1290,1291,1292,1293,1294,1295,1296,1297,1298,1299,1300,1301,1302,1303,1304,1305,1306,1307,1308,1309,1310,1311,1312,1313,1314,1315,1316,1317,1318,1319,1320,1321,1322,1323,1324,1325,1326,1327,1328,1329,1330,1331,1332,1333,1334,1335,1336,1337,1338,1339,1340,1341,1342,1343,1344,1345,1346,1347,1348,1349,1350,1351,1352,1353,1354,1355,1356,1357,1358,1359,1360,1361,1362,1363,1364,1365,1366,1367,1368,1369,1370,1371,1372,1373,1374,1375,1376,1377,1378,1379,1380,1381,1382,1383,1384,1385,1386,1387,1388,1389,1390,1391,1392,1393,1394,1395,1396,1397,1398,1399,1400,1401,1402,1403,1404,1405,1406,1407,1408,1409,1410,1411,1412,1413,1414,1415]],
['project',[11,97,382,418,442,455,641,642,726,890,1165]],
['ntca',[11,97,380,382,418,726,890,920,926,972,973,989,990,1000,1002,1013,1020,1091,1095,1100,1105,1165,1272,1276,1335,1339]],
['common',[11,97,98,99,100,106,107,109,117,120,124,125,127,129,130,132,133,140,142,143,144,145,147,149,151,154,159,161,162,163,166,168,169,170,172,175,176,177,178,187,192,196,197,198,199,203,206,207,211,212,221,225,226,228,229,230,232,235,239,241,242,243,248,255,256,258,267,270,273,274,279,281,285,287,303,304,305,306,307,309,310,317,321,322,323,328,329,330,332,335,336,337,338,339,346,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,409,410,416,417,418,419,420,422,426,428,440,441,458,459,460,461,465,467,468,473,474,476,477,478,479,480,481,482,483,484,488,489,490,495,497,498,500,501,502,503,504,507,508,509,513,532,535,538,545,546,568,579,594,600,601,602,606,607,609,610,611,612,614,616,620,621,641,642,645,646,669,670,671,672,673,677,678,680,681,710,711,712,714,715,716,717,718,719,720,721,722,723,724,725,726,740,742,777,780,781,797,799,809,811,814,815,816,817,818,819,820,821,822,825,826,827,830,831,832,833,834,835,837,838,839,846,850,851,852,862,864,876,880,886,888,890,891,892,898,899,910,914,920,924,925,938,943,949,957,958,976,977,978,982,983,985,986,987,988,1002,1013,1018,1020,1025,1027,1028,1029,1035,1036,1071,1072,1073,1074,1077,1079,1080,1091,1095,1096,1100,1103,1105,1112,1114,1115,1116,1165,1166,1167,1169,1183,1185,1195,1197,1198,1203,1204,1206,1214,1215,1216,1217,1218,1219,1220,1221,1222,1223,1224,1225,1226,1236,1238,1241,1242,1243,1244,1245,1247,1248,1249,1250,1258,1262,1263,1272,1275,1280,1281,1282,1283,1286,1288,1289,1292,1294,1295,1296,1297,1298,1299,1300,1301,1302,1303,1304,1305,1308,1309,1312,1313,1316,1317,1323,1333,1334,1336,1339,1405,1406,1407,1408,1409,1410]],
['séma',[11,97,382,418,726,765,775,890,989,1165,1339]],
['author',[11,97,382,418,726,890,1165]],
['informatikai',[11,97,382,418,726,890,1165]],
['intézet',[11,97,382,418,726,890,1165]],
['version',[11,12,13,15,97,303,309,374,382,418,726,740,742,765,767,775,789,792,795,801,802,805,808,830,838,890,989,1002,1165,1283,1288,1289,1294,1339]],
['schema',[11,97,382,418,709,726,765,775,890,989,1002,1165,1339]],
['xmlns',[11,97,382,418,726,890,989,1002,1040,1041,1042,1043,1165,1339]],
['http',[11,97,382,418,726,875,890,989,1002,1040,1041,1042,1043,1165,1339]],
['schemas',[11,97,382,418,726,890,989,1002,1165,1339]],
['xmlschema',[11,97,382,418,726,890,989,1002,1040,1041,1042,1043,1165,1339]],
['targetnamespace',[11,97,382,418,726,890,989,1002,1165,1339]],
['elementformdefault',[11,97,382,418,726,890,989,1002,1165,1339]],
['qualified',[11,97,382,418,726,890,989,1002,1165,1339]],
['attributeformdefault',[11,97,382,418,726,890,989,1002,1165,1339]],
['unqualified',[11,97,382,418,726,890,989,1002,1165,1339]],
['--atomi',[11]],
['típusok',[11]],
['atomic',[11,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,1165,1311]],
['types--',[11]],
['simpletype',[11,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,409,410,411,412,413,414,415,416,417,418,710,711,712,713,714,715,716,717,718,719,720,721,722,723,724,725,726,727,728,729,732,734,735,736,738,739,744,746,753,754,757,761,765,767,770,771,775,777,778,779,801,802,803,805,806,807,808,855,858,865,866,867,868,869,870,871,872,873,874,875,876,877,878,879,880,881,882,883,884,885,886,887,888,889,890,985,986,987,988,1165,1236,1237,1241,1242,1243,1244,1245,1247,1248,1249,1250,1264,1265,1310,1311,1312,1313,1314,1315,1316,1317,1318,1319,1320,1321,1322,1323,1324,1325,1326,1327,1328,1329,1330,1331,1332,1333,1334,1335,1336,1337,1338]],
['name',[11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439,440,441,442,443,444,445,446,447,448,449,450,451,452,453,454,455,456,457,458,459,460,461,462,463,464,465,466,467,468,469,470,471,472,473,474,475,476,477,478,479,480,481,482,483,484,485,486,487,488,489,490,491,492,493,494,495,496,497,498,499,500,501,502,503,504,505,506,507,508,509,510,511,512,513,514,515,516,517,518,519,520,521,522,523,524,525,526,527,528,529,530,531,532,533,534,535,536,537,538,539,540,541,542,543,544,545,546,547,548,549,550,551,552,553,554,555,556,557,558,559,560,561,562,563,564,565,566,567,568,569,570,571,572,573,574,575,576,577,578,579,580,581,582,583,584,585,586,587,588,589,590,591,592,593,594,595,596,597,598,599,600,601,602,603,604,605,606,607,608,609,610,611,612,613,614,615,616,617,618,619,620,621,622,623,624,625,626,627,628,629,630,631,632,633,634,635,636,637,638,639,640,641,642,643,644,645,646,647,648,649,650,651,652,653,654,655,656,657,658,659,660,661,662,663,664,665,666,667,668,669,670,671,672,673,674,675,676,677,678,679,680,681,682,683,684,685,686,687,688,689,690,691,692,693,694,695,696,697,698,699,700,701,702,703,704,705,706,707,708,709,710,711,712,713,714,715,716,717,718,719,720,721,722,723,724,725,726,727,728,729,730,731,732,733,734,735,736,737,738,739,740,741,742,743,744,745,746,747,748,749,750,751,752,753,754,755,756,757,758,759,760,761,762,763,764,765,766,767,768,769,770,771,772,773,774,775,776,777,778,779,780,781,782,783,784,785,786,787,788,789,790,791,792,793,794,795,796,797,798,799,800,801,802,803,804,805,806,807,808,809,810,811,812,813,814,815,816,817,818,819,820,821,822,823,824,825,826,827,828,829,830,831,832,833,834,835,836,837,838,839,840,841,842,843,844,845,846,847,848,849,850,851,852,853,854,855,856,857,858,859,860,861,862,863,864,865,866,867,868,869,870,871,872,873,874,875,876,877,878,879,880,881,882,883,884,885,886,887,888,889,890,891,892,893,894,895,896,897,898,899,900,901,902,903,904,905,906,907,908,909,910,911,912,913,914,915,916,917,918,919,920,921,922,923,924,925,926,927,928,929,930,931,932,933,934,935,936,937,938,939,940,941,942,943,944,945,946,947,948,949,950,951,952,953,954,955,956,957,958,959,960,961,962,963,964,965,966,967,968,969,970,971,972,973,974,975,976,977,978,979,980,981,982,983,984,985,986,987,988,989,990,991,992,993,994,995,996,997,998,999,1000,1001,1002,1003,1004,1005,1006,1007,1008,1009,1010,1011,1012,1013,1014,1015,1016,1017,1018,1019,1020,1021,1022,1023,1024,1025,1026,1027,1028,1029,1030,1031,1032,1033,1034,1035,1036,1037,1038,1039,1040,1041,1042,1043,1044,1045,1046,1047,1048,1049,1050,1051,1052,1053,1054,1055,1056,1057,1058,1059,1060,1061,1062,1063,1064,1065,1066,1067,1068,1069,1070,1071,1072,1073,1074,1075,1076,1077,1078,1079,1080,1081,1082,1083,1084,1085,1086,1087,1088,1089,1090,1091,1092,1093,1094,1095,1096,1097,1098,1099,1100,1101,1102,1103,1104,1105,1106,1107,1108,1109,1110,1111,1112,1113,1114,1115,1116,1117,1118,1119,1120,1121,1122,1123,1124,1125,1126,1127,1128,1129,1130,1131,1132,1133,1134,1135,1136,1137,1138,1139,1140,1141,1142,1143,1144,1145,1146,1147,1148,1149,1150,1151,1152,1153,1154,1155,1156,1157,1158,1159,1160,1161,1162,1163,1164,1165,1166,1167,1168,1169,1170,1171,1172,1173,1174,1175,1176,1177,1178,1179,1180,1181,1182,1183,1184,1185,1186,1187,1188,1189,1190,1191,1192,1193,1194,1195,1196,1197,1198,1199,1200,1201,1202,1203,1204,1205,1206,1207,1208,1209,1210,1211,1212,1213,1214,1215,1216,1217,1218,1219,1220,1221,1222,1223,1224,1225,1226,1227,1228,1229,1230,1231,1232,1233,1234,1235,1236,1237,1238,1239,1240,1241,1242,1243,1244,1245,1246,1247,1248,1249,1250,1251,1252,1253,1254,1255,1256,1257,1258,1259,1260,1261,1262,1263,1264,1265,1266,1267,1268,1269,1270,1271,1272,1273,1274,1275,1276,1277,1278,1279,1280,1281,1282,1283,1284,1285,1286,1287,1288,1289,1290,1291,1292,1293,1294,1295,1296,1297,1298,1299,1300,1301,1302,1303,1304,1305,1306,1307,1308,1309,1310,1311,1312,1313,1314,1315,1316,1317,1318,1319,1320,1321,1322,1323,1324,1325,1326,1327,1328,1329,1330,1331,1332,1333,1334,1335,1336,1337,1338,1339,1340,1341,1342,1343,1344,1345,1346,1347,1348,1349,1350,1351,1352,1353,1354,1355,1356,1357,1358,1359,1360,1361,1362,1363,1364,1365,1366,1367,1368,1369,1370,1371,1372,1373,1374,1375,1376,1377,1378,1379,1380,1381,1382,1383,1384,1385,1386,1387,1388,1389,1390,1391,1392,1393,1394,1395,1396,1397,1398,1399,1400,1401,1402,1403,1404,1405,1406,1407,1408,1409,1410,1411,1412,1413,1414,1415]],
['atomicstringtype100',[11,48,85]],
['annotation',[11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439,440,441,442,443,444,445,446,447,448,449,450,451,452,453,454,455,456,457,458,459,460,461,462,463,464,465,466,467,468,469,470,471,472,473,474,475,476,477,478,479,480,481,482,483,484,485,486,487,488,489,490,491,492,493,494,495,496,497,498,499,500,501,502,503,504,505,506,507,508,509,510,511,512,513,514,515,516,517,518,519,520,521,522,523,524,525,526,527,528,529,530,531,532,533,534,535,536,537,538,539,540,541,542,543,544,545,546,547,548,549,550,551,552,553,554,555,556,557,558,559,560,561,562,563,564,565,566,567,568,569,570,571,572,573,574,575,576,577,578,579,580,581,582,583,584,585,586,587,588,589,590,591,592,593,594,595,596,597,598,599,600,601,602,603,604,605,606,607,608,609,610,611,612,613,614,615,616,617,618,619,620,621,622,623,624,625,626,627,628,629,630,631,632,633,634,635,636,637,638,639,640,641,642,643,644,645,646,647,648,649,650,651,652,653,654,655,656,657,658,659,660,661,662,663,664,665,666,667,668,669,670,671,672,673,674,675,676,677,678,679,680,681,682,683,684,685,686,687,688,689,690,691,692,693,694,695,696,697,698,699,700,701,702,703,704,705,706,707,708,709,710,711,712,713,714,715,716,717,718,719,720,721,722,723,724,725,726,727,728,729,730,731,732,733,734,735,736,737,738,739,740,741,742,743,744,745,746,747,748,749,750,751,752,753,754,755,756,757,758,759,760,761,762,763,764,765,766,767,768,769,770,771,772,773,774,775,776,777,778,779,780,781,782,783,784,785,786,787,788,789,790,791,792,793,794,795,796,797,798,799,800,801,802,803,804,805,806,807,808,809,810,811,812,813,814,815,816,817,818,819,820,821,822,823,824,825,826,827,828,829,830,831,832,833,834,835,836,837,838,839,840,841,842,843,844,845,846,847,848,849,850,851,852,853,854,855,856,857,858,859,860,861,862,863,864,865,866,867,868,869,870,871,872,873,874,875,876,877,878,879,880,881,882,883,884,885,886,887,888,889,890,891,892,893,894,895,896,897,898,899,900,901,902,903,904,905,906,907,908,909,910,911,912,913,914,915,916,917,918,919,920,921,922,923,924,925,926,927,928,929,930,931,932,933,934,935,936,937,938,939,940,941,942,943,944,945,946,947,948,949,950,951,952,953,954,955,956,957,958,959,960,961,962,963,964,965,966,967,968,969,970,971,972,973,974,975,976,977,978,979,980,981,982,983,984,985,986,987,988,989,990,991,992,993,994,995,996,997,998,999,1000,1001,1002,1003,1004,1005,1006,1007,1008,1009,1010,1011,1012,1013,1014,1015,1016,1017,1018,1019,1020,1021,1022,1023,1024,1025,1026,1027,1028,1029,1030,1031,1032,1033,1034,1035,1036,1037,1038,1039,1040,1041,1042,1043,1044,1045,1046,1047,1048,1049,1050,1051,1052,1053,1054,1055,1056,1057,1058,1059,1060,1061,1062,1063,1064,1065,1066,1067,1068,1069,1070,1071,1072,1073,1074,1075,1076,1077,1078,1079,1080,1081,1082,1083,1084,1085,1086,1087,1088,1089,1090,1091,1092,1093,1094,1095,1096,1097,1098,1099,1100,1101,1102,1103,1104,1105,1106,1107,1108,1109,1110,1111,1112,1113,1114,1115,1116,1117,1118,1119,1120,1121,1122,1123,1124,1125,1126,1127,1128,1129,1130,1131,1132,1133,1134,1135,1136,1137,1138,1139,1140,1141,1142,1143,1144,1145,1146,1147,1148,1149,1150,1151,1152,1153,1154,1155,1156,1157,1158,1159,1160,1161,1162,1163,1164,1165,1166,1167,1168,1169,1170,1171,1172,1173,1174,1175,1176,1177,1178,1179,1180,1181,1182,1183,1184,1185,1186,1187,1188,1189,1190,1191,1192,1193,1194,1195,1196,1197,1198,1199,1200,1201,1202,1203,1204,1205,1206,1207,1208,1209,1210,1211,1212,1213,1214,1215,1216,1217,1218,1219,1220,1221,1222,1223,1224,1225,1226,1227,1228,1229,1230,1231,1232,1233,1234,1235,1236,1237,1238,1239,1240,1241,1242,1243,1244,1245,1246,1247,1248,1249,1250,1251,1252,1253,1254,1255,1256,1257,1258,1259,1260,1261,1262,1263,1264,1265,1266,1267,1268,1269,1270,1271,1272,1273,1274,1275,1276,1277,1278,1279,1280,1281,1282,1283,1284,1285,1286,1287,1288,1289,1290,1291,1292,1293,1294,1295,1296,1297,1298,1299,1300,1301,1302,1303,1304,1305,1306,1307,1308,1309,1310,1311,1312,1313,1314,1315,1316,1317,1318,1319,1320,1321,1322,1323,1324,1325,1326,1327,1328,1329,1330,1331,1332,1333,1334,1335,1336,1337,1338,1339,1340,1341,1342,1343,1344,1345,1346,1347,1348,1349,1350,1351,1352,1353,1354,1355,1356,1357,1358,1359,1360,1361,1362,1363,1364,1365,1366,1367,1368,1369,1370,1371,1372,1373,1374,1375,1376,1377,1378,1379,1380,1381,1382,1383,1384,1385,1386,1387,1388,1389,1390,1391,1392,1393,1394,1395,1396,1397,1398,1399,1400,1401,1402,1403,1404,1405,1406,1407,1408,1409,1410,1411,1412,1413,1414,1415]],
['documentation',[11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439,440,441,442,443,444,445,446,447,448,449,450,451,452,453,454,455,456,457,458,459,460,461,462,463,464,465,466,467,468,469,470,471,472,473,474,475,476,477,478,479,480,481,482,483,484,485,486,487,488,489,490,491,492,493,494,495,496,497,498,499,500,501,502,503,504,505,506,507,508,509,510,511,512,513,514,515,516,517,518,519,520,521,522,523,524,525,526,527,528,529,530,531,532,533,534,535,536,537,538,539,540,541,542,543,544,545,546,547,548,549,550,551,552,553,554,555,556,557,558,559,560,561,562,563,564,565,566,567,568,569,570,571,572,573,574,575,576,577,578,579,580,581,582,583,584,585,586,587,588,589,590,591,592,593,594,595,596,597,598,599,600,601,602,603,604,605,606,607,608,609,610,611,612,613,614,615,616,617,618,619,620,621,622,623,624,625,626,627,628,629,630,631,632,633,634,635,636,637,638,639,640,641,642,643,644,645,646,647,648,649,650,651,652,653,654,655,656,657,658,659,660,661,662,663,664,665,666,667,668,669,670,671,672,673,674,675,676,677,678,679,680,681,682,683,684,685,686,687,688,689,690,691,692,693,694,695,696,697,698,699,700,701,702,703,704,705,706,707,708,709,710,711,712,713,714,715,716,717,718,719,720,721,722,723,724,725,726,727,728,729,730,731,732,733,734,735,736,737,738,739,740,741,742,743,744,745,746,747,748,749,750,751,752,753,754,755,756,757,758,759,760,761,762,763,764,765,766,767,768,769,770,771,772,773,774,775,776,777,778,779,780,781,782,783,784,785,786,787,788,789,790,791,792,793,794,795,796,797,798,799,800,801,802,803,804,805,806,807,808,809,810,811,812,813,814,815,816,817,818,819,820,821,822,823,824,825,826,827,828,829,830,831,832,833,834,835,836,837,838,839,840,841,842,843,844,845,846,847,848,849,850,851,852,853,854,855,856,857,858,859,860,861,862,863,864,865,866,867,868,869,870,871,872,873,874,875,876,877,878,879,880,881,882,883,884,885,886,887,888,889,890,891,892,893,894,895,896,897,898,899,900,901,902,903,904,905,906,907,908,909,910,911,912,913,914,915,916,917,918,919,920,921,922,923,924,925,926,927,928,929,930,931,932,933,934,935,936,937,938,939,940,941,942,943,944,945,946,947,948,949,950,951,952,953,954,955,956,957,958,959,960,961,962,963,964,965,966,967,968,969,970,971,972,973,974,975,976,977,978,979,980,981,982,983,984,985,986,987,988,989,990,991,992,993,994,995,996,997,998,999,1000,1001,1002,1003,1004,1005,1006,1007,1008,1009,1010,1011,1012,1013,1014,1015,1016,1017,1018,1019,1020,1021,1022,1023,1024,1025,1026,1027,1028,1029,1030,1031,1032,1033,1034,1035,1036,1037,1038,1039,1040,1041,1042,1043,1044,1045,1046,1047,1048,1049,1050,1051,1052,1053,1054,1055,1056,1057,1058,1059,1060,1061,1062,1063,1064,1065,1066,1067,1068,1069,1070,1071,1072,1073,1074,1075,1076,1077,1078,1079,1080,1081,1082,1083,1084,1085,1086,1087,1088,1089,1090,1091,1092,1093,1094,1095,1096,1097,1098,1099,1100,1101,1102,1103,1104,1105,1106,1107,1108,1109,1110,1111,1112,1113,1114,1115,1116,1117,1118,1119,1120,1121,1122,1123,1124,1125,1126,1127,1128,1129,1130,1131,1132,1133,1134,1135,1136,1137,1138,1139,1140,1141,1142,1143,1144,1145,1146,1147,1148,1149,1150,1151,1152,1153,1154,1155,1156,1157,1158,1159,1160,1161,1162,1163,1164,1165,1166,1167,1168,1169,1170,1171,1172,1173,1174,1175,1176,1177,1178,1179,1180,1181,1182,1183,1184,1185,1186,1187,1188,1189,1190,1191,1192,1193,1194,1195,1196,1197,1198,1199,1200,1201,1202,1203,1204,1205,1206,1207,1208,1209,1210,1211,1212,1213,1214,1215,1216,1217,1218,1219,1220,1221,1222,1223,1224,1225,1226,1227,1228,1229,1230,1231,1232,1233,1234,1235,1236,1237,1238,1239,1240,1241,1242,1243,1244,1245,1246,1247,1248,1249,1250,1251,1252,1253,1254,1255,1256,1257,1258,1259,1260,1261,1262,1263,1264,1265,1266,1267,1268,1269,1270,1271,1272,1273,1274,1275,1276,1277,1278,1279,1280,1281,1282,1283,1284,1285,1286,1287,1288,1289,1290,1291,1292,1293,1294,1295,1296,1297,1298,1299,1300,1301,1302,1303,1304,1305,1306,1307,1308,1309,1310,1311,1312,1313,1314,1315,1316,1317,1318,1319,1320,1321,1322,1323,1324,1325,1326,1327,1328,1329,1330,1331,1332,1333,1334,1335,1336,1337,1338,1339,1340,1341,1342,1343,1344,1345,1346,1347,1348,1349,1350,1351,1352,1353,1354,1355,1356,1357,1358,1359,1360,1361,1362,1363,1364,1365,1366,1367,1368,1369,1370,1371,1372,1373,1374,1375,1376,1377,1378,1379,1380,1381,1382,1383,1384,1385,1386,1387,1388,1389,1390,1391,1392,1393,1394,1395,1396,1397,1398,1399,1400,1401,1402,1403,1404,1405,1406,1407,1408,1409,1410,1411,1412,1413,1414,1415]],
['lang',[11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439,440,441,442,443,444,445,446,447,448,449,450,451,452,453,454,455,456,457,458,459,460,461,462,463,464,465,466,467,468,469,470,471,472,473,474,475,476,477,478,479,480,481,482,483,484,485,486,487,488,489,490,491,492,493,494,495,496,497,498,499,500,501,502,503,504,505,506,507,508,509,510,511,512,513,514,515,516,517,518,519,520,521,522,523,524,525,526,527,528,529,530,531,532,533,534,535,536,537,538,539,540,541,542,543,544,545,546,547,548,549,550,551,552,553,554,555,556,557,558,559,560,561,562,563,564,565,566,567,568,569,570,571,572,573,574,575,576,577,578,579,580,581,582,583,584,585,586,587,588,589,590,591,592,593,594,595,596,597,598,599,600,601,602,603,604,605,606,607,608,609,610,611,612,613,614,615,616,617,618,619,620,621,622,623,624,625,626,627,628,629,630,631,632,633,634,635,636,637,638,639,640,641,642,643,644,645,646,647,648,649,650,651,652,653,654,655,656,657,658,659,660,661,662,663,664,665,666,667,668,669,670,671,672,673,674,675,676,677,678,679,680,681,682,683,684,685,686,687,688,689,690,691,692,693,694,695,696,697,698,699,700,701,702,703,704,705,706,707,708,709,710,711,712,713,714,715,716,717,718,719,720,721,722,723,724,725,726,727,728,729,730,731,732,733,734,735,736,737,738,739,740,741,742,743,744,745,746,747,748,749,750,751,752,753,754,755,756,757,758,759,760,761,762,763,764,765,766,767,768,769,770,771,772,773,774,775,776,777,778,779,780,781,782,783,784,785,786,787,788,789,790,791,792,793,794,795,796,797,798,799,800,801,802,803,804,805,806,807,808,809,810,811,812,813,814,815,816,817,818,819,820,821,822,823,824,825,826,827,828,829,830,831,832,833,834,835,836,837,838,839,840,841,842,843,844,845,846,847,848,849,850,851,852,853,854,855,856,857,858,859,860,861,862,863,864,865,866,867,868,869,870,871,872,873,874,875,876,877,878,879,880,881,882,883,884,885,886,887,888,889,890,891,892,893,894,895,896,897,898,899,900,901,902,903,904,905,906,907,908,909,910,911,912,913,914,915,916,917,918,919,920,921,922,923,924,925,926,927,928,929,930,931,932,933,934,935,936,937,938,939,940,941,942,943,944,945,946,947,948,949,950,951,952,953,954,955,956,957,958,959,960,961,962,963,964,965,966,967,968,969,970,971,972,973,974,975,976,977,978,979,980,981,982,983,984,985,986,987,988,989,990,991,992,993,994,995,996,997,998,999,1000,1001,1002,1003,1004,1005,1006,1007,1008,1009,1010,1011,1012,1013,1014,1015,1016,1017,1018,1019,1020,1021,1022,1023,1024,1025,1026,1027,1028,1029,1030,1031,1032,1033,1034,1035,1036,1037,1038,1039,1040,1041,1042,1043,1044,1045,1046,1047,1048,1049,1050,1051,1052,1053,1054,1055,1056,1057,1058,1059,1060,1061,1062,1063,1064,1065,1066,1067,1068,1069,1070,1071,1072,1073,1074,1075,1076,1077,1078,1079,1080,1081,1082,1083,1084,1085,1086,1087,1088,1089,1090,1091,1092,1093,1094,1095,1096,1097,1098,1099,1100,1101,1102,1103,1104,1105,1106,1107,1108,1109,1110,1111,1112,1113,1114,1115,1116,1117,1118,1119,1120,1121,1122,1123,1124,1125,1126,1127,1128,1129,1130,1131,1132,1133,1134,1135,1136,1137,1138,1139,1140,1141,1142,1143,1144,1145,1146,1147,1148,1149,1150,1151,1152,1153,1154,1155,1156,1157,1158,1159,1160,1161,1162,1163,1164,1165,1166,1167,1168,1169,1170,1171,1172,1173,1174,1175,1176,1177,1178,1179,1180,1181,1182,1183,1184,1185,1186,1187,1188,1189,1190,1191,1192,1193,1194,1195,1196,1197,1198,1199,1200,1201,1202,1203,1204,1205,1206,1207,1208,1209,1210,1211,1212,1213,1214,1215,1216,1217,1218,1219,1220,1221,1222,1223,1224,1225,1226,1227,1228,1229,1230,1231,1232,1233,1234,1235,1236,1237,1238,1239,1240,1241,1242,1243,1244,1245,1246,1247,1248,1249,1250,1251,1252,1253,1254,1255,1256,1257,1258,1259,1260,1261,1262,1263,1264,1265,1266,1267,1268,1269,1270,1271,1272,1273,1274,1275,1276,1277,1278,1279,1280,1281,1282,1283,1284,1285,1286,1287,1288,1289,1290,1291,1292,1293,1294,1295,1296,1297,1298,1299,1300,1301,1302,1303,1304,1305,1306,1307,1308,1309,1310,1311,1312,1313,1314,1315,1316,1317,1318,1319,1320,1321,1322,1323,1324,1325,1326,1327,1328,1329,1330,1331,1332,1333,1334,1335,1336,1337,1338,1339,1340,1341,1342,1343,1344,1345,1346,1347,1348,1349,1350,1351,1352,1353,1354,1355,1356,1357,1358,1359,1360,1361,1362,1363,1364,1365,1366,1367,1368,1369,1370,1371,1372,1373,1374,1375,1376,1377,1378,1379,1380,1381,1382,1383,1384,1385,1386,1387,1388,1389,1390,1391,1392,1393,1394,1395,1396,1397,1398,1399,1400,1401,1402,1403,1404,1405,1406,1407,1408,1409,1410,1411,1412,1413,1414,1415]],
['atomi',[11,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,1165,1311]],
['string',[11,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,77,85,86,87,88,89,90,91,92,726,727,728,729,732,736,738,744,746,757,761,765,767,770,771,775,777,779,801,802,803,805,806,807,808,855,858,865,866,867,870,872,873,874,875,877,879,881,882,883,884,885,887,889,1165,1264,1265,1310,1314,1315,1318,1319,1320,1322,1325,1330,1331,1335,1337,1338]],
['típus',[11,28,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,70,71,72,76,77,78,80,81,82,83,84,85,86,87,88,89,90,91,92,93,95,97,140,147,152,172,188,312,314,315,317,318,320,332,334,369,372,373,375,376,381,382,383,405,409,411,412,413,414,415,416,418,419,430,504,507,532,568,602,606,620,709,712,713,716,717,718,719,720,721,722,723,724,725,726,727,730,732,740,747,757,777,782,784,801,807,809,814,828,830,841,843,844,846,847,849,853,855,860,861,865,866,867,868,869,871,873,876,877,880,882,883,884,886,887,888,890,900,901,904,910,915,929,932,936,938,952,955,957,961,964,968,972,985,986,987,988,989,990,995,1002,1003,1004,1007,1008,1009,1010,1011,1013,1028,1030,1034,1035,1037,1040,1044,1045,1046,1049,1056,1063,1064,1067,1071,1073,1077,1084,1091,1097,1100,1115,1117,1118,1121,1122,1126,1127,1165,1166,1172,1174,1177,1180,1182,1183,1185,1188,1190,1195,1201,1203,1207,1209,1227,1236,1241,1245,1258,1264,1267,1269,1280,1301,1305,1310,1311,1312,1313,1314,1315,1318,1320,1321,1322,1323,1324,1325,1326,1327,1328,1329,1330,1331,1332,1333,1334,1335,1336,1338,1339,1340,1347,1352,1380,1386,1389,1408,1410]],
['hosszra',[11,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64]],
['type',[11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,68,70,71,72,76,77,78,80,81,82,83,84,92,93,95,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,369,372,373,375,376,379,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439,440,441,442,443,444,445,446,447,448,449,450,451,452,453,454,455,456,457,458,459,460,461,462,463,464,465,466,467,468,469,470,471,472,473,474,475,476,477,478,479,480,481,482,483,484,485,486,487,488,489,490,491,492,493,494,495,496,497,498,499,500,501,502,503,504,505,506,507,508,509,510,511,512,513,514,515,516,517,518,519,520,521,522,523,524,525,526,527,528,529,530,531,532,533,534,535,536,537,538,539,540,541,542,543,544,545,546,547,548,549,550,551,552,553,554,555,556,557,558,559,560,561,562,563,564,565,566,567,568,569,570,571,572,573,574,575,576,577,578,579,580,581,582,583,584,585,586,587,588,589,590,591,592,593,594,595,596,597,598,599,600,601,602,603,604,605,606,607,608,609,610,611,612,613,614,615,616,617,618,619,620,621,622,623,624,625,626,627,628,629,630,631,632,633,634,635,636,637,638,639,640,641,642,643,644,645,646,647,648,649,650,651,652,653,654,655,656,657,658,659,660,661,662,663,664,665,666,667,668,669,670,671,672,673,674,675,676,677,678,679,680,681,682,683,684,685,686,687,688,689,690,691,692,693,694,695,696,697,698,699,700,701,702,703,704,705,706,707,708,709,710,711,712,713,715,716,717,718,719,720,722,723,724,725,726,727,730,731,732,733,737,740,741,742,743,744,745,747,748,749,750,751,752,753,755,756,757,758,759,760,762,763,764,765,766,768,769,772,773,774,776,777,780,781,782,783,784,785,786,787,788,789,790,791,792,793,794,795,796,797,798,799,800,801,803,804,806,807,809,810,811,812,813,814,815,816,817,818,819,820,821,822,823,824,825,826,827,828,829,830,831,832,833,834,835,836,837,838,839,840,841,842,843,844,845,846,847,848,849,850,851,852,853,854,855,856,857,859,860,861,862,863,864,865,866,867,868,869,870,871,873,876,877,880,882,883,884,885,886,887,888,890,891,892,893,894,895,896,897,898,899,900,901,902,903,904,905,906,907,908,909,910,911,912,913,914,915,916,917,918,919,920,921,922,923,924,925,926,927,928,929,930,931,932,933,934,935,936,937,938,939,940,941,942,943,944,945,946,947,948,949,950,951,952,953,954,955,956,957,958,959,960,961,962,963,964,965,966,967,968,969,970,971,972,973,974,975,976,977,978,979,980,981,982,983,984,985,986,987,988,989,990,991,992,993,994,995,996,997,998,999,1002,1003,1004,1005,1006,1007,1008,1009,1010,1011,1012,1013,1014,1015,1016,1017,1018,1019,1020,1021,1022,1023,1024,1025,1026,1027,1028,1029,1030,1031,1032,1033,1034,1035,1036,1037,1038,1039,1040,1041,1042,1043,1044,1045,1046,1047,1048,1049,1050,1051,1052,1053,1054,1055,1056,1057,1058,1059,1060,1061,1062,1063,1064,1065,1066,1067,1068,1069,1070,1071,1072,1073,1074,1075,1076,1077,1078,1079,1080,1081,1082,1083,1084,1085,1086,1087,1088,1089,1090,1091,1092,1093,1094,1095,1096,1097,1098,1099,1100,1101,1102,1103,1104,1105,1106,1107,1108,1109,1110,1111,1112,1113,1114,1115,1116,1117,1118,1119,1120,1121,1122,1123,1124,1125,1126,1127,1128,1129,1132,1133,1150,1165,1166,1167,1168,1169,1170,1171,1172,1173,1174,1175,1176,1177,1178,1179,1180,1181,1182,1183,1184,1185,1186,1187,1188,1189,1190,1191,1192,1193,1194,1195,1196,1197,1198,1199,1200,1201,1202,1203,1204,1205,1206,1207,1208,1209,1210,1211,1212,1213,1214,1215,1216,1217,1218,1219,1220,1221,1222,1223,1224,1225,1226,1227,1228,1229,1230,1231,1232,1233,1234,1235,1236,1238,1239,1240,1241,1245,1246,1251,1252,1253,1254,1255,1256,1257,1258,1259,1260,1261,1262,1263,1264,1266,1267,1268,1269,1270,1271,1272,1273,1274,1275,1276,1277,1278,1279,1280,1281,1282,1283,1284,1285,1286,1287,1288,1289,1290,1291,1292,1293,1294,1295,1296,1297,1298,1299,1300,1301,1302,1303,1304,1305,1306,1307,1308,1309,1310,1311,1312,1313,1314,1315,1316,1317,1318,1319,1320,1321,1322,1323,1324,1325,1326,1327,1328,1329,1330,1331,1332,1333,1334,1335,1336,1338,1339,1340,1341,1342,1343,1344,1345,1346,1347,1348,1349,1350,1351,1352,1353,1354,1355,1356,1357,1358,1359,1360,1361,1362,1363,1364,1365,1366,1367,1368,1369,1370,1371,1372,1373,1374,1375,1376,1377,1378,1379,1380,1381,1382,1383,1384,1385,1386,1387,1388,1389,1390,1391,1392,1393,1394,1395,1396,1397,1398,1399,1400,1401,1402,1403,1404,1405,1406,1407,1408,1409,1410,1411,1412,1413]],
['length',[11,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,68,69,70,94,96,97,378,418,605,705,707,726,884]],
['restriction',[11,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,409,410,411,412,413,414,415,416,417,418,710,711,712,713,714,715,716,717,718,719,720,721,722,723,724,725,726,727,728,729,732,734,735,736,738,739,744,746,753,754,757,761,765,767,770,771,775,777,778,779,801,802,803,805,806,807,808,855,858,865,866,867,868,869,870,871,872,873,874,875,876,877,878,879,880,881,882,883,884,885,886,887,888,889,890,985,986,987,988,1165,1236,1237,1241,1242,1243,1244,1245,1247,1248,1249,1250,1264,1265,1310,1311,1312,1313,1314,1315,1316,1317,1318,1319,1320,1321,1322,1323,1324,1325,1326,1327,1328,1329,1330,1331,1332,1333,1334,1335,1336,1337,1338]],
['base',[11,28,30,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,101,102,104,107,108,113,115,117,118,119,121,125,127,134,135,136,137,138,139,140,147,148,150,172,173,179,180,181,182,183,184,185,186,189,190,191,193,194,200,201,203,204,211,213,221,222,223,226,229,236,237,238,239,240,248,249,252,256,259,261,263,265,267,271,273,275,279,283,285,288,297,299,300,302,312,313,317,319,324,326,327,332,333,336,338,340,341,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,409,410,411,412,413,414,415,416,417,418,426,429,430,431,437,438,465,466,471,472,484,486,487,489,492,495,496,499,504,506,509,515,516,517,518,519,520,521,522,535,536,552,553,554,556,557,558,559,560,562,563,564,568,577,584,597,598,599,602,608,612,613,615,617,627,628,632,633,635,638,639,640,643,644,652,653,654,655,656,657,658,659,661,662,663,671,674,676,679,680,683,684,685,686,687,688,689,692,698,699,700,709,710,711,712,713,714,715,716,717,718,719,720,721,722,723,724,725,726,727,728,729,732,734,735,736,738,739,744,746,753,754,757,761,765,767,770,771,775,777,778,779,789,790,791,792,793,794,795,796,801,802,803,805,806,807,808,809,810,812,813,841,842,846,848,855,856,858,865,866,867,868,869,870,871,872,873,874,875,876,877,878,879,880,881,882,883,884,885,886,887,888,889,890,891,893,894,896,897,900,901,902,903,904,905,906,908,909,910,911,912,913,920,921,922,926,928,929,931,932,933,934,935,938,939,940,941,945,952,953,961,962,964,965,966,967,968,969,970,972,973,976,979,981,984,985,986,987,988,989,995,996,997,998,1000,1001,1002,1003,1004,1006,1007,1009,1010,1011,1013,1016,1017,1026,1028,1030,1034,1035,1037,1040,1041,1042,1043,1044,1045,1046,1048,1049,1056,1059,1061,1063,1064,1066,1067,1071,1073,1077,1084,1087,1090,1091,1097,1100,1109,1110,1113,1115,1117,1118,1120,1121,1122,1123,1125,1126,1127,1129,1130,1131,1132,1133,1134,1135,1136,1137,1138,1139,1140,1141,1142,1143,1144,1145,1146,1147,1148,1149,1150,1151,1152,1153,1154,1155,1156,1157,1158,1159,1160,1161,1162,1163,1164,1165,1183,1185,1201,1236,1237,1241,1242,1243,1244,1245,1247,1248,1249,1250,1264,1265,1280,1305,1310,1311,1312,1313,1314,1315,1316,1317,1318,1319,1320,1321,1322,1323,1324,1325,1326,1327,1328,1329,1330,1331,1332,1333,1334,1335,1336,1337,1338,1339,1340,1341,1343,1344,1345,1347,1348,1349,1350,1352,1355,1377,1378,1386,1388,1389,1390,1391,1392,1393,1394,1395,1396,1397,1398,1399,1400,1401,1408,1412,1413,1414,1415]],
['minlength',[11,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,67,71,78,79,80,92,97,375,418,711,717,718,726,887,890,986,987,1165,1241,1242,1243,1310,1311,1315,1317,1318,1325,1330,1337]],
['value',[11,40,42,44,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,100,103,106,117,122,131,147,153,159,162,163,166,200,201,211,212,239,243,244,246,297,299,300,302,338,342,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,409,410,411,412,413,414,415,416,417,418,419,422,423,424,433,434,509,511,524,547,552,568,569,570,575,578,581,586,588,620,621,622,671,675,705,706,710,711,712,713,714,715,716,717,718,719,720,721,722,723,724,725,726,727,728,729,732,734,735,736,738,739,744,746,753,754,757,761,763,764,765,767,770,771,775,777,778,779,797,799,801,802,803,805,806,807,808,855,858,865,866,867,870,872,873,874,875,876,877,878,879,880,881,882,883,884,885,886,887,888,889,890,932,938,942,957,958,959,976,980,985,986,987,988,1002,1013,1019,1023,1030,1032,1033,1049,1052,1053,1100,1104,1108,1111,1112,1118,1119,1165,1166,1169,1190,1192,1193,1194,1236,1239,1241,1242,1243,1244,1245,1247,1248,1249,1250,1258,1262,1264,1265,1283,1286,1289,1292,1310,1311,1312,1313,1314,1315,1316,1317,1318,1319,1320,1321,1322,1323,1324,1325,1328,1329,1330,1331,1332,1333,1334,1335,1336,1337,1338,1339,1405,1407]],
['maxlength',[11,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,67,71,78,79,80,92,418,711,717,718,726,727,728,729,732,736,738,744,746,757,761,765,767,770,771,775,777,779,801,802,803,805,806,807,808,855,858,865,866,867,870,872,873,874,875,877,879,881,882,883,885,887,889,890,986,987,1165,1241,1242,1243,1244,1245,1247,1248,1249,1250,1264,1265,1310,1311,1314,1315,1317,1318,1319,1320,1322,1325,1329,1330,1331,1335,1337,1338]],
['atomicstringtype1024',[11,49,86,1339,1405,1407]],
['atomicstringtype128',[11,50,84]],
['atomicstringtype15',[11,12,13,15,51,67,78,80,87,97,369,370,371,377,379,382,409,410,417,418,710,712,714,715,716,721,725,726,876,888,890,985,1165,1283,1288,1289,1294,1312,1313,1316,1333,1336]],
['atomicstringtype16',[11,52]],
['atomicstringtype2',[11,53,68,69,96]],
['atomicstringtype200',[11,54,88]],
['atomicstringtype2048',[11,55]],
['atomicstringtype255',[11,56,89,418,711,1165,1317]],
['atomicstringtype256',[11,57]],
['atomicstringtype32',[11,58,71,79,97,368,378,418,718,890,987]],
['atomicstringtype4',[11,59,70]],
['atomicstringtype4000',[11,60]],
['atomicstringtype50',[11,61,65,90,726,880]],
['atomicstringtype512',[11,62,91]],
['atomicstringtype64',[11,63,83]],
['atomicstringtype8',[11,64,66,72,94,95,97,372,373,374,376,380,381,418,717,719,720,724,726,886,890,986,1165,1323]],
['genericdatetype',[11,73]],
['Általános',[]],
['dátum',[11,73,97,134,135,136,297,382,411,418,442,456,645,646,1165,1321]],
['generic',[11,30,73,74,75,76]],
['date',[11,73,97,107,108,117,121,134,135,136,147,150,172,180,183,184,221,223,232,234,275,276,279,280,290,291,296,297,338,340,382,411,418,426,429,430,431,484,486,504,506,509,515,518,612,613,645,646,726,809,811,862,864,890,891,896,1002,1056,1060,1073,1074,1165,1209,1213,1321]],
['pattern',[11,65,67,68,69,70,71,73,75,78,79,80,83,84,85,86,87,88,89,90,91,92,93,94,96,97,98,103,378,382,411,413,418,711,712,718,726,732,738,765,767,775,777,779,874,879,882,884,887,890,987,1165,1264,1265,1310,1311,1314,1315,1317,1318,1321,1322,1325,1330,1335,1337]],
['genericdecimaltype',[11,74,382,416,418,722,723,890,988,1165,1334]],
['lebegőpontos',[11,74]],
['érték',[11,74,97,97,239,243,297,299,300,302,418,547,552,568,569,570,722,726,878,890,932,938,942,988]],
['float',[11,74]],
['point',[11,74,418,484,568,576,726,855,857,859,878]],
['decimal',[11,74,382,416,418,713,722,723,726,753,755,756,855,857,859,878,890,988,1165,1328,1334]],
['generictimestamptype',[11,12,16,75,726,777,780,781,809,811,816,825,826,830,837,862,864,890,891,898,899,920,924,925,1002,1013,1025,1073,1074,1100,1112,1165,1272,1275]],
['időbélyeg',[11,75,382,413,890,891,898,899,920,924,925,1165,1272,1275]],
['timestamp',[11,12,16,18,21,75,97,221,223,382,413,890,891,898,899,920,924,925,1002,1003,1007,1010,1013,1022,1025,1030,1035,1040,1045,1049,1063,1071,1077,1091,1100,1107,1112,1117,1121,1126,1130,1132,1134,1136,1138,1140,1142,1144,1146,1148,1151,1153,1155,1157,1159,1161,1163,1165,1183,1272,1275]],
['datetime',[11,75,97,137,138,139,232,233,275,276,382,413]],
['genericunsignedintegertype',[11,76]],
['egész',[11,76,726,732,734,739,855,858,890,920,923,968,971,1165,1236,1239,1339,1340,1342]],
['szám',[11,76,382,386,392,399,400,405,407,418,442,447,450,451,471,472,473,475,479,480,502,503,602,609,671,674,679,712,717,723,726,816,827,890,976,979,984,986,1165,1201,1202,1203,1205,1214,1220,1258,1263,1295,1296,1301,1303,1305,1306,1310,1318]],
['unsigned',[11,76]],
['integer',[11,76,93,726,732,734,739,753,754]],
['mininclusive',[11,76,81,82,382,411,412,413,414,415,418,723,726,732,739,1165,1321,1324,1332]],
['sha256type',[11,83,726,830,835,1002,1013,1020,1100,1105]],
['sha256',[11,83,726,830,835]],
['megadására',[11,65,83,84,418,723]],
['szolgáló',[11,65,83,84,418,419,504,507,532,717,723,890,891,895,900,901,986,1165,1166,1174]],
['field',[11,83,84,382,416,418,419,420,421,430,509,518,568,620,711,716,718,722,724,890,938,957,987,988,1002,1056,1059,1061,1084,1087,1090,1091,1095,1165,1166,1167,1168,1317,1334]],
['holding',[11,83,84]],
['code',[11,23,24,33,34,36,38,66,68,69,70,72,80,83,84,92,95,96,97,129,132,303,305,382,386,389,394,396,399,402,403,404,405,406,408,418,460,461,477,478,481,482,509,513,618,619,620,621,622,623,627,629,669,670,680,681,717,726,744,745,757,763,764,765,774,816,817,830,832,835,853,854,855,856,872,887,890,920,926,932,933,938,940,955,956,957,958,959,960,964,965,972,973,986,1002,1013,1019,1020,1022,1023,1035,1036,1100,1104,1105,1107,1108,1118,1119,1165,1190,1191,1214,1217,1222,1224,1236,1238,1245,1248,1264,1265,1266,1272,1276,1295,1298,1299,1300,1301,1302,1304,1314,1315,1325,1335]],
['0-9a-f',[11,83,84,418,712,1165,1335]],
['sha512type',[11,84]],
['sha512',[11,84]],
['simpletext100notblanktype',[11,33,34,36,38,85,97,129,132,418,440,441,458,459,460,461,477,478,479,480,500,501,502,503,545,546,600,601,610,611,641,642,645,646,669,670,890,891,892,1165,1280,1281,1282,1305,1308,1309,1339,1408,1409]],
['legfeljebb',[11,85,86,87,88,89,90,91,418,723,726,753,755,756]],
['karaktert',[11,85,86,87,88,89,90,91]],
['tartalmazó',[11,85,86,87,88,89,90,91,418,430,568,620,724,726,828,829,890,938,957,1002,1037,1039]],
['szöveg',[11,33,35,85,86,87,88,89,90,91]],
['maximum',[11,85,86,87,88,89,90,91,382,416,418,722,723,726,753,755,756,890,988,1165,1334]],
['characters',[11,85,86,87,88,89,90,91,726,855,856,1002,1013,1018,1027,1071,1072,1091,1096,1100,1103,1114,1165,1190,1191,1236,1238,1339,1389,1390]],
['simpletext1024notblanktype',[11,23,26,33,35,36,37,86,97,239,242,243,726,816,822,1339,1408,1410]],
['simpletext15notblanktype',[11,87,97,303,309,726,740,742,816,817,819,827,830,838]],
['simpletext200notblanktype',[11,88,97,303,304,317,322,418,481,483,726,830,831,846,851]],
['simpletext255notblanktype',[11,89,382,386,388,398,399,400,401,418,419,420,489,490,602,607,609,612,616,620,621,726,816,818,821,890,957,958,1002,1035,1036,1165,1166,1167,1214,1216,1226,1295,1296,1297,1339,1405,1406]],
['simpletext50notblanktype',[11,23,24,28,29,90,97,147,151,159,161,172,187,192,203,206,221,225,226,228,229,230,232,235,239,241,303,307,310,382,386,387,390,391,392,393,395,396,397,399,404,418,426,428,473,476,481,482,504,508,535,538,568,594,602,606,612,614,671,673,680,681,726,816,820,830,834,839,890,910,914,938,949,976,978,1002,1077,1079,1080,1165,1203,1206,1214,1215,1218,1219,1220,1221,1223,1224,1225,1241,1242,1243,1244,1245,1247,1248,1249,1250,1295,1300]],
['simpletext512notblanktype',[11,28,91,97,129,130,172,177,197,303,306,317,321,375,418,419,422,465,468,495,498,568,579,671,678,726,830,833,846,850,890,938,943,976,983,1002,1091,1095,1165,1166,1169,1195,1198]],
['--Üzleti',[]],
['katalógus',[11]],
['elemek',[11]],
['business',[11,66,97,129,248,250,418,717,890,986,989,990,991,992,994,995,1000,1001,1339,1386,1415]],
['catalog',[11]],
['elements--',[11]],
['bankaccountnumbertype',[11,65,418,465,467,495,497,671,677,726,814,815,890,976,982,1165,1195,1197]],
['bankszámla',[11,65,418,495,497,726,765,773,814,815]],
['bank',[11,65,382,417,418,465,467,495,497,671,677,726,765,773,814,815,890,976,982,1165,1195,1197]],
['account',[11,65,418,442,449,465,467,495,497,500,501,509,523,671,677,726,765,773,814,815,890,976,982,1165,1195,1197]],
['number',[11,12,13,15,40,43,45,65,67,79,93,94,97,98,100,106,113,115,117,118,119,147,148,149,151,154,159,161,162,163,172,173,176,178,179,187,191,192,196,198,200,201,203,204,206,207,211,213,221,222,225,232,235,239,241,248,249,252,256,257,261,262,263,264,273,274,303,307,313,317,319,332,333,369,382,384,386,390,392,393,399,400,405,407,415,418,426,428,433,435,437,438,440,441,442,452,465,467,471,472,473,474,475,476,484,488,495,497,499,500,501,502,503,504,508,535,536,538,545,546,559,560,568,584,600,601,602,607,609,610,611,612,614,617,641,642,671,672,673,674,677,679,705,708,712,717,723,726,765,767,770,771,773,775,784,786,797,800,814,815,816,827,830,834,842,846,848,855,858,876,882,890,891,897,910,913,914,920,922,927,938,945,976,977,978,979,982,984,986,1002,1013,1018,1027,1028,1029,1037,1038,1049,1054,1071,1072,1077,1079,1080,1081,1091,1095,1096,1100,1103,1114,1115,1116,1165,1174,1176,1178,1183,1184,1185,1186,1195,1197,1201,1202,1203,1204,1205,1206,1214,1218,1220,1221,1227,1231,1232,1234,1235,1241,1242,1243,1244,1245,1247,1249,1258,1259,1260,1263,1272,1277,1295,1296,1301,1303,1305,1306,1307,1310,1318,1322,1332,1339,1340,1345,1347,1350,1351,1352,1378,1389,1390,1401,1408,1413]],
['0-9a-za-z',[11,65]],
['communityvatnumbertype',[11,67,418,473,474,671,672,890,976,977,1165,1203,1204]],
['közösségi',[11,67,418,473,474,671,672,890,976,977,1165,1203,1204]],
['adószám',[11,67,94,97,317,319,382,405,418,471,473,474,475,671,672,679,726,846,848,883,890,976,977,984,1002,1028,1029,1071,1072,1073,1115,1116,1151,1152,1165,1201,1203,1204,1205,1301]],
['community',[11,67,418,473,474,671,672,890,976,977,1165,1203,1204]],
['registration',[11,67,79,418,484,488,726,882,883,1002,1040,1042,1043,1044,1049,1054,1077,1081,1084,1142,1143,1153,1154,1165,1241,1244]],
['0-9a-z',[11,67]],
['countrycodetype',[11,68,97,303,305,382,386,389,399,402,726,830,832,1165,1214,1217,1295,1298]],
['országkód',[11,68,382,386,389,399,402,1165,1214,1217,1295,1298]],
['alpha-2',[11,68,382,386,389,396,399,402,404,1165,1214,1217,1224,1295,1298,1300]],
['szabvány',[11,68,70,382,386,389,396,399,402,404,418,509,513,726,753,754,755,756,1165,1214,1217,1224,1295,1298,1300]],
['szerint',[11,12,15,68,97,137,138,139,143,144,168,169,232,233,328,329,382,386,389,396,399,402,404,418,509,513,568,593,612,633,634,655,660,724,726,753,754,755,756,777,781,890,891,898,899,920,924,925,1165,1214,1217,1224,1236,1238,1272,1275,1295,1298,1300]],
['country',[11,68,97,303,305,382,386,389,396,399,402,404,726,830,832,1165,1214,1217,1224,1295,1298,1300]],
['countycodetype',[11,69,382,405,406,1165,1301,1302]],
['megyekód',[11,69,382,405,406,1165,1301,1302]],
['county',[11,69,382,405,406,1165,1301,1302]],
['currencytype',[11,70,97,98,99,172,175,418,509,513,1165,1236,1238]],
['pénznem',[11,70,418,509,514]],
['szerinti',[11,70,418,433,434,465,470,509,526,539,543,568,590,624,647,689,690,705,706,710,716,717,726,853,854,874,890,915,919,986,1165,1188,1189,1190,1195,1200,1209,1211,1316]],
['hosszú',[11,70]],
['currency',[11,70,97,98,99,171,172,175,185,189,217,290,292,294,418,430,432,489,491,492,509,513,514,552,553,556,557,562,563,564,568,595,597,598,652,653,655,656,658,661,662,683,684,686,687,698,699,890,932,934,938,950,964,966,968,969,1165,1236,1237,1238,1239,1240,1251,1255]],
['three',[11,70]],
['digit',[11,70,382,405,408,1165,1301,1304,1318,1325]],
['platenumbertype',[11,79,418,484,488]],
['kereskedelmi',[11,79,418,484,488]],
['gépjármű',[11,79]],
['forgalmi',[11,79,418,484,488,726,855,856,890,932,933,964,965,1002,1100,1115,1126,1127,1128,1157,1158,1163,1164,1165,1188,1189,1190,1191,1192,1193,1194,1207,1208,1209,1211,1314,1322,1338,1339,1380,1384,1389]],
['rendszáma',[11,79,418,484,488]],
['csak',[11,79,418,430,432,484,488,726,747,749,757,759,765,769,1002,1100,1111,1112]],
['betűk',[11,79,418,484,488]],
['számok',[11,79,418,479,484,488,502]],
['commercial',[11,79,418,721,1002,1127,1128,1165,1188,1189,1190]],
['motor',[11,79]],
['vehicle',[11,79,418,484,488,587,602,604,701,1165,1241,1244]],
['letters',[11,79,418,484,488,1165,1241,1244]],
['numbers',[11,79,418,440,442,443,449,450,451,453,454,455,484,488,493,494,500,502,545,600,610,641,1165,1241,1244]],
['only',[11,79,418,430,432,484,488,559,568,582,726,747,749,757,759,765,769,1002,1100,1111,1112,1165,1241,1244]],
['a-z0-9ÖŐÜŰ',[]],
['postalcodetype',[11,80,382,386,394,399,403,1165,1214,1222,1295,1299]],
['irányítószám',[11,80,382,386,394,399,403,1165,1214,1222,1295,1299]],
['a-z0-9',[11,80,92,418,711,718,890,987,1165,1317,1337]],
['a-z0-9\s\-',[11,80]],
['swiftcodetype',[11,92]],
['swift',[11,92]],
['kódot',[11,92,1002,1077,1081,1091,1095]],
['leíró',[11,28,92,418,709,726,744,746,1002,1165,1241,1245]],
['a-z2-9',[11,92]],
['a-np-z0-9',[11,92]],
['taxidentificationnumbertype',[11,93]],
['adóazonosító',[11,93,418,473,476,1165,1203,1206]],
['identification',[11,93,382,405,407,418,419,421,471,472,473,475,476,671,674,679,711,890,976,979,984,1002,1013,1018,1100,1103,1165,1166,1168,1201,1202,1203,1205,1206,1245,1249,1258,1263,1301,1303,1305,1306,1317]],
['totaldigits',[11,93,382,415,416,418,713,722,723,726,732,735,753,754,777,778,878,890,988,1165,1328,1332,1334]],
['taxpayeridtype',[11,40,43,45,94,97,98,100,106,147,149,154,159,162,172,176,178,196,198,203,207,273,274,317,323,382,405,407,726,846,852,1002,1013,1018,1027,1028,1029,1071,1072,1091,1096,1100,1103,1114,1115,1116,1165,1258,1263,1301,1303]],
['nyolc',[11,94]],
['jegyű',[11,94,1165,1318,1325]],
['törzsszám',[11,94]],
['része',[11,94,989,990,993]],
['8-digit',[11,94]],
['core',[11,94,382,405,407,890,929,931,952,953,954,961,962,963,1165,1258,1263,1301,1303,1327]],
['section',[11,94,97,147,151,172,187,221,225,418,433,434,484,485,504,506,508,509,511,518,535,538,568,576,577,586,587,602,612,633,634,689,690,691,694,695,697,705,706,724,890,910,914]],
['vatcodetype',[11,96,382,405,408,1165,1301,1304]],
['--közös',[11]],
['businessresultcodetype',[11,66,97,129,133]],
['Üzleti',[]],
['eredmény',[11,23,25,36,39,66,95,97,129,133,168,171,172,244,247,248,328,331,338]],
['result',[11,20,22,23,25,30,36,39,46,66,95,97,127,129,133,140,143,163,168,171,172,203,207,244,247,248,259,260,261,265,266,271,275,283,288,324,328,331,336,338,347,349,351,353,355,357,359,361,363,365,367,726,828,829,881,1002,1004,1009,1011,1028,1034,1037,1044,1046,1056,1064,1067,1070,1073,1084,1097,1115,1118,1122,1127,1131,1133,1135,1137,1139,1141,1143,1145,1147,1149,1150,1152,1154,1156,1158,1160,1162,1164,1185]],
['enumeration',[11,66,72,77,95,97,368,369,370,371,372,373,374,376,377,379,380,381,382,409,410,417,418,710,714,715,716,717,719,720,721,724,725,726,865,866,867,870,872,873,875,876,877,880,881,883,885,886,888,890,985,986,1165,1312,1313,1316,1319,1320,1323,1331,1333,1336,1338]],
['error',[11,23,24,36,38,46,66,72,95,97,129,132,140,347,368,726,757,761,867,872,881,1165,1312]],
['hiba',[11,66,72,95,97,368,726,872,881,1165,1312]],
['warn',[11,66]],
['figyelmeztetés',[11,66]],
['info',[11,66,726,747,748,750,797,883,1002,1007,1008,1122,1124]],
['tájékoztatás',[11,66,726,879,883,1002,1063,1064,1065,1148,1149]],
['information',[11,66,418,504,507,532,726,757,763,764,879,890,891,893,894,895,920,921,989,995,996,997,998,1002,1013,1019,1020,1023,1063,1064,1065,1100,1104,1108,1118,1119,1148,1149,1165,1227,1232,1233,1241,1245,1339,1386,1388]],
['entityidtype',[11,12,14,71,97,117,124,172,199,285,287,332,335,336,337,338,346]],
['generált',[11,71,1002,1049,1050,1055,1077,1078,1082]],
['azonosító',[11,71,418,442,448,493,494,612,614,711,712,726,816,819,820,1002,1040,1041,1042,1043,1165,1317,1337]],
['generated',[11,71]],
['a-za-z0-9',[11,71,78]],
['functioncodetype',[11,23,25,72]],
['funkciókód',[11,72]],
['function',[11,72]],
['sikeres',[11,72]],
['művelet',[11,72,97,111,112,113,114,211,215,239,241,376,1165,1258,1261,1323]],
['successful',[11,72]],
['operation',[11,30,46,47,72,97,111,112,113,114,147,152,172,188,208,210,211,215,226,229,239,241,256,259,261,263,265,267,271,273,275,279,283,285,288,303,311,324,332,334,336,337,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,372,373,379,382,414,418,559,560,726,740,743,809,812,830,840,883,885,890,904,908,920,928,1002,1030,1034,1138,1139,1140,1141,1165,1258,1261,1272,1278,1323]],
['localizationtype',[11,77]],
['lokalizációt',[11,77]],
['jelölő',[11,77]],
['localization',[11,77]],
['magyar',[11,77,97,382,418,726,732,738]],
['hungarian',[11,77,418,568,577,627,628,638,639,717,890,986,1002,1071,1072,1073,1151,1152]],
['angol',[11,77]],
['english',[11,77]],
['német',[11,77]],
['german',[11,77]],
['logintype',[11,40,41,78,97,107,109,117,120,338,339]],
['felhasználónév',[11,78]],
['login',[11,19,40,41,78,97,107,109,726,732,737,738]],
['requestpagetype',[11,81,97,256,258,267,270,279,281]],
['lapozó',[11,81,82]],
['paraméter',[11,81,82,97,134,137,297,300,375]],
['kérések',[11,81,97,107,110,368]],
['számára',[11,81,82,97,208,209,418,495,497]],
['page',[11,81,82,97,143,144,145,168,169,170,256,258,267,270,279,281,328,329,330,352,358,362]],
['parameter',[11,81,82,97,134,135,136,137,138,139,159,160,203,205,267,268,290,291,292,293,294,295,296,297,300,370,375]],
['requests',[11,81,97,107,110,368]],
['responsepagetype',[11,82,97,143,144,145,168,169,170,328,329,330]],
['válaszok',[11,82]],
['responses',[11,82]],
['technicalresultcodetype',[11,36,39,95]],
['technikai',[11,36,40,41,42,43,45,95,97,107,108,109,110,111,112,113,114,115,116,117,120,140,142,226,227,244,245,248,255,338,345,368,372,726,872,879,883,1002,1063,1064,1065,1148,1149,1165,1312]],
['technical',[11,36,40,41,42,43,45,95,97,107,108,109,110,111,112,113,114,115,116,117,120,140,142,226,227,244,245,248,255,338,345,368,372,726,727,730,731,732,733,747,751,765,769,801,872,879,883,1002,1063,1064,1065,1148,1149,1165,1312]],
['critical',[11,95]],
['kritikus',[11,95]],
['complextype',[11,12,17,20,23,28,30,31,33,36,40,46,47,97,98,107,111,113,117,125,127,129,134,137,140,143,147,155,159,163,168,172,200,203,208,211,216,221,226,229,232,236,239,244,248,256,259,261,263,265,267,271,273,275,279,283,285,288,290,297,300,303,312,315,317,324,328,332,336,338,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,382,383,386,399,405,418,419,423,426,430,433,437,440,442,458,460,462,465,471,473,477,479,481,484,489,493,495,500,502,504,509,527,532,535,539,545,547,552,556,559,562,565,568,597,600,602,610,612,618,620,624,627,633,638,641,643,645,647,652,655,661,665,669,671,680,683,686,689,698,701,705,709,726,727,730,732,740,744,747,753,757,765,777,782,784,789,797,801,809,814,816,828,830,841,844,846,853,855,860,862,890,891,900,904,910,915,920,929,932,936,938,952,955,957,961,964,968,972,976,989,990,995,1000,1001,1002,1003,1004,1007,1009,1010,1011,1013,1028,1030,1034,1035,1037,1040,1044,1045,1046,1049,1056,1063,1064,1067,1071,1073,1077,1084,1091,1097,1100,1115,1117,1118,1121,1122,1126,1127,1130,1131,1132,1133,1134,1135,1136,1137,1138,1139,1140,1141,1142,1143,1144,1145,1146,1147,1148,1149,1150,1151,1152,1153,1154,1155,1156,1157,1158,1159,1160,1161,1162,1163,1164,1165,1166,1170,1172,1174,1177,1180,1183,1185,1188,1190,1195,1201,1203,1207,1209,1214,1227,1232,1236,1241,1245,1251,1258,1264,1267,1269,1272,1280,1283,1289,1295,1301,1305,1339,1340,1347,1352,1380,1386,1389,1403,1405,1408,1414,1415]],
['basicheadertype',[11,12,17,18,20,21,1165,1183]],
['kérés',[11,12,14,15,16,17,18,19,40,44,97,125,226,229,256,263,267,273,279,282,285,338,343,377,726,868,871,1002,1003,1007,1010,1013,1030,1035,1040,1045,1049,1063,1071,1077,1091,1100,1117,1121,1126,1130,1134,1136,1138,1140,1142,1144,1146,1148,1151,1153,1155,1157,1159,1161,1163,1165,1183]],
['tranzakcionális',[11,12,17,18,20,21]],
['adatai',[11,12,17,18,19,20,21,40,97,107,117,125,126,127,128,140,141,155,157,158,163,164,200,221,244,245,275,277,303,317,319,418,437,439,465,469,473,484,495,504,527,528,529,531,532,533,534,535,539,541,542,568,576,602,604,605,612,633,634,652,665,668,671,680,701,705,726,740,765,766,772,797,801,804,809,810,811,813,830,846,848,862,863,890,904,905,906,909,910,915,917,918,920,921,929,931,952,953,954,961,962,963,968,972,975,976,989,990,991,992,994,1002,1003,1004,1007,1009,1010,1011,1013,1017,1028,1030,1034,1035,1037,1040,1044,1045,1046,1047,1049,1056,1060,1063,1064,1067,1071,1073,1075,1077,1083,1084,1086,1091,1097,1100,1110,1115,1117,1118,1121,1122,1124,1126,1127,1165,1195,1199,1203,1207,1208,1209,1232,1233,1251,1255,1258,1272,1274,1279,1280,1305,1339,1340,1341,1347,1348,1389,1391,1392,1393,1394,1395,1396,1397,1398,1399]],
['transactional',[11,12,17,18,20,21,97,216,220,332]],
['data',[11,12,14,15,17,18,19,20,21,22,23,40,97,98,105,107,113,116,117,123,125,126,127,128,129,131,140,141,147,155,156,157,158,163,164,167,172,174,195,199,200,211,214,221,232,233,239,244,245,248,254,265,266,275,276,277,285,286,287,303,312,313,317,319,332,335,338,344,380,382,386,399,400,418,419,420,421,422,423,425,426,430,437,439,442,465,469,473,484,489,495,504,505,509,510,512,527,528,529,531,532,533,534,535,539,540,541,542,543,544,547,548,549,550,552,556,559,562,565,567,568,569,570,571,572,573,574,576,580,582,585,597,602,604,605,612,624,626,627,633,634,636,638,647,649,650,651,652,665,668,671,680,683,686,698,701,705,709,711,713,724,726,740,744,746,747,752,765,772,801,804,809,813,816,823,830,841,842,846,848,862,863,890,891,895,900,901,904,906,907,909,910,915,916,917,918,919,929,930,931,932,938,939,942,952,953,954,961,962,963,968,972,975,976,989,990,992,994,995,997,999,1000,1001,1002,1013,1015,1017,1024,1025,1040,1043,1045,1046,1047,1056,1061,1073,1074,1075,1077,1083,1084,1086,1087,1100,1102,1110,1111,1112,1144,1145,1165,1166,1167,1168,1169,1170,1171,1172,1173,1174,1175,1183,1185,1195,1199,1203,1207,1208,1209,1214,1227,1228,1229,1232,1251,1255,1258,1272,1273,1279,1280,1283,1284,1285,1289,1290,1291,1295,1296,1305,1312,1317,1328,1339,1340,1344,1347,1349,1352,1377,1380,1386,1387,1389,1391,1392,1393,1394,1395,1396,1397,1398,1399,1400,1403,1404,1405,1406,1407,1408,1411,1412,1414,1415]],
['request',[11,12,14,15,16,17,18,19,40,44,97,111,112,113,115,117,119,125,172,179,208,210,211,213,226,227,229,231,244,248,252,256,263,267,273,279,282,285,288,289,332,333,338,343,348,350,352,354,356,360,362,364,366,374,377,726,868,871,1002,1003,1007,1010,1013,1028,1029,1030,1035,1040,1045,1049,1050,1055,1063,1067,1071,1077,1091,1092,1093,1095,1100,1115,1116,1117,1121,1126,1130,1134,1135,1136,1138,1140,1142,1144,1146,1148,1150,1151,1153,1155,1157,1159,1161,1163,1165,1183]],
['sequence',[11,12,17,20,23,31,33,36,40,97,98,107,111,113,115,117,118,119,125,127,129,134,137,140,143,147,148,155,159,163,168,172,173,179,191,192,200,203,204,208,211,213,216,221,222,225,226,229,232,235,236,239,241,244,248,249,252,256,259,261,263,265,267,271,273,275,279,283,285,288,290,297,300,303,312,315,317,324,328,332,333,336,338,382,386,399,405,418,419,423,426,430,433,437,438,440,442,458,460,462,465,471,477,479,481,484,489,493,495,500,502,504,509,527,535,536,538,539,545,547,552,556,559,562,565,568,597,600,602,610,612,618,620,627,633,638,641,643,645,647,652,655,661,665,669,671,680,683,686,698,701,705,726,727,730,732,740,744,747,753,757,765,777,782,783,784,786,789,797,800,801,809,814,816,828,830,841,844,846,853,855,860,862,890,891,900,904,910,913,914,915,920,929,932,936,938,952,955,957,961,964,968,972,976,989,990,995,1002,1004,1007,1011,1013,1028,1030,1035,1037,1040,1046,1049,1056,1057,1062,1064,1067,1071,1073,1077,1084,1085,1088,1091,1097,1098,1100,1115,1118,1122,1124,1127,1165,1166,1170,1172,1174,1180,1183,1185,1188,1190,1195,1201,1207,1209,1214,1227,1232,1236,1241,1245,1251,1258,1264,1267,1269,1272,1280,1283,1289,1295,1301,1305,1339,1340,1347,1352,1386,1389,1403,1405,1408]],
['element',[11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439,440,441,442,443,444,445,446,447,448,449,450,451,452,453,454,455,456,457,458,459,460,461,462,463,464,465,466,467,468,469,470,471,472,473,474,475,476,477,478,479,480,481,482,483,484,485,486,487,488,489,490,491,492,493,494,495,496,497,498,499,500,501,502,503,504,505,506,507,508,509,510,511,512,513,514,515,516,517,518,519,520,521,522,523,524,525,526,527,528,529,530,531,532,533,534,535,536,537,538,539,540,541,542,543,544,545,546,547,548,549,550,551,552,553,554,555,556,557,558,559,560,561,562,563,564,565,566,567,568,569,570,571,572,573,574,575,576,577,578,579,580,581,582,583,584,585,586,587,588,589,590,591,592,593,594,595,596,597,598,599,600,601,602,603,604,605,606,607,608,609,610,611,612,613,614,615,616,617,618,619,620,621,622,623,624,625,626,627,628,629,630,631,632,633,634,635,636,637,638,639,640,641,642,643,644,645,646,647,648,649,650,651,652,653,654,655,656,657,658,659,660,661,662,663,664,665,666,667,668,669,670,671,672,673,674,675,676,677,678,679,680,681,682,683,684,685,686,687,688,689,690,691,692,693,694,695,696,697,698,699,700,701,702,703,704,705,706,707,708,709,726,727,728,729,730,731,732,733,734,735,736,737,738,739,740,741,742,743,744,745,746,747,748,749,750,751,752,753,754,755,756,757,758,759,760,761,762,763,764,765,766,767,768,769,770,771,772,773,774,775,776,777,778,779,780,781,782,783,784,785,786,787,788,789,790,791,792,793,794,795,796,797,798,799,800,801,802,803,804,805,806,807,808,809,810,811,812,813,814,815,816,817,818,819,820,821,822,823,824,825,826,827,828,829,830,831,832,833,834,835,836,837,838,839,840,841,842,843,844,845,846,847,848,849,850,851,852,853,854,855,856,857,858,859,860,861,862,863,864,890,891,892,893,894,895,896,897,898,899,900,901,902,903,904,905,906,907,908,909,910,911,912,913,914,915,916,917,918,919,920,921,922,923,924,925,926,927,928,929,930,931,932,933,934,935,936,937,938,939,940,941,942,943,944,945,946,947,948,949,950,951,952,953,954,955,956,957,958,959,960,961,962,963,964,965,966,967,968,969,970,971,972,973,974,975,976,977,978,979,980,981,982,983,984,989,990,991,992,993,994,995,996,997,998,999,1000,1001,1002,1004,1005,1006,1007,1008,1011,1012,1013,1014,1015,1016,1017,1018,1019,1020,1021,1022,1023,1024,1025,1026,1027,1028,1029,1030,1031,1032,1033,1035,1036,1037,1038,1039,1040,1041,1042,1043,1046,1047,1048,1049,1050,1051,1052,1053,1054,1055,1056,1057,1058,1059,1060,1061,1062,1064,1065,1066,1067,1068,1069,1070,1071,1072,1073,1074,1075,1076,1077,1078,1079,1080,1081,1082,1083,1084,1085,1086,1087,1088,1089,1090,1091,1092,1093,1094,1095,1096,1097,1098,1099,1100,1101,1102,1103,1104,1105,1106,1107,1108,1109,1110,1111,1112,1113,1114,1115,1116,1118,1119,1120,1122,1123,1124,1125,1127,1128,1129,1130,1131,1132,1133,1134,1135,1136,1137,1138,1139,1140,1141,1142,1143,1144,1145,1146,1147,1148,1149,1150,1151,1152,1153,1154,1155,1156,1157,1158,1159,1160,1161,1162,1163,1164,1165,1166,1167,1168,1169,1170,1171,1172,1173,1174,1175,1176,1177,1178,1179,1180,1181,1182,1183,1184,1185,1186,1187,1188,1189,1190,1191,1192,1193,1194,1195,1196,1197,1198,1199,1200,1201,1202,1203,1204,1205,1206,1207,1208,1209,1210,1211,1212,1213,1214,1215,1216,1217,1218,1219,1220,1221,1222,1223,1224,1225,1226,1227,1228,1229,1230,1231,1232,1233,1234,1235,1236,1237,1238,1239,1240,1241,1242,1243,1244,1245,1246,1247,1248,1249,1250,1251,1252,1253,1254,1255,1256,1257,1258,1259,1260,1261,1262,1263,1264,1265,1266,1267,1268,1269,1270,1271,1272,1273,1274,1275,1276,1277,1278,1279,1280,1281,1282,1283,1284,1285,1286,1287,1288,1289,1290,1291,1292,1293,1294,1295,1296,1297,1298,1299,1300,1301,1302,1303,1304,1305,1306,1307,1308,1309,1339,1340,1341,1342,1343,1344,1345,1346,1347,1348,1349,1350,1351,1352,1353,1354,1355,1356,1357,1358,1359,1360,1361,1362,1363,1364,1365,1366,1367,1368,1369,1370,1371,1372,1373,1374,1375,1376,1377,1378,1379,1380,1381,1382,1383,1384,1385,1386,1387,1388,1389,1390,1391,1392,1393,1394,1395,1396,1397,1398,1399,1400,1401,1402,1403,1404,1405,1406,1407,1408,1409,1410,1411,1412,1413,1414,1415]],
['requestid',[11,12,14,18,21,1003,1007,1010,1013,1030,1035,1040,1045,1049,1063,1071,1077,1091,1100,1117,1121,1126,1130,1132,1134,1136,1138,1140,1142,1144,1146,1148,1151,1153,1155,1157,1159,1161,1163,1183]],
['válasz',[11,12,14,15,16,20,21,47,97,127,259,261,265,271,275,277,283,288,317,324,336,726,846,1002,1004,1009,1011,1028,1034,1037,1044,1046,1056,1064,1067,1073,1075,1084,1097,1115,1118,1122,1127,1131,1133,1135,1137,1139,1141,1143,1145,1147,1149,1150,1152,1154,1156,1158,1160,1162,1164,1165,1185]],
['azonosítója',[11,12,14,97,117,124,172,199,285,287,303,308,332,335,336,337,338,346,378,418,419,421,726,727,728,732,736,740,741,789,790,791,792,793,794,795,796,830,836,884,890,891,892,1002,1004,1006,1046,1048,1056,1059,1061,1064,1066,1084,1087,1090,1118,1120,1122,1125,1127,1129,1165,1166,1168]],
['minden',[11,12,14,30,1002,1100,1115,1157,1158]],
['üzenetváltásnál',[11,12,14]],
['adószámonként',[11,12,14]],
['egyedi',[11,12,14,97,172,191,221,222,226,228,229,230,418,419,421,535,536,711,726,732,736,890,891,892,910,913,1165,1166,1168,1317]],
['identifier',[11,12,14,97,172,199,285,287,332,335,336,337,418,712,726,732,736,789,792,794,795,796,816,819,820,890,891,892,1002,1004,1006,1040,1041,1042,1043,1046,1048,1056,1059,1061,1064,1066,1084,1087,1090,1118,1120,1122,1125,1127,1129,1165,1241,1242,1337]],
['response',[11,12,14,15,16,20,21,36,46,47,97,127,129,140,259,261,265,271,275,277,283,285,286,288,317,324,336,347,349,351,353,355,357,358,359,361,363,365,367,726,846,1002,1004,1009,1011,1028,1034,1037,1040,1041,1042,1043,1044,1046,1056,1064,1067,1073,1075,1084,1097,1115,1118,1122,1127,1131,1133,1137,1139,1141,1143,1145,1147,1149,1150,1152,1154,1156,1158,1160,1162,1164,1165,1185]],
['unique',[11,12,14,97,172,191,221,222,226,228,229,230,418,419,421,535,536,711,726,732,736,890,891,892,910,913,1165,1166,1168,1317]],
['with',[11,12,14,97,172,174,203,207,369,418,481,482,483,504,505,559,560,562,563,564,624,626,638,680,681,709,726,732,734,784,786,797,799,830,835,855,857,858,859,876,878,890,920,923,968,971,989,995,996,997,998,1002,1013,1021,1100,1106,1339,1352,1354,1389,1390]],
['taxnumber',[11,12,14,19,40,45,97,98,106,159,162,217,257,273,274,360,810,813,905,909,1002,1013,1027,1028,1029,1071,1072,1091,1096,1100,1114,1115,1116,1136,1137,1151,1155,1157,1158,1165,1274,1279,1305,1307]],
['every',[11,12,14,30,46,47]],
['exchange',[11,12,14,97,98,105,117,122,123,147,153,172,174,195,199,232,233,244,246,285,287,324,325,326,327,332,335,338,342,344,372,373,380,382,417,418,426,427,430,432,504,505,509,514,565,567,713,890,891,1165,1236,1240,1328]],
['transaction',[11,12,14,97,117,124,172,199,226,228,229,230,279,280,283,284,285,287,328,331,332,335,336,337,338,345,346,1002,1100,1111,1112,1165,1331,1339,1352,1376]],
['keletkezésének',[11,12,16]],
['ideje',[11,12,16,97,279,280,726,777,778,890,891,898,899,920,924,925,1165,1272,1275]],
['time',[11,12,16,97,107,108,117,121,147,150,172,180,221,223,232,233,279,280,338,340,382,409,726,777,778,779,780,781,830,837,890,891,898,899,920,924,925,1165,1272,1275]],
['requestversion',[11,12,15,18,21,97,117,122,147,153,244,246,338,342,374,1003,1007,1010,1013,1030,1035,1040,1045,1049,1063,1071,1077,1091,1100,1117,1121,1126,1130,1132,1134,1136,1138,1140,1142,1144,1146,1148,1151,1153,1155,1157,1159,1161,1163,1183]],
['verziószáma',[11,12,13,15,726,765,767,775]],
['hogy',[11,12,15,97,221,224,275,278,418,535,537,633,637,726,797,799,1002,1073,1076,1142]],
['hívó',[11,12,15]],
['melyik',[11,12,15]],
['interfész',[11,12,15,418,568,593,1165,1283,1288,1289,1294]],
['verzió',[11,12,15,726,801,802]],
['küld',[11,12,15,1165,1320,1338]],
['adatot',[11,12,15,726,747,749,752]],
['várja',[11,12,15]],
['választ',[11,12,15]],
['indicating',[11,12,15,418,633,637]],
['which',[11,12,15,97,172,192,221,224,225,232,235,239,241,275,276,418,471,473,475,535,537,538,559,560,726,784,786,787,890,910,914,989,995,996,997,998,1002,1010,1011,1013,1028,1040,1044,1063,1064,1073,1074,1091,1095,1100,1115,1134,1135,1136,1137,1142,1143,1148,1149,1157,1158]],
['datastructure',[11,12,15]],
['client',[11,12,15,97,285,286,368]],
['sends',[11,12,15,1002,1063,1064,1148,1149]],
['expected',[11,12,15]],
['headerversion',[11,12,13,18,21,1003,1007,1010,1013,1030,1035,1040,1045,1049,1063,1071,1077,1091,1100,1117,1121,1126,1130,1132,1134,1136,1138,1140,1142,1144,1146,1148,1151,1153,1155,1157,1159,1161,1163,1183]],
['minoccurs',[11,12,13,23,24,26,27,36,37,38,40,43,97,98,99,100,101,102,103,104,105,106,107,108,109,117,118,119,124,129,130,131,132,140,142,143,146,147,148,149,155,157,158,159,162,163,166,168,171,172,173,174,175,176,177,178,179,181,183,185,186,189,190,191,192,193,194,195,196,199,200,202,203,204,207,211,212,216,217,219,220,239,240,241,242,243,244,245,248,249,250,254,255,265,266,275,276,277,278,279,282,285,286,288,289,290,291,292,293,294,295,296,303,305,307,317,320,322,323,328,331,332,333,334,382,386,387,390,391,392,393,396,397,399,404,405,406,408,418,423,425,430,432,442,443,444,445,446,447,448,449,450,451,452,453,454,455,456,457,462,463,465,466,467,468,469,471,472,484,485,489,490,491,492,495,497,509,510,511,512,515,519,520,521,522,523,524,525,526,527,528,529,539,541,542,544,547,548,550,568,569,570,571,572,573,574,575,576,577,578,579,580,582,583,585,586,587,588,589,590,591,592,593,594,595,596,602,606,607,608,609,633,634,638,639,647,649,665,668,671,672,673,674,675,677,726,732,733,734,735,736,737,738,739,744,746,747,748,749,752,757,759,761,765,769,773,789,790,791,792,793,794,795,796,801,802,803,804,805,806,807,808,809,810,814,816,821,826,827,830,832,834,846,849,851,852,862,863,890,891,892,893,894,900,901,904,905,906,910,911,912,915,918,920,923,938,939,940,942,943,944,946,947,948,949,950,951,968,971,972,975,976,977,978,979,982,989,995,996,997,998,1002,1004,1011,1013,1018,1026,1030,1032,1037,1046,1049,1052,1056,1064,1066,1067,1068,1069,1073,1074,1075,1084,1085,1091,1095,1100,1103,1111,1112,1113,1118,1122,1127,1165,1170,1171,1174,1175,1190,1193,1194,1195,1196,1197,1198,1199,1201,1202,1209,1211,1214,1215,1218,1219,1220,1221,1224,1225,1227,1228,1229,1230,1236,1239,1240,1241,1242,1243,1244,1245,1246,1247,1248,1249,1250,1251,1252,1253,1254,1255,1256,1257,1258,1262,1269,1271,1272,1273,1274,1280,1282,1283,1288,1289,1290,1294,1295,1296,1297,1299,1300,1301,1302,1304,1305,1306,1309,1339,1340,1342,1346,1352,1357,1358,1359,1360,1361,1362,1363,1364,1365,1366,1368,1369,1370,1371,1372,1373,1374,1375,1376,1379,1389,1391,1392,1393,1394,1395,1396,1397,1398,1399,1408,1410]],
['header',[11,12,13,17,18,20,21,30,46,125,127,140,226,229,256,259,261,263,265,267,271,273,275,279,283,285,288,324,336,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,418,527,890,904,1004,1009,1011,1028,1034,1037,1044,1046,1056,1064,1067,1073,1084,1097,1115,1118,1122,1127,1131,1133,1135,1137,1139,1141,1143,1145,1147,1149,1150,1152,1154,1156,1158,1160,1162,1164,1185,1339,1340,1344,1347,1349,1352,1377,1389,1400,1408,1412]],
['basicrequesttype',[11,17,97,125]],
['alap',[11,17,20,22,23,1165,1283,1289]],
['adatok',[11,17,20,22,23,97,113,116,125,127,129,131,147,155,156,163,167,211,214,239,248,254,275,276,418,423,425,426,442,489,509,512,527,530,539,540,543,544,547,548,549,550,552,556,562,568,569,570,572,573,574,580,585,597,624,626,627,633,636,638,647,649,650,651,683,686,698,726,890,891,895,900,904,907,915,916,919,929,930,932,938,942,989,990,993,995,996,997,998,999,1002,1013,1015,1045,1046,1056,1061,1073,1074,1084,1087,1100,1102,1144,1145,1165,1183,1185,1227,1241,1245,1283,1284,1285,1287,1289,1290,1291,1293,1339,1386,1387,1388,1403,1408,1411]],
['basic',[11,17,20,22,23,97,125,127,1165,1183,1185]],
['user',[11,17,19,40,41,42,43,45,97,107,109,117,120,125,226,229,256,263,267,273,279,285,338,339,348,350,352,354,356,358,360,362,364,366,1165,1312]],
['userheadertype',[11,17,19,40]],
['authentikációs',[11,17,19,40,726,883,1002,1049,1050,1077,1078,1091,1095,1097,1155,1156]],
['authentication',[11,17,19,40,726,870,1002,1049,1050,1056,1057,1084,1085,1091,1092,1095,1097,1155,1156]],
['basicresponsetype',[11,20,30,97,127,1165,1185]],
['basicresulttype',[11,20,22,23,47]],
['válaszeredmény',[11,20,22,23]],
['funccode',[11,22,23,25,47]],
['feldolgozási',[11,23,24,25,26,36,37,97,129,130,131,208,209,239,244,247,248,253,279,282,288,289,338,343,371,377]],
['processing',[11,23,24,25,26,36,37,97,129,130,131,208,209,232,233,239,244,247,248,253,279,282,288,289,338,343,371,377,418,442,509,512,568,574]],
['errorcode',[11,22,23,24,47]],
['hibakód',[11,23,24,36,38,97,129,132]],
['message',[11,22,23,26,36,37,47,97,129,130,142,250,255,726,872,879]],
['üzenet',[11,23,26,36,37,97,129,130,726,765,776,872,879]],
['notifications',[11,22,23,27,31,47]],
['notificationstype',[11,23,27,31]],
['egyéb',[11,23,27,31,382,417,418,442,509,510,512,568,574,595,612,614,710,714,717,721,726,732,738,872,885,890,952,954,985,986,989,990,991,995,996,997,998,1002,1100,1115,1157,1158,1165,1170,1171,1172,1173,1174,1175,1227,1228,1229,1251,1256,1264,1265,1272,1273,1312,1313,1316,1319,1320,1322,1333,1336,1338,1339,1352,1362,1365,1380,1385,1386,1388,1403,1404,1405,1406,1407,1408,1409,1410]],
['értesítések',[11,23,27,31]],
['miscellaneous',[11,23,27,31]],
['cryptotype',[11,28,29,40,42,44,97,163,166,211,212,726,797,799,1165,1258,1262,1283,1286,1289,1292]],
['kriptográfiai',[11,28]],
['metódust',[11,28]],
['denoting',[11,28]],
['cryptographic',[11,28]],
['method',[11,28,97,98,104,172,194,382,417,418,509,522,726,740,743,777,779,784,785,830,840,1165,1258,1261,1269,1271,1336]],
['simplecontent',[11,28]],
['extension',[11,28,30,46,47,97,125,127,140,226,229,256,259,261,263,265,267,271,273,275,279,283,285,288,324,336,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,418,471,709,989,1000,1001,1002,1003,1004,1007,1009,1010,1011,1013,1028,1030,1034,1035,1037,1040,1044,1045,1046,1049,1056,1063,1064,1067,1071,1073,1077,1084,1091,1097,1100,1115,1117,1118,1121,1122,1126,1127,1130,1131,1132,1133,1134,1135,1136,1137,1138,1139,1140,1141,1142,1143,1144,1145,1146,1147,1148,1149,1150,1151,1152,1153,1154,1155,1156,1157,1158,1159,1160,1161,1162,1163,1164,1165,1180,1182,1183,1185,1201,1280,1305,1330,1339,1414,1415]],
['attribute',[11,28,29]],
['required',[11,28,29,42,44,166,212,799,1002,1013,1026,1100,1113,1165,1185,1187,1262,1286,1292]],
['generalerrorheaderresponsetype',[11,30,46,97,140]],
['hibatípus',[11,30]],
['rest',[11,30,46,47,97,226,229,256,259,261,263,265,267,271,273,275,279,283,285,288,324,336,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367]],
['operációra',[11,30,46,47]],
['fault',[11,30]],
['complexcontent',[11,30,46,47,97,125,127,140,226,229,256,259,261,263,265,267,271,273,275,279,283,285,288,324,336,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,418,471,709,989,1000,1001,1002,1003,1004,1007,1009,1010,1011,1013,1028,1030,1034,1035,1037,1040,1044,1045,1046,1049,1056,1063,1064,1067,1071,1073,1077,1084,1091,1097,1100,1115,1117,1118,1121,1122,1126,1127,1130,1131,1132,1133,1134,1135,1136,1137,1138,1139,1140,1141,1142,1143,1144,1145,1146,1147,1148,1149,1150,1151,1152,1153,1154,1155,1156,1157,1158,1159,1160,1161,1162,1163,1164,1165,1183,1185,1201,1280,1305,1339,1414,1415]],
['notification',[11,27,31,32,33,34,35]],
['notificationtype',[11,31,32,33]],
['maxoccurs',[11,31,32,97,111,112,140,142,143,146,168,171,200,202,208,210,244,247,248,250,255,290,291,292,293,294,295,296,315,316,328,331,418,440,441,458,459,460,461,477,478,479,480,493,494,500,501,502,503,509,510,532,533,539,544,545,546,565,566,568,571,585,600,601,610,611,618,619,633,636,641,642,643,644,645,646,655,660,665,667,669,670,726,747,748,782,814,828,829,844,845,853,860,862,863,890,900,901,936,937,938,939,955,956,972,974,1002,1122,1124,1165,1170,1171,1172,1173,1174,1175,1188,1207,1251,1255,1256,1267,1268,1272,1273,1339,1403]],
['unbounded',[11,27,31,32,97,140,142,143,146,157,168,171,200,202,244,247,248,250,255,260,272,284,289,315,316,320,328,331,347,418,440,441,443,444,445,446,447,448,449,450,451,452,453,454,455,456,457,458,459,460,461,477,478,479,480,493,494,500,501,502,503,507,509,510,530,532,533,541,543,544,545,546,565,566,568,571,585,589,592,600,601,610,611,618,619,633,636,641,642,643,644,645,646,655,660,665,666,667,669,670]],
['Értesítés',[]],
['notificationcode',[11,32,33,34]],
['notificationtext',[11,32,33,35]],
['text',[11,33,35,418,481,483,1002,1064,1065]],
['technicalvalidationresulttype',[11,36,97,140,142,248,255]],
['validációs',[11,36,38,39,97,129,132,133,140,142,248,250,255]],
['választípus',[11,36,97,129]],
['validation',[11,36,38,39,97,129,132,133,140,142,248,250,255,726,809,811,862,864]],
['validationresultcode',[11,36,39,97,129,133,142,250,255]],
['validationerrorcode',[11,36,38,97,129,132,142,250,255]],
['felhasználó',[11,40,41,42,43,45,97,107,109,117,120,338,339]],
['neve',[11,40,41,97,107,109,172,177,197,303,306,310,317,321,322,382,386,398,399,400,418,465,468,495,498,612,616,671,678,726,784,787,830,833,839,846,850,851,890,976,983,1165,1195,1198,1214,1226,1245,1250,1280,1281,1282,1295,1296,1305,1308,1309]],
['passwordhash',[11,19,40,42]],
['jelszavának',[11,40,42]],
['hash',[11,40,42,44,97,163,166,211,212,726,797,799,1165,1258,1262,1283,1286,1289,1292]],
['értéke',[11,40,42,44,97,117,122,147,153,244,246,338,342,374,418,418,419,422,423,424,433,434,509,509,511,514,552,553,554,556,557,558,562,563,564,568,575,578,581,586,588,620,621,622,671,675,705,706,726,727,729,757,763,764,890,890,932,934,935,957,958,959,976,980,1002,1013,1019,1023,1030,1032,1033,1049,1052,1053,1100,1104,1108,1118,1119,1165,1166,1169,1236,1239,1240,1339,1405,1407]],
['password',[11,40,42]],
['rendszerben',[11,40,45,97,261,262,382,411,412,413,414,1002,1003,1004,1007,1009,1010,1011,1013,1028,1030,1034,1035,1037,1040,1044,1045,1046,1049,1056,1063,1064,1067,1071,1073,1077,1084,1091,1097,1100,1115,1117,1118,1121,1122,1126,1127]],
['regisztrált',[11,40,45]],
['adózó',[11,40,45,97,273,274,275,277,278,312,313,317,321,322,323,726,809,810,813,841,842,846,850,851,852,890,904,905,909,1002,1013,1018,1027,1073,1075,1076,1100,1103,1114,1165,1236,1240,1272,1274,1279,1305,1307,1308,1309]],
['adószáma',[11,40,43,45,97,98,100,106,147,149,154,159,162,172,178,198,203,207,261,262,273,274,303,307,418,471,472,495,499,612,617,671,674,726,830,834,890,976,979,1165,1201,1202,1305,1307]],
['nevében',[11,40,43,45]],
['tevékenykedik',[11,40,43,45]],
['taxpayer',[11,40,43,45,97,273,274,275,277,278,312,313,314,315,316,317,320,321,322,323,381,382,405,408,726,772,809,811,813,828,841,842,843,844,845,846,849,850,851,852,883,886,890,904,909,916,1002,1013,1018,1027,1047,1049,1054,1060,1073,1075,1076,1086,1091,1096,1100,1103,1114,1151,1152,1165,1272,1279,1301,1304,1344,1349,1377,1400,1412]],
['whose',[11,40,43,45]],
['operates',[11,40,43,45]],
['predecessortaxnumber',[11,19,40,43]],
['jogelőd',[11,40,43]],
['requestsignature',[11,19,40,44]],
['aláírásának',[11,40,44]],
['signature',[11,40,44,1165,1283,1287,1289,1293]],
['--Általános',[]],
['responses--',[11]],
['generalerrorheaderresponse',[11,46]],
['összes',[11,46,47]],
['vonatkozó',[11,46,47,97,172,191,221,222,418,430,509,510,535,536,568,585,590,624,726,765,776,890,910,913,989,995,996,997,998,1165,1170,1172,1173,1174,1175,1227,1228,1229]],
['hibaválasz',[11,46,97,140,347]],
['generikus',[11,46,47]],
['elementje',[11,46,47,97,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,418,709]],
['general',[11,46,47,97,140,347,418,442,449,500,501,1002,1003,1004,1007,1009,1010,1011,1013,1028,1030,1034,1035,1037,1040,1044,1045,1046,1049,1056,1063,1064,1067,1071,1073,1077,1084,1091,1097,1100,1115,1117,1118,1121,1122,1126,1127,1339,1340,1344,1347,1349,1352,1377,1389,1400,1408,1412]],
['generalexceptionresponse',[11,47]],
['kivétel',[11,47,418,433,434,481,705,706]],
['exception',[11,47]],
['online',[97,125,127,140,303,311,347,379,380,382,411,412,413,414,418,726,740,743,830,840,885,1002,1013,1021,1100,1106]],
['számla',[97,98,99,100,101,102,103,106,117,119,124,125,127,134,137,140,147,151,159,160,161,162,163,164,166,167,168,171,172,174,175,179,181,182,183,184,185,186,187,189,190,192,200,201,203,205,206,207,211,212,213,214,215,216,217,218,219,220,221,225,232,233,234,235,236,237,238,239,241,244,247,248,252,253,254,263,264,265,266,267,268,269,271,272,290,291,292,293,294,295,296,332,333,338,346,347,370,371,373,374,382,409,410,411,412,413,414,418,423,424,430,432,437,439,489,492,495,497,504,505,506,508,509,513,516,517,518,519,520,526,527,530,531,532,534,535,538,539,540,547,552,553,556,557,559,560,562,563,568,569,570,573,595,597,598,612,613,614,652,653,654,655,656,657,658,659,661,662,665,666,667,668,683,684,686,687,689,693,698,699,709,890,929,930,989,990,994,995,996,1002,1013,1016,1028,1136,1137,1165,1258,1262,1320,1322,1339,1352,1357,1359,1389,1392,1393,1398,1399]],
['rendszer',[97,382,418,726,777,778,879,890,1165,1183,1185,1336]],
['invoiceapi',[97,418,709]],
['import',[97,382,418,726,890,989,1002,1165,1339]],
['namespace',[97,382,418,726,890,989,1002,1165,1339]],
['schemalocation',[97,382,418,726,890,989,1002,1165,1339]],
['invoicebase',[97,382,418]],
['annulmentverificationstatustype',[97,107,110,368]],
['érvénytelenítő',[97,107,110,111,112,113,368]],
['jóváhagyási',[97,107,110,368]],
['státusza',[97,107,110,248,253,279,282,288,289,338,343,368,371,377,418,465,470,726,816,823,1165,1195,1200]],
['verification',[97,107,108,109,110,368,726,757,763,764,830,835,1002,1013,1019,1020,1023,1100,1104,1105,1108,1118,1119]],
['status',[97,107,110,244,245,248,253,279,282,288,289,338,343,368,371,377,418,465,470,710,726,757,816,823,883,1002,1004,1006,1046,1048,1056,1059,1061,1064,1066,1084,1087,1090,1118,1120,1122,1125,1127,1129,1132,1133,1165,1195,1200,1316]],
['annulment',[97,107,108,109,110,111,112,113,114,115,116,226,227,244,245,338,345,368,372]],
['verifiable',[97,368]],
['érvénytelenítés',[97,107,108,113,114,115,116,155,158,221,244,245,368,372,418,535,539,542,890,910,915,918,1339,1352,1357,1358,1369,1373]],
['kliens',[97,285,286,368]],
['miatt',[97,368,418,565,567,726,872]],
['hagyható',[97,368]],
['jóvá',[97,368]],
['pending',[97,368]],
['jóváhagyásra',[97,368]],
['awaiting',[97,368]],
['done',[97,368,371,418,471,472,473,475,671,674,890,976,979,1165,1201,1202]],
['került',[97,117,124,368,726,747,752]],
['been',[97,368,726,747,752]],
['verified',[97,368]],
['rejected',[97,368]],
['elutasításra',[97,368]],
['incorporationtype',[97,317,318,369,726,846,847,876]],
['gazdasági',[97,317,318,369,726,846,847,876]],
['incorporation',[97,277,317,318,369,726,846,847,876,1075]],
['organization',[97,369,726,876]],
['társaság',[97,369,726,876]],
['economical',[97,369,726,876]],
['company',[97,369,418,442,445,457,460,461,669,670,726,876]],
['self',[97,369,726,876]],
['employed',[97,369,726,876]],
['egyéni',[97,369,726,876]],
['vállalkozó',[97,369,726,876]],
['private',[97,369,418,710,726,876,1002,1013,1014,1100,1101,1165,1316]],
['entrepreneur',[97,369,726,876]],
['taxable',[97,369,382,405,407,418,568,586,726,876,1165,1258,1263,1301,1303]],
['person',[97,369,382,405,407,418,568,586,710,726,876,1165,1258,1263,1301,1303,1316]],
['adószámos',[97,369,726,876]],
['magánszemély',[97,369,726,876]],
['invoicedirectiontype',[97,159,160,203,205,267,268,370]],
['kimenő',[97,159,160,203,205,267,268,370]],
['vagy',[97,98,100,103,106,107,108,109,134,135,136,137,138,139,147,151,155,157,158,159,160,161,162,163,166,172,184,187,200,203,205,206,211,212,221,261,262,267,268,303,311,370,376,379,382,383,409,418,437,439,471,472,473,475,504,506,508,509,516,523,532,534,535,539,542,547,551,552,555,568,579,583,612,614,620,627,629,630,633,637,647,648,661,662,663,664,671,673,674,679,683,684,685,686,687,688,689,698,699,700,709,710,714,726,740,743,777,778,830,840,885,890,891,896,897,910,915,918,920,922,938,943,944,957,964,966,967,976,978,979,984,985,989,990,991,1002,1003,1004,1005,1013,1027,1030,1032,1033,1040,1043,1044,1045,1046,1049,1052,1053,1100,1114,1130,1131,1142,1143,1144,1145,1165,1177,1201,1202,1227,1231,1232,1234,1258,1260,1262,1305,1307,1313,1316,1322,1325,1339,1340,1343]],
['bejövő',[97,159,160,203,205,267,268,370]],
['keresési',[97,98,100,103,106,159,160,162,203,205,267,268,370,726,828,829,1002,1037,1039]],
['paramétere',[97,134,135,136,137,138,139,159,160,203,205,256,257,263,264,267,268,290,291,292,293,294,295,296,370]],
['inbound',[97,159,160,203,205,267,268,370]],
['outbound',[97,159,160,203,205,267,268,370]],
['invoice',[97,98,99,100,101,102,103,106,117,119,122,124,125,127,134,137,140,143,146,147,151,152,153,155,156,157,159,160,161,162,163,164,165,166,167,168,171,172,174,175,179,181,182,183,184,185,186,187,188,189,190,191,192,200,201,202,203,205,206,207,208,210,211,212,213,214,215,216,217,218,219,220,221,222,224,225,229,231,232,234,235,236,237,238,239,241,244,246,247,248,252,253,254,256,257,259,260,261,262,263,264,265,266,267,268,269,271,272,290,291,292,293,294,295,296,332,333,334,338,342,346,347,370,371,373,374,382,409,410,411,412,413,414,418,423,424,426,428,430,431,432,437,439,442,489,491,492,495,497,504,505,506,507,508,509,510,511,512,513,516,517,518,519,520,526,527,530,531,532,533,534,535,536,537,538,539,540,541,547,552,553,556,557,559,560,562,563,564,568,569,570,573,574,581,593,594,595,597,598,612,613,614,652,653,654,655,656,657,658,659,660,661,662,665,666,667,668,671,683,684,686,687,689,693,698,699,709,715,890,929,930,989,990,994,995,996,1002,1013,1016,1165,1258,1262,1320,1322,1339,1352,1357,1359,1364,1389,1391,1392,1393,1397,1398,1399]],
['query',[97,98,103,134,137,143,144,159,160,163,168,169,171,172,203,205,207,216,217,218,219,220,232,256,257,259,260,263,264,265,266,267,268,269,271,272,275,277,283,284,290,291,292,293,294,295,296,297,298,299,300,301,302,317,328,329,331,332,338,370,375,726,846,881,883,1002,1067,1070,1073,1075,1150]],
['vevő',[97,147,149,172,176,177,178,203,207,370,418,442,445,460,461,462,465,466,467,468,469,470,473,527,528,624,625,638,639,710,724,890,904,906,1002,1100,1111,1112,1165,1195,1196,1197,1198,1199,1200,1203,1227,1245,1249,1316,1339,1340,1346,1386,1388]],
['oldali',[97,203,207,279,280,370]],
['customer',[97,98,100,103,106,159,162,172,177,203,207,261,262,370,418,442,445,450,460,461,465,466,467,468,469,473,527,528,890,904,906,989,995,1001,1002,1013,1017,1100,1110,1111,1112,1165,1195,1196,1197,1198,1199,1203,1227,1245,1249,1283,1284,1312,1315,1331,1339,1386,1415]],
['side',[97,279,280,370]],
['kiállító',[97,370,1002,1013,1018,1027,1100,1103,1114]],
['supplier',[97,98,100,103,106,147,154,159,162,172,196,197,198,203,207,261,262,370,418,442,451,457,462,495,497,527,531,624,625,669,670,671,675,676,677,678,724,890,976,980,981,982,983]],
['invoicestatustype',[97,248,253,371]],
['received',[97,371,377,726,765,768,789,1002,1013,1026,1040,1041,1042,1043,1100,1113]],
['befogadva',[97,371,377]],
['feldolgozás',[97,371,377]],
['alatt',[97,371,377,418,471,472,473,475,671,674,890,976,979,1165,1201,1202]],
['saved',[97,371,377]],
['elmentve',[97,371,377]],
['kész',[97,371,726,881]],
['aborted',[97,371]],
['kihagyva',[97,371]],
['manageannulmentoperationtype',[97,113,114,372]],
['műveleti',[97,372]],
['annul',[97,372]],
['korábbi',[97,372]],
['adatszolgáltatás',[97,98,105,117,122,123,147,153,172,174,195,199,221,224,232,233,244,246,285,287,332,335,338,341,342,344,372,373,380,418,504,505,535,537,559,565,567,568,582,726,747,748,750,890,891,1165,1232]],
['érvénytelenítése',[97,372,1165,1323]],
['previous',[97,372,726,747,748,750]],
['manageinvoiceoperationtype',[97,147,152,172,188,211,215,332,334,373]],
['számlaművelet',[97,147,152,172,188,208,210,211,332,334,373]],
['create',[97,373,418,559,560,715,1165,1323]],
['eredeti',[97,172,192,221,225,232,235,239,241,285,286,373,418,509,517,535,538,559,560,890,900,902,910,914,1165,1323]],
['számláról',[97,373]],
['original',[97,147,151,159,161,172,187,191,192,203,206,221,222,224,225,232,235,239,241,285,286,373,418,504,508,509,517,535,536,537,538,559,560,890,891,897,900,902,910,913,914,920,922,1165,1227,1231,1232,1234,1258,1260,1322,1323]],
['modify',[97,373,418,715,1165,1323]],
['számlát',[97,373]],
['módosító',[97,117,118,147,148,151,155,157,159,161,163,166,172,173,184,187,191,200,202,203,204,206,211,212,221,222,223,236,248,249,373,418,437,438,439,504,506,508,509,516,517,532,533,534,535,536,539,890,891,896,897,900,902,910,913,915,920,922,1165,1227,1231,1232,1234,1258,1260,1262,1322,1323]],
['okiratról',[97,373]],
['modification',[97,117,118,147,148,151,155,157,158,159,161,163,166,172,173,184,187,192,200,202,203,204,206,211,212,221,223,224,225,232,235,236,239,241,248,249,373,418,437,438,439,504,506,508,509,516,517,532,533,534,535,537,538,539,542,559,560,561,568,582,709,715,890,891,896,897,910,912,914,915,918,920,922,1165,1227,1231,1232,1234,1258,1260,1262,1322,1323,1333,1339,1352,1359,1360,1361,1370,1374,1389,1393,1396,1399]],
['storno',[97,373,1165,1323]],
['érvénytelenítéséről',[97,373]],
['concerning',[97,373,418,539,540,890,915,916]],
['invalidation',[97,373]],
['originalrequestversiontype',[97,117,122,147,153,244,246,338,342,374]],
['lekérdezett',[97,143,145,168,170,261,262,273,274,275,278,328,330,374,1002,1073,1076]],
['queried',[97,143,145,168,170,256,258,261,262,267,270,273,274,275,278,279,280,281,328,330,374,1002,1013,1024,1025,1073,1076,1100,1111,1112]],
['querynametype',[97,98,103,375]],
['kereső',[97,134,137,290,291,292,293,294,295,296,297,298,299,300,301,302,375]],
['queryoperatortype',[97,297,298,300,301,376]],
['relációs',[97,216,219,290,376]],
['relational',[97,216,219,290,376]],
['operator',[97,297,298,300,301,376,726,765,772,777,779,789,791,794,883,1002,1040,1043,1045,1046,1047,1056,1060,1061,1084,1086,1087,1091,1095,1144,1145]],
['egyenlőség',[97,376]],
['equals',[97,134,135,136,137,138,139,376]],
['nagyobb',[97,134,135,137,138,376]],
['mint',[97,376]],
['reláció',[97,376]],
['greater',[97,134,135,137,138,376]],
['than',[97,203,207,376,418,509,514,989,995,998,1339,1386,1388]],
['relation',[97,376,418,509,510,568,571,580,602,604,701,890,938,939,1165,1170,1171,1272,1273]],
['egyenlő',[97,134,135,136,137,138,139,376]],
['kisebb',[97,134,136,137,139,376,726,784,786]],
['less',[97,134,136,137,139,376]],
['requeststatustype',[97,279,282,338,343,377]],
['finished',[97,377]],
['befejezve',[97,377]],
['notified',[97,377]],
['lekérdezve',[97,377]],
['softwareidtype',[97,303,308,378,726,740,741,830,836,884]],
['számlázóprogram',[97,125,126,127,128,140,141,303,304,305,306,307,308,309,310,311,378,379]],
['billing',[97,125,126,127,128,140,141,303,304,305,306,307,308,309,310,311,378,379]],
['software',[97,125,126,127,128,140,141,226,229,256,259,261,263,265,267,271,273,275,279,283,285,288,303,304,305,306,307,308,309,310,311,324,336,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,378,379,382,409,726,740,741,742,743,765,766,789,792,795,797,798,799,801,804,808,830,831,832,833,834,835,836,837,838,839,840,883,884,885,1002,1077,1083,1121,1122,1123,1153,1161,1162]],
['0-9a-z\-',[97,378,726,884]],
['softwareoperationtype',[97,303,311,379,726,740,743,830,840,885]],
['működési',[97,303,311,379,726,740,743,830,840,885]],
['típusa',[97,98,102,113,114,172,182,211,215,226,229,256,259,261,263,265,267,271,273,275,279,283,285,288,303,311,324,336,379,382,410,418,509,517,710,711,715,726,740,743,744,828,829,830,840,870,885,890,891,900,902,903,1002,1003,1004,1007,1009,1010,1011,1013,1016,1028,1030,1034,1035,1037,1040,1044,1045,1046,1049,1056,1063,1064,1067,1069,1071,1073,1077,1084,1091,1094,1097,1099,1100,1109,1115,1117,1118,1121,1122,1126,1127,1132,1133,1150,1165,1170,1232,1251,1316,1317,1319,1339,1408,1409]],
['lokális',[97,303,311,379]],
['program',[97,303,311,379,726,740,741,742,743,830,831,832,833,834,836,838,839,840,884,1002,1077,1083]],
['számlázó',[97,303,311,379,380]],
['szolgáltatás',[97,303,311,379,418,471,472,473,475,509,523,565,566,568,571,578,579,583,671,674,714,717,726,740,743,784,787,788,830,840,883,885,889,890,936,937,938,939,943,944,976,979,985,986,1002,1003,1004,1010,1011,1013,1028,1030,1034,1035,1037,1040,1044,1045,1046,1049,1056,1063,1064,1071,1073,1077,1084,1091,1097,1100,1115,1117,1118,1121,1122,1126,1127,1130,1131,1134,1135,1136,1137,1138,1139,1140,1141,1142,1143,1144,1145,1146,1147,1148,1149,1151,1152,1153,1154,1155,1156,1157,1158,1159,1160,1161,1162,1163,1164,1165,1201,1202]],
['local',[97,303,311,379]],
['service',[97,155,157,200,303,311,379,418,484,485,539,541,565,566,568,571,578,579,602,608,620,661,662,663,683,684,685,686,687,688,698,699,700,714,717,726,732,738,777,779,783,784,787,788,883,885,889,890,915,917,936,937,938,939,943,957,964,966,967,985,986,1002,1003,1004,1010,1011,1013,1028,1030,1034,1035,1037,1040,1044,1045,1046,1049,1056,1057,1062,1063,1064,1071,1073,1077,1084,1085,1088,1091,1097,1098,1100,1115,1117,1118,1121,1122,1126,1127,1130,1131,1134,1135,1136,1137,1138,1139,1140,1141,1142,1143,1144,1145,1146,1147,1148,1149,1151,1152,1153,1154,1155,1156,1157,1158,1159,1160,1161,1162,1163,1164,1165,1331]],
['sourcetype',[97,98,105,117,123,172,195,338,344,380]],
['forrása',[97,98,105,117,123,172,195,338,344,380]],
['source',[97,98,105,117,123,164,171,172,195,217,331,338,344,380]],
['webes',[97,380]],
['kézi',[97,380]],
['feltöltés',[97,380]],
['manual',[97,380]],
['upload',[97,380]],
['gép-gép',[97,380]],
['adatkapcsolati',[97,380]],
['machine-to-machine',[97,380]],
['pénztárgépes',[97,380]],
['cash',[97,380,382,417,418,509,511,726,747,748,750,765,770,771,872,883,1002,1077,1079,1080,1100,1109,1115,1157,1158,1165,1251,1254,1313,1336,1339,1340,1343,1347,1348,1380,1381,1384,1389,1402]],
['register',[97,380,726,744,747,748,749,750,751,752,753,754,755,756,757,759,760,761,763,765,766,767,768,769,770,771,772,784,787,789,792,795,801,805,806,809,810,811,812,813,862,864,867,872,879,883,885,889,890,904,905,908,909,920,927,928,1002,1003,1004,1005,1010,1011,1012,1013,1014,1019,1030,1031,1032,1033,1034,1035,1037,1040,1044,1046,1047,1049,1051,1052,1053,1054,1056,1058,1060,1077,1079,1080,1081,1083,1084,1086,1089,1091,1095,1096,1100,1101,1104,1109,1115,1121,1122,1130,1131,1134,1135,1138,1139,1140,1141,1142,1143,1146,1147,1157,1158,1161,1162,1165,1183,1184,1185,1186,1232,1235,1258,1259,1272,1274,1277,1278,1279,1320,1338,1339,1347,1352,1380,1382,1383,1389,1390]],
['invoicing',[97,380]],
['taxpayeraddresstypetype',[97,312,314,381]],
['adózói',[97,312,314,315,316,317,320,381,726,809,811,828,841,843,844,845,846,849,883,886,1002,1056,1061,1084,1087]],
['address',[97,312,313,314,315,316,317,320,381,382,383,384,385,386,399,400,418,465,466,495,496,612,615,671,676,726,828,841,842,843,844,845,846,849,886,890,976,981,1165,1177,1178,1179,1195,1196,1214,1245,1246,1295,1296]],
['székhely',[97,381,726,886]],
['headquarter',[97,381,726,886]],
['site',[97,381,726,765,772,789,791,794,809,811,883,886,1002,1045,1046,1047,1056,1060,1061,1084,1086,1087,1144,1145]],
['telephely',[97,381,726,886]],
['office',[97,381,726,886]],
['branch',[97,381,726,886]],
['fióktelep',[97,381,726,886]],
['additionalqueryparamstype',[97,98,216,217]],
['lekérdezés',[97,98,143,144,159,163,168,169,203,207,216,217,218,219,220,232,256,257,259,260,263,264,265,266,271,272,275,277,290,317,328,329,332,726,846,881,883,1002,1067,1073,1075,1150]],
['kiegészítő',[97,98,216,217,1165,1326]],
['paraméterei',[97,98,216,217,218,219,220,232,290,332,726,782,783]],
['additional',[97,98,216,217,418,419,890,900,901,989,995,996,997,998,1001,1165,1166,1174,1326,1339,1386,1388,1415]],
['params',[97,98,134,137,216,217,218,219,220,232,290,332]],
['kiállítójának',[97,98,100,103,106,159,162,203,207]],
['vevőjének',[97,98,100,103,106,159,162]],
['feltétel',[97,98,100,103,106,159,162]],
['invoicedirection',[97,98,100,103,106,159,160,162,203,205,257,264,267,268,358]],
['értékétől',[97,98,100,103,106,159,162]],
['függ',[97,98,100,103,106,159,162]],
['search',[97,98,100,103,106,159,162,726,828,829,1002,1037,1039]],
['criteria',[97,98,100,103,106,159,162,726,828,829,1002,1037,1039]],
['depends',[97,98,100,103,106,159,162]],
['groupmembertaxnumber',[97,98,100,217,418,471,472,475,531,671,674,890,976,979,1165,1201,1202,1205]],
['csoport',[97,98,100,317,323,418,471,472,671,674,726,846,852,890,976,979,1165,1201,1202]],
['group',[97,98,100,172,176,196,317,323,382,405,407,418,471,472,473,475,671,674,679,726,846,852,890,976,979,984,1002,1013,1018,1027,1100,1103,1114,1165,1201,1202,1203,1205,1209,1211,1258,1263,1301,1303,1305,1306,1307]],
['member',[97,98,100,418,471,472,671,674,890,976,979,1002,1013,1027,1100,1114,1165,1201,1202,1245,1249,1305,1307]],
['keresőparamétere',[97,98,103]],
['eleji',[97,98,103]],
['egyezőségre',[97,98,103]],
['param',[97,98,103,159,203,256,257,263,264]],
['leading',[97,98,103,726,732,734,1002,1004,1006,1046,1048,1064,1066,1118,1120,1122,1125,1127,1129,1339,1389,1390]],
['match',[97,98,103,726,828,829,1002,1037,1039]],
['invoicecategory',[97,98,102,171,172,182,217,418,509,517,530]],
['invoicecategorytype',[97,98,102,172,182,382,410,418,509,517]],
['paymentmethod',[97,98,104,171,172,194,217,418,509,522,530]],
['paymentmethodtype',[97,98,104,172,194,382,417,418,509,522,1165,1269,1271,1336]],
['fizetés',[97,98,104,172,194,382,417,418,509,522,1165,1269,1270,1271,1336]],
['módja',[97,98,104,172,194,382,417,418,509,522,726,777,779,1165,1258,1261,1269,1271]],
['payment',[97,98,104,172,193,194,290,296,382,417,418,423,425,426,428,429,509,521,522,890,900,903,1165,1251,1252,1256,1264,1265,1266,1267,1268,1269,1270,1271,1313,1336,1339,1340,1343]],
['invoiceappearance',[97,98,101,171,172,181,217,418,509,516,530]],
['invoiceappearancetype',[97,98,101,172,181,382,409,418,509,516]],
['megjelenési',[97,98,101,172,181,382,409,418,509,516]],
['formája',[97,98,101,172,181,382,409,418,509,516]],
['form',[97,98,101,113,116,163,167,172,181,211,214,248,254,324,325,382,409,418,509,516,890,929,930,1165,1283,1284,1285,1287,1289,1290,1291,1293]],
['appearance',[97,98,101,172,181,382,409,418,509,516]],
['pénzneme',[97,98,99,172,175,418,509,513]],
['annulmentdatatype',[97,107,244,245]],
['státusz',[97,107,244,245,418,710,726,873,1165,1316]],
['annulmentverificationstatus',[97,107,110,245]],
['annulmentdecisiondate',[97,107,108,245]],
['invoicetimestamptype',[97,107,108,117,121,137,138,139,147,150,172,180,221,223,324,326,327,338,340,382,413]],
['jóváhagyásának',[97,107,108]],
['elutasításának',[97,107,108]],
['időpontja',[97,107,108,117,121,147,150,172,180,275,276,338,340,418,602,608,726,830,837,1002,1073,1074,1100,1112]],
['időben',[97,107,108,117,121,147,150,172,180,221,223,279,280,338,340]],
['rejection',[97,107,108,109]],
['annulmentdecisionuser',[97,107,109,245]],
['érvénytelenítést',[97,107,109,338,345]],
['jóváhagyó',[97,107,109]],
['elutasító',[97,107,109]],
['deciding',[97,107,109]],
['over',[97,107,109,418,638,639,724,726,777,778]],
['annulmentoperationlisttype',[97,111,226,227]],
['kéréshez',[97,111,112,113,208,210,211,226,227,229,231,244]],
['tartozó',[97,111,112,113,208,210,211,226,227,229,231,244,418,430,432,489,491,492,568,580,647,649,650,651,661,662,663,683,684,685,686,687,688,698,699,700,726,855,857,890,964,966,967,989,990,993,995,996,997,998,1165,1190,1192,1193,1194,1339,1386,1388]],
['kötegelt',[97,111,208,226,227,229,231,239,241,382,414,418,437,532,533]],
['érvénytelenítések',[97,111,226,227,1339,1389,1392,1395,1398]],
['batch',[97,111,117,118,147,148,172,173,203,204,208,226,227,229,231,239,241,248,249,382,414,418,437,438,532,533]],
['operations',[97,111,208,226,227,229,231]],
['annulmentoperation',[97,111,112,113,114,227]],
['annulmentoperationtype',[97,111,112,113]],
['index',[97,112,113,115,117,119,164,171,172,179,210,211,213,220,247,248,252,332,333,382,412,414,1165,1324]],
['invoiceindextype',[97,113,115,117,119,172,179,211,213,248,252,332,333,338,341,382,412]],
['sorszáma',[97,113,115,117,118,119,147,148,151,159,161,172,173,179,187,191,192,203,204,206,211,213,221,222,225,232,235,239,241,248,249,252,332,333,418,426,428,437,438,504,508,535,536,538,559,560,568,584,612,614,726,797,800,890,891,897,910,913,914,920,922,938,945,1165,1174,1176,1227,1231,1232,1234,1258,1260,1339,1347,1351,1389,1390]],
['kérésen',[97,113,115,117,119,172,179,211,213,248,252,332,333]],
['belül',[97,113,115,117,118,119,147,148,172,173,179,203,204,211,213,248,249,252,332,333,418,437,438,890,920,927,1165,1232,1235,1272,1277]],
['within',[97,113,115,117,118,119,147,148,172,173,179,203,204,211,213,248,249,252,332,333,418,437,438,890,920,927,1165,1232,1235,1272,1277]],
['kért',[97,113,114,211,215,336,337]],
['desired',[97,113,114,211,215]],
['invoiceannulment',[97,112,113,116]],
['base64binary',[97,113,116,163,167,211,214,248,254,324,325,726,869,871,890,929,930,989,995,999,1002,1013,1015,1024,1100,1102,1111,1165,1283,1284,1285,1287,1289,1290,1291,1293,1311,1326,1327,1329,1339,1386,1387]],
['base64-ben',[97,113,116,163,167,211,214,248,254,890,929,930,1165,1283,1284,1285,1287,1289,1290,1291,1293]],
['kódolt',[97,113,116,163,167,211,214,248,254,324,325,890,929,930,1165,1283,1284,1285,1287,1289,1290,1291,1293]],
['tartalma',[97,113,116,163,167,211,214,248,254,890,929,930,1165,1283,1284,1285,1289,1290,1291]],
['base64',[97,113,116,163,165,167,211,214,248,251,254,418,709,726,871,890,929,930,1165,1283,1284,1285,1287,1289,1290,1291,1293]],
['encoded',[97,113,116,163,167,211,214,248,254,324,325,890,929,930,1165,1283,1284,1285,1287,1289,1290,1291,1293]],
['auditdatatype',[97,117,163,164]],
['audit',[97,117,163,164]],
['insdate',[97,117,121,147,150,156,164,171,172,180,218,232,233,279,280,331,338,340,362]],
['beszúrás',[97,117,121,147,150,172,180,338,340]],
['insert',[97,117,121,147,150,172,180,279,280,338,340]],
['inscususer',[97,117,120,164,331,338,339]],
['beszúrást',[97,117,120,338,339]],
['végző',[97,117,120,338,339]],
['inserting',[97,117,120,338,339]],
['transactionid',[97,117,124,164,171,172,199,220,285,287,331,332,335,336,337,338,346,349,351,364]],
['tranzakció',[97,117,124,172,199,283,284,285,287,328,331,332,335,336,337,338,345,346,1165,1331]],
['gépi',[97,117,124,418,484,485]],
['interfészen',[97,117,124,726,879,989,1339]],
['beküldésre',[97,117,124]],
['exchanged',[97,117,124,221,224,418,535,537]],
['interface',[97,117,124,418,568,593,726,879,989,1165,1283,1288,1289,1294,1339]],
['batchindex',[97,117,118,147,148,156,164,171,172,173,203,204,247,248,249,264,418,437,438,533]],
['invoiceunboundedindextype',[97,117,118,147,148,172,173,191,203,204,221,222,248,249,382,414,418,437,438,535,536]],
['okirat',[97,117,118,147,148,151,159,161,163,166,172,173,184,187,191,200,202,203,204,206,211,212,221,222,223,236,248,249,418,437,438,439,504,506,508,509,516,517,532,533,534,535,536,539,612,614,890,891,896,897,900,902,910,913,920,922,1165,1227,1231,1232,1234,1258,1260,1262,1322,1323]],
['kötegen',[97,117,118,147,148,172,173,203,204,248,249,418,437,438]],
['document',[97,117,118,147,148,151,155,157,163,166,172,173,184,187,200,202,203,204,211,212,221,223,236,248,249,418,437,438,439,504,506,508,509,516,517,532,534,539,612,614,633,634,726,757,763,764,883,890,891,895,896,897,898,899,900,902,904,907,910,913,914,915,916,917,920,922,923,924,925,929,931,932,934,938,942,948,949,950,952,953,954,961,962,963,964,966,968,969,970,971,972,974,975,989,990,995,997,1000,1001,1002,1013,1016,1017,1018,1019,1021,1023,1024,1025,1026,1027,1063,1064,1065,1100,1103,1104,1106,1108,1109,1110,1111,1112,1113,1114,1115,1117,1118,1119,1148,1149,1157,1158,1159,1160,1165,1170,1171,1172,1209,1212,1213,1227,1228,1229,1230,1231,1232,1234,1258,1260,1261,1262,1272,1273,1275,1283,1285,1312,1319,1320,1322,1323,1331,1335,1339,1340,1342,1345,1347,1350,1352,1378,1380,1385,1389,1401,1403,1404,1405,1406,1407,1408,1409,1410,1411,1413]],
['originalrequestversion',[97,117,122,147,153,156,164,244,246,289,331,338,342]],
['basiconlineinvoicerequesttype',[97,125,226,229,256,263,267,273,279,285,366]],
['rendszerre',[97,125,127,140,347]],
['specifikus',[97,125,127,140,347,1165,1183,1185]],
['általános',[11,30,73,74,75,76,97,125,127,140,347,1002,1003,1004,1007,1009,1010,1011,1013,1028,1030,1034,1035,1037,1040,1044,1045,1046,1049,1056,1063,1064,1067,1071,1073,1077,1084,1091,1097,1100,1115,1117,1118,1121,1122,1126,1127,1165,1183,1185,1339,1340,1344,1347,1349,1352,1377,1389,1400,1408,1412]],
['specific',[97,125,127,140,347,418,509,523,1165,1174,1175,1183,1185]],
['softwaretype',[97,125,126,127,128,140,141,303,726,765,766,801,804,830,1002,1077,1083]],
['basiconlineinvoiceresponsetype',[97,127,259,261,265,271,275,283,288,324,336]],
['businessvalidationresulttype',[97,129,248,250]],
['pointer',[97,129,131,250]],
['pointertype',[97,129,131,239]],
['kurzor',[97,129,131,239]],
['cursor',[97,129,131,239]],
['dateintervalparamtype',[97,134,232,234]],
['dátumos',[97,134]],
['datefrom',[97,134,135,234]],
['invoicedatetype',[97,134,135,136,172,183,184,193,297,299,382,411,418,426,429,430,431,484,486,504,506,509,515,518,519,520,521,602,608,612,613]],
['intervallum',[97,134,135,136,137,138,139,236,237,238]],
['interval',[97,134,135,136,137,138,139,236,237,238,726,777,778]],
['dateto',[97,134,136,234]],
['datetimeintervalparamtype',[97,137,232,233,279,280]],
['időpontos',[97,137,138,139]],
['datestamp',[97,137]],
['datetimefrom',[97,137,138,233,280]],
['datetimeto',[97,137,139,233,280]],
['generalerrorresponsetype',[97,140,347]],
['technicalvalidationmessages',[97,140,142,247,248,255,347]],
['üzenetek',[97,140,142,248,250,255,726,765,775,1002,1013,1014,1100,1101,1339]],
['messages',[97,140,142,248,250,255,1002,1013,1014,1100,1101,1339]],
['invoicechaindigestresulttype',[97,143,259,260]],
['számlalánc',[97,143,146,147,155,156,159,256,257,259,260]],
['kivonat',[97,143,147,155,156,159,168,171,256,257,259,260,271,272]],
['eredményei',[97,143,259,260,271,272,283,284,328]],
['chain',[97,143,146,147,155,156,159,256,257,259,260]],
['digest',[97,143,147,155,156,157,159,168,171,172,200,256,257,259,260,271,272]],
['currentpage',[97,143,145,168,170,260,272,284,328,330]],
['jelenleg',[97,143,145,168,170,328,330]],
['lapszám',[97,143,144,145,168,169,170,328,329,330]],
['currently',[97,143,145,168,170,328,330]],
['count',[97,143,144,145,168,169,170,256,258,267,270,279,281,328,329,330,338,341,1165,1208,1209,1212,1394,1395,1396]],
['availablepage',[97,143,144,168,169,260,272,284,328,329]],
['eredménye',[97,143,144,163,168,169,265,266,328,329,726,881,1002,1067,1070]],
['elérhető',[97,143,144,168,169,328,329]],
['utolsó',[97,143,144,168,169,275,276,328,329,418,509,515,519,726,747,748,750,757,761,1002,1073,1074]],
['highest',[97,143,144,168,169,200,201,328,329]],
['available',[97,143,144,168,169,328,329]],
['matching',[97,143,144,168,169,328,329]],
['invoicechainelement',[97,143,146,260]],
['invoicechainelementtype',[97,143,146,155]],
['elem',[97,143,146,155]],
['invoicechaindigesttype',[97,147,155,156]],
['invoicenumber',[97,147,151,156,159,161,171,172,187,203,206,257,264,418,504,508,709]],
['pont',[97,147,151,172,187,418,504,508]],
['sequential',[97,147,151,159,161,172,187,203,206,418,504,508,559,560,568,584,612,614,890,891,897,920,922,938,945,1165,1174,1176,1227,1231,1232,1234,1258,1260,1322]],
['invoiceoperation',[97,147,152,156,171,172,188,208,210,211,215,220,231,332,334]],
['suppliertaxnumber',[97,147,154,156,171,172,198,203,207,264,418,531,671,679,890,976,984]],
['kibocsátó',[97,147,154,172,196,198,418,495,497,527,531]],
['customertaxnumber',[97,147,149,156,171,172,178,418,469,473,475,1165,1199,1203,1205]],
['buyer',[97,147,149,172,176,178,418,724,989,995,996,997,998,1339,1386,1388]],
['invoicechaindigest',[97,146,155,156]],
['invoicelines',[97,146,155,157,418,439,534,539,541]],
['invoicelinestype',[97,155,157,200]],
['számlán',[97,155,157,172,174,200,261,262,418,471,473,475,504,505,509,511,518,539,541,568,593,594]],
['okiraton',[97,155,157,200]],
['szereplő',[97,155,157,200,288,289,418,471,473,475,539,541,568,593,594,890,915,917,920,923,926,938,948,949,968,971,972,973,989,995,997,998,1002,1028,1029,1064,1065,1115,1116,1165,1170,1171,1272,1273,1276,1335,1339,1386,1388,1403,1404,1405,1406,1407,1408,1411]],
['tételek',[97,155,157,200,418,539,541,565,568,890,915,917,936,938,1165,1190,1192,1193,1194]],
['kivonatos',[97,155,157,172,200]],
['product',[97,155,157,200,418,462,463,464,539,541,544,565,566,568,571,579,585,586,588,589,590,602,606,609,612,618,619,620,621,622,623,624,625,626,627,628,629,631,632,633,634,635,636,637,638,639,714,717,718,720,721,724,726,816,820,822,823,883,890,915,917,936,937,938,939,943,946,955,956,957,958,959,960,985,986,987,1002,1035,1036,1037,1165,1312,1331]],
['appearing',[97,155,157,200,418,539,541,890,915,917]],
['invoicereferencedata',[97,146,155,158]],
['invoicereferencedatatype',[97,155,158,221]],
['módosítás',[97,155,158,172,192,221,224,225,232,235,239,241,418,535,537,538,539,542,559,568,582,709,715,890,910,912,914,915,918,1339,1352,1370,1374]],
['cancellation',[97,155,158,221,418,535,539,542,890,910,911,915,918,1165,1312,1323,1331,1339,1352,1357,1358,1369,1373,1389,1392,1395,1398]],
['invoicechainquerytype',[97,159,256,257]],
['számlaszám',[97,159,203,256,257,261,262,263,264,418,442,449,500,501]],
['invoicedataresulttype',[97,163,265,266]],
['számlaszámra',[97,163]],
['történő',[97,163,418,484,559,568,576,582,633,637,989,990,993]],
['based',[97,163,418,462,624,625,726,757,759,765,769]],
['invoicedata',[97,163,167,210,211,214,266,418,709,890,929,930,989,994]],
['auditdata',[97,163,164,266]],
['compressedcontentindicator',[97,163,165,247,248,251,266]],
['boolean',[97,163,165,172,174,208,209,221,224,248,251,261,262,275,278,285,286,338,345,418,423,424,433,434,504,505,509,511,523,524,525,526,535,537,565,567,568,575,578,581,586,588,671,675,689,691,694,705,706,890,976,980,1002,1013,1021,1022,1073,1076,1100,1106,1107,1165,1185,1187]],
['jelöli',[97,163,165,172,174,248,251,261,262,285,286,338,345,418,504,505,565,567]],
['tartalmát',[97,163,165,248,251]],
['dekódolást',[97,163,165,248,251]],
['követően',[97,163,165,248,251,726,862,864,879,1002,1040,1044,1142,1143]],
['kell',[97,163,165,248,251,285,286,382,386,394,399,403,726,747,748,749,752,757,759,765,769,784,786,787,862,864,879,1002,1004,1005,1006,1013,1021,1026,1046,1048,1056,1058,1059,1061,1064,1065,1066,1077,1081,1084,1087,1090,1091,1095,1100,1106,1111,1112,1113,1118,1120,1122,1123,1125,1127,1129,1165,1214,1222,1295,1299]],
['tömöríteni',[97,163,165,248,251]],
['olvasáshoz',[97,163,165,248,251]],
['indicates',[97,163,165,172,174,221,224,248,251,261,262,275,278,285,286,338,345,418,504,505,509,523,535,537,565,567,1002,1073,1076]],
['content',[97,163,165,208,209,248,251,418,419,420,568,585,680,682,689,693,726,855,857,1165,1166,1167,1283,1288,1289,1294]],
['needs',[97,163,165,248,251]],
['decompressed',[97,163,165,248,251]],
['read',[97,163,165,248,251,1002,1035,1036]],
['following',[97,163,165,248,251]],
['decoding',[97,163,165,248,251]],
['electronicinvoicehash',[97,163,166,210,211,212,266,931,953,962,1165,1258,1262]],
['elektronikus',[97,163,166,211,212,303,304,382,409,726,830,831,1165,1258,1262]],
['állomány',[97,163,166,211,212,726,797,799,800,1002,1122,1124,1165,1227,1230,1258,1262,1283,1286,1289,1292]],
['lenyomata',[97,163,166,211,212,1165,1258,1262,1283,1286,1289,1292]],
['electronic',[97,163,166,211,212,303,304,382,409,418,493,494,721,726,830,831,1165,1258,1262]],
['file',[97,163,166,211,212,726,797,800,883,1002,1122,1124,1165,1180,1181,1227,1230,1258,1262,1283,1286,1289,1292,1329,1330]],
['invoicedigestresulttype',[97,168,271,272]],
['lekérdezési',[97,168,171,172,216,267,269,283,284,328,331,338]],
['eredmények',[97,168,244]],
['results',[97,168,244,271,272,283,284,328,1002,1037,1038,1039]],
['invoicedigest',[97,168,171,272]],
['invoicedigesttype',[97,168,171,172]],
['invoiceissuedate',[97,171,172,184,218,232,234,418,504,506,709]],
['kiállításának',[97,172,184,232,234,1002,1013,1025,1100,1112]],
['dátuma',[97,172,183,184,418,426,429,430,431,484,486,509,515,518,1165,1209,1213]],
['issue',[97,172,184,232,234,382,409,418,504,506,612,613,890,891,896]],
['suppliergroupmembertaxnumber',[97,171,172,196]],
['csoporttag',[97,172,176,196]],
['száma',[97,172,176,196,200,201,256,258,267,270,279,281,338,341,418,433,435,612,614,671,673,701,704,705,708,726,765,770,771,773,814,815,890,976,978,1002,1037,1038,1077,1079,1080,1165,1183,1184,1185,1186,1241,1243,1245,1247,1258,1259]],
['suppliername',[97,171,172,197,418,531,671,678,890,976,983]],
['eladó',[97,172,197,418,442,457,462,495,497,527,531,624,625,638,639,669,670,671,673,675,676,677,678,724,890,976,978,980,981,982,983,989,995,996,997,998]],
['szállító',[97,172,197,418,671,675,676,677,678,890,976,980,981,982,983]],
['seller',[97,172,197,418,671,675,676,677,678,890,976,980,981,982,983,989,995,996,997,998]],
['customergroupmembertaxnumber',[97,171,172,176]],
['customername',[97,171,172,177,418,465,468,528,906,1165,1195,1198]],
['paymentdate',[97,171,172,193,219,290,296,418,509,521,530]],
['fizetési',[97,172,193,290,296,418,509,521,568,588,1165,1269,1270,1271,1336]],
['határidő',[97,172,193,418,509,521]],
['deadline',[97,172,193,418,509,521,1002,1122,1123]],
['invoicedeliverydate',[97,171,172,183,418,509,518,530]],
['teljesítési',[97,172,183,290,291,418,430,431,1165,1209,1213]],
['delivery',[97,172,183,290,291,418,430,431,442,447,479,480,509,518,519,520,683,684,685,686,687,688,698,699,700]],
['invoicenetamount',[97,171,172,185,219,290,292,418,655,656,666]],
['monetarytype',[97,172,185,186,189,190,300,302,382,416,418,489,492,552,553,554,556,557,558,562,563,564,568,577,597,598,599,627,628,632,633,635,638,639,652,653,654,655,656,657,658,659,661,662,663,683,684,685,686,687,688,698,699,700,890,932,934,935,964,966,967,968,969,970,1165,1190,1192,1193,1194,1209,1210,1236,1237,1269,1270,1334]],
['nettó',[97,172,185,186,290,292,293,418,547,549,562,563,564,568,595,647,650,655,656,657,686,687,688,1165,1190,1193]],
['összege',[97,172,185,186,189,190,418,489,492,562,563,564,597,598,599,627,628,638,639,652,653,654,655,656,657,658,659,661,662,663,683,684,685,686,687,688,698,699,700,890,920,923,964,966,967,968,969,970,971,1165,1209,1210,1236,1237,1269,1270,1339,1340,1342,1346,1352,1353,1357,1358,1359,1360,1362,1364,1365,1366,1368,1369,1370,1371,1373,1374,1375,1379]],
['pénznemében',[97,172,185,189,290,292,294,418,489,492,552,553,556,557,562,563,568,595,597,598,652,653,655,656,658,661,662,683,684,686,687,698,699,890,932,934,938,950,964,966,968,969]],
['amount',[97,172,185,186,189,190,290,292,293,294,295,418,489,492,552,553,554,556,557,558,562,563,564,597,598,599,627,628,638,639,652,653,654,655,656,657,658,659,661,662,663,683,684,685,686,687,688,698,699,700,890,920,923,932,934,935,964,966,967,968,969,970,971,1165,1208,1209,1210,1236,1237,1239,1251,1253,1255,1256,1257,1264,1266,1269,1270,1339,1340,1342,1346,1352,1353,1354,1355,1356,1357,1358,1359,1360,1361,1364,1366,1368,1369,1370,1371,1372,1373,1374,1375,1376,1379,1394,1395,1396]],
['expressed',[97,172,185,186,189,190,290,292,293,294,295,418,489,491,492,509,514,552,553,554,556,557,558,562,563,564,568,595,596,597,598,599,652,653,654,655,656,657,658,659,683,684,685,686,687,688,698,699,700,726,732,739,855,857,858,859,890,932,934,935,938,950,951,968,969,970]],
['invoicenetamounthuf',[97,171,172,186,219,290,293,418,655,657,666]],
['forintban',[97,172,186,190,290,293,295,418,552,554,556,558,562,564,568,577,596,597,599,627,628,638,639,652,654,655,657,659,661,663,683,685,686,688,698,700,890,920,923,932,935,938,951,964,967,968,970,971,1165,1236,1239,1240,1251,1253,1254,1257,1264,1266,1339,1340,1342,1346]],
['invoicevatamount',[97,171,172,189,219,290,294,418,655,658,666]],
['invoicevatamounthuf',[97,171,172,190,219,290,295,418,655,659,666]],
['originalinvoicenumber',[97,131,158,171,172,192,218,221,225,232,235,239,241,418,535,538,542]],
['melyre',[97,172,192,221,225,232,235,239,241,418,535,538,890,910,914]],
['vonatkozik',[97,172,192,221,225,232,235,239,241,418,509,519,520,535,538,633,637,890,910,914]],
['occurs',[97,172,192,221,225,232,235,239,241,418,535,538,559,560,726,777,781,890,910,914]],
['modificationindex',[97,158,171,172,191,221,222,418,535,536,542,890,910,913,918]],
['számlára',[97,172,191,221,222,418,430,509,510,535,536,890,910,913]],
['referring',[97,172,191,221,222,418,535,536,890,910,913]],
['completenessindicator',[97,171,172,174,418,504,505,709]],
['maga',[97,172,174,418,504,505]],
['szerepel',[97,172,174,261,262,418,504,505,509,511,518]],
['több',[97,172,174,203,207,418,504,505]],
['adat',[97,172,174,312,315,316,418,419,422,504,505,509,510,568,571,713,726,816,823,841,844,845,890,900,901,920,923,938,939,968,971,989,990,995,1000,1001,1165,1166,1169,1170,1171,1172,1173,1174,1175,1227,1228,1229,1272,1273,1312,1328,1339,1380,1386,1403,1404,1405,1406,1407,1414,1415]],
['whether',[97,172,174,221,224,261,262,275,278,338,345,418,504,505,535,537,565,567,633,637,1002,1013,1021,1073,1076,1100,1106]],
['identical',[97,172,174,418,504,505]],
['does',[97,172,174,418,504,505,509,518,726,777,778]],
['contain',[97,172,174,418,504,505,559,560]],
['more',[97,172,174,203,207,418,504,505]],
['maxlinenumber',[97,157,200,201]],
['linenumbertype',[97,200,201,236,237,238,239,240,382,415,418,559,560,568,584,643,644,890,938,945,1165,1174,1176,1332]],
['sorok',[97,200,201]],
['közül',[97,200,201]],
['legmagasabb',[97,200,201]],
['amit',[97,200,201,726,862,864,1002,1091,1095]],
['tartalmaz',[97,200,201,338,345,382,383,418,565,567,709,1165,1177]],
['line',[97,131,200,201,236,237,238,239,240,382,415,418,541,547,548,549,550,556,559,560,561,562,565,566,567,568,582,583,585,597,714,715,890,917,936,937,938,944,985,1002,1064,1065,1165,1332]],
['contains',[97,200,201,338,345,418,565,567,1002,1013,1025,1100,1111,1112]],
['newcreatedlines',[97,157,200,202]],
['newcreatedlinestype',[97,200,202,236]],
['által',[97,200,202,236,285,286,418,495,497,717,726,732,739,765,767,775,777,779,872,889,890,986,1002,1010,1011,1012,1013,1014,1030,1032,1049,1052,1100,1101,1134,1135,1165,1236,1240,1339]],
['újként',[97,200,202,236]],
['létrehozott',[97,200,202,236]],
['számlasorok',[97,200,202,236]],
['lines',[97,200,202,236,418,559,560]],
['created',[97,200,202,236,1002,1013,1021,1100,1106]],
['invoicenumberquerytype',[97,203,263,264]],
['esetén',[97,203,207,239,241,382,405,407,418,430,431,432,509,511,514,515,517,524,547,552,556,557,559,560,562,563,564,568,569,570,582,595,620,622,655,665,666,689,693,726,747,749,757,759,765,769,809,813,855,857,859,878,890,900,902,904,909,920,923,932,938,942,957,959,968,971,1002,1004,1005,1013,1018,1021,1026,1027,1030,1032,1049,1052,1056,1058,1091,1092,1093,1095,1100,1103,1106,1113,1114,1165,1166,1169,1258,1263,1272,1279,1301,1303,1305,1306,1307,1331,1339,1389,1390]],
['érvényes',[97,203,207,726,855,859]],
['megtalálható',[97,203,207]],
['azonos',[97,203,207,418,509,518]],
['sorszámmal',[97,203,207]],
['case',[97,203,207,239,241,382,405,407,418,430,431,481,482,483,509,511,514,517,524,547,552,556,557,559,560,562,563,564,568,569,570,582,680,681,689,692,693,695,696,726,747,750,752,809,810,813,890,900,902,904,905,909,932,938,942,1002,1004,1005,1030,1032,1049,1052,1056,1058,1091,1092,1093,1165,1258,1263,1272,1274,1279,1301,1303]],
['querying',[97,203,207,261,262]],
['found',[97,203,207,890,891,894,1002,1013,1014,1100,1101]],
['valid',[97,203,207,261,262,275,278,726,855,859,1002,1073,1076]],
['invoices',[97,203,207,288,289,418,568,595,1002,1013,1028,1136,1137]],
['same',[97,203,207]],
['invoiceoperationlisttype',[97,208,229,231]],
['számlaműveletek',[97,208,229,231]],
['compressedcontent',[97,208,209,231]],
['tömörített',[97,208,209]],
['tartalom',[97,208,209,418,689,693,726,855,857]],
['jelzése',[97,208,209,221,224,418,509,523,525,535,537,568,583,633,637,714,890,938,944,985]],
['folyamat',[97,208,209,726,765,768,789,790,791,792,793,794,795,796,1002,1004,1006,1013,1026,1040,1041,1042,1043,1046,1048,1056,1059,1061,1064,1066,1084,1087,1090,1100,1113,1118,1120,1122,1125,1127,1129,1142,1165,1337]],
['compressed',[97,208,209]],
['indicator',[97,208,209]],
['flow',[97,208,209,1002,1100,1109,1115,1157,1158,1339,1340,1380,1381,1384,1389,1402]],
['invoiceoperationtype',[97,208,210,211]],
['invoicequeryparamstype',[97,216,267,269]],
['paraméterek',[97,216,267,269]],
['parameters',[97,216,267,269,726,747,751,782,783]],
['mandatoryqueryparams',[97,216,218,269]],
['mandatoryqueryparamstype',[97,216,218,232]],
['kötelező',[97,216,218,232]],
['mandatory',[97,216,218,232]],
['additionalqueryparams',[97,216,217,269]],
['relationalqueryparams',[97,216,219,269]],
['relationalqueryparamstype',[97,216,219,290]],
['transactionqueryparams',[97,216,220,269]],
['transactionqueryparamstype',[97,216,220,332]],
['tranzakciós',[97,216,220,332]],
['modifywithoutmaster',[97,158,221,224,418,535,537,542]],
['annak',[97,221,224,418,509,523,535,537,633,637,1002,1049,1054]],
['olyan',[97,221,224,418,535,537]],
['alapszámlára',[97,221,224,418,535,537]],
['hivatkozik',[97,221,224,418,535,537]],
['amelyről',[97,221,224,418,535,537]],
['történt',[97,221,224,418,426,428,471,472,473,475,535,537,671,674,890,976,979,1165,1201,1202]],
['történni',[97,221,224,418,535,537]],
['references',[97,221,224,418,535,537,568,592,643,644]],
['will',[97,221,224,418,535,537,726,789,794,796,1002,1049,1054]],
['choice',[97,221,232,382,383,418,473,532,568,602,620,624,665,689,890,891,910,957,989,990,995,1002,1040,1091,1165,1177,1203,1339,1380]],
['modificationtimestamp',[97,158,221,223]],
['készítésének',[97,221,223]],
['időbélyege',[97,221,223]],
['forrásrendszerben',[97,221,223]],
['creation',[97,221,223,1002,1013,1025,1100,1112]],
['manageannulmentrequesttype',[97,226,348]],
['post',[97,226,229,256,259,261,263,265,267,271,273,275,279,283,285,288,324,336,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,726,875]],
['manageannulment',[97,226,336,348,349]],
['operáció',[97,226,229,256,259,261,263,265,267,271,273,275,279,283,285,288,324,336,337,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367]],
['exchangetoken',[97,226,228,229,230,348,350]],
['tranzakcióhoz',[97,226,228,229,230]],
['kiadott',[97,226,228,229,230,324,325,326,327]],
['dekódolt',[97,226,228,229,230]],
['token',[97,226,228,229,230,324,325,326,327]],
['decoded',[97,226,228,229,230]],
['issued',[97,226,228,229,230,324,325,326,327,382,409,418,430,432,726,869,1002,1030,1032,1033,1049,1052,1053,1067,1150]],
['current',[97,226,228,229,230,726,747,750,751,765,768,776,789,790,791,792,793,890,938,941,1165,1331]],
['annulmentoperations',[97,226,227,348]],
['manageinvoicerequesttype',[97,229,350]],
['manageinvoice',[97,229,336,350,351]],
['invoiceoperations',[97,229,231,350]],
['dátumtartománya',[97,232,234]],
['range',[97,232,233,234]],
['feldolgozásának',[97,232,233]],
['időpont',[97,232,233,726,862,864]],
['tartománya',[97,232,233]],
['linenumberintervalstart',[97,202,236,238]],
['kezdete',[97,236,238,324,326,726,809,811]],
['start',[97,236,238,324,326,726,809,811]],
['linenumberintervalend',[97,202,236,237]],
['vége',[97,236,237,324,327,726,872]],
['inkluzív',[97,236,237]],
['inclusive',[97,236,237]],
['hivatkozás',[97,239,242,243]],
['reference',[97,239,240,242,243,418,535,717,890,910,986]],
['Érték',[]],
['sorhivatkozás',[97,239,240]],
['processingresultlisttype',[97,244,288,289]],
['processingresult',[97,244,247,289]],
['processingresulttype',[97,244,247,248]],
['annulmentdata',[97,244,245,289]],
['invoicestatus',[97,247,248,253]],
['businessvalidationmessages',[97,247,248,250]],
['originalrequest',[97,247,248,251,254]],
['queryinvoicechaindigestrequesttype',[97,256,352]],
['queryinvoicechaindigest',[97,256,259,352,353]],
['lekérdezni',[97,256,258,267,270,279,280,281]],
['kívánt',[97,256,258,267,270,279,280,281]],
['invoicechainquery',[97,256,257,352]],
['queryinvoicechaindigestresponsetype',[97,259,353]],
['invoicechaindigestresult',[97,259,260,353]],
['queryinvoicecheckresponsetype',[97,261,355]],
['queryinvoicecheck',[97,261,354,355]],
['invoicecheckresult',[97,261,262,355]],
['érvényesként',[97,261,262]],
['lekérdező',[97,261,262,1002,1071,1073,1151,1152]],
['kiállítóként',[97,261,262]],
['eladóként',[97,261,262]],
['exists',[97,261,262]],
['system',[97,261,262,382,411,412,413,414,418,493,494,726,747,750,757,777,778,879,1002,1003,1004,1007,1009,1010,1011,1013,1028,1030,1034,1035,1037,1040,1044,1045,1046,1049,1056,1063,1064,1067,1071,1073,1077,1084,1091,1097,1100,1115,1117,1118,1121,1122,1126,1127,1165,1336]],
['entity',[97,261,262]],
['present',[97,261,262]],
['either',[97,261,262,382,383,1165,1177]],
['queryinvoicedatarequesttype',[97,263,354,356]],
['queryinvoicedata',[97,263,265,356,357]],
['invoicenumberquery',[97,263,264,354,356]],
['queryinvoicedataresponsetype',[97,265,357]],
['invoicedataresult',[97,265,266,357]],
['queryinvoicedigestrequesttype',[97,267,358]],
['queryinvoicedigest',[97,267,271,358,359]],
['invoicequeryparams',[97,267,269,358]],
['queryinvoicedigestresponsetype',[97,271,359]],
['invoicedigestresult',[97,271,272,359]],
['querytaxpayerrequesttype',[97,273,360,1002,1071,1151]],
['querytaxpayer',[97,273,275,360,361]],
['querytaxpayerresponsetype',[97,275,361,1002,1073,1152]],
['infodate',[97,275,276,361,1002,1073,1074,1152]],
['változásának',[97,275,276,890,920,921,1002,1073,1074,1165,1232,1233,1339,1340,1341]],
['last',[97,275,276,418,509,515,519,726,732,736,737,738,757,761,763,764,765,768,789,830,837,1002,1013,1019,1030,1032,1033,1040,1041,1042,1043,1049,1052,1053,1073,1074,1100,1104]],
['changed',[97,275,276,1002,1073,1074]],
['taxpayervalidity',[97,275,278,361,1002,1073,1076,1152]],
['jelzi',[97,275,278,1002,1073,1076,1142]],
['létezik',[97,275,278,1002,1073,1076]],
['érvényes-e',[97,275,278,1002,1073,1076]],
['existing',[97,275,278,418,559,560,1002,1073,1076]],
['taxpayerdata',[97,275,277,361,1002,1073,1075,1152]],
['taxpayerdatatype',[97,275,277,317,726,846,1002,1073,1075]],
['querytransactionlistrequesttype',[97,279,362]],
['querytransactionlist',[97,279,283,362,363]],
['tranzakciók',[97,279,280]],
['kiadásának',[97,279,280]],
['szerver',[97,279,280]],
['server',[97,279,280]],
['requeststatus',[97,279,282,331,338,343,362]],
['querytransactionlistresponsetype',[97,283,363]],
['transactionlistresult',[97,283,284,363]],
['transactionlistresulttype',[97,283,284,328]],
['querytransactionstatusrequesttype',[97,285,364]],
['querytransactionstatus',[97,285,288,364,365]],
['returnoriginalrequest',[97,285,286,364]],
['beküldött',[97,285,286,726,757,764,1002,1013,1016,1023,1100,1108,1109]],
['tartalmat',[97,285,286]],
['vissza',[97,285,286]],
['adni',[97,285,286]],
['válaszban',[97,285,286]],
['should',[97,285,286,418,430,432,462,509,514,518,624,625,726,747,748,750,757,759,765,769,784,786]],
['also',[97,285,286]],
['returned',[97,285,286,1002,1004,1006,1046,1048,1056,1059,1061,1064,1066,1084,1087,1090,1118,1120,1122,1125,1127,1129,1165,1331]],
['querytransactionstatusresponsetype',[97,288,365]],
['processingresults',[97,288,289,365]],
['kérésben',[97,288,289,1002,1028,1029,1115,1116]],
['számlák',[97,288,289,1339,1389,1391,1397]],
['invoicedelivery',[97,219,290,291]],
['relationquerydatetype',[97,290,291,296,297]],
['dátumának',[97,290,291]],
['határidejének',[97,290,296]],
['relationquerymonetarytype',[97,290,292,293,294,295,300]],
['összeg',[97,290,292,1165,1236,1251,1255]],
['összegének',[97,290,293,294,295,1165,1236,1239]],
['értékekhez',[97,297,300]],
['values',[97,297,300,418,722,890,988]],
['queryoperator',[97,291,292,293,294,295,296,297,298,300,301]],
['operátor',[97,297,298,300,301]],
['queryvalue',[97,291,292,293,294,295,296,297,299,300,302]],
['monetáris',[97,300]],
['monetary',[97,300]],
['softwareid',[97,126,128,141,303,308,726,740,741,766,804,830,836,1083]],
['softwarename',[97,126,128,141,303,310,726,766,804,830,839,1083]],
['softwareoperation',[97,126,128,141,303,311,726,740,743,766,804,830,840,1083]],
['softwaremainversion',[97,126,128,141,303,309,726,740,742,766,804,830,838,1083]],
['főverziója',[97,303,309,726,740,742,830,838]],
['main',[97,303,309,726,740,742,830,838,890,929,931,952,953,961,962,1165,1258]],
['softwaredevname',[97,126,128,141,303,306,726,766,804,830,833,1083]],
['fejlesztőjének',[97,303,304,305,306,307,726,830,831,832,833,834]],
['developer',[97,303,304,305,306,307,726,830,831,832,833,834]],
['softwaredevcontact',[97,126,128,141,303,304,726,766,804,830,831,1083]],
['elérhetősége',[97,303,304,726,830,831]],
['contact',[97,303,304,726,830,831]],
['softwaredevcountrycode',[97,126,128,141,303,305,726,766,804,830,832,1083]],
['iso-3166',[97,303,305,726,830,832]],
['alpha2',[97,303,305,726,830,832]],
['országkódja',[97,303,305,726,830,832]],
['softwaredevtaxnumber',[97,126,128,141,303,307,726,766,804,830,834,1083]],
['taxpayeraddressitemtype',[97,312,315,316,726,841,844,845]],
['címsor',[97,312,315,316,726,841,844,845]],
['item',[97,312,315,316,338,341,418,423,424,430,431,432,442,452,489,491,492,545,546,547,552,553,554,556,557,558,562,563,564,565,566,568,569,570,571,575,578,580,581,584,588,590,597,598,599,624,726,797,800,841,844,845,890,932,934,935,936,937,938,939,941,942,945,1002,1122,1124,1165,1174,1175,1176,1331]],
['taxpayeraddresstype',[97,312,314,316]],
['taxpayeraddress',[97,312,313,316,726,841,842,845]],
['detailedaddresstype',[97,312,313,382,383,384,386,726,841,842,1165,1177,1178,1214]],
['címadatai',[97,312,313,726,841,842]],
['taxpayeraddresslisttype',[97,315,317,320,726,844,846,849]],
['lista',[97,315,317,320,726,730,828,844,846,849,883,1165,1207]],
['list',[97,315,317,320,418,717,726,730,747,748,757,761,782,828,829,844,846,849,855,860,862,875,883,890,986,1002,1011,1012,1035,1037,1038,1039,1084,1089,1127,1128,1165,1188,1207,1339,1403,1408,1411]],
['taxpayeraddressitem',[97,315,316,320,726,844,845,849]],
['taxpayername',[97,277,317,321,726,810,813,846,850,905,909,1075,1165,1274,1279,1305,1308]],
['taxpayershortname',[97,277,317,322,726,810,813,846,851,905,909,1075,1165,1274,1279,1305,1309]],
['rövidített',[97,317,322,726,846,851]],
['shortened',[97,317,322,726,846,851]],
['taxnumberdetail',[97,277,317,319,726,846,848,1075]],
['taxnumbertype',[97,317,319,382,405,418,471,472,495,499,612,617,671,674,679,726,846,848,890,976,979,984,1165,1201,1202,1301,1305,1306,1307]],
['részletes',[97,317,319,382,383,384,386,418,481,726,846,848,1165,1177,1178,1214]],
['detailed',[97,317,319,382,383,384,386,418,481,726,846,848,1165,1177,1178,1214]],
['vatgroupmembership',[97,277,317,323,726,846,852,1075]],
['tagsága',[97,317,323,726,846,852]],
['membership',[97,317,323,726,846,852]],
['taxpayeraddresslist',[97,277,317,320,726,846,849,1075]],
['tokenexchangeresponsetype',[97,324,367]],
['tokenexchange',[97,324,366,367]],
['encodedexchangetoken',[97,324,325,367]],
['aes-128',[97,324,325]],
['algoritmussal',[97,324,325,726,830,835]],
['alakja',[97,324,325]],
['tokenvalidityfrom',[97,324,326,367]],
['érvényességének',[97,324,326,327]],
['validity',[97,324,326,327,726,816,825,826]],
['tokenvalidityto',[97,324,327,367]],
['transactiontype',[97,328,331,338]],
['transactionresponsetype',[97,336,349,351]],
['közös',[97,336,418,504,507,532]],
['requested',[97,336,337,726,784,786,788,1002,1077,1081]],
['technicalannulment',[97,331,338,345]],
['itemcount',[97,331,338,341]],
['tételeinek',[97,338,341]],
['invoiceexchange',[97,338,341]],
['generalerrorresponse',[97,347]],
['manageannulmentrequest',[97,348]],
['kérésének',[97,348,350,352,354,356,360,362,364,366]],
['root',[97,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,418,709]],
['manageannulmentresponse',[97,349]],
['válaszának',[97,349,351,353,355,357,358,359,361,363,365,367]],
['manageinvoicerequest',[97,350]],
['manageinvoiceresponse',[97,351]],
['queryinvoicechaindigestrequest',[97,352]],
['queryinvoicechaindigestresponse',[97,353]],
['queryinvoicecheckrequest',[97,354]],
['queryinvoicecheckresponse',[97,355]],
['queryinvoicedatarequest',[97,356]],
['queryinvoicedataresponse',[97,357]],
['queryinvoicedigestrequest',[97,358]],
['queryinvoicedigestresponse',[97,359]],
['querytaxpayerrequest',[97,360,1002,1151]],
['querytaxpayerresponse',[97,361,1002,1152]],
['querytransactionlistrequest',[97,362]],
['querytransactionlistresponse',[97,363]],
['querytransactionstatusrequest',[97,364]],
['querytransactionstatusresponse',[97,365]],
['tokenexchangerequest',[97,366]],
['tokenexchangeresponse',[97,367]],
['countrycode',[313,382,384,385,386,389,399,402,487,842,1165,1178,1179,1214,1217,1295,1298]],
['region',[313,382,384,385,386,396,399,404,487,842,1165,1178,1179,1214,1224,1295,1300]],
['postalcode',[313,382,384,385,386,394,399,403,487,842,1165,1178,1179,1214,1222,1295,1299]],
['city',[313,382,384,385,386,388,399,401,487,842,1165,1178,1179,1214,1216,1295,1297]],
['streetname',[313,382,384,386,398,842,1165,1178,1214,1226]],
['publicplacecategory',[313,382,384,386,395,842,1165,1178,1214,1223]],
['building',[313,382,384,386,387,842,1165,1178,1214,1215]],
['staircase',[313,382,384,386,397,842,1165,1178,1214,1225]],
['floor',[313,382,384,386,391,399,400,842,1165,1178,1214,1219,1295,1296]],
['door',[313,382,384,386,390,399,400,842,1165,1178,1214,1218,1295,1296]],
['lotnumber',[313,382,384,386,392,842,1165,1178,1214,1220]],
['taxpayerid',[319,382,405,407,471,472,475,499,617,674,679,848,931,953,962,979,984,1165,1201,1202,1205,1258,1263,1301,1303,1306,1307]],
['vatcode',[319,382,405,408,471,472,475,499,617,674,679,848,979,984,1165,1201,1202,1205,1301,1304,1306,1307]],
['countycode',[319,382,405,406,471,472,475,499,617,674,679,848,979,984,1165,1201,1202,1205,1301,1302,1306,1307]],
['paper',[382,409,418,721]],
['papír',[382,409,418,721]],
['alapú',[382,409,726,740,743,757,759,765,769,777,779,801,830,840,885]],
['formában',[382,409]],
['előállított',[382,409]],
['non-edi',[382,409]],
['unknown',[382,409]],
['szoftver',[382,409,726,765,766,789,792,795,797,798,801,804,830,835,837,883,1002,1121,1122,1161,1162]],
['képes',[382,409]],
['azonosítani',[382,409]],
['kiállításkor',[382,409]],
['ismert',[382,409]],
['cannot',[382,409]],
['identify',[382,409]],
['normal',[382,410,418,547,568,569,1002,1013,1026,1100,1113,1165,1320]],
['normál',[382,410,418,547,568,569,1002,1013,1026,1100,1113,1165,1320]],
['egyszerűsített',[382,410,418,552,568,569,570,595,655,661,665,666,667,689,693,890,929,1002,1013,1016,1028,1136,1137,1165,1320,1322,1339,1389,1397,1398,1399]],
['gyűjtő',[382,410,418,430,432,547,568,573,726,855,856,890,932,933,964,965,1165,1190,1191]],
['simplified',[382,410,418,552,568,569,570,595,655,661,665,666,667,689,693,890,972,974,1002,1013,1016,1028,1136,1137,1165,1320,1322,1339,1389,1397,1398,1399]],
['aggregate',[382,410,418,430,431,432,547,568,573,633,635]],
['gyűjtőszámla',[382,410,418,430,431]],
['2010-01-01',[382,411,1165,1321]],
['sorszám',[382,412,414,890,920,927,1165,1232,1235,1272,1277,1322,1324]],
['maxinclusive',[382,412,418,723,726,732,734,878]],
['2010-01-01t00',[382,413]],
['számlaművelethez',[382,414]],
['tételszám',[382,415,1165,1332]],
['nonnegativeinteger',[382,415,726,732,734,735,757,763,764,777,778,797,800,890,920,927,1002,1013,1019,1023,1030,1032,1033,1037,1038,1049,1052,1053,1100,1104,1108,1118,1119,1165,1209,1212,1232,1235,1272,1277,1332,1339,1340,1342,1347,1351,1352,1368,1389,1402]],
['pénzérték',[382,416,1165,1334]],
['számjegy',[382,405,406,408,416,418,722,890,988,1165,1241,1243,1301,1302,1304,1334]],
['tizedesjegyet',[382,416,418,722,890,988,1165,1334]],
['tartalmazhat',[382,416,418,722,890,988,1165,1334]],
['money',[382,416,1165,1334]],
['input',[382,416,1165,1312,1313,1334]],
['digits',[382,405,406,416,418,722,890,988,1165,1301,1302,1334]],
['that',[382,383,416,418,722,726,757,761,765,768,789,790,791,792,793,794,795,796,828,829,890,988,989,995,998,1002,1010,1011,1012,1037,1039,1117,1118,1134,1135,1159,1160,1165,1177,1334,1339,1386,1388]],
['include',[382,416,418,722,723,890,988,1165,1334]],
['places',[382,416,418,722,723,726,753,755,756,878,890,988,1165,1334]],
['fractiondigits',[382,416,418,713,722,723,726,878,890,988,1165,1328,1334]],
['transfer',[382,417,989,990,991]],
['banki',[382,417]],
['átutalás',[382,417]],
['készpénz',[382,417,1165,1251,1254,1336]],
['card',[382,417,890,891,893,989,990,991,1165,1241,1243,1245,1247,1251,1253,1257,1313,1320,1322,1336,1339,1352,1369,1370,1371,1372,1373,1374,1375,1376]],
['bankkártya',[382,417,1165,1336]],
['hitelkártya',[382,417,1165,1336]],
['helyettesítő',[382,417,1165,1336]],
['eszköz',[382,417,418,433,568,587,602,603,604,701,726,883,1165,1336]],
['debit',[382,417,1165,1336]],
['credit',[382,417,1165,1336]],
['other',[382,417,418,442,509,510,512,514,568,571,574,595,602,604,612,614,701,710,714,717,721,726,732,738,872,885,890,938,939,952,954,985,986,989,990,991,995,997,998,1002,1100,1115,1157,1158,1165,1170,1171,1172,1173,1227,1228,1229,1251,1256,1264,1265,1272,1273,1312,1313,1316,1319,1320,1322,1333,1336,1338,1339,1352,1362,1365,1380,1385,1386,1388,1403,1405,1408]],
['cash-substitute',[382,417,1165,1336]],
['instrument',[382,417,1165,1251,1267,1268,1269,1312,1313,1336,1339,1352,1355]],
['voucher',[382,417,989,990,991,1165,1313]],
['utalvány',[382,417,1165,1313]],
['váltó',[382,417]],
['pénzhelyettesítő',[382,417]],
['bill',[382,417]],
['non-cash',[382,417]],
['addresstype',[382,383,418,465,466,495,496,612,615,671,676,890,976,981,1165,1177,1195,1196,1245,1246,1280,1305]],
['amely',[382,383,418,471,473,475,726,797,799,1165,1177]],
['egyszerű',[382,383,385,399,1165,1177,1179,1295]],
['címet',[382,383,1165,1177]],
['format',[382,383,726,868,869,871,889,1002,1013,1014,1017,1049,1050,1055,1091,1092,1093,1100,1101,1110,1165,1177,1339]],
['includes',[382,383,1165,1177]],
['simple',[382,383,385,399,1165,1177,1179,1295]],
['simpleaddress',[382,383,385,466,496,615,676,810,812,813,905,908,909,928,981,1165,1177,1179,1196,1246,1274,1278,1279,1280,1305]],
['simpleaddresstype',[382,383,385,399,418,484,487,1165,1177,1179,1295]],
['detailedaddress',[382,383,384,466,496,615,676,810,812,813,905,908,909,928,981,1165,1177,1178,1196,1246,1274,1278,1279,1280,1305]],
['címadatok',[382,386,399,400,1165,1214,1295,1296]],
['tartomány',[382,386,396,399,404,1165,1214,1224,1295,1300]],
['kódja',[382,386,396,399,404,418,442,445,457,460,461,669,670,717,726,744,745,830,835,872,890,986,1165,1214,1224,1245,1248,1264,1265,1295,1300]],
['amennyiben',[382,386,394,396,399,403,404,418,509,519,520,671,675,726,747,752,890,976,980,1002,1013,1026,1100,1113,1165,1214,1222,1224,1295,1299,1300]],
['értelmezhető',[382,386,394,396,399,403,404,1165,1214,1222,1224,1295,1299,1300]],
['adott',[382,386,396,399,404,418,430,431,568,583,647,649,650,651,661,662,663,683,684,685,686,687,688,698,699,700,714,726,855,857,862,863,890,938,941,944,964,966,967,985,1002,1004,1006,1046,1048,1064,1066,1118,1120,1122,1125,1127,1129,1165,1174,1175,1190,1192,1193,1194,1214,1224,1295,1300,1331]],
['országban',[382,386,396,399,404,1165,1214,1224,1295,1300]],
['alpha',[382,386,396,399,404,1165,1214,1224,1295,1300]],
['province',[382,386,396,399,404,1165,1214,1224,1295,1300]],
['appropriate',[382,386,396,399,404,1165,1214,1224,1295,1300]],
['given',[382,386,396,399,404,418,430,431,462,568,583,624,625,647,649,650,651,661,662,663,683,684,685,686,687,688,698,699,700,714,890,938,944,964,966,967,985,1002,1004,1006,1046,1048,1064,1066,1118,1120,1122,1125,1127,1129,1165,1190,1192,1193,1194,1214,1224,1295,1300]],
['értékkel',[382,386,394,399,403,1165,1214,1222,1295,1299]],
['kitölteni',[382,386,394,399,403,726,747,749,757,759,765,769,1002,1100,1111,1112,1165,1214,1222,1295,1299]],
['interpreted',[382,386,394,399,403,1002,1064,1065,1165,1214,1222,1295,1299]],
['need',[382,386,394,399,403,1165,1214,1222,1295,1299]],
['filled',[382,386,394,399,403,418,430,432,726,757,759,765,769,1165,1214,1222,1295,1299,1339,1389,1390]],
['település',[382,386,388,399,401,1165,1214,1216,1295,1297]],
['settlement',[382,386,388,399,401,418,509,526,1165,1214,1216,1295,1297]],
['közterület',[382,386,395,398,399,400,1165,1214,1223,1226,1295,1296]],
['public',[382,386,395,398,399,400,418,568,586,1165,1214,1223,1226,1295,1296]],
['place',[382,386,395,398,399,400,418,484,487,1165,1214,1223,1226,1295,1296]],
['jellege',[382,386,395,399,400,418,559,561,890,938,941,1165,1214,1223,1295,1296,1331]],
['category',[382,386,395,726,816,817,818,862,864,1165,1214,1223,1312]],
['házszám',[382,386,393,399,400,1165,1214,1221,1295,1296]],
['house',[382,386,393,399,400,1165,1214,1221,1295,1296]],
['Épület',[]],
['lépcsőház',[382,386,397,1165,1214,1225]],
['emelet',[382,386,391,399,400,1165,1214,1219,1295,1296]],
['ajtó',[382,386,390,399,400,1165,1214,1218,1295,1296]],
['helyrajzi',[382,386,392,399,400,1165,1214,1220,1295,1296]],
['címtípus',[382,399,1165,1295]],
['additionaladdressdetail',[382,385,399,400,487,1165,1179,1295,1296]],
['további',[382,399,400,418,419,568,571,602,604,701,890,900,901,938,939,1165,1166,1174,1295,1296]],
['further',[382,399,400,726,757,763,764,1002,1013,1019,1020,1023,1100,1104,1108,1118,1119,1165,1295,1296]],
['adóalany',[382,405,407,1165,1258,1263,1301,1303]],
['törzsszáma',[382,405,407,1165,1258,1263,1301,1303]],
['csoportos',[382,405,407,1165,1258,1263,1301,1303]],
['csoportazonosító',[382,405,407,418,471,472,473,475,671,674,679,890,976,979,984,1002,1013,1018,1100,1103,1165,1201,1202,1203,1205,1258,1263,1301,1303,1305,1306]],
['taxation',[382,405,407,408,418,484,556,557,562,563,564,568,576,689,690,694,716,1165,1258,1263,1301,1303,1304]],
['arrangement',[382,405,407,1165,1258,1263,1301,1303]],
['adóalanyiság',[382,405,408,1165,1301,1304]],
['típusának',[382,405,408,1165,1301,1304]],
['jelzésére',[382,405,408,1165,1301,1304]],
['indicate',[382,405,408,1165,1301,1304]],
['customervatstatustype',[418,465,470,710,1165,1195,1200,1316]],
['customers',[418,465,470,710,1165,1195,1200,1316]],
['domestic',[418,473,475,710,1165,1203,1205,1316]],
['belföldi',[418,473,475,671,679,689,694,710,724,726,883,890,976,984,1002,1071,1072,1073,1151,1152,1165,1203,1205,1316]],
['alany',[418,710,1165,1316]],
['subject',[418,710,1165,1316]],
['természetes',[418,568,581,710,1165,1316]],
['személy',[418,710,1165,1316]],
['külföldi',[418,430,432,710,1165,1316]],
['non-vat',[418,710,1165,1316]],
['non-natural',[418,710,1165,1316]],
['foreign',[418,430,432,509,514,710,1165,1236,1251,1255,1316]],
['natural',[418,568,577,581,710,1165,1316]],
['datanametype',[418,419,421,711,1165,1166,1168,1317]],
['adatmező',[418,419,420,421,711,1165,1166,1167,1168,1317]],
['ekaeridtype',[418,493,494,712]],
['ekÁer',[]],
['exchangeratetype',[418,426,427,430,432,509,514,713,1165,1236,1240,1328]],
['Árfolyam',[]],
['rate',[418,426,427,430,432,489,491,509,514,547,551,552,555,627,630,632,647,648,649,650,651,661,664,680,682,683,684,685,686,687,688,689,697,698,699,700,713,719,723,726,855,857,858,859,862,863,1165,1236,1240,1328]],
['minexclusive',[418,713,1165,1328]],
['linenatureindicatortype',[418,568,583,714,890,938,944,985]],
['tételsor',[418,559,568,582,583,714,890,938,944,985]],
['termékértékesítés',[418,509,523,568,583,714,890,938,944,985]],
['nyújtás',[418,509,523,568,583,714,890,938,944,985]],
['jellegének',[418,559,568,582,583,714,890,938,944,985]],
['indication',[418,568,583,714,890,938,944,985]],
['nature',[418,568,583,714,890,938,941,944,985,1165,1331]],
['supply',[418,509,523,559,568,582,583,587,602,671,674,689,714,890,938,944,976,979,985,1339,1347,1348]],
['goods',[418,471,472,473,475,509,523,568,583,671,674,714,716,717,890,938,944,976,979,985,986,1165,1201,1202,1313,1331,1333]],
['services',[418,471,472,473,475,509,523,568,583,671,674,714,717,890,938,944,976,979,985,986,1002,1010,1011,1012,1134,1135,1165,1201,1202]],
['besorolható',[418,714,890,985]],
['non-qualifiable',[418,714,890,985]],
['lineoperationtype',[418,559,561,715]],
['számlatétel',[418,559,561,715]],
['marginschemetype',[418,689,690,716]],
['különbözet',[418,689,690,716,1339,1340,1346]],
['szabályozás',[418,689,690,716]],
['inputting',[418,716,718,890,987]],
['margin-scheme',[418,689,690,716]],
['travel',[418,716]],
['agency',[418,716]],
['utazási',[418,716]],
['irodák',[418,716]],
['agencies',[418,716]],
['second',[418,716]],
['hand',[418,716]],
['használt',[418,716,726,732,736,737,738,765,767,774,809,810,813,890,904,905,909,1002,1077,1081,1165,1272,1274,1279,1326,1327]],
['cikkek',[418,716]],
['second-hand',[418,716]],
['artwork',[418,716]],
['műalkotások',[418,716]],
['works',[418,716]],
['antiques',[418,716]],
['gyűjteménydarabok',[418,716]],
['régiségek',[418,716]],
['collector’s',[418,716]],
['items',[418,565,568,592,643,644,716,890,936,938,1165,1172,1173,1190,1192,1193,1194,1227,1229]],
['productcodecategorytype',[418,620,623,717,890,957,960,986]],
['termékkód',[418,618,619,620,621,622,623,717,718,890,955,956,957,958,959,960,986,987]],
['fajtájának',[418,620,623,717,890,957,960,986]],
['jelölésére',[418,717,890,986]],
['used',[418,484,485,509,514,717,726,732,736,737,765,767,774,809,810,813,890,904,905,909,986,1002,1013,1014,1084,1089,1100,1101,1165,1272,1274,1279,1326,1327,1339,1340,1344,1347,1349,1352,1377,1389,1400,1408,1412]],
['mark',[418,717,890,986]],
['kind',[418,423,424,620,623,717,890,957,960,986]],
['vtsz',[418,620,623,717,726,816,827,829,890,957,960,986]],
['vámtarifa',[418,717,726,816,827,890,986]],
['customs',[418,717,726,816,827,890,986]],
['tariff',[418,717,726,816,827,890,986]],
['jegyzék',[418,717,890,986]],
['kombinált',[418,717,890,986]],
['nómenklatúra',[418,717,890,986]],
['rendelet',[418,484,568,576,717,890,986]],
['melléklete',[418,717,890,986,989,995,996,997]],
['combined',[418,717,890,986]],
['nomenclature',[418,717,890,986]],
['annex',[418,717,890,986,989,995,997]],
['jövedéki',[418,568,577,671,673,717,890,976,978,986]],
['törvény',[418,509,526,539,543,568,592,643,644,689,696,717,890,915,919,986]],
['lxviii',[418,484,485,671,673,717,890,976,978,986]],
['e-tko',[418,717,890,986]],
['adminisztratív',[418,717,890,986]],
['hivatkozási',[418,535,717,890,910,986]],
['administrative',[418,717,890,986]],
['defined',[418,717,890,986]],
['excise',[418,484,485,568,577,671,673,717,890,976,978,986]],
['duties',[418,568,577,717,890,986]],
['termék',[418,462,463,565,566,568,571,579,627,631,717,721,726,816,822,823,890,936,937,938,939,943,986,1002,1035,1036,1165,1312]],
['korm',[418,717,890,986]],
['melléklet',[418,717,890,986,989,995,998,1001,1339,1386,1388,1415]],
['csomagolószer-katalógus',[418,717,890,986]],
['packaging',[418,717,721,890,986,1002,1035,1036]],
['catalogue',[418,717,890,986]],
['according',[418,509,526,539,543,568,590,592,593,612,624,627,631,633,634,643,644,647,717,726,747,750,751,753,754,853,854,890,891,898,899,915,919,920,924,925,986,1002,1127,1128,1165,1272,1275]],
['title',[418,717,890,986,1165,1313,1339,1340,1343]],
['schedule',[418,717,890,986]],
['government',[418,717,890,986]],
['decree',[418,484,568,576,717,890,986]],
['környezetvédelmi',[418,568,590,624,626,638,717,890,986]],
['termékkódja',[418,717,890,986]],
['environmental',[418,568,590,624,626,638,717,890,986]],
['protection',[418,568,590,624,626,638,717,890,986]],
['Építményjegyzék',[]],
['classification',[418,717,890,986]],
['inventory',[418,717,890,986]],
['construction',[418,717,890,986]],
['teszor',[418,717,890,986]],
['termékek',[418,717,890,986,1002,1037,1038]],
['szolgáltatások',[418,717,890,986,1002,1010,1011,1012,1134,1135]],
['osztályozási',[418,717,890,986]],
['rendszere',[418,717,890,986]],
['activity',[418,717,890,986]],
['regulation',[418,717,890,986]],
['vállalkozás',[418,717,890,986]],
['képzett',[418,717,726,765,775,890,986]],
['enterprise',[418,509,525,717,890,986]],
['productcodevaluetype',[418,620,622,718,890,957,959,987]],
['codes',[418,442,445,446,457,460,477,568,589,618,620,669,718,726,757,761,855,890,938,946,955,957,987]],
['productfeemeasuringunittype',[418,627,630,719]],
['díjtétel',[418,627,630,719]],
['egység',[418,509,514,568,593,594,627,632,719,725,726,727,730,731,732,733,816,824,880,888,890,938,948,949]],
['unit',[418,430,432,489,491,492,509,514,568,581,593,594,595,596,627,630,632,719,725,726,747,749,801,804,807,816,824,880,888,890,938,948,949,950,951]],
['darab',[418,627,630,719,725,726,797,800,888,1002,1122,1124]],
['piece',[418,627,630,719,725,726,888]],
['kilogramm',[418,719,725,726,888]],
['kilogram',[418,433,436,462,463,719,725,726,888]],
['productfeeoperationtype',[418,633,637,720]],
['termékdíj',[418,462,463,568,585,588,612,624,625,626,627,628,629,632,633,634,635,636,637,638,639,720]],
['összesítés',[418,418,633,637,647,655,655,660,661,665,666,667,720,890,964,972,974,1165,1188,1189,1190]],
['summary',[418,539,543,544,633,637,647,652,665,668,720,890,891,892,915,919,968,972,975,989,990,991,1165,1319,1320,1322,1331]],
['refund',[418,633,637,720]],
['visszaigénylés',[418,720]],
['deposit',[418,568,575,633,637,720]],
['raktárba',[418,633,637,720]],
['szállítás',[418,720]],
['productstreamtype',[418,462,464,721]],
['termékáram',[418,462,464,624,625,721]],
['stream',[418,462,464,624,625,721]],
['battery',[418,721,726,732,734]],
['akkumulátor',[418,721,726,732,734]],
['csomagolószer',[418,721]],
['products',[418,721,726,828,829,1002,1037,1038,1039,1141]],
['petrol',[418,721]],
['kőolajtermék',[418,721]],
['petroleum',[418,721]],
['elektromos',[418,721]],
['elektronikai',[418,721]],
['berendezés',[418,721]],
['electric',[418,721]],
['appliance',[418,721]],
['equipment',[418,721]],
['tire',[418,721]],
['gumiabroncs',[418,721]],
['reklámhordozó',[418,721]],
['printing',[418,721,726,872]],
['plastic',[418,721]],
['műanyag',[418,721]],
['chemical',[418,721]],
['vegyipari',[418,721]],
['irodai',[418,721]],
['stationery',[418,721]],
['quantitytype',[418,433,435,436,462,463,484,485,568,591,595,596,627,631,701,702,703,704,705,707,708,722,890,938,947,950,951,988]],
['mennyiségi',[418,568,581,593,594,722,725,726,888,890,938,948,949,988]],
['quantity',[418,484,485,566,568,591,627,631,722,890,937,938,947,988]],
['ratetype',[418,489,491,680,682,689,693,697,723]],
['arány',[418,723]],
['közötti',[418,723]],
['tizedesjegy',[418,723,726,753,755,756]],
['pontossággal',[418,723,726,753,755,756]],
['between',[418,723]],
['takeovertype',[418,638,640,724]],
['átvállalás',[418,638,640,724]],
['adatait',[418,568,709,724,890,938,1002,1049,1054]],
['takeover',[418,624,626,638,640,724]],
['lxxxv',[418,568,590,612,624,633,634,724]],
['bekezdés',[418,724]],
['első',[418,509,520,602,608,724,1002,1013,1018,1027,1071,1072,1091,1096,1100,1103,1114]],
['forgalomba',[418,602,608,724]],
['hozó',[418,724]],
['vállalja',[418,638,639,724]],
['termékdíj-kötelezettségét',[418,638,639,724]],
['takes',[418,638,639,724]],
['buyer’s',[418,724]],
['liability',[418,638,639,724]],
['basis',[418,724]],
['paragraph',[418,484,568,576,577,578,586,612,633,634,724]],
['alpontja',[418,724]],
['szerződés',[418,724]],
['alapján',[418,462,568,592,624,625,643,644,689,691,724]],
['átvállalja',[418,724]],
['contract',[418,440,441,442,443,484,485,724]],
['supplier’s',[418,638,639,671,673,724,890,976,978]],
['sub-point',[418,724]],
['unitofmeasuretype',[418,568,593,725,726,816,824,888,890,938,948]],
['mennyiség',[418,568,591,725,726,816,824,880,888,890,938,947]],
['measure',[418,568,581,593,594,725,726,816,824,880,888,890,938,948,949]],
['metrikus',[418,725,726,888]],
['tonna',[418,725,726,888]],
['metric',[418,725,726,727,728,729,888]],
['kilowatt',[418,725,726,888]],
['hour',[418,725,726,888]],
['minute',[418,725,726,888]],
['perc',[418,725,726,874,888]],
['month',[418,725,726,888]],
['hónap',[418,725,726,888]],
['liter',[418,484,485,725,726,888]],
['kilometer',[418,725,726,888]],
['kilométer',[418,725,726,888]],
['cubic',[418,701,702,725,726,888]],
['meter',[418,725,726,888]],
['köbméter',[418,725,726,888]],
['méter',[418,725,726,888]],
['linear',[418,725,726,888]],
['folyóméter',[418,725,726,888]],
['carton',[418,725,726,888]],
['karton',[418,725,726,888]],
['pack',[418,725,726,888]],
['csomag',[418,725,726,888]],
['saját',[418,620,621,622,725,726,888,890,957,958,959]],
['megnevezés',[418,725,726,816,818,822,888]],
['additionaldatatype',[418,419,509,510,568,571,890,900,901,938,939,1165,1166,1170,1171,1174,1175,1272,1273]],
['leírására',[418,419,504,507,532,890,891,895,900,901,1165,1166,1174]],
['description',[418,419,420,489,490,568,579,726,890,900,901,938,943,1165,1166,1167,1174,1339,1408,1410]],
['dataname',[418,419,421,510,571,901,939,1165,1166,1168,1171,1175,1273]],
['datadescription',[418,419,420,510,571,901,939,1165,1166,1167,1171,1175,1273]],
['tartalmának',[418,419,420,1165,1166,1167,1283,1288,1289,1294]],
['szöveges',[418,419,420,1165,1166,1167]],
['leírása',[418,419,420,481,482,483,489,490,680,681,1165,1166,1167]],
['datavalue',[418,419,422,510,571,901,939,1165,1166,1169,1171,1175,1273]],
['advancedatatype',[418,423,568,572]],
['előleghez',[418,423,568,572]],
['kapcsolódó',[418,423,425,426,568,571,572,592,643,644,890,938,939,1002,1126,1127,1128,1163,1164,1339,1340,1342]],
['advance',[418,423,424,425,426,427,428,429,568,572,1165,1313]],
['related',[418,423,425,426,527,528,529,531,568,572,590,624,890,904,906,989,995,997]],
['advanceindicator',[418,423,424,572]],
['Értéke',[]],
['tétel',[418,423,424,430,431,547,548,549,550,552,553,554,556,557,558,559,560,562,563,564,565,566,568,569,570,575,578,581,584,585,597,598,599,890,932,934,935,936,937,938,941,942,945,1165,1174,1176,1331]],
['előleg',[418,423,424,425,426,429,1165,1313]],
['jellegű',[418,423,424,568,575]],
['charge',[418,423,424,568,585,627,631,689,694,726,732,734,1165,1331]],
['advancepaymentdata',[418,423,425,572]],
['advancepaymentdatatype',[418,423,425,426]],
['fizetéshez',[418,423,425]],
['előlegfizetéshez',[418,426]],
['advanceoriginalinvoice',[418,425,426,428]],
['előlegszámlának',[418,426,428]],
['amelyben',[418,426,428]],
['előlegfizetés',[418,426,427,428]],
['containing',[418,426,428,556,557,562,563,564,726,828,829,1002,1037,1039]],
['advancepaymentdate',[418,425,426,429]],
['fizetésének',[418,426,429]],
['advanceexchangerate',[418,425,426,427]],
['során',[418,426,427,484,485,509,523,726,732,737,738,797,799,1002,1040,1041,1042,1043]],
['alkalmazott',[418,426,427,509,514,689,697,1002,1003,1004,1007,1009,1010,1011,1013,1028,1030,1034,1035,1037,1040,1044,1045,1046,1049,1056,1063,1064,1067,1071,1073,1077,1084,1091,1097,1100,1115,1117,1118,1121,1122,1126,1127,1165,1236,1240,1339,1340,1344,1347,1349,1352,1377,1389,1400,1408,1412]],
['árfolyam',[418,418,426,427,430,432,509,514,713,1165,1328]],
['applied',[418,426,427,430,432,509,514,689,697,726,862,864]],
['aggregateinvoicelinedatatype',[418,430,568,573]],
['speciális',[418,430,1002,1013,1028,1136,1137]],
['adatokat',[418,430,726,789,791,794,989,990,993]],
['including',[418,430,568,569,620,890,938,957]],
['special',[418,430,1002,1013,1028,1136,1137]],
['lineexchangerate',[418,430,432,573]],
['tételhez',[418,430,432,489,491,492,568,571,580,890,938,939]],
['egységre',[418,430,432]],
['vonatkoztatva',[418,430,432]],
['pénznemben',[418,430,432]],
['kiállított',[418,430,432,726,757,763,869,1002,1013,1019,1030,1032,1033,1049,1052,1053,1067,1100,1104,1150]],
['kitöltendő',[418,430,432,547,552,568,569,570,890,932,938,942]],
['pertaining',[418,430,432]],
['this',[418,430,432,509,511,518,726,797,798,799,1002,1004,1006,1013,1014,1021,1024,1025,1046,1048,1056,1059,1061,1064,1066,1077,1081,1084,1087,1090,1091,1095,1100,1101,1106,1111,1112,1118,1120,1122,1125,1127,1129]],
['linedeliverydate',[418,430,431,573]],
['aircrafttype',[418,433,602,603]],
['légi',[418,433,602,603]],
['közlekedési',[418,433,568,587,602,603,604,701]],
['aircraft',[418,433,587,602,603]],
['takeoffweight',[418,433,436,603]],
['felszállási',[418,433,436]],
['tömeg',[418,433,436]],
['kilogrammban',[418,433,436,462,463]],
['take-off',[418,433,436]],
['weight',[418,433,436,462,463]],
['aircargo',[418,433,434,603]],
['jármű',[418,433,434,484,488,602,605,705,706]],
['tartozik',[418,433,434,705,706]],
['means',[418,433,434,568,587,602,705,706]],
['transport',[418,433,434,493,494,568,587,602,705,706]],
['exempt',[418,433,434,689,705,706]],
['from',[418,433,434,462,624,625,671,675,705,706,726,732,739,784,786,797,798,816,825,890,976,980,1002,1013,1024,1025,1035,1036,1091,1095,1100,1111,1112]],
['operationhours',[418,433,435,603]],
['repült',[418,433,435]],
['órák',[418,433,435,705,708]],
['aviated',[418,433,435]],
['hours',[418,433,435,705,708]],
['batchinvoicetype',[418,437,532,533]],
['documents',[418,437,532,533,1002,1013,1028,1100,1115,1136,1137,1157,1158]],
['invoicetype',[418,437,439,532,534,539]],
['single',[418,437,439,532,534,539,890,915]],
['contractnumberstype',[418,440,442,443]],
['szerződésszámok',[418,440]],
['contractnumber',[418,440,441,443]],
['szerződésszám',[418,440,441,442,443]],
['conventionalinvoiceinfotype',[418,442,509,512,568,574]],
['számlafeldolgozást',[418,442,509,512,568,574]],
['segítő',[418,442,509,512,568,574]],
['egyezményesen',[418,442,509,512,568,574]],
['nevesített',[418,442,509,512,568,574]],
['conventionally',[418,442,509,512,568,574]],
['named',[418,442,509,512,568,574]],
['assist',[418,442,509,512,568,574]],
['ordernumbers',[418,442,454,512,574]],
['ordernumberstype',[418,442,454,610]],
['megrendelésszám',[418,442,454,610,611]],
['order',[418,442,454,610,611,726,784,786]],
['deliverynotes',[418,442,447,512,574]],
['deliverynotestype',[418,442,447,479]],
['szállítólevél',[418,442,447,479,480]],
['notes',[418,442,447,479]],
['shippingdates',[418,442,456,512,574]],
['shippingdatestype',[418,442,456,645]],
['szállítási',[418,442,456,645,646]],
['shipping',[418,442,456,645,646]],
['dates',[418,442,456,645]],
['contractnumbers',[418,442,443,512,574]],
['suppliercompanycodes',[418,442,457,512,574]],
['suppliercompanycodestype',[418,442,457,669]],
['vállalati',[418,442,445,457,460,461,669,670]],
['customercompanycodes',[418,442,445,512,574]],
['customercompanycodestype',[418,442,445,460]],
['dealercodes',[418,442,446,512,574]],
['dealercodestype',[418,442,446,477]],
['beszállító',[418,442,446,477,478]],
['dealer',[418,442,446,477,478]],
['costcenters',[418,442,444,512,574]],
['costcenterstype',[418,442,444,458]],
['költséghely',[418,442,444,458,459]],
['cost',[418,442,444,458,459,1165,1313]],
['centers',[418,442,444,458]],
['projectnumbers',[418,442,455,512,574]],
['projectnumberstype',[418,442,455,641]],
['projektszám',[418,442,455,641,642]],
['generalledgeraccountnumbers',[418,442,449,512,574]],
['generalledgeraccountnumberstype',[418,442,449,500]],
['főkönyvi',[418,442,449,500,501]],
['ledger',[418,442,449,500,501]],
['glnnumberssupplier',[418,442,451,512,574]],
['glnnumberstype',[418,442,450,451,502]],
['kiállítói',[418,442,451]],
['globális',[418,442,450,451,502,503]],
['helyazonosító',[418,442,450,451,502,503]],
['global',[418,442,450,451,502,503]],
['location',[418,442,450,451,502,503,726,747,749,753,809,811,812,890,904,908,920,928,1002,1040,1043,1165,1272,1278]],
['glnnumberscustomer',[418,442,450,512,574]],
['vevői',[418,442,450,1165,1283,1284,1315]],
['materialnumbers',[418,442,453,512,574]],
['materialnumberstype',[418,442,453,600]],
['anyagszám',[418,442,453,600,601]],
['material',[418,442,453,600,601]],
['itemnumbers',[418,442,452,512,574]],
['itemnumberstype',[418,442,452,545]],
['cikkszám',[418,442,452,545,546]],
['ekaerids',[418,442,448,512,574]],
['ekaeridstype',[418,442,448,493]],
['ekaer',[418,442,448,493,494]],
['id-s',[418,442,448,493]],
['költséghelyek',[418,458]],
['costcenter',[418,444,458,459]],
['center',[418,458,459]],
['kódjai',[418,460,669]],
['customercompanycode',[418,445,460,461]],
['customerdeclarationtype',[418,462,624,625]],
['nyilatkozata',[418,462,624,625]],
['mentesül',[418,462,624,625]],
['megfizetése',[418,462,624,625]],
['alól',[418,462,624,625]],
['akkor',[418,462,509,518,519,520,624,625,726,747,752,777,778,1002,1013,1026,1100,1111,1112,1113]],
['érintett',[418,462,559,560,624,625,627,631,1002,1013,1021,1100,1106,1111,1112]],
['statement',[418,462,624,625]],
['purchaser',[418,462,624,625,638,639]],
['exempted',[418,462,624,625,671,675,890,976,980]],
['paying',[418,462,624,625]],
['then',[418,462,624,625,726,747,752,1002,1091,1095]],
['affected',[418,462,624,625]],
['productstream',[418,462,464,625]],
['productfeeweight',[418,462,463,625]],
['köteles',[418,462,463]],
['tömege',[418,462,463]],
['obliged',[418,462,463]],
['customerinfotype',[418,465,527,528,890,904,906,1165,1195]],
['customervatstatus',[418,465,470,528,906,1165,1195,1200]],
['customervatdata',[418,465,469,528,906,1165,1195,1199]],
['customervatdatatype',[418,465,469,473,1165,1195,1199,1203]],
['alanyisági',[418,465,469,473,1165,1195,1199,1203]],
['subjectivity',[418,465,469,473,1165,1195,1199,1203]],
['customeraddress',[418,465,466,528,906,1165,1195,1196]],
['címe',[418,465,466,495,496,612,615,671,676,890,976,981,1165,1195,1196,1245,1246]],
['customerbankaccountnumber',[418,465,467,528,906,1165,1195,1197]],
['bankszámlaszáma',[418,465,467,495,497,671,677,890,976,982,1165,1195,1197]],
['customertaxnumbertype',[418,471,473,475,1165,1201,1203,1205]],
['termékbeszerzés',[418,471,472,473,475,671,674,890,976,979,1165,1201,1202]],
['igénybevétele',[418,471,472,473,475,1165,1201,1202]],
['lehet',[418,471,473,475,890,920,927,1165,1201,1203,1205,1232,1235,1272,1277]],
['under',[418,471,472,473,475,671,674,683,684,685,686,687,688,689,691,698,699,700,890,976,979,1165,1201,1202]],
['purchase',[418,471,472,473,475,484,486,487,1165,1201,1202,1312]],
['when',[418,471,472,671,674,726,777,781,890,976,979,1002,1013,1021,1100,1106,1165,1201,1202]],
['communityvatnumber',[418,469,473,474,531,671,672,890,976,977,1165,1199,1203,1204]],
['thirdstatetaxid',[418,469,473,476,1165,1199,1203,1206]],
['harmadik',[418,473,476,1165,1203,1206]],
['országbeli',[418,473,476,1165,1203,1206]],
['third',[418,473,476,1165,1203,1206]],
['state',[418,473,476,726,732,747,750,751,757,758,759,760,762,765,768,789,790,816,823,829,865,867,872,873,1002,1030,1031,1049,1051,1165,1203,1206]],
['kódok',[418,477,726,860]],
['dealercode',[418,446,477,478]],
['deliverynote',[418,447,479,480]],
['note',[418,479,480]],
['detailedreasontype',[418,481,689,695,696]],
['mentesség',[418,481]],
['indokolása',[418,481]],
['justification',[418,481]],
['exemption',[418,481,547,551,552,555,647,648,661,664,689,695]],
['eset',[418,481,482,483,680,681]],
['kóddal',[418,481,482,680,681]],
['notation',[418,481,482,483,680,681]],
['reason',[418,481,483,695,696,890,910,911,912,1165,1312,1333]],
['szöveggel',[418,481,483]],
['dieseloilpurchasetype',[418,484,568,576]],
['gázolaj',[418,484,485,486,487,568,576]],
['adózottan',[418,484,568,576]],
['beszerzésének',[418,484,568,576]],
['acquisition',[418,484,568,576]],
['after',[418,484,568,576,726,747,748,750,862,864,879,1002,1040,1044,1142,1143]],
['purchaselocation',[418,484,487,576]],
['beszerzés',[418,484,486,487]],
['helye',[418,484,487,726,747,749,753,809,812,890,904,908,920,928,1165,1272,1278]],
['purchasedate',[418,484,486,576]],
['vehicleregistrationnumber',[418,484,488,576,893,1165,1241,1244]],
['dieseloilquantity',[418,484,485,576]],
['bérmunka-szolgáltatás',[418,484,485]],
['felhasznált',[418,484,485]],
['mennyisége',[418,484,485,627,631]],
['literben',[418,484,485]],
['fordítandó',[418,484,485]],
['helyett',[418,484,485]],
['diesel',[418,484,485]],
['work',[418,484,485,726,757,760,867]],
['machinery',[418,484,485]],
['hire',[418,484,485]],
['discountdatatype',[418,489,568,580]],
['Árengedmény',[]],
['discount',[418,489,490,491,492,568,580,1165,1331]],
['discountdescription',[418,489,490,580]],
['árengedmény',[418,418,489,489,490,491,492,568,580]],
['discountvalue',[418,489,492,580]],
['egységár',[418,489,491,492,568,595,596,890,938,950,951]],
['tartalmazza',[418,489,491,492,989,990,993,1002,1013,1025,1049,1054]],
['total',[418,489,492,1165,1190,1192,1193,1194]],
['included',[418,489,491,492,989,995,997]],
['price',[418,489,491,492,568,595,596,890,938,950,951]],
['discountrate',[418,489,491,580]],
['aránya',[418,489,491]],
['ekaerid',[418,448,493,494]],
['stands',[418,493,494]],
['trade',[418,493,494]],
['control',[418,493,494,890,920,926,972,973,989,990,1000,1165,1232,1272,1276,1335]],
['fiscalrepresentativetype',[418,495,527,529]],
['pénzügyi',[418,495,496,497,498,499,527,529]],
['képviselő',[418,495,496,497,498,499,527,529]],
['fiscal',[418,495,496,497,498,499,527,529,726,757,762,873]],
['representative',[418,495,496,497,498,499,527,529]],
['fiscalrepresentativetaxnumber',[418,495,499,529]],
['fiscalrepresentativename',[418,495,498,529]],
['fiscalrepresentativeaddress',[418,495,496,529]],
['fiscalrepresentativebankaccountnumber',[418,495,497,529]],
['megnyitott',[418,495,497,1339,1347,1351]],
['opened',[418,495,497,726,873,1339,1347,1351]],
['issuer',[418,495,497,527,531]],
['számlaszámok',[418,500]],
['generalledgeraccountnumber',[418,449,500,501]],
['glnnumber',[418,450,451,502,503]],
['invoicedetailtype',[418,509,527,530]],
['részletező',[418,509,527,530,890,900,904,907]],
['detail',[418,509,527,530,890,900,904,907,1165,1207,1208,1209]],
['teljesítés',[418,509,515,518]],
['keltével',[418,509,518]],
['exist',[418,509,518]],
['considered',[418,509,518,612,614]],
['such',[418,509,518,523,612,614]],
['invoicedeliveryperiodstart',[418,509,520,530]],
['időszakra',[418,509,519,520]],
['időszak',[418,509,515,519,520]],
['napja',[418,509,515,519,520]],
['first',[418,509,520,602,608,726,784,786,1002,1013,1018,1027,1071,1072,1091,1096,1100,1103,1114]],
['period',[418,509,515,519,520]],
['invoicedeliveryperiodend',[418,509,519,530]],
['invoiceaccountingdeliverydate',[418,509,515,530]],
['számviteli',[418,509,515,568,578]],
['accounting',[418,509,511,515,568,578]],
['accomplishment',[418,509,515]],
['event',[418,509,515,568,595,726,744,745,746,747,748,872,1165,1315]],
['periodicalsettlement',[418,509,523,530]],
['felek',[418,509,523]],
['időszakonkénti',[418,509,523]],
['elszámolásban',[418,509,523]],
['fizetésben',[418,509,523]],
['állapodnak',[418,509,523]],
['ellenértékét',[418,509,523]],
['meghatározott',[418,509,523,568,586,1002,1013,1017,1022,1100,1107]],
['időpontra',[418,509,523]],
['állapítják',[418,509,523]],
['where',[418,509,523,726,855,857,859]],
['agreement',[418,509,523]],
['parties',[418,509,523]],
['gives',[418,509,523]],
['rise',[418,509,523]],
['successive',[418,509,523]],
['statements',[418,509,523]],
['payments',[418,509,523,1165,1313]],
['relating',[418,509,523,989,995,997]],
['consideration',[418,509,523,556,557,562,563,564]],
['agreed',[418,509,523]],
['upon',[418,509,523]],
['applies',[418,509,523]],
['periods',[418,509,523]],
['smallbusinessindicator',[418,509,525,530]],
['kisadózó',[418,509,525]],
['marking',[418,509,511,524,525,526,547,551,552,555,559,568,582,647,648,661,664,689,690,694,695,890,932,933,964,965]],
['tax-bracket',[418,509,525]],
['currencycode',[418,509,513,530,1165,1236,1238,1255]],
['exchangerate',[418,509,514,530,1165,1236,1240,1255]],
['huf-tól',[418,509,514]],
['különböző',[418,509,514,620,890,957]],
['huf-ban',[418,509,514]],
['mentioned',[418,509,514]],
['utilitysettlementindicator',[418,509,526,530]],
['közmű',[418,509,526]],
['elszámoló',[418,509,526]],
['jelölése',[418,509,511,524,526,547,551,552,555,559,568,582,620,623,647,648,661,664,689,690,694,695,890,932,933,957,960,964,965]],
['clxxxviii',[418,509,526]],
['fact',[418,509,511,524,526,647,648,661,664]],
['utility',[418,509,526]],
['selfbillingindicator',[418,509,524,530]],
['Önszámlázás',[]],
['önszámlázás',[418,418,509,509,524,524]],
['self-billing',[418,509,524]],
['cashaccountingindicator',[418,509,511,530]],
['pénzforgalmi',[418,509,511]],
['elszámolás',[418,509,511]],
['indicated',[418,509,511]],
['conventionalinvoiceinfo',[418,509,512,530]],
['additionalinvoicedata',[418,509,510,530]],
['invoicedatatype',[418,504,709,890,929,930]],
['kelte',[418,504,506,612,613,890,891,896]],
['invoicemain',[418,504,507,709]],
['invoicemaintype',[418,504,507,532]],
['számlaadatok',[418,504,507,532]],
['describe',[418,504,507,532,890,891,895]],
['invoiceheadtype',[418,527,539,540]],
['fejléc',[418,527,890,904]],
['supplierinfo',[418,527,531,540]],
['supplierinfotype',[418,527,531,671,890,976]],
['customerinfo',[418,527,528,540,890,904,906,916]],
['fiscalrepresentativeinfo',[418,527,529,540]],
['invoicedetail',[418,527,530,540]],
['adata',[418,527,530,726,744,746]],
['batchinvoice',[418,507,532,533]],
['invoicereferencetype',[418,535,539,542]],
['invoicereference',[418,439,534,539,542]],
['invoicehead',[418,439,534,539,540]],
['egészét',[418,539,540,890,915,916]],
['jellemző',[418,539,540,890,915,916]],
['whole',[418,539,540,726,855,858,890,915,916,920,923,968,971,1165,1170,1227,1228]],
['linestype',[418,539,541,565,890,915,917,936]],
['productfeesummary',[418,439,534,539,544]],
['productfeesummarytype',[418,539,544,633]],
['termékdíjjal',[418,539,544,627,631]],
['kapcsolatos',[418,539,544,624,626,638,1002,1013,1014,1100,1101]],
['összesítő',[418,539,543,544,652,665,668,890,915,919,968,972,975,989,990,991,1165,1319,1320,1322,1331]],
['charges',[418,539,544,627,629,633,635,636]],
['invoicesummary',[418,439,534,539,543]],
['summarytype',[418,539,543,665,890,915,919,972]],
['cikkszámok',[418,545]],
['itemnumber',[418,452,545,546]],
['lineamountsnormaltype',[418,547,568,569]],
['completed',[418,547,552,568,569,570,890,932,938,942]],
['linenetamountdata',[418,547,549,569]],
['linenetamountdatatype',[418,547,549,562]],
['linevatrate',[418,547,551,552,555,569,570]],
['vatratetype',[418,547,551,552,555,647,648,661,664,689]],
['adómérték',[418,547,551,552,555,647,648,661,664,680,682,689]],
['adómentesség',[418,547,551,552,555,647,648,661,664,689,695]],
['linevatdata',[418,547,550,569]],
['linevatdatatype',[418,547,550,597]],
['linegrossamountdata',[418,547,548,569]],
['linegrossamountdatatype',[418,547,548,556]],
['bruttó',[418,547,548,552,553,554,556,557,558,568,595,647,649,652,653,654,661,662,663,665,668,683,684,685,890,932,934,935,964,966,967,968,969,970,972,975,1165,1190,1192]],
['gross',[418,547,548,552,553,554,556,557,558,568,595,647,649,652,653,654,661,662,663,665,668,683,684,685,890,932,934,935,964,966,967,968,969,970,972,975,1165,1190,1192]],
['lineamountssimplifiedtype',[418,552,568,570]],
['linegrossamountsimplified',[418,552,553,570]],
['linegrossamountsimplifiedhuf',[418,552,554,570]],
['linegrossamountnormal',[418,548,556,557]],
['tartalmú',[418,556,557,562,563,564]],
['különbözeti',[418,556,557,562,563,564]],
['adózás',[418,556,557,562,563,564,689,694]],
['ellenérték',[418,556,557,562,563,564]],
['margin',[418,556,557,562,563,564]],
['scheme',[418,556,557,562,563,564]],
['linegrossamountnormalhuf',[418,548,556,558]],
['linemodificationreferencetype',[418,559,568,582]],
['módosításról',[418,559,568,582]],
['goal',[418,559,568,582]],
['about',[418,559,568,582]],
['changes',[418,559,568,582]],
['updates',[418,559,568,582]],
['linenumberreference',[418,559,560,582]],
['módosítással',[418,559,560]],
['tételének',[418,559,560]],
['linenumber',[418,559,560,566,568,584,890,937,938,945,1165,1173,1174,1176]],
['létrehozása',[418,559,560]],
['meglévő',[418,559,560]],
['tételsorok',[418,559,560]],
['számozásának',[418,559,560]],
['folytatásaként',[418,559,560]],
['shall',[418,559,560]],
['increment',[418,559,560]],
['lineoperation',[418,559,561,582]],
['módosításának',[418,559,561]],
['linenetamount',[418,549,562,563]],
['összegével',[418,562,563,564]],
['csökkentett',[418,562,563,564]],
['reduced',[418,562,563,564]],
['linenetamounthuf',[418,549,562,564]],
['mergeditemindicator',[418,541,565,567]],
['méretcsökkentés',[418,565,567]],
['összevont',[418,565,567]],
['soradatokat',[418,565,567]],
['merged',[418,565,567]],
['size',[418,565,567]],
['reduction',[418,565,567]],
['linetype',[418,565,566,568,890,936,937,938]],
['linemodificationreference',[418,566,568,582]],
['referencestootherlines',[418,566,568,592]],
['referencestootherlinestype',[418,568,592,643]],
['hivatkozások',[418,568,592,643,644]],
['tételekre',[418,568,592,643,644,1165,1172,1173]],
['szükséges',[418,568,592,643,644,726,797,798,1165,1185,1187]],
['connected',[418,568,592,643,644]],
['necessary',[418,568,592,643,644,726,855,857,859,878,890,920,923,968,971,1339,1389,1390]],
['advancedata',[418,566,568,572]],
['productcodes',[418,566,568,589,890,937,938,946]],
['productcodestype',[418,568,589,618,890,938,946,955]],
['termékkódok',[418,568,589,618,890,938,946,955]],
['lineexpressionindicator',[418,566,568,581]],
['egysége',[418,568,581,627,630]],
['mértékegységben',[418,568,581]],
['kifejezhető',[418,568,581]],
['expressible',[418,568,581]],
['linenatureindicator',[418,566,568,583,890,937,938,944]],
['linedescription',[418,566,568,579,890,937,938,943]],
['megnevezése',[418,568,579,726,801,807,816,821,890,938,943,1339,1405,1406]],
['unitofmeasure',[418,566,568,593,726,816,824,829,890,937,938,948]],
['kanonikus',[418,568,593,890,938,948]],
['kifejezése',[418,568,593,594,890,938,948,949]],
['specifikáció',[418,568,593]],
['canonical',[418,568,593,890,938,948]],
['representation',[418,568,593,890,938,948]],
['specification',[418,568,593]],
['unitofmeasureown',[418,566,568,594,890,937,938,949]],
['literális',[418,568,594,890,938,949]],
['literal',[418,568,594,890,938,949]],
['unitprice',[418,566,568,595,890,937,938,950]],
['esetben',[418,568,595]],
['cases',[418,568,595,689,692,726]],
['unitpricehuf',[418,566,568,596,890,937,938,951]],
['linediscountdata',[418,566,568,580]],
['lineamountsnormal',[418,566,568,569]],
['beleértve',[418,568,569]],
['gyűjtőszámlát',[418,568,569]],
['aggregated',[418,568,569]],
['lineamountssimplified',[418,566,568,570]],
['intermediatedservice',[418,566,568,578]],
['közvetített',[418,568,578]],
['intermediated',[418,568,578]],
['article',[418,568,578,890,938,940,986]],
['aggregateinvoicelinedata',[418,566,568,573]],
['newtransportmean',[418,566,568,587]],
['newtransportmeantype',[418,568,587,602]],
['értékesítés',[418,568,587,602,661,662,663,683,684,685,686,687,688,689,698,699,700,890,964,966,967,1165,1165,1322,1331,1339,1352,1364,1366,1371,1375]],
['depositindicator',[418,566,568,575]],
['betétdíj',[418,568,575]],
['bottle',[418,568,575]],
['container',[418,568,575]],
['obligatedforproductfee',[418,566,568,588]],
['tételt',[418,568,588]],
['kötelezettség',[418,568,588,624,626,638]],
['terheli',[418,568,586,588]],
['liable',[418,568,586,588]],
['gpcexcise',[418,566,568,577]],
['földgáz',[418,568,577]],
['villamos',[418,568,577]],
['energia',[418,568,577]],
['szén',[418,568,577]],
['adója',[418,568,577]],
['duty',[418,568,577]],
['electricity',[418,568,577]],
['coal',[418,568,577]],
['forints',[418,568,577,627,628,638,639]],
['dieseloilpurchase',[418,566,568,576]],
['netadeclaration',[418,566,568,586]],
['neta',[418,568,586]],
['tv-ben',[418,568,586]],
['adókötelezettség',[418,568,586]],
['alanyát',[418,568,586]],
['ciii',[418,568,586]],
['obligation',[418,568,586]],
['determined',[418,568,586]],
['health',[418,568,586,890,891,894,989,990,991,1165,1245,1246,1247,1248,1249,1250,1319,1320,1322,1339,1352,1373,1374,1375,1376]],
['productfeeclause',[418,566,568,590]],
['productfeeclausetype',[418,568,590,624]],
['termékdíjról',[418,568,590,624]],
['szóló',[418,568,590,624]],
['tételre',[418,568,590,624,1165,1174,1175]],
['záradékok',[418,568,590,624]],
['clauses',[418,568,590,624]],
['lineproductfeecontent',[418,566,568,585]],
['productfeedatatype',[418,568,585,627,633,636]],
['tartalmára',[418,568,585]],
['conventionallineinfo',[418,566,568,574]],
['additionallinedata',[418,566,568,571,890,937,938,939,1165,1173,1174,1175]],
['linevatamount',[418,550,597,598]],
['linevatamounthuf',[418,550,597,599]],
['anyagszámok',[418,600]],
['materialnumber',[418,453,600,601]],
['brand',[418,587,602,606]],
['gyártmány',[418,602,606]],
['serialnum',[418,587,602,609]],
['alvázszám',[418,602,609]],
['gyári',[418,602,609]],
['gyártási',[418,602,609]],
['chassis',[418,602,609]],
['serial',[418,602,609,890,920,927,1165,1232,1235,1272,1277,1339,1347,1351,1389,1390]],
['enginenum',[418,587,602,607]],
['motorszám',[418,602,607]],
['engine',[418,602,607,701,702,703]],
['firstentryintoservice',[418,587,602,608]],
['helyezés',[418,602,608]],
['entry',[418,602,608]],
['into',[418,602,608,1002,1091,1093]],
['vehicletype',[418,602,604,701]],
['szárazföldi',[418,602,604,701]],
['motorised',[418,602,604,701]],
['land',[418,602,604,701]],
['vessel',[418,587,602,605,705]],
['vesseltype',[418,602,605,705]],
['vízi',[418,602,605,705]],
['megrendelésszámok',[418,610]],
['ordernumber',[418,454,610,611]],
['paymentevidencedocumentdatatype',[418,612,633,634]],
['bevallását',[418,612,633,634]],
['igazoló',[418,612,633,634]],
['dokumentum',[418,612,633,634,726,883,890,891,895,896,897,900,904,907,910,914,915,916,920,922,929,931,932,934,938,942,950,952,953,954,961,962,964,966,968,969,970,972,974,975,1002,1117,1118,1159,1160,1165,1170,1172,1227,1228,1229,1231,1232,1234,1258,1260,1261,1322,1323,1339,1380,1385,1408,1409,1410]],
['verifying',[418,612,633,634]],
['declaration',[418,612,633,634]],
['submitted',[418,612,633,634]],
['evidencedocumentno',[418,612,614,634]],
['evidencedocumentdate',[418,612,613,634]],
['obligatedname',[418,612,616,634]],
['kötelezett',[418,612,615,616,617]],
['obligator',[418,612,615,616]],
['obligatedaddress',[418,612,615,634]],
['obligatedtaxnumber',[418,612,617,634]],
['obligated',[418,612,617]],
['productcode',[418,589,618,619,890,946,955,956,1002,1035,1036,1140]],
['productcodetype',[418,618,619,620,627,629,890,955,956,957]],
['termék-',[418,620,890,957]],
['szolgáltatáskódokat',[418,620,890,957]],
['different',[418,620,689,692,890,957]],
['productcodecategory',[418,619,620,623,629,890,956,957,960]],
['productcodevalue',[418,619,620,622,629,890,956,957,959]],
['productcodeownvalue',[418,619,620,621,629,890,956,957,958]],
['productfeetakeoverdata',[418,590,624,626]],
['productfeetakeoverdatatype',[418,624,626,638]],
['átvállalásával',[418,624,626,638]],
['connection',[418,624,626,638,726,877]],
['customerdeclaration',[418,590,624,625]],
['productfeecode',[418,585,627,629,636]],
['productfeequantity',[418,585,627,631,636]],
['productfeemeasuringunit',[418,585,627,630,636]],
['productfeerate',[418,585,627,632,636]],
['díjtétele',[418,627,632]],
['productfeeamount',[418,585,627,628,636]],
['összegzés',[418,633]],
['productfeeoperation',[418,544,633,637]],
['visszaigénylésre',[418,633,637]],
['beszállításra',[418,633,637]],
['concerns',[418,633,637]],
['productfeedata',[418,544,633,636]],
['productchargesum',[418,544,633,635]],
['összesen',[418,633,635,1339,1352,1354,1356,1361,1363,1367,1372,1376]],
['paymentevidencedocumentdata',[418,544,633,634]],
['takeoverreason',[418,626,638,640]],
['iránya',[418,638,640]],
['jogszabályi',[418,638,640]],
['alapja',[418,638,640]],
['direction',[418,638,640]],
['legal',[418,638,640]],
['takeoveramount',[418,626,638,639]],
['átvállalt',[418,638,639]],
['taken',[418,638,639]],
['projektszámok',[418,641]],
['projectnumber',[418,455,641,642]],
['referencetootherline',[418,592,643,644]],
['dátumok',[418,645]],
['shippingdate',[418,456,645,646]],
['summarybyvatratetype',[418,647,655,660]],
['mértékek',[418,647]],
['rates',[418,647,655,660,726,862,864]],
['vatrate',[418,647,648,660,661,664,667,680,682,692]],
['vatratenetdata',[418,647,650,660]],
['vatratenetdatatype',[418,647,650,686]],
['adómértékhez',[418,647,649,650,651,683,684,685,686,687,688,698,699,700]],
['vatratevatdata',[418,647,651,660]],
['vatratevatdatatype',[418,647,651,698]],
['vatrategrossdata',[418,647,649,660]],
['vatrategrossdatatype',[418,647,649,683]],
['summarygrossdatatype',[418,652,665,668,890,968,972,975]],
['invoicegrossamount',[418,652,653,668]],
['invoicegrossamounthuf',[418,652,654,668]],
['summarynormaltype',[418,655,665,666]],
['calculation',[418,655,660,661,665,666,667,890,964,972,974]],
['totals',[418,655,660,661,665,666,667,890,964,972,974]],
['summarybyvatrate',[418,655,660,666]],
['Összesítés',[]],
['Áfa-mérték',[]],
['summarysimplifiedtype',[418,661,665,667]],
['vatcontentgrossamount',[418,661,662,667,890,964,966,974]],
['adótartalomhoz',[418,661,662,663,890,964,966,967]],
['szolgáltatásnyújtás',[418,661,662,663,683,684,685,686,687,688,698,699,700,890,964,966,967]],
['sale',[418,661,662,663,890,964,966,967,1002,1013,1028,1136,1137,1165,1313,1322]],
['vatcontentgrossamounthuf',[418,661,663,667,890,964,967,974]],
['summarynormal',[418,543,665,666]],
['summarysimplified',[418,543,665,667]],
['summarygrossdata',[418,543,665,668,890,919,972,975]],
['suppliercompanycode',[418,457,669,670]],
['nyújtása',[418,671,674,890,976,979]],
['supplieraddress',[418,531,671,676,890,976,981]],
['supplierbankaccountnumber',[418,531,671,677,890,976,982]],
['individualexemption',[418,531,671,675,890,976,980]],
['alanyi',[418,671,675,890,976,980]],
['mentes',[418,671,675,890,976,980]],
['individually',[418,671,675,890,976,980]],
['exciselicencenum',[418,531,671,673,890,976,978]],
['adóraktári',[418,671,673,890,976,978]],
['engedélyének',[418,671,673,890,976,978]],
['warehouse',[418,671,673,890,976,978]],
['license',[418,671,673,890,976,978]],
['vatamountmismatchtype',[418,680,689,692]],
['adóalap',[418,680,689,692]],
['felszámított',[418,680,689,691,692]],
['eltérésének',[418,680,689,692]],
['mismatching',[418,680,689,692]],
['levied',[418,680,689,692]],
['adótartalom',[418,680,682]],
['vatrategrossamount',[418,649,683,684]],
['sales',[418,683,684,685,686,687,688,698,699,700,989,990,991,1165,1320,1331,1339,1352,1364,1366,1371,1375]],
['vatrategrossamounthuf',[418,649,683,685]],
['vatratenetamount',[418,650,686,687]],
['vatratenetamounthuf',[418,650,686,688]],
['adómentes',[418,689]],
['vatpercentage',[418,551,555,648,664,689,697,726,855,859,863]],
['mértéke',[418,689,697,726,855,858]],
['vatcontent',[418,551,555,648,664,689,693,726,855,857,863]],
['vatexemption',[418,551,555,648,664,689,695]],
['vatoutofscope',[418,551,555,648,664,689,696]],
['hatályán',[418,689,696]],
['kívüli',[418,689,696]],
['scope',[418,689,696]],
['vatdomesticreversecharge',[418,551,555,648,664,689,694]],
['fixed',[418,689,691,694]],
['fordított',[418,689,694]],
['national',[418,689,694]],
['reverse',[418,689,694]],
['marginschemeindicator',[418,551,555,648,664,689,690]],
['vatamountmismatch',[418,551,555,648,664,689,692]],
['esetei',[418,689,692]],
['novatcharge',[418,551,555,648,664,689,691]],
['nincs',[418,689,691,726,865,867,1165,1312]],
['charged',[418,689,691]],
['vatratevatamount',[418,651,698,699]],
['vatratevatamounthuf',[418,651,698,700]],
['enginecapacity',[418,604,701,702]],
['hengerűrtartalom',[418,701,702]],
['köbcentiméterben',[418,701,702]],
['capacity',[418,701,702,726,732,735]],
['centimetre',[418,701,702]],
['enginepower',[418,604,701,703]],
['teljesítmény',[418,701,703]],
['kw-ban',[418,701,703]],
['power',[418,701,703,726,872]],
['futott',[418,701,704]],
['kilométerek',[418,701,704]],
['travelled',[418,701,704]],
['distance',[418,701,704]],
['hajó',[418,705,707]],
['hossza',[418,705,707]],
['méterben',[418,705,707,726,753,754]],
['hull',[418,705,707]],
['metre',[418,705,707]],
['activityreferred',[418,605,705,706]],
['sailedhours',[418,605,705,708]],
['hajózott',[418,705,708]],
['sailed',[418,705,708]],
['amelyet',[418,709,726,784,787,879,989,995,996,997,998]],
['kódoltan',[418,709]],
['sémaleíró',[418,709]],
['encoding',[418,709]],
['equivalent',[418,709]],
['definition',[418,709]],
['e-pénztárgépek',[726,1002]],
['kommunikációs',[726,765,767]],
['eseteiben',[726]],
['leírását',[726,757,763,764,1002,1013,1019,1020,1023,1100,1104,1105,1108,1118,1119]],
['e-cash',[726,744,747,748,749,750,751,752,753,754,755,756,757,759,760,761,763,765,766,767,768,769,772,777,779,784,787,789,792,795,801,805,806,809,810,811,812,813,862,864,867,879,883,885,889,890,904,905,908,909,920,927,928,1002,1003,1004,1005,1010,1011,1012,1013,1014,1019,1030,1031,1032,1033,1034,1035,1037,1040,1044,1046,1047,1049,1051,1052,1053,1054,1056,1058,1060,1077,1081,1083,1084,1086,1089,1091,1095,1096,1100,1101,1104,1115,1121,1122,1130,1131,1132,1133,1134,1135,1138,1139,1140,1141,1142,1143,1146,1147,1157,1158,1161,1162,1165,1183,1184,1185,1186,1232,1235,1258,1259,1272,1274,1277,1278,1279,1320,1338,1339,1347,1352,1380,1382,1383,1389,1390]],
['communication',[726,765,767,890,938,948,1002,1004,1005,1007,1008,1011,1012,1013,1014,1021,1030,1031,1037,1039,1046,1047,1049,1050,1051,1054,1055,1056,1057,1058,1060,1062,1064,1065,1067,1068,1069,1070,1073,1075,1077,1078,1081,1082,1083,1084,1085,1086,1088,1089,1091,1092,1093,1094,1097,1098,1099,1100,1101,1106,1122,1124,1127,1128]],
['--created',[726,1339]],
['liquid',[726,1339]],
['studio',[726,1339]],
['https',[726,889,1339]],
['liquid-technologies',[726,1339]],
['e-pénztárgép',[726,747,749,750,751,752,753,754,755,756,757,759,760,765,767,768,769,772,775,784,787,789,801,805,806,809,811,812,813,867,883,885,889,890,904,908,909,920,928,1002,1003,1004,1005,1007,1008,1009,1010,1011,1012,1013,1014,1030,1031,1032,1034,1040,1044,1046,1047,1049,1051,1052,1054,1056,1058,1060,1077,1081,1083,1084,1086,1091,1095,1096,1100,1101,1130,1131,1132,1133,1134,1135,1138,1139,1140,1141,1142,1143,1146,1147,1165,1183,1184,1185,1186,1258,1259,1272,1278,1279,1320,1338]],
['communicationdata',[726,890,1002,1165,1339]],
['ereceipt',[726,890,989,1002,1003,1004,1007,1009,1010,1011,1013,1028,1030,1034,1035,1037,1040,1044,1045,1046,1049,1056,1063,1064,1067,1071,1073,1077,1084,1091,1097,1100,1115,1117,1118,1121,1122,1126,1127,1165,1183,1185,1339]],
['ereceiptbase',[726,890,989,1002,1339]],
['square',[726,888]],
['négyzetméter',[726,888]],
['productstatetype',[726,816,823,880]],
['active',[726,880]],
['aktív',[726,880]],
['blockunblocktype',[726,866,1002,1004,1005,1056,1058]],
['blokkolás',[726,866,883,1002,1040,1041,1056,1059]],
['block',[726,757,758,865,866,867,872,883,1002,1004,1005]],
['unblock',[726,865,866,872,883,1002,1004,1005,1040,1041,1056,1058,1059]],
['feloldás',[726,866,883,1002,1056,1059]],
['cashregisterworkstatetype',[726,757,760,867,1002,1030,1031,1049,1051]],
['állapot',[726,732,757,758,759,760,865,867,872,883,1002,1004,1006,1007,1009,1046,1048,1056,1059,1061,1064,1066,1084,1087,1090,1118,1120,1122,1125,1127,1129,1132,1133]],
['működik',[726,865,867]],
['blokkolva',[726,865,867]],
['working',[726,865,867]],
['blocked',[726,865,867,872,1002,1004,1005]],
['blokkolt',[726,865,867,872,1002,1004,1005]],
['állapotban',[726,865,867]],
['hibás',[726,867,1165,1312,1333]],
['aeblockunblockstatetype',[726,757,758,865]],
['blokkolási',[726,757,758,865]],
['gpstype',[726,753,755,756,874]],
['wgs84',[726,753,754,755,756,874]],
['koordináták',[726,874]],
['másodperc',[726,874]],
['formátumban',[726,868,869,871,874,889,1002,1013,1014,1017,1049,1050,1055,1077,1078,1082,1091,1092,1093,1100,1101,1110]],
['coordinates',[726,874]],
['degrees',[726,753,755,756,874]],
['minutes',[726,874]],
['seconds',[726,777,778,874]],
['httpmethodtype',[726,784,785,875]],
['metódusok',[726,875]],
['listája',[726,757,761,782,855,860,862,875,1002,1011,1012,1084,1089,1127,1128,1339,1403,1408,1411]],
['methods',[726,875,1165,1269,1270]],
['mobileconnectiontype',[726,732,737,877]],
['Átviteli',[]],
['technológia',[726,732,737,877]],
['mobile',[726,877]],
['technology',[726,732,737,877]],
['percentagetype',[726,855,857,859,878]],
['százalékos',[726,878]],
['százalékjel',[726,855,857,859,878]],
['nélkül',[726,732,734,855,857,859,878]],
['szükség',[726,855,857,859,878,890,920,923,968,971,1339,1389,1390]],
['tizedesponttal',[726,878]],
['tizedesjegyre',[726,878]],
['kerekítve',[726,878]],
['percentage',[726,855,857,858,859,878]],
['without',[726,732,734,855,857,859,878,1339,1352,1353]],
['sign',[726,753,755,756,855,857,858,859,878,890,920,923,968,971,1002,1013,1014,1100,1101]],
['rounded',[726,878]],
['printmessagetype',[726,879,1002,1064,1065]],
['átadott',[726,879,989]],
['pénztárzárást',[726,879]],
['nyomtatni',[726,879]],
['nyomtatón',[726,879]],
['print',[726,879,883,1002,1064,1065]],
['printed',[726,879]],
['printer',[726,879]],
['closing',[726,879,890,891,898,920,924,1165,1313,1339,1389,1390]],
['a-za-z0-9aáeéiíoóöőuúüűaÁeÉiÍoÓÖŐuÚÜŰ',[]],
['certificatesigningrequesttype',[726,868,1002,1049,1050,1055,1077,1078,1082,1091,1092]],
['tanúsítvány',[726,868,869,870,871,881,883,1002,1013,1014,1049,1050,1055,1056,1057,1062,1067,1068,1069,1070,1077,1078,1082,1084,1085,1088,1091,1092,1093,1094,1095,1097,1098,1099,1100,1101,1150,1155,1156]],
['aláírási',[726,868,871,1002,1049,1050,1055,1077,1078,1082,1091,1092,1093]],
['certificate',[726,868,869,870,871,881,883,1002,1013,1014,1049,1050,1055,1056,1057,1062,1067,1068,1069,1070,1084,1085,1088,1091,1092,1093,1094,1095,1097,1098,1099,1100,1101,1150,1155,1156]],
['signing',[726,868,870,871,1002,1013,1014,1049,1055,1056,1062,1084,1088,1091,1092,1093,1100,1101]],
['atomiccsrtype',[726,868,1165,1311]],
['cmscertificatesigningrequesttype',[726,871,1002,1091,1093]],
['certificatetype',[726,869,1002,1013,1014,1067,1068,1069,1091,1094,1097,1099,1100,1101,1150,1155,1156]],
['certificatetypetype',[726,870,1002,1067,1069,1091,1094,1097,1099]],
['autentikációs',[726,870,1002,1056,1057,1084,1085,1091,1092]],
['aláíró',[726,870,1002,1013,1014,1049,1055,1056,1062,1077,1082,1084,1088,1100,1101]],
['querycertificateresulttype',[726,881,1002,1067,1070]],
['complete',[726,881]],
['progress',[726,881]],
['folyamatban',[726,881]],
['registrationnumbertype',[726,765,774,882,1002,1049,1054,1077,1081]],
['Üzembehelyezési',[]],
['servicetype',[726,784,787,883]],
['pénztárgép',[726,872,883]],
['blocking',[726,883,1002,1003,1004,1130,1131]],
['unblocking',[726,883,1002,1003,1004,1130,1131]],
['download',[726,883]],
['terméktörzs',[726,883,1002,1035,1037]],
['letöltés',[726,883]],
['update',[726,777,779,781,830,837,883,1002,1035,1037,1045,1046,1121,1122,1126,1127,1144,1145,1161,1162,1163,1164]],
['frissítés',[726,883]],
['Üzemeltetés',[]],
['befejezése',[726,883]],
['lekérdezése',[726,883]],
['hello',[726,883,1002,1040,1041,1042,1043,1056,1059,1061,1084,1087,1090]],
['adatlekérdezés',[726,883]],
['owner',[726,809,810,813,883,890,904,905,909,1002,1040,1041,1043,1044,1049,1054,1056,1091,1096,1142,1143,1146,1147,1165,1272,1274,1279]],
['change',[726,777,778,883,890,920,921,1002,1040,1041,1043,1044,1049,1056,1142,1143,1146,1147,1165,1232,1233,1313,1339,1340,1341,1342,1352,1355,1356]],
['Átszemélyesítés',[]],
['küldés',[726,883,1002,1013,1021,1100,1106]],
['ellenőrzés',[726,883]],
['regisztráció',[726,883,1002,1077,1081]],
['renew',[726,883,1002,1091,1095,1097,1155,1156]],
['megújítása',[726,883]],
['expired',[726,883,1002,1013,1022,1091,1092,1095,1100,1107]],
['lejárt',[726,883,1002,1091,1092,1095]],
['törzs',[726,883]],
['sound',[726,883]],
['hangfálj',[726,883]],
['logo',[726,883]],
['logó',[726,883]],
['beküldés',[726,883,1002,1009,1013,1026,1100,1113,1133]],
['machine',[726,883,1002,1132,1133]],
['submission',[726,883,1002,1013,1026,1100,1113,1132,1133]],
['send',[726,883,1002,1013,1026,1100,1113]],
['missing',[726,883,1002,1013,1026,1100,1113,1117,1118,1119,1159,1160]],
['hiányzó',[726,883,1002,1117,1118,1119,1159,1160]],
['beküldése',[726,883,1002,1013,1026,1100,1113]],
['epénztárgép',[726,765,770,885,1002,1077,1079]],
['hardveres',[726,740,743,830,840,885]],
['ae-based',[726,740,743,830,840,885]],
['hardware',[726,740,743,801,802,805,806,830,840,885]],
['android',[726,885]],
['felhős',[726,885]],
['cloud',[726,885]],
['huawei',[726,885]],
['taxpayeraddressclasstype',[726,841,843,886]],
['teaorcodetype',[726,853,854,887]],
['teÁor',[]],
['urltype',[726,784,788,797,798,889]],
['meghívandó',[726,782,784,788,889,1002,1010,1011,1012,1040,1044,1134,1135,1142,1143]],
['szabványos',[726,889]],
['url-je',[726,784,788,889]],
['host',[726,889]],
['port',[726,889]],
['resource',[726,889]],
['standard',[726,753,755,756,889]],
['reqested',[726,889]],
['fiscaldaystatetype',[726,757,762,873]],
['adóügyi',[726,757,762,873,1002,1100,1115,1157,1158,1339,1347,1351]],
['nyitott',[726,873]],
['closed',[726,873]],
['zárt',[726,873]],
['eventcodetype',[726,744,745,872]],
['esemény',[726,744,745,746,872]],
['bekapcsolása',[726,872]],
['shutdown',[726,872]],
['leállása',[726,872]],
['blokkolta',[726,872]],
['magát',[726,872]],
['itself',[726,872]],
['küldött',[726,872,1002,1013,1014,1100,1101]],
['megjelenítése',[726,872]],
['nyomtatása',[726,872]],
['nyugtázva',[726,872]],
['display',[726,872]],
['sent',[726,747,748,750,757,761,764,872,1002,1013,1021,1026,1091,1095,1100,1106,1113,1118,1119,1165,1320,1338,1339,1380,1414]],
['confirmed',[726,872]],
['fontos',[726,872]],
['jelentése',[726,872]],
['reporting',[726,872]],
['important',[726,872]],
['events',[726,747,748,872]],
['aeinternalmetric',[726,727,730,731,732,733,759]],
['belső',[726,727,728,729,730,731,732,733,757,761]],
['mérőszámai',[726,727,730,731,732,733]],
['internal',[726,727,728,729,730,731,732,733,757,761]],
['indicators',[726,727,730,731,732,733]],
['aeinternalmetricid',[726,727,728,731]],
['appinfo',[726,727,728,729,732,733,734,735,736,737,738,739,740,741,742,743,744,746,747,748,749,750,751,752,753,754,755,756,757,759,760,761,765,766,767,769,770,771,773,774,775,776,777,778,779,780,781,797,799,800,801,802,803,804,805,806,807,808,814,815,830,831,832,833,834,835,836,837,838,839,840,855,856,857,858,859,860,861,862,863,864,890,891,892,893,894,895,896,897,898,899,900,901,902,903,904,906,907,910,911,912,913,914,915,916,917,918,919,920,921,922,923,924,925,926,927,929,930,931,932,933,934,935,936,937,938,939,940,941,942,943,944,945,946,947,948,949,950,951,952,953,954,955,956,957,958,959,960,961,962,963,964,965,966,967,968,969,970,971,972,973,974,975,976,977,978,979,980,981,982,983,984,1002,1030,1031,1035,1036,1037,1039,1049,1051,1077,1079,1080,1165,1166,1167,1168,1169,1170,1171,1172,1173,1174,1175,1176,1177,1178,1179,1185,1186,1187,1188,1189,1190,1191,1192,1193,1194,1195,1196,1197,1198,1199,1200,1201,1202,1203,1204,1205,1206,1209,1210,1211,1212,1214,1215,1216,1217,1218,1219,1220,1221,1222,1223,1224,1225,1226,1227,1228,1229,1231,1232,1233,1234,1235,1236,1237,1238,1239,1240,1241,1242,1243,1244,1245,1246,1247,1248,1249,1250,1251,1252,1253,1254,1255,1256,1257,1258,1259,1260,1261,1263,1264,1265,1266,1267,1268,1269,1270,1271,1272,1273,1275,1276,1277,1283,1284,1285,1286,1287,1289,1290,1291,1292,1293,1295,1296,1297,1298,1299,1300,1301,1302,1303,1304,1339,1340,1341,1342,1343,1344,1345,1346,1347,1348,1349,1350,1351,1352,1353,1354,1355,1356,1357,1358,1359,1360,1361,1362,1363,1364,1365,1366,1367,1368,1369,1370,1371,1372,1373,1374,1375,1376,1377,1378,1379,1380,1381,1382,1383,1384,1385,1389,1390,1391,1392,1393,1394,1395,1396,1397,1398,1399,1400,1401,1402,1403,1404,1405,1406,1407,1408,1409,1410,1411,1412,1413]],
['legacymapping',[726,727,728,729,732,733,734,735,736,737,738,739,740,741,742,743,744,746,747,748,749,750,751,752,753,754,755,756,757,759,760,761,765,766,767,769,770,771,773,774,775,776,777,778,779,780,781,797,799,800,801,802,803,804,805,806,807,808,814,815,830,831,832,833,834,835,836,837,838,839,840,855,856,857,858,859,860,861,862,863,864,890,891,892,893,894,895,896,897,898,899,900,901,902,903,904,906,907,910,911,912,913,914,915,916,917,918,919,920,921,922,923,924,925,926,927,929,931,932,933,934,935,936,937,938,939,940,941,942,943,944,945,946,947,948,949,950,951,952,953,954,955,956,957,958,959,960,961,962,963,964,965,966,967,968,969,970,971,972,973,974,975,976,977,978,979,980,981,982,983,984,1002,1030,1031,1035,1036,1037,1039,1049,1051,1077,1079,1080,1165,1166,1167,1168,1169,1170,1171,1172,1173,1174,1175,1176,1177,1178,1179,1185,1186,1187,1188,1189,1190,1191,1192,1193,1194,1195,1196,1197,1198,1199,1200,1201,1202,1203,1204,1205,1206,1209,1210,1211,1212,1214,1215,1216,1217,1218,1219,1220,1221,1222,1223,1224,1225,1226,1227,1228,1229,1231,1232,1233,1234,1235,1236,1237,1238,1239,1240,1241,1242,1243,1244,1245,1246,1247,1248,1249,1250,1251,1252,1253,1254,1255,1256,1257,1258,1259,1260,1261,1263,1264,1265,1266,1267,1268,1269,1270,1271,1272,1273,1275,1276,1277,1283,1284,1285,1286,1287,1289,1290,1291,1292,1293,1295,1296,1297,1298,1299,1300,1301,1302,1303,1304,1339,1340,1341,1342,1343,1344,1345,1346,1347,1348,1349,1350,1351,1352,1353,1354,1355,1356,1357,1358,1359,1360,1361,1362,1363,1364,1365,1366,1367,1368,1369,1370,1371,1372,1373,1374,1375,1376,1377,1378,1379,1380,1381,1382,1383,1384,1385,1389,1390,1391,1392,1393,1394,1395,1396,1397,1398,1399,1400,1401,1402,1403,1404,1405,1406,1407,1408,1409,1410,1411,1412,1413]],
['mező',[726,727,728,732,733,740,741,742,743,757,759,765,769,773,814,815,830,831,832,833,834,836,838,839,840,855,857,858,859,860,861,862,863,864,890,891,893,894,895,896,900,901,902,903,904,906,907,910,913,915,916,917,918,919,920,921,927,929,931,932,934,936,937,938,939,940,942,944,945,946,949,952,953,954,955,956,957,958,960,961,962,963,964,966,967,968,969,972,974,975,976,977,978,979,980,981,982,1165,1166,1167,1168,1170,1171,1172,1173,1174,1175,1176,1177,1178,1179,1185,1187,1188,1189,1195,1196,1197,1199,1200,1201,1202,1203,1204,1206,1209,1210,1211,1212,1214,1215,1217,1218,1219,1220,1224,1225,1227,1228,1229,1232,1233,1235,1251,1252,1255,1256,1257,1258,1261,1267,1268,1272,1273,1277,1283,1284,1285,1286,1287,1289,1290,1291,1292,1293,1295,1298,1300,1301,1302,1304,1339,1340,1341,1344,1347,1348,1349,1352,1353,1354,1355,1356,1357,1358,1359,1360,1361,1362,1363,1364,1365,1366,1367,1368,1369,1370,1371,1372,1373,1374,1375,1376,1377,1379,1389,1391,1392,1393,1394,1395,1396,1397,1398,1399,1400,1401,1402,1403,1404,1405,1408,1412]],
['mérőszám',[726,727,728,729]],
['aeinternalmetricvalue',[726,727,729,731]],
['aeinternalmetriclisttype',[726,730,732,733]],
['aestatetype',[726,732,757,759]],
['freestorage',[726,732,735,759]],
['ae-ben',[726,732,735,739,765,770,771,801,807,808,1002,1077,1079,1080]],
['működő',[726,732,735,739]],
['adattárolón',[726,732,735]],
['lévő',[726,732,735,765,770,771,801,807,808,1002,1077,1079,1080]],
['szabad',[726,732,735]],
['tároló',[726,732,735]],
['kapacitás',[726,732,735]],
['kbyte',[726,732,735]],
['free',[726,732,735]],
['storage',[726,732,735]],
['device',[726,732,735,1002,1040,1042,1043,1044,1077,1084,1142,1143,1153,1154]],
['signalstrength',[726,732,739,759]],
['modem',[726,732,739,765,770,801,807,808,1002,1077,1079]],
['mért',[726,732,739]],
['hálózati',[726,732,739]],
['térerőt',[726,732,739]],
['dbm-ig',[726,732,739]],
['terjedő',[726,732,739]],
['skálán',[726,732,739]],
['negatív',[726,732,739,890,920,923,968,971]],
['számmal',[726,732,734,739]],
['ábrázolva',[726,732,739]],
['network',[726,732,739,1002,1013,1021,1100,1106]],
['signal',[726,732,739]],
['strength',[726,732,739]],
['measured',[726,732,739]],
['operating',[726,732,739,853,854]],
['negative',[726,732,739,890,920,923,968,971]],
['scale',[726,732,739]],
['negativeinteger',[726,732,739]],
['batterylevel',[726,732,734,759]],
['töltöttség',[726,732,734]],
['vezető',[726,732,734,1002,1004,1006,1046,1048,1064,1066,1118,1120,1122,1125,1127,1129,1339,1389,1390]],
['nullák',[726,732,734]],
['zeros',[726,732,734,1339,1389,1390]],
['mobileconnection',[726,732,737,759]],
['legutóbbi',[726,732,737,738,830,837]],
['bejelentkezés',[726,732,737,738]],
['átviteli',[726,726,732,737,877]],
['transmission',[726,732,737]],
['during',[726,732,737,738]],
['provider',[726,732,738,759]],
['infrastruktúrát',[726,732,738]],
['biztosító',[726,732,738]],
['fizikai',[726,732,738]],
['mobilszolgáltató',[726,732,738]],
['telekom',[726,732,738]],
['telenor',[726,732,738]],
['vodafone',[726,732,738]],
['mobil',[726,732,738]],
['physical',[726,732,738]],
['infrastructure',[726,732,738]],
['0|1|2|3',[726,732,738]],
['gsmcell',[726,732,736,759]],
['legutóbb',[726,732,736,765,774]],
['cella',[726,732,736]],
['cell',[726,732,736]],
['hardwaretechnicalinfotype',[726,765,769,801]],
['műszaki',[726,747,751,765,769,801]],
['jellemzői',[726,747,751,765,769,801]],
['hw-based',[726,765,769,801]],
['features',[726,765,769,801]],
['aename',[726,769,801,803]],
['gyártói',[726,801,803,806]],
['típusnév',[726,801,803]],
['manufacturer',[726,801,803,806,816,821]],
['aehardwareversion',[726,769,801,802]],
['hardver',[726,801,802,806]],
['aesoftware',[726,769,801,804]],
['ae-n',[726,801,804]],
['futó',[726,765,766,789,792,801,804,1002,1121,1122,1161,1162]],
['modemname',[726,769,801,807]],
['kiolvasott',[726,765,770,771,801,807,808,1002,1077,1079,1080]],
['modemsoftwareversion',[726,769,801,808]],
['szoftververziója',[726,801,808]],
['cashregistername',[726,769,801,806]],
['típusmegjelölése',[726,801,806]],
['designation',[726,801,806]],
['cashregisterhardwareversion',[726,769,801,805]],
['hardververziója',[726,801,805]],
['cashregistereventtype',[726,744,747,748]],
['e-pénztárgépben',[726,744,747,748,757,761]],
['bekövetkezett',[726,744,747,748]],
['események',[726,744,747,748]],
['naplózás',[726,744]],
['eventcode',[726,744,745,748]],
['eventdescription',[726,744,746,748]],
['descriptive',[726,744,746]],
['cashregisterpositiontype',[726,747,749,753]],
['földrajzi',[726,747,749,753,755,756]],
['geographical',[726,747,749,753]],
['latitude',[726,749,753,755]],
['nillable',[726,753,755,756]],
['szélessége',[726,753,755]],
['fokban',[726,753,755,756]],
['előjelet',[726,753,755,756]],
['használva',[726,753,755,756]],
['using',[726,753,755,756,1165,1241,1244]],
['longitude',[726,749,753,756]],
['hosszúsága',[726,753,756]],
['height',[726,749,753,754]],
['tengerszint',[726,753,754]],
['feletti',[726,753,754]],
['magassága',[726,753,754]],
['altitude',[726,753,754]],
['above',[726,753,754]],
['level',[726,753,754,816,818]],
['metres',[726,753,754]],
['cashregisterstatetype',[726,747,750,757]],
['rendszerállapot',[726,747,750,757]],
['statisztika',[726,747,750,757]],
['statistics',[726,747,750,757]],
['cashregisterworkstate',[726,750,757,760,1002,1030,1031,1049,1051,1138,1146]],
['aeblockunblockstate',[726,750,757,758]],
['fiscaldaystate',[726,750,757,762]],
['állapota',[726,757,762,1002,1030,1031,1049,1051]],
['lastsentrecordcounter',[726,750,757,764]],
['utoljára',[726,757,763,764,1002,1013,1019,1030,1032,1033,1049,1052,1053,1100,1104]],
['bizonylat',[726,757,763,764,890,891,898,899,900,902,920,924,925,961,963,989,990,991,992,993,995,997,999,1000,1001,1002,1013,1015,1016,1017,1019,1023,1024,1025,1026,1030,1032,1033,1049,1052,1053,1063,1064,1065,1100,1104,1108,1109,1111,1112,1115,1118,1119,1148,1149,1157,1158,1165,1209,1212,1272,1275,1283,1285,1319,1320,1322,1331,1338,1339,1340,1347,1380,1381,1382]],
['recordcounter',[726,757,763,764,890,920,927,993,1002,1013,1019,1023,1030,1032,1033,1049,1052,1053,1100,1104,1108,1118,1119,1136,1157,1160,1165,1232,1235,1272,1277,1344,1349,1377,1400,1412]],
['lásd',[726,757,763,764,890,929,930,1002,1013,1019,1020,1023,1100,1104,1105,1108,1118,1119,1165,1283,1284,1285,1289,1290,1291]],
['fejlesztői',[726,757,763,764,1002,1013,1014,1017,1019,1020,1022,1023,1100,1101,1104,1105,1107,1108,1110,1118,1119]],
['dokumentáció',[726,757,763,764,1002,1013,1014,1019,1020,1023,1100,1101,1104,1105,1108,1118,1119]],
['„nav',[726,757,763,764,1002,1013,1019,1020,1023,1100,1104,1105,1108,1118,1119]],
['ellenőrző',[726,757,763,764,830,835,890,920,926,972,973,1002,1013,1019,1020,1023,1100,1104,1105,1108,1118,1119,1165,1272,1276,1335]],
['képzése”',[726,757,763,764,1002,1013,1014,1019,1020,1023,1100,1101,1104,1105,1108,1118,1119]],
['fejezetében',[726,757,763,764,1002,1013,1014,1019,1020,1023,1100,1101,1104,1105,1108,1118,1119]],
['generate',[726,757,763,764,1002,1013,1019,1020,1022,1023,1100,1104,1107,1108,1118,1119]],
['chapter',[726,757,763,764,1002,1013,1014,1019,1020,1023,1100,1101,1104,1108,1118,1119]],
['development',[726,757,763,764,1002,1013,1014,1017,1019,1020,1023,1100,1101,1104,1108,1110,1118,1119]],
['lastrecordcounter',[726,750,757,763,1002,1013,1019,1030,1033,1049,1053,1100,1104,1136,1138,1146,1157]],
['e-pénztárgépen',[726,757,763,765,766,789,792,795,809,810,862,864,890,904,905,920,927,1002,1013,1019,1030,1032,1033,1045,1046,1049,1052,1053,1084,1089,1100,1104,1121,1122,1144,1145,1161,1162,1165,1232,1235,1272,1274,1277]],
['aestate',[726,750,757,759]],
['errors',[726,747,750,757,761]],
['cashregisterstate',[726,747,750,757,761,1008]],
['rekord',[726,757,761]],
['küldése',[726,757,761]],
['jelentkezett',[726,757,761]],
['hibák',[726,747,750,757,761]],
['kódjainak',[726,757,761]],
['have',[726,757,761]],
['occurred',[726,757,761]],
['since',[726,757,761]],
['record',[726,757,761]],
['cashregistertechnicalinfotype',[726,747,751,765]],
['cashregistersoftware',[726,751,765,766]],
['details',[726,765,766,789,791,794,809,811,989,990,991,995,996,998]],
['imei',[726,751,765,770,1002,1077,1079,1153]],
['imsi',[726,751,765,771,1002,1077,1080,1153]],
['epénztárgépben',[726,765,771,1002,1077,1080]],
['operatorsite',[726,751,765,772,1002,1046,1047,1056,1060,1084,1086,1145,1147,1154]],
['operatorsitetype',[726,765,772,809,1002,1046,1047,1056,1060,1084,1086]],
['üzemeltetői',[726,765,772,789,791,794,1002,1040,1043,1045,1046,1047,1056,1060,1084,1086,1144,1145]],
['üzemeltetési',[726,765,772,789,791,794,809,811,812,890,904,908,920,928,1002,1040,1043,1045,1046,1047,1056,1060,1061,1084,1086,1087,1144,1145,1165,1272,1278]],
['hely',[726,765,772,789,791,794,809,811,1002,1040,1043,1045,1046,1047,1056,1060,1061,1084,1086,1087,1144,1145]],
['vattype',[726,765,776,860,861,862,1002,1084,1089,1127,1128]],
['aktuális',[726,747,750,751,765,776,789,790,791,792,793]],
['Áfa-tábla',[]],
['table',[726,765,776,789,793,796,1002,1040,1042,1084,1090]],
['registrationnumber',[726,751,765,774,1002,1049,1054,1077,1081,1146,1153]],
['üzembehelyezési',[726,726,765,774,882,1002,1002,1049,1054,1077,1081]],
['latest',[726,765,774,775]],
['installation',[726,765,774,1002,1122,1123]],
['communicationprotocolversion',[726,751,765,767]],
['protokoll',[726,765,767]],
['protocol',[726,765,767]],
['schemaversion',[726,751,765,775]],
['legfrissebb',[726,765,775]],
['aminek',[726,765,775]],
['megfelelnek',[726,765,775]],
['epdprocessidentifiers',[726,751,765,768]],
['epdprocessidentifierstype',[726,765,768,789]],
['jelenlegi',[726,765,768,789]],
['állapotát',[726,765,768,789]],
['előállító',[726,765,768,789]],
['végrehajtott',[726,765,768,789,790,791,792,793]],
['utasítások',[726,765,768,789]],
['valamint',[726,765,768,789]],
['legutolsó',[726,765,768,789]],
['átvett',[726,765,768,789]],
['időzített',[726,765,768,789]],
['azonosítói',[726,765,768,789]],
['process',[726,765,768,789,790,791,792,793,794,795,796,1002,1004,1006,1013,1026,1040,1041,1042,1043,1046,1048,1056,1059,1061,1064,1066,1084,1087,1090,1100,1113,1118,1120,1122,1125,1127,1129,1165,1337]],
['executed',[726,765,768,789,790,791,792,793,794,795,796,1002,1004,1006,1046,1048,1056,1059,1061,1064,1066,1084,1087,1090,1118,1120,1122,1125,1127,1129]],
['instructions',[726,765,768,789]],
['produce',[726,765,768,789]],
['timed',[726,765,768,789]],
['hardwaretechnicalinfo',[726,751,765,769]],
['posassignedbankaccounts',[726,751,765,773]],
['posassignedbankaccountlisttype',[726,765,773,814]],
['terminálhoz',[726,765,773,814,815]],
['rendelt',[726,765,773,814,815]],
['assigned',[726,765,773,814,815]],
['terminal',[726,765,773,814,815]],
['cashregistertimeupdatetype',[726,747,752,777]],
['állítás',[726,777]],
['oldtime',[726,752,777,781]],
['amikor',[726,777,781]],
['átállítás',[726,777,781]],
['régi',[726,777,781]],
['bekövetkezik',[726,777,781]],
['newtime',[726,752,777,780]],
['beállított',[726,777,780]],
['setting',[726,747,752,777,780,1002,1056,1061,1084,1087,1090]],
['changeduration',[726,752,777,778]],
['diszkréten',[726,777,778]],
['változtatja',[726,777,778]],
['időt',[726,777,778]],
['hanem',[726,777,778]],
['időtávon',[726,777,778]],
['gyorsítja',[726,777,778]],
['lassítja',[726,777,778]],
['átmenet',[726,777,778]],
['másodpercben',[726,777,778]],
['discretely',[726,777,778]],
['accelerates',[726,777,778]],
['slows',[726,777,778]],
['down',[726,777,778]],
['transition',[726,777,778]],
['changemode',[726,752,777,779]],
['időállítás',[726,777,779]],
['1-gsm',[726,777,779]],
['szinkronizáció',[726,777,779]],
['2-szervizes',[726,777,779]],
['beavatkozás',[726,777,779]],
['3-Üzemeltető',[]],
['módosítva',[726,777,779]],
['4-számítógép',[726,777,779]],
['e-pénztárgépeknél',[726,777,779]],
['számítógép',[726,777,779]],
['órájához',[726,777,779]],
['szinkronizálva',[726,777,779]],
['5-egyéb',[726,777,779]],
['automatikus',[726,777,779]],
['synchronisation',[726,777,779]],
['2-intervention',[726,777,779]],
['3-adjusted',[726,777,779]],
['4-for',[726,777,779]],
['computer-based',[726,777,779]],
['registers',[726,777,779,1002]],
['synchronized',[726,777,779]],
['computer',[726,777,779]],
['clock',[726,747,752,777,779,890,891,898,899,920,924,925,1165,1272,1275]],
['5-other',[726,777,779]],
['automatic',[726,777,779]],
['1|2|3|4|5',[726,777,779]],
['operatorsitevalidfrom',[726,772,809,811,1047,1060,1086]],
['érvényesség',[726,726,809,811,816,825,826]],
['shop',[726,772,809,812,890,904,908,916,920,928,993,1047,1060,1086,1165,1272,1278,1280,1281,1282,1344,1349,1377,1400,1412]],
['shoptype',[726,809,812,890,904,908,920,928,1165,1272,1278,1280]],
['taxpayertype',[726,809,810,813,890,904,905,909,1165,1272,1274,1279,1305]],
['üzemeltető',[726,809,810,813,890,904,905,909,1002,1091,1096,1165,1272,1274,1279]],
['üzemanyagkúton',[726,726,809,809,810,813,890,890,904,904,905,909,1165,1165,1272,1272,1274,1279]],
['kétvállalkozós',[726,809,810,813,890,904,905,909,1165,1272,1274,1279]],
['üzemanyag',[726,809,813,890,904,909,1165,1272,1279]],
['tulajdonos',[726,809,813,890,904,909,1165,1272,1279]],
['fuel',[726,809,810,813,890,891,893,904,905,909,989,990,991,1165,1241,1243,1272,1274,1279,1319,1320,1322,1339,1352,1369,1370,1371,1372]],
['two-operator',[726,809,810,813,890,904,905,909,1165,1272,1274,1279]],
['well',[726,809,810,813,890,904,905,909,1165,1272,1274,1279]],
['cotaxpayer',[726,772,809,810,890,904,905,916,1047,1060,1086,1165,1272,1274,1344,1349,1377,1400,1412]],
['Üzemanyagkúton',[]],
['posassignedbankaccountnumber',[726,773,814,815]],
['appsoftwaretype',[726,740]],
['softwarehash',[726,766,804,830,835,1083]],
['kiszámított',[726,830,835]],
['calculated',[726,830,835]],
['algorithm',[726,830,835]],
['softwarelastupdatetime',[726,766,804,830,837,1083]],
['frissítésének',[726,830,837]],
['taxpayeraddressclass',[726,841,843,845]],
['productitemtype',[726,816,828,829]],
['adattípus',[726,816]],
['dtszkid',[726,816,819,829]],
['dtszk',[726,816,819]],
['productid',[726,816,820,829]],
['terméken',[726,816,820]],
['feltüntetett',[726,816,820,1165,1236,1239]],
['productname',[726,816,822,829]],
['productmanufacturer',[726,816,821,829]],
['gyártó',[726,816,821]],
['validfrom',[726,816,825,829]],
['Érvényesség',[]],
['-tól',[726,816,825]],
['validto',[726,816,826,829]],
['categorycode',[726,816,817,829]],
['kategória',[726,816,817,818,862,864]],
['categorynamelevel4',[726,816,818,829]],
['szint',[726,816,818]],
['productlisttype',[726,828,1002,1037,1039]],
['productitem',[726,828,829,1039]],
['feltételnek',[726,828,829,1002,1037,1039]],
['megfelelt',[726,828,829,1002,1037,1039]],
['termékeket',[726,828,829,1002,1037,1039]],
['eredménylista',[726,828,829,1002,1037,1039]],
['teaorcodelisttype',[726,853]],
['üzlet',[726,853,854,1165,1280,1281,1282]],
['tevékenységei',[726,853]],
['activities',[726,853,854]],
['teaorcode',[726,853,854]],
['tevékenysége',[726,853,854]],
['endpointslisttype',[726,782,1002,1011,1012]],
['endpointok',[726,782]],
['endpoints',[726,782,783,1002,1011,1012,1135]],
['called',[726,782,784,787,1002,1040,1044,1142,1143]],
['endpointtype',[726,782,783,784,1002,1056,1057,1062,1084,1085,1088,1097,1098]],
['endpoint',[726,782,783,784,785,786,1002,1056,1057,1062,1084,1085,1088,1097,1098]],
['hívás',[726,782,783,1002,1056,1059,1061,1084,1087,1090]],
['call',[726,782,783,784,785,1002,1010,1011,1012,1056,1059,1061,1084,1087,1090,1134,1135]],
['positiveinteger',[726,784,786]],
['hívásának',[726,784,785,786]],
['sorrendje',[726,784,786]],
['1-től',[726,784,786,890,920,927,1165,1232,1235,1272,1277]],
['kezdődően',[726,784,786]],
['sorszámú',[726,784,786]],
['endpointtal',[726,784,786]],
['először',[726,784,786]],
['meghívni',[726,784,786]],
['starting',[726,784,786]],
['lower',[726,784,786]],
['httpmethod',[726,783,784,785,1057,1062,1085,1088,1098]],
['metódusa',[726,784,785]],
['hívjon',[726,784,787]],
['vatgrouptype',[726,855,862,863]],
['kulcsok',[726,855,858,862,1002,1084,1089,1126,1127,1128,1163,1164]],
['collectorcode',[726,855,856,863,890,932,933,942,964,965,974,1165,1189,1190,1191]],
['collectorcodetype',[726,855,856,890,932,933,964,965,1165,1190,1191,1314]],
['jele',[726,855,856,1165,1190,1191]],
['karakteren',[726,855,856,1165,1190,1191,1236,1238,1339,1389,1390]],
['collector',[726,855,856,890,932,933,964,965,1002,1084,1089,1127,1128,1165,1188,1189,1190,1191,1192,1193,1194,1314]],
['Áfa-kulcs',[]],
['százalékban',[726,855,857,859]],
['kifejezve',[726,855,857,858,859]],
['tizedespontot',[726,855,857,859]],
['alkalmazva',[726,855,857,859]],
['kulcshoz',[726,855,857]],
['vatlabel',[726,855,858,863]],
['egyes',[726,855,858,1002,1013,1028,1126,1127,1128,1136,1137,1163,1164]],
['számban',[726,855,858]],
['százalékjellel',[726,855,858]],
['each',[726,855,858]],
['vatlisttype',[726,860]],
['vatvalidfrom',[726,776,861,862,864,1089,1128]],
['azon',[726,862,864]],
['kulcsokat',[726,862,864]],
['címkéket',[726,862,864]],
['alkalmazni',[726,862,864]],
['labels',[726,862,864]],
['must',[726,862,864,1002,1004,1006,1013,1026,1046,1048,1056,1059,1061,1064,1066,1084,1087,1090,1100,1113,1118,1120,1122,1125,1127,1129]],
['vatgroup',[726,776,861,862,863,1089,1128]],
['kulcs',[726,862,863,989,995,999,1002,1013,1015,1100,1102,1165,1326,1327,1339,1386,1387]],
['cashregisterinfotype',[726,747,1002,1007,1008]],
['riport',[726,747,1002,1030,1032,1033,1049,1052,1053,1100,1102,1110,1113,1165,1289,1291,1338,1339,1352,1380,1386,1387,1388,1414,1415]],
['report',[726,747,748,750,1002,1030,1032,1033,1049,1052,1053,1056,1059,1061,1084,1087,1090,1100,1102,1109,1113,1115,1157,1158,1165,1289,1291,1322,1338,1339,1347,1352,1380,1381,1382,1383,1384,1386,1387,1388,1389,1414,1415]],
['cashregisterevent',[726,747,748,1008]],
['naplója',[726,747,748]],
['eseményeket',[726,747,748]],
['beküldeni',[726,747,748]],
['occured',[726,747,748,750]],
['cashregistertechnicalinfo',[726,747,751,1008]],
['állapotának',[726,747,750,751]],
['megfelelően',[726,747,750,751]],
['illetve',[726,747,750]],
['tekintetében',[726,747,750]],
['cashregisterposition',[726,747,749,1008]],
['műholdas',[726,747,749]],
['helymeghatározásra',[726,747,749]],
['alkalmas',[726,747,749]],
['applicable',[726,747,749]],
['cashregistertimeupdate',[726,747,752,1008]],
['órája',[726,747,752,890,891,898,899,920,924,925,1165,1272,1275]],
['állításra',[726,747,752]],
['óraállítás',[726,747,752]],
['körülményeiről',[726,747,752]],
['szolgáltatni',[726,747,752]],
['currentvatprocessid',[726,768,789,793,1002,1040,1042,1056,1059,1084,1090,1142]],
['processidentifiertype',[726,789,790,791,792,793,794,795,796,1002,1004,1006,1013,1026,1040,1041,1042,1043,1046,1048,1056,1059,1061,1064,1066,1084,1087,1090,1100,1113,1118,1120,1122,1125,1127,1129,1165,1337]],
['táblát',[726,789,793,796]],
['érvényre',[726,789,790,791,792,793,794,795,796]],
['juttató',[726,789,790,791,792,793,794,795,796]],
['utasítás',[726,789,790,791,792,793,794,795,796,1002,1004,1005,1006,1046,1048,1056,1058,1059,1061,1064,1066,1084,1087,1090,1118,1120,1122,1125,1127,1129]],
['instruction',[726,789,790,791,792,793,794,795,796,1002,1004,1006,1046,1048,1056,1059,1061,1064,1066,1084,1087,1090,1118,1120,1122,1125,1127,1129]],
['enforces',[726,789,790,791,792,793,795]],
['nextvatprocessid',[726,768,789,796]],
['következő',[726,789,794,796]],
['jövőben',[726,789,794,795,796]],
['végrehajtandó',[726,789,794,795,796,1002,1004,1006,1046,1048,1056,1059,1061,1064,1066,1084,1087,1090,1118,1120,1122,1125,1127,1129]],
['future',[726,789,794,795,796]],
['enforce',[726,789,794,796]],
['next',[726,789,794,795,796]],
['currentoperatorsiteprocessid',[726,768,789,791,1002,1040,1043,1056,1061,1084,1087,1142]],
['nextoperatorsiteprocessid',[726,768,789,794]],
['currentsoftwareprocessid',[726,768,789,792]],
['verziót',[726,789,792,795]],
['running',[726,789,792]],
['nextsoftwareprocessid',[726,768,789,795]],
['következően',[726,789,795]],
['futtatandó',[726,789,795]],
['currentaeblockunblockstateprocessid',[726,768,789,790,1002,1040,1041,1142]],
['állapotot',[726,789,790]],
['firmwareslicetype',[726,797,1002,1122,1124]],
['letöltöthető',[726,797,800,1002,1122,1124]],
['downloadable',[726,797,800,1002,1122,1124]],
['firmwareslicenumber',[726,797,800,1124]],
['firmwarehash',[726,797,799,1124]],
['letöltött',[726,797,799,1002,1122,1123]],
['segítségével',[726,797,799]],
['ellenőrizhető',[726,797,799]],
['letöltötés',[726,797,799]],
['sérült',[726,797,799]],
['downloaded',[726,797,798,799]],
['equal',[726,797,799]],
['firmwaredownloadurl',[726,797,798,1124]],
['letöltéséhez',[726,797,798]],
['groupidentificationnumber',[810,813,905,909,1002,1013,1018,1100,1103,1136,1157,1165,1274,1279,1305,1306]],
['shopname',[812,908,928,1165,1278,1280,1281]],
['shopshortname',[812,908,928,1165,1278,1280,1282]],
['documentdata',[890,989,990,991,992,993,994]],
['európai',[890,938,940,986]],
['gyártmánykód',[890,938,940,986]],
['european',[890,938,940,986]],
['numbering',[890,938,940,986]],
['documentdatatype',[890,891,952,954,961,963]],
['documentnumber',[890,891,897,920,922,931,953,954,962,963,993,996,997,998,1165,1227,1231,1232,1234,1258,1260,1388]],
['documentnumbertype',[890,891,897,920,922,1165,1227,1231,1232,1234,1258,1260,1322,1339,1340,1345,1347,1350,1352,1378,1389,1401,1408,1413]],
['változott',[890,891,897,920,922,1165,1227,1231,1232,1234,1258,1260]],
['struktúra',[890,891,897,920,922,1165,1227,1231,1232,1234,1258,1260,1339,1352]],
['documentissuedate',[890,891,896,954,963]],
['documentdatetype',[890,891,896,1002,1122,1123,1165,1209,1213,1321]],
['issuestartdatetime',[890,891,899,920,925,954,963,993,1165,1272,1275,1344,1349,1377,1400,1412]],
['nyitásának',[890,891,899,920,925,1165,1272,1275]],
['pontos',[890,891,898,899,920,924,925,1165,1272,1275]],
['exact',[890,891,898,899,920,924,925,1165,1272,1275]],
['opening',[890,891,899,920,925,1165,1272,1275,1339,1347,1348]],
['issueenddatetime',[890,891,898,920,924,954,963,993]],
['zárásának',[890,891,898,920,924]],
['healthfundinfo',[890,891,894,954,963]],
['healthfundinfotype',[890,891,894,1165,1245]],
['egészségkártya',[890,891,894,1165,1245,1247,1319]],
['információk',[890,891,893,894,895]],
['fuelcardinfo',[890,891,893,954,963]],
['fuelcardinfotype',[890,891,893,1165,1241]],
['Üzemanyagkártya',[]],
['consumesummarynumber',[890,891,892,954,963]],
['fogyasztásösszesítő',[890,891,892]],
['consume',[890,891,892,1165,1319,1320]],
['documenttype',[890,891,895,915]],
['documentdetailtype',[890,900,904,907]],
['documentcategory',[890,900,902,907]],
['documentcategorytype',[890,900,902,1165,1319]],
['amending',[890,900,902]],
['paymentinstruments',[890,900,903,907]],
['instrumenttype',[890,900,903,920,921,1165,1232,1233,1251,1339,1340,1341,1347,1348,1352,1355]],
['fizetőeszközök',[890,900,903,1165,1267,1339,1352,1356]],
['instruments',[890,900,903,1165,1267]],
['additionaldocumentdata',[890,900,901,907]],
['documentheadtype',[890,904,915,916]],
['documentdetail',[890,904,907,916]],
['documentreferencetype',[890,910,915,918]],
['originaldocumentnumber',[890,910,914,918]],
['documentunboundedindextype',[890,910,913,1165,1324]],
['cancellationreason',[890,910,911,918]],
['cancellationreasontype',[890,910,911,1165,1312]],
['sztornózás',[890,910,911,1165,1312]],
['modificationreason',[890,910,912,918]],
['modificationreasontype',[890,910,912,1165,1333]],
['documentreference',[890,895,915,918]],
['documenthead',[890,895,915,916]],
['documentlines',[890,895,915,917]],
['dokumentumon',[890,915,917,938,948,949,968,971,1165,1170,1171,1272,1273,1339,1403,1404,1405,1406,1407,1408,1411]],
['documentsummary',[890,895,915,919]],
['lineamountsdocumenttype',[890,932,938,942]],
['értékek',[890,932,933]],
['linegrossamountdocument',[890,932,934,942]],
['linegrossamountdocumenthuf',[890,932,935,942]],
['eancode',[890,937,938,940]],
['eantype',[890,938,940,1165,1325]],
['lineamountsdocument',[890,937,938,942]],
['itemnature',[890,937,938,941]],
['itemnaturetype',[890,938,941,1165,1331]],
['otherdocumentcoredatatype',[890,952,989,990,991]],
['üzleti',[11,66,97,129,248,250,890,929,931,952,953,954,961,962,963,989,990,991,992,994,1165,1258]],
['metadata',[890,929,931,952,953,961,962,991,992,994]],
['metadatatype',[890,929,931,952,953,961,962,1165,1258]],
['otherdocumentdata',[890,952,954,991]],
['types',[890,955]],
['receiptcoredatatype',[890,961,989,990,992]],
['nyugta',[890,961,963,989,990,992,995,998,1002,1013,1016,1028,1136,1137,1165,1319,1320,1322,1326,1327,1339,1352,1360,1389,1395,1396]],
['receipt',[890,961,963,976,989,990,992,995,998,999,1002,1013,1015,1030,1032,1033,1049,1052,1053,1165,1319,1320,1322,1326,1327,1339,1352,1358,1360,1366,1389,1394,1395,1396]],
['receiptdata',[890,961,963,992]],
['invoicecoredatatype',[890,929,989,990,994]],
['simplefied',[890,929]],
['summarydocumenttype',[890,964,972,974]],
['documentgrossamount',[890,968,969,975]],
['documentgrossamounthuf',[890,968,970,975]],
['documentroundingamount',[890,920,923,968,971,975,993]],
['kerekítés',[890,920,923,968,971,1339,1352,1353]],
['számolva',[890,920,923,968,971,1165,1236,1239]],
['előjellel',[890,920,923,968,971,1339,1340,1346]],
['ilyen',[890,920,923,968,971]],
['rounding',[890,920,923,968,971,1339,1340,1346,1352,1353,1354,1379]],
['summarydocument',[890,919,972,974]],
['ntcacontrolcode',[890,919,920,926,972,973,993,1165,1272,1276,1344,1349,1377,1400,1412]],
['ntcacontrolcodetype',[890,920,926,972,973,1165,1272,1276,1335]],
['bizonylaton',[890,920,923,926,972,973,989,995,997,1165,1272,1276,1335]],
['invoicecontroldatatype',[890,920,989,990,993]],
['bejegyzés',[890,920,927,1165,1232,1235,1272,1277]],
['sorszámozva',[890,920,927,1165,1232,1235,1272,1277]],
['szigorúan',[890,920,927,1165,1232,1235,1272,1277]],
['monoton',[890,920,927,1165,1232,1235,1272,1277]],
['növekvő',[890,920,927,1165,1232,1235,1272,1277]],
['benne',[890,920,927,1165,1232,1235,1272,1277]],
['kihagyás',[890,920,927,1165,1232,1235,1272,1277]],
['numbered',[890,920,927,1165,1232,1235,1272,1277]],
['strictly',[890,920,927,1165,1232,1235,1272,1277]],
['monotonic',[890,920,927,1165,1232,1235,1272,1277]],
['ascending',[890,920,927,1165,1232,1235,1272,1277]],
['skips',[890,920,927,1165,1232,1235,1272,1277]],
['balancechange',[890,920,921,993,1165,1232,1233,1339,1340,1341,1352,1355,1381,1383]],
['fióktartalom',[890,920,921,1165,1232,1233,1339,1340,1341,1352,1353,1354]],
['balance',[890,920,921,1002,1100,1115,1157,1158,1165,1232,1233,1313,1338,1339,1340,1341,1347,1352,1353,1354,1355,1356,1380,1382]],
['fuelcardnumber',[893,1165,1241,1243]],
['authorizationnumber',[893,1165,1241,1242]],
['healthfundname',[894,1165,1245,1250]],
['healthfundaddress',[894,1165,1245,1246]],
['healthfundcode',[894,1165,1245,1248]],
['healthfundmembernumber',[894,1165,1245,1249]],
['healthfundcardnumber',[894,1165,1245,1247]],
['cashhufamount',[903,921,1165,1233,1251,1254,1341,1348,1355]],
['foreigncurrency',[903,921,1165,1233,1251,1255,1341,1348,1355]],
['cardpaymentamount',[903,921,1165,1233,1251,1253,1341,1348,1355]],
['szepcardamount',[903,921,1165,1233,1251,1257,1341,1348,1355]],
['aframount',[903,921,1165,1233,1251,1252,1341,1348,1355]],
['otherpayment',[903,921,1165,1233,1251,1256,1341,1348,1355]],
['documentoperation',[931,953,962,1165,1258,1261]],
['apnumber',[931,953,962,1003,1004,1007,1009,1010,1011,1013,1028,1030,1034,1035,1037,1040,1044,1045,1046,1049,1056,1063,1064,1067,1071,1073,1077,1084,1091,1097,1100,1115,1117,1118,1121,1122,1126,1127,1130,1131,1132,1133,1134,1135,1136,1137,1138,1139,1140,1141,1142,1143,1144,1145,1146,1147,1148,1149,1150,1151,1152,1153,1154,1155,1156,1157,1158,1159,1160,1161,1162,1163,1164,1165,1183,1184,1185,1186,1258,1259]],
['modeljét',[989]],
['meghatározó',[989,1339]],
['defines',[989]],
['model',[989]],
['passed',[989]],
['through',[989]],
['27--',[989,1002,1339]],
['documentmessage',[989]],
['customerdocumenttype',[989,995,1001]],
['vevőnek',[989,995,1001,1002,1013,1017,1100,1110,1339,1386,1415]],
['átadandó',[989,990,995,1000,1001,1002,1013,1017,1100,1110,1339,1380,1386,1414,1415]],
['decryptkey',[989,995,999,1001,1002,1013,1015,1100,1102,1136,1157,1339,1386,1387,1415]],
['független',[989,995,999,1002,1013,1015,1100,1102,1339,1386,1387]],
['szimetrikus',[989,995,999,1002,1013,1015,1100,1102,1339,1386,1387]],
['kititkosításához',[989,995,999,1002,1013,1015,1100,1102,1339,1386,1387]],
['independent',[989,995,999,1002,1013,1015,1100,1102,1339,1386,1387]],
['symmetric',[989,995,999,1002,1013,1015,1100,1102,1165,1326,1327,1339,1386,1387]],
['encryption',[989,995,999,1002,1013,1015,1100,1102,1339,1386,1387]],
['receiptadditional',[989,995,998,1001,1165,1166,1169]],
['documentadditionaldatatype',[989,995,996,997,998,1165,1227,1339,1386,1388]],
['nyugtán',[989,995,998]],
['ahhoz',[989,995,997,998,1339,1386,1388]],
['vevővel',[989,995,996,997,998]],
['szeretne',[989,995,996,997,998,1002,1049,1054]],
['megosztani',[989,995,996,997,998]],
['például',[989,995,996,997,998,1165,1180,1182]],
['garanciára',[989,995,996,997,998]],
['wishes',[989,995,996,997,998]],
['share',[989,995,996,997,998]],
['example',[989,995,996,997,998,1165,1180,1182]],
['guarantee',[989,995,996,997,998]],
['otherdocumentadditional',[989,995,997,1001,1165,1166,1169]],
['invoiceadditional',[989,995,996,1001,1165,1166,1169]],
['számlához',[989,990,993,995,996]],
['adatkok',[989,995,996]],
['coredocumenttype',[989,990,1000]],
['nav-nak',[989,990,1000,1002,1013,1017,1100,1110,1339,1380,1414]],
['kontroll',[989,990,993,1000]],
['receiptcore',[989,990,992,1000,1165,1166,1169]],
['otherdocumentcore',[989,990,991,1000,1165,1166,1169]],
['üzemanyagkártyás',[989,990,991,1165,1320,1322,1339,1352,1369,1370,1371,1372]],
['értékesítési',[989,990,991,1165,1320]],
['egészségkártyás',[989,990,991,1165,1320,1322,1339,1352,1373,1374,1375,1376]],
['szállodai',[989,990,991,1165,1319,1320,1322]],
['átterhelés',[989,990,991,1165,1319,1322]],
['fogyasztási',[989,990,991,1165,1319,1320,1322,1331]],
['vouchers',[989,990,991]],
['hotel',[989,990,991,1165,1319,1320,1322]],
['consumption',[989,990,991,1165,1319,1320,1322,1331]],
['invoicecore',[989,990,994,1000,1165,1166,1169]],
['invoicecontrol',[989,990,993,1000]],
['amelyek',[989,990,993]],
['bizonylatnak',[989,990,993]],
['mellékletnek',[989,990,993]],
['felé',[989,990,993,1002,1142]],
['adatszolgáltatási',[989,990,993]],
['customerdocument',[989,1001,1165,1283,1284]],
['coredocument',[989,1000,1165,1283,1285]],
['additionalhead',[996,997,998,1165,1227,1228,1388]],
['attachment',[996,997,998,1165,1180,1227,1230,1388]],
['additionallines',[996,997,998,1165,1227,1229,1388]],
['hívható',[1002]],
['kérés-válasz',[1002]],
['objektumait',[1002]],
['objects',[1002]],
['reportmessage',[1002,1339]],
['blockunblockrequesttype',[1002,1003,1130]],
['blokkolását',[1002,1003,1004,1005,1056,1058,1130,1131]],
['blokkolásának',[1002,1003,1004,1005,1056,1058,1130,1131]],
['feloldását',[1002,1003,1004,1130,1131]],
['megvalósító',[1002,1003,1004,1013,1028,1045,1046,1063,1064,1077,1084,1100,1115,1117,1118,1126,1127,1130,1131,1136,1137,1144,1145,1148,1149,1153,1154,1157,1158,1159,1160,1163,1164]],
['basicereceiptrequesttype',[1002,1003,1007,1010,1013,1030,1035,1040,1045,1049,1063,1071,1077,1091,1100,1117,1121,1126,1165,1183]],
['blockunblockresponsetype',[1002,1004,1131]],
['basicereceiptresponsetype',[1002,1004,1009,1011,1028,1034,1037,1044,1046,1056,1064,1067,1073,1084,1097,1115,1118,1122,1127,1165,1185]],
['blockunblock',[1002,1004,1005,1056,1058,1131,1147]],
['blokkolására',[1002,1004,1005]],
['feloldására',[1002,1004,1005,1056,1058]],
['e-pénztárgépet',[1002,1004,1005]],
['állapotba',[1002,1004,1005,1006,1046,1048,1064,1066,1118,1120,1122,1125,1127,1129]],
['állítani',[1002,1004,1005]],
['oldani',[1002,1004,1005,1056,1058]],
['command',[1002,1004,1005,1013,1026,1100,1113]],
['unblocked',[1002,1004,1005,1056,1058]],
['blockunblockprocessid',[1002,1004,1006,1056,1059,1131,1147]],
['visszajelentésekben',[1002,1004,1006,1046,1048,1064,1066,1118,1120,1122,1125,1127,1129]],
['azonosítót',[1002,1004,1006,1013,1026,1046,1048,1056,1059,1061,1064,1066,1084,1087,1090,1100,1113,1118,1120,1122,1125,1127,1129]],
['visszaadni',[1002,1004,1006,1046,1048,1056,1059,1061,1064,1066,1084,1087,1090,1118,1120,1122,1125,1127,1129]],
['azonosítójaként',[1002,1004,1006,1046,1048,1064,1066,1118,1120,1122,1125,1127,1129]],
['reports',[1002,1004,1006,1046,1048,1064,1066,1118,1120,1122,1125,1127,1129,1339,1340,1344,1347,1349,1352,1377,1389,1400,1408,1412]],
['cashregisterinforequesttype',[1002,1007,1132]],
['beküldésének',[1002,1007,1132]],
['cashregisterinfo',[1002,1007,1008,1132]],
['cashregisterinforesponsetype',[1002,1009,1133]],
['commmgrrequesttype',[1002,1010,1134]],
['listáját',[1002,1010,1011,1134,1135]],
['visszaadó',[1002,1010,1011,1134,1135]],
['lists',[1002,1010,1011,1134,1135]],
['commmgrresponsetype',[1002,1011,1135]],
['documentrequesttype',[1002,1013,1136]],
['értékesítések',[1002,1013,1028,1136,1137]],
['bizonylatainak',[1002,1013,1028,1136,1137]],
['fogadását',[1002,1013,1028,1100,1115,1136,1137,1157,1158]],
['receives',[1002,1013,1028,1100,1115,1136,1137,1157,1158]],
['receipts',[1002,1013,1028,1136,1137]],
['bizonylatot',[1002,1013,1018,1027,1100,1103,1114,1165,1320]],
['adószámának',[1002,1013,1027,1091,1096,1100,1114]],
['karaktere',[1002,1013,1018,1027,1071,1072,1091,1096,1100,1103,1114]],
['Áfa-csoport',[]],
['tagság',[1002,1013,1018,1027,1100,1103,1114,1165,1305,1306,1307]],
['tagi',[1002,1013,1027,1100,1114,1165,1305,1307]],
['creates',[1002,1013,1018,1027,1100,1103,1114]],
['part',[1002,1013,1018,1027,1100,1103,1114,1165,1305,1306,1307,1326,1327]],
['számának',[1002,1013,1018,1100,1103]],
['documentclass',[1002,1013,1016,1136]],
['documentclasstype',[1002,1013,1016,1165,1320]],
['recipt',[1002,1013,1016]],
['documentenvelope',[1002,1013,1017,1136]],
['signeddocumentenvelopetype',[1002,1013,1017,1165,1283]],
['dokumentációban',[1002,1013,1017,1022,1100,1107,1110]],
['described',[1002,1013,1017,1100,1110]],
['searchkeytimestamp',[1002,1013,1025,1100,1112,1136,1157]],
['nyugtatárból',[1002,1013,1024,1025,1100,1111,1112]],
['ezzel',[1002,1013,1024,1025,1100,1111,1112]],
['időbélyeggel',[1002,1013,1025,1100,1112]],
['kérdezhető',[1002,1013,1024,1025,1100,1111,1112]],
['időpontját',[1002,1013,1025]],
['store',[1002,1013,1024,1025,1100,1111,1112]],
['searchkey',[1002,1013,1024,1100,1111,1136,1157]],
['kulccsal',[1002,1013,1014,1024,1100,1101,1111]],
['qrcodeexpired',[1002,1013,1022,1100,1107,1136,1157]],
['generálása',[1002,1013,1022,1100,1107]],
['időintervallumnál',[1002,1013,1022,1100,1107]],
['régebben',[1002,1013,1022,1100,1107]],
['készült',[1002,1013,1022,1100,1107]],
['offlinecreated',[1002,1013,1021,1100,1106,1136,1157]],
['hírközlő',[1002,1013,1021,1100,1106]],
['hálózat',[1002,1013,1021,1100,1106]],
['elérhetetlenségének',[1002,1013,1021,1100,1106]],
['megszűnése',[1002,1013,1021,1100,1106]],
['bizonylatokat',[1002,1013,1021,1100,1106]],
['adatszolgáltatásokat',[1002,1013,1021,1100,1106]],
['haladéktalanul',[1002,1013,1021,1100,1106]],
['küldeni',[1002,1013,1021,1091,1095,1100,1106]],
['késleltetett',[1002,1013,1021,1100,1106]],
['tényét',[1002,1013,1021,1100,1106]],
['ennek',[1002,1013,1021,1100,1106]],
['mezőnek',[1002,1013,1021,1100,1106]],
['kitöltésével',[1002,1013,1021,1100,1106]],
['jelezni',[1002,1013,1021,1100,1106]],
['offline',[1002,1013,1021,1100,1106]],
['again',[1002,1013,1021,1100,1106]],
['immidiately',[1002,1013,1021,1100,1106]],
['flag',[1002,1013,1021,1100,1106]],
['cashregistersigncertificate',[1002,1013,1014,1100,1101,1136,1157]],
['tanúsítványa',[1002,1013,1014,1100,1101]],
['privát',[1002,1013,1014,1100,1101]],
['kulcsával',[1002,1013,1014,1100,1101]],
['kerülnek',[1002,1013,1014,1100,1101]],
['aláírásra',[1002,1013,1014,1100,1101]],
['követelmények',[1002,1013,1014,1100,1101]],
['„aláírás',[1002,1013,1014,1100,1101]],
['találhatók',[1002,1013,1014,1100,1101]],
['requirements',[1002,1013,1014,1100,1101]],
['aktuálisan',[1002,1013,1023,1100,1108]],
['actual',[1002,1013,1023,1100,1108]],
['ntcaverificationcode',[1002,1013,1020,1100,1105,1136,1157]],
['sendmissingdocumentprocessid',[1002,1013,1026,1100,1113,1118,1120,1136,1157,1160]],
['felszólítás',[1002,1013,1026,1100,1113]],
['végrehajtásaként',[1002,1013,1026,1100,1113]],
['történik',[1002,1013,1026,1100,1113]],
['megadni',[1002,1013,1026,1100,1113]],
['abban',[1002,1013,1026,1100,1113]],
['kapott',[1002,1013,1026,1040,1041,1042,1043,1100,1113]],
['execution',[1002,1013,1026,1100,1113]],
['entered',[1002,1013,1026,1100,1113]],
['here',[1002,1013,1026,1100,1113]],
['documentresponsetype',[1002,1028,1137]],
['querycertificateresponsetype',[1002,1067,1150]],
['querycertificateresult',[1002,1067,1070,1150]],
['lekérés',[1002,1067,1070]],
['endofoperationrequesttype',[1002,1030,1138]],
['üzemeltetés',[726,883,1002,1030,1034,1138,1139,1140,1141]],
['befejezés',[1002,1030,1034,1138,1139,1140,1141]],
['cotaxpayerlastrecordcounter',[1002,1030,1032,1049,1052,1138,1146]],
['kétadózós',[1002,1030,1032,1049,1052]],
['társadózó',[1002,1030,1032,1049,1052]],
['taxpayers',[1002,1030,1032,1049,1052]],
['co-taxpayer',[1002,1030,1032,1049,1052]],
['endofoperationresponsetype',[1002,1034,1139]],
['getproductbycoderequesttype',[1002,1035,1140]],
['frissítését',[1002,1035,1037,1045,1046,1121,1122,1144,1145,1161,1162]],
['kezdeményező',[1002,1035,1037,1049,1056,1091,1097,1121,1122,1146,1147,1155,1156,1161,1162]],
['csomagolásáról',[1002,1035,1036]],
['leolvasott',[1002,1035,1036]],
['getproductbycoderesponsetype',[1002,1037,1141]],
['numberofproducts',[1002,1037,1038,1141]],
['eredménylistában',[1002,1037,1038]],
['található',[1002,1037,1038]],
['hellorequesttype',[1002,1040,1142]],
['regisztrálását',[1002,1040,1044,1142,1143]],
['átszemélyesítését',[1002,1040,1044,1049,1056,1142,1143,1146,1147]],
['hívást',[1002,1040,1041,1042,1043]],
['megelőző',[1002,1040,1041,1042,1043]],
['eszközregisztráció',[1002,1040,1042,1043]],
['átszemélyesítés',[726,883,1002,1040,1041,1043]],
['adatokhoz',[1002,1040,1043]],
['operatorsiteprocessidentifier',[1002,1040,1043]],
['táblázathoz',[1002,1040,1042]],
['vatprocessidentifier',[1002,1040,1042]],
['feloldáshoz',[1002,1040,1041]],
['blockunblockprocessidentifier',[1002,1040,1041]],
['helloresponsetype',[1002,1044,1143]],
['operatorsiteupdaterequesttype',[1002,1045,1144]],
['operatorsiteupdateresponsetype',[1002,1046,1145]],
['operatorsiteupdateprocessid',[1002,1046,1048,1145]],
['ownerchangerequesttype',[1002,1049,1146]],
['adózónak',[1002,1049,1054]],
['amelyre',[1002,1049,1054]],
['átszemélyesedni',[1002,1049,1054]],
['belongs',[1002,1049,1054]],
['authenticationcertificaterequest',[1002,1049,1050,1077,1078,1146,1153]],
['kulcspárral',[1002,1049,1050,1055,1077,1078,1082]],
['kérelem',[1002,1049,1050,1055,1077,1078,1082,1091,1092,1093]],
['signingcertificaterequest',[1002,1049,1055,1077,1082,1146,1153]],
['ownerchangeresponsetype',[1002,1056,1147]],
['operatorsiteprocessid',[1002,1056,1061,1084,1087,1147,1154]],
['beállítása',[1002,1056,1061,1084,1087]],
['előtti',[1002,1056,1059,1061,1084,1087,1090]],
['visszajelentésben',[1002,1056,1059,1061,1084,1087,1090]],
['mezőben',[1002,1056,1059,1061,1084,1087,1090,1091,1095]],
['before',[1002,1056,1059,1061,1077,1081,1084,1087,1090]],
['authenticationcertificateendpoint',[1002,1056,1057,1084,1085,1147,1154]],
['letöltésére',[1002,1056,1057,1062,1084,1085,1088,1097,1098]],
['való',[1002,1056,1057,1062,1084,1085,1088,1097,1098]],
['downloading',[1002,1056,1057,1062,1084,1085,1088,1097,1098]],
['signingcertificateendpoint',[1002,1056,1062,1084,1088,1147,1154]],
['printtechnicalinforequesttype',[1002,1063,1148]],
['küldését',[1002,1063,1064,1148,1149]],
['printtechnicalinforesponsetype',[1002,1064,1149]],
['printmessage',[1002,1064,1065,1149]],
['szövege',[1002,1064,1065]],
['üzenetben',[1002,1064,1065]],
['„\n”',[1002,1064,1065]],
['karaktersorozatot',[1002,1064,1065]],
['sor”',[1002,1064,1065]],
['karakterként',[1002,1064,1065]],
['értelmezni',[1002,1064,1065]],
['nyomtatáskor',[1002,1064,1065]],
['megjelenítéskor',[1002,1064,1065]],
['visualization',[1002,1064,1065]],
['character',[1002,1064,1065]],
['printtechnicalinfoprocessid',[1002,1064,1066,1149]],
['check',[1002,1071,1072,1073,1151,1152]],
['lekérdezendő',[1002,1071,1072]],
['registrationrequesttype',[1002,1077,1153]],
['eszközregisztrációt',[1002,1077,1084,1153,1154]],
['üzembehelyezéséhez',[1002,1077,1081]],
['előtt',[1002,1077,1081]],
['igényelni',[1002,1077,1081]],
['regsitration',[1002,1077,1081]],
['registrationresponsetype',[1002,1084,1154]],
['alkalmazandó',[1002,1084,1089]],
['gyűjtők',[1002,1084,1089,1165,1188,1189,1190,1209,1211]],
['vatprocessid',[1002,1084,1090,1154]],
['táblázat',[1002,1084,1090]],
['beállítás',[1002,1084,1090]],
['renewcertificaterequesttype',[1002,1091,1155]],
['megújítását',[1002,1091,1097,1155,1156]],
['renewcertificatecode',[1002,1091,1095,1155]],
['üzemeltetőnek',[1002,1091,1095]],
['nav-tól',[1002,1091,1095]],
['kérnie',[1002,1091,1095]],
['megújító',[1002,1091,1095]],
['ebben',[1002,1091,1095]],
['certificaterequest',[1002,1091,1092,1155]],
['cmscertificaterequest',[1002,1091,1093,1155]],
['megújítás',[1002,1091,1093]],
['becsomagolva',[1002,1091,1093]],
['aláírva',[1002,1091,1093]],
['renewal',[1002,1091,1093]],
['packed',[1002,1091,1093]],
['signed',[1002,1091,1093,1165,1283,1289]],
['renewcertificateresponsetype',[1002,1097,1156]],
['certificateendpoint',[1002,1097,1098,1156]],
['reportrequesttype',[1002,1100,1157]],
['pénztárnyitás',[1002,1100,1115,1157,1158,1165,1338,1339,1347,1380,1382]],
['napi',[1002,1100,1115,1157,1158,1165,1188,1189,1190,1192,1193,1194,1207,1208,1209,1322,1338,1339,1352,1357,1358,1359,1360,1361,1362,1363,1364,1365,1366,1367,1368,1380,1384,1389,1391,1392,1393,1394,1395,1396,1397,1398,1399]],
['jelentés',[1002,1100,1115,1157,1158,1165,1207,1208,1209,1322,1338,1339,1380,1384,1389]],
['pénztárjelentés',[1002,1100,1109,1115,1157,1158,1165,1338,1339,1352,1380,1383]],
['pénzmozgás',[1002,1100,1109,1115,1157,1158,1165,1322,1331,1338,1339,1340,1352,1355,1356,1362,1365,1380,1381]],
['open',[1002,1100,1115,1157,1158,1165,1322,1338,1339,1347,1380,1382]],
['daily',[1002,1100,1115,1157,1158,1165,1188,1189,1190,1192,1193,1194,1207,1208,1209,1322,1338,1339,1352,1357,1358,1359,1360,1361,1362,1363,1364,1365,1366,1367,1368,1380,1384,1389,1391,1392,1393,1394,1395,1396,1397,1398,1399]],
['cashflow',[1002,1100,1115,1157,1158,1165,1207,1208,1209,1322,1331,1338,1339,1352,1362,1365,1389]],
['reportclass',[1002,1100,1109,1157]],
['reportclasstype',[1002,1100,1109,1165,1338]],
['reportenvelope',[1002,1100,1110,1157]],
['signedreportenvelopetype',[1002,1100,1110,1165,1289]],
['előírt',[1002,1100,1110]],
['tranzakcióban',[1002,1100,1111,1112]],
['involved',[1002,1100,1111,1112]],
['reportresponsetype',[1002,1115,1158]],
['softwareupdaterequesttype',[1002,1121,1161]],
['softwareupdateresponsetype',[1002,1122,1162]],
['firmwareinstallduedate',[1002,1122,1123,1162]],
['szoftvert',[1002,1122,1123]],
['telepítését',[1002,1122,1123]],
['meddig',[1002,1122,1123]],
['végrehajtani',[1002,1122,1123]],
['softwareupdateprocessid',[1002,1122,1125,1162]],
['firmwareslice',[1002,1122,1124,1162]],
['vatupdaterequesttype',[1002,1126,1163]],
['gyűjtőkhöz',[1002,1126,1127,1128,1163,1164]],
['módosítását',[1002,1126,1127,1163,1164]],
['vatupdateresponsetype',[1002,1127,1164]],
['keys',[1002,1127,1128]],
['vatupdateprocessid',[1002,1127,1129,1164]],
['sendmissingdocumentrequesttype',[1002,1117,1159]],
['beküldését',[1002,1117,1118,1159,1160]],
['implements',[1002,1117,1118,1159,1160]],
['sending',[1002,1117,1118,1159,1160]],
['sendmissingdocumentresponsetype',[1002,1118,1160]],
['beküldendő',[1002,1118,1119,1339]],
['blockunblockrequest',[1002,1130]],
['objektuma',[1002,1130,1131,1134,1135,1136,1137,1138,1139,1140,1141,1142,1143,1144,1145,1146,1147,1148,1149,1151,1152,1153,1154,1155,1156,1157,1158,1159,1160,1161,1162,1163,1164]],
['blockunblockresponse',[1002,1131]],
['cashregisterinforequest',[1002,1132]],
['cashregisterinforesponse',[1002,1133]],
['commmgrrequest',[1002,1134]],
['commmgrresponse',[1002,1135]],
['documentrequest',[1002,1136]],
['documentresponse',[1002,1137]],
['endofoperationrequest',[1002,1138]],
['endofoperationresponse',[1002,1139]],
['getproductbycoderequest',[1002,1140]],
['getproductbycoderesponse',[1002,1141]],
['hellorequest',[1002,1142]],
['hívással',[1002,1142]],
['nav-i',[1002,1142]],
['regisztrációs',[1002,1142]],
['átszemélyesítési',[1002,1142]],
['lezárult',[1002,1142]],
['helloresponse',[1002,1143]],
['operatorsiteupdaterequest',[1002,1144]],
['operatorsiteupdateresponse',[1002,1145]],
['ownerchangerequest',[1002,1146]],
['ownerchangeresponse',[1002,1147]],
['printtechnicalinforequest',[1002,1148]],
['printtechnicalinforesponse',[1002,1149]],
['querycertificateresponse',[1002,1150]],
['registrationrequest',[1002,1153]],
['registrationresponse',[1002,1154]],
['renewcertificaterequest',[1002,1155]],
['renewcertificateresponse',[1002,1156]],
['reportrequest',[1002,1157]],
['reportresponse',[1002,1158]],
['softwareupdaterequest',[1002,1161]],
['softwareupdateresponse',[1002,1162]],
['vatupdaterequest',[1002,1163]],
['vatupdateresponse',[1002,1164]],
['sendmissingdocumentrequest',[1002,1159]],
['sendmissingdocumentresponse',[1002,1160]],
['callbackrequired',[1004,1009,1011,1028,1034,1037,1044,1046,1056,1064,1067,1073,1084,1097,1115,1118,1122,1127,1131,1133,1135,1137,1139,1141,1143,1145,1147,1149,1150,1152,1154,1156,1158,1160,1162,1164,1165,1185,1187]],
['envelopeversion',[1017,1110,1165,1283,1288,1289,1294]],
['envelopedata',[1017,1110,1165,1283,1285,1286,1287,1289,1291,1292,1293]],
['customerenvelopedata',[1017,1110,1165,1283,1284,1286,1287,1289,1290,1292,1293]],
['envelopehash',[1017,1110,1165,1283,1286,1289,1292]],
['envelopesignature',[1017,1110,1165,1283,1287,1289,1293]],
['apnumbertype',[1165,1183,1184,1185,1186,1258,1259,1310]],
['customerappeventcodetype',[1165,1315]],
['applikáció',[1165,1315]],
['eseménykód',[1165,1315]],
['application',[1165,1315]],
['digit4type',[1165,1318,1339,1389,1390]],
['file512kbinarytype',[1165,1180,1181,1329]],
['bináris',[1165,1180,1181,1329]],
['fájl',[1165,1180,1181,1329,1330]],
['512kb',[1165,1329]],
['binary',[1165,1180,1181,1329]],
['fileextensiontype',[1165,1180,1182,1330]],
['kiterjesztés',[1165,1180,1182,1330]],
['Ügyfél',[]],
['elállása',[1165,1312,1333]],
['kezelői',[1165,1312]],
['téves',[1165,1312]],
['bevitel',[1165,1312,1313]],
['incorrect',[1165,1312]],
['fizetőeszköz',[1165,1251,1264,1265,1266,1267,1268,1269,1312,1313,1339,1340,1343]],
['készleten',[1165,1312]],
['stock',[1165,1312]],
['bizonylattípus',[1165,1312]],
['kibocsátása',[1165,1312]],
['sikertelen',[1165,1312]],
['használat',[1165,1312]],
['unsuccesfull',[1165,1312]],
['ügyfél',[1165,1165,1312,1312,1333]],
['próbavásárlás',[1165,1312]],
['test',[1165,1312]],
['cashpaymenttitletype',[1165,1313,1339,1340,1343]],
['pénztári',[1165,1313,1339,1340,1343]],
['befizetés-kifizetés',[1165,1313]],
['csere',[1165,1313,1339,1340,1343]],
['jogcímei',[1165,1313,1339,1340,1343]],
['váltópénz',[1165,1313]],
['coin',[1165,1313]],
['pénztáros',[1165,1313]],
['pénzfelvétel',[1165,1313]],
['withdraw',[1165,1313]],
['cashier',[1165,1313]],
['díjbeszedés',[1165,1313]],
['collection',[1165,1313]],
['sorsjegy',[1165,1313]],
['eladás',[1165,1313]],
['lottery',[1165,1313]],
['ticket',[1165,1313]],
['pénztár',[1165,1313,1322]],
['hiány',[1165,1313]],
['deficit',[1165,1313]],
['borravaló',[1165,1313]],
['befizetés',[1165,1313,1339,1340,1343]],
['fölözés',[1165,1313]],
['skimming',[1165,1313]],
['levétel',[1165,1313]],
['kivét',[1165,1313]],
['take',[1165,1313]],
['ajándékkártya',[1165,1313]],
['gift',[1165,1313]],
['bérkifizetés',[1165,1313]],
['salary',[1165,1313]],
['munkabér',[1165,1313]],
['pre-payment',[1165,1313]],
['postaköltség',[1165,1313]],
['postal',[1165,1313]],
['rezsi',[1165,1313]],
['costs',[1165,1313]],
['Áruvásárlás',[]],
['purchasing',[1165,1313]],
['záróösszeg',[1165,1313]],
['kifizetés',[1165,1313,1339,1340,1343]],
['készpénzfelvétel',[1165,1313]],
['cashback',[1165,1313]],
['gyüjtő',[1165,1314]],
['|n|tam|aam|eam|atk|tra|sec|art|ant|eue|ho',[1165,1314]],
['deferred',[1165,1319,1320,1322]],
['milyen',[1165,1320,1338]],
['class',[1165,1320,1338]],
['what',[1165,1320,1338]],
['Üzemanyagkártyás',[]],
['fund',[1165,1245,1246,1247,1248,1249,1250,1320,1322]],
['átterhelési',[1165,1320]],
['simplifiedinvoice',[1165,1320]],
['normalinvoice',[1165,1320]],
['uk|ek|sz|ny|pm|pj|sa|fo|ot',[1165,1322]],
['nn|nz',[1165,1322]],
['napnyitás',[1165,1322]],
['cashregister',[1165,1322,1338]],
['documentoperationtype',[1165,1258,1261,1323]],
['documentum',[1165,1323]],
['dokumentumot',[1165,1323]],
['encryptedsymmetricinitialvectortype',[1165,1326]],
['részének',[1165,1326,1327]],
['titkosításához',[1165,1326,1327]],
['szimmetrikus',[1165,1326,1327]],
['encrypt',[1165,1326,1327]],
['encryptedsymmetrickeytype',[1165,1327]],
['Értékesítés',[]],
['sztornó',[1165,1331]],
['engedmény',[1165,1331]],
['üzletpolitikai',[1165,1331]],
['kedvezmény',[1165,1331]],
['non-business',[1165,1331]],
['policy',[1165,1331]],
['preferences',[1165,1331]],
['felár',[1165,1331]],
['extra',[1165,1331]],
['göngyöleg',[1165,1331]],
['visszaváltás',[1165,1331]],
['returnable',[1165,1331]],
['packing',[1165,1331]],
['visszáru',[1165,1331,1333]],
['vevőt',[1165,1331]],
['érintő',[1165,1331]],
['involving',[1165,1331]],
['defective',[1165,1333]],
['vásárlástól',[1165,1333]],
['customer’s',[1165,1333]],
['right',[1165,1333]],
['rescission',[1165,1333]],
['szep',[1165,1336]],
['szÉp',[]],
['kártya',[1165,1251,1257,1336]],
['azonnali',[1165,1336]],
['immediate',[1165,1251,1252,1336]],
['riportot',[1165,1338]],
['cashregisteropenbalance',[1165,1338]],
['dailycashflow',[1165,1338]],
['additionaldata',[1165,1166,1169,1170,1171,1228,1272,1273,1344,1349,1377,1400,1412]],
['attachmenttype',[1165,1180,1227,1230]],
['csatoltmány',[1165,1180]],
['filebinary',[1165,1180,1181,1230]],
['csatolt',[1165,1180,1181,1182,1227,1230]],
['attached',[1165,1180,1181,1182,1227,1230]],
['fileextension',[1165,1180,1182,1230]],
['additionalheadtype',[1165,1170,1227,1228]],
['egészére',[1165,1170,1227,1228]],
['additionallinestype',[1165,1172,1227,1229]],
['tételeire',[1165,1172,1227,1229]],
['additionalline',[1165,1172,1173,1229]],
['additionallinetype',[1165,1172,1173,1174]],
['enyugta',[1165,1183,1185]],
['visszahívás',[1165,1185,1187]],
['callback',[1165,1185,1187]],
['commercecollectorlisttype',[1165,1188,1209,1211]],
['gyüjtők',[1165,1188]],
['commerce',[1165,1188,1189,1190,1209,1210,1211]],
['collectors',[1165,1188,1209,1211]],
['commercialcollector',[1165,1188,1189,1211]],
['commercecollectortype',[1165,1188,1189,1190]],
['forgalom',[1165,1188,1189,1190,1209,1210,1339,1352,1372,1376,1389,1402]],
['collectorgrossamount',[1165,1189,1190,1192]],
['gyűjtőbe',[1165,1190,1192,1193,1194]],
['összértéke',[1165,1190,1192,1193,1194]],
['collectornetamount',[1165,1189,1190,1193]],
['collectorvatamount',[1165,1189,1190,1194]],
['dailycashflowdetailtype',[1165,1207,1208,1209,1339,1389,1394,1395,1396]],
['commercecollectorlist',[1165,1208,1209,1211,1394,1395,1396]],
['bontás',[1165,1209,1211]],
['darabszáma',[1165,1209,1212]],
['fulfillmentdate',[1165,1208,1209,1213,1394,1395,1396]],
['bizonylatok',[1165,1209,1213]],
['fulfillment',[1165,1209,1213]],
['dailycashflowdetaillisttype',[1165,1207,1339,1389,1391,1392,1393,1397,1398,1399]],
['dailycashflowdetail',[1165,1207,1208,1391,1392,1393,1397,1398,1399]],
['tájékoztatási',[1165,1227]],
['dokumentumhoz',[1165,1227,1230]],
['documentcontroldatatype',[1165,1232]],
['rész',[1165,1232]],
['foreigncurrencytype',[1165,1236,1251,1255]],
['valutában',[1165,1236,1237,1251,1255]],
['befizetett',[1165,1236,1251,1255]],
['currencyamount',[1165,1236,1237,1255]],
['valuta',[1165,1236,1237,1239,1240]],
['valutanem',[1165,1236,1238]],
['nagybetűvel',[1165,1236,1238]],
['egységének',[1165,1236,1240]],
['kifejezett',[1165,1236,1240]],
['currencyhufamount',[1165,1236,1239,1255]],
['árfolyamon',[1165,1236,1239]],
['legalább',[1165,1241,1243]],
['négy',[1165,1241,1243,1339,1389,1390]],
['engedélyezési',[1165,1241,1242]],
['azonosítószám',[1165,1241,1242,1245,1249]],
['authorisation',[1165,1241,1242]],
['rendszám',[1165,1241,1244]],
['kizárólag',[1165,1241,1244]],
['betűket',[1165,1241,1244]],
['számokat',[1165,1241,1244]],
['feltüntetve',[1165,1241,1244]],
['egészségpénztár',[1165,1245,1246,1248,1250]],
['tagszáma',[1165,1245,1249]],
['egészségpénztári',[1165,1245,1249]],
['forint',[1165,1251,1254]],
['bankkártyás',[1165,1251,1253]],
['bevételek',[1165,1251,1252,1253,1256,1257,1339,1352,1367]],
['otherpaymenttype',[1165,1251,1256,1264]],
['fizetőeszközben',[1165,1251,1256]],
['megszerzett',[1165,1251,1256]],
['otherpaymentcode',[1165,1256,1264,1265]],
['ajÁnd|hŰsÉg|smart|gÖngy|kupon|egyeb-',[]],
['otherpaymenthufamount',[1165,1256,1264,1266]],
['egyenlege',[1165,1264,1266,1339,1352,1372,1376]],
['paymentinstrumentstype',[1165,1267]],
['paymentinstrument',[1165,1267,1268]],
['paymentinstrumenttype',[1165,1267,1268,1269]],
['documentpaymentmethod',[1165,1268,1269,1271]],
['módok',[1165,1269,1270,1271]],
['documentpaymentamount',[1165,1268,1269,1270]],
['reportheadertype',[1165,1272,1339,1340,1344,1347,1349,1352,1377,1389,1400,1408,1412]],
['boriték',[1165,1283,1286,1287,1289,1290,1292,1293]],
['tipus',[1165,1283,1289]],
['envelope',[1165,1283,1286,1287,1288,1289,1290,1292,1293,1294]],
['boríték',[1165,1283,1288,1289,1294]],
['verziója',[1165,1283,1288,1289,1294]],
['aláirása',[1165,1283,1287,1289,1293]],
['corereport',[1165,1289,1291,1339,1414]],
['customerreport',[1165,1289,1290,1339,1415]],
['payer',[1165,1305,1307,1308,1309]],
['rövid',[1165,1280,1282,1305,1309]],
['short',[1165,1280,1282,1305,1309]],
['Üzlet',[]],
['péntárgép',[1339]],
['formátumát',[1339]],
['defining',[1339]],
['cashflowreporttype',[1339,1340,1380,1381]],
['reportheader',[1339,1340,1344,1347,1349,1352,1377,1381,1382,1383,1384,1385,1389,1400,1408,1412]],
['riportoknál',[1339,1340,1344,1347,1349,1352,1377,1389,1400,1408,1412]],
['fejadatok',[1339,1340,1344,1347,1349,1352,1377,1389,1400,1408,1412]],
['reportnumber',[1339,1340,1345,1347,1350,1352,1378,1381,1382,1383,1384,1385,1389,1401,1408,1413]],
['bizonylatszám',[1339,1340,1345,1347,1350,1352,1378,1389,1401,1408,1413]],
['paymenttitlecode',[1339,1340,1343,1381]],
['changeamount',[1339,1340,1342,1381]],
['bizonylathoz',[1339,1340,1342]],
['visszajáró',[1339,1340,1342]],
['roundingdifferenceamount',[1339,1340,1346,1381]],
['kerekítési',[1339,1340,1346]],
['pozitív',[1339,1340,1346]],
['szempontjából',[1339,1340,1346]],
['számolt',[1339,1340,1346]],
['difference',[1339,1340,1346]],
['cashregisteropenbalancereporttype',[1339,1347,1380,1382]],
['taxationday',[1339,1347,1351,1382]],
['openbalance',[1339,1347,1348,1382]],
['nyitó',[1339,1347,1348]],
['pénzkészlet',[1339,1347,1348]],
['cashregisterreporttype',[1339,1352,1380,1383]],
['dailyrevenuereceipt',[1339,1352,1366,1383]],
['nyugtával',[1339,1352,1358,1366]],
['bizonylatolt',[1339,1352,1358,1364,1366]],
['dailyrevenueinvoice',[1339,1352,1364,1383]],
['számlával',[1339,1352,1364]],
['dailyrevenueother',[1339,1352,1365,1383]],
['befizetéssel',[1339,1352,1365]],
['járó',[1339,1352,1362,1365]],
['incoming',[1339,1352,1365]],
['dailyrevenuesum',[1339,1352,1367,1383]],
['income',[1339,1352,1367]],
['dailycancelledreceipt',[1339,1352,1358,1383]],
['dailycancelledinvoice',[1339,1352,1357,1383]],
['dailypaymentother',[1339,1352,1362,1383]],
['kifizetéssel',[1339,1352,1362]],
['outgoing',[1339,1352,1362]],
['dailypaymentsum',[1339,1352,1363,1383]],
['kiadások',[1339,1352,1363]],
['expense',[1339,1352,1363]],
['dailymodificationreceipt',[1339,1352,1360,1383]],
['módosítások',[1339,1352,1359,1360,1361,1389,1393,1396,1399]],
['dailymodificationinvoice',[1339,1352,1359,1383]],
['dailymodificationsum',[1339,1352,1361,1383]],
['balanceamountnorounding',[1339,1352,1353,1383]],
['nélküli',[1339,1352,1353]],
['roundingamountsum',[1339,1352,1379,1383]],
['kerekítések',[1339,1352,1379]],
['balanceamountwidthrounding',[1339,1352,1354,1383]],
['kerekített',[1339,1352,1354]],
['fizetőeszközönként',[1339,1352,1355]],
['balancechangesum',[1339,1352,1356,1383]],
['dailytipamount',[1339,1352,1368,1383]],
['felszolgálói',[1339,1352,1368]],
['fuelcardsales',[1339,1352,1371,1383]],
['fuelcardmodifications',[1339,1352,1370,1383]],
['fuelcardcancellations',[1339,1352,1369,1383]],
['fuelcardtransactionsum',[1339,1352,1372,1383]],
['transactions',[1339,1352,1372]],
['healthfundsales',[1339,1352,1375,1383]],
['healthfundmodifications',[1339,1352,1374,1383]],
['healthfundcancellations',[1339,1352,1373,1383]],
['healthfundtransactionsum',[1339,1352,1376,1383]],
['dailycashflowreporttype',[1339,1380,1384,1389]],
['closurecounter',[1339,1384,1389,1390]],
['zárás',[1339,1389,1390]],
['nullákkal',[1339,1389,1390]],
['feltöltve',[1339,1389,1390]],
['four',[1339,1389,1390]],
['dailyreceipt',[1339,1384,1389,1394]],
['nyugták',[1339,1389,1394]],
['dailyreceiptcancellation',[1339,1384,1389,1395]],
['dailyreceiptmodification',[1339,1384,1389,1396]],
['dailysimplifiedinvoice',[1339,1384,1389,1397]],
['dailysimplifiedinvoicecancellation',[1339,1384,1389,1398]],
['dailysimplifiedinvoicemodification',[1339,1384,1389,1399]],
['dailyinvoice',[1339,1384,1389,1391]],
['dailyinvoicecancellation',[1339,1384,1389,1392]],
['dailyinvoicemodification',[1339,1384,1389,1393]],
['sumcommerceamount',[1339,1384,1389,1402]],
['göngyölített',[1339,1389,1402]],
['consolidated',[1339,1389,1402]],
['otherreporttype',[1339,1380,1385,1408]],
['otherdocument',[1339,1385,1408,1409]],
['otherdocumentdescription',[1339,1385,1408,1410]],
['leírás',[1339,1408,1410]],
['otherreportdatalist',[1339,1385,1408,1411]],
['otherreportdatalisttype',[1339,1403,1408,1411]],
['otherreportdata',[1339,1403,1404,1411]],
['otherreportdatatype',[1339,1403,1404,1405]],
['otherdocumentdataname',[1339,1404,1405,1406]],
['otherdocumentdatavalue',[1339,1404,1405,1407]],
['corereporttype',[1339,1380,1414]],
['cashflowreport',[1339,1380,1381,1414]],
['cashregisteropenbalancereport',[1339,1380,1382,1414]],
['cashregisterreport',[1339,1380,1383,1414]],
['dailycashflowreport',[1339,1380,1384,1414]],
['otherreport',[1339,1380,1385,1414]],
['customerreporttype',[1339,1386,1415]],
['reportadditional',[1339,1386,1388,1415]],
['riportban',[1339,1386,1388]],
['részére',[1339,1386,1388]]
 ];
 return w;
}
        