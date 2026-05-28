
function CreateFileRefs()
{
var fr=new Array();
            
fr[1]=['http://schemas.nav.gov.hu/ERECEIPT/1.1/export', 'http___schemas_nav_gov_hu_ereceipt_1_1_export.html'];
fr[2]=['http://schemas.nav.gov.hu/NTCA/1.0/common', 'http___schemas_nav_gov_hu_ntca_1_0_common.html'];
fr[3]=['http://schemas.nav.gov.hu/OSA/3.0/api', 'http___schemas_nav_gov_hu_osa_3_0_api.html'];
fr[4]=['http://schemas.nav.gov.hu/OSA/3.0/base', 'http___schemas_nav_gov_hu_osa_3_0_base.html'];
fr[5]=['http://schemas.nav.gov.hu/OSA/3.0/data', 'http___schemas_nav_gov_hu_osa_3_0_data.html'];
fr[6]=['http://schemas.nav.gov.hu/ERECEIPT/1.1/communicationData', 'http___schemas_nav_gov_hu_ereceipt_1_1_communicationdata.html'];
fr[7]=['http://schemas.nav.gov.hu/ERECEIPT/1.1/documentData', 'http___schemas_nav_gov_hu_ereceipt_1_1_documentdata.html'];
fr[8]=['http://schemas.nav.gov.hu/ERECEIPT/1.1/documentMessage', 'http___schemas_nav_gov_hu_ereceipt_1_1_documentmessage.html'];
fr[9]=['http://schemas.nav.gov.hu/ERECEIPT/1.1/base', 'http___schemas_nav_gov_hu_ereceipt_1_1_base.html'];
fr[10]=['http://schemas.nav.gov.hu/ERECEIPT/1.1/reportMessage', 'http___schemas_nav_gov_hu_ereceipt_1_1_reportmessage.html'];
fr[11]=['eReceiptExport.xsd', 'ereceiptexport_xsd.html'];
fr[12]=['ExportDataType', 'exportdatatype.html'];
fr[13]=['documentClass', 'documentclass.html'];
fr[14]=['documentEnvelope', 'documentenvelope.html'];
fr[15]=['reportClass', 'reportclass.html'];
fr[16]=['reportEnvelope', 'reportenvelope.html'];
fr[17]=['documentGrossAmountHUF', 'documentgrossamounthuf.html'];
fr[18]=['documentNumber', 'documentnumber.html'];
fr[19]=['elementVersion', 'elementversion.html'];
fr[20]=['exportCounter', 'exportcounter.html'];
fr[21]=['issueEndDateTime', 'issueenddatetime.html'];
fr[22]=['privateKey', 'privatekey.html'];
fr[23]=['QRCodeSignature', 'qrcodesignature.html'];
fr[24]=['QRCodeSignCertSerial', 'qrcodesigncertserial.html'];
fr[25]=['searchKey', 'searchkey.html'];
fr[26]=['searchKeyTimestamp', 'searchkeytimestamp.html'];
fr[27]=['supplierName', 'suppliername.html'];
fr[28]=['ExportEnvelopeType', 'exportenvelopetype.html'];
fr[29]=['exportElements', 'exportelements.html'];
fr[30]=['exportName', 'exportname.html'];
fr[31]=['exportTimestamp', 'exporttimestamp.html'];
fr[32]=['exportVersion', 'exportversion.html'];
fr[33]=['numberOfElements', 'numberofelements.html'];
fr[34]=['ExportEnvelope', 'exportenvelope.html'];
fr[35]=['common.xsd', 'common_xsd.html'];
fr[36]=['BasicHeaderType', 'basicheadertype.html'];
fr[37]=['headerVersion', 'headerversion.html'];
fr[38]=['requestId', 'requestid.html'];
fr[39]=['requestVersion', 'requestversion.html'];
fr[40]=['timestamp', 'timestamp.html'];
fr[41]=['BasicRequestType', 'basicrequesttype.html'];
fr[42]=['header', 'header.html'];
fr[43]=['user', 'user.html'];
fr[44]=['BasicResponseType', 'basicresponsetype.html'];
fr[45]=['header', 'header1.html'];
fr[46]=['result', 'result.html'];
fr[47]=['BasicResultType', 'basicresulttype.html'];
fr[48]=['errorCode', 'errorcode.html'];
fr[49]=['funcCode', 'funccode.html'];
fr[50]=['message', 'message.html'];
fr[51]=['notifications', 'notifications.html'];
fr[52]=['CryptoType', 'cryptotype.html'];
fr[53]=['cryptoType', 'cryptotype1.html'];
fr[54]=['GeneralErrorHeaderResponseType', 'generalerrorheaderresponsetype.html'];
fr[55]=['NotificationsType', 'notificationstype.html'];
fr[56]=['notification', 'notification.html'];
fr[57]=['NotificationType', 'notificationtype.html'];
fr[58]=['notificationCode', 'notificationcode.html'];
fr[59]=['notificationText', 'notificationtext.html'];
fr[60]=['TechnicalValidationResultType', 'technicalvalidationresulttype.html'];
fr[61]=['message', 'message1.html'];
fr[62]=['validationErrorCode', 'validationerrorcode.html'];
fr[63]=['validationResultCode', 'validationresultcode.html'];
fr[64]=['UserHeaderType', 'userheadertype.html'];
fr[65]=['login', 'login.html'];
fr[66]=['passwordHash', 'passwordhash.html'];
fr[67]=['predecessorTaxNumber', 'predecessortaxnumber.html'];
fr[68]=['requestSignature', 'requestsignature.html'];
fr[69]=['taxNumber', 'taxnumber.html'];
fr[70]=['GeneralErrorHeaderResponse', 'generalerrorheaderresponse.html'];
fr[71]=['GeneralExceptionResponse', 'generalexceptionresponse.html'];
fr[72]=['AtomicStringType100', 'atomicstringtype100.html'];
fr[73]=['AtomicStringType1024', 'atomicstringtype1024.html'];
fr[74]=['AtomicStringType128', 'atomicstringtype128.html'];
fr[75]=['AtomicStringType15', 'atomicstringtype15.html'];
fr[76]=['AtomicStringType16', 'atomicstringtype16.html'];
fr[77]=['AtomicStringType2', 'atomicstringtype2.html'];
fr[78]=['AtomicStringType200', 'atomicstringtype200.html'];
fr[79]=['AtomicStringType2048', 'atomicstringtype2048.html'];
fr[80]=['AtomicStringType255', 'atomicstringtype255.html'];
fr[81]=['AtomicStringType256', 'atomicstringtype256.html'];
fr[82]=['AtomicStringType32', 'atomicstringtype32.html'];
fr[83]=['AtomicStringType4', 'atomicstringtype4.html'];
fr[84]=['AtomicStringType4000', 'atomicstringtype4000.html'];
fr[85]=['AtomicStringType50', 'atomicstringtype50.html'];
fr[86]=['AtomicStringType512', 'atomicstringtype512.html'];
fr[87]=['AtomicStringType64', 'atomicstringtype64.html'];
fr[88]=['AtomicStringType8', 'atomicstringtype8.html'];
fr[89]=['BankAccountNumberType', 'bankaccountnumbertype.html'];
fr[90]=['BusinessResultCodeType', 'businessresultcodetype.html'];
fr[91]=['CommunityVatNumberType', 'communityvatnumbertype.html'];
fr[92]=['CountryCodeType', 'countrycodetype.html'];
fr[93]=['CountyCodeType', 'countycodetype.html'];
fr[94]=['CurrencyType', 'currencytype.html'];
fr[95]=['EntityIdType', 'entityidtype.html'];
fr[96]=['FunctionCodeType', 'functioncodetype.html'];
fr[97]=['GenericDateType', 'genericdatetype.html'];
fr[98]=['GenericDecimalType', 'genericdecimaltype.html'];
fr[99]=['GenericTimestampType', 'generictimestamptype.html'];
fr[100]=['GenericUnsignedIntegerType', 'genericunsignedintegertype.html'];
fr[101]=['LocalizationType', 'localizationtype.html'];
fr[102]=['LoginType', 'logintype.html'];
fr[103]=['PlateNumberType', 'platenumbertype.html'];
fr[104]=['PostalCodeType', 'postalcodetype.html'];
fr[105]=['RequestPageType', 'requestpagetype.html'];
fr[106]=['ResponsePageType', 'responsepagetype.html'];
fr[107]=['SHA256Type', 'sha256type.html'];
fr[108]=['SHA512Type', 'sha512type.html'];
fr[109]=['SimpleText100NotBlankType', 'simpletext100notblanktype.html'];
fr[110]=['SimpleText1024NotBlankType', 'simpletext1024notblanktype.html'];
fr[111]=['SimpleText15NotBlankType', 'simpletext15notblanktype.html'];
fr[112]=['SimpleText200NotBlankType', 'simpletext200notblanktype.html'];
fr[113]=['SimpleText255NotBlankType', 'simpletext255notblanktype.html'];
fr[114]=['SimpleText50NotBlankType', 'simpletext50notblanktype.html'];
fr[115]=['SimpleText512NotBlankType', 'simpletext512notblanktype.html'];
fr[116]=['SwiftCodeType', 'swiftcodetype.html'];
fr[117]=['TaxIdentificationNumberType', 'taxidentificationnumbertype.html'];
fr[118]=['TaxpayerIdType', 'taxpayeridtype.html'];
fr[119]=['TechnicalResultCodeType', 'technicalresultcodetype.html'];
fr[120]=['VatCodeType', 'vatcodetype.html'];
fr[121]=['invoiceApi.xsd', 'invoiceapi_xsd.html'];
fr[122]=['AdditionalQueryParamsType', 'additionalqueryparamstype.html'];
fr[123]=['currency', 'currency.html'];
fr[124]=['groupMemberTaxNumber', 'groupmembertaxnumber.html'];
fr[125]=['invoiceAppearance', 'invoiceappearance.html'];
fr[126]=['invoiceCategory', 'invoicecategory.html'];
fr[127]=['name', 'name.html'];
fr[128]=['paymentMethod', 'paymentmethod.html'];
fr[129]=['source', 'source.html'];
fr[130]=['taxNumber', 'taxnumber1.html'];
fr[131]=['AnnulmentDataType', 'annulmentdatatype.html'];
fr[132]=['annulmentDecisionDate', 'annulmentdecisiondate.html'];
fr[133]=['annulmentDecisionUser', 'annulmentdecisionuser.html'];
fr[134]=['annulmentVerificationStatus', 'annulmentverificationstatus.html'];
fr[135]=['AnnulmentOperationListType', 'annulmentoperationlisttype.html'];
fr[136]=['annulmentOperation', 'annulmentoperation.html'];
fr[137]=['AnnulmentOperationType', 'annulmentoperationtype.html'];
fr[138]=['annulmentOperation', 'annulmentoperation1.html'];
fr[139]=['index', 'index1.html'];
fr[140]=['invoiceAnnulment', 'invoiceannulment.html'];
fr[141]=['AuditDataType', 'auditdatatype.html'];
fr[142]=['batchIndex', 'batchindex.html'];
fr[143]=['index', 'index2.html'];
fr[144]=['insCusUser', 'inscususer.html'];
fr[145]=['insdate', 'insdate.html'];
fr[146]=['originalRequestVersion', 'originalrequestversion.html'];
fr[147]=['source', 'source1.html'];
fr[148]=['transactionId', 'transactionid.html'];
fr[149]=['BasicOnlineInvoiceRequestType', 'basiconlineinvoicerequesttype.html'];
fr[150]=['software', 'software.html'];
fr[151]=['BasicOnlineInvoiceResponseType', 'basiconlineinvoiceresponsetype.html'];
fr[152]=['software', 'software1.html'];
fr[153]=['BusinessValidationResultType', 'businessvalidationresulttype.html'];
fr[154]=['message', 'message2.html'];
fr[155]=['pointer', 'pointer.html'];
fr[156]=['validationErrorCode', 'validationerrorcode1.html'];
fr[157]=['validationResultCode', 'validationresultcode1.html'];
fr[158]=['DateIntervalParamType', 'dateintervalparamtype.html'];
fr[159]=['dateFrom', 'datefrom.html'];
fr[160]=['dateTo', 'dateto.html'];
fr[161]=['DateTimeIntervalParamType', 'datetimeintervalparamtype.html'];
fr[162]=['dateTimeFrom', 'datetimefrom.html'];
fr[163]=['dateTimeTo', 'datetimeto.html'];
fr[164]=['GeneralErrorResponseType', 'generalerrorresponsetype.html'];
fr[165]=['software', 'software2.html'];
fr[166]=['technicalValidationMessages', 'technicalvalidationmessages.html'];
fr[167]=['InvoiceChainDigestResultType', 'invoicechaindigestresulttype.html'];
fr[168]=['availablePage', 'availablepage.html'];
fr[169]=['currentPage', 'currentpage.html'];
fr[170]=['invoiceChainElement', 'invoicechainelement.html'];
fr[171]=['InvoiceChainDigestType', 'invoicechaindigesttype.html'];
fr[172]=['batchIndex', 'batchindex1.html'];
fr[173]=['customerTaxNumber', 'customertaxnumber.html'];
fr[174]=['insDate', 'insdate1.html'];
fr[175]=['invoiceNumber', 'invoicenumber.html'];
fr[176]=['invoiceOperation', 'invoiceoperation.html'];
fr[177]=['originalRequestVersion', 'originalrequestversion1.html'];
fr[178]=['supplierTaxNumber', 'suppliertaxnumber.html'];
fr[179]=['InvoiceChainElementType', 'invoicechainelementtype.html'];
fr[180]=['invoiceChainDigest', 'invoicechaindigest.html'];
fr[181]=['invoiceLines', 'invoicelines.html'];
fr[182]=['invoiceReferenceData', 'invoicereferencedata.html'];
fr[183]=['InvoiceChainQueryType', 'invoicechainquerytype.html'];
fr[184]=['invoiceDirection', 'invoicedirection.html'];
fr[185]=['invoiceNumber', 'invoicenumber1.html'];
fr[186]=['taxNumber', 'taxnumber2.html'];
fr[187]=['InvoiceDataResultType', 'invoicedataresulttype.html'];
fr[188]=['auditData', 'auditdata.html'];
fr[189]=['compressedContentIndicator', 'compressedcontentindicator.html'];
fr[190]=['electronicInvoiceHash', 'electronicinvoicehash.html'];
fr[191]=['invoiceData', 'invoicedata.html'];
fr[192]=['InvoiceDigestResultType', 'invoicedigestresulttype.html'];
fr[193]=['availablePage', 'availablepage1.html'];
fr[194]=['currentPage', 'currentpage1.html'];
fr[195]=['invoiceDigest', 'invoicedigest.html'];
fr[196]=['InvoiceDigestType', 'invoicedigesttype.html'];
fr[197]=['batchIndex', 'batchindex2.html'];
fr[198]=['completenessIndicator', 'completenessindicator.html'];
fr[199]=['currency', 'currency1.html'];
fr[200]=['customerGroupMemberTaxNumber', 'customergroupmembertaxnumber.html'];
fr[201]=['customerName', 'customername.html'];
fr[202]=['customerTaxNumber', 'customertaxnumber1.html'];
fr[203]=['index', 'index3.html'];
fr[204]=['insDate', 'insdate2.html'];
fr[205]=['invoiceAppearance', 'invoiceappearance1.html'];
fr[206]=['invoiceCategory', 'invoicecategory1.html'];
fr[207]=['invoiceDeliveryDate', 'invoicedeliverydate.html'];
fr[208]=['invoiceIssueDate', 'invoiceissuedate.html'];
fr[209]=['invoiceNetAmount', 'invoicenetamount.html'];
fr[210]=['invoiceNetAmountHUF', 'invoicenetamounthuf.html'];
fr[211]=['invoiceNumber', 'invoicenumber2.html'];
fr[212]=['invoiceOperation', 'invoiceoperation1.html'];
fr[213]=['invoiceVatAmount', 'invoicevatamount.html'];
fr[214]=['invoiceVatAmountHUF', 'invoicevatamounthuf.html'];
fr[215]=['modificationIndex', 'modificationindex.html'];
fr[216]=['originalInvoiceNumber', 'originalinvoicenumber.html'];
fr[217]=['paymentDate', 'paymentdate.html'];
fr[218]=['paymentMethod', 'paymentmethod1.html'];
fr[219]=['source', 'source2.html'];
fr[220]=['supplierGroupMemberTaxNumber', 'suppliergroupmembertaxnumber.html'];
fr[221]=['supplierName', 'suppliername1.html'];
fr[222]=['supplierTaxNumber', 'suppliertaxnumber1.html'];
fr[223]=['transactionId', 'transactionid1.html'];
fr[224]=['InvoiceLinesType', 'invoicelinestype.html'];
fr[225]=['maxLineNumber', 'maxlinenumber.html'];
fr[226]=['newCreatedLines', 'newcreatedlines.html'];
fr[227]=['InvoiceNumberQueryType', 'invoicenumberquerytype.html'];
fr[228]=['batchIndex', 'batchindex3.html'];
fr[229]=['invoiceDirection', 'invoicedirection1.html'];
fr[230]=['invoiceNumber', 'invoicenumber3.html'];
fr[231]=['supplierTaxNumber', 'suppliertaxnumber2.html'];
fr[232]=['InvoiceOperationListType', 'invoiceoperationlisttype.html'];
fr[233]=['compressedContent', 'compressedcontent.html'];
fr[234]=['invoiceOperation', 'invoiceoperation2.html'];
fr[235]=['InvoiceOperationType', 'invoiceoperationtype.html'];
fr[236]=['electronicInvoiceHash', 'electronicinvoicehash1.html'];
fr[237]=['index', 'index4.html'];
fr[238]=['invoiceData', 'invoicedata1.html'];
fr[239]=['invoiceOperation', 'invoiceoperation3.html'];
fr[240]=['InvoiceQueryParamsType', 'invoicequeryparamstype.html'];
fr[241]=['additionalQueryParams', 'additionalqueryparams.html'];
fr[242]=['mandatoryQueryParams', 'mandatoryqueryparams.html'];
fr[243]=['relationalQueryParams', 'relationalqueryparams.html'];
fr[244]=['transactionQueryParams', 'transactionqueryparams.html'];
fr[245]=['InvoiceReferenceDataType', 'invoicereferencedatatype.html'];
fr[246]=['modificationIndex', 'modificationindex1.html'];
fr[247]=['modificationTimestamp', 'modificationtimestamp.html'];
fr[248]=['modifyWithoutMaster', 'modifywithoutmaster.html'];
fr[249]=['originalInvoiceNumber', 'originalinvoicenumber1.html'];
fr[250]=['ManageAnnulmentRequestType', 'manageannulmentrequesttype.html'];
fr[251]=['annulmentOperations', 'annulmentoperations.html'];
fr[252]=['exchangeToken', 'exchangetoken.html'];
fr[253]=['ManageInvoiceRequestType', 'manageinvoicerequesttype.html'];
fr[254]=['exchangeToken', 'exchangetoken1.html'];
fr[255]=['invoiceOperations', 'invoiceoperations.html'];
fr[256]=['MandatoryQueryParamsType', 'mandatoryqueryparamstype.html'];
fr[257]=['insDate', 'insdate3.html'];
fr[258]=['invoiceIssueDate', 'invoiceissuedate1.html'];
fr[259]=['originalInvoiceNumber', 'originalinvoicenumber2.html'];
fr[260]=['NewCreatedLinesType', 'newcreatedlinestype.html'];
fr[261]=['lineNumberIntervalEnd', 'linenumberintervalend.html'];
fr[262]=['lineNumberIntervalStart', 'linenumberintervalstart.html'];
fr[263]=['PointerType', 'pointertype.html'];
fr[264]=['line', 'line.html'];
fr[265]=['originalInvoiceNumber', 'originalinvoicenumber3.html'];
fr[266]=['tag', 'tag.html'];
fr[267]=['value', 'value.html'];
fr[268]=['ProcessingResultListType', 'processingresultlisttype.html'];
fr[269]=['annulmentData', 'annulmentdata.html'];
fr[270]=['originalRequestVersion', 'originalrequestversion2.html'];
fr[271]=['processingResult', 'processingresult.html'];
fr[272]=['ProcessingResultType', 'processingresulttype.html'];
fr[273]=['batchIndex', 'batchindex4.html'];
fr[274]=['businessValidationMessages', 'businessvalidationmessages.html'];
fr[275]=['compressedContentIndicator', 'compressedcontentindicator1.html'];
fr[276]=['index', 'index5.html'];
fr[277]=['invoiceStatus', 'invoicestatus.html'];
fr[278]=['originalRequest', 'originalrequest.html'];
fr[279]=['technicalValidationMessages', 'technicalvalidationmessages1.html'];
fr[280]=['QueryInvoiceChainDigestRequestType', 'queryinvoicechaindigestrequesttype.html'];
fr[281]=['invoiceChainQuery', 'invoicechainquery.html'];
fr[282]=['page', 'page.html'];
fr[283]=['QueryInvoiceChainDigestResponseType', 'queryinvoicechaindigestresponsetype.html'];
fr[284]=['invoiceChainDigestResult', 'invoicechaindigestresult.html'];
fr[285]=['QueryInvoiceCheckResponseType', 'queryinvoicecheckresponsetype.html'];
fr[286]=['invoiceCheckResult', 'invoicecheckresult.html'];
fr[287]=['QueryInvoiceDataRequestType', 'queryinvoicedatarequesttype.html'];
fr[288]=['invoiceNumberQuery', 'invoicenumberquery.html'];
fr[289]=['QueryInvoiceDataResponseType', 'queryinvoicedataresponsetype.html'];
fr[290]=['invoiceDataResult', 'invoicedataresult.html'];
fr[291]=['QueryInvoiceDigestRequestType', 'queryinvoicedigestrequesttype.html'];
fr[292]=['invoiceDirection', 'invoicedirection2.html'];
fr[293]=['invoiceQueryParams', 'invoicequeryparams.html'];
fr[294]=['page', 'page1.html'];
fr[295]=['QueryInvoiceDigestResponseType', 'queryinvoicedigestresponsetype.html'];
fr[296]=['invoiceDigestResult', 'invoicedigestresult.html'];
fr[297]=['QueryTaxpayerRequestType', 'querytaxpayerrequesttype.html'];
fr[298]=['taxNumber', 'taxnumber3.html'];
fr[299]=['QueryTaxpayerResponseType', 'querytaxpayerresponsetype.html'];
fr[300]=['infoDate', 'infodate.html'];
fr[301]=['taxpayerData', 'taxpayerdata.html'];
fr[302]=['taxpayerValidity', 'taxpayervalidity.html'];
fr[303]=['QueryTransactionListRequestType', 'querytransactionlistrequesttype.html'];
fr[304]=['insDate', 'insdate4.html'];
fr[305]=['page', 'page2.html'];
fr[306]=['requestStatus', 'requeststatus.html'];
fr[307]=['QueryTransactionListResponseType', 'querytransactionlistresponsetype.html'];
fr[308]=['transactionListResult', 'transactionlistresult.html'];
fr[309]=['QueryTransactionStatusRequestType', 'querytransactionstatusrequesttype.html'];
fr[310]=['returnOriginalRequest', 'returnoriginalrequest.html'];
fr[311]=['transactionId', 'transactionid2.html'];
fr[312]=['QueryTransactionStatusResponseType', 'querytransactionstatusresponsetype.html'];
fr[313]=['processingResults', 'processingresults.html'];
fr[314]=['RelationalQueryParamsType', 'relationalqueryparamstype.html'];
fr[315]=['invoiceDelivery', 'invoicedelivery.html'];
fr[316]=['invoiceNetAmount', 'invoicenetamount1.html'];
fr[317]=['invoiceNetAmountHUF', 'invoicenetamounthuf1.html'];
fr[318]=['invoiceVatAmount', 'invoicevatamount1.html'];
fr[319]=['invoiceVatAmountHUF', 'invoicevatamounthuf1.html'];
fr[320]=['paymentDate', 'paymentdate1.html'];
fr[321]=['RelationQueryDateType', 'relationquerydatetype.html'];
fr[322]=['queryOperator', 'queryoperator.html'];
fr[323]=['queryValue', 'queryvalue.html'];
fr[324]=['RelationQueryMonetaryType', 'relationquerymonetarytype.html'];
fr[325]=['queryOperator', 'queryoperator1.html'];
fr[326]=['queryValue', 'queryvalue1.html'];
fr[327]=['SoftwareType', 'softwaretype.html'];
fr[328]=['softwareDevContact', 'softwaredevcontact.html'];
fr[329]=['softwareDevCountryCode', 'softwaredevcountrycode.html'];
fr[330]=['softwareDevName', 'softwaredevname.html'];
fr[331]=['softwareDevTaxNumber', 'softwaredevtaxnumber.html'];
fr[332]=['softwareId', 'softwareid.html'];
fr[333]=['softwareMainVersion', 'softwaremainversion.html'];
fr[334]=['softwareName', 'softwarename.html'];
fr[335]=['softwareOperation', 'softwareoperation.html'];
fr[336]=['TaxpayerAddressItemType', 'taxpayeraddressitemtype.html'];
fr[337]=['taxpayerAddress', 'taxpayeraddress.html'];
fr[338]=['taxpayerAddressType', 'taxpayeraddresstype.html'];
fr[339]=['TaxpayerAddressListType', 'taxpayeraddresslisttype.html'];
fr[340]=['taxpayerAddressItem', 'taxpayeraddressitem.html'];
fr[341]=['TaxpayerDataType', 'taxpayerdatatype.html'];
fr[342]=['incorporation', 'incorporation.html'];
fr[343]=['taxNumberDetail', 'taxnumberdetail.html'];
fr[344]=['taxpayerAddressList', 'taxpayeraddresslist.html'];
fr[345]=['taxpayerName', 'taxpayername.html'];
fr[346]=['taxpayerShortName', 'taxpayershortname.html'];
fr[347]=['vatGroupMembership', 'vatgroupmembership.html'];
fr[348]=['TokenExchangeResponseType', 'tokenexchangeresponsetype.html'];
fr[349]=['encodedExchangeToken', 'encodedexchangetoken.html'];
fr[350]=['tokenValidityFrom', 'tokenvalidityfrom.html'];
fr[351]=['tokenValidityTo', 'tokenvalidityto.html'];
fr[352]=['TransactionListResultType', 'transactionlistresulttype.html'];
fr[353]=['availablePage', 'availablepage2.html'];
fr[354]=['currentPage', 'currentpage2.html'];
fr[355]=['transaction', 'transaction.html'];
fr[356]=['TransactionQueryParamsType', 'transactionqueryparamstype.html'];
fr[357]=['index', 'index6.html'];
fr[358]=['invoiceOperation', 'invoiceoperation4.html'];
fr[359]=['transactionId', 'transactionid3.html'];
fr[360]=['TransactionResponseType', 'transactionresponsetype.html'];
fr[361]=['transactionId', 'transactionid4.html'];
fr[362]=['TransactionType', 'transactiontype.html'];
fr[363]=['insCusUser', 'inscususer1.html'];
fr[364]=['insDate', 'insdate5.html'];
fr[365]=['itemCount', 'itemcount.html'];
fr[366]=['originalRequestVersion', 'originalrequestversion3.html'];
fr[367]=['requestStatus', 'requeststatus1.html'];
fr[368]=['source', 'source3.html'];
fr[369]=['technicalAnnulment', 'technicalannulment.html'];
fr[370]=['transactionId', 'transactionid5.html'];
fr[371]=['GeneralErrorResponse', 'generalerrorresponse.html'];
fr[372]=['ManageAnnulmentRequest', 'manageannulmentrequest.html'];
fr[373]=['ManageAnnulmentResponse', 'manageannulmentresponse.html'];
fr[374]=['ManageInvoiceRequest', 'manageinvoicerequest.html'];
fr[375]=['ManageInvoiceResponse', 'manageinvoiceresponse.html'];
fr[376]=['QueryInvoiceChainDigestRequest', 'queryinvoicechaindigestrequest.html'];
fr[377]=['QueryInvoiceChainDigestResponse', 'queryinvoicechaindigestresponse.html'];
fr[378]=['QueryInvoiceCheckRequest', 'queryinvoicecheckrequest.html'];
fr[379]=['QueryInvoiceCheckResponse', 'queryinvoicecheckresponse.html'];
fr[380]=['QueryInvoiceDataRequest', 'queryinvoicedatarequest.html'];
fr[381]=['QueryInvoiceDataResponse', 'queryinvoicedataresponse.html'];
fr[382]=['QueryInvoiceDigestRequest', 'queryinvoicedigestrequest.html'];
fr[383]=['QueryInvoiceDigestResponse', 'queryinvoicedigestresponse.html'];
fr[384]=['QueryTaxpayerRequest', 'querytaxpayerrequest.html'];
fr[385]=['QueryTaxpayerResponse', 'querytaxpayerresponse.html'];
fr[386]=['QueryTransactionListRequest', 'querytransactionlistrequest.html'];
fr[387]=['QueryTransactionListResponse', 'querytransactionlistresponse.html'];
fr[388]=['QueryTransactionStatusRequest', 'querytransactionstatusrequest.html'];
fr[389]=['QueryTransactionStatusResponse', 'querytransactionstatusresponse.html'];
fr[390]=['TokenExchangeRequest', 'tokenexchangerequest.html'];
fr[391]=['TokenExchangeResponse', 'tokenexchangeresponse.html'];
fr[392]=['AnnulmentVerificationStatusType', 'annulmentverificationstatustype.html'];
fr[393]=['IncorporationType', 'incorporationtype.html'];
fr[394]=['InvoiceDirectionType', 'invoicedirectiontype.html'];
fr[395]=['InvoiceStatusType', 'invoicestatustype.html'];
fr[396]=['ManageAnnulmentOperationType', 'manageannulmentoperationtype.html'];
fr[397]=['ManageInvoiceOperationType', 'manageinvoiceoperationtype.html'];
fr[398]=['OriginalRequestVersionType', 'originalrequestversiontype.html'];
fr[399]=['QueryNameType', 'querynametype.html'];
fr[400]=['QueryOperatorType', 'queryoperatortype.html'];
fr[401]=['RequestStatusType', 'requeststatustype.html'];
fr[402]=['SoftwareIdType', 'softwareidtype.html'];
fr[403]=['SoftwareOperationType', 'softwareoperationtype.html'];
fr[404]=['SourceType', 'sourcetype.html'];
fr[405]=['TaxpayerAddressTypeType', 'taxpayeraddresstypetype.html'];
fr[406]=['invoiceBase.xsd', 'invoicebase_xsd.html'];
fr[407]=['AddressType', 'addresstype.html'];
fr[408]=['detailedAddress', 'detailedaddress.html'];
fr[409]=['simpleAddress', 'simpleaddress.html'];
fr[410]=['DetailedAddressType', 'detailedaddresstype.html'];
fr[411]=['building', 'building.html'];
fr[412]=['city', 'city.html'];
fr[413]=['countryCode', 'countrycode.html'];
fr[414]=['door', 'door.html'];
fr[415]=['floor', 'floor.html'];
fr[416]=['lotNumber', 'lotnumber.html'];
fr[417]=['number', 'number.html'];
fr[418]=['postalCode', 'postalcode.html'];
fr[419]=['publicPlaceCategory', 'publicplacecategory.html'];
fr[420]=['region', 'region.html'];
fr[421]=['staircase', 'staircase.html'];
fr[422]=['streetName', 'streetname.html'];
fr[423]=['SimpleAddressType', 'simpleaddresstype.html'];
fr[424]=['additionalAddressDetail', 'additionaladdressdetail.html'];
fr[425]=['city', 'city1.html'];
fr[426]=['countryCode', 'countrycode1.html'];
fr[427]=['postalCode', 'postalcode1.html'];
fr[428]=['region', 'region1.html'];
fr[429]=['TaxNumberType', 'taxnumbertype.html'];
fr[430]=['countyCode', 'countycode.html'];
fr[431]=['taxpayerId', 'taxpayerid.html'];
fr[432]=['vatCode', 'vatcode.html'];
fr[433]=['InvoiceAppearanceType', 'invoiceappearancetype.html'];
fr[434]=['InvoiceCategoryType', 'invoicecategorytype.html'];
fr[435]=['InvoiceDateType', 'invoicedatetype.html'];
fr[436]=['InvoiceIndexType', 'invoiceindextype.html'];
fr[437]=['InvoiceTimestampType', 'invoicetimestamptype.html'];
fr[438]=['InvoiceUnboundedIndexType', 'invoiceunboundedindextype.html'];
fr[439]=['LineNumberType', 'linenumbertype.html'];
fr[440]=['MonetaryType', 'monetarytype.html'];
fr[441]=['PaymentMethodType', 'paymentmethodtype.html'];
fr[442]=['invoiceData.xsd', 'invoicedata_xsd.html'];
fr[443]=['AdditionalDataType', 'additionaldatatype.html'];
fr[444]=['dataDescription', 'datadescription.html'];
fr[445]=['dataName', 'dataname.html'];
fr[446]=['dataValue', 'datavalue.html'];
fr[447]=['AdvanceDataType', 'advancedatatype.html'];
fr[448]=['advanceIndicator', 'advanceindicator.html'];
fr[449]=['advancePaymentData', 'advancepaymentdata.html'];
fr[450]=['AdvancePaymentDataType', 'advancepaymentdatatype.html'];
fr[451]=['advanceExchangeRate', 'advanceexchangerate.html'];
fr[452]=['advanceOriginalInvoice', 'advanceoriginalinvoice.html'];
fr[453]=['advancePaymentDate', 'advancepaymentdate.html'];
fr[454]=['AggregateInvoiceLineDataType', 'aggregateinvoicelinedatatype.html'];
fr[455]=['lineDeliveryDate', 'linedeliverydate.html'];
fr[456]=['lineExchangeRate', 'lineexchangerate.html'];
fr[457]=['AircraftType', 'aircrafttype.html'];
fr[458]=['airCargo', 'aircargo.html'];
fr[459]=['operationHours', 'operationhours.html'];
fr[460]=['takeOffWeight', 'takeoffweight.html'];
fr[461]=['BatchInvoiceType', 'batchinvoicetype.html'];
fr[462]=['batchIndex', 'batchindex5.html'];
fr[463]=['invoice', 'invoice.html'];
fr[464]=['ContractNumbersType', 'contractnumberstype.html'];
fr[465]=['contractNumber', 'contractnumber.html'];
fr[466]=['ConventionalInvoiceInfoType', 'conventionalinvoiceinfotype.html'];
fr[467]=['contractNumbers', 'contractnumbers.html'];
fr[468]=['costCenters', 'costcenters.html'];
fr[469]=['customerCompanyCodes', 'customercompanycodes.html'];
fr[470]=['dealerCodes', 'dealercodes.html'];
fr[471]=['deliveryNotes', 'deliverynotes.html'];
fr[472]=['ekaerIds', 'ekaerids.html'];
fr[473]=['generalLedgerAccountNumbers', 'generalledgeraccountnumbers.html'];
fr[474]=['glnNumbersCustomer', 'glnnumberscustomer.html'];
fr[475]=['glnNumbersSupplier', 'glnnumberssupplier.html'];
fr[476]=['itemNumbers', 'itemnumbers.html'];
fr[477]=['materialNumbers', 'materialnumbers.html'];
fr[478]=['orderNumbers', 'ordernumbers.html'];
fr[479]=['projectNumbers', 'projectnumbers.html'];
fr[480]=['shippingDates', 'shippingdates.html'];
fr[481]=['supplierCompanyCodes', 'suppliercompanycodes.html'];
fr[482]=['CostCentersType', 'costcenterstype.html'];
fr[483]=['costCenter', 'costcenter.html'];
fr[484]=['CustomerCompanyCodesType', 'customercompanycodestype.html'];
fr[485]=['customerCompanyCode', 'customercompanycode.html'];
fr[486]=['CustomerDeclarationType', 'customerdeclarationtype.html'];
fr[487]=['productFeeWeight', 'productfeeweight.html'];
fr[488]=['productStream', 'productstream.html'];
fr[489]=['CustomerInfoType', 'customerinfotype.html'];
fr[490]=['customerAddress', 'customeraddress.html'];
fr[491]=['customerBankAccountNumber', 'customerbankaccountnumber.html'];
fr[492]=['customerName', 'customername1.html'];
fr[493]=['customerVatData', 'customervatdata.html'];
fr[494]=['customerVatStatus', 'customervatstatus.html'];
fr[495]=['CustomerTaxNumberType', 'customertaxnumbertype.html'];
fr[496]=['groupMemberTaxNumber', 'groupmembertaxnumber1.html'];
fr[497]=['CustomerVatDataType', 'customervatdatatype.html'];
fr[498]=['communityVatNumber', 'communityvatnumber.html'];
fr[499]=['customerTaxNumber', 'customertaxnumber2.html'];
fr[500]=['thirdStateTaxId', 'thirdstatetaxid.html'];
fr[501]=['DealerCodesType', 'dealercodestype.html'];
fr[502]=['dealerCode', 'dealercode.html'];
fr[503]=['DeliveryNotesType', 'deliverynotestype.html'];
fr[504]=['deliveryNote', 'deliverynote.html'];
fr[505]=['DetailedReasonType', 'detailedreasontype.html'];
fr[506]=['case', 'case.html'];
fr[507]=['reason', 'reason.html'];
fr[508]=['DieselOilPurchaseType', 'dieseloilpurchasetype.html'];
fr[509]=['dieselOilQuantity', 'dieseloilquantity.html'];
fr[510]=['purchaseDate', 'purchasedate.html'];
fr[511]=['purchaseLocation', 'purchaselocation.html'];
fr[512]=['vehicleRegistrationNumber', 'vehicleregistrationnumber.html'];
fr[513]=['DiscountDataType', 'discountdatatype.html'];
fr[514]=['discountDescription', 'discountdescription.html'];
fr[515]=['discountRate', 'discountrate.html'];
fr[516]=['discountValue', 'discountvalue.html'];
fr[517]=['EkaerIdsType', 'ekaeridstype.html'];
fr[518]=['ekaerId', 'ekaerid.html'];
fr[519]=['FiscalRepresentativeType', 'fiscalrepresentativetype.html'];
fr[520]=['fiscalRepresentativeAddress', 'fiscalrepresentativeaddress.html'];
fr[521]=['fiscalRepresentativeBankAccountNumber', 'fiscalrepresentativebankaccountnumber.html'];
fr[522]=['fiscalRepresentativeName', 'fiscalrepresentativename.html'];
fr[523]=['fiscalRepresentativeTaxNumber', 'fiscalrepresentativetaxnumber.html'];
fr[524]=['GeneralLedgerAccountNumbersType', 'generalledgeraccountnumberstype.html'];
fr[525]=['generalLedgerAccountNumber', 'generalledgeraccountnumber.html'];
fr[526]=['GlnNumbersType', 'glnnumberstype.html'];
fr[527]=['glnNumber', 'glnnumber.html'];
fr[528]=['InvoiceDataType', 'invoicedatatype.html'];
fr[529]=['completenessIndicator', 'completenessindicator1.html'];
fr[530]=['invoiceIssueDate', 'invoiceissuedate2.html'];
fr[531]=['invoiceMain', 'invoicemain.html'];
fr[532]=['invoiceNumber', 'invoicenumber4.html'];
fr[533]=['InvoiceDetailType', 'invoicedetailtype.html'];
fr[534]=['additionalInvoiceData', 'additionalinvoicedata.html'];
fr[535]=['cashAccountingIndicator', 'cashaccountingindicator.html'];
fr[536]=['conventionalInvoiceInfo', 'conventionalinvoiceinfo.html'];
fr[537]=['currencyCode', 'currencycode.html'];
fr[538]=['exchangeRate', 'exchangerate.html'];
fr[539]=['invoiceAccountingDeliveryDate', 'invoiceaccountingdeliverydate.html'];
fr[540]=['invoiceAppearance', 'invoiceappearance2.html'];
fr[541]=['invoiceCategory', 'invoicecategory2.html'];
fr[542]=['invoiceDeliveryDate', 'invoicedeliverydate1.html'];
fr[543]=['invoiceDeliveryPeriodEnd', 'invoicedeliveryperiodend.html'];
fr[544]=['invoiceDeliveryPeriodStart', 'invoicedeliveryperiodstart.html'];
fr[545]=['paymentDate', 'paymentdate2.html'];
fr[546]=['paymentMethod', 'paymentmethod2.html'];
fr[547]=['periodicalSettlement', 'periodicalsettlement.html'];
fr[548]=['selfBillingIndicator', 'selfbillingindicator.html'];
fr[549]=['smallBusinessIndicator', 'smallbusinessindicator.html'];
fr[550]=['utilitySettlementIndicator', 'utilitysettlementindicator.html'];
fr[551]=['InvoiceHeadType', 'invoiceheadtype.html'];
fr[552]=['customerInfo', 'customerinfo.html'];
fr[553]=['fiscalRepresentativeInfo', 'fiscalrepresentativeinfo.html'];
fr[554]=['invoiceDetail', 'invoicedetail.html'];
fr[555]=['supplierInfo', 'supplierinfo.html'];
fr[556]=['InvoiceMainType', 'invoicemaintype.html'];
fr[557]=['batchInvoice', 'batchinvoice.html'];
fr[558]=['invoice', 'invoice1.html'];
fr[559]=['InvoiceReferenceType', 'invoicereferencetype.html'];
fr[560]=['modificationIndex', 'modificationindex2.html'];
fr[561]=['modifyWithoutMaster', 'modifywithoutmaster1.html'];
fr[562]=['originalInvoiceNumber', 'originalinvoicenumber4.html'];
fr[563]=['InvoiceType', 'invoicetype.html'];
fr[564]=['invoiceHead', 'invoicehead.html'];
fr[565]=['invoiceLines', 'invoicelines1.html'];
fr[566]=['invoiceReference', 'invoicereference.html'];
fr[567]=['invoiceSummary', 'invoicesummary.html'];
fr[568]=['productFeeSummary', 'productfeesummary.html'];
fr[569]=['ItemNumbersType', 'itemnumberstype.html'];
fr[570]=['itemNumber', 'itemnumber.html'];
fr[571]=['LineAmountsNormalType', 'lineamountsnormaltype.html'];
fr[572]=['lineGrossAmountData', 'linegrossamountdata.html'];
fr[573]=['lineNetAmountData', 'linenetamountdata.html'];
fr[574]=['lineVatData', 'linevatdata.html'];
fr[575]=['lineVatRate', 'linevatrate.html'];
fr[576]=['LineAmountsSimplifiedType', 'lineamountssimplifiedtype.html'];
fr[577]=['lineGrossAmountSimplified', 'linegrossamountsimplified.html'];
fr[578]=['lineGrossAmountSimplifiedHUF', 'linegrossamountsimplifiedhuf.html'];
fr[579]=['lineVatRate', 'linevatrate1.html'];
fr[580]=['LineGrossAmountDataType', 'linegrossamountdatatype.html'];
fr[581]=['lineGrossAmountNormal', 'linegrossamountnormal.html'];
fr[582]=['lineGrossAmountNormalHUF', 'linegrossamountnormalhuf.html'];
fr[583]=['LineModificationReferenceType', 'linemodificationreferencetype.html'];
fr[584]=['lineNumberReference', 'linenumberreference.html'];
fr[585]=['lineOperation', 'lineoperation.html'];
fr[586]=['LineNetAmountDataType', 'linenetamountdatatype.html'];
fr[587]=['lineNetAmount', 'linenetamount.html'];
fr[588]=['lineNetAmountHUF', 'linenetamounthuf.html'];
fr[589]=['LinesType', 'linestype.html'];
fr[590]=['line', 'line1.html'];
fr[591]=['mergedItemIndicator', 'mergeditemindicator.html'];
fr[592]=['LineType', 'linetype.html'];
fr[593]=['lineAmountsNormal', 'lineamountsnormal.html'];
fr[594]=['lineAmountsSimplified', 'lineamountssimplified.html'];
fr[595]=['additionalLineData', 'additionallinedata.html'];
fr[596]=['advanceData', 'advancedata.html'];
fr[597]=['aggregateInvoiceLineData', 'aggregateinvoicelinedata.html'];
fr[598]=['conventionalLineInfo', 'conventionallineinfo.html'];
fr[599]=['depositIndicator', 'depositindicator.html'];
fr[600]=['dieselOilPurchase', 'dieseloilpurchase.html'];
fr[601]=['GPCExcise', 'gpcexcise.html'];
fr[602]=['intermediatedService', 'intermediatedservice.html'];
fr[603]=['lineDescription', 'linedescription.html'];
fr[604]=['lineDiscountData', 'linediscountdata.html'];
fr[605]=['lineExpressionIndicator', 'lineexpressionindicator.html'];
fr[606]=['lineModificationReference', 'linemodificationreference.html'];
fr[607]=['lineNatureIndicator', 'linenatureindicator.html'];
fr[608]=['lineNumber', 'linenumber.html'];
fr[609]=['lineProductFeeContent', 'lineproductfeecontent.html'];
fr[610]=['netaDeclaration', 'netadeclaration.html'];
fr[611]=['newTransportMean', 'newtransportmean.html'];
fr[612]=['obligatedForProductFee', 'obligatedforproductfee.html'];
fr[613]=['productCodes', 'productcodes.html'];
fr[614]=['productFeeClause', 'productfeeclause.html'];
fr[615]=['quantity', 'quantity.html'];
fr[616]=['referencesToOtherLines', 'referencestootherlines.html'];
fr[617]=['unitOfMeasure', 'unitofmeasure.html'];
fr[618]=['unitOfMeasureOwn', 'unitofmeasureown.html'];
fr[619]=['unitPrice', 'unitprice.html'];
fr[620]=['unitPriceHUF', 'unitpricehuf.html'];
fr[621]=['LineVatDataType', 'linevatdatatype.html'];
fr[622]=['lineVatAmount', 'linevatamount.html'];
fr[623]=['lineVatAmountHUF', 'linevatamounthuf.html'];
fr[624]=['MaterialNumbersType', 'materialnumberstype.html'];
fr[625]=['materialNumber', 'materialnumber.html'];
fr[626]=['NewTransportMeanType', 'newtransportmeantype.html'];
fr[627]=['aircraft', 'aircraft.html'];
fr[628]=['vehicle', 'vehicle.html'];
fr[629]=['vessel', 'vessel.html'];
fr[630]=['brand', 'brand.html'];
fr[631]=['engineNum', 'enginenum.html'];
fr[632]=['firstEntryIntoService', 'firstentryintoservice.html'];
fr[633]=['serialNum', 'serialnum.html'];
fr[634]=['OrderNumbersType', 'ordernumberstype.html'];
fr[635]=['orderNumber', 'ordernumber.html'];
fr[636]=['PaymentEvidenceDocumentDataType', 'paymentevidencedocumentdatatype.html'];
fr[637]=['evidenceDocumentDate', 'evidencedocumentdate.html'];
fr[638]=['evidenceDocumentNo', 'evidencedocumentno.html'];
fr[639]=['obligatedAddress', 'obligatedaddress.html'];
fr[640]=['obligatedName', 'obligatedname.html'];
fr[641]=['obligatedTaxNumber', 'obligatedtaxnumber.html'];
fr[642]=['ProductCodesType', 'productcodestype.html'];
fr[643]=['productCode', 'productcode.html'];
fr[644]=['ProductCodeType', 'productcodetype.html'];
fr[645]=['productCodeOwnValue', 'productcodeownvalue.html'];
fr[646]=['productCodeValue', 'productcodevalue.html'];
fr[647]=['productCodeCategory', 'productcodecategory.html'];
fr[648]=['ProductFeeClauseType', 'productfeeclausetype.html'];
fr[649]=['customerDeclaration', 'customerdeclaration.html'];
fr[650]=['productFeeTakeoverData', 'productfeetakeoverdata.html'];
fr[651]=['ProductFeeDataType', 'productfeedatatype.html'];
fr[652]=['productFeeAmount', 'productfeeamount.html'];
fr[653]=['productFeeCode', 'productfeecode.html'];
fr[654]=['productFeeMeasuringUnit', 'productfeemeasuringunit.html'];
fr[655]=['productFeeQuantity', 'productfeequantity.html'];
fr[656]=['productFeeRate', 'productfeerate.html'];
fr[657]=['ProductFeeSummaryType', 'productfeesummarytype.html'];
fr[658]=['paymentEvidenceDocumentData', 'paymentevidencedocumentdata.html'];
fr[659]=['productChargeSum', 'productchargesum.html'];
fr[660]=['productFeeData', 'productfeedata.html'];
fr[661]=['productFeeOperation', 'productfeeoperation.html'];
fr[662]=['ProductFeeTakeoverDataType', 'productfeetakeoverdatatype.html'];
fr[663]=['takeoverAmount', 'takeoveramount.html'];
fr[664]=['takeoverReason', 'takeoverreason.html'];
fr[665]=['ProjectNumbersType', 'projectnumberstype.html'];
fr[666]=['projectNumber', 'projectnumber.html'];
fr[667]=['ReferencesToOtherLinesType', 'referencestootherlinestype.html'];
fr[668]=['referenceToOtherLine', 'referencetootherline.html'];
fr[669]=['ShippingDatesType', 'shippingdatestype.html'];
fr[670]=['shippingDate', 'shippingdate.html'];
fr[671]=['SummaryByVatRateType', 'summarybyvatratetype.html'];
fr[672]=['vatRate', 'vatrate.html'];
fr[673]=['vatRateGrossData', 'vatrategrossdata.html'];
fr[674]=['vatRateNetData', 'vatratenetdata.html'];
fr[675]=['vatRateVatData', 'vatratevatdata.html'];
fr[676]=['SummaryGrossDataType', 'summarygrossdatatype.html'];
fr[677]=['invoiceGrossAmount', 'invoicegrossamount.html'];
fr[678]=['invoiceGrossAmountHUF', 'invoicegrossamounthuf.html'];
fr[679]=['SummaryNormalType', 'summarynormaltype.html'];
fr[680]=['invoiceNetAmount', 'invoicenetamount2.html'];
fr[681]=['invoiceNetAmountHUF', 'invoicenetamounthuf2.html'];
fr[682]=['invoiceVatAmount', 'invoicevatamount2.html'];
fr[683]=['invoiceVatAmountHUF', 'invoicevatamounthuf2.html'];
fr[684]=['summaryByVatRate', 'summarybyvatrate.html'];
fr[685]=['SummarySimplifiedType', 'summarysimplifiedtype.html'];
fr[686]=['vatContentGrossAmount', 'vatcontentgrossamount.html'];
fr[687]=['vatContentGrossAmountHUF', 'vatcontentgrossamounthuf.html'];
fr[688]=['vatRate', 'vatrate1.html'];
fr[689]=['SummaryType', 'summarytype.html'];
fr[690]=['summaryNormal', 'summarynormal.html'];
fr[691]=['summarySimplified', 'summarysimplified.html'];
fr[692]=['summaryGrossData', 'summarygrossdata.html'];
fr[693]=['SupplierCompanyCodesType', 'suppliercompanycodestype.html'];
fr[694]=['supplierCompanyCode', 'suppliercompanycode.html'];
fr[695]=['SupplierInfoType', 'supplierinfotype.html'];
fr[696]=['communityVatNumber', 'communityvatnumber1.html'];
fr[697]=['exciseLicenceNum', 'exciselicencenum.html'];
fr[698]=['groupMemberTaxNumber', 'groupmembertaxnumber2.html'];
fr[699]=['individualExemption', 'individualexemption.html'];
fr[700]=['supplierAddress', 'supplieraddress.html'];
fr[701]=['supplierBankAccountNumber', 'supplierbankaccountnumber.html'];
fr[702]=['supplierName', 'suppliername2.html'];
fr[703]=['supplierTaxNumber', 'suppliertaxnumber3.html'];
fr[704]=['VatAmountMismatchType', 'vatamountmismatchtype.html'];
fr[705]=['case', 'case1.html'];
fr[706]=['vatRate', 'vatrate2.html'];
fr[707]=['VatRateGrossDataType', 'vatrategrossdatatype.html'];
fr[708]=['vatRateGrossAmount', 'vatrategrossamount.html'];
fr[709]=['vatRateGrossAmountHUF', 'vatrategrossamounthuf.html'];
fr[710]=['VatRateNetDataType', 'vatratenetdatatype.html'];
fr[711]=['vatRateNetAmount', 'vatratenetamount.html'];
fr[712]=['vatRateNetAmountHUF', 'vatratenetamounthuf.html'];
fr[713]=['VatRateType', 'vatratetype.html'];
fr[714]=['marginSchemeIndicator', 'marginschemeindicator.html'];
fr[715]=['noVatCharge', 'novatcharge.html'];
fr[716]=['vatAmountMismatch', 'vatamountmismatch.html'];
fr[717]=['vatContent', 'vatcontent.html'];
fr[718]=['vatDomesticReverseCharge', 'vatdomesticreversecharge.html'];
fr[719]=['vatExemption', 'vatexemption.html'];
fr[720]=['vatOutOfScope', 'vatoutofscope.html'];
fr[721]=['vatPercentage', 'vatpercentage.html'];
fr[722]=['VatRateVatDataType', 'vatratevatdatatype.html'];
fr[723]=['vatRateVatAmount', 'vatratevatamount.html'];
fr[724]=['vatRateVatAmountHUF', 'vatratevatamounthuf.html'];
fr[725]=['VehicleType', 'vehicletype.html'];
fr[726]=['engineCapacity', 'enginecapacity.html'];
fr[727]=['enginePower', 'enginepower.html'];
fr[728]=['kms', 'kms.html'];
fr[729]=['VesselType', 'vesseltype.html'];
fr[730]=['activityReferred', 'activityreferred.html'];
fr[731]=['length', 'length.html'];
fr[732]=['sailedHours', 'sailedhours.html'];
fr[733]=['InvoiceData', 'invoicedata2.html'];
fr[734]=['CustomerVatStatusType', 'customervatstatustype.html'];
fr[735]=['DataNameType', 'datanametype.html'];
fr[736]=['EkaerIdType', 'ekaeridtype.html'];
fr[737]=['ExchangeRateType', 'exchangeratetype.html'];
fr[738]=['LineNatureIndicatorType', 'linenatureindicatortype.html'];
fr[739]=['LineOperationType', 'lineoperationtype.html'];
fr[740]=['MarginSchemeType', 'marginschemetype.html'];
fr[741]=['ProductCodeCategoryType', 'productcodecategorytype.html'];
fr[742]=['ProductCodeValueType', 'productcodevaluetype.html'];
fr[743]=['ProductFeeMeasuringUnitType', 'productfeemeasuringunittype.html'];
fr[744]=['ProductFeeOperationType', 'productfeeoperationtype.html'];
fr[745]=['ProductStreamType', 'productstreamtype.html'];
fr[746]=['QuantityType', 'quantitytype.html'];
fr[747]=['RateType', 'ratetype.html'];
fr[748]=['TakeoverType', 'takeovertype.html'];
fr[749]=['UnitOfMeasureType', 'unitofmeasuretype.html'];
fr[750]=['communicationData.xsd', 'communicationdata_xsd.html'];
fr[751]=['AeInternalMetric', 'aeinternalmetric.html'];
fr[752]=['aeInternalMetricId', 'aeinternalmetricid.html'];
fr[753]=['aeInternalMetricValue', 'aeinternalmetricvalue.html'];
fr[754]=['AeInternalMetricListType', 'aeinternalmetriclisttype.html'];
fr[755]=['aeInternalMetric', 'aeinternalmetric1.html'];
fr[756]=['AeStateType', 'aestatetype.html'];
fr[757]=['aeInternalMetric', 'aeinternalmetric2.html'];
fr[758]=['batteryLevel', 'batterylevel.html'];
fr[759]=['freeStorage', 'freestorage.html'];
fr[760]=['gsmCell', 'gsmcell.html'];
fr[761]=['mobileConnection', 'mobileconnection.html'];
fr[762]=['provider', 'provider.html'];
fr[763]=['signalStrength', 'signalstrength.html'];
fr[764]=['AppSoftwareType', 'appsoftwaretype.html'];
fr[765]=['softwareId', 'softwareid1.html'];
fr[766]=['softwareMainVersion', 'softwaremainversion1.html'];
fr[767]=['softwareOperation', 'softwareoperation1.html'];
fr[768]=['CashRegisterEventType', 'cashregistereventtype.html'];
fr[769]=['eventCode', 'eventcode.html'];
fr[770]=['eventDescription', 'eventdescription.html'];
fr[771]=['CashRegisterInfoType', 'cashregisterinfotype.html'];
fr[772]=['cashRegisterEvent', 'cashregisterevent.html'];
fr[773]=['cashRegisterPosition', 'cashregisterposition.html'];
fr[774]=['cashRegisterState', 'cashregisterstate.html'];
fr[775]=['cashRegisterTechnicalInfo', 'cashregistertechnicalinfo.html'];
fr[776]=['cashRegisterTimeUpdate', 'cashregistertimeupdate.html'];
fr[777]=['CashRegisterPositionType', 'cashregisterpositiontype.html'];
fr[778]=['height', 'height.html'];
fr[779]=['latitude', 'latitude.html'];
fr[780]=['longitude', 'longitude.html'];
fr[781]=['CashRegisterStateType', 'cashregisterstatetype.html'];
fr[782]=['aeBlockUnblockState', 'aeblockunblockstate.html'];
fr[783]=['aeState', 'aestate.html'];
fr[784]=['cashRegisterWorkState', 'cashregisterworkstate.html'];
fr[785]=['errors', 'errors.html'];
fr[786]=['fiscalDayState', 'fiscaldaystate.html'];
fr[787]=['lastRecordCounter', 'lastrecordcounter.html'];
fr[788]=['lastSentRecordCounter', 'lastsentrecordcounter.html'];
fr[789]=['CashRegisterTechnicalInfoType', 'cashregistertechnicalinfotype.html'];
fr[790]=['cashRegisterSoftware', 'cashregistersoftware.html'];
fr[791]=['communicationProtocolVersion', 'communicationprotocolversion.html'];
fr[792]=['epdProcessIdentifiers', 'epdprocessidentifiers.html'];
fr[793]=['hardwareTechnicalInfo', 'hardwaretechnicalinfo.html'];
fr[794]=['imei', 'imei.html'];
fr[795]=['imsi', 'imsi.html'];
fr[796]=['operatorSite', 'operatorsite.html'];
fr[797]=['posAssignedBankAccounts', 'posassignedbankaccounts.html'];
fr[798]=['registrationNumber', 'registrationnumber.html'];
fr[799]=['schemaVersion', 'schemaversion.html'];
fr[800]=['vat', 'vat.html'];
fr[801]=['CashRegisterTimeUpdateType', 'cashregistertimeupdatetype.html'];
fr[802]=['changeDuration', 'changeduration.html'];
fr[803]=['changeMode', 'changemode.html'];
fr[804]=['newTime', 'newtime.html'];
fr[805]=['oldTime', 'oldtime.html'];
fr[806]=['EndpointsListType', 'endpointslisttype.html'];
fr[807]=['endpoints', 'endpoints.html'];
fr[808]=['EndpointType', 'endpointtype.html'];
fr[809]=['httpMethod', 'httpmethod.html'];
fr[810]=['sequence', 'sequence.html'];
fr[811]=['service', 'service.html'];
fr[812]=['url', 'url.html'];
fr[813]=['EpdProcessIdentifiersType', 'epdprocessidentifierstype.html'];
fr[814]=['currentAeBlockUnblockStateProcessId', 'currentaeblockunblockstateprocessid.html'];
fr[815]=['currentOperatorSiteProcessId', 'currentoperatorsiteprocessid.html'];
fr[816]=['currentSoftwareProcessId', 'currentsoftwareprocessid.html'];
fr[817]=['currentVatProcessId', 'currentvatprocessid.html'];
fr[818]=['nextOperatorSiteProcessId', 'nextoperatorsiteprocessid.html'];
fr[819]=['nextSoftwareProcessId', 'nextsoftwareprocessid.html'];
fr[820]=['nextVatProcessId', 'nextvatprocessid.html'];
fr[821]=['FirmwareSliceType', 'firmwareslicetype.html'];
fr[822]=['firmwareDownloadUrl', 'firmwaredownloadurl.html'];
fr[823]=['firmwareHash', 'firmwarehash.html'];
fr[824]=['firmwareSliceNumber', 'firmwareslicenumber.html'];
fr[825]=['HardwareTechnicalInfoType', 'hardwaretechnicalinfotype.html'];
fr[826]=['aeHardwareVersion', 'aehardwareversion.html'];
fr[827]=['aeName', 'aename.html'];
fr[828]=['aeSoftware', 'aesoftware.html'];
fr[829]=['cashRegisterHardwareVersion', 'cashregisterhardwareversion.html'];
fr[830]=['cashRegisterName', 'cashregistername.html'];
fr[831]=['modemName', 'modemname.html'];
fr[832]=['modemSoftwareVersion', 'modemsoftwareversion.html'];
fr[833]=['OperatorSiteType', 'operatorsitetype.html'];
fr[834]=['coTaxPayer', 'cotaxpayer.html'];
fr[835]=['operatorSiteValidFrom', 'operatorsitevalidfrom.html'];
fr[836]=['shop', 'shop.html'];
fr[837]=['taxPayer', 'taxpayer.html'];
fr[838]=['PosAssignedBankAccountListType', 'posassignedbankaccountlisttype.html'];
fr[839]=['posAssignedBankAccountNumber', 'posassignedbankaccountnumber.html'];
fr[840]=['ProductItemType', 'productitemtype.html'];
fr[841]=['categoryCode', 'categorycode.html'];
fr[842]=['categoryNameLevel4', 'categorynamelevel4.html'];
fr[843]=['dtszkId', 'dtszkid.html'];
fr[844]=['productId', 'productid.html'];
fr[845]=['productManufacturer', 'productmanufacturer.html'];
fr[846]=['productName', 'productname.html'];
fr[847]=['state', 'state.html'];
fr[848]=['unitOfMeasure', 'unitofmeasure1.html'];
fr[849]=['validFrom', 'validfrom.html'];
fr[850]=['validTo', 'validto.html'];
fr[851]=['vtsz', 'vtsz.html'];
fr[852]=['ProductListType', 'productlisttype.html'];
fr[853]=['productItem', 'productitem.html'];
fr[854]=['SoftwareType', 'softwaretype1.html'];
fr[855]=['softwareDevContact', 'softwaredevcontact1.html'];
fr[856]=['softwareDevCountryCode', 'softwaredevcountrycode1.html'];
fr[857]=['softwareDevName', 'softwaredevname1.html'];
fr[858]=['softwareDevTaxNumber', 'softwaredevtaxnumber1.html'];
fr[859]=['softwareHash', 'softwarehash.html'];
fr[860]=['softwareId', 'softwareid2.html'];
fr[861]=['softwareLastUpdateTime', 'softwarelastupdatetime.html'];
fr[862]=['softwareMainVersion', 'softwaremainversion2.html'];
fr[863]=['softwareName', 'softwarename1.html'];
fr[864]=['softwareOperation', 'softwareoperation2.html'];
fr[865]=['TaxpayerAddressItemType', 'taxpayeraddressitemtype1.html'];
fr[866]=['taxpayerAddress', 'taxpayeraddress1.html'];
fr[867]=['taxpayerAddressClass', 'taxpayeraddressclass.html'];
fr[868]=['TaxpayerAddressListType', 'taxpayeraddresslisttype1.html'];
fr[869]=['taxpayerAddressItem', 'taxpayeraddressitem1.html'];
fr[870]=['TaxpayerDataType', 'taxpayerdatatype1.html'];
fr[871]=['incorporation', 'incorporation1.html'];
fr[872]=['taxNumberDetail', 'taxnumberdetail1.html'];
fr[873]=['taxpayerAddressList', 'taxpayeraddresslist1.html'];
fr[874]=['taxpayerName', 'taxpayername1.html'];
fr[875]=['taxpayerShortName', 'taxpayershortname1.html'];
fr[876]=['vatGroupMembership', 'vatgroupmembership1.html'];
fr[877]=['TeaorCodeListType', 'teaorcodelisttype.html'];
fr[878]=['teaorCode', 'teaorcode.html'];
fr[879]=['VatGroupType', 'vatgrouptype.html'];
fr[880]=['collectorCode', 'collectorcode.html'];
fr[881]=['vatContent', 'vatcontent1.html'];
fr[882]=['vatLabel', 'vatlabel.html'];
fr[883]=['vatPercentage', 'vatpercentage1.html'];
fr[884]=['VatListType', 'vatlisttype.html'];
fr[885]=['vat', 'vat1.html'];
fr[886]=['VatType', 'vattype.html'];
fr[887]=['vatGroup', 'vatgroup.html'];
fr[888]=['vatValidFrom', 'vatvalidfrom.html'];
fr[889]=['AeBlockUnblockStateType', 'aeblockunblockstatetype.html'];
fr[890]=['BlockUnblockType', 'blockunblocktype.html'];
fr[891]=['CashRegisterWorkStateType', 'cashregisterworkstatetype.html'];
fr[892]=['CertificateSigningRequestType', 'certificatesigningrequesttype.html'];
fr[893]=['CertificateType', 'certificatetype.html'];
fr[894]=['CertificateTypeType', 'certificatetypetype.html'];
fr[895]=['CMSCertificateSigningRequestType', 'cmscertificatesigningrequesttype.html'];
fr[896]=['EventCodeType', 'eventcodetype.html'];
fr[897]=['FiscalDayStateType', 'fiscaldaystatetype.html'];
fr[898]=['GpsType', 'gpstype.html'];
fr[899]=['HttpMethodType', 'httpmethodtype.html'];
fr[900]=['IncorporationType', 'incorporationtype1.html'];
fr[901]=['MobileConnectionType', 'mobileconnectiontype.html'];
fr[902]=['PercentageType', 'percentagetype.html'];
fr[903]=['PrintMessageType', 'printmessagetype.html'];
fr[904]=['ProductStateType', 'productstatetype.html'];
fr[905]=['QueryCertificateResultType', 'querycertificateresulttype.html'];
fr[906]=['RegistrationNumberType', 'registrationnumbertype.html'];
fr[907]=['ServiceType', 'servicetype.html'];
fr[908]=['SoftwareIdType', 'softwareidtype1.html'];
fr[909]=['SoftwareOperationType', 'softwareoperationtype1.html'];
fr[910]=['TaxpayerAddressClassType', 'taxpayeraddressclasstype.html'];
fr[911]=['TeaorCodeType', 'teaorcodetype.html'];
fr[912]=['UnitOfMeasureType', 'unitofmeasuretype1.html'];
fr[913]=['UrlType', 'urltype.html'];
fr[914]=['documentData.xsd', 'documentdata_xsd.html'];
fr[915]=['DocumentDataType', 'documentdatatype.html'];
fr[916]=['consumeSummaryNumber', 'consumesummarynumber.html'];
fr[917]=['fuelCardInfo', 'fuelcardinfo.html'];
fr[918]=['healthFundInfo', 'healthfundinfo.html'];
fr[919]=['document', 'document.html'];
fr[920]=['documentIssueDate', 'documentissuedate.html'];
fr[921]=['documentNumber', 'documentnumber1.html'];
fr[922]=['issueEndDateTime', 'issueenddatetime1.html'];
fr[923]=['issueStartDateTime', 'issuestartdatetime.html'];
fr[924]=['DocumentDetailType', 'documentdetailtype.html'];
fr[925]=['additionalDocumentData', 'additionaldocumentdata.html'];
fr[926]=['documentCategory', 'documentcategory.html'];
fr[927]=['paymentInstruments', 'paymentinstruments.html'];
fr[928]=['DocumentHeadType', 'documentheadtype.html'];
fr[929]=['coTaxPayer', 'cotaxpayer1.html'];
fr[930]=['customerInfo', 'customerinfo1.html'];
fr[931]=['documentDetail', 'documentdetail.html'];
fr[932]=['shop', 'shop1.html'];
fr[933]=['taxPayer', 'taxpayer1.html'];
fr[934]=['DocumentReferenceType', 'documentreferencetype.html'];
fr[935]=['cancellationReason', 'cancellationreason.html'];
fr[936]=['modificationReason', 'modificationreason.html'];
fr[937]=['modificationIndex', 'modificationindex3.html'];
fr[938]=['originalDocumentNumber', 'originaldocumentnumber.html'];
fr[939]=['DocumentType', 'documenttype.html'];
fr[940]=['documentHead', 'documenthead.html'];
fr[941]=['documentLines', 'documentlines.html'];
fr[942]=['documentReference', 'documentreference.html'];
fr[943]=['documentSummary', 'documentsummary.html'];
fr[944]=['InvoiceControlDataType', 'invoicecontroldatatype.html'];
fr[945]=['balanceChange', 'balancechange.html'];
fr[946]=['documentNumber', 'documentnumber2.html'];
fr[947]=['documentRoundingAmount', 'documentroundingamount.html'];
fr[948]=['issueEndDateTime', 'issueenddatetime2.html'];
fr[949]=['issueStartDateTime', 'issuestartdatetime1.html'];
fr[950]=['ntcaControlCode', 'ntcacontrolcode.html'];
fr[951]=['recordCounter', 'recordcounter.html'];
fr[952]=['shop', 'shop2.html'];
fr[953]=['InvoiceCoreDataType', 'invoicecoredatatype.html'];
fr[954]=['invoiceData', 'invoicedata3.html'];
fr[955]=['metaData', 'metadata.html'];
fr[956]=['LineAmountsDocumentType', 'lineamountsdocumenttype.html'];
fr[957]=['collectorCode', 'collectorcode1.html'];
fr[958]=['lineGrossAmountDocument', 'linegrossamountdocument.html'];
fr[959]=['lineGrossAmountDocumentHUF', 'linegrossamountdocumenthuf.html'];
fr[960]=['LinesType', 'linestype1.html'];
fr[961]=['line', 'line2.html'];
fr[962]=['LineType', 'linetype1.html'];
fr[963]=['additionalLineData', 'additionallinedata1.html'];
fr[964]=['EANCode', 'eancode.html'];
fr[965]=['itemNature', 'itemnature.html'];
fr[966]=['lineAmountsDocument', 'lineamountsdocument.html'];
fr[967]=['lineDescription', 'linedescription1.html'];
fr[968]=['lineNatureIndicator', 'linenatureindicator1.html'];
fr[969]=['lineNumber', 'linenumber1.html'];
fr[970]=['productCodes', 'productcodes1.html'];
fr[971]=['quantity', 'quantity1.html'];
fr[972]=['unitOfMeasure', 'unitofmeasure2.html'];
fr[973]=['unitOfMeasureOwn', 'unitofmeasureown1.html'];
fr[974]=['unitPrice', 'unitprice1.html'];
fr[975]=['unitPriceHUF', 'unitpricehuf1.html'];
fr[976]=['OtherDocumentCoreDataType', 'otherdocumentcoredatatype.html'];
fr[977]=['metaData', 'metadata1.html'];
fr[978]=['otherDocumentData', 'otherdocumentdata.html'];
fr[979]=['ProductCodesType', 'productcodestype1.html'];
fr[980]=['productCode', 'productcode1.html'];
fr[981]=['ProductCodeType', 'productcodetype1.html'];
fr[982]=['productCodeOwnValue', 'productcodeownvalue1.html'];
fr[983]=['productCodeValue', 'productcodevalue1.html'];
fr[984]=['productCodeCategory', 'productcodecategory1.html'];
fr[985]=['ReceiptCoreDataType', 'receiptcoredatatype.html'];
fr[986]=['metaData', 'metadata2.html'];
fr[987]=['receiptData', 'receiptdata.html'];
fr[988]=['SummaryDocumentType', 'summarydocumenttype.html'];
fr[989]=['collectorCode', 'collectorcode2.html'];
fr[990]=['vatContentGrossAmount', 'vatcontentgrossamount1.html'];
fr[991]=['vatContentGrossAmountHUF', 'vatcontentgrossamounthuf1.html'];
fr[992]=['SummaryGrossDataType', 'summarygrossdatatype1.html'];
fr[993]=['documentGrossAmount', 'documentgrossamount.html'];
fr[994]=['documentGrossAmountHUF', 'documentgrossamounthuf1.html'];
fr[995]=['documentRoundingAmount', 'documentroundingamount1.html'];
fr[996]=['SummaryType', 'summarytype1.html'];
fr[997]=['ntcaControlCode', 'ntcacontrolcode1.html'];
fr[998]=['summaryDocument', 'summarydocument.html'];
fr[999]=['summaryGrossData', 'summarygrossdata1.html'];
fr[1000]=['SupplierInfoType', 'supplierinfotype1.html'];
fr[1001]=['communityVatNumber', 'communityvatnumber2.html'];
fr[1002]=['exciseLicenceNum', 'exciselicencenum1.html'];
fr[1003]=['groupMemberTaxNumber', 'groupmembertaxnumber3.html'];
fr[1004]=['individualExemption', 'individualexemption1.html'];
fr[1005]=['supplierAddress', 'supplieraddress1.html'];
fr[1006]=['supplierBankAccountNumber', 'supplierbankaccountnumber1.html'];
fr[1007]=['supplierName', 'suppliername3.html'];
fr[1008]=['supplierTaxNumber', 'suppliertaxnumber4.html'];
fr[1009]=['LineNatureIndicatorType', 'linenatureindicatortype1.html'];
fr[1010]=['ProductCodeCategoryType', 'productcodecategorytype1.html'];
fr[1011]=['ProductCodeValueType', 'productcodevaluetype1.html'];
fr[1012]=['QuantityType', 'quantitytype1.html'];
fr[1013]=['documentMessage.xsd', 'documentmessage_xsd.html'];
fr[1014]=['CoreDocumentType', 'coredocumenttype.html'];
fr[1015]=['otherDocumentCore', 'otherdocumentcore.html'];
fr[1016]=['receiptCore', 'receiptcore.html'];
fr[1017]=['invoiceControl', 'invoicecontrol.html'];
fr[1018]=['invoiceCore', 'invoicecore.html'];
fr[1019]=['CustomerDocumentType', 'customerdocumenttype.html'];
fr[1020]=['invoiceAdditional', 'invoiceadditional.html'];
fr[1021]=['otherDocumentAdditional', 'otherdocumentadditional.html'];
fr[1022]=['receiptAdditional', 'receiptadditional.html'];
fr[1023]=['decryptKey', 'decryptkey.html'];
fr[1024]=['CoreDocument', 'coredocument.html'];
fr[1025]=['CustomerDocument', 'customerdocument.html'];
fr[1026]=['eReceiptBase.xsd', 'ereceiptbase_xsd.html'];
fr[1027]=['AdditionalDataType', 'additionaldatatype1.html'];
fr[1028]=['dataDescription', 'datadescription1.html'];
fr[1029]=['dataName', 'dataname1.html'];
fr[1030]=['dataValue', 'datavalue1.html'];
fr[1031]=['AdditionalHeadType', 'additionalheadtype.html'];
fr[1032]=['additionalData', 'additionaldata.html'];
fr[1033]=['AdditionalLinesType', 'additionallinestype.html'];
fr[1034]=['additionalLine', 'additionalline.html'];
fr[1035]=['AdditionalLineType', 'additionallinetype.html'];
fr[1036]=['additionalLineData', 'additionallinedata2.html'];
fr[1037]=['lineNumber', 'linenumber2.html'];
fr[1038]=['AddressType', 'addresstype1.html'];
fr[1039]=['detailedAddress', 'detailedaddress1.html'];
fr[1040]=['simpleAddress', 'simpleaddress1.html'];
fr[1041]=['AttachmentType', 'attachmenttype.html'];
fr[1042]=['fileBinary', 'filebinary.html'];
fr[1043]=['fileExtension', 'fileextension.html'];
fr[1044]=['BasicEReceiptRequestType', 'basicereceiptrequesttype.html'];
fr[1045]=['APNumber', 'apnumber.html'];
fr[1046]=['BasicEReceiptResponseType', 'basicereceiptresponsetype.html'];
fr[1047]=['APNumber', 'apnumber1.html'];
fr[1048]=['callbackRequired', 'callbackrequired.html'];
fr[1049]=['CommerceCollectorListType', 'commercecollectorlisttype.html'];
fr[1050]=['commercialCollector', 'commercialcollector.html'];
fr[1051]=['CommerceCollectorType', 'commercecollectortype.html'];
fr[1052]=['collectorCode', 'collectorcode3.html'];
fr[1053]=['collectorGrossAmount', 'collectorgrossamount.html'];
fr[1054]=['collectorNetAmount', 'collectornetamount.html'];
fr[1055]=['collectorVatAmount', 'collectorvatamount.html'];
fr[1056]=['CustomerInfoType', 'customerinfotype1.html'];
fr[1057]=['customerAddress', 'customeraddress1.html'];
fr[1058]=['customerBankAccountNumber', 'customerbankaccountnumber1.html'];
fr[1059]=['customerName', 'customername2.html'];
fr[1060]=['customerVatData', 'customervatdata1.html'];
fr[1061]=['customerVatStatus', 'customervatstatus1.html'];
fr[1062]=['CustomerTaxNumberType', 'customertaxnumbertype1.html'];
fr[1063]=['groupMemberTaxNumber', 'groupmembertaxnumber4.html'];
fr[1064]=['CustomerVatDataType', 'customervatdatatype1.html'];
fr[1065]=['communityVatNumber', 'communityvatnumber3.html'];
fr[1066]=['customerTaxNumber', 'customertaxnumber3.html'];
fr[1067]=['thirdStateTaxId', 'thirdstatetaxid1.html'];
fr[1068]=['DailyCashFlowDetailListType', 'dailycashflowdetaillisttype.html'];
fr[1069]=['dailyCashFlowDetail', 'dailycashflowdetail.html'];
fr[1070]=['DailyCashFlowDetailType', 'dailycashflowdetailtype.html'];
fr[1071]=['amount', 'amount.html'];
fr[1072]=['commerceCollectorList', 'commercecollectorlist.html'];
fr[1073]=['count', 'count.html'];
fr[1074]=['fulfillmentDate', 'fulfillmentdate.html'];
fr[1075]=['DetailedAddressType', 'detailedaddresstype1.html'];
fr[1076]=['building', 'building1.html'];
fr[1077]=['city', 'city2.html'];
fr[1078]=['countryCode', 'countrycode2.html'];
fr[1079]=['door', 'door1.html'];
fr[1080]=['floor', 'floor1.html'];
fr[1081]=['lotNumber', 'lotnumber1.html'];
fr[1082]=['number', 'number1.html'];
fr[1083]=['postalCode', 'postalcode2.html'];
fr[1084]=['publicPlaceCategory', 'publicplacecategory1.html'];
fr[1085]=['region', 'region2.html'];
fr[1086]=['staircase', 'staircase1.html'];
fr[1087]=['streetName', 'streetname1.html'];
fr[1088]=['DocumentAdditionalDataType', 'documentadditionaldatatype.html'];
fr[1089]=['additionalHead', 'additionalhead.html'];
fr[1090]=['additionalLines', 'additionallines.html'];
fr[1091]=['attachment', 'attachment.html'];
fr[1092]=['documentNumber', 'documentnumber3.html'];
fr[1093]=['DocumentControlDataType', 'documentcontroldatatype.html'];
fr[1094]=['balanceChange', 'balancechange1.html'];
fr[1095]=['documentNumber', 'documentnumber4.html'];
fr[1096]=['recordCounter', 'recordcounter1.html'];
fr[1097]=['ForeignCurrencyType', 'foreigncurrencytype.html'];
fr[1098]=['currencyAmount', 'currencyamount.html'];
fr[1099]=['currencyCode', 'currencycode1.html'];
fr[1100]=['currencyHufAmount', 'currencyhufamount.html'];
fr[1101]=['exchangeRate', 'exchangerate1.html'];
fr[1102]=['FuelCardInfoType', 'fuelcardinfotype.html'];
fr[1103]=['authorizationNumber', 'authorizationnumber.html'];
fr[1104]=['fuelCardNumber', 'fuelcardnumber.html'];
fr[1105]=['vehicleRegistrationNumber', 'vehicleregistrationnumber1.html'];
fr[1106]=['HealthFundInfoType', 'healthfundinfotype.html'];
fr[1107]=['healthFundAddress', 'healthfundaddress.html'];
fr[1108]=['healthFundCardNumber', 'healthfundcardnumber.html'];
fr[1109]=['healthFundCode', 'healthfundcode.html'];
fr[1110]=['healthFundMemberNumber', 'healthfundmembernumber.html'];
fr[1111]=['healthFundName', 'healthfundname.html'];
fr[1112]=['InstrumentType', 'instrumenttype.html'];
fr[1113]=['afrAmount', 'aframount.html'];
fr[1114]=['cardPaymentAmount', 'cardpaymentamount.html'];
fr[1115]=['cashHufAmount', 'cashhufamount.html'];
fr[1116]=['foreignCurrency', 'foreigncurrency.html'];
fr[1117]=['otherPayment', 'otherpayment.html'];
fr[1118]=['szepCardAmount', 'szepcardamount.html'];
fr[1119]=['MetaDataType', 'metadatatype.html'];
fr[1120]=['APNumber', 'apnumber2.html'];
fr[1121]=['documentNumber', 'documentnumber5.html'];
fr[1122]=['documentOperation', 'documentoperation.html'];
fr[1123]=['electronicInvoiceHash', 'electronicinvoicehash2.html'];
fr[1124]=['taxpayerId', 'taxpayerid1.html'];
fr[1125]=['OtherPaymentType', 'otherpaymenttype.html'];
fr[1126]=['otherPaymentCode', 'otherpaymentcode.html'];
fr[1127]=['otherPaymentHufAmount', 'otherpaymenthufamount.html'];
fr[1128]=['PaymentInstrumentsType', 'paymentinstrumentstype.html'];
fr[1129]=['paymentInstrument', 'paymentinstrument.html'];
fr[1130]=['PaymentInstrumentType', 'paymentinstrumenttype.html'];
fr[1131]=['documentPaymentAmount', 'documentpaymentamount.html'];
fr[1132]=['documentPaymentMethod', 'documentpaymentmethod.html'];
fr[1133]=['ReportHeaderType', 'reportheadertype.html'];
fr[1134]=['additionalData', 'additionaldata1.html'];
fr[1135]=['coTaxPayer', 'cotaxpayer2.html'];
fr[1136]=['issueStartDateTime', 'issuestartdatetime2.html'];
fr[1137]=['ntcaControlCode', 'ntcacontrolcode2.html'];
fr[1138]=['recordCounter', 'recordcounter2.html'];
fr[1139]=['shop', 'shop3.html'];
fr[1140]=['taxPayer', 'taxpayer2.html'];
fr[1141]=['ShopType', 'shoptype.html'];
fr[1142]=['shopName', 'shopname.html'];
fr[1143]=['shopShortName', 'shopshortname.html'];
fr[1144]=['SignedDocumentEnvelopeType', 'signeddocumentenvelopetype.html'];
fr[1145]=['customerEnvelopeData', 'customerenvelopedata.html'];
fr[1146]=['envelopeData', 'envelopedata.html'];
fr[1147]=['envelopeHash', 'envelopehash.html'];
fr[1148]=['envelopeSignature', 'envelopesignature.html'];
fr[1149]=['envelopeVersion', 'envelopeversion.html'];
fr[1150]=['SignedReportEnvelopeType', 'signedreportenvelopetype.html'];
fr[1151]=['customerEnvelopeData', 'customerenvelopedata1.html'];
fr[1152]=['envelopeData', 'envelopedata1.html'];
fr[1153]=['envelopeHash', 'envelopehash1.html'];
fr[1154]=['envelopeSignature', 'envelopesignature1.html'];
fr[1155]=['envelopeVersion', 'envelopeversion1.html'];
fr[1156]=['SimpleAddressType', 'simpleaddresstype1.html'];
fr[1157]=['additionalAddressDetail', 'additionaladdressdetail1.html'];
fr[1158]=['city', 'city3.html'];
fr[1159]=['countryCode', 'countrycode3.html'];
fr[1160]=['postalCode', 'postalcode3.html'];
fr[1161]=['region', 'region3.html'];
fr[1162]=['TaxNumberType', 'taxnumbertype1.html'];
fr[1163]=['countyCode', 'countycode1.html'];
fr[1164]=['taxpayerId', 'taxpayerid2.html'];
fr[1165]=['vatCode', 'vatcode1.html'];
fr[1166]=['TaxPayerType', 'taxpayertype.html'];
fr[1167]=['groupIdentificationNumber', 'groupidentificationnumber.html'];
fr[1168]=['taxNumber', 'taxnumber4.html'];
fr[1169]=['taxPayerName', 'taxpayername2.html'];
fr[1170]=['taxPayerShortName', 'taxpayershortname2.html'];
fr[1171]=['APNumberType', 'apnumbertype.html'];
fr[1172]=['AtomicCsrType', 'atomiccsrtype.html'];
fr[1173]=['CancellationReasonType', 'cancellationreasontype.html'];
fr[1174]=['CashPaymentTitleType', 'cashpaymenttitletype.html'];
fr[1175]=['CollectorCodeType', 'collectorcodetype.html'];
fr[1176]=['CustomerAppEventCodeType', 'customerappeventcodetype.html'];
fr[1177]=['CustomerVatStatusType', 'customervatstatustype1.html'];
fr[1178]=['DataNameType', 'datanametype1.html'];
fr[1179]=['Digit4Type', 'digit4type.html'];
fr[1180]=['DocumentCategoryType', 'documentcategorytype.html'];
fr[1181]=['DocumentClassType', 'documentclasstype.html'];
fr[1182]=['DocumentDateType', 'documentdatetype.html'];
fr[1183]=['DocumentNumberType', 'documentnumbertype.html'];
fr[1184]=['DocumentOperationType', 'documentoperationtype.html'];
fr[1185]=['DocumentUnboundedIndexType', 'documentunboundedindextype.html'];
fr[1186]=['EANType', 'eantype.html'];
fr[1187]=['EncryptedSymmetricInitialVectorType', 'encryptedsymmetricinitialvectortype.html'];
fr[1188]=['EncryptedSymmetricKeyType', 'encryptedsymmetrickeytype.html'];
fr[1189]=['ExchangeRateType', 'exchangeratetype1.html'];
fr[1190]=['File512kBinaryType', 'file512kbinarytype.html'];
fr[1191]=['FileExtensionType', 'fileextensiontype.html'];
fr[1192]=['ItemNatureType', 'itemnaturetype.html'];
fr[1193]=['LineNumberType', 'linenumbertype1.html'];
fr[1194]=['ModificationReasonType', 'modificationreasontype.html'];
fr[1195]=['MonetaryType', 'monetarytype1.html'];
fr[1196]=['NtcaControlCodeType', 'ntcacontrolcodetype.html'];
fr[1197]=['PaymentMethodType', 'paymentmethodtype1.html'];
fr[1198]=['ProcessIdentifierType', 'processidentifiertype.html'];
fr[1199]=['ReportClassType', 'reportclasstype.html'];
fr[1200]=['reportMessage.xsd', 'reportmessage_xsd.html'];
fr[1201]=['CashFlowReportType', 'cashflowreporttype.html'];
fr[1202]=['balanceChange', 'balancechange2.html'];
fr[1203]=['changeAmount', 'changeamount.html'];
fr[1204]=['paymentTitleCode', 'paymenttitlecode.html'];
fr[1205]=['reportHeader', 'reportheader.html'];
fr[1206]=['reportNumber', 'reportnumber.html'];
fr[1207]=['roundingDifferenceAmount', 'roundingdifferenceamount.html'];
fr[1208]=['CashRegisterOpenBalanceReportType', 'cashregisteropenbalancereporttype.html'];
fr[1209]=['openBalance', 'openbalance.html'];
fr[1210]=['reportHeader', 'reportheader1.html'];
fr[1211]=['reportNumber', 'reportnumber1.html'];
fr[1212]=['taxationDay', 'taxationday.html'];
fr[1213]=['CashRegisterReportType', 'cashregisterreporttype.html'];
fr[1214]=['balanceAmountNoRounding', 'balanceamountnorounding.html'];
fr[1215]=['balanceAmountWidthRounding', 'balanceamountwidthrounding.html'];
fr[1216]=['balanceChange', 'balancechange3.html'];
fr[1217]=['balanceChangeSum', 'balancechangesum.html'];
fr[1218]=['dailyCancelledInvoice', 'dailycancelledinvoice.html'];
fr[1219]=['dailyCancelledReceipt', 'dailycancelledreceipt.html'];
fr[1220]=['dailyModificationInvoice', 'dailymodificationinvoice.html'];
fr[1221]=['dailyModificationReceipt', 'dailymodificationreceipt.html'];
fr[1222]=['dailyModificationSum', 'dailymodificationsum.html'];
fr[1223]=['dailyPaymentOther', 'dailypaymentother.html'];
fr[1224]=['dailyPaymentSum', 'dailypaymentsum.html'];
fr[1225]=['dailyRevenueInvoice', 'dailyrevenueinvoice.html'];
fr[1226]=['dailyRevenueOther', 'dailyrevenueother.html'];
fr[1227]=['dailyRevenueReceipt', 'dailyrevenuereceipt.html'];
fr[1228]=['dailyRevenueSum', 'dailyrevenuesum.html'];
fr[1229]=['dailyTipAmount', 'dailytipamount.html'];
fr[1230]=['fuelCardCancellations', 'fuelcardcancellations.html'];
fr[1231]=['fuelCardModifications', 'fuelcardmodifications.html'];
fr[1232]=['fuelCardSales', 'fuelcardsales.html'];
fr[1233]=['fuelCardTransactionSum', 'fuelcardtransactionsum.html'];
fr[1234]=['healthFundCancellations', 'healthfundcancellations.html'];
fr[1235]=['healthFundModifications', 'healthfundmodifications.html'];
fr[1236]=['healthFundSales', 'healthfundsales.html'];
fr[1237]=['healthFundTransactionSum', 'healthfundtransactionsum.html'];
fr[1238]=['reportHeader', 'reportheader2.html'];
fr[1239]=['reportNumber', 'reportnumber2.html'];
fr[1240]=['roundingAmountSum', 'roundingamountsum.html'];
fr[1241]=['CoreReportType', 'corereporttype.html'];
fr[1242]=['CashFlowReport', 'cashflowreport.html'];
fr[1243]=['CashRegisterOpenBalanceReport', 'cashregisteropenbalancereport.html'];
fr[1244]=['CashRegisterReport', 'cashregisterreport.html'];
fr[1245]=['DailyCashFlowReport', 'dailycashflowreport.html'];
fr[1246]=['OtherReport', 'otherreport.html'];
fr[1247]=['CustomerReportType', 'customerreporttype.html'];
fr[1248]=['decryptKey', 'decryptkey1.html'];
fr[1249]=['reportAdditional', 'reportadditional.html'];
fr[1250]=['DailyCashFlowReportType', 'dailycashflowreporttype.html'];
fr[1251]=['closureCounter', 'closurecounter.html'];
fr[1252]=['dailyInvoice', 'dailyinvoice.html'];
fr[1253]=['dailyInvoiceCancellation', 'dailyinvoicecancellation.html'];
fr[1254]=['dailyInvoiceModification', 'dailyinvoicemodification.html'];
fr[1255]=['dailyReceipt', 'dailyreceipt.html'];
fr[1256]=['dailyReceiptCancellation', 'dailyreceiptcancellation.html'];
fr[1257]=['dailyReceiptModification', 'dailyreceiptmodification.html'];
fr[1258]=['dailySimplifiedInvoice', 'dailysimplifiedinvoice.html'];
fr[1259]=['dailySimplifiedInvoiceCancellation', 'dailysimplifiedinvoicecancellation.html'];
fr[1260]=['dailySimplifiedInvoiceModification', 'dailysimplifiedinvoicemodification.html'];
fr[1261]=['reportHeader', 'reportheader3.html'];
fr[1262]=['reportNumber', 'reportnumber3.html'];
fr[1263]=['sumCommerceAmount', 'sumcommerceamount.html'];
fr[1264]=['OtherReportDataListType', 'otherreportdatalisttype.html'];
fr[1265]=['otherReportData', 'otherreportdata.html'];
fr[1266]=['OtherReportDataType', 'otherreportdatatype.html'];
fr[1267]=['otherDocumentDataName', 'otherdocumentdataname.html'];
fr[1268]=['otherDocumentDataValue', 'otherdocumentdatavalue.html'];
fr[1269]=['OtherReportType', 'otherreporttype.html'];
fr[1270]=['otherDocument', 'otherdocument.html'];
fr[1271]=['otherDocumentDescription', 'otherdocumentdescription.html'];
fr[1272]=['otherReportDataList', 'otherreportdatalist.html'];
fr[1273]=['reportHeader', 'reportheader4.html'];
fr[1274]=['reportNumber', 'reportnumber4.html'];
fr[1275]=['CoreReport', 'corereport.html'];
fr[1276]=['CustomerReport', 'customerreport.html'];    
 return fr;          
}

function CreateWordIndex()
{
var w=[
            
['true',[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439,440,441,442,443,444,445,446,447,448,449,450,451,452,453,454,455,456,457,458,459,460,461,462,463,464,465,466,467,468,469,470,471,472,473,474,475,476,477,478,479,480,481,482,483,484,485,486,487,488,489,490,491,492,493,494,495,496,497,498,499,500,501,502,503,504,505,506,507,508,509,510,511,512,513,514,515,516,517,518,519,520,521,522,523,524,525,526,527,528,529,530,531,532,533,534,535,536,537,538,539,540,541,542,543,544,545,546,547,548,549,550,551,552,553,554,555,556,557,558,559,560,561,562,563,564,565,566,567,568,569,570,571,572,573,574,575,576,577,578,579,580,581,582,583,584,585,586,587,588,589,590,591,592,593,594,595,596,597,598,599,600,601,602,603,604,605,606,607,608,609,610,611,612,613,614,615,616,617,618,619,620,621,622,623,624,625,626,627,628,629,630,631,632,633,634,635,636,637,638,639,640,641,642,643,644,645,646,647,648,649,650,651,652,653,654,655,656,657,658,659,660,661,662,663,664,665,666,667,668,669,670,671,672,673,674,675,676,677,678,679,680,681,682,683,684,685,686,687,688,689,690,691,692,693,694,695,696,697,698,699,700,701,702,703,704,705,706,707,708,709,710,711,712,713,714,715,716,717,718,719,720,721,722,723,724,725,726,727,728,729,730,731,732,733,734,735,736,737,738,739,740,741,742,743,744,745,746,747,748,749,750,751,752,753,754,755,756,757,758,759,760,761,762,763,764,765,766,767,768,769,770,771,772,773,774,775,776,777,778,779,780,781,782,783,784,785,786,787,788,789,790,791,792,793,794,795,796,797,798,799,800,801,802,803,804,805,806,807,808,809,810,811,812,813,814,815,816,817,818,819,820,821,822,823,824,825,826,827,828,829,830,831,832,833,834,835,836,837,838,839,840,841,842,843,844,845,846,847,848,849,850,851,852,853,854,855,856,857,858,859,860,861,862,863,864,865,866,867,868,869,870,871,872,873,874,875,876,877,878,879,880,881,882,883,884,885,886,887,888,889,890,891,892,893,894,895,896,897,898,899,900,901,902,903,904,905,906,907,908,909,910,911,912,913,914,915,916,917,918,919,920,921,922,923,924,925,926,927,928,929,930,931,932,933,934,935,936,937,938,939,940,941,942,943,944,945,946,947,948,949,950,951,952,953,954,955,956,957,958,959,960,961,962,963,964,965,966,967,968,969,970,971,972,973,974,975,976,977,978,979,980,981,982,983,984,985,986,987,988,989,990,991,992,993,994,995,996,997,998,999,1000,1001,1002,1003,1004,1005,1006,1007,1008,1009,1010,1011,1012,1013,1014,1015,1016,1017,1018,1019,1020,1021,1022,1023,1024,1025,1026,1027,1028,1029,1030,1031,1032,1033,1034,1035,1036,1037,1038,1039,1040,1041,1042,1043,1044,1045,1046,1047,1048,1049,1050,1051,1052,1053,1054,1055,1056,1057,1058,1059,1060,1061,1062,1063,1064,1065,1066,1067,1068,1069,1070,1071,1072,1073,1074,1075,1076,1077,1078,1079,1080,1081,1082,1083,1084,1085,1086,1087,1088,1089,1090,1091,1092,1093,1094,1095,1096,1097,1098,1099,1100,1101,1102,1103,1104,1105,1106,1107,1108,1109,1110,1111,1112,1113,1114,1115,1116,1117,1118,1119,1120,1121,1122,1123,1124,1125,1126,1127,1128,1129,1130,1131,1132,1133,1134,1135,1136,1137,1138,1139,1140,1141,1142,1143,1144,1145,1146,1147,1148,1149,1150,1151,1152,1153,1154,1155,1156,1157,1158,1159,1160,1161,1162,1163,1164,1165,1166,1167,1168,1169,1170,1171,1172,1173,1174,1175,1176,1177,1178,1179,1180,1181,1182,1183,1184,1185,1186,1187,1188,1189,1190,1191,1192,1193,1194,1195,1196,1197,1198,1199,1200,1201,1202,1203,1204,1205,1206,1207,1208,1209,1210,1211,1212,1213,1214,1215,1216,1217,1218,1219,1220,1221,1222,1223,1224,1225,1226,1227,1228,1229,1230,1231,1232,1233,1234,1235,1236,1237,1238,1239,1240,1241,1242,1243,1244,1245,1246,1247,1248,1249,1250,1251,1252,1253,1254,1255,1256,1257,1258,1259,1260,1261,1262,1263,1264,1265,1266,1267,1268,1269,1270,1271,1272,1273,1274,1275,1276]],
['version',[11,35,36,37,39,121,327,333,398,406,442,750,764,766,789,791,799,813,816,819,825,826,829,832,854,862,914,1013,1026,1144,1149,1150,1155,1200]],
['27--',[11,1013,1200]],
['--created',[11,750,1200]],
['with',[11,35,36,38,121,196,198,227,231,393,442,505,506,507,528,529,583,584,586,587,588,648,650,662,704,705,733,750,756,758,808,810,821,823,854,859,879,881,882,883,900,902,914,944,947,992,995,1013,1019,1020,1021,1022,1200,1213,1215,1250,1251]],
['liquid',[11,750,1200]],
['studio',[11,750,1200]],
['https',[11,750,913,1200]],
['liquid-technologies',[11,750,1200]],
['schema',[11,35,121,406,442,733,750,789,799,914,1013,1026,1200]],
['xmlns',[11,35,121,406,442,750,914,1013,1026,1200]],
['base',[11,12,13,14,15,16,17,18,34,35,52,54,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,125,126,128,131,132,137,139,141,142,143,145,149,151,158,159,160,161,162,163,164,171,172,174,196,197,203,204,205,206,207,208,209,210,213,214,215,217,218,224,225,227,228,235,237,245,246,247,250,253,260,261,262,263,264,272,273,276,280,283,285,287,289,291,295,297,299,303,307,309,312,321,323,324,326,336,337,341,343,348,350,351,356,357,360,362,364,365,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,433,434,435,436,437,438,439,440,441,442,450,453,454,455,461,462,489,490,495,496,508,510,511,513,516,519,520,523,528,530,533,539,540,541,542,543,544,545,546,559,560,576,577,578,580,581,582,583,584,586,587,588,592,601,608,621,622,623,626,632,636,637,639,641,651,652,656,657,659,662,663,664,667,668,676,677,678,679,680,681,682,683,685,686,687,695,698,700,703,704,707,708,709,710,711,712,713,716,722,723,724,733,734,735,736,737,738,739,740,741,742,743,744,745,746,747,748,749,750,751,752,753,756,758,759,760,762,763,768,770,777,778,781,785,789,791,794,795,799,801,802,803,813,814,815,816,817,818,819,820,825,826,827,829,830,831,832,833,834,836,837,865,866,870,872,879,880,882,889,890,891,892,893,894,895,896,897,898,899,900,901,902,903,904,905,906,907,908,909,910,911,912,913,914,915,917,918,920,921,924,925,926,927,928,929,930,932,933,934,935,936,937,944,945,946,950,952,953,955,956,957,958,959,962,963,964,965,969,976,977,985,986,988,989,990,991,992,993,994,996,997,1000,1003,1005,1008,1009,1010,1011,1012,1013,1019,1020,1021,1022,1024,1025,1026,1044,1046,1062,1097,1098,1102,1103,1104,1105,1106,1108,1109,1110,1111,1125,1126,1141,1166,1171,1172,1173,1174,1175,1176,1177,1178,1179,1180,1181,1182,1183,1184,1185,1186,1187,1188,1189,1190,1191,1192,1193,1194,1195,1196,1197,1198,1199,1200,1201,1202,1204,1205,1206,1208,1209,1210,1211,1213,1216,1238,1239,1247,1249,1250,1251,1252,1253,1254,1255,1256,1257,1258,1259,1260,1261,1262,1269,1273,1274,1275,1276]],
['http',[11,35,121,406,442,750,899,914,1013,1026,1200]],
['schemas',[11,35,121,406,442,750,914,1013,1026,1200]],
['ereceipt',[11,750,914,1013,1026,1044,1046,1200]],
['reportmessage',[11,1200]],
['export',[11,12,28,30,32,34]],
['invoicedata',[11,121,187,191,234,235,238,290,442,733,914,953,954,1013,1018]],
['data',[11,35,36,38,39,41,42,43,44,45,46,47,64,121,122,129,131,137,140,141,147,149,150,151,152,153,155,164,165,171,179,180,181,182,187,188,191,196,198,219,223,224,235,238,245,256,257,263,268,269,272,278,289,290,299,300,301,309,310,311,327,336,337,341,343,356,359,362,368,404,406,410,423,424,442,443,444,445,446,447,449,450,454,461,463,466,489,493,497,508,513,519,528,529,533,534,536,551,552,553,555,556,557,558,559,563,564,565,566,567,568,571,572,573,574,576,580,583,586,589,591,592,593,594,595,596,597,598,600,604,606,609,621,626,628,629,636,648,650,651,657,658,660,662,671,673,674,675,676,689,692,695,704,707,710,722,725,729,733,735,737,748,750,764,768,770,771,776,789,796,825,828,833,837,840,847,854,865,866,870,872,886,887,914,915,919,924,925,928,930,931,933,934,939,940,941,942,943,953,954,955,956,962,963,966,976,977,978,985,986,987,992,996,999,1000,1013,1014,1016,1018,1019,1021,1023,1024,1025,1026,1027,1028,1029,1030,1031,1032,1033,1034,1035,1036,1044,1046,1056,1060,1064,1068,1069,1070,1075,1088,1089,1090,1093,1112,1116,1119,1133,1134,1140,1141,1144,1145,1146,1150,1151,1152,1156,1157,1166,1173,1178,1189,1200,1201,1205,1208,1210,1213,1238,1241,1247,1248,1250,1252,1253,1254,1255,1256,1257,1258,1259,1260,1261,1264,1265,1266,1267,1268,1269,1272,1273,1275,1276]],
['documentdata',[11,914,1013,1014,1015,1016,1017,1018]],
['common',[11,12,21,26,27,28,30,31,35,121,122,123,124,130,131,133,141,144,148,149,151,153,154,156,157,164,166,167,168,169,171,173,175,178,183,185,186,187,190,192,193,194,196,199,200,201,202,211,216,220,221,222,223,227,230,231,235,236,245,249,250,252,253,254,256,259,263,265,266,267,272,279,280,282,291,294,297,298,303,305,309,311,327,328,329,330,331,333,334,341,345,346,347,352,353,354,356,359,360,361,362,363,370,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,440,441,442,443,444,446,450,452,464,465,482,483,484,485,489,491,492,497,498,500,501,502,503,504,505,506,507,508,512,513,514,519,521,522,524,525,526,527,528,531,532,533,537,556,559,562,569,570,592,603,618,624,625,626,630,631,633,634,635,636,638,640,644,645,665,666,669,670,693,694,695,696,697,701,702,704,705,734,735,736,738,739,740,741,742,743,744,745,746,747,748,749,750,764,766,801,804,805,821,823,833,835,838,839,840,841,842,843,844,845,846,849,850,851,854,855,856,857,858,859,861,862,863,870,874,875,876,886,888,900,904,910,912,914,915,916,922,923,934,938,944,948,949,962,967,973,981,982,1000,1001,1002,1006,1007,1009,1010,1011,1012,1026,1027,1028,1030,1044,1046,1056,1058,1059,1064,1065,1067,1075,1076,1077,1078,1079,1080,1081,1082,1083,1084,1085,1086,1087,1097,1099,1102,1103,1104,1105,1106,1108,1109,1110,1111,1119,1123,1124,1133,1136,1141,1142,1143,1144,1147,1149,1150,1153,1155,1156,1157,1158,1159,1160,1161,1162,1163,1164,1165,1166,1169,1170,1173,1174,1177,1178,1184,1194,1195,1197,1200,1266,1267,1268,1269,1270,1271]],
['ntca',[11,35,121,404,406,442,750,914,944,950,996,997,1013,1014,1024,1026,1133,1137,1196,1200]],
['attributeformdefault',[11,35,121,406,442,750,914,1013,1026,1200]],
['unqualified',[11,35,121,406,442,750,914,1013,1026,1200]],
['elementformdefault',[11,35,121,406,442,750,914,1013,1026,1200]],
['qualified',[11,35,121,406,442,750,914,1013,1026,1200]],
['targetnamespace',[11,35,121,406,442,750,914,1013,1026,1200]],
['xmlschema',[11,35,121,406,442,750,914,1013,1026,1200]],
['import',[11,121,406,442,750,914,1013,1026,1200]],
['schemalocation',[11,121,406,442,750,914,1013,1026,1200]],
['namespace',[11,121,406,442,750,914,1013,1026,1200]],
['ereceiptbase',[11,750,914,1013,1200]],
['complextype',[11,12,28,34,35,36,41,44,47,52,54,55,57,60,64,70,71,121,122,131,135,137,141,149,151,153,158,161,164,167,171,179,183,187,192,196,224,227,232,235,240,245,250,253,256,260,263,268,272,280,283,285,287,289,291,295,297,299,303,307,309,312,314,321,324,327,336,339,341,348,352,356,360,362,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,406,407,410,423,429,442,443,447,450,454,457,461,464,466,482,484,486,489,495,497,501,503,505,508,513,517,519,524,526,528,533,551,556,559,563,569,571,576,580,583,586,589,592,621,624,626,634,636,642,644,648,651,657,662,665,667,669,671,676,679,685,689,693,695,704,707,710,713,722,725,729,733,750,751,754,756,764,768,771,777,781,789,801,806,808,813,821,825,833,838,840,852,854,865,868,870,877,879,884,886,914,915,924,928,934,939,944,953,956,960,962,976,979,981,985,988,992,996,1000,1013,1014,1019,1024,1025,1026,1027,1031,1033,1035,1038,1041,1044,1046,1049,1051,1056,1062,1064,1068,1070,1075,1088,1093,1097,1102,1106,1112,1119,1125,1128,1130,1133,1141,1144,1150,1156,1162,1166,1200,1201,1208,1213,1241,1247,1250,1264,1266,1269,1275,1276]],
['name',[11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439,440,441,442,443,444,445,446,447,448,449,450,451,452,453,454,455,456,457,458,459,460,461,462,463,464,465,466,467,468,469,470,471,472,473,474,475,476,477,478,479,480,481,482,483,484,485,486,487,488,489,490,491,492,493,494,495,496,497,498,499,500,501,502,503,504,505,506,507,508,509,510,511,512,513,514,515,516,517,518,519,520,521,522,523,524,525,526,527,528,529,530,531,532,533,534,535,536,537,538,539,540,541,542,543,544,545,546,547,548,549,550,551,552,553,554,555,556,557,558,559,560,561,562,563,564,565,566,567,568,569,570,571,572,573,574,575,576,577,578,579,580,581,582,583,584,585,586,587,588,589,590,591,592,593,594,595,596,597,598,599,600,601,602,603,604,605,606,607,608,609,610,611,612,613,614,615,616,617,618,619,620,621,622,623,624,625,626,627,628,629,630,631,632,633,634,635,636,637,638,639,640,641,642,643,644,645,646,647,648,649,650,651,652,653,654,655,656,657,658,659,660,661,662,663,664,665,666,667,668,669,670,671,672,673,674,675,676,677,678,679,680,681,682,683,684,685,686,687,688,689,690,691,692,693,694,695,696,697,698,699,700,701,702,703,704,705,706,707,708,709,710,711,712,713,714,715,716,717,718,719,720,721,722,723,724,725,726,727,728,729,730,731,732,733,734,735,736,737,738,739,740,741,742,743,744,745,746,747,748,749,750,751,752,753,754,755,756,757,758,759,760,761,762,763,764,765,766,767,768,769,770,771,772,773,774,775,776,777,778,779,780,781,782,783,784,785,786,787,788,789,790,791,792,793,794,795,796,797,798,799,800,801,802,803,804,805,806,807,808,809,810,811,812,813,814,815,816,817,818,819,820,821,822,823,824,825,826,827,828,829,830,831,832,833,834,835,836,837,838,839,840,841,842,843,844,845,846,847,848,849,850,851,852,853,854,855,856,857,858,859,860,861,862,863,864,865,866,867,868,869,870,871,872,873,874,875,876,877,878,879,880,881,882,883,884,885,886,887,888,889,890,891,892,893,894,895,896,897,898,899,900,901,902,903,904,905,906,907,908,909,910,911,912,913,914,915,916,917,918,919,920,921,922,923,924,925,926,927,928,929,930,931,932,933,934,935,936,937,938,939,940,941,942,943,944,945,946,947,948,949,950,951,952,953,954,955,956,957,958,959,960,961,962,963,964,965,966,967,968,969,970,971,972,973,974,975,976,977,978,979,980,981,982,983,984,985,986,987,988,989,990,991,992,993,994,995,996,997,998,999,1000,1001,1002,1003,1004,1005,1006,1007,1008,1009,1010,1011,1012,1013,1014,1015,1016,1017,1018,1019,1020,1021,1022,1023,1024,1025,1026,1027,1028,1029,1030,1031,1032,1033,1034,1035,1036,1037,1038,1039,1040,1041,1042,1043,1044,1045,1046,1047,1048,1049,1050,1051,1052,1053,1054,1055,1056,1057,1058,1059,1060,1061,1062,1063,1064,1065,1066,1067,1068,1069,1070,1071,1072,1073,1074,1075,1076,1077,1078,1079,1080,1081,1082,1083,1084,1085,1086,1087,1088,1089,1090,1091,1092,1093,1094,1095,1096,1097,1098,1099,1100,1101,1102,1103,1104,1105,1106,1107,1108,1109,1110,1111,1112,1113,1114,1115,1116,1117,1118,1119,1120,1121,1122,1123,1124,1125,1126,1127,1128,1129,1130,1131,1132,1133,1134,1135,1136,1137,1138,1139,1140,1141,1142,1143,1144,1145,1146,1147,1148,1149,1150,1151,1152,1153,1154,1155,1156,1157,1158,1159,1160,1161,1162,1163,1164,1165,1166,1167,1168,1169,1170,1171,1172,1173,1174,1175,1176,1177,1178,1179,1180,1181,1182,1183,1184,1185,1186,1187,1188,1189,1190,1191,1192,1193,1194,1195,1196,1197,1198,1199,1200,1201,1202,1203,1204,1205,1206,1207,1208,1209,1210,1211,1212,1213,1214,1215,1216,1217,1218,1219,1220,1221,1222,1223,1224,1225,1226,1227,1228,1229,1230,1231,1232,1233,1234,1235,1236,1237,1238,1239,1240,1241,1242,1243,1244,1245,1246,1247,1248,1249,1250,1251,1252,1253,1254,1255,1256,1257,1258,1259,1260,1261,1262,1263,1264,1265,1266,1267,1268,1269,1270,1271,1272,1273,1274,1275,1276]],
['exportdatatype',[11,12,28,29]],
['annotation',[11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439,440,441,442,443,444,445,446,447,448,449,450,451,452,453,454,455,456,457,458,459,460,461,462,463,464,465,466,467,468,469,470,471,472,473,474,475,476,477,478,479,480,481,482,483,484,485,486,487,488,489,490,491,492,493,494,495,496,497,498,499,500,501,502,503,504,505,506,507,508,509,510,511,512,513,514,515,516,517,518,519,520,521,522,523,524,525,526,527,528,529,530,531,532,533,534,535,536,537,538,539,540,541,542,543,544,545,546,547,548,549,550,551,552,553,554,555,556,557,558,559,560,561,562,563,564,565,566,567,568,569,570,571,572,573,574,575,576,577,578,579,580,581,582,583,584,585,586,587,588,589,590,591,592,593,594,595,596,597,598,599,600,601,602,603,604,605,606,607,608,609,610,611,612,613,614,615,616,617,618,619,620,621,622,623,624,625,626,627,628,629,630,631,632,633,634,635,636,637,638,639,640,641,642,643,644,645,646,647,648,649,650,651,652,653,654,655,656,657,658,659,660,661,662,663,664,665,666,667,668,669,670,671,672,673,674,675,676,677,678,679,680,681,682,683,684,685,686,687,688,689,690,691,692,693,694,695,696,697,698,699,700,701,702,703,704,705,706,707,708,709,710,711,712,713,714,715,716,717,718,719,720,721,722,723,724,725,726,727,728,729,730,731,732,733,734,735,736,737,738,739,740,741,742,743,744,745,746,747,748,749,750,751,752,753,754,755,756,757,758,759,760,761,762,763,764,765,766,767,768,769,770,771,772,773,774,775,776,777,778,779,780,781,782,783,784,785,786,787,788,789,790,791,792,793,794,795,796,797,798,799,800,801,802,803,804,805,806,807,808,809,810,811,812,813,814,815,816,817,818,819,820,821,822,823,824,825,826,827,828,829,830,831,832,833,834,835,836,837,838,839,840,841,842,843,844,845,846,847,848,849,850,851,852,853,854,855,856,857,858,859,860,861,862,863,864,865,866,867,868,869,870,871,872,873,874,875,876,877,878,879,880,881,882,883,884,885,886,887,888,889,890,891,892,893,894,895,896,897,898,899,900,901,902,903,904,905,906,907,908,909,910,911,912,913,914,915,916,917,918,919,920,921,922,923,924,925,926,927,928,929,930,931,932,933,934,935,936,937,938,939,940,941,942,943,944,945,946,947,948,949,950,951,952,953,954,955,956,957,958,959,960,961,962,963,964,965,966,967,968,969,970,971,972,973,974,975,976,977,978,979,980,981,982,983,984,985,986,987,988,989,990,991,992,993,994,995,996,997,998,999,1000,1001,1002,1003,1004,1005,1006,1007,1008,1009,1010,1011,1012,1013,1014,1015,1016,1017,1018,1019,1020,1021,1022,1023,1024,1025,1026,1027,1028,1029,1030,1031,1032,1033,1034,1035,1036,1037,1038,1039,1040,1041,1042,1043,1044,1045,1046,1047,1048,1049,1050,1051,1052,1053,1054,1055,1056,1057,1058,1059,1060,1061,1062,1063,1064,1065,1066,1067,1068,1069,1070,1071,1072,1073,1074,1075,1076,1077,1078,1079,1080,1081,1082,1083,1084,1085,1086,1087,1088,1089,1090,1091,1092,1093,1094,1095,1096,1097,1098,1099,1100,1101,1102,1103,1104,1105,1106,1107,1108,1109,1110,1111,1112,1113,1114,1115,1116,1117,1118,1119,1120,1121,1122,1123,1124,1125,1126,1127,1128,1129,1130,1131,1132,1133,1134,1135,1136,1137,1138,1139,1140,1141,1142,1143,1144,1145,1146,1147,1148,1149,1150,1151,1152,1153,1154,1155,1156,1157,1158,1159,1160,1161,1162,1163,1164,1165,1166,1167,1168,1169,1170,1171,1172,1173,1174,1175,1176,1177,1178,1179,1180,1181,1182,1183,1184,1185,1186,1187,1188,1189,1190,1191,1192,1193,1194,1195,1196,1197,1198,1199,1200,1201,1202,1203,1204,1205,1206,1207,1208,1209,1210,1211,1212,1213,1214,1215,1216,1217,1218,1219,1220,1221,1222,1223,1224,1225,1226,1227,1228,1229,1230,1231,1232,1233,1234,1235,1236,1237,1238,1239,1240,1241,1242,1243,1244,1245,1246,1247,1248,1249,1250,1251,1252,1253,1254,1255,1256,1257,1258,1259,1260,1261,1262,1263,1264,1265,1266,1267,1268,1269,1270,1271,1272,1273,1274,1275,1276]],
['documentation',[11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439,440,441,442,443,444,445,446,447,448,449,450,451,452,453,454,455,456,457,458,459,460,461,462,463,464,465,466,467,468,469,470,471,472,473,474,475,476,477,478,479,480,481,482,483,484,485,486,487,488,489,490,491,492,493,494,495,496,497,498,499,500,501,502,503,504,505,506,507,508,509,510,511,512,513,514,515,516,517,518,519,520,521,522,523,524,525,526,527,528,529,530,531,532,533,534,535,536,537,538,539,540,541,542,543,544,545,546,547,548,549,550,551,552,553,554,555,556,557,558,559,560,561,562,563,564,565,566,567,568,569,570,571,572,573,574,575,576,577,578,579,580,581,582,583,584,585,586,587,588,589,590,591,592,593,594,595,596,597,598,599,600,601,602,603,604,605,606,607,608,609,610,611,612,613,614,615,616,617,618,619,620,621,622,623,624,625,626,627,628,629,630,631,632,633,634,635,636,637,638,639,640,641,642,643,644,645,646,647,648,649,650,651,652,653,654,655,656,657,658,659,660,661,662,663,664,665,666,667,668,669,670,671,672,673,674,675,676,677,678,679,680,681,682,683,684,685,686,687,688,689,690,691,692,693,694,695,696,697,698,699,700,701,702,703,704,705,706,707,708,709,710,711,712,713,714,715,716,717,718,719,720,721,722,723,724,725,726,727,728,729,730,731,732,733,734,735,736,737,738,739,740,741,742,743,744,745,746,747,748,749,750,751,752,753,754,755,756,757,758,759,760,761,762,763,764,765,766,767,768,769,770,771,772,773,774,775,776,777,778,779,780,781,782,783,784,785,786,787,788,789,790,791,792,793,794,795,796,797,798,799,800,801,802,803,804,805,806,807,808,809,810,811,812,813,814,815,816,817,818,819,820,821,822,823,824,825,826,827,828,829,830,831,832,833,834,835,836,837,838,839,840,841,842,843,844,845,846,847,848,849,850,851,852,853,854,855,856,857,858,859,860,861,862,863,864,865,866,867,868,869,870,871,872,873,874,875,876,877,878,879,880,881,882,883,884,885,886,887,888,889,890,891,892,893,894,895,896,897,898,899,900,901,902,903,904,905,906,907,908,909,910,911,912,913,914,915,916,917,918,919,920,921,922,923,924,925,926,927,928,929,930,931,932,933,934,935,936,937,938,939,940,941,942,943,944,945,946,947,948,949,950,951,952,953,954,955,956,957,958,959,960,961,962,963,964,965,966,967,968,969,970,971,972,973,974,975,976,977,978,979,980,981,982,983,984,985,986,987,988,989,990,991,992,993,994,995,996,997,998,999,1000,1001,1002,1003,1004,1005,1006,1007,1008,1009,1010,1011,1012,1013,1014,1015,1016,1017,1018,1019,1020,1021,1022,1023,1024,1025,1026,1027,1028,1029,1030,1031,1032,1033,1034,1035,1036,1037,1038,1039,1040,1041,1042,1043,1044,1045,1046,1047,1048,1049,1050,1051,1052,1053,1054,1055,1056,1057,1058,1059,1060,1061,1062,1063,1064,1065,1066,1067,1068,1069,1070,1071,1072,1073,1074,1075,1076,1077,1078,1079,1080,1081,1082,1083,1084,1085,1086,1087,1088,1089,1090,1091,1092,1093,1094,1095,1096,1097,1098,1099,1100,1101,1102,1103,1104,1105,1106,1107,1108,1109,1110,1111,1112,1113,1114,1115,1116,1117,1118,1119,1120,1121,1122,1123,1124,1125,1126,1127,1128,1129,1130,1131,1132,1133,1134,1135,1136,1137,1138,1139,1140,1141,1142,1143,1144,1145,1146,1147,1148,1149,1150,1151,1152,1153,1154,1155,1156,1157,1158,1159,1160,1161,1162,1163,1164,1165,1166,1167,1168,1169,1170,1171,1172,1173,1174,1175,1176,1177,1178,1179,1180,1181,1182,1183,1184,1185,1186,1187,1188,1189,1190,1191,1192,1193,1194,1195,1196,1197,1198,1199,1200,1201,1202,1203,1204,1205,1206,1207,1208,1209,1210,1211,1212,1213,1214,1215,1216,1217,1218,1219,1220,1221,1222,1223,1224,1225,1226,1227,1228,1229,1230,1231,1232,1233,1234,1235,1236,1237,1238,1239,1240,1241,1242,1243,1244,1245,1246,1247,1248,1249,1250,1251,1252,1253,1254,1255,1256,1257,1258,1259,1260,1261,1262,1263,1264,1265,1266,1267,1268,1269,1270,1271,1272,1273,1274,1275,1276]],
['elem',[11,12,121,167,170,179]],
['típus',[11,12,19,28,35,52,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,94,95,96,100,101,102,104,105,106,107,108,109,110,111,112,113,114,115,116,117,119,121,164,171,176,196,212,336,338,339,341,342,344,356,358,393,396,397,399,400,405,406,407,429,433,435,436,437,438,439,440,442,443,454,528,531,556,592,626,630,644,733,736,737,740,741,742,743,744,745,746,747,748,749,750,751,754,756,764,771,781,801,806,808,825,831,833,838,852,854,865,867,868,870,871,873,877,879,884,885,889,890,891,892,893,895,897,900,901,904,906,907,908,910,911,912,914,924,925,928,934,939,953,956,960,962,976,979,981,985,988,992,996,1009,1010,1011,1012,1013,1014,1019,1026,1027,1033,1035,1038,1041,1043,1044,1046,1049,1051,1056,1062,1064,1068,1070,1088,1097,1102,1106,1119,1125,1128,1130,1141,1162,1166,1171,1172,1173,1174,1175,1176,1179,1181,1182,1183,1184,1185,1186,1187,1188,1189,1190,1191,1192,1193,1194,1195,1196,1197,1199,1200,1201,1208,1213,1241,1247,1250,1269,1271]],
['sequence',[11,12,28,35,36,41,44,47,55,57,60,64,121,122,131,135,137,139,141,142,143,149,151,153,158,161,164,167,171,172,179,183,187,192,196,197,203,215,216,224,227,228,232,235,237,240,245,246,249,250,253,256,259,260,263,265,268,272,273,276,280,283,285,287,289,291,295,297,299,303,307,309,312,314,321,324,327,336,339,341,348,352,356,357,360,362,406,410,423,429,442,443,447,450,454,457,461,462,464,466,482,484,486,489,495,501,503,505,508,513,517,519,524,526,528,533,551,559,560,562,563,569,571,576,580,583,586,589,592,621,624,626,634,636,642,644,651,657,662,665,667,669,671,676,679,685,689,693,695,704,707,710,722,725,729,750,751,754,756,764,768,771,777,781,789,801,806,807,808,810,813,821,824,825,833,838,840,852,854,865,868,870,877,879,884,886,914,915,924,928,934,937,938,939,944,953,956,960,962,976,979,981,985,988,992,996,1000,1013,1014,1019,1026,1027,1031,1033,1035,1041,1044,1046,1049,1051,1056,1062,1068,1070,1075,1088,1093,1097,1102,1106,1112,1119,1125,1128,1130,1133,1141,1144,1150,1156,1162,1166,1200,1201,1208,1213,1247,1250,1264,1266,1269]],
['element',[11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,442,443,444,445,446,447,448,449,450,451,452,453,454,455,456,457,458,459,460,461,462,463,464,465,466,467,468,469,470,471,472,473,474,475,476,477,478,479,480,481,482,483,484,485,486,487,488,489,490,491,492,493,494,495,496,497,498,499,500,501,502,503,504,505,506,507,508,509,510,511,512,513,514,515,516,517,518,519,520,521,522,523,524,525,526,527,528,529,530,531,532,533,534,535,536,537,538,539,540,541,542,543,544,545,546,547,548,549,550,551,552,553,554,555,556,557,558,559,560,561,562,563,564,565,566,567,568,569,570,571,572,573,574,575,576,577,578,579,580,581,582,583,584,585,586,587,588,589,590,591,592,593,594,595,596,597,598,599,600,601,602,603,604,605,606,607,608,609,610,611,612,613,614,615,616,617,618,619,620,621,622,623,624,625,626,627,628,629,630,631,632,633,634,635,636,637,638,639,640,641,642,643,644,645,646,647,648,649,650,651,652,653,654,655,656,657,658,659,660,661,662,663,664,665,666,667,668,669,670,671,672,673,674,675,676,677,678,679,680,681,682,683,684,685,686,687,688,689,690,691,692,693,694,695,696,697,698,699,700,701,702,703,704,705,706,707,708,709,710,711,712,713,714,715,716,717,718,719,720,721,722,723,724,725,726,727,728,729,730,731,732,733,750,751,752,753,754,755,756,757,758,759,760,761,762,763,764,765,766,767,768,769,770,771,772,773,774,775,776,777,778,779,780,781,782,783,784,785,786,787,788,789,790,791,792,793,794,795,796,797,798,799,800,801,802,803,804,805,806,807,808,809,810,811,812,813,814,815,816,817,818,819,820,821,822,823,824,825,826,827,828,829,830,831,832,833,834,835,836,837,838,839,840,841,842,843,844,845,846,847,848,849,850,851,852,853,854,855,856,857,858,859,860,861,862,863,864,865,866,867,868,869,870,871,872,873,874,875,876,877,878,879,880,881,882,883,884,885,886,887,888,914,915,916,917,918,919,920,921,922,923,924,925,926,927,928,929,930,931,932,933,934,935,936,937,938,939,940,941,942,943,944,945,946,947,948,949,950,951,952,953,954,955,956,957,958,959,960,961,962,963,964,965,966,967,968,969,970,971,972,973,974,975,976,977,978,979,980,981,982,983,984,985,986,987,988,989,990,991,992,993,994,995,996,997,998,999,1000,1001,1002,1003,1004,1005,1006,1007,1008,1013,1014,1015,1016,1017,1018,1019,1020,1021,1022,1023,1024,1025,1026,1027,1028,1029,1030,1031,1032,1033,1034,1035,1036,1037,1038,1039,1040,1041,1042,1043,1044,1045,1046,1047,1048,1049,1050,1051,1052,1053,1054,1055,1056,1057,1058,1059,1060,1061,1062,1063,1064,1065,1066,1067,1068,1069,1070,1071,1072,1073,1074,1075,1076,1077,1078,1079,1080,1081,1082,1083,1084,1085,1086,1087,1088,1089,1090,1091,1092,1093,1094,1095,1096,1097,1098,1099,1100,1101,1102,1103,1104,1105,1106,1107,1108,1109,1110,1111,1112,1113,1114,1115,1116,1117,1118,1119,1120,1121,1122,1123,1124,1125,1126,1127,1128,1129,1130,1131,1132,1133,1134,1135,1136,1137,1138,1139,1140,1141,1142,1143,1144,1145,1146,1147,1148,1149,1150,1151,1152,1153,1154,1155,1156,1157,1158,1159,1160,1161,1162,1163,1164,1165,1166,1167,1168,1169,1170,1200,1201,1202,1203,1204,1205,1206,1207,1208,1209,1210,1211,1212,1213,1214,1215,1216,1217,1218,1219,1220,1221,1222,1223,1224,1225,1226,1227,1228,1229,1230,1231,1232,1233,1234,1235,1236,1237,1238,1239,1240,1241,1242,1243,1244,1245,1246,1247,1248,1249,1250,1251,1252,1253,1254,1255,1256,1257,1258,1259,1260,1261,1262,1263,1264,1265,1266,1267,1268,1269,1270,1271,1272,1273,1274,1275,1276]],
['exportcounter',[11,12,20,29]],
['type',[11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,92,94,95,96,100,101,102,104,105,106,107,108,116,117,119,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,393,396,397,399,400,403,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439,440,442,443,444,445,446,447,448,449,450,451,452,453,454,455,456,457,458,459,460,461,462,463,464,465,466,467,468,469,470,471,472,473,474,475,476,477,478,479,480,481,482,483,484,485,486,487,488,489,490,491,492,493,494,495,496,497,498,499,500,501,502,503,504,505,506,507,508,509,510,511,512,513,514,515,516,517,518,519,520,521,522,523,524,525,526,527,528,529,530,531,532,533,534,535,536,537,538,539,540,541,542,543,544,545,546,547,548,549,550,551,552,553,554,555,556,557,558,559,560,561,562,563,564,565,566,567,568,569,570,571,572,573,574,575,576,577,578,579,580,581,582,583,584,585,586,587,588,589,590,591,592,593,594,595,596,597,598,599,600,601,602,603,604,605,606,607,608,609,610,611,612,613,614,615,616,617,618,619,620,621,622,623,624,625,626,627,628,629,630,631,632,633,634,635,636,637,638,639,640,641,642,643,644,645,646,647,648,649,650,651,652,653,654,655,656,657,658,659,660,661,662,663,664,665,666,667,668,669,670,671,672,673,674,675,676,677,678,679,680,681,682,683,684,685,686,687,688,689,690,691,692,693,694,695,696,697,698,699,700,701,702,703,704,705,706,707,708,709,710,711,712,713,714,715,716,717,718,719,720,721,722,723,724,725,726,727,728,729,730,731,732,733,734,735,736,737,739,740,741,742,743,744,746,747,748,749,750,751,754,755,756,757,761,764,765,766,767,768,769,771,772,773,774,775,776,777,779,780,781,782,783,784,786,787,788,789,790,792,793,796,797,798,800,801,804,805,806,807,808,809,810,811,812,813,814,815,816,817,818,819,820,821,822,823,824,825,827,828,830,831,833,834,835,836,837,838,839,840,841,842,843,844,845,846,847,848,849,850,851,852,853,854,855,856,857,858,859,860,861,862,863,864,865,866,867,868,869,870,871,872,873,874,875,876,877,878,879,880,881,883,884,885,886,887,888,889,890,891,892,893,894,895,897,900,901,904,906,907,908,909,910,911,912,914,915,916,917,918,919,920,921,922,923,924,925,926,927,928,929,930,931,932,933,934,935,936,937,938,939,940,941,942,943,944,945,946,947,948,949,950,951,952,953,954,955,956,957,958,959,960,961,962,963,964,965,966,967,968,969,970,971,972,973,974,975,976,977,978,979,980,981,982,983,984,985,986,987,988,989,990,991,992,993,994,995,996,997,998,999,1000,1001,1002,1003,1004,1005,1006,1007,1008,1009,1010,1011,1012,1013,1014,1015,1016,1017,1018,1019,1020,1021,1022,1023,1026,1027,1028,1029,1030,1031,1032,1033,1034,1035,1036,1037,1038,1039,1040,1041,1042,1043,1044,1045,1046,1047,1048,1049,1050,1051,1052,1053,1054,1055,1056,1057,1058,1059,1060,1061,1062,1063,1064,1065,1066,1067,1068,1069,1070,1071,1072,1073,1074,1075,1076,1077,1078,1079,1080,1081,1082,1083,1084,1085,1086,1087,1088,1089,1090,1091,1092,1093,1094,1095,1096,1097,1099,1100,1101,1102,1106,1107,1112,1113,1114,1115,1116,1117,1118,1119,1120,1121,1122,1123,1124,1125,1127,1128,1129,1130,1131,1132,1133,1134,1135,1136,1137,1138,1139,1140,1141,1142,1143,1144,1145,1146,1147,1148,1149,1150,1151,1152,1153,1154,1155,1156,1157,1158,1159,1160,1161,1162,1163,1164,1165,1166,1167,1168,1169,1170,1171,1172,1173,1174,1175,1176,1177,1178,1179,1180,1181,1182,1183,1184,1185,1186,1187,1188,1189,1190,1191,1192,1193,1194,1195,1196,1197,1199,1200,1201,1202,1203,1204,1205,1206,1207,1208,1209,1210,1211,1212,1213,1214,1215,1216,1217,1218,1219,1220,1221,1222,1223,1224,1225,1226,1227,1228,1229,1230,1231,1232,1233,1234,1235,1236,1237,1238,1239,1240,1241,1242,1243,1244,1245,1246,1247,1248,1249,1250,1251,1252,1253,1254,1255,1256,1257,1258,1259,1260,1261,1262,1263,1264,1265,1266,1267,1268,1269,1270,1271,1272,1273,1274]],
['nonnegativeinteger',[11,12,19,20,28,32,33,406,439,750,756,758,759,781,787,788,801,802,821,824,914,944,951,1026,1070,1073,1093,1096,1133,1138,1193,1200,1201,1203,1208,1212,1213,1229,1250,1263]],
['lang',[11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439,440,441,442,443,444,445,446,447,448,449,450,451,452,453,454,455,456,457,458,459,460,461,462,463,464,465,466,467,468,469,470,471,472,473,474,475,476,477,478,479,480,481,482,483,484,485,486,487,488,489,490,491,492,493,494,495,496,497,498,499,500,501,502,503,504,505,506,507,508,509,510,511,512,513,514,515,516,517,518,519,520,521,522,523,524,525,526,527,528,529,530,531,532,533,534,535,536,537,538,539,540,541,542,543,544,545,546,547,548,549,550,551,552,553,554,555,556,557,558,559,560,561,562,563,564,565,566,567,568,569,570,571,572,573,574,575,576,577,578,579,580,581,582,583,584,585,586,587,588,589,590,591,592,593,594,595,596,597,598,599,600,601,602,603,604,605,606,607,608,609,610,611,612,613,614,615,616,617,618,619,620,621,622,623,624,625,626,627,628,629,630,631,632,633,634,635,636,637,638,639,640,641,642,643,644,645,646,647,648,649,650,651,652,653,654,655,656,657,658,659,660,661,662,663,664,665,666,667,668,669,670,671,672,673,674,675,676,677,678,679,680,681,682,683,684,685,686,687,688,689,690,691,692,693,694,695,696,697,698,699,700,701,702,703,704,705,706,707,708,709,710,711,712,713,714,715,716,717,718,719,720,721,722,723,724,725,726,727,728,729,730,731,732,733,734,735,736,737,738,739,740,741,742,743,744,745,746,747,748,749,750,751,752,753,754,755,756,757,758,759,760,761,762,763,764,765,766,767,768,769,770,771,772,773,774,775,776,777,778,779,780,781,782,783,784,785,786,787,788,789,790,791,792,793,794,795,796,797,798,799,800,801,802,803,804,805,806,807,808,809,810,811,812,813,814,815,816,817,818,819,820,821,822,823,824,825,826,827,828,829,830,831,832,833,834,835,836,837,838,839,840,841,842,843,844,845,846,847,848,849,850,851,852,853,854,855,856,857,858,859,860,861,862,863,864,865,866,867,868,869,870,871,872,873,874,875,876,877,878,879,880,881,882,883,884,885,886,887,888,889,890,891,892,893,894,895,896,897,898,899,900,901,902,903,904,905,906,907,908,909,910,911,912,913,914,915,916,917,918,919,920,921,922,923,924,925,926,927,928,929,930,931,932,933,934,935,936,937,938,939,940,941,942,943,944,945,946,947,948,949,950,951,952,953,954,955,956,957,958,959,960,961,962,963,964,965,966,967,968,969,970,971,972,973,974,975,976,977,978,979,980,981,982,983,984,985,986,987,988,989,990,991,992,993,994,995,996,997,998,999,1000,1001,1002,1003,1004,1005,1006,1007,1008,1009,1010,1011,1012,1013,1014,1015,1016,1017,1018,1019,1020,1021,1022,1023,1024,1025,1026,1027,1028,1029,1030,1031,1032,1033,1034,1035,1036,1037,1038,1039,1040,1041,1042,1043,1044,1045,1046,1047,1048,1049,1050,1051,1052,1053,1054,1055,1056,1057,1058,1059,1060,1061,1062,1063,1064,1065,1066,1067,1068,1069,1070,1071,1072,1073,1074,1075,1076,1077,1078,1079,1080,1081,1082,1083,1084,1085,1086,1087,1088,1089,1090,1091,1092,1093,1094,1095,1096,1097,1098,1099,1100,1101,1102,1103,1104,1105,1106,1107,1108,1109,1110,1111,1112,1113,1114,1115,1116,1117,1118,1119,1120,1121,1122,1123,1124,1125,1126,1127,1128,1129,1130,1131,1132,1133,1134,1135,1136,1137,1138,1139,1140,1141,1142,1143,1144,1145,1146,1147,1148,1149,1150,1151,1152,1153,1154,1155,1156,1157,1158,1159,1160,1161,1162,1163,1164,1165,1166,1167,1168,1169,1170,1171,1172,1173,1174,1175,1176,1177,1178,1179,1180,1181,1182,1183,1184,1185,1186,1187,1188,1189,1190,1191,1192,1193,1194,1195,1196,1197,1198,1199,1200,1201,1202,1203,1204,1205,1206,1207,1208,1209,1210,1211,1212,1213,1214,1215,1216,1217,1218,1219,1220,1221,1222,1223,1224,1225,1226,1227,1228,1229,1230,1231,1232,1233,1234,1235,1236,1237,1238,1239,1240,1241,1242,1243,1244,1245,1246,1247,1248,1249,1250,1251,1252,1253,1254,1255,1256,1257,1258,1259,1260,1261,1262,1263,1264,1265,1266,1267,1268,1269,1270,1271,1272,1273,1274,1275,1276]],
['exportálandó',[11,12,19,20,28,29]],
['elemek',[11,12,20,28,29,33,35]],
['számozása',[11,12,20]],
['1-től',[11,12,20,750,808,810,914,944,951,1026,1093,1096,1133,1138]],
['monotonan',[11,12,20]],
['nővekvő',[11,12,20]],
['módon',[11,12,20]],
['elementversion',[11,12,19,29]],
['bizonylat',[11,12,13,14,15,17,19,21,750,781,787,788,914,915,922,923,924,926,944,948,949,985,987,1013,1014,1015,1016,1017,1019,1021,1023,1024,1025,1026,1070,1073,1133,1136,1144,1146,1180,1181,1183,1192,1199,1200,1201,1208,1241,1242,1243]],
['verzió',[11,12,19,35,36,39,750,825,826]],
['száma',[11,12,19,121,196,200,220,224,225,280,282,291,294,303,305,362,365,442,457,459,636,638,695,697,725,728,729,732,750,789,794,795,797,838,839,914,1000,1002,1026,1044,1045,1046,1047,1102,1104,1106,1108,1119,1120]],
['choice',[11,12,121,245,256,406,407,442,497,556,592,626,644,648,689,713,914,915,934,981,1013,1014,1019,1026,1038,1064,1200,1241]],
['minoccurs',[11,12,17,18,21,23,24,27,28,29,35,36,37,47,48,50,51,60,61,62,64,67,121,122,123,124,125,126,127,128,129,130,131,132,133,141,142,143,148,153,154,155,156,164,166,167,170,171,172,173,179,181,182,183,186,187,190,192,195,196,197,198,199,200,201,202,203,205,207,209,210,213,214,215,216,217,218,219,220,223,224,226,227,228,231,235,236,240,241,243,244,263,264,265,266,267,268,269,272,273,274,278,279,289,290,299,300,301,302,303,306,309,310,312,313,314,315,316,317,318,319,320,327,329,331,341,344,346,347,352,355,356,357,358,406,410,411,414,415,416,417,420,421,423,428,429,430,432,442,447,449,454,456,466,467,468,469,470,471,472,473,474,475,476,477,478,479,480,481,486,487,489,490,491,492,493,495,496,508,509,513,514,515,516,519,521,533,534,535,536,539,543,544,545,546,547,548,549,550,551,552,553,563,565,566,568,571,572,574,592,593,594,595,596,597,598,599,600,601,602,603,604,606,607,609,610,611,612,613,614,615,616,617,618,619,620,626,630,631,632,633,657,658,662,663,671,673,689,692,695,696,697,698,699,701,750,756,757,758,759,760,761,762,763,768,770,771,772,773,776,781,783,785,789,793,797,813,814,815,816,817,818,819,820,825,826,827,828,829,830,831,832,833,834,838,840,845,850,851,854,856,858,870,873,875,876,886,887,914,915,916,917,918,924,925,928,929,930,934,935,936,939,942,944,947,962,963,964,966,967,968,970,971,972,973,974,975,992,995,996,999,1000,1001,1002,1003,1006,1013,1019,1020,1021,1022,1026,1031,1032,1035,1036,1051,1054,1055,1056,1057,1058,1059,1060,1062,1063,1070,1072,1075,1076,1079,1080,1081,1082,1085,1086,1088,1089,1090,1091,1097,1100,1101,1102,1103,1104,1105,1106,1107,1108,1109,1110,1111,1112,1113,1114,1115,1116,1117,1118,1119,1123,1130,1132,1133,1134,1135,1141,1143,1144,1149,1150,1151,1155,1156,1161,1162,1163,1165,1166,1167,1170,1200,1201,1203,1207,1213,1218,1219,1220,1221,1222,1223,1224,1225,1226,1227,1229,1230,1231,1232,1233,1234,1235,1236,1237,1240,1250,1252,1253,1254,1255,1256,1257,1258,1259,1260,1269,1271]],
['documentclass',[11,12,13,29]],
['documentclasstype',[11,12,13,1026,1181]],
['beküldött',[11,12,13,15,121,309,310,750,781,788]],
['típusa',[11,12,13,15,121,122,126,137,138,196,206,235,239,250,253,280,283,285,287,289,291,295,297,299,303,307,309,312,327,335,348,360,403,406,434,442,533,541,734,735,739,750,764,767,768,852,853,854,864,894,909,914,915,924,926,927,1026,1031,1093,1112,1177,1178,1180,1200,1269,1270]],
['nyugta',[11,12,13,914,985,987,1013,1014,1016,1019,1022,1026,1180,1181,1183,1187,1188,1200,1213,1221,1250,1256,1257]],
['számla',[11,12,13,121,122,123,124,125,126,127,130,141,143,148,149,151,158,161,164,171,175,183,184,185,186,187,188,190,191,192,195,196,198,199,203,205,206,207,208,209,210,211,213,214,216,224,225,227,229,230,231,235,236,237,238,239,240,241,242,243,244,245,249,256,257,258,259,260,261,262,263,265,268,271,272,276,277,278,287,288,289,290,291,292,293,295,296,314,315,316,317,318,319,320,356,357,362,370,371,394,395,397,398,406,433,434,435,436,437,438,442,447,448,454,456,461,463,513,516,519,521,528,529,530,532,533,537,540,541,542,543,544,550,551,554,555,556,558,559,562,563,564,571,576,577,580,581,583,584,586,587,592,593,594,597,619,621,622,636,637,638,676,677,678,679,680,681,682,683,685,686,689,690,691,692,707,708,710,711,713,717,722,723,733,914,953,954,1013,1014,1018,1019,1020,1026,1119,1123,1181,1183,1200,1213,1218,1220,1250,1253,1254,1259,1260]],
['egyszerűsített',[11,12,13,406,434,442,576,592,593,594,619,679,685,689,690,691,713,717,914,953,1026,1181,1183,1200,1250,1258,1259,1260]],
['document',[11,12,13,14,18,21,121,141,142,171,172,175,179,181,187,190,196,197,208,211,224,226,227,228,235,236,245,247,260,272,273,442,461,462,463,528,530,532,533,540,541,556,558,563,636,638,657,658,750,781,787,788,907,914,915,919,920,921,922,923,924,926,928,931,934,937,938,939,940,941,944,946,947,948,949,953,955,956,958,962,966,972,973,974,976,977,978,985,986,987,988,990,992,993,994,995,996,998,999,1013,1014,1019,1021,1024,1025,1026,1031,1032,1033,1070,1073,1074,1088,1089,1090,1091,1092,1093,1095,1119,1121,1122,1123,1133,1134,1136,1144,1146,1173,1180,1181,1183,1184,1192,1196,1200,1201,1203,1206,1208,1211,1213,1239,1241,1246,1250,1262,1264,1265,1266,1267,1268,1269,1270,1271,1272,1274]],
['submitted',[11,12,13,15,442,636,657,658]],
['receipt',[11,12,13,17,914,985,987,1000,1013,1014,1016,1019,1022,1023,1026,1180,1181,1183,1187,1188,1200,1213,1219,1221,1227,1250,1255,1256,1257]],
['invoice',[11,12,13,121,122,123,124,125,126,127,130,141,143,146,148,149,151,158,161,164,167,170,171,175,176,177,179,180,181,183,184,185,186,187,188,189,190,191,192,195,196,198,199,203,205,206,207,208,209,210,211,212,213,214,215,216,224,225,226,227,229,230,231,232,234,235,236,237,238,239,240,241,242,243,244,245,246,248,249,253,255,256,258,259,260,261,262,263,265,268,270,271,272,276,277,278,280,281,283,284,285,286,287,288,289,290,291,292,293,295,296,314,315,316,317,318,319,320,356,357,358,362,366,370,371,394,395,397,398,406,433,434,435,436,437,438,442,447,448,450,452,454,455,456,461,463,466,513,515,516,519,521,528,529,530,531,532,533,534,535,536,537,540,541,542,543,544,550,551,554,555,556,557,558,559,560,561,562,563,564,565,571,576,577,580,581,583,584,586,587,588,592,593,594,597,598,605,617,618,619,621,622,636,637,638,676,677,678,679,680,681,682,683,684,685,686,689,690,691,692,695,707,708,710,711,713,717,722,723,733,739,914,953,954,1013,1014,1018,1019,1020,1026,1119,1123,1181,1183,1200,1213,1218,1220,1225,1250,1252,1253,1254,1258,1259,1260]],
['simplified',[11,12,13,406,434,442,576,592,593,594,619,679,685,689,690,691,713,717,914,996,998,1026,1181,1183,1200,1250,1258,1259,1260]],
['documentenvelope',[11,12,14,29]],
['signeddocumentenvelopetype',[11,12,14,1026,1144]],
['boríték',[11,12,14,28,34,1026,1144,1149,1150,1155]],
['fejlesztői',[11,12,14,16,750,781,787,788]],
['dokumentációban',[11,12,14,16]],
['meghatározott',[11,12,14,442,533,547,592,610]],
['formátumban',[11,12,14,16,23,750,892,893,895,898,913]],
['envelope',[11,12,14,1026,1144,1147,1148,1149,1150,1151,1153,1154,1155]],
['format',[11,12,14,23,406,407,750,892,893,895,913,1026,1038,1200]],
['specified',[11,12,14]],
['developer',[11,12,14,121,327,328,329,330,331,750,854,855,856,857,858]],
['reportclass',[11,12,15,29]],
['reportclasstype',[11,12,15,1026,1199]],
['pénztárjelentés',[11,12,15,1026,1199,1200,1213,1241,1244]],
['pénzmozgás',[11,12,15,1026,1183,1192,1199,1200,1201,1213,1216,1217,1223,1226,1241,1242]],
['voucher',[11,12,15,406,441,1013,1014,1015,1026,1174]],
['cash',[11,12,15,121,404,406,441,442,533,535,750,771,772,774,789,794,795,896,907,1026,1112,1115,1174,1197,1200,1201,1204,1208,1209,1241,1242,1245,1250,1263]],
['report',[11,12,15,750,771,772,774,1026,1150,1152,1183,1199,1200,1208,1213,1241,1242,1243,1244,1245,1247,1248,1249,1250,1275,1276]],
['flow',[11,12,15,121,232,233,1200,1201,1241,1242,1245,1250,1263]],
['reportenvelope',[11,12,16,29]],
['signedreportenvelopetype',[11,12,16,1026,1150]],
['riport',[11,12,16,750,771,1026,1150,1152,1199,1200,1213,1241,1247,1248,1249,1275,1276]],
['adatai',[11,12,16,35,36,41,42,43,44,45,64,121,131,141,149,150,151,152,164,165,179,181,182,187,188,224,245,268,269,299,301,327,341,343,442,461,463,489,493,497,508,519,528,551,552,553,555,556,557,558,559,563,565,566,592,600,626,628,629,636,657,658,676,689,692,695,704,725,729,750,764,789,790,796,821,825,828,833,834,835,837,854,870,872,886,887,914,928,929,930,933,934,939,941,942,944,945,953,955,976,977,978,985,986,987,992,996,999,1000,1013,1014,1015,1016,1018,1026,1056,1060,1064,1068,1069,1070,1093,1094,1112,1116,1119,1133,1135,1140,1141,1166,1200,1201,1202,1208,1209,1250,1252,1253,1254,1255,1256,1257,1258,1259,1260]],
['előírt',[11,12,16]],
['searchkeytimestamp',[11,12,26,29]],
['generictimestamptype',[11,12,21,26,28,31,35,36,40,99,750,801,804,805,833,835,840,849,850,854,861,886,888,914,915,922,923,944,948,949,1026,1133,1136]],
['vevői',[11,12,25,26,442,466,474,1026,1144,1145,1176]],
['alkalmazában',[11,12,25,26]],
['generált',[11,12,25,26,35,95]],
['keresőkulcs',[11,12,25,26]],
['előállításának',[11,12,26]],
['időpontja',[11,12,26,28,31,121,131,132,141,145,171,174,196,204,299,300,362,364,442,626,632,750,854,861]],
['time',[11,12,21,26,35,36,40,121,131,132,141,145,171,174,196,204,245,247,256,257,303,304,362,364,406,433,750,801,802,803,804,805,854,861,914,915,922,923,944,948,949,1026,1133,1136]],
['generation',[11,12,26]],
['search',[11,12,25,26,121,122,124,127,130,183,186,750,852,853]],
['generated',[11,12,25,26,35,95]],
['customer',[11,12,25,26,121,122,124,127,130,183,186,196,201,227,231,285,286,394,442,466,469,474,484,485,489,490,491,492,493,497,551,552,914,928,930,1013,1019,1025,1026,1056,1057,1058,1059,1060,1064,1088,1106,1110,1144,1145,1173,1176,1192,1200,1247,1276]],
['application',[11,12,25,26,1026,1176]],
['searchkey',[11,12,25,29]],
['base64binary',[11,12,22,23,24,25,121,137,140,187,191,235,238,272,278,348,349,750,893,895,914,953,954,1013,1019,1023,1026,1144,1145,1146,1148,1150,1151,1152,1154,1172,1187,1188,1190,1200,1247,1248]],
['értéke',[11,12,25,35,64,66,68,121,141,146,171,177,268,270,362,366,398,442,442,443,446,447,448,457,458,533,533,535,538,576,577,578,580,581,582,586,587,588,592,599,602,605,610,612,644,645,646,695,699,729,730,750,751,753,781,787,788,914,914,956,958,959,981,982,983,1000,1004,1026,1027,1030,1097,1100,1101,1200,1266,1268]],
['value',[11,12,25,35,64,66,68,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,124,127,130,141,146,155,171,177,183,186,187,190,224,225,235,236,263,267,268,270,321,323,324,326,362,366,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,433,434,435,436,437,438,439,440,441,442,443,446,447,448,457,458,533,535,548,571,576,592,593,594,599,602,605,610,612,644,645,646,695,699,729,730,734,735,736,737,738,739,740,741,742,743,744,745,746,747,748,749,750,751,752,753,756,758,759,760,762,763,768,770,777,778,781,785,787,788,789,791,794,795,799,801,802,803,821,823,825,826,827,829,830,831,832,879,882,889,890,891,894,896,897,898,899,900,901,902,903,904,905,906,907,908,909,910,911,912,913,914,956,962,966,981,982,983,1000,1004,1009,1010,1011,1012,1026,1027,1030,1051,1053,1054,1055,1097,1100,1102,1103,1104,1105,1106,1108,1109,1110,1111,1119,1123,1125,1126,1144,1147,1150,1153,1171,1172,1173,1174,1175,1176,1177,1178,1179,1180,1181,1182,1183,1184,1185,1186,1189,1190,1191,1192,1193,1194,1195,1196,1197,1198,1199,1200,1266,1268]],
['suppliername',[11,12,27,29,121,195,196,221,442,555,695,702,914,1000,1007]],
['simpletext512notblanktype',[11,12,27,28,30,35,52,115,121,153,154,196,201,221,327,330,341,345,399,442,443,446,489,492,519,522,592,603,695,702,750,854,857,870,874,914,962,967,1000,1007,1026,1027,1030,1056,1059]],
['eladó',[11,12,27,121,196,221,442,466,481,486,519,521,551,555,648,649,662,663,693,694,695,697,699,700,701,702,748,914,1000,1002,1004,1005,1006,1007,1013,1019,1020,1021,1022]],
['szállító',[11,12,27,121,196,221,442,695,699,700,701,702,914,1000,1004,1005,1006,1007]],
['neve',[11,12,27,28,30,35,64,65,121,131,133,196,201,221,327,330,334,341,345,346,406,410,422,423,424,442,489,492,519,522,636,640,695,702,750,808,811,854,857,863,870,874,875,914,1000,1007,1026,1056,1059,1075,1087,1106,1111,1141,1142,1143,1156,1157,1166,1169,1170]],
['seller',[11,12,27,121,196,221,442,695,699,700,701,702,914,1000,1004,1005,1006,1007,1013,1019,1020,1021,1022]],
['supplier',[11,12,27,121,122,124,127,130,171,178,183,186,196,220,221,222,227,231,285,286,394,442,466,475,481,486,519,521,551,555,648,649,693,694,695,699,700,701,702,748,914,1000,1004,1005,1006,1007]],
['documentnumber',[11,12,18,29,914,915,921,944,946,955,977,978,986,987,1017,1020,1021,1022,1026,1088,1092,1093,1095,1119,1121,1249]],
['documentnumbertype',[11,12,18,914,915,921,944,946,1026,1088,1092,1093,1095,1119,1121,1183,1200,1201,1206,1208,1211,1213,1239,1250,1262,1269,1274]],
['dokumentum',[11,12,18,442,636,657,658,750,907,914,915,919,920,921,924,928,931,934,938,939,940,944,946,953,955,956,958,962,966,974,976,977,978,985,986,988,990,992,993,994,996,998,999,1026,1031,1033,1088,1089,1090,1092,1093,1095,1119,1121,1122,1183,1184,1200,1241,1246,1269,1270,1271]],
['vagy',[11,12,18,121,122,124,127,130,131,132,133,158,159,160,161,162,163,171,175,179,181,182,183,184,185,186,187,190,196,208,211,224,227,229,230,235,236,245,285,286,291,292,327,335,394,400,403,406,407,433,442,461,463,495,496,497,499,528,530,532,533,540,547,556,558,559,563,566,571,575,576,579,592,603,607,636,638,644,651,653,654,657,661,671,672,685,686,687,688,695,697,698,703,707,708,709,710,711,712,713,722,723,724,733,734,738,750,764,767,801,802,854,864,909,914,915,920,921,934,939,942,944,946,962,967,968,981,988,990,991,1000,1002,1003,1008,1009,1013,1014,1015,1026,1038,1062,1063,1088,1092,1093,1095,1119,1121,1123,1166,1168,1174,1177,1183,1186,1200,1201,1204]],
['módosító',[11,12,18,121,141,142,171,172,175,179,181,183,185,187,190,196,197,208,211,215,224,226,227,228,230,235,236,245,246,247,260,272,273,397,442,461,462,463,528,530,532,533,540,541,556,557,558,559,560,563,914,915,920,921,924,926,934,937,939,944,946,1026,1088,1092,1093,1095,1119,1121,1123,1183,1184]],
['okirat',[11,12,18,121,141,142,171,172,175,183,185,187,190,196,197,208,211,215,224,226,227,228,230,235,236,245,246,247,260,272,273,442,461,462,463,528,530,532,533,540,541,556,557,558,559,560,563,636,638,914,915,920,921,924,926,934,937,944,946,1026,1088,1092,1093,1095,1119,1121,1123,1183,1184]],
['sorszáma',[11,12,18,121,137,139,141,142,143,171,172,175,183,185,196,197,203,211,215,216,227,228,230,235,237,245,246,249,256,259,263,265,272,273,276,356,357,442,450,452,461,462,528,532,559,560,562,583,584,592,608,636,638,750,821,824,914,915,921,934,937,938,944,946,962,969,1026,1035,1037,1088,1092,1093,1095,1119,1121,1200,1208,1212,1250,1251]],
['sequential',[11,12,18,121,171,175,183,185,196,211,227,230,442,528,532,583,584,592,608,636,638,914,915,921,944,946,962,969,1026,1035,1037,1088,1092,1093,1095,1119,1121,1183]],
['number',[11,12,18,24,35,36,37,39,64,67,69,89,91,103,117,118,121,122,124,130,137,139,141,142,143,171,172,173,175,178,183,185,186,187,196,197,200,202,203,211,215,216,220,222,224,225,227,228,230,231,235,237,245,246,249,256,259,263,265,272,273,276,280,281,285,286,287,288,297,298,327,331,337,341,343,356,357,393,406,408,410,414,416,417,423,424,429,431,439,442,450,452,457,459,461,462,464,465,466,476,489,491,495,496,497,498,499,500,508,512,519,521,523,524,525,526,527,528,532,559,560,562,569,570,583,584,592,608,624,625,626,631,633,634,635,636,638,641,665,666,695,696,697,698,701,703,729,732,736,741,747,750,789,791,794,795,797,799,808,810,821,824,838,839,840,851,854,858,866,870,872,879,882,900,906,914,915,921,934,937,938,944,946,951,962,969,1000,1001,1002,1003,1006,1008,1010,1026,1035,1037,1039,1044,1045,1046,1047,1056,1058,1062,1063,1064,1065,1066,1067,1075,1079,1081,1082,1088,1092,1093,1095,1096,1102,1103,1104,1105,1106,1108,1110,1119,1120,1121,1124,1133,1138,1156,1157,1162,1164,1166,1167,1168,1171,1179,1183,1193,1200,1201,1206,1208,1211,1212,1213,1239,1250,1251,1262,1269,1274]],
['original',[11,12,18,121,171,175,183,185,196,211,215,216,227,230,245,246,248,249,256,259,263,265,309,310,397,442,528,532,533,541,559,560,561,562,583,584,914,915,921,924,926,934,937,938,944,946,1026,1088,1092,1093,1095,1119,1121,1183,1184]],
['modification',[11,12,18,121,141,142,171,172,175,179,181,182,183,185,187,190,196,197,208,211,216,224,226,227,228,230,235,236,245,247,248,249,256,259,260,263,265,272,273,397,442,461,462,463,528,530,532,533,540,541,556,557,558,559,561,562,563,566,583,584,585,592,606,733,739,914,915,920,921,934,936,938,939,942,944,946,1026,1088,1092,1093,1095,1119,1121,1123,1183,1184,1194,1200,1213,1220,1221,1222,1231,1235,1250,1254,1257,1260]],
['documentgrossamounthuf',[11,12,17,29,914,992,994,999]],
['monetarytype',[11,12,17,121,196,209,210,213,214,324,326,406,440,442,513,516,576,577,578,580,581,582,586,587,588,592,601,621,622,623,651,652,656,657,659,662,663,676,677,678,679,680,681,682,683,685,686,687,707,708,709,710,711,712,722,723,724,914,956,958,959,988,990,991,992,993,994,1026,1051,1053,1054,1055,1070,1071,1097,1098,1130,1131,1195]],
['bruttó',[11,12,17,442,571,572,576,577,578,580,581,582,592,619,671,673,676,677,678,685,686,687,689,692,707,708,709,914,956,958,959,988,990,991,992,993,994,996,999,1026,1051,1053]],
['végösszege',[11,12,17]],
['forintban',[11,12,17,121,196,210,214,314,317,319,442,576,578,580,582,586,588,592,601,620,621,623,651,652,662,663,676,678,679,681,683,685,687,707,709,710,712,722,724,914,944,947,956,959,962,975,988,991,992,994,995,1026,1097,1100,1101,1112,1114,1115,1118,1125,1127,1200,1201,1203,1207]],
['gross',[11,12,17,442,571,572,576,577,578,580,581,582,592,619,671,673,676,677,678,685,686,687,689,692,707,708,709,914,956,958,959,988,990,991,992,993,994,996,999,1026,1051,1053]],
['total',[11,12,17,442,513,516,1026,1051,1053,1054,1055]],
['amount',[11,12,17,121,196,209,210,213,214,314,316,317,318,319,442,513,516,576,577,578,580,581,582,586,587,588,621,622,623,651,652,662,663,676,677,678,679,680,681,682,683,685,686,687,707,708,709,710,711,712,722,723,724,914,944,947,956,958,959,988,990,991,992,993,994,995,1026,1069,1070,1071,1097,1098,1100,1112,1114,1116,1117,1118,1125,1127,1130,1131,1200,1201,1203,1207,1213,1214,1215,1216,1217,1218,1219,1220,1221,1222,1225,1227,1229,1230,1231,1232,1233,1234,1235,1236,1237,1240,1255,1256,1257]],
['issueenddatetime',[11,12,21,29,914,915,922,944,948,978,987,1017]],
['időbélyeg',[11,12,21,35,99,406,437,914,915,922,923,944,948,949,1026,1133,1136]],
['zárásának',[11,12,21,914,915,922,944,948]],
['pontos',[11,12,21,914,915,922,923,944,948,949,1026,1133,1136]],
['ideje',[11,12,21,35,36,40,121,303,304,750,801,802,914,915,922,923,944,948,949,1026,1133,1136]],
['órája',[11,12,21,750,771,776,914,915,922,923,944,948,949,1026,1133,1136]],
['szerint',[11,12,21,35,36,39,92,121,161,162,163,167,168,192,193,256,257,352,353,406,410,413,420,423,426,428,442,533,537,592,617,636,657,658,679,684,748,750,777,778,779,780,801,805,914,915,922,923,944,948,949,1026,1075,1078,1085,1097,1099,1133,1136,1156,1159,1161]],
['timestamp',[11,12,21,35,36,40,42,45,99,121,245,247,406,437,914,915,922,923,944,948,949,1026,1044,1133,1136]],
['exact',[11,12,21,914,915,922,923,944,948,949,1026,1133,1136]],
['closing',[11,12,21,750,903,914,915,922,944,948,1026,1174,1200,1250,1251]],
['according',[11,12,21,442,533,550,563,567,592,614,616,617,636,648,651,655,657,658,667,668,671,741,750,771,774,775,777,778,877,878,914,915,922,923,939,943,944,948,949,1010,1026,1133,1136]],
['clock',[11,12,21,750,771,776,801,803,914,915,922,923,944,948,949,1026,1133,1136]],
['privatekey',[11,12,22,29]],
['privát',[11,12,22]],
['kulcs',[11,12,22,750,886,887,1013,1019,1023,1026,1187,1188,1200,1247,1248]],
['qrcodesignature',[11,12,23,29]],
['aláírása',[11,12,23]],
['base64',[11,12,23,121,137,140,187,189,191,235,238,272,275,278,442,733,750,895,914,953,954,1026,1144,1145,1146,1148,1150,1151,1152,1154]],
['code',[11,12,23,24,35,47,48,57,58,60,62,90,92,93,94,96,104,107,108,116,119,120,121,153,156,327,329,406,410,413,418,420,423,426,427,428,429,430,432,442,484,485,501,502,505,506,533,537,642,643,644,645,646,647,651,653,693,694,704,705,741,750,768,769,781,787,788,789,798,840,841,854,856,859,877,878,879,880,896,911,914,944,950,956,957,962,964,979,980,981,982,983,984,988,989,996,997,1010,1026,1051,1052,1075,1078,1083,1085,1097,1099,1106,1109,1125,1126,1127,1133,1137,1156,1159,1160,1161,1162,1163,1165,1175,1176,1186,1196]],
['signature',[11,12,23,35,64,68,1026,1144,1148,1150,1154]],
['qrcodesigncertserial',[11,12,24,29]],
['aláírásához',[11,12,24]],
['használt',[11,12,24,442,740,750,756,760,761,762,789,791,798,833,834,837,914,928,929,933,1026,1133,1135,1140,1187,1188]],
['tanúsítvány',[11,12,24,750,892,893,894,895,905,907]],
['sorozatszáma',[11,12,24]],
['serial',[11,12,24,442,626,633,914,944,951,1026,1093,1096,1133,1138,1200,1208,1212,1250,1251]],
['certificate',[11,12,24,750,892,893,894,895,905,907]],
['used',[11,12,24,442,508,509,533,538,741,750,756,760,761,789,791,798,833,834,837,914,928,929,933,1010,1026,1133,1135,1140,1187,1188,1200,1201,1205,1208,1210,1213,1238,1250,1261,1269,1273]],
['sign',[11,12,24,750,777,779,780,879,881,882,883,902,914,944,947,992,995]],
['exportenvelopetype',[11,28,34]],
['exporttimestamp',[11,28,31,34]],
['exportálás',[11,28,31]],
['numberofelements',[11,28,33,34]],
['kiexportált',[11,28,33]],
['darabszáma',[11,28,33,1026,1070,1073]],
['exportversion',[11,28,32,34]],
['verziószáma',[11,28,32,35,36,37,39,750,789,791,799]],
['exportname',[11,28,30,34]],
['állomány',[11,28,30,121,187,190,235,236,750,821,823,824,1026,1088,1091,1119,1123,1144,1147,1150,1153]],
['exportelements',[11,28,29,34]],
['maxoccurs',[11,28,29,35,55,56,121,135,136,164,166,167,170,192,195,224,226,232,234,268,271,272,274,279,314,315,316,317,318,319,320,339,340,352,355,442,464,465,482,483,484,485,501,502,503,504,517,518,524,525,526,527,533,534,556,557,563,568,569,570,589,590,592,595,609,624,625,634,635,642,643,657,660,665,666,667,668,669,670,679,684,689,691,693,694,750,771,772,806,838,852,853,868,869,877,884,886,887,914,924,925,960,961,962,963,979,980,996,998,1026,1031,1032,1033,1034,1035,1036,1049,1068,1112,1116,1117,1128,1129,1133,1134,1200,1264]],
['exportenvelope',[11,34]],
['complexcontent',[11,34,35,54,70,71,121,149,151,164,250,253,280,283,285,287,289,291,295,297,299,303,307,309,312,348,360,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,442,495,733,1013,1024,1025,1026,1044,1046,1062,1141,1166,1200,1275,1276]],
['extension',[11,34,35,52,54,70,71,121,149,151,164,250,253,280,283,285,287,289,291,295,297,299,303,307,309,312,348,360,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,442,495,733,1013,1024,1025,1026,1041,1043,1044,1046,1062,1141,1166,1191,1200,1275,1276]],
['envelopeversion',[14,16,1026,1144,1149,1150,1155]],
['envelopedata',[14,16,1026,1144,1146,1147,1148,1150,1152,1153,1154]],
['customerenvelopedata',[14,16,1026,1144,1145,1147,1148,1150,1151,1153,1154]],
['envelopehash',[14,16,1026,1144,1147,1150,1153]],
['envelopesignature',[14,16,1026,1144,1148,1150,1154]],
['project',[35,121,406,442,466,479,665,666,750,914,1026]],
['séma',[35,121,406,442,750,789,799,914,1013,1026,1200]],
['author',[35,121,406,442,750,914,1026]],
['informatikai',[35,121,406,442,750,914,1026]],
['intézet',[35,121,406,442,750,914,1026]],
['--atomi',[35]],
['típusok',[35]],
['atomic',[35,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,1026,1172]],
['types--',[35]],
['simpletype',[35,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,433,434,435,436,437,438,439,440,441,442,734,735,736,737,738,739,740,741,742,743,744,745,746,747,748,749,750,751,752,753,756,758,759,760,762,763,768,770,777,778,781,785,789,791,794,795,799,801,802,803,825,826,827,829,830,831,832,879,882,889,890,891,892,893,894,895,896,897,898,899,900,901,902,903,904,905,906,907,908,909,910,911,912,913,914,1009,1010,1011,1012,1026,1097,1098,1102,1103,1104,1105,1106,1108,1109,1110,1111,1125,1126,1171,1172,1173,1174,1175,1176,1177,1178,1179,1180,1181,1182,1183,1184,1185,1186,1187,1188,1189,1190,1191,1192,1193,1194,1195,1196,1197,1198,1199]],
['atomicstringtype100',[35,72,109]],
['atomi',[35,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,1026,1172]],
['string',[35,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,101,109,110,111,112,113,114,115,116,750,751,752,753,756,760,762,768,770,781,785,789,791,794,795,799,801,803,825,826,827,829,830,831,832,879,882,889,890,891,894,896,897,898,899,901,903,905,906,907,908,909,911,913,1026,1125,1126,1171,1175,1176,1179,1180,1181,1183,1186,1191,1192,1196,1198,1199]],
['hosszra',[35,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88]],
['length',[35,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,92,93,94,118,120,121,402,442,629,729,731,750,908]],
['restriction',[35,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,433,434,435,436,437,438,439,440,441,442,734,735,736,737,738,739,740,741,742,743,744,745,746,747,748,749,750,751,752,753,756,758,759,760,762,763,768,770,777,778,781,785,789,791,794,795,799,801,802,803,825,826,827,829,830,831,832,879,882,889,890,891,892,893,894,895,896,897,898,899,900,901,902,903,904,905,906,907,908,909,910,911,912,913,914,1009,1010,1011,1012,1026,1097,1098,1102,1103,1104,1105,1106,1108,1109,1110,1111,1125,1126,1171,1172,1173,1174,1175,1176,1177,1178,1179,1180,1181,1182,1183,1184,1185,1186,1187,1188,1189,1190,1191,1192,1193,1194,1195,1196,1197,1198,1199]],
['minlength',[35,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,91,95,102,103,104,116,121,399,442,735,741,742,750,911,914,1010,1011,1026,1102,1103,1104,1171,1172,1176,1178,1179,1186,1191,1198]],
['maxlength',[35,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,91,95,102,103,104,116,442,735,741,742,750,751,752,753,756,760,762,768,770,781,785,789,791,794,795,799,801,803,825,826,827,829,830,831,832,879,882,889,890,891,894,896,897,898,899,901,903,905,906,907,909,911,913,914,1010,1011,1026,1102,1103,1104,1105,1106,1108,1109,1110,1111,1125,1126,1171,1172,1175,1176,1178,1179,1180,1181,1183,1186,1190,1191,1192,1196,1198,1199]],
['atomicstringtype1024',[35,73,110,1200,1266,1268]],
['atomicstringtype128',[35,74,108]],
['atomicstringtype15',[35,36,37,39,75,91,102,104,111,121,393,394,395,401,403,406,433,434,441,442,734,736,738,739,740,745,749,750,900,912,914,1009,1026,1144,1149,1150,1155,1173,1174,1177,1194,1197]],
['atomicstringtype16',[35,76]],
['atomicstringtype2',[35,77,92,93,120]],
['atomicstringtype200',[35,78,112]],
['atomicstringtype2048',[35,79]],
['atomicstringtype255',[35,80,113,442,735,1026,1178]],
['atomicstringtype256',[35,81]],
['atomicstringtype32',[35,82,95,103,121,392,402,442,742,914,1011]],
['atomicstringtype4',[35,83,94]],
['atomicstringtype4000',[35,84]],
['atomicstringtype50',[35,85,89,114,750,904]],
['atomicstringtype512',[35,86,115]],
['atomicstringtype64',[35,87,107]],
['atomicstringtype8',[35,88,90,96,118,119,121,396,397,398,400,404,405,442,741,743,744,748,750,910,914,1010,1026,1184]],
['genericdatetype',[35,97]],
['Általános',[]],
['dátum',[35,97,121,158,159,160,321,406,435,442,466,480,669,670,1026,1182]],
['generic',[35,54,97,98,99,100]],
['date',[35,97,121,131,132,141,145,158,159,160,171,174,196,204,207,208,245,247,256,258,299,300,303,304,314,315,320,321,362,364,406,435,442,450,453,454,455,508,510,528,530,533,539,542,636,637,669,670,750,833,835,886,888,914,915,920,1026,1070,1074,1182]],
['pattern',[35,89,91,92,93,94,95,97,99,102,103,104,107,108,109,110,111,112,113,114,115,116,117,118,120,121,122,127,402,406,435,437,442,735,736,742,750,756,762,789,791,799,801,803,898,903,906,908,911,914,1011,1026,1125,1126,1171,1172,1175,1176,1178,1179,1182,1183,1186,1191,1196,1198]],
['genericdecimaltype',[35,98,406,440,442,746,747,914,1012,1026,1195]],
['lebegőpontos',[35,98]],
['érték',[35,98,121,121,263,267,321,323,324,326,442,571,576,592,593,594,746,750,902,914,956,962,966,1012]],
['float',[35,98]],
['point',[35,98,442,508,592,600,750,879,881,883,902]],
['decimal',[35,98,406,440,442,737,746,747,750,777,779,780,879,881,883,902,914,1012,1026,1189,1195]],
['datetime',[35,99,121,161,162,163,256,257,299,300,406,437]],
['genericunsignedintegertype',[35,100]],
['egész',[35,100,750,756,758,763,879,882,914,944,947,992,995,1026,1097,1100,1200,1201,1203]],
['szám',[35,100,406,410,416,423,424,429,431,442,466,471,474,475,495,496,497,499,503,504,526,527,626,633,695,698,703,736,741,747,750,840,851,914,1000,1003,1008,1010,1026,1062,1063,1064,1066,1075,1081,1119,1124,1156,1157,1162,1164,1166,1167,1171,1179]],
['unsigned',[35,100]],
['integer',[35,100,117,750,756,758,763,777,778]],
['mininclusive',[35,100,105,106,406,435,436,437,438,439,442,747,750,756,763,1026,1182,1185,1193]],
['sha256type',[35,107,750,854,859]],
['sha256',[35,107,750,854,859]],
['megadására',[35,89,107,108,442,747]],
['szolgáló',[35,89,107,108,442,443,528,531,556,741,747,914,915,919,924,925,1010,1026,1027,1035]],
['field',[35,107,108,406,440,442,443,444,445,454,533,542,592,644,735,740,742,746,748,914,962,981,1011,1012,1026,1027,1028,1029,1178,1195]],
['holding',[35,107,108]],
['0-9a-f',[35,107,108,442,736,1026,1196]],
['sha512type',[35,108]],
['sha512',[35,108]],
['simpletext100notblanktype',[35,57,58,60,62,109,121,153,156,442,464,465,482,483,484,485,501,502,503,504,524,525,526,527,569,570,624,625,634,635,665,666,669,670,693,694,914,915,916,1026,1141,1142,1143,1166,1169,1170,1200,1269,1270]],
['legfeljebb',[35,109,110,111,112,113,114,115,442,747,750,777,779,780]],
['karaktert',[35,109,110,111,112,113,114,115]],
['tartalmazó',[35,109,110,111,112,113,114,115,442,454,592,644,748,750,852,853,914,962,981]],
['szöveg',[35,57,59,109,110,111,112,113,114,115]],
['maximum',[35,109,110,111,112,113,114,115,406,440,442,746,747,750,777,779,780,914,1012,1026,1195]],
['characters',[35,109,110,111,112,113,114,115,750,879,880,1026,1051,1052,1097,1099,1200,1250,1251]],
['simpletext1024notblanktype',[35,47,50,57,59,60,61,110,121,263,266,267,750,840,846,1200,1269,1271]],
['simpletext15notblanktype',[35,111,121,327,333,750,764,766,840,841,843,851,854,862]],
['simpletext200notblanktype',[35,112,121,327,328,341,346,442,505,507,750,854,855,870,875]],
['simpletext255notblanktype',[35,113,406,410,412,422,423,424,425,442,443,444,513,514,626,631,633,636,640,644,645,750,840,842,845,914,981,982,1026,1027,1028,1075,1077,1087,1156,1157,1158,1200,1266,1267]],
['simpletext50notblanktype',[35,47,48,52,53,114,121,171,175,183,185,196,211,216,227,230,245,249,250,252,253,254,256,259,263,265,327,331,334,406,410,411,414,415,416,417,419,420,421,423,428,442,450,452,497,500,505,506,528,532,559,562,592,618,626,630,636,638,695,697,704,705,750,840,844,854,858,863,914,934,938,962,973,1000,1002,1026,1064,1067,1075,1076,1079,1080,1081,1082,1084,1085,1086,1102,1103,1104,1105,1106,1108,1109,1110,1111,1156,1161]],
['--Üzleti',[]],
['katalógus',[35]],
['business',[35,90,121,153,272,274,442,741,914,1010,1013,1014,1015,1016,1018,1019,1024,1025,1200,1247,1276]],
['catalog',[35]],
['elements--',[35]],
['bankaccountnumbertype',[35,89,442,489,491,519,521,695,701,750,838,839,914,1000,1006,1026,1056,1058]],
['bankszámla',[35,89,442,519,521,750,789,797,838,839]],
['bank',[35,89,406,441,442,489,491,519,521,695,701,750,789,797,838,839,914,1000,1006,1026,1056,1058]],
['account',[35,89,442,466,473,489,491,519,521,524,525,533,547,695,701,750,789,797,838,839,914,1000,1006,1026,1056,1058]],
['0-9a-za-z',[35,89]],
['communityvatnumbertype',[35,91,442,497,498,695,696,914,1000,1001,1026,1064,1065]],
['közösségi',[35,91,442,497,498,695,696,914,1000,1001,1026,1064,1065]],
['adószám',[35,91,118,121,341,343,406,429,442,495,497,498,499,695,696,703,750,870,872,907,914,1000,1001,1008,1026,1062,1064,1065,1066,1162]],
['community',[35,91,442,497,498,695,696,914,1000,1001,1026,1064,1065]],
['registration',[35,91,103,442,508,512,750,906,907,1026,1102,1105]],
['0-9a-z',[35,91]],
['countrycodetype',[35,92,121,327,329,406,410,413,423,426,750,854,856,1026,1075,1078,1156,1159]],
['országkód',[35,92,406,410,413,423,426,1026,1075,1078,1156,1159]],
['alpha-2',[35,92,406,410,413,420,423,426,428,1026,1075,1078,1085,1156,1159,1161]],
['szabvány',[35,92,94,406,410,413,420,423,426,428,442,533,537,750,777,778,779,780,1026,1075,1078,1085,1156,1159,1161]],
['country',[35,92,121,327,329,406,410,413,420,423,426,428,750,854,856,1026,1075,1078,1085,1156,1159,1161]],
['countycodetype',[35,93,406,429,430,1026,1162,1163]],
['megyekód',[35,93,406,429,430,1026,1162,1163]],
['county',[35,93,406,429,430,1026,1162,1163]],
['currencytype',[35,94,121,122,123,196,199,442,533,537,1026,1097,1099]],
['pénznem',[35,94,442,533,538]],
['szerinti',[35,94,442,457,458,489,494,533,550,563,567,592,614,648,671,713,714,729,730,734,740,741,750,877,878,898,914,939,943,1010,1026,1049,1050,1051,1056,1061,1070,1072,1177]],
['hosszú',[35,94]],
['currency',[35,94,121,122,123,195,196,199,209,213,241,314,316,318,442,454,456,513,515,516,533,537,538,576,577,580,581,586,587,588,592,619,621,622,676,677,679,680,682,685,686,707,708,710,711,722,723,914,956,958,962,974,988,990,992,993,1026,1097,1098,1099,1100,1101,1112,1116]],
['three',[35,94]],
['digit',[35,94,406,429,432,1026,1162,1165,1179,1186]],
['platenumbertype',[35,103,442,508,512]],
['kereskedelmi',[35,103,442,508,512]],
['gépjármű',[35,103]],
['forgalmi',[35,103,442,508,512,750,879,880,914,956,957,988,989,1026,1049,1050,1051,1052,1053,1054,1055,1068,1069,1070,1072,1175,1183,1199,1200,1241,1245,1250]],
['rendszáma',[35,103,442,508,512]],
['csak',[35,103,442,454,456,508,512,750,771,773,781,783,789,793]],
['betűk',[35,103,442,508,512]],
['számok',[35,103,442,503,508,512,526]],
['commercial',[35,103,442,745,1026,1049,1050,1051]],
['motor',[35,103]],
['vehicle',[35,103,442,508,512,611,626,628,725,1026,1102,1105]],
['letters',[35,103,442,508,512,1026,1102,1105]],
['numbers',[35,103,442,464,466,467,473,474,475,477,478,479,508,512,517,518,524,526,569,624,634,665,1026,1102,1105]],
['only',[35,103,442,454,456,508,512,583,592,606,750,771,773,781,783,789,793,1026,1102,1105]],
['a-z0-9ÖŐÜŰ',[]],
['postalcodetype',[35,104,406,410,418,423,427,1026,1075,1083,1156,1160]],
['irányítószám',[35,104,406,410,418,423,427,1026,1075,1083,1156,1160]],
['a-z0-9',[35,104,116,442,735,742,914,1011,1026,1178,1198]],
['a-z0-9\s\-',[35,104]],
['swiftcodetype',[35,116]],
['swift',[35,116]],
['kódot',[35,116]],
['leíró',[35,52,116,442,733,750,768,770,1026,1102,1106]],
['a-z2-9',[35,116]],
['a-np-z0-9',[35,116]],
['taxidentificationnumbertype',[35,117]],
['adóazonosító',[35,117,442,497,500,1026,1064,1067]],
['identification',[35,117,406,429,431,442,443,445,495,496,497,499,500,695,698,703,735,914,1000,1003,1008,1026,1027,1029,1062,1063,1064,1066,1067,1106,1110,1119,1124,1162,1164,1166,1167,1178]],
['totaldigits',[35,117,406,439,440,442,737,746,747,750,756,759,777,778,801,802,902,914,1012,1026,1189,1193,1195]],
['taxpayeridtype',[35,64,67,69,118,121,122,124,130,171,173,178,183,186,196,200,202,220,222,227,231,297,298,341,347,406,429,431,750,870,876,1026,1119,1124,1162,1164]],
['nyolc',[35,118]],
['jegyű',[35,118,1026,1179,1186]],
['törzsszám',[35,118]],
['része',[35,118,1013,1014,1017]],
['8-digit',[35,118]],
['core',[35,118,406,429,431,914,953,955,976,977,978,985,986,987,1026,1119,1124,1162,1164,1188]],
['section',[35,118,121,171,175,196,211,245,249,442,457,458,508,509,528,530,532,533,535,542,559,562,592,600,601,610,611,626,636,657,658,713,714,715,718,719,721,729,730,748,914,934,938]],
['vatcodetype',[35,120,406,429,432,1026,1162,1165]],
['--közös',[35]],
['businessresultcodetype',[35,90,121,153,157]],
['Üzleti',[]],
['eredmény',[35,47,49,60,63,90,119,121,153,157,192,195,196,268,271,272,352,355,362]],
['result',[35,44,46,47,49,54,60,63,70,90,119,121,151,153,157,164,167,187,192,195,196,227,231,268,271,272,283,284,285,289,290,295,299,307,312,348,352,355,360,362,371,373,375,377,379,381,383,385,387,389,391,750,852,853,905,1046]],
['enumeration',[35,90,96,101,119,121,392,393,394,395,396,397,398,400,401,403,404,405,406,433,434,441,442,734,738,739,740,741,743,744,745,748,749,750,889,890,891,894,896,897,899,900,901,904,905,907,909,910,912,914,1009,1010,1026,1173,1174,1177,1180,1181,1184,1192,1194,1197,1199]],
['error',[35,47,48,60,62,70,90,96,119,121,153,156,164,371,392,750,781,785,891,896,905,1026,1173]],
['hiba',[35,90,96,119,121,392,750,896,905,1026,1173]],
['warn',[35,90]],
['figyelmeztetés',[35,90]],
['info',[35,90,750,771,772,774,821,907]],
['tájékoztatás',[35,90,750,903,907]],
['information',[35,90,442,528,531,556,750,781,787,788,903,914,915,917,918,919,944,945,1013,1019,1020,1021,1022,1026,1088,1093,1094,1102,1106,1200,1247,1249]],
['entityidtype',[35,36,38,95,121,141,148,196,223,309,311,356,359,360,361,362,370]],
['azonosító',[35,95,442,466,472,517,518,636,638,735,736,750,840,843,844,1026,1178,1198]],
['a-za-z0-9',[35,95,102]],
['functioncodetype',[35,47,49,96]],
['funkciókód',[35,96]],
['function',[35,96]],
['sikeres',[35,96]],
['művelet',[35,96,121,135,136,137,138,235,239,263,265,400,1026,1119,1122,1184]],
['successful',[35,96]],
['operation',[35,54,70,71,96,121,135,136,137,138,171,176,196,212,232,234,235,239,250,253,263,265,280,283,285,287,289,291,295,297,299,303,307,309,312,327,335,348,356,358,360,361,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,396,397,403,406,438,442,583,584,750,764,767,833,836,854,864,907,909,914,928,932,944,952,1026,1119,1122,1133,1139,1184]],
['localizationtype',[35,101]],
['lokalizációt',[35,101]],
['jelölő',[35,101]],
['localization',[35,101]],
['magyar',[35,101,121,406,442,750,756,762]],
['hungarian',[35,101,442,592,601,651,652,662,663,741,914,1010]],
['angol',[35,101]],
['english',[35,101]],
['német',[35,101]],
['german',[35,101]],
['logintype',[35,64,65,102,121,131,133,141,144,362,363]],
['felhasználónév',[35,102]],
['login',[35,43,64,65,102,121,131,133,750,756,761,762]],
['requestpagetype',[35,105,121,280,282,291,294,303,305]],
['lapozó',[35,105,106]],
['paraméter',[35,105,106,121,158,161,321,324,399]],
['kérések',[35,105,121,131,134,392]],
['számára',[35,105,106,121,232,233,442,519,521]],
['page',[35,105,106,121,167,168,169,192,193,194,280,282,291,294,303,305,352,353,354,376,382,386]],
['parameter',[35,105,106,121,158,159,160,161,162,163,183,184,227,229,291,292,314,315,316,317,318,319,320,321,324,394,399]],
['requests',[35,105,121,131,134,392]],
['responsepagetype',[35,106,121,167,168,169,192,193,194,352,353,354]],
['válaszok',[35,106]],
['responses',[35,106]],
['technicalresultcodetype',[35,60,63,119]],
['technikai',[35,60,64,65,66,67,69,119,121,131,132,133,134,135,136,137,138,139,140,141,144,164,166,250,251,268,269,272,279,362,369,392,396,750,896,903,907,1026,1173]],
['technical',[35,60,64,65,66,67,69,119,121,131,132,133,134,135,136,137,138,139,140,141,144,164,166,250,251,268,269,272,279,362,369,392,396,750,751,754,755,756,757,771,775,789,793,825,896,903,907,1026,1173]],
['critical',[35,119]],
['kritikus',[35,119]],
['basicheadertype',[35,36,41,42,44,45,1026,1044]],
['kérés',[35,36,38,39,40,41,42,43,64,68,121,149,250,253,280,287,291,297,303,306,309,362,367,401,750,892,895,1026,1044]],
['tranzakcionális',[35,36,41,42,44,45]],
['transactional',[35,36,41,42,44,45,121,240,244,356]],
['request',[35,36,38,39,40,41,42,43,64,68,121,135,136,137,139,141,143,149,196,203,232,234,235,237,250,251,253,255,268,272,276,280,287,291,297,303,306,309,312,313,356,357,362,367,372,374,376,378,380,384,386,388,390,398,401,750,892,895,1026,1044]],
['requestid',[35,36,38,42,45,1044]],
['válasz',[35,36,38,39,40,44,45,71,121,151,283,285,289,295,299,301,307,312,341,348,360,750,870,1026,1046]],
['azonosítója',[35,36,38,121,141,148,196,223,309,311,327,332,356,359,360,361,362,370,402,442,443,445,750,751,752,756,760,764,765,813,814,815,816,817,818,819,820,854,860,908,914,915,916,1026,1027,1029]],
['minden',[35,36,38,54]],
['üzenetváltásnál',[35,36,38]],
['adószámonként',[35,36,38]],
['egyedi',[35,36,38,121,196,215,245,246,250,252,253,254,442,443,445,559,560,735,750,756,760,914,915,916,934,937,1026,1027,1029,1178]],
['identifier',[35,36,38,121,196,223,309,311,356,359,360,361,442,736,750,756,760,813,816,818,819,820,840,843,844,914,915,916,1026,1102,1103,1198]],
['response',[35,36,38,39,40,44,45,60,70,71,121,151,153,164,283,285,289,295,299,301,307,309,310,312,341,348,360,371,373,375,377,379,381,382,383,385,387,389,391,750,870,1026,1046]],
['unique',[35,36,38,121,196,215,245,246,250,252,253,254,442,443,445,559,560,735,750,756,760,914,915,916,934,937,1026,1027,1029,1178]],
['taxnumber',[35,36,38,43,64,69,121,122,130,183,186,241,281,297,298,384,834,837,929,933,1026,1135,1140,1166,1168]],
['every',[35,36,38,54,70,71]],
['exchange',[35,36,38,121,122,129,141,146,147,171,177,196,198,219,223,256,257,268,270,309,311,348,349,350,351,356,359,362,366,368,396,397,404,406,441,442,450,451,454,456,528,529,533,538,589,591,737,914,915,1026,1097,1101,1189]],
['transaction',[35,36,38,121,141,148,196,223,250,252,253,254,303,304,307,308,309,311,352,355,356,359,360,361,362,369,370,1026,1192,1200,1213,1237]],
['keletkezésének',[35,36,40]],
['requestversion',[35,36,39,42,45,121,141,146,171,177,268,270,362,366,398,1044]],
['hogy',[35,36,39,121,245,248,299,302,442,559,561,657,661,750,821,823]],
['hívó',[35,36,39]],
['melyik',[35,36,39]],
['interfész',[35,36,39,442,592,617,1026,1144,1149,1150,1155]],
['küld',[35,36,39,1026,1181,1199]],
['adatot',[35,36,39,750,771,773,776]],
['várja',[35,36,39]],
['választ',[35,36,39]],
['indicating',[35,36,39,442,657,661]],
['which',[35,36,39,121,196,216,245,248,249,256,259,263,265,299,300,442,495,497,499,559,561,562,583,584,750,808,810,811,914,934,938,1013,1019,1020,1021,1022]],
['datastructure',[35,36,39]],
['client',[35,36,39,121,309,310,392]],
['sends',[35,36,39]],
['expected',[35,36,39]],
['headerversion',[35,36,37,42,45,1044]],
['header',[35,36,37,41,42,44,45,54,70,149,151,164,250,253,280,283,285,287,289,291,295,297,299,303,307,309,312,348,360,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,442,551,914,928,1046,1200,1201,1205,1208,1210,1213,1238,1250,1261,1269,1273]],
['basicrequesttype',[35,41,121,149]],
['alap',[35,41,44,46,47,1026,1144,1150]],
['adatok',[35,41,44,46,47,121,137,140,149,151,153,155,171,179,180,187,191,235,238,263,272,278,299,300,442,447,449,450,466,513,533,536,551,554,563,564,567,568,571,572,573,574,576,580,586,592,593,594,596,597,598,604,609,621,648,650,651,657,660,662,671,673,674,675,707,710,722,750,914,915,919,924,928,931,939,940,943,953,954,956,962,966,1013,1014,1017,1019,1020,1021,1022,1023,1026,1044,1046,1088,1102,1106,1144,1145,1146,1148,1150,1151,1152,1154,1200,1247,1248,1249,1264,1269,1272]],
['basic',[35,41,44,46,47,121,149,151,1026,1044,1046]],
['user',[35,41,43,64,65,66,67,69,121,131,133,141,144,149,250,253,280,287,291,297,303,309,362,363,372,374,376,378,380,382,384,386,388,390,1026,1173]],
['userheadertype',[35,41,43,64]],
['authentikációs',[35,41,43,64,750,907]],
['authentication',[35,41,43,64,750,894]],
['basicresponsetype',[35,44,54,121,151,1026,1046]],
['basicresulttype',[35,44,46,47,71]],
['válaszeredmény',[35,44,46,47]],
['funccode',[35,46,47,49,71]],
['feldolgozási',[35,47,48,49,50,60,61,121,153,154,155,232,233,263,268,271,272,277,303,306,312,313,362,367,395,401]],
['processing',[35,47,48,49,50,60,61,121,153,154,155,232,233,256,257,263,268,271,272,277,303,306,312,313,362,367,395,401,442,466,533,536,592,598]],
['errorcode',[35,46,47,48,71]],
['hibakód',[35,47,48,60,62,121,153,156]],
['message',[35,46,47,50,60,61,71,121,153,154,166,274,279,750,896,903]],
['üzenet',[35,47,50,60,61,121,153,154,750,789,800,896,903]],
['notifications',[35,46,47,51,55,71]],
['notificationstype',[35,47,51,55]],
['egyéb',[35,47,51,55,406,441,442,466,533,534,536,592,598,619,636,638,734,738,741,745,750,756,762,896,909,914,976,978,1009,1010,1013,1014,1015,1019,1020,1021,1022,1026,1031,1032,1033,1034,1035,1036,1088,1089,1090,1112,1117,1125,1126,1133,1134,1173,1174,1177,1180,1181,1183,1194,1197,1199,1200,1213,1223,1226,1241,1246,1247,1249,1264,1265,1266,1267,1268,1269,1270,1271]],
['értesítések',[35,47,51,55]],
['miscellaneous',[35,47,51,55]],
['cryptotype',[35,52,53,64,66,68,121,187,190,235,236,750,821,823,1026,1119,1123,1144,1147,1150,1153]],
['kriptográfiai',[35,52]],
['metódust',[35,52]],
['denoting',[35,52]],
['cryptographic',[35,52]],
['method',[35,52,121,122,128,196,218,406,441,442,533,546,750,764,767,801,803,808,809,854,864,1026,1119,1122,1130,1132,1197]],
['simplecontent',[35,52]],
['attribute',[35,52,53]],
['required',[35,52,53,66,68,190,236,823,1026,1046,1048,1123,1147,1153]],
['generalerrorheaderresponsetype',[35,54,70,121,164]],
['hibatípus',[35,54]],
['rest',[35,54,70,71,121,250,253,280,283,285,287,289,291,295,297,299,303,307,309,312,348,360,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391]],
['operációra',[35,54,70,71]],
['fault',[35,54]],
['notification',[35,51,55,56,57,58,59]],
['notificationtype',[35,55,56,57]],
['unbounded',[35,51,55,56,121,164,166,167,170,181,192,195,224,226,268,271,272,274,279,284,296,308,313,339,340,344,352,355,371,442,464,465,467,468,469,470,471,472,473,474,475,476,477,478,479,480,481,482,483,484,485,501,502,503,504,517,518,524,525,526,527,531,533,534,554,556,557,565,567,568,569,570,589,590,592,595,609,613,616,624,625,634,635,642,643,657,660,665,666,667,668,669,670,679,684,689,690,691,693,694]],
['Értesítés',[]],
['notificationcode',[35,56,57,58]],
['notificationtext',[35,56,57,59]],
['text',[35,57,59,442,505,507]],
['technicalvalidationresulttype',[35,60,121,164,166,272,279]],
['validációs',[35,60,62,63,121,153,156,157,164,166,272,274,279]],
['választípus',[35,60,121,153]],
['validation',[35,60,62,63,121,153,156,157,164,166,272,274,279,750,833,835,886,888]],
['validationresultcode',[35,60,63,121,153,157,166,274,279]],
['validationerrorcode',[35,60,62,121,153,156,166,274,279]],
['felhasználó',[35,64,65,66,67,69,121,131,133,141,144,362,363]],
['passwordhash',[35,43,64,66]],
['jelszavának',[35,64,66]],
['hash',[35,64,66,68,121,187,190,235,236,750,821,823,1026,1119,1123,1144,1147,1150,1153]],
['password',[35,64,66]],
['rendszerben',[35,64,69,121,285,286,406,435,436,437,438]],
['regisztrált',[35,64,69]],
['adózó',[35,64,69,121,297,298,299,301,302,336,337,341,345,346,347,750,833,834,837,865,866,870,874,875,876,914,928,929,933,1026,1097,1101,1133,1135,1140,1166,1168,1169,1170]],
['adószáma',[35,64,67,69,121,122,124,130,171,173,178,183,186,196,202,222,227,231,285,286,297,298,327,331,442,495,496,519,523,636,641,695,698,750,854,858,914,1000,1003,1026,1062,1063,1166,1168]],
['nevében',[35,64,67,69]],
['tevékenykedik',[35,64,67,69]],
['taxpayer',[35,64,67,69,121,297,298,299,301,302,336,337,338,339,340,341,344,345,346,347,405,406,429,432,750,796,833,835,837,852,865,866,867,868,869,870,873,874,875,876,907,910,914,928,933,940,1026,1133,1140,1162,1165,1205,1210,1238,1261,1273]],
['whose',[35,64,67,69]],
['operates',[35,64,67,69]],
['predecessortaxnumber',[35,43,64,67]],
['jogelőd',[35,64,67]],
['requestsignature',[35,43,64,68]],
['aláírásának',[35,64,68]],
['--Általános',[]],
['responses--',[35]],
['generalerrorheaderresponse',[35,70]],
['összes',[35,70,71]],
['vonatkozó',[35,70,71,121,196,215,245,246,442,454,533,534,559,560,592,609,614,648,750,789,800,914,934,937,1013,1019,1020,1021,1022,1026,1031,1033,1034,1035,1036,1088,1089,1090]],
['hibaválasz',[35,70,121,164,371]],
['generikus',[35,70,71]],
['elementje',[35,70,71,121,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,442,733]],
['general',[35,70,71,121,164,371,442,466,473,524,525,1200,1201,1205,1208,1210,1213,1238,1250,1261,1269,1273]],
['generalexceptionresponse',[35,71]],
['kivétel',[35,71,442,457,458,505,729,730]],
['exception',[35,71]],
['online',[121,149,151,164,327,335,371,403,404,406,435,436,437,438,442,750,764,767,854,864,909]],
['rendszer',[121,406,442,750,801,802,903,914,1026,1044,1046,1197]],
['invoiceapi',[121,442,733]],
['invoicebase',[121,406,442]],
['annulmentverificationstatustype',[121,131,134,392]],
['érvénytelenítő',[121,131,134,135,136,137,392]],
['jóváhagyási',[121,131,134,392]],
['státusza',[121,131,134,272,277,303,306,312,313,362,367,392,395,401,442,489,494,750,840,847,1026,1056,1061]],
['verification',[121,131,132,133,134,392,750,781,787,788,854,859]],
['status',[121,131,134,268,269,272,277,303,306,312,313,362,367,392,395,401,442,489,494,734,750,781,840,847,907,1026,1056,1061,1177]],
['annulment',[121,131,132,133,134,135,136,137,138,139,140,250,251,268,269,362,369,392,396]],
['verifiable',[121,392]],
['érvénytelenítés',[121,131,132,137,138,139,140,179,182,245,268,269,392,396,442,559,563,566,914,934,939,942,1200,1213,1218,1219,1230,1234]],
['kliens',[121,309,310,392]],
['miatt',[121,392,442,589,591,750,896]],
['hagyható',[121,392]],
['jóvá',[121,392]],
['pending',[121,392]],
['jóváhagyásra',[121,392]],
['awaiting',[121,392]],
['done',[121,392,395,442,495,496,497,499,695,698,914,1000,1003,1026,1062,1063]],
['került',[121,141,148,392,750,771,776]],
['been',[121,392,750,771,776]],
['verified',[121,392]],
['rejected',[121,392]],
['elutasításra',[121,392]],
['incorporationtype',[121,341,342,393,750,870,871,900]],
['gazdasági',[121,341,342,393,750,870,871,900]],
['incorporation',[121,301,341,342,393,750,870,871,900]],
['organization',[121,393,750,900]],
['társaság',[121,393,750,900]],
['economical',[121,393,750,900]],
['company',[121,393,442,466,469,481,484,485,693,694,750,900]],
['self',[121,393,750,900]],
['employed',[121,393,750,900]],
['egyéni',[121,393,750,900]],
['vállalkozó',[121,393,750,900]],
['private',[121,393,442,734,750,900,1026,1177]],
['entrepreneur',[121,393,750,900]],
['taxable',[121,393,406,429,431,442,592,610,750,900,1026,1119,1124,1162,1164]],
['person',[121,393,406,429,431,442,592,610,734,750,900,1026,1119,1124,1162,1164,1177]],
['adószámos',[121,393,750,900]],
['magánszemély',[121,393,750,900]],
['invoicedirectiontype',[121,183,184,227,229,291,292,394]],
['kimenő',[121,183,184,227,229,291,292,394]],
['bejövő',[121,183,184,227,229,291,292,394]],
['keresési',[121,122,124,127,130,183,184,186,227,229,291,292,394,750,852,853]],
['paramétere',[121,158,159,160,161,162,163,183,184,227,229,280,281,287,288,291,292,314,315,316,317,318,319,320,394]],
['inbound',[121,183,184,227,229,291,292,394]],
['outbound',[121,183,184,227,229,291,292,394]],
['query',[121,122,127,158,161,167,168,183,184,187,192,193,195,196,227,229,231,240,241,242,243,244,256,280,281,283,284,287,288,289,290,291,292,293,295,296,299,301,307,308,314,315,316,317,318,319,320,321,322,323,324,325,326,341,352,353,355,356,362,394,399,750,870,905,907]],
['vevő',[121,171,173,196,200,201,202,227,231,394,442,466,469,484,485,486,489,490,491,492,493,494,497,551,552,648,649,662,663,734,748,914,928,930,1026,1056,1057,1058,1059,1060,1061,1064,1088,1106,1110,1177,1200,1201,1207,1247,1249]],
['oldali',[121,227,231,303,304,394]],
['side',[121,303,304,394]],
['kiállító',[121,394]],
['invoicestatustype',[121,272,277,395]],
['received',[121,395,401,750,789,792,813]],
['befogadva',[121,395,401]],
['feldolgozás',[121,395,401]],
['alatt',[121,395,401,442,495,496,497,499,695,698,914,1000,1003,1026,1062,1063]],
['saved',[121,395,401]],
['elmentve',[121,395,401]],
['kész',[121,395,750,905]],
['aborted',[121,395]],
['kihagyva',[121,395]],
['manageannulmentoperationtype',[121,137,138,396]],
['műveleti',[121,396]],
['annul',[121,396]],
['korábbi',[121,396]],
['adatszolgáltatás',[121,122,129,141,146,147,171,177,196,198,219,223,245,248,256,257,268,270,309,311,356,359,362,365,366,368,396,397,404,442,528,529,559,561,583,589,591,592,606,750,771,772,774,914,915,1026,1093]],
['érvénytelenítése',[121,396,1026,1184]],
['previous',[121,396,750,771,772,774]],
['manageinvoiceoperationtype',[121,171,176,196,212,235,239,356,358,397]],
['számlaművelet',[121,171,176,196,212,232,234,235,356,358,397]],
['create',[121,397,442,583,584,739,1026,1184]],
['eredeti',[121,196,216,245,249,256,259,263,265,309,310,397,442,533,541,559,562,583,584,914,924,926,934,938,1026,1184]],
['számláról',[121,397]],
['modify',[121,397,442,739,1026,1184]],
['számlát',[121,397]],
['okiratról',[121,397]],
['storno',[121,397,1026,1184]],
['érvénytelenítéséről',[121,397]],
['concerning',[121,397,442,563,564,914,939,940]],
['invalidation',[121,397]],
['originalrequestversiontype',[121,141,146,171,177,268,270,362,366,398]],
['lekérdezett',[121,167,169,192,194,285,286,297,298,299,302,352,354,398]],
['queried',[121,167,169,192,194,280,282,285,286,291,294,297,298,299,302,303,304,305,352,354,398]],
['querynametype',[121,122,127,399]],
['kereső',[121,158,161,314,315,316,317,318,319,320,321,322,323,324,325,326,399]],
['queryoperatortype',[121,321,322,324,325,400]],
['relációs',[121,240,243,314,400]],
['relational',[121,240,243,314,400]],
['operator',[121,321,322,324,325,400,750,789,796,801,803,813,815,818,907]],
['egyenlőség',[121,400]],
['equals',[121,158,159,160,161,162,163,400]],
['nagyobb',[121,158,159,161,162,400]],
['mint',[121,400]],
['reláció',[121,400]],
['greater',[121,158,159,161,162,400]],
['than',[121,227,231,400,442,533,538,1013,1019,1022,1200,1247,1249]],
['relation',[121,400,442,533,534,592,595,604,626,628,725,914,962,963,1026,1031,1032,1133,1134]],
['egyenlő',[121,158,159,160,161,162,163,400]],
['kisebb',[121,158,160,161,163,400,750,808,810]],
['less',[121,158,160,161,163,400]],
['requeststatustype',[121,303,306,362,367,401]],
['finished',[121,401]],
['befejezve',[121,401]],
['notified',[121,401]],
['lekérdezve',[121,401]],
['softwareidtype',[121,327,332,402,750,764,765,854,860,908]],
['számlázóprogram',[121,149,150,151,152,164,165,327,328,329,330,331,332,333,334,335,402,403]],
['billing',[121,149,150,151,152,164,165,327,328,329,330,331,332,333,334,335,402,403]],
['software',[121,149,150,151,152,164,165,250,253,280,283,285,287,289,291,295,297,299,303,307,309,312,327,328,329,330,331,332,333,334,335,348,360,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,402,403,406,433,750,764,765,766,767,789,790,813,816,819,821,822,823,825,828,832,854,855,856,857,858,859,860,861,862,863,864,907,908,909]],
['0-9a-z\-',[121,402,750,908]],
['softwareoperationtype',[121,327,335,403,750,764,767,854,864,909]],
['működési',[121,327,335,403,750,764,767,854,864,909]],
['lokális',[121,327,335,403]],
['program',[121,327,335,403,750,764,765,766,767,854,855,856,857,858,860,862,863,864,908]],
['számlázó',[121,327,335,403,404]],
['szolgáltatás',[121,327,335,403,442,495,496,497,499,533,547,589,590,592,595,602,603,607,695,698,738,741,750,764,767,808,811,812,854,864,907,909,913,914,960,961,962,963,967,968,1000,1003,1009,1010,1026,1062,1063]],
['local',[121,327,335,403]],
['service',[121,179,181,224,327,335,403,442,508,509,563,565,589,590,592,595,602,603,626,632,644,685,686,687,707,708,709,710,711,712,722,723,724,738,741,750,756,762,801,803,807,808,811,812,907,909,913,914,939,941,960,961,962,963,967,981,988,990,991,1009,1010,1026,1192]],
['sourcetype',[121,122,129,141,147,196,219,362,368,404]],
['forrása',[121,122,129,141,147,196,219,362,368,404]],
['source',[121,122,129,141,147,188,195,196,219,241,355,362,368,404]],
['webes',[121,404]],
['kézi',[121,404]],
['feltöltés',[121,404]],
['manual',[121,404]],
['upload',[121,404]],
['gép-gép',[121,404]],
['adatkapcsolati',[121,404]],
['machine-to-machine',[121,404]],
['pénztárgépes',[121,404]],
['register',[121,404,750,768,771,772,773,774,775,776,777,778,779,780,781,783,784,785,787,789,790,791,792,793,794,795,796,808,811,813,816,819,825,829,830,833,834,835,836,837,886,888,891,896,903,907,909,913,914,928,929,932,933,944,951,952,1026,1044,1045,1046,1047,1093,1096,1119,1120,1133,1135,1138,1139,1140,1181,1199,1200,1208,1213,1241,1243,1244,1250,1251]],
['invoicing',[121,404]],
['taxpayeraddresstypetype',[121,336,338,405]],
['adózói',[121,336,338,339,340,341,344,405,750,833,835,852,865,867,868,869,870,873,907,910]],
['address',[121,336,337,338,339,340,341,344,405,406,407,408,409,410,423,424,442,489,490,519,520,636,639,695,700,750,852,865,866,867,868,869,870,873,910,914,1000,1005,1026,1038,1039,1040,1056,1057,1075,1106,1107,1156,1157]],
['székhely',[121,405,750,910]],
['headquarter',[121,405,750,910]],
['site',[121,405,750,789,796,813,815,818,833,835,907,910]],
['telephely',[121,405,750,910]],
['office',[121,405,750,910]],
['branch',[121,405,750,910]],
['fióktelep',[121,405,750,910]],
['additionalqueryparamstype',[121,122,240,241]],
['lekérdezés',[121,122,167,168,183,187,192,193,227,231,240,241,242,243,244,256,280,281,283,284,287,288,289,290,295,296,299,301,314,341,352,353,356,750,870,905,907]],
['kiegészítő',[121,122,240,241,1026,1187]],
['paraméterei',[121,122,240,241,242,243,244,256,314,356,750,806,807]],
['additional',[121,122,240,241,442,443,914,924,925,1013,1019,1020,1021,1022,1025,1026,1027,1035,1187,1200,1247,1249,1276]],
['params',[121,122,158,161,240,241,242,243,244,256,314,356]],
['kiállítójának',[121,122,124,127,130,183,186,227,231]],
['vevőjének',[121,122,124,127,130,183,186]],
['feltétel',[121,122,124,127,130,183,186]],
['invoicedirection',[121,122,124,127,130,183,184,186,227,229,281,288,291,292,382]],
['értékétől',[121,122,124,127,130,183,186]],
['függ',[121,122,124,127,130,183,186]],
['criteria',[121,122,124,127,130,183,186,750,852,853]],
['depends',[121,122,124,127,130,183,186]],
['groupmembertaxnumber',[121,122,124,241,442,495,496,499,555,695,698,914,1000,1003,1026,1062,1063,1066]],
['csoport',[121,122,124,341,347,442,495,496,695,698,750,870,876,914,1000,1003,1026,1062,1063]],
['group',[121,122,124,196,200,220,341,347,406,429,431,442,495,496,497,499,695,698,703,750,870,876,914,1000,1003,1008,1026,1062,1063,1064,1066,1070,1072,1119,1124,1162,1164,1166,1167,1168]],
['member',[121,122,124,442,495,496,695,698,914,1000,1003,1026,1062,1063,1106,1110,1166,1168]],
['keresőparamétere',[121,122,127]],
['eleji',[121,122,127]],
['egyezőségre',[121,122,127]],
['param',[121,122,127,183,227,280,281,287,288]],
['leading',[121,122,127,750,756,758,1200,1250,1251]],
['match',[121,122,127,750,852,853]],
['invoicecategory',[121,122,126,195,196,206,241,442,533,541,554]],
['invoicecategorytype',[121,122,126,196,206,406,434,442,533,541]],
['paymentmethod',[121,122,128,195,196,218,241,442,533,546,554]],
['paymentmethodtype',[121,122,128,196,218,406,441,442,533,546,1026,1130,1132,1197]],
['fizetés',[121,122,128,196,218,406,441,442,533,546,1026,1130,1131,1132,1197]],
['módja',[121,122,128,196,218,406,441,442,533,546,750,801,803,1026,1119,1122,1130,1132]],
['payment',[121,122,128,196,217,218,314,320,406,441,442,447,449,450,452,453,533,545,546,914,924,927,1026,1112,1113,1117,1125,1126,1127,1128,1129,1130,1131,1132,1174,1197,1200,1201,1204]],
['invoiceappearance',[121,122,125,195,196,205,241,442,533,540,554]],
['invoiceappearancetype',[121,122,125,196,205,406,433,442,533,540]],
['megjelenési',[121,122,125,196,205,406,433,442,533,540]],
['formája',[121,122,125,196,205,406,433,442,533,540]],
['form',[121,122,125,137,140,187,191,196,205,235,238,272,278,348,349,406,433,442,533,540,914,953,954,1026,1144,1145,1146,1148,1150,1151,1152,1154]],
['appearance',[121,122,125,196,205,406,433,442,533,540]],
['pénzneme',[121,122,123,196,199,442,533,537]],
['annulmentdatatype',[121,131,268,269]],
['státusz',[121,131,268,269,442,734,750,897,1026,1177]],
['annulmentverificationstatus',[121,131,134,269]],
['annulmentdecisiondate',[121,131,132,269]],
['invoicetimestamptype',[121,131,132,141,145,161,162,163,171,174,196,204,245,247,348,350,351,362,364,406,437]],
['jóváhagyásának',[121,131,132]],
['elutasításának',[121,131,132]],
['időben',[121,131,132,141,145,171,174,196,204,245,247,303,304,362,364]],
['rejection',[121,131,132,133]],
['annulmentdecisionuser',[121,131,133,269]],
['érvénytelenítést',[121,131,133,362,369]],
['jóváhagyó',[121,131,133]],
['elutasító',[121,131,133]],
['deciding',[121,131,133]],
['over',[121,131,133,442,662,663,748,750,801,802]],
['annulmentoperationlisttype',[121,135,250,251]],
['kéréshez',[121,135,136,137,232,234,235,250,251,253,255,268]],
['tartozó',[121,135,136,137,232,234,235,250,251,253,255,268,442,454,456,513,515,516,592,604,671,673,674,675,685,686,687,707,708,709,710,711,712,722,723,724,750,879,881,914,988,990,991,1013,1014,1017,1019,1020,1021,1022,1026,1051,1053,1054,1055,1200,1247,1249]],
['kötegelt',[121,135,232,250,251,253,255,263,265,406,438,442,461,556,557]],
['érvénytelenítések',[121,135,250,251,1200,1250,1253,1256,1259]],
['batch',[121,135,141,142,171,172,196,197,227,228,232,250,251,253,255,263,265,272,273,406,438,442,461,462,556,557]],
['operations',[121,135,232,250,251,253,255]],
['annulmentoperation',[121,135,136,137,138,251]],
['annulmentoperationtype',[121,135,136,137]],
['index',[121,136,137,139,141,143,188,195,196,203,234,235,237,244,271,272,276,356,357,406,436,438,1026,1185]],
['invoiceindextype',[121,137,139,141,143,196,203,235,237,272,276,356,357,362,365,406,436]],
['kérésen',[121,137,139,141,143,196,203,235,237,272,276,356,357]],
['belül',[121,137,139,141,142,143,171,172,196,197,203,227,228,235,237,272,273,276,356,357,442,461,462,914,944,951,1026,1093,1096,1133,1138]],
['within',[121,137,139,141,142,143,171,172,196,197,203,227,228,235,237,272,273,276,356,357,442,461,462,914,944,951,1026,1093,1096,1133,1138]],
['kért',[121,137,138,235,239,360,361]],
['desired',[121,137,138,235,239]],
['invoiceannulment',[121,136,137,140]],
['base64-ben',[121,137,140,187,191,235,238,272,278,914,953,954,1026,1144,1145,1146,1148,1150,1151,1152,1154]],
['kódolt',[121,137,140,187,191,235,238,272,278,348,349,914,953,954,1026,1144,1145,1146,1148,1150,1151,1152,1154]],
['tartalma',[121,137,140,187,191,235,238,272,278,914,953,954,1026,1144,1145,1146,1150,1151,1152]],
['encoded',[121,137,140,187,191,235,238,272,278,348,349,914,953,954,1026,1144,1145,1146,1148,1150,1151,1152,1154]],
['auditdatatype',[121,141,187,188]],
['audit',[121,141,187,188]],
['insdate',[121,141,145,171,174,180,188,195,196,204,242,256,257,303,304,355,362,364,386]],
['beszúrás',[121,141,145,171,174,196,204,362,364]],
['insert',[121,141,145,171,174,196,204,303,304,362,364]],
['inscususer',[121,141,144,188,355,362,363]],
['beszúrást',[121,141,144,362,363]],
['végző',[121,141,144,362,363]],
['inserting',[121,141,144,362,363]],
['transactionid',[121,141,148,188,195,196,223,244,309,311,355,356,359,360,361,362,370,373,375,388]],
['tranzakció',[121,141,148,196,223,307,308,309,311,352,355,356,359,360,361,362,369,370,1026,1192]],
['gépi',[121,141,148,442,508,509]],
['interfészen',[121,141,148,750,903,1013,1200]],
['beküldésre',[121,141,148]],
['exchanged',[121,141,148,245,248,442,559,561]],
['interface',[121,141,148,442,592,617,750,903,1013,1026,1144,1149,1150,1155,1200]],
['batchindex',[121,141,142,171,172,180,188,195,196,197,227,228,271,272,273,288,442,461,462,557]],
['invoiceunboundedindextype',[121,141,142,171,172,196,197,215,227,228,245,246,272,273,406,438,442,461,462,559,560]],
['kötegen',[121,141,142,171,172,196,197,227,228,272,273,442,461,462]],
['originalrequestversion',[121,141,146,171,177,180,188,268,270,313,355,362,366]],
['basiconlineinvoicerequesttype',[121,149,250,253,280,287,291,297,303,309,390]],
['rendszerre',[121,149,151,164,371]],
['specifikus',[121,149,151,164,371,1026,1044,1046]],
['általános',[35,54,97,98,99,100,121,149,151,164,371,1026,1044,1046,1200,1201,1205,1208,1210,1213,1238,1250,1261,1269,1273]],
['specific',[121,149,151,164,371,442,533,547,1026,1035,1036,1044,1046]],
['softwaretype',[121,149,150,151,152,164,165,327,750,789,790,825,828,854]],
['basiconlineinvoiceresponsetype',[121,151,283,285,289,295,299,307,312,348,360]],
['businessvalidationresulttype',[121,153,272,274]],
['pointer',[121,153,155,274]],
['pointertype',[121,153,155,263]],
['kurzor',[121,153,155,263]],
['cursor',[121,153,155,263]],
['dateintervalparamtype',[121,158,256,258]],
['dátumos',[121,158]],
['datefrom',[121,158,159,258]],
['invoicedatetype',[121,158,159,160,196,207,208,217,321,323,406,435,442,450,453,454,455,508,510,528,530,533,539,542,543,544,545,626,632,636,637]],
['intervallum',[121,158,159,160,161,162,163,260,261,262]],
['interval',[121,158,159,160,161,162,163,260,261,262,750,801,802]],
['dateto',[121,158,160,258]],
['datetimeintervalparamtype',[121,161,256,257,303,304]],
['időpontos',[121,161,162,163]],
['datestamp',[121,161]],
['datetimefrom',[121,161,162,257,304]],
['datetimeto',[121,161,163,257,304]],
['generalerrorresponsetype',[121,164,371]],
['technicalvalidationmessages',[121,164,166,271,272,279,371]],
['üzenetek',[121,164,166,272,274,279,750,789,799,1200]],
['messages',[121,164,166,272,274,279,1200]],
['invoicechaindigestresulttype',[121,167,283,284]],
['számlalánc',[121,167,170,171,179,180,183,280,281,283,284]],
['kivonat',[121,167,171,179,180,183,192,195,280,281,283,284,295,296]],
['eredményei',[121,167,283,284,295,296,307,308,352]],
['chain',[121,167,170,171,179,180,183,280,281,283,284]],
['digest',[121,167,171,179,180,181,183,192,195,196,224,280,281,283,284,295,296]],
['currentpage',[121,167,169,192,194,284,296,308,352,354]],
['jelenleg',[121,167,169,192,194,352,354]],
['lapszám',[121,167,168,169,192,193,194,352,353,354]],
['currently',[121,167,169,192,194,352,354]],
['count',[121,167,168,169,192,193,194,280,282,291,294,303,305,352,353,354,362,365,1026,1069,1070,1073,1255,1256,1257]],
['availablepage',[121,167,168,192,193,284,296,308,352,353]],
['eredménye',[121,167,168,187,192,193,289,290,352,353,750,905]],
['elérhető',[121,167,168,192,193,352,353]],
['utolsó',[121,167,168,192,193,299,300,352,353,442,533,539,543,750,771,772,774,781,785]],
['highest',[121,167,168,192,193,224,225,352,353]],
['available',[121,167,168,192,193,352,353]],
['matching',[121,167,168,192,193,352,353]],
['invoicechainelement',[121,167,170,284]],
['invoicechainelementtype',[121,167,170,179]],
['invoicechaindigesttype',[121,171,179,180]],
['invoicenumber',[121,171,175,180,183,185,195,196,211,227,230,281,288,442,528,532,733]],
['pont',[121,171,175,196,211,442,528,532]],
['invoiceoperation',[121,171,176,180,195,196,212,232,234,235,239,244,255,356,358]],
['suppliertaxnumber',[121,171,178,180,195,196,222,227,231,288,442,555,695,703,914,1000,1008]],
['kibocsátó',[121,171,178,196,220,222,442,519,521,551,555]],
['customertaxnumber',[121,171,173,180,195,196,202,442,493,497,499,1026,1060,1064,1066]],
['buyer',[121,171,173,196,200,202,442,748,1013,1019,1020,1021,1022,1200,1247,1249]],
['invoicechaindigest',[121,170,179,180]],
['invoicelines',[121,170,179,181,442,463,558,563,565]],
['invoicelinestype',[121,179,181,224]],
['számlán',[121,179,181,196,198,224,285,286,442,495,497,499,528,529,533,535,542,563,565,592,617,618]],
['okiraton',[121,179,181,224]],
['szereplő',[121,179,181,224,312,313,442,495,497,499,563,565,592,617,618,914,939,941,944,947,950,962,972,973,992,995,996,997,1013,1019,1021,1022,1026,1031,1032,1133,1134,1137,1196,1200,1247,1249,1264,1265,1266,1267,1268,1269,1272]],
['tételek',[121,179,181,224,442,563,565,589,592,914,939,941,960,962,1026,1051,1053,1054,1055]],
['kivonatos',[121,179,181,196,224]],
['product',[121,179,181,224,442,486,487,488,563,565,568,589,590,592,595,603,609,610,612,613,614,626,630,633,636,642,643,644,645,646,647,648,649,650,651,652,653,655,656,657,658,659,660,661,662,663,738,741,742,744,745,748,750,840,844,846,847,907,914,939,941,960,961,962,963,967,970,979,980,981,982,983,984,1009,1010,1011,1026,1173,1192]],
['appearing',[121,179,181,224,442,563,565,914,939,941]],
['invoicereferencedata',[121,170,179,182]],
['invoicereferencedatatype',[121,179,182,245]],
['módosítás',[121,179,182,196,216,245,248,249,256,259,263,265,442,559,561,562,563,566,583,592,606,733,739,914,934,936,938,939,942,1200,1213,1231,1235]],
['cancellation',[121,179,182,245,442,559,563,566,914,934,935,939,942,1026,1173,1184,1192,1200,1213,1218,1219,1230,1234,1250,1253,1256,1259]],
['invoicechainquerytype',[121,183,280,281]],
['számlaszám',[121,183,227,280,281,285,286,287,288,442,466,473,524,525]],
['invoicedataresulttype',[121,187,289,290]],
['számlaszámra',[121,187]],
['történő',[121,187,442,508,583,592,600,606,657,661,1013,1014,1017]],
['based',[121,187,442,486,648,649,750,781,783,789,793]],
['auditdata',[121,187,188,290]],
['compressedcontentindicator',[121,187,189,271,272,275,290]],
['boolean',[121,187,189,196,198,232,233,245,248,272,275,285,286,299,302,309,310,362,369,442,447,448,457,458,528,529,533,535,547,548,549,550,559,561,589,591,592,599,602,605,610,612,695,699,713,715,718,729,730,914,1000,1004,1026,1046,1048]],
['jelöli',[121,187,189,196,198,272,275,285,286,309,310,362,369,442,528,529,589,591]],
['tartalmát',[121,187,189,272,275]],
['dekódolást',[121,187,189,272,275]],
['követően',[121,187,189,272,275,750,886,888,903]],
['kell',[121,187,189,272,275,309,310,406,410,418,423,427,750,771,772,773,776,781,783,789,793,808,810,811,886,888,903,1026,1075,1083,1156,1160]],
['tömöríteni',[121,187,189,272,275]],
['olvasáshoz',[121,187,189,272,275]],
['indicates',[121,187,189,196,198,245,248,272,275,285,286,299,302,309,310,362,369,442,528,529,533,547,559,561,589,591]],
['content',[121,187,189,232,233,272,275,442,443,444,592,609,704,706,713,717,750,879,881,1026,1027,1028,1144,1149,1150,1155]],
['needs',[121,187,189,272,275]],
['decompressed',[121,187,189,272,275]],
['read',[121,187,189,272,275]],
['following',[121,187,189,272,275]],
['decoding',[121,187,189,272,275]],
['electronicinvoicehash',[121,187,190,234,235,236,290,955,977,986,1026,1119,1123]],
['elektronikus',[121,187,190,235,236,327,328,406,433,750,854,855,1026,1119,1123]],
['lenyomata',[121,187,190,235,236,1026,1119,1123,1144,1147,1150,1153]],
['electronic',[121,187,190,235,236,327,328,406,433,442,517,518,745,750,854,855,1026,1119,1123]],
['file',[121,187,190,235,236,750,821,824,907,1026,1041,1042,1088,1091,1119,1123,1144,1147,1150,1153,1190,1191]],
['invoicedigestresulttype',[121,192,295,296]],
['lekérdezési',[121,192,195,196,240,291,293,307,308,352,355,362]],
['eredmények',[121,192,268]],
['results',[121,192,268,295,296,307,308,352]],
['invoicedigest',[121,192,195,296]],
['invoicedigesttype',[121,192,195,196]],
['invoiceissuedate',[121,195,196,208,242,256,258,442,528,530,733]],
['kiállításának',[121,196,208,256,258]],
['dátuma',[121,196,207,208,442,450,453,454,455,508,510,533,539,542,1026,1070,1074]],
['issue',[121,196,208,256,258,406,433,442,528,530,636,637,914,915,920]],
['suppliergroupmembertaxnumber',[121,195,196,220]],
['csoporttag',[121,196,200,220]],
['customergroupmembertaxnumber',[121,195,196,200]],
['customername',[121,195,196,201,442,489,492,552,930,1026,1056,1059]],
['paymentdate',[121,195,196,217,243,314,320,442,533,545,554]],
['fizetési',[121,196,217,314,320,442,533,545,592,612,1026,1130,1131,1132,1197]],
['határidő',[121,196,217,442,533,545]],
['deadline',[121,196,217,442,533,545]],
['invoicedeliverydate',[121,195,196,207,442,533,542,554]],
['teljesítési',[121,196,207,314,315,442,454,455,1026,1070,1074]],
['delivery',[121,196,207,314,315,442,454,455,466,471,503,504,533,542,543,544,707,708,709,710,711,712,722,723,724]],
['invoicenetamount',[121,195,196,209,243,314,316,442,679,680,690]],
['nettó',[121,196,209,210,314,316,317,442,571,573,586,587,588,592,619,671,674,679,680,681,710,711,712,1026,1051,1054]],
['összege',[121,196,209,210,213,214,442,513,516,586,587,588,621,622,623,651,652,662,663,676,677,678,679,680,681,682,683,685,686,687,707,708,709,710,711,712,722,723,724,914,944,947,988,990,991,992,993,994,995,1026,1070,1071,1097,1098,1130,1131,1200,1201,1203,1207,1213,1214,1218,1219,1220,1221,1223,1225,1226,1227,1229,1230,1231,1232,1234,1235,1236,1240]],
['pénznemében',[121,196,209,213,314,316,318,442,513,516,576,577,580,581,586,587,592,619,621,622,676,677,679,680,682,685,686,707,708,710,711,722,723,914,956,958,962,974,988,990,992,993]],
['expressed',[121,196,209,210,213,214,314,316,317,318,319,442,513,515,516,533,538,576,577,578,580,581,582,586,587,588,592,619,620,621,622,623,676,677,678,679,680,681,682,683,707,708,709,710,711,712,722,723,724,750,756,763,879,881,882,883,914,956,958,959,962,974,975,992,993,994]],
['invoicenetamounthuf',[121,195,196,210,243,314,317,442,679,681,690]],
['invoicevatamount',[121,195,196,213,243,314,318,442,679,682,690]],
['invoicevatamounthuf',[121,195,196,214,243,314,319,442,679,683,690]],
['originalinvoicenumber',[121,155,182,195,196,216,242,245,249,256,259,263,265,442,559,562,566]],
['melyre',[121,196,216,245,249,256,259,263,265,442,559,562,914,934,938]],
['vonatkozik',[121,196,216,245,249,256,259,263,265,442,533,543,544,559,562,657,661,914,934,938]],
['occurs',[121,196,216,245,249,256,259,263,265,442,559,562,583,584,750,801,805,914,934,938]],
['modificationindex',[121,182,195,196,215,245,246,442,559,560,566,914,934,937,942]],
['számlára',[121,196,215,245,246,442,454,533,534,559,560,914,934,937]],
['referring',[121,196,215,245,246,442,559,560,914,934,937]],
['completenessindicator',[121,195,196,198,442,528,529,733]],
['maga',[121,196,198,442,528,529]],
['szerepel',[121,196,198,285,286,442,528,529,533,535,542]],
['több',[121,196,198,227,231,442,528,529]],
['adat',[121,196,198,336,339,340,442,443,446,528,529,533,534,592,595,737,750,840,847,865,868,869,914,924,925,944,947,962,963,992,995,1013,1014,1019,1024,1025,1026,1027,1030,1031,1032,1033,1034,1035,1036,1088,1089,1090,1133,1134,1173,1189,1200,1241,1247,1264,1265,1266,1267,1268,1275,1276]],
['whether',[121,196,198,245,248,285,286,299,302,362,369,442,528,529,559,561,589,591,657,661]],
['identical',[121,196,198,442,528,529]],
['does',[121,196,198,442,528,529,533,542,750,801,802]],
['contain',[121,196,198,442,528,529,583,584]],
['more',[121,196,198,227,231,442,528,529]],
['maxlinenumber',[121,181,224,225]],
['linenumbertype',[121,224,225,260,261,262,263,264,406,439,442,583,584,592,608,667,668,914,962,969,1026,1035,1037,1193]],
['sorok',[121,224,225]],
['közül',[121,224,225]],
['legmagasabb',[121,224,225]],
['amit',[121,224,225,750,886,888]],
['tartalmaz',[121,224,225,362,369,406,407,442,589,591,733,1026,1038]],
['line',[121,155,224,225,260,261,262,263,264,406,439,442,565,571,572,573,574,580,583,584,585,586,589,590,591,592,606,607,609,621,738,739,914,941,960,961,962,968,1009,1026,1193]],
['contains',[121,224,225,362,369,442,589,591]],
['newcreatedlines',[121,181,224,226]],
['newcreatedlinestype',[121,224,226,260]],
['által',[121,224,226,260,309,310,442,519,521,741,750,756,763,789,791,799,801,803,896,913,914,1010,1026,1097,1101,1200]],
['újként',[121,224,226,260]],
['létrehozott',[121,224,226,260]],
['számlasorok',[121,224,226,260]],
['lines',[121,224,226,260,442,583,584]],
['created',[121,224,226,260]],
['invoicenumberquerytype',[121,227,287,288]],
['esetén',[121,227,231,263,265,406,429,431,442,454,455,456,533,535,538,539,541,548,571,576,580,581,583,584,586,587,588,592,593,594,606,619,644,646,679,689,690,713,717,750,771,773,781,783,789,793,833,837,879,881,883,902,914,924,926,928,933,944,947,956,962,966,981,983,992,995,1026,1027,1030,1119,1124,1133,1140,1162,1164,1166,1167,1168,1192,1200,1250,1251]],
['érvényes',[121,227,231,750,879,883]],
['megtalálható',[121,227,231]],
['azonos',[121,227,231,442,533,542]],
['sorszámmal',[121,227,231]],
['case',[121,227,231,263,265,406,429,431,442,454,455,505,506,507,533,535,538,541,548,571,576,580,581,583,584,586,587,588,592,593,594,606,704,705,713,716,717,719,720,750,771,774,776,833,834,837,914,924,926,928,929,933,956,962,966,1026,1119,1124,1133,1135,1140,1162,1164]],
['querying',[121,227,231,285,286]],
['found',[121,227,231,914,915,918]],
['valid',[121,227,231,285,286,299,302,750,879,883]],
['invoices',[121,227,231,312,313,442,592,619]],
['same',[121,227,231]],
['invoiceoperationlisttype',[121,232,253,255]],
['számlaműveletek',[121,232,253,255]],
['compressedcontent',[121,232,233,255]],
['tömörített',[121,232,233]],
['tartalom',[121,232,233,442,713,717,750,879,881]],
['jelzése',[121,232,233,245,248,442,533,547,549,559,561,592,607,657,661,738,914,962,968,1009]],
['folyamat',[121,232,233,750,789,792,813,814,815,816,817,818,819,820,1026,1198]],
['compressed',[121,232,233]],
['indicator',[121,232,233]],
['invoiceoperationtype',[121,232,234,235]],
['invoicequeryparamstype',[121,240,291,293]],
['paraméterek',[121,240,291,293]],
['parameters',[121,240,291,293,750,771,775,806,807]],
['mandatoryqueryparams',[121,240,242,293]],
['mandatoryqueryparamstype',[121,240,242,256]],
['kötelező',[121,240,242,256]],
['mandatory',[121,240,242,256]],
['additionalqueryparams',[121,240,241,293]],
['relationalqueryparams',[121,240,243,293]],
['relationalqueryparamstype',[121,240,243,314]],
['transactionqueryparams',[121,240,244,293]],
['transactionqueryparamstype',[121,240,244,356]],
['tranzakciós',[121,240,244,356]],
['modifywithoutmaster',[121,182,245,248,442,559,561,566]],
['annak',[121,245,248,442,533,547,559,561,657,661]],
['olyan',[121,245,248,442,559,561]],
['alapszámlára',[121,245,248,442,559,561]],
['hivatkozik',[121,245,248,442,559,561]],
['amelyről',[121,245,248,442,559,561]],
['történt',[121,245,248,442,450,452,495,496,497,499,559,561,695,698,914,1000,1003,1026,1062,1063]],
['történni',[121,245,248,442,559,561]],
['references',[121,245,248,442,559,561,592,616,667,668]],
['will',[121,245,248,442,559,561,750,813,818,820]],
['modificationtimestamp',[121,182,245,247]],
['készítésének',[121,245,247]],
['időbélyege',[121,245,247]],
['forrásrendszerben',[121,245,247]],
['creation',[121,245,247]],
['manageannulmentrequesttype',[121,250,372]],
['post',[121,250,253,280,283,285,287,289,291,295,297,299,303,307,309,312,348,360,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,750,899]],
['manageannulment',[121,250,360,372,373]],
['operáció',[121,250,253,280,283,285,287,289,291,295,297,299,303,307,309,312,348,360,361,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391]],
['exchangetoken',[121,250,252,253,254,372,374]],
['tranzakcióhoz',[121,250,252,253,254]],
['kiadott',[121,250,252,253,254,348,349,350,351]],
['dekódolt',[121,250,252,253,254]],
['token',[121,250,252,253,254,348,349,350,351]],
['decoded',[121,250,252,253,254]],
['issued',[121,250,252,253,254,348,349,350,351,406,433,442,454,456,750,893]],
['current',[121,250,252,253,254,750,771,774,775,789,792,800,813,814,815,816,817,914,962,965,1026,1192]],
['annulmentoperations',[121,250,251,372]],
['manageinvoicerequesttype',[121,253,374]],
['manageinvoice',[121,253,360,374,375]],
['invoiceoperations',[121,253,255,374]],
['dátumtartománya',[121,256,258]],
['range',[121,256,257,258]],
['feldolgozásának',[121,256,257]],
['időpont',[121,256,257,750,886,888]],
['tartománya',[121,256,257]],
['linenumberintervalstart',[121,226,260,262]],
['kezdete',[121,260,262,348,350,750,833,835]],
['start',[121,260,262,348,350,750,833,835]],
['linenumberintervalend',[121,226,260,261]],
['vége',[121,260,261,348,351,750,896]],
['inkluzív',[121,260,261]],
['inclusive',[121,260,261]],
['hivatkozás',[121,263,266,267]],
['reference',[121,263,264,266,267,442,559,741,914,934,1010]],
['Érték',[]],
['sorhivatkozás',[121,263,264]],
['processingresultlisttype',[121,268,312,313]],
['processingresult',[121,268,271,313]],
['processingresulttype',[121,268,271,272]],
['annulmentdata',[121,268,269,313]],
['invoicestatus',[121,271,272,277]],
['businessvalidationmessages',[121,271,272,274]],
['originalrequest',[121,271,272,275,278]],
['queryinvoicechaindigestrequesttype',[121,280,376]],
['queryinvoicechaindigest',[121,280,283,376,377]],
['lekérdezni',[121,280,282,291,294,303,304,305]],
['kívánt',[121,280,282,291,294,303,304,305]],
['invoicechainquery',[121,280,281,376]],
['queryinvoicechaindigestresponsetype',[121,283,377]],
['invoicechaindigestresult',[121,283,284,377]],
['queryinvoicecheckresponsetype',[121,285,379]],
['queryinvoicecheck',[121,285,378,379]],
['invoicecheckresult',[121,285,286,379]],
['érvényesként',[121,285,286]],
['lekérdező',[121,285,286]],
['kiállítóként',[121,285,286]],
['eladóként',[121,285,286]],
['exists',[121,285,286]],
['system',[121,285,286,406,435,436,437,438,442,517,518,750,771,774,781,801,802,903,1026,1197]],
['entity',[121,285,286]],
['present',[121,285,286]],
['either',[121,285,286,406,407,1026,1038]],
['queryinvoicedatarequesttype',[121,287,378,380]],
['queryinvoicedata',[121,287,289,380,381]],
['invoicenumberquery',[121,287,288,378,380]],
['queryinvoicedataresponsetype',[121,289,381]],
['invoicedataresult',[121,289,290,381]],
['queryinvoicedigestrequesttype',[121,291,382]],
['queryinvoicedigest',[121,291,295,382,383]],
['invoicequeryparams',[121,291,293,382]],
['queryinvoicedigestresponsetype',[121,295,383]],
['invoicedigestresult',[121,295,296,383]],
['querytaxpayerrequesttype',[121,297,384]],
['querytaxpayer',[121,297,299,384,385]],
['querytaxpayerresponsetype',[121,299,385]],
['infodate',[121,299,300,385]],
['változásának',[121,299,300,914,944,945,1026,1093,1094,1200,1201,1202]],
['last',[121,299,300,442,533,539,543,750,756,760,761,762,781,785,787,788,789,792,813,854,861]],
['changed',[121,299,300]],
['taxpayervalidity',[121,299,302,385]],
['jelzi',[121,299,302]],
['létezik',[121,299,302]],
['érvényes-e',[121,299,302]],
['existing',[121,299,302,442,583,584]],
['taxpayerdata',[121,299,301,385]],
['taxpayerdatatype',[121,299,301,341,750,870]],
['querytransactionlistrequesttype',[121,303,386]],
['querytransactionlist',[121,303,307,386,387]],
['tranzakciók',[121,303,304]],
['kiadásának',[121,303,304]],
['szerver',[121,303,304]],
['server',[121,303,304]],
['requeststatus',[121,303,306,355,362,367,386]],
['querytransactionlistresponsetype',[121,307,387]],
['transactionlistresult',[121,307,308,387]],
['transactionlistresulttype',[121,307,308,352]],
['querytransactionstatusrequesttype',[121,309,388]],
['querytransactionstatus',[121,309,312,388,389]],
['returnoriginalrequest',[121,309,310,388]],
['tartalmat',[121,309,310]],
['vissza',[121,309,310]],
['adni',[121,309,310]],
['válaszban',[121,309,310]],
['should',[121,309,310,442,454,456,486,533,538,542,648,649,750,771,772,774,781,783,789,793,808,810]],
['also',[121,309,310]],
['returned',[121,309,310,1026,1192]],
['querytransactionstatusresponsetype',[121,312,389]],
['processingresults',[121,312,313,389]],
['kérésben',[121,312,313]],
['számlák',[121,312,313,1200,1250,1252,1258]],
['invoicedelivery',[121,243,314,315]],
['relationquerydatetype',[121,314,315,320,321]],
['dátumának',[121,314,315]],
['határidejének',[121,314,320]],
['relationquerymonetarytype',[121,314,316,317,318,319,324]],
['összeg',[121,314,316,1026,1097,1112,1116]],
['összegének',[121,314,317,318,319,1026,1097,1100]],
['értékekhez',[121,321,324]],
['values',[121,321,324,442,746,914,1012]],
['queryoperator',[121,315,316,317,318,319,320,321,322,324,325]],
['operátor',[121,321,322,324,325]],
['queryvalue',[121,315,316,317,318,319,320,321,323,324,326]],
['monetáris',[121,324]],
['monetary',[121,324]],
['softwareid',[121,150,152,165,327,332,750,764,765,790,828,854,860]],
['softwarename',[121,150,152,165,327,334,750,790,828,854,863]],
['softwareoperation',[121,150,152,165,327,335,750,764,767,790,828,854,864]],
['softwaremainversion',[121,150,152,165,327,333,750,764,766,790,828,854,862]],
['főverziója',[121,327,333,750,764,766,854,862]],
['main',[121,327,333,750,764,766,854,862,914,953,955,976,977,985,986,1026,1119]],
['softwaredevname',[121,150,152,165,327,330,750,790,828,854,857]],
['fejlesztőjének',[121,327,328,329,330,331,750,854,855,856,857,858]],
['softwaredevcontact',[121,150,152,165,327,328,750,790,828,854,855]],
['elérhetősége',[121,327,328,750,854,855]],
['contact',[121,327,328,750,854,855]],
['softwaredevcountrycode',[121,150,152,165,327,329,750,790,828,854,856]],
['iso-3166',[121,327,329,750,854,856]],
['alpha2',[121,327,329,750,854,856]],
['országkódja',[121,327,329,750,854,856]],
['softwaredevtaxnumber',[121,150,152,165,327,331,750,790,828,854,858]],
['taxpayeraddressitemtype',[121,336,339,340,750,865,868,869]],
['címsor',[121,336,339,340,750,865,868,869]],
['item',[121,336,339,340,362,365,442,447,448,454,455,456,466,476,513,515,516,569,570,571,576,577,578,580,581,582,586,587,588,589,590,592,593,594,595,599,602,604,605,608,612,614,621,622,623,648,750,821,824,865,868,869,914,956,958,959,960,961,962,963,965,966,969,1026,1035,1036,1037,1192]],
['taxpayeraddresstype',[121,336,338,340]],
['taxpayeraddress',[121,336,337,340,750,865,866,869]],
['detailedaddresstype',[121,336,337,406,407,408,410,750,865,866,1026,1038,1039,1075]],
['címadatai',[121,336,337,750,865,866]],
['taxpayeraddresslisttype',[121,339,341,344,750,868,870,873]],
['lista',[121,339,341,344,750,754,852,868,870,873,907,1026,1068]],
['list',[121,339,341,344,442,741,750,754,771,772,781,785,806,852,853,868,870,873,879,884,886,899,907,914,1010,1026,1049,1068,1200,1264,1269,1272]],
['taxpayeraddressitem',[121,339,340,344,750,868,869,873]],
['taxpayername',[121,301,341,345,750,834,837,870,874,929,933,1026,1135,1140,1166,1169]],
['taxpayershortname',[121,301,341,346,750,834,837,870,875,929,933,1026,1135,1140,1166,1170]],
['rövidített',[121,341,346,750,870,875]],
['shortened',[121,341,346,750,870,875]],
['taxnumberdetail',[121,301,341,343,750,870,872]],
['taxnumbertype',[121,341,343,406,429,442,495,496,519,523,636,641,695,698,703,750,870,872,914,1000,1003,1008,1026,1062,1063,1162,1166,1167,1168]],
['részletes',[121,341,343,406,407,408,410,442,505,750,870,872,1026,1038,1039,1075]],
['detailed',[121,341,343,406,407,408,410,442,505,750,870,872,1026,1038,1039,1075]],
['vatgroupmembership',[121,301,341,347,750,870,876]],
['tagsága',[121,341,347,750,870,876]],
['membership',[121,341,347,750,870,876]],
['taxpayeraddresslist',[121,301,341,344,750,870,873]],
['tokenexchangeresponsetype',[121,348,391]],
['tokenexchange',[121,348,390,391]],
['encodedexchangetoken',[121,348,349,391]],
['aes-128',[121,348,349]],
['algoritmussal',[121,348,349,750,854,859]],
['alakja',[121,348,349]],
['tokenvalidityfrom',[121,348,350,391]],
['érvényességének',[121,348,350,351]],
['validity',[121,348,350,351,750,840,849,850]],
['tokenvalidityto',[121,348,351,391]],
['transactiontype',[121,352,355,362]],
['transactionresponsetype',[121,360,373,375]],
['közös',[121,360,442,528,531,556]],
['requested',[121,360,361,750,808,810,812]],
['technicalannulment',[121,355,362,369]],
['itemcount',[121,355,362,365]],
['tételeinek',[121,362,365]],
['invoiceexchange',[121,362,365]],
['generalerrorresponse',[121,371]],
['manageannulmentrequest',[121,372]],
['kérésének',[121,372,374,376,378,380,384,386,388,390]],
['root',[121,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,442,733]],
['manageannulmentresponse',[121,373]],
['válaszának',[121,373,375,377,379,381,382,383,385,387,389,391]],
['manageinvoicerequest',[121,374]],
['manageinvoiceresponse',[121,375]],
['queryinvoicechaindigestrequest',[121,376]],
['queryinvoicechaindigestresponse',[121,377]],
['queryinvoicecheckrequest',[121,378]],
['queryinvoicecheckresponse',[121,379]],
['queryinvoicedatarequest',[121,380]],
['queryinvoicedataresponse',[121,381]],
['queryinvoicedigestrequest',[121,382]],
['queryinvoicedigestresponse',[121,383]],
['querytaxpayerrequest',[121,384]],
['querytaxpayerresponse',[121,385]],
['querytransactionlistrequest',[121,386]],
['querytransactionlistresponse',[121,387]],
['querytransactionstatusrequest',[121,388]],
['querytransactionstatusresponse',[121,389]],
['tokenexchangerequest',[121,390]],
['tokenexchangeresponse',[121,391]],
['countrycode',[337,406,408,409,410,413,423,426,511,866,1026,1039,1040,1075,1078,1156,1159]],
['region',[337,406,408,409,410,420,423,428,511,866,1026,1039,1040,1075,1085,1156,1161]],
['postalcode',[337,406,408,409,410,418,423,427,511,866,1026,1039,1040,1075,1083,1156,1160]],
['city',[337,406,408,409,410,412,423,425,511,866,1026,1039,1040,1075,1077,1156,1158]],
['streetname',[337,406,408,410,422,866,1026,1039,1075,1087]],
['publicplacecategory',[337,406,408,410,419,866,1026,1039,1075,1084]],
['building',[337,406,408,410,411,866,1026,1039,1075,1076]],
['staircase',[337,406,408,410,421,866,1026,1039,1075,1086]],
['floor',[337,406,408,410,415,423,424,866,1026,1039,1075,1080,1156,1157]],
['door',[337,406,408,410,414,423,424,866,1026,1039,1075,1079,1156,1157]],
['lotnumber',[337,406,408,410,416,866,1026,1039,1075,1081]],
['taxpayerid',[343,406,429,431,495,496,499,523,641,698,703,872,955,977,986,1003,1008,1026,1062,1063,1066,1119,1124,1162,1164,1167,1168]],
['vatcode',[343,406,429,432,495,496,499,523,641,698,703,872,1003,1008,1026,1062,1063,1066,1162,1165,1167,1168]],
['countycode',[343,406,429,430,495,496,499,523,641,698,703,872,1003,1008,1026,1062,1063,1066,1162,1163,1167,1168]],
['paper',[406,433,442,745]],
['papír',[406,433,442,745]],
['alapú',[406,433,750,764,767,781,783,789,793,801,803,825,854,864,909]],
['formában',[406,433]],
['előállított',[406,433]],
['non-edi',[406,433]],
['unknown',[406,433]],
['szoftver',[406,433,750,789,790,813,816,819,821,822,825,828,854,859,861,907]],
['képes',[406,433]],
['azonosítani',[406,433]],
['kiállításkor',[406,433]],
['ismert',[406,433]],
['cannot',[406,433]],
['identify',[406,433]],
['normal',[406,434,442,571,592,593,1026,1181]],
['normál',[406,434,442,571,592,593,1026,1181]],
['gyűjtő',[406,434,442,454,456,571,592,597,750,879,880,914,956,957,988,989,1026,1051,1052]],
['aggregate',[406,434,442,454,455,456,571,592,597,657,659]],
['gyűjtőszámla',[406,434,442,454,455]],
['2010-01-01',[406,435,1026,1182]],
['sorszám',[406,436,438,914,944,951,1026,1093,1096,1133,1138,1183,1185]],
['maxinclusive',[406,436,442,747,750,756,758,902]],
['2010-01-01t00',[406,437]],
['számlaművelethez',[406,438]],
['tételszám',[406,439,1026,1193]],
['pénzérték',[406,440,1026,1195]],
['számjegy',[406,429,430,432,440,442,746,914,1012,1026,1102,1104,1162,1163,1165,1195]],
['tizedesjegyet',[406,440,442,746,914,1012,1026,1195]],
['tartalmazhat',[406,440,442,746,914,1012,1026,1195]],
['money',[406,440,1026,1195]],
['input',[406,440,1026,1173,1174,1195]],
['digits',[406,429,430,440,442,746,914,1012,1026,1162,1163,1195]],
['that',[406,407,440,442,746,750,781,785,789,792,813,814,815,816,817,818,819,820,852,853,914,1012,1013,1019,1022,1026,1038,1195,1200,1247,1249]],
['include',[406,440,442,746,747,914,1012,1026,1195]],
['places',[406,440,442,746,747,750,777,779,780,902,914,1012,1026,1195]],
['fractiondigits',[406,440,442,737,746,747,750,902,914,1012,1026,1189,1195]],
['transfer',[406,441,1013,1014,1015]],
['banki',[406,441]],
['átutalás',[406,441]],
['készpénz',[406,441,1026,1112,1115,1197]],
['card',[406,441,914,915,917,1013,1014,1015,1026,1102,1104,1106,1108,1112,1114,1118,1174,1181,1183,1197,1200,1213,1230,1231,1232,1233,1234,1235,1236,1237]],
['bankkártya',[406,441,1026,1197]],
['hitelkártya',[406,441,1026,1197]],
['helyettesítő',[406,441,1026,1197]],
['eszköz',[406,441,442,457,592,611,626,627,628,725,750,907,1026,1197]],
['debit',[406,441,1026,1197]],
['credit',[406,441,1026,1197]],
['other',[406,441,442,466,533,534,536,538,592,595,598,619,626,628,636,638,725,734,738,741,745,750,756,762,896,909,914,962,963,976,978,1009,1010,1013,1014,1015,1019,1021,1022,1026,1031,1032,1033,1034,1088,1089,1090,1112,1117,1125,1126,1133,1134,1173,1174,1177,1180,1181,1183,1194,1197,1199,1200,1213,1223,1226,1241,1246,1247,1249,1264,1266,1269]],
['cash-substitute',[406,441,1026,1197]],
['instrument',[406,441,1026,1112,1128,1129,1130,1173,1174,1197,1200,1213,1216]],
['utalvány',[406,441,1026,1174]],
['váltó',[406,441]],
['pénzhelyettesítő',[406,441]],
['bill',[406,441]],
['non-cash',[406,441]],
['addresstype',[406,407,442,489,490,519,520,636,639,695,700,914,1000,1005,1026,1038,1056,1057,1106,1107,1141,1166]],
['amely',[406,407,442,495,497,499,750,821,823,1026,1038]],
['egyszerű',[406,407,409,423,1026,1038,1040,1156]],
['címet',[406,407,1026,1038]],
['includes',[406,407,1026,1038]],
['simple',[406,407,409,423,1026,1038,1040,1156]],
['simpleaddress',[406,407,409,490,520,639,700,834,836,837,929,932,933,952,1005,1026,1038,1040,1057,1107,1135,1139,1140,1141,1166]],
['simpleaddresstype',[406,407,409,423,442,508,511,1026,1038,1040,1156]],
['detailedaddress',[406,407,408,490,520,639,700,834,836,837,929,932,933,952,1005,1026,1038,1039,1057,1107,1135,1139,1140,1141,1166]],
['címadatok',[406,410,423,424,1026,1075,1156,1157]],
['tartomány',[406,410,420,423,428,1026,1075,1085,1156,1161]],
['kódja',[406,410,420,423,428,442,466,469,481,484,485,693,694,741,750,768,769,854,859,896,914,1010,1026,1075,1085,1106,1109,1125,1126,1156,1161]],
['amennyiben',[406,410,418,420,423,427,428,442,533,543,544,695,699,750,771,776,914,1000,1004,1026,1075,1083,1085,1156,1160,1161]],
['értelmezhető',[406,410,418,420,423,427,428,1026,1075,1083,1085,1156,1160,1161]],
['adott',[406,410,420,423,428,442,454,455,592,607,671,673,674,675,685,686,687,707,708,709,710,711,712,722,723,724,738,750,879,881,886,887,914,962,965,968,988,990,991,1009,1026,1035,1036,1051,1053,1054,1055,1075,1085,1156,1161,1192]],
['országban',[406,410,420,423,428,1026,1075,1085,1156,1161]],
['alpha',[406,410,420,423,428,1026,1075,1085,1156,1161]],
['province',[406,410,420,423,428,1026,1075,1085,1156,1161]],
['appropriate',[406,410,420,423,428,1026,1075,1085,1156,1161]],
['given',[406,410,420,423,428,442,454,455,486,592,607,648,649,671,673,674,675,685,686,687,707,708,709,710,711,712,722,723,724,738,914,962,968,988,990,991,1009,1026,1051,1053,1054,1055,1075,1085,1156,1161]],
['értékkel',[406,410,418,423,427,1026,1075,1083,1156,1160]],
['kitölteni',[406,410,418,423,427,750,771,773,781,783,789,793,1026,1075,1083,1156,1160]],
['interpreted',[406,410,418,423,427,1026,1075,1083,1156,1160]],
['need',[406,410,418,423,427,1026,1075,1083,1156,1160]],
['filled',[406,410,418,423,427,442,454,456,750,781,783,789,793,1026,1075,1083,1156,1160,1200,1250,1251]],
['település',[406,410,412,423,425,1026,1075,1077,1156,1158]],
['settlement',[406,410,412,423,425,442,533,550,1026,1075,1077,1156,1158]],
['közterület',[406,410,419,422,423,424,1026,1075,1084,1087,1156,1157]],
['public',[406,410,419,422,423,424,442,592,610,1026,1075,1084,1087,1156,1157]],
['place',[406,410,419,422,423,424,442,508,511,1026,1075,1084,1087,1156,1157]],
['jellege',[406,410,419,423,424,442,583,585,914,962,965,1026,1075,1084,1156,1157,1192]],
['category',[406,410,419,750,840,841,842,886,888,1026,1075,1084,1173]],
['házszám',[406,410,417,423,424,1026,1075,1082,1156,1157]],
['house',[406,410,417,423,424,1026,1075,1082,1156,1157]],
['Épület',[]],
['lépcsőház',[406,410,421,1026,1075,1086]],
['emelet',[406,410,415,423,424,1026,1075,1080,1156,1157]],
['ajtó',[406,410,414,423,424,1026,1075,1079,1156,1157]],
['helyrajzi',[406,410,416,423,424,1026,1075,1081,1156,1157]],
['címtípus',[406,423,1026,1156]],
['additionaladdressdetail',[406,409,423,424,511,1026,1040,1156,1157]],
['további',[406,423,424,442,443,592,595,626,628,725,914,924,925,962,963,1026,1027,1035,1156,1157]],
['further',[406,423,424,750,781,787,788,1026,1156,1157]],
['adóalany',[406,429,431,1026,1119,1124,1162,1164]],
['törzsszáma',[406,429,431,1026,1119,1124,1162,1164]],
['csoportos',[406,429,431,1026,1119,1124,1162,1164]],
['csoportazonosító',[406,429,431,442,495,496,497,499,695,698,703,914,1000,1003,1008,1026,1062,1063,1064,1066,1119,1124,1162,1164,1166,1167]],
['taxation',[406,429,431,432,442,508,580,581,586,587,588,592,600,713,714,718,740,1026,1119,1124,1162,1164,1165]],
['arrangement',[406,429,431,1026,1119,1124,1162,1164]],
['adóalanyiság',[406,429,432,1026,1162,1165]],
['típusának',[406,429,432,1026,1162,1165]],
['jelzésére',[406,429,432,1026,1162,1165]],
['indicate',[406,429,432,1026,1162,1165]],
['customervatstatustype',[442,489,494,734,1026,1056,1061,1177]],
['customers',[442,489,494,734,1026,1056,1061,1177]],
['domestic',[442,497,499,734,1026,1064,1066,1177]],
['belföldi',[442,497,499,695,703,713,718,734,748,750,907,914,1000,1008,1026,1064,1066,1177]],
['alany',[442,734,1026,1177]],
['subject',[442,734,1026,1177]],
['természetes',[442,592,605,734,1026,1177]],
['személy',[442,734,1026,1177]],
['külföldi',[442,454,456,734,1026,1177]],
['non-vat',[442,734,1026,1177]],
['non-natural',[442,734,1026,1177]],
['foreign',[442,454,456,533,538,734,1026,1097,1112,1116,1177]],
['natural',[442,592,601,605,734,1026,1177]],
['datanametype',[442,443,445,735,1026,1027,1029,1178]],
['adatmező',[442,443,444,445,735,1026,1027,1028,1029,1178]],
['ekaeridtype',[442,517,518,736]],
['ekÁer',[]],
['exchangeratetype',[442,450,451,454,456,533,538,737,1026,1097,1101,1189]],
['Árfolyam',[]],
['rate',[442,450,451,454,456,513,515,533,538,571,575,576,579,651,654,656,671,672,673,674,675,685,688,704,706,707,708,709,710,711,712,713,721,722,723,724,737,743,747,750,879,881,882,883,886,887,1026,1097,1101,1189]],
['minexclusive',[442,737,1026,1189]],
['linenatureindicatortype',[442,592,607,738,914,962,968,1009]],
['tételsor',[442,583,592,606,607,738,914,962,968,1009]],
['termékértékesítés',[442,533,547,592,607,738,914,962,968,1009]],
['nyújtás',[442,533,547,592,607,738,914,962,968,1009]],
['jellegének',[442,583,592,606,607,738,914,962,968,1009]],
['indication',[442,592,607,738,914,962,968,1009]],
['nature',[442,592,607,738,914,962,965,968,1009,1026,1192]],
['supply',[442,533,547,583,592,606,607,611,626,695,698,713,738,914,962,968,1000,1003,1009,1200,1208,1209]],
['goods',[442,495,496,497,499,533,547,592,607,695,698,738,740,741,914,962,968,1000,1003,1009,1010,1026,1062,1063,1174,1192,1194]],
['services',[442,495,496,497,499,533,547,592,607,695,698,738,741,914,962,968,1000,1003,1009,1010,1026,1062,1063]],
['besorolható',[442,738,914,1009]],
['non-qualifiable',[442,738,914,1009]],
['lineoperationtype',[442,583,585,739]],
['számlatétel',[442,583,585,739]],
['marginschemetype',[442,713,714,740]],
['különbözet',[442,713,714,740,1200,1201,1207]],
['szabályozás',[442,713,714,740]],
['inputting',[442,740,742,914,1011]],
['margin-scheme',[442,713,714,740]],
['travel',[442,740]],
['agency',[442,740]],
['utazási',[442,740]],
['irodák',[442,740]],
['agencies',[442,740]],
['second',[442,740]],
['hand',[442,740]],
['cikkek',[442,740]],
['second-hand',[442,740]],
['artwork',[442,740]],
['műalkotások',[442,740]],
['works',[442,740]],
['antiques',[442,740]],
['gyűjteménydarabok',[442,740]],
['régiségek',[442,740]],
['collector’s',[442,740]],
['items',[442,589,592,616,667,668,740,914,960,962,1026,1033,1034,1051,1053,1054,1055,1088,1090]],
['productcodecategorytype',[442,644,647,741,914,981,984,1010]],
['termékkód',[442,642,643,644,645,646,647,741,742,914,979,980,981,982,983,984,1010,1011]],
['fajtájának',[442,644,647,741,914,981,984,1010]],
['jelölésére',[442,741,914,1010]],
['mark',[442,741,914,1010]],
['kind',[442,447,448,644,647,741,914,981,984,1010]],
['vtsz',[442,644,647,741,750,840,851,853,914,981,984,1010]],
['vámtarifa',[442,741,750,840,851,914,1010]],
['customs',[442,741,750,840,851,914,1010]],
['tariff',[442,741,750,840,851,914,1010]],
['jegyzék',[442,741,914,1010]],
['kombinált',[442,741,914,1010]],
['nómenklatúra',[442,741,914,1010]],
['rendelet',[442,508,592,600,741,914,1010]],
['melléklete',[442,741,914,1010,1013,1019,1020,1021]],
['combined',[442,741,914,1010]],
['nomenclature',[442,741,914,1010]],
['annex',[442,741,914,1010,1013,1019,1021]],
['jövedéki',[442,592,601,695,697,741,914,1000,1002,1010]],
['törvény',[442,533,550,563,567,592,616,667,668,713,720,741,914,939,943,1010]],
['lxviii',[442,508,509,695,697,741,914,1000,1002,1010]],
['e-tko',[442,741,914,1010]],
['adminisztratív',[442,741,914,1010]],
['hivatkozási',[442,559,741,914,934,1010]],
['administrative',[442,741,914,1010]],
['defined',[442,741,914,1010]],
['excise',[442,508,509,592,601,695,697,741,914,1000,1002,1010]],
['duties',[442,592,601,741,914,1010]],
['termék',[442,486,487,589,590,592,595,603,651,655,741,745,750,840,846,847,914,960,961,962,963,967,1010,1026,1173]],
['korm',[442,741,914,1010]],
['melléklet',[442,741,914,1010,1013,1019,1022,1025,1200,1247,1249,1276]],
['csomagolószer-katalógus',[442,741,914,1010]],
['packaging',[442,741,745,914,1010]],
['catalogue',[442,741,914,1010]],
['title',[442,741,914,1010,1026,1174,1200,1201,1204]],
['schedule',[442,741,914,1010]],
['government',[442,741,914,1010]],
['decree',[442,508,592,600,741,914,1010]],
['környezetvédelmi',[442,592,614,648,650,662,741,914,1010]],
['termékkódja',[442,741,914,1010]],
['environmental',[442,592,614,648,650,662,741,914,1010]],
['protection',[442,592,614,648,650,662,741,914,1010]],
['Építményjegyzék',[]],
['classification',[442,741,914,1010]],
['inventory',[442,741,914,1010]],
['construction',[442,741,914,1010]],
['teszor',[442,741,914,1010]],
['termékek',[442,741,914,1010]],
['szolgáltatások',[442,741,914,1010]],
['osztályozási',[442,741,914,1010]],
['rendszere',[442,741,914,1010]],
['activity',[442,741,914,1010]],
['regulation',[442,741,914,1010]],
['vállalkozás',[442,741,914,1010]],
['képzett',[442,741,750,789,799,914,1010]],
['enterprise',[442,533,549,741,914,1010]],
['productcodevaluetype',[442,644,646,742,914,981,983,1011]],
['codes',[442,466,469,470,481,484,501,592,613,642,644,693,742,750,781,785,879,914,962,970,979,981,1011]],
['productfeemeasuringunittype',[442,651,654,743]],
['díjtétel',[442,651,654,743]],
['egység',[442,533,538,592,617,618,651,656,743,749,750,751,754,755,756,757,840,848,904,912,914,962,972,973]],
['unit',[442,454,456,513,515,516,533,538,592,605,617,618,619,620,651,654,656,743,749,750,771,773,825,828,831,840,848,904,912,914,962,972,973,974,975]],
['darab',[442,651,654,743,749,750,821,824,912]],
['piece',[442,651,654,743,749,750,912]],
['kilogramm',[442,743,749,750,912]],
['kilogram',[442,457,460,486,487,743,749,750,912]],
['productfeeoperationtype',[442,657,661,744]],
['termékdíj',[442,486,487,592,609,612,636,648,649,650,651,652,653,656,657,658,659,660,661,662,663,744]],
['összesítés',[442,442,657,661,671,679,679,684,685,689,690,691,744,914,988,996,998,1026,1049,1050,1051]],
['summary',[442,563,567,568,657,661,671,676,689,692,744,914,915,916,939,943,992,996,999,1013,1014,1015,1026,1180,1181,1183,1192]],
['refund',[442,657,661,744]],
['visszaigénylés',[442,744]],
['deposit',[442,592,599,657,661,744]],
['raktárba',[442,657,661,744]],
['szállítás',[442,744]],
['productstreamtype',[442,486,488,745]],
['termékáram',[442,486,488,648,649,745]],
['stream',[442,486,488,648,649,745]],
['battery',[442,745,750,756,758]],
['akkumulátor',[442,745,750,756,758]],
['csomagolószer',[442,745]],
['products',[442,745,750,852,853]],
['petrol',[442,745]],
['kőolajtermék',[442,745]],
['petroleum',[442,745]],
['elektromos',[442,745]],
['elektronikai',[442,745]],
['berendezés',[442,745]],
['electric',[442,745]],
['appliance',[442,745]],
['equipment',[442,745]],
['tire',[442,745]],
['gumiabroncs',[442,745]],
['reklámhordozó',[442,745]],
['printing',[442,745,750,896]],
['plastic',[442,745]],
['műanyag',[442,745]],
['chemical',[442,745]],
['vegyipari',[442,745]],
['irodai',[442,745]],
['stationery',[442,745]],
['quantitytype',[442,457,459,460,486,487,508,509,592,615,619,620,651,655,725,726,727,728,729,731,732,746,914,962,971,974,975,1012]],
['mennyiségi',[442,592,605,617,618,746,749,750,912,914,962,972,973,1012]],
['quantity',[442,508,509,590,592,615,651,655,746,914,961,962,971,1012]],
['ratetype',[442,513,515,704,706,713,717,721,747]],
['arány',[442,747]],
['közötti',[442,747]],
['tizedesjegy',[442,747,750,777,779,780]],
['pontossággal',[442,747,750,777,779,780]],
['between',[442,747]],
['takeovertype',[442,662,664,748]],
['átvállalás',[442,662,664,748]],
['adatait',[442,592,733,748,914,962]],
['takeover',[442,648,650,662,664,748]],
['lxxxv',[442,592,614,636,648,657,658,748]],
['bekezdés',[442,748]],
['első',[442,533,544,626,632,748]],
['forgalomba',[442,626,632,748]],
['hozó',[442,748]],
['vállalja',[442,662,663,748]],
['termékdíj-kötelezettségét',[442,662,663,748]],
['takes',[442,662,663,748]],
['buyer’s',[442,748]],
['liability',[442,662,663,748]],
['basis',[442,748]],
['paragraph',[442,508,592,600,601,602,610,636,657,658,748]],
['alpontja',[442,748]],
['szerződés',[442,748]],
['alapján',[442,486,592,616,648,649,667,668,713,715,748]],
['átvállalja',[442,748]],
['contract',[442,464,465,466,467,508,509,748]],
['supplier’s',[442,662,663,695,697,748,914,1000,1002]],
['sub-point',[442,748]],
['unitofmeasuretype',[442,592,617,749,750,840,848,912,914,962,972]],
['mennyiség',[442,592,615,749,750,840,848,904,912,914,962,971]],
['measure',[442,592,605,617,618,749,750,840,848,904,912,914,962,972,973]],
['metrikus',[442,749,750,912]],
['tonna',[442,749,750,912]],
['metric',[442,749,750,751,752,753,912]],
['kilowatt',[442,749,750,912]],
['hour',[442,749,750,912]],
['minute',[442,749,750,912]],
['perc',[442,749,750,898,912]],
['month',[442,749,750,912]],
['hónap',[442,749,750,912]],
['liter',[442,508,509,749,750,912]],
['kilometer',[442,749,750,912]],
['kilométer',[442,749,750,912]],
['cubic',[442,725,726,749,750,912]],
['meter',[442,749,750,912]],
['köbméter',[442,749,750,912]],
['méter',[442,749,750,912]],
['linear',[442,749,750,912]],
['folyóméter',[442,749,750,912]],
['carton',[442,749,750,912]],
['karton',[442,749,750,912]],
['pack',[442,749,750,912]],
['csomag',[442,749,750,912]],
['saját',[442,644,645,646,749,750,912,914,981,982,983]],
['megnevezés',[442,749,750,840,842,846,912]],
['additionaldatatype',[442,443,533,534,592,595,914,924,925,962,963,1026,1027,1031,1032,1035,1036,1133,1134]],
['leírására',[442,443,528,531,556,914,915,919,924,925,1026,1027,1035]],
['description',[442,443,444,513,514,592,603,750,914,924,925,962,967,1026,1027,1028,1035,1200,1269,1271]],
['dataname',[442,443,445,534,595,925,963,1026,1027,1029,1032,1036,1134]],
['datadescription',[442,443,444,534,595,925,963,1026,1027,1028,1032,1036,1134]],
['tartalmának',[442,443,444,1026,1027,1028,1144,1149,1150,1155]],
['szöveges',[442,443,444,1026,1027,1028]],
['leírása',[442,443,444,505,506,507,513,514,704,705,1026,1027,1028]],
['datavalue',[442,443,446,534,595,925,963,1026,1027,1030,1032,1036,1134]],
['advancedatatype',[442,447,592,596]],
['előleghez',[442,447,592,596]],
['kapcsolódó',[442,447,449,450,592,595,596,616,667,668,914,962,963,1200,1201,1203]],
['advance',[442,447,448,449,450,451,452,453,592,596,1026,1174]],
['related',[442,447,449,450,551,552,553,555,592,596,614,648,914,928,930,1013,1019,1021]],
['advanceindicator',[442,447,448,596]],
['Értéke',[]],
['tétel',[442,447,448,454,455,571,572,573,574,576,577,578,580,581,582,583,584,586,587,588,589,590,592,593,594,599,602,605,608,609,621,622,623,914,956,958,959,960,961,962,965,966,969,1026,1035,1037,1192]],
['előleg',[442,447,448,449,450,453,1026,1174]],
['jellegű',[442,447,448,592,599]],
['charge',[442,447,448,592,609,651,655,713,718,750,756,758,1026,1192]],
['advancepaymentdata',[442,447,449,596]],
['advancepaymentdatatype',[442,447,449,450]],
['fizetéshez',[442,447,449]],
['előlegfizetéshez',[442,450]],
['advanceoriginalinvoice',[442,449,450,452]],
['előlegszámlának',[442,450,452]],
['amelyben',[442,450,452]],
['előlegfizetés',[442,450,451,452]],
['containing',[442,450,452,580,581,586,587,588,750,852,853]],
['advancepaymentdate',[442,449,450,453]],
['fizetésének',[442,450,453]],
['advanceexchangerate',[442,449,450,451]],
['során',[442,450,451,508,509,533,547,750,756,761,762,821,823]],
['alkalmazott',[442,450,451,533,538,713,721,1026,1097,1101,1200,1201,1205,1208,1210,1213,1238,1250,1261,1269,1273]],
['árfolyam',[442,442,450,451,454,456,533,538,737,1026,1189]],
['applied',[442,450,451,454,456,533,538,713,721,750,886,888]],
['aggregateinvoicelinedatatype',[442,454,592,597]],
['speciális',[442,454]],
['adatokat',[442,454,750,813,815,818,1013,1014,1017]],
['including',[442,454,592,593,644,914,962,981]],
['special',[442,454]],
['lineexchangerate',[442,454,456,597]],
['tételhez',[442,454,456,513,515,516,592,595,604,914,962,963]],
['egységre',[442,454,456]],
['vonatkoztatva',[442,454,456]],
['pénznemben',[442,454,456]],
['kiállított',[442,454,456,750,781,787,893]],
['kitöltendő',[442,454,456,571,576,592,593,594,914,956,962,966]],
['pertaining',[442,454,456]],
['this',[442,454,456,533,535,542,750,821,822,823]],
['linedeliverydate',[442,454,455,597]],
['aircrafttype',[442,457,626,627]],
['légi',[442,457,626,627]],
['közlekedési',[442,457,592,611,626,627,628,725]],
['aircraft',[442,457,611,626,627]],
['takeoffweight',[442,457,460,627]],
['felszállási',[442,457,460]],
['tömeg',[442,457,460]],
['kilogrammban',[442,457,460,486,487]],
['take-off',[442,457,460]],
['weight',[442,457,460,486,487]],
['aircargo',[442,457,458,627]],
['jármű',[442,457,458,508,512,626,629,729,730]],
['tartozik',[442,457,458,729,730]],
['means',[442,457,458,592,611,626,729,730]],
['transport',[442,457,458,517,518,592,611,626,729,730]],
['exempt',[442,457,458,713,729,730]],
['from',[442,457,458,486,648,649,695,699,729,730,750,756,763,808,810,821,822,840,849,914,1000,1004]],
['operationhours',[442,457,459,627]],
['repült',[442,457,459]],
['órák',[442,457,459,729,732]],
['aviated',[442,457,459]],
['hours',[442,457,459,729,732]],
['batchinvoicetype',[442,461,556,557]],
['documents',[442,461,556,557]],
['invoicetype',[442,461,463,556,558,563]],
['single',[442,461,463,556,558,563,914,939]],
['contractnumberstype',[442,464,466,467]],
['szerződésszámok',[442,464]],
['contractnumber',[442,464,465,467]],
['szerződésszám',[442,464,465,466,467]],
['conventionalinvoiceinfotype',[442,466,533,536,592,598]],
['számlafeldolgozást',[442,466,533,536,592,598]],
['segítő',[442,466,533,536,592,598]],
['egyezményesen',[442,466,533,536,592,598]],
['nevesített',[442,466,533,536,592,598]],
['conventionally',[442,466,533,536,592,598]],
['named',[442,466,533,536,592,598]],
['assist',[442,466,533,536,592,598]],
['ordernumbers',[442,466,478,536,598]],
['ordernumberstype',[442,466,478,634]],
['megrendelésszám',[442,466,478,634,635]],
['order',[442,466,478,634,635,750,808,810]],
['deliverynotes',[442,466,471,536,598]],
['deliverynotestype',[442,466,471,503]],
['szállítólevél',[442,466,471,503,504]],
['notes',[442,466,471,503]],
['shippingdates',[442,466,480,536,598]],
['shippingdatestype',[442,466,480,669]],
['szállítási',[442,466,480,669,670]],
['shipping',[442,466,480,669,670]],
['dates',[442,466,480,669]],
['contractnumbers',[442,466,467,536,598]],
['suppliercompanycodes',[442,466,481,536,598]],
['suppliercompanycodestype',[442,466,481,693]],
['vállalati',[442,466,469,481,484,485,693,694]],
['customercompanycodes',[442,466,469,536,598]],
['customercompanycodestype',[442,466,469,484]],
['dealercodes',[442,466,470,536,598]],
['dealercodestype',[442,466,470,501]],
['beszállító',[442,466,470,501,502]],
['dealer',[442,466,470,501,502]],
['costcenters',[442,466,468,536,598]],
['costcenterstype',[442,466,468,482]],
['költséghely',[442,466,468,482,483]],
['cost',[442,466,468,482,483,1026,1174]],
['centers',[442,466,468,482]],
['projectnumbers',[442,466,479,536,598]],
['projectnumberstype',[442,466,479,665]],
['projektszám',[442,466,479,665,666]],
['generalledgeraccountnumbers',[442,466,473,536,598]],
['generalledgeraccountnumberstype',[442,466,473,524]],
['főkönyvi',[442,466,473,524,525]],
['ledger',[442,466,473,524,525]],
['glnnumberssupplier',[442,466,475,536,598]],
['glnnumberstype',[442,466,474,475,526]],
['kiállítói',[442,466,475]],
['globális',[442,466,474,475,526,527]],
['helyazonosító',[442,466,474,475,526,527]],
['global',[442,466,474,475,526,527]],
['location',[442,466,474,475,526,527,750,771,773,777,833,835,836,914,928,932,944,952,1026,1133,1139]],
['glnnumberscustomer',[442,466,474,536,598]],
['materialnumbers',[442,466,477,536,598]],
['materialnumberstype',[442,466,477,624]],
['anyagszám',[442,466,477,624,625]],
['material',[442,466,477,624,625]],
['itemnumbers',[442,466,476,536,598]],
['itemnumberstype',[442,466,476,569]],
['cikkszám',[442,466,476,569,570]],
['ekaerids',[442,466,472,536,598]],
['ekaeridstype',[442,466,472,517]],
['ekaer',[442,466,472,517,518]],
['id-s',[442,466,472,517]],
['költséghelyek',[442,482]],
['costcenter',[442,468,482,483]],
['center',[442,482,483]],
['kódjai',[442,484,693]],
['customercompanycode',[442,469,484,485]],
['customerdeclarationtype',[442,486,648,649]],
['nyilatkozata',[442,486,648,649]],
['mentesül',[442,486,648,649]],
['megfizetése',[442,486,648,649]],
['alól',[442,486,648,649]],
['akkor',[442,486,533,542,543,544,648,649,750,771,776,801,802]],
['érintett',[442,486,583,584,648,649,651,655]],
['statement',[442,486,648,649]],
['purchaser',[442,486,648,649,662,663]],
['exempted',[442,486,648,649,695,699,914,1000,1004]],
['paying',[442,486,648,649]],
['then',[442,486,648,649,750,771,776]],
['affected',[442,486,648,649]],
['productstream',[442,486,488,649]],
['productfeeweight',[442,486,487,649]],
['köteles',[442,486,487]],
['tömege',[442,486,487]],
['obliged',[442,486,487]],
['customerinfotype',[442,489,551,552,914,928,930,1026,1056]],
['customervatstatus',[442,489,494,552,930,1026,1056,1061]],
['customervatdata',[442,489,493,552,930,1026,1056,1060]],
['customervatdatatype',[442,489,493,497,1026,1056,1060,1064]],
['alanyisági',[442,489,493,497,1026,1056,1060,1064]],
['subjectivity',[442,489,493,497,1026,1056,1060,1064]],
['customeraddress',[442,489,490,552,930,1026,1056,1057]],
['címe',[442,489,490,519,520,636,639,695,700,914,1000,1005,1026,1056,1057,1106,1107]],
['customerbankaccountnumber',[442,489,491,552,930,1026,1056,1058]],
['bankszámlaszáma',[442,489,491,519,521,695,701,914,1000,1006,1026,1056,1058]],
['customertaxnumbertype',[442,495,497,499,1026,1062,1064,1066]],
['termékbeszerzés',[442,495,496,497,499,695,698,914,1000,1003,1026,1062,1063]],
['igénybevétele',[442,495,496,497,499,1026,1062,1063]],
['lehet',[442,495,497,499,914,944,951,1026,1062,1064,1066,1093,1096,1133,1138]],
['under',[442,495,496,497,499,695,698,707,708,709,710,711,712,713,715,722,723,724,914,1000,1003,1026,1062,1063]],
['purchase',[442,495,496,497,499,508,510,511,1026,1062,1063,1173]],
['when',[442,495,496,695,698,750,801,805,914,1000,1003,1026,1062,1063]],
['communityvatnumber',[442,493,497,498,555,695,696,914,1000,1001,1026,1060,1064,1065]],
['thirdstatetaxid',[442,493,497,500,1026,1060,1064,1067]],
['harmadik',[442,497,500,1026,1064,1067]],
['országbeli',[442,497,500,1026,1064,1067]],
['third',[442,497,500,1026,1064,1067]],
['state',[442,497,500,750,756,771,774,775,781,782,783,784,786,789,792,813,814,840,847,853,889,891,896,897,1026,1064,1067]],
['kódok',[442,501,750,884]],
['dealercode',[442,470,501,502]],
['deliverynote',[442,471,503,504]],
['note',[442,503,504]],
['detailedreasontype',[442,505,713,719,720]],
['mentesség',[442,505]],
['indokolása',[442,505]],
['justification',[442,505]],
['exemption',[442,505,571,575,576,579,671,672,685,688,713,719]],
['eset',[442,505,506,507,704,705]],
['kóddal',[442,505,506,704,705]],
['notation',[442,505,506,507,704,705]],
['reason',[442,505,507,719,720,914,934,935,936,1026,1173,1194]],
['szöveggel',[442,505,507]],
['dieseloilpurchasetype',[442,508,592,600]],
['gázolaj',[442,508,509,510,511,592,600]],
['adózottan',[442,508,592,600]],
['beszerzésének',[442,508,592,600]],
['acquisition',[442,508,592,600]],
['after',[442,508,592,600,750,771,772,774,886,888,903]],
['purchaselocation',[442,508,511,600]],
['beszerzés',[442,508,510,511]],
['helye',[442,508,511,750,771,773,777,833,836,914,928,932,944,952,1026,1133,1139]],
['purchasedate',[442,508,510,600]],
['vehicleregistrationnumber',[442,508,512,600,917,1026,1102,1105]],
['dieseloilquantity',[442,508,509,600]],
['bérmunka-szolgáltatás',[442,508,509]],
['felhasznált',[442,508,509]],
['mennyisége',[442,508,509,651,655]],
['literben',[442,508,509]],
['fordítandó',[442,508,509]],
['helyett',[442,508,509]],
['diesel',[442,508,509]],
['work',[442,508,509,750,781,784,891]],
['machinery',[442,508,509]],
['hire',[442,508,509]],
['discountdatatype',[442,513,592,604]],
['Árengedmény',[]],
['discount',[442,513,514,515,516,592,604,1026,1192]],
['discountdescription',[442,513,514,604]],
['árengedmény',[442,442,513,513,514,515,516,592,604]],
['discountvalue',[442,513,516,604]],
['egységár',[442,513,515,516,592,619,620,914,962,974,975]],
['tartalmazza',[442,513,515,516,1013,1014,1017]],
['included',[442,513,515,516,1013,1019,1021]],
['price',[442,513,515,516,592,619,620,914,962,974,975]],
['discountrate',[442,513,515,604]],
['aránya',[442,513,515]],
['ekaerid',[442,472,517,518]],
['stands',[442,517,518]],
['trade',[442,517,518]],
['control',[442,517,518,914,944,950,996,997,1013,1014,1024,1026,1093,1133,1137,1196]],
['fiscalrepresentativetype',[442,519,551,553]],
['pénzügyi',[442,519,520,521,522,523,551,553]],
['képviselő',[442,519,520,521,522,523,551,553]],
['fiscal',[442,519,520,521,522,523,551,553,750,781,786,897]],
['representative',[442,519,520,521,522,523,551,553]],
['fiscalrepresentativetaxnumber',[442,519,523,553]],
['fiscalrepresentativename',[442,519,522,553]],
['fiscalrepresentativeaddress',[442,519,520,553]],
['fiscalrepresentativebankaccountnumber',[442,519,521,553]],
['megnyitott',[442,519,521,1200,1208,1212]],
['opened',[442,519,521,750,897,1200,1208,1212]],
['issuer',[442,519,521,551,555]],
['számlaszámok',[442,524]],
['generalledgeraccountnumber',[442,473,524,525]],
['glnnumber',[442,474,475,526,527]],
['invoicedetailtype',[442,533,551,554]],
['részletező',[442,533,551,554,914,924,928,931]],
['detail',[442,533,551,554,914,924,928,931,1026,1068,1069,1070]],
['teljesítés',[442,533,539,542]],
['keltével',[442,533,542]],
['exist',[442,533,542]],
['considered',[442,533,542,636,638]],
['such',[442,533,542,547,636,638]],
['invoicedeliveryperiodstart',[442,533,544,554]],
['időszakra',[442,533,543,544]],
['időszak',[442,533,539,543,544]],
['napja',[442,533,539,543,544]],
['first',[442,533,544,626,632,750,808,810]],
['period',[442,533,539,543,544]],
['invoicedeliveryperiodend',[442,533,543,554]],
['invoiceaccountingdeliverydate',[442,533,539,554]],
['számviteli',[442,533,539,592,602]],
['accounting',[442,533,535,539,592,602]],
['accomplishment',[442,533,539]],
['event',[442,533,539,592,619,750,768,769,770,771,772,896,1026,1176]],
['periodicalsettlement',[442,533,547,554]],
['felek',[442,533,547]],
['időszakonkénti',[442,533,547]],
['elszámolásban',[442,533,547]],
['fizetésben',[442,533,547]],
['állapodnak',[442,533,547]],
['ellenértékét',[442,533,547]],
['időpontra',[442,533,547]],
['állapítják',[442,533,547]],
['where',[442,533,547,750,879,881,883]],
['agreement',[442,533,547]],
['parties',[442,533,547]],
['gives',[442,533,547]],
['rise',[442,533,547]],
['successive',[442,533,547]],
['statements',[442,533,547]],
['payments',[442,533,547,1026,1174]],
['relating',[442,533,547,1013,1019,1021]],
['consideration',[442,533,547,580,581,586,587,588]],
['agreed',[442,533,547]],
['upon',[442,533,547]],
['applies',[442,533,547]],
['periods',[442,533,547]],
['smallbusinessindicator',[442,533,549,554]],
['kisadózó',[442,533,549]],
['marking',[442,533,535,548,549,550,571,575,576,579,583,592,606,671,672,685,688,713,714,718,719,914,956,957,988,989]],
['tax-bracket',[442,533,549]],
['currencycode',[442,533,537,554,1026,1097,1099,1116]],
['exchangerate',[442,533,538,554,1026,1097,1101,1116]],
['huf-tól',[442,533,538]],
['különböző',[442,533,538,644,914,981]],
['huf-ban',[442,533,538]],
['mentioned',[442,533,538]],
['utilitysettlementindicator',[442,533,550,554]],
['közmű',[442,533,550]],
['elszámoló',[442,533,550]],
['jelölése',[442,533,535,548,550,571,575,576,579,583,592,606,644,647,671,672,685,688,713,714,718,719,914,956,957,981,984,988,989]],
['clxxxviii',[442,533,550]],
['fact',[442,533,535,548,550,671,672,685,688]],
['utility',[442,533,550]],
['selfbillingindicator',[442,533,548,554]],
['Önszámlázás',[]],
['önszámlázás',[442,442,533,533,548,548]],
['self-billing',[442,533,548]],
['cashaccountingindicator',[442,533,535,554]],
['pénzforgalmi',[442,533,535]],
['elszámolás',[442,533,535]],
['indicated',[442,533,535]],
['conventionalinvoiceinfo',[442,533,536,554]],
['additionalinvoicedata',[442,533,534,554]],
['invoicedatatype',[442,528,733,914,953,954]],
['kelte',[442,528,530,636,637,914,915,920]],
['invoicemain',[442,528,531,733]],
['invoicemaintype',[442,528,531,556]],
['számlaadatok',[442,528,531,556]],
['describe',[442,528,531,556,914,915,919]],
['invoiceheadtype',[442,551,563,564]],
['fejléc',[442,551,914,928]],
['supplierinfo',[442,551,555,564]],
['supplierinfotype',[442,551,555,695,914,1000]],
['customerinfo',[442,551,552,564,914,928,930,940]],
['fiscalrepresentativeinfo',[442,551,553,564]],
['invoicedetail',[442,551,554,564]],
['adata',[442,551,554,750,768,770]],
['batchinvoice',[442,531,556,557]],
['invoicereferencetype',[442,559,563,566]],
['invoicereference',[442,463,558,563,566]],
['invoicehead',[442,463,558,563,564]],
['egészét',[442,563,564,914,939,940]],
['jellemző',[442,563,564,914,939,940]],
['whole',[442,563,564,750,879,882,914,939,940,944,947,992,995,1026,1031,1088,1089]],
['linestype',[442,563,565,589,914,939,941,960]],
['productfeesummary',[442,463,558,563,568]],
['productfeesummarytype',[442,563,568,657]],
['termékdíjjal',[442,563,568,651,655]],
['kapcsolatos',[442,563,568,648,650,662]],
['összesítő',[442,563,567,568,676,689,692,914,939,943,992,996,999,1013,1014,1015,1026,1180,1181,1183,1192]],
['charges',[442,563,568,651,653,657,659,660]],
['invoicesummary',[442,463,558,563,567]],
['summarytype',[442,563,567,689,914,939,943,996]],
['cikkszámok',[442,569]],
['itemnumber',[442,476,569,570]],
['lineamountsnormaltype',[442,571,592,593]],
['completed',[442,571,576,592,593,594,914,956,962,966]],
['linenetamountdata',[442,571,573,593]],
['linenetamountdatatype',[442,571,573,586]],
['linevatrate',[442,571,575,576,579,593,594]],
['vatratetype',[442,571,575,576,579,671,672,685,688,713]],
['adómérték',[442,571,575,576,579,671,672,685,688,704,706,713]],
['adómentesség',[442,571,575,576,579,671,672,685,688,713,719]],
['linevatdata',[442,571,574,593]],
['linevatdatatype',[442,571,574,621]],
['linegrossamountdata',[442,571,572,593]],
['linegrossamountdatatype',[442,571,572,580]],
['lineamountssimplifiedtype',[442,576,592,594]],
['linegrossamountsimplified',[442,576,577,594]],
['linegrossamountsimplifiedhuf',[442,576,578,594]],
['linegrossamountnormal',[442,572,580,581]],
['tartalmú',[442,580,581,586,587,588]],
['különbözeti',[442,580,581,586,587,588]],
['adózás',[442,580,581,586,587,588,713,718]],
['ellenérték',[442,580,581,586,587,588]],
['margin',[442,580,581,586,587,588]],
['scheme',[442,580,581,586,587,588]],
['linegrossamountnormalhuf',[442,572,580,582]],
['linemodificationreferencetype',[442,583,592,606]],
['módosításról',[442,583,592,606]],
['goal',[442,583,592,606]],
['about',[442,583,592,606]],
['changes',[442,583,592,606]],
['updates',[442,583,592,606]],
['linenumberreference',[442,583,584,606]],
['módosítással',[442,583,584]],
['tételének',[442,583,584]],
['linenumber',[442,583,584,590,592,608,914,961,962,969,1026,1034,1035,1037]],
['létrehozása',[442,583,584]],
['meglévő',[442,583,584]],
['tételsorok',[442,583,584]],
['számozásának',[442,583,584]],
['folytatásaként',[442,583,584]],
['shall',[442,583,584]],
['increment',[442,583,584]],
['lineoperation',[442,583,585,606]],
['módosításának',[442,583,585]],
['linenetamount',[442,573,586,587]],
['összegével',[442,586,587,588]],
['csökkentett',[442,586,587,588]],
['reduced',[442,586,587,588]],
['linenetamounthuf',[442,573,586,588]],
['mergeditemindicator',[442,565,589,591]],
['méretcsökkentés',[442,589,591]],
['összevont',[442,589,591]],
['soradatokat',[442,589,591]],
['merged',[442,589,591]],
['size',[442,589,591]],
['reduction',[442,589,591]],
['linetype',[442,589,590,592,914,960,961,962]],
['linemodificationreference',[442,590,592,606]],
['referencestootherlines',[442,590,592,616]],
['referencestootherlinestype',[442,592,616,667]],
['hivatkozások',[442,592,616,667,668]],
['tételekre',[442,592,616,667,668,1026,1033,1034]],
['szükséges',[442,592,616,667,668,750,821,822,1026,1046,1048]],
['connected',[442,592,616,667,668]],
['necessary',[442,592,616,667,668,750,879,881,883,902,914,944,947,992,995,1200,1250,1251]],
['advancedata',[442,590,592,596]],
['productcodes',[442,590,592,613,914,961,962,970]],
['productcodestype',[442,592,613,642,914,962,970,979]],
['termékkódok',[442,592,613,642,914,962,970,979]],
['lineexpressionindicator',[442,590,592,605]],
['egysége',[442,592,605,651,654]],
['mértékegységben',[442,592,605]],
['kifejezhető',[442,592,605]],
['expressible',[442,592,605]],
['linenatureindicator',[442,590,592,607,914,961,962,968]],
['linedescription',[442,590,592,603,914,961,962,967]],
['megnevezése',[442,592,603,750,825,831,840,845,914,962,967,1200,1266,1267]],
['unitofmeasure',[442,590,592,617,750,840,848,853,914,961,962,972]],
['kanonikus',[442,592,617,914,962,972]],
['kifejezése',[442,592,617,618,914,962,972,973]],
['specifikáció',[442,592,617]],
['canonical',[442,592,617,914,962,972]],
['representation',[442,592,617,914,962,972]],
['specification',[442,592,617]],
['unitofmeasureown',[442,590,592,618,914,961,962,973]],
['literális',[442,592,618,914,962,973]],
['literal',[442,592,618,914,962,973]],
['unitprice',[442,590,592,619,914,961,962,974]],
['esetben',[442,592,619]],
['cases',[442,592,619,713,716,750]],
['unitpricehuf',[442,590,592,620,914,961,962,975]],
['linediscountdata',[442,590,592,604]],
['lineamountsnormal',[442,590,592,593]],
['beleértve',[442,592,593]],
['gyűjtőszámlát',[442,592,593]],
['aggregated',[442,592,593]],
['lineamountssimplified',[442,590,592,594]],
['intermediatedservice',[442,590,592,602]],
['közvetített',[442,592,602]],
['intermediated',[442,592,602]],
['article',[442,592,602,914,962,964,1010]],
['aggregateinvoicelinedata',[442,590,592,597]],
['newtransportmean',[442,590,592,611]],
['newtransportmeantype',[442,592,611,626]],
['értékesítés',[442,592,611,626,685,686,687,707,708,709,710,711,712,713,722,723,724,914,988,990,991,1026,1026,1183,1192,1200,1213,1225,1227,1232,1236]],
['depositindicator',[442,590,592,599]],
['betétdíj',[442,592,599]],
['bottle',[442,592,599]],
['container',[442,592,599]],
['obligatedforproductfee',[442,590,592,612]],
['tételt',[442,592,612]],
['kötelezettség',[442,592,612,648,650,662]],
['terheli',[442,592,610,612]],
['liable',[442,592,610,612]],
['gpcexcise',[442,590,592,601]],
['földgáz',[442,592,601]],
['villamos',[442,592,601]],
['energia',[442,592,601]],
['szén',[442,592,601]],
['adója',[442,592,601]],
['duty',[442,592,601]],
['electricity',[442,592,601]],
['coal',[442,592,601]],
['forints',[442,592,601,651,652,662,663]],
['dieseloilpurchase',[442,590,592,600]],
['netadeclaration',[442,590,592,610]],
['neta',[442,592,610]],
['tv-ben',[442,592,610]],
['adókötelezettség',[442,592,610]],
['alanyát',[442,592,610]],
['ciii',[442,592,610]],
['obligation',[442,592,610]],
['determined',[442,592,610]],
['health',[442,592,610,914,915,918,1013,1014,1015,1026,1106,1107,1108,1109,1110,1111,1180,1181,1183,1200,1213,1234,1235,1236,1237]],
['productfeeclause',[442,590,592,614]],
['productfeeclausetype',[442,592,614,648]],
['termékdíjról',[442,592,614,648]],
['szóló',[442,592,614,648]],
['tételre',[442,592,614,648,1026,1035,1036]],
['záradékok',[442,592,614,648]],
['clauses',[442,592,614,648]],
['lineproductfeecontent',[442,590,592,609]],
['productfeedatatype',[442,592,609,651,657,660]],
['tartalmára',[442,592,609]],
['conventionallineinfo',[442,590,592,598]],
['additionallinedata',[442,590,592,595,914,961,962,963,1026,1034,1035,1036]],
['linevatamount',[442,574,621,622]],
['linevatamounthuf',[442,574,621,623]],
['anyagszámok',[442,624]],
['materialnumber',[442,477,624,625]],
['brand',[442,611,626,630]],
['gyártmány',[442,626,630]],
['serialnum',[442,611,626,633]],
['alvázszám',[442,626,633]],
['gyári',[442,626,633]],
['gyártási',[442,626,633]],
['chassis',[442,626,633]],
['enginenum',[442,611,626,631]],
['motorszám',[442,626,631]],
['engine',[442,626,631,725,726,727]],
['firstentryintoservice',[442,611,626,632]],
['helyezés',[442,626,632]],
['entry',[442,626,632]],
['into',[442,626,632]],
['vehicletype',[442,626,628,725]],
['szárazföldi',[442,626,628,725]],
['motorised',[442,626,628,725]],
['land',[442,626,628,725]],
['vessel',[442,611,626,629,729]],
['vesseltype',[442,626,629,729]],
['vízi',[442,626,629,729]],
['megrendelésszámok',[442,634]],
['ordernumber',[442,478,634,635]],
['paymentevidencedocumentdatatype',[442,636,657,658]],
['bevallását',[442,636,657,658]],
['igazoló',[442,636,657,658]],
['verifying',[442,636,657,658]],
['declaration',[442,636,657,658]],
['evidencedocumentno',[442,636,638,658]],
['evidencedocumentdate',[442,636,637,658]],
['obligatedname',[442,636,640,658]],
['kötelezett',[442,636,639,640,641]],
['obligator',[442,636,639,640]],
['obligatedaddress',[442,636,639,658]],
['obligatedtaxnumber',[442,636,641,658]],
['obligated',[442,636,641]],
['productcode',[442,613,642,643,914,970,979,980]],
['productcodetype',[442,642,643,644,651,653,914,979,980,981]],
['termék-',[442,644,914,981]],
['szolgáltatáskódokat',[442,644,914,981]],
['different',[442,644,713,716,914,981]],
['productcodecategory',[442,643,644,647,653,914,980,981,984]],
['productcodevalue',[442,643,644,646,653,914,980,981,983]],
['productcodeownvalue',[442,643,644,645,653,914,980,981,982]],
['productfeetakeoverdata',[442,614,648,650]],
['productfeetakeoverdatatype',[442,648,650,662]],
['átvállalásával',[442,648,650,662]],
['connection',[442,648,650,662,750,901]],
['customerdeclaration',[442,614,648,649]],
['productfeecode',[442,609,651,653,660]],
['productfeequantity',[442,609,651,655,660]],
['productfeemeasuringunit',[442,609,651,654,660]],
['productfeerate',[442,609,651,656,660]],
['díjtétele',[442,651,656]],
['productfeeamount',[442,609,651,652,660]],
['összegzés',[442,657]],
['productfeeoperation',[442,568,657,661]],
['visszaigénylésre',[442,657,661]],
['beszállításra',[442,657,661]],
['concerns',[442,657,661]],
['productfeedata',[442,568,657,660]],
['productchargesum',[442,568,657,659]],
['összesen',[442,657,659,1200,1213,1215,1217,1222,1224,1228,1233,1237]],
['paymentevidencedocumentdata',[442,568,657,658]],
['takeoverreason',[442,650,662,664]],
['iránya',[442,662,664]],
['jogszabályi',[442,662,664]],
['alapja',[442,662,664]],
['direction',[442,662,664]],
['legal',[442,662,664]],
['takeoveramount',[442,650,662,663]],
['átvállalt',[442,662,663]],
['taken',[442,662,663]],
['projektszámok',[442,665]],
['projectnumber',[442,479,665,666]],
['referencetootherline',[442,616,667,668]],
['dátumok',[442,669]],
['shippingdate',[442,480,669,670]],
['summarybyvatratetype',[442,671,679,684]],
['mértékek',[442,671]],
['rates',[442,671,679,684,750,886,888]],
['vatrate',[442,671,672,684,685,688,691,704,706,716]],
['vatratenetdata',[442,671,674,684]],
['vatratenetdatatype',[442,671,674,710]],
['adómértékhez',[442,671,673,674,675,707,708,709,710,711,712,722,723,724]],
['vatratevatdata',[442,671,675,684]],
['vatratevatdatatype',[442,671,675,722]],
['vatrategrossdata',[442,671,673,684]],
['vatrategrossdatatype',[442,671,673,707]],
['summarygrossdatatype',[442,676,689,692,914,992,996,999]],
['invoicegrossamount',[442,676,677,692]],
['invoicegrossamounthuf',[442,676,678,692]],
['summarynormaltype',[442,679,689,690]],
['calculation',[442,679,684,685,689,690,691,914,988,996,998]],
['totals',[442,679,684,685,689,690,691,914,988,996,998]],
['summarybyvatrate',[442,679,684,690]],
['Összesítés',[]],
['Áfa-mérték',[]],
['summarysimplifiedtype',[442,685,689,691]],
['vatcontentgrossamount',[442,685,686,691,914,988,990,998]],
['adótartalomhoz',[442,685,686,687,914,988,990,991]],
['szolgáltatásnyújtás',[442,685,686,687,707,708,709,710,711,712,722,723,724,914,988,990,991]],
['sale',[442,685,686,687,914,988,990,991,1026,1174,1183]],
['vatcontentgrossamounthuf',[442,685,687,691,914,988,991,998]],
['summarynormal',[442,567,689,690]],
['summarysimplified',[442,567,689,691]],
['summarygrossdata',[442,567,689,692,914,943,996,999]],
['suppliercompanycode',[442,481,693,694]],
['nyújtása',[442,695,698,914,1000,1003]],
['supplieraddress',[442,555,695,700,914,1000,1005]],
['supplierbankaccountnumber',[442,555,695,701,914,1000,1006]],
['individualexemption',[442,555,695,699,914,1000,1004]],
['alanyi',[442,695,699,914,1000,1004]],
['mentes',[442,695,699,914,1000,1004]],
['individually',[442,695,699,914,1000,1004]],
['exciselicencenum',[442,555,695,697,914,1000,1002]],
['adóraktári',[442,695,697,914,1000,1002]],
['engedélyének',[442,695,697,914,1000,1002]],
['warehouse',[442,695,697,914,1000,1002]],
['license',[442,695,697,914,1000,1002]],
['vatamountmismatchtype',[442,704,713,716]],
['adóalap',[442,704,713,716]],
['felszámított',[442,704,713,715,716]],
['eltérésének',[442,704,713,716]],
['mismatching',[442,704,713,716]],
['levied',[442,704,713,716]],
['adótartalom',[442,704,706]],
['vatrategrossamount',[442,673,707,708]],
['sales',[442,707,708,709,710,711,712,722,723,724,1013,1014,1015,1026,1181,1192,1200,1213,1225,1227,1232,1236]],
['vatrategrossamounthuf',[442,673,707,709]],
['vatratenetamount',[442,674,710,711]],
['vatratenetamounthuf',[442,674,710,712]],
['adómentes',[442,713]],
['vatpercentage',[442,575,579,672,688,713,721,750,879,883,887]],
['mértéke',[442,713,721,750,879,882]],
['vatcontent',[442,575,579,672,688,713,717,750,879,881,887]],
['vatexemption',[442,575,579,672,688,713,719]],
['vatoutofscope',[442,575,579,672,688,713,720]],
['hatályán',[442,713,720]],
['kívüli',[442,713,720]],
['scope',[442,713,720]],
['vatdomesticreversecharge',[442,575,579,672,688,713,718]],
['fixed',[442,713,715,718]],
['fordított',[442,713,718]],
['national',[442,713,718]],
['reverse',[442,713,718]],
['marginschemeindicator',[442,575,579,672,688,713,714]],
['vatamountmismatch',[442,575,579,672,688,713,716]],
['esetei',[442,713,716]],
['novatcharge',[442,575,579,672,688,713,715]],
['nincs',[442,713,715,750,889,891,1026,1173]],
['charged',[442,713,715]],
['vatratevatamount',[442,675,722,723]],
['vatratevatamounthuf',[442,675,722,724]],
['enginecapacity',[442,628,725,726]],
['hengerűrtartalom',[442,725,726]],
['köbcentiméterben',[442,725,726]],
['capacity',[442,725,726,750,756,759]],
['centimetre',[442,725,726]],
['enginepower',[442,628,725,727]],
['teljesítmény',[442,725,727]],
['kw-ban',[442,725,727]],
['power',[442,725,727,750,896]],
['futott',[442,725,728]],
['kilométerek',[442,725,728]],
['travelled',[442,725,728]],
['distance',[442,725,728]],
['hajó',[442,729,731]],
['hossza',[442,729,731]],
['méterben',[442,729,731,750,777,778]],
['hull',[442,729,731]],
['metre',[442,729,731]],
['activityreferred',[442,629,729,730]],
['sailedhours',[442,629,729,732]],
['hajózott',[442,729,732]],
['sailed',[442,729,732]],
['amelyet',[442,733,750,808,811,903,1013,1019,1020,1021,1022]],
['kódoltan',[442,733]],
['sémaleíró',[442,733]],
['encoding',[442,733]],
['equivalent',[442,733]],
['definition',[442,733]],
['e-pénztárgépek',[750]],
['kommunikációs',[750,789,791]],
['eseteiben',[750]],
['leírását',[750,781,787,788]],
['e-cash',[750,768,771,772,773,774,775,776,777,778,779,780,781,783,784,785,787,789,790,791,792,793,796,801,803,808,811,813,816,819,825,829,830,833,834,835,836,837,886,888,891,903,907,909,913,914,928,929,932,933,944,951,952,1026,1044,1045,1046,1047,1093,1096,1119,1120,1133,1135,1138,1139,1140,1181,1199,1200,1208,1213,1241,1243,1244,1250,1251]],
['communication',[750,789,791,914,962,972]],
['e-pénztárgép',[750,771,773,774,775,776,777,778,779,780,781,783,784,789,791,792,793,796,799,808,811,813,825,829,830,833,835,836,837,891,907,909,913,914,928,932,933,944,952,1026,1044,1045,1046,1047,1119,1120,1133,1139,1140,1181,1199]],
['communicationdata',[750,914,1026,1200]],
['square',[750,912]],
['négyzetméter',[750,912]],
['productstatetype',[750,840,847,904]],
['active',[750,904]],
['aktív',[750,904]],
['blockunblocktype',[750,890]],
['blokkolás',[750,890,907]],
['block',[750,781,782,889,890,891,896,907]],
['unblock',[750,889,890,896,907]],
['feloldás',[750,890,907]],
['cashregisterworkstatetype',[750,781,784,891]],
['állapot',[750,756,781,782,783,784,889,891,896,907]],
['működik',[750,889,891]],
['blokkolva',[750,889,891]],
['working',[750,889,891]],
['blocked',[750,889,891,896]],
['blokkolt',[750,889,891,896]],
['állapotban',[750,889,891]],
['hibás',[750,891,1026,1173,1194]],
['aeblockunblockstatetype',[750,781,782,889]],
['blokkolási',[750,781,782,889]],
['gpstype',[750,777,779,780,898]],
['wgs84',[750,777,778,779,780,898]],
['koordináták',[750,898]],
['másodperc',[750,898]],
['coordinates',[750,898]],
['degrees',[750,777,779,780,898]],
['minutes',[750,898]],
['seconds',[750,801,802,898]],
['httpmethodtype',[750,808,809,899]],
['metódusok',[750,899]],
['listája',[750,781,785,806,879,884,886,899,1200,1264,1269,1272]],
['methods',[750,899,1026,1130,1131]],
['mobileconnectiontype',[750,756,761,901]],
['Átviteli',[]],
['technológia',[750,756,761,901]],
['mobile',[750,901]],
['technology',[750,756,761,901]],
['percentagetype',[750,879,881,883,902]],
['százalékos',[750,902]],
['százalékjel',[750,879,881,883,902]],
['nélkül',[750,756,758,879,881,883,902]],
['szükség',[750,879,881,883,902,914,944,947,992,995,1200,1250,1251]],
['tizedesponttal',[750,902]],
['tizedesjegyre',[750,902]],
['kerekítve',[750,902]],
['percentage',[750,879,881,882,883,902]],
['without',[750,756,758,879,881,883,902,1200,1213,1214]],
['rounded',[750,902]],
['printmessagetype',[750,903]],
['átadott',[750,903,1013]],
['pénztárzárást',[750,903]],
['nyomtatni',[750,903]],
['nyomtatón',[750,903]],
['print',[750,903,907]],
['printed',[750,903]],
['printer',[750,903]],
['a-za-z0-9aáeéiíoóöőuúüűaÁeÉiÍoÓÖŐuÚÜŰ',[]],
['certificatesigningrequesttype',[750,892]],
['aláírási',[750,892,895]],
['signing',[750,892,894,895]],
['atomiccsrtype',[750,892,1026,1172]],
['cmscertificatesigningrequesttype',[750,895]],
['certificatetype',[750,893]],
['certificatetypetype',[750,894]],
['autentikációs',[750,894]],
['aláíró',[750,894]],
['querycertificateresulttype',[750,905]],
['complete',[750,905]],
['progress',[750,905]],
['folyamatban',[750,905]],
['registrationnumbertype',[750,789,798,906]],
['Üzembehelyezési',[]],
['servicetype',[750,808,811,907]],
['pénztárgép',[750,896,907]],
['blocking',[750,907]],
['unblocking',[750,907]],
['download',[750,907]],
['terméktörzs',[750,907]],
['letöltés',[750,907]],
['update',[750,801,803,805,854,861,907]],
['frissítés',[750,907]],
['Üzemeltetés',[]],
['befejezése',[750,907]],
['lekérdezése',[750,907]],
['hello',[750,907]],
['adatlekérdezés',[750,907]],
['owner',[750,833,834,837,907,914,928,929,933,1026,1133,1135,1140]],
['change',[750,801,802,907,914,944,945,1026,1093,1094,1174,1200,1201,1202,1203,1213,1216,1217]],
['Átszemélyesítés',[]],
['küldés',[750,907]],
['ellenőrzés',[750,907]],
['regisztráció',[750,907]],
['renew',[750,907]],
['megújítása',[750,907]],
['expired',[750,907]],
['lejárt',[750,907]],
['törzs',[750,907]],
['sound',[750,907]],
['hangfálj',[750,907]],
['logo',[750,907]],
['logó',[750,907]],
['beküldés',[750,907]],
['machine',[750,907]],
['submission',[750,907]],
['send',[750,907]],
['missing',[750,907]],
['hiányzó',[750,907]],
['beküldése',[750,907]],
['epénztárgép',[750,789,794,909]],
['hardveres',[750,764,767,854,864,909]],
['ae-based',[750,764,767,854,864,909]],
['hardware',[750,764,767,825,826,829,830,854,864,909]],
['android',[750,909]],
['felhős',[750,909]],
['cloud',[750,909]],
['huawei',[750,909]],
['taxpayeraddressclasstype',[750,865,867,910]],
['teaorcodetype',[750,877,878,911]],
['teÁor',[]],
['urltype',[750,808,812,821,822,913]],
['meghívandó',[750,806,808,812,913]],
['szabványos',[750,913]],
['url-je',[750,808,812,913]],
['host',[750,913]],
['port',[750,913]],
['resource',[750,913]],
['standard',[750,777,779,780,913]],
['reqested',[750,913]],
['fiscaldaystatetype',[750,781,786,897]],
['adóügyi',[750,781,786,897,1200,1208,1212]],
['nyitott',[750,897]],
['closed',[750,897]],
['zárt',[750,897]],
['eventcodetype',[750,768,769,896]],
['esemény',[750,768,769,770,896]],
['bekapcsolása',[750,896]],
['shutdown',[750,896]],
['leállása',[750,896]],
['blokkolta',[750,896]],
['magát',[750,896]],
['itself',[750,896]],
['küldött',[750,896]],
['megjelenítése',[750,896]],
['nyomtatása',[750,896]],
['nyugtázva',[750,896]],
['display',[750,896]],
['sent',[750,771,772,774,781,785,788,896,1026,1181,1199,1200,1241,1275]],
['confirmed',[750,896]],
['fontos',[750,896]],
['jelentése',[750,896]],
['reporting',[750,896]],
['important',[750,896]],
['events',[750,771,772,896]],
['aeinternalmetric',[750,751,754,755,756,757,783]],
['belső',[750,751,752,753,754,755,756,757,781,785]],
['mérőszámai',[750,751,754,755,756,757]],
['internal',[750,751,752,753,754,755,756,757,781,785]],
['indicators',[750,751,754,755,756,757]],
['aeinternalmetricid',[750,751,752,755]],
['appinfo',[750,751,752,753,756,757,758,759,760,761,762,763,764,765,766,767,768,770,771,772,773,774,775,776,777,778,779,780,781,783,784,785,789,790,791,793,794,795,797,798,799,800,801,802,803,804,805,821,823,824,825,826,827,828,829,830,831,832,838,839,854,855,856,857,858,859,860,861,862,863,864,879,880,881,882,883,884,885,886,887,888,914,915,916,917,918,919,920,921,922,923,924,925,926,927,928,930,931,934,935,936,937,938,939,940,941,942,943,944,945,946,947,948,949,950,951,953,954,955,956,957,958,959,960,961,962,963,964,965,966,967,968,969,970,971,972,973,974,975,976,977,978,979,980,981,982,983,984,985,986,987,988,989,990,991,992,993,994,995,996,997,998,999,1000,1001,1002,1003,1004,1005,1006,1007,1008,1026,1027,1028,1029,1030,1031,1032,1033,1034,1035,1036,1037,1038,1039,1040,1046,1047,1048,1049,1050,1051,1052,1053,1054,1055,1056,1057,1058,1059,1060,1061,1062,1063,1064,1065,1066,1067,1070,1071,1072,1073,1075,1076,1077,1078,1079,1080,1081,1082,1083,1084,1085,1086,1087,1088,1089,1090,1092,1093,1094,1095,1096,1097,1098,1099,1100,1101,1102,1103,1104,1105,1106,1107,1108,1109,1110,1111,1112,1113,1114,1115,1116,1117,1118,1119,1120,1121,1122,1124,1125,1126,1127,1128,1129,1130,1131,1132,1133,1134,1136,1137,1138,1144,1145,1146,1147,1148,1150,1151,1152,1153,1154,1156,1157,1158,1159,1160,1161,1162,1163,1164,1165,1200,1201,1202,1203,1204,1205,1206,1207,1208,1209,1210,1211,1212,1213,1214,1215,1216,1217,1218,1219,1220,1221,1222,1223,1224,1225,1226,1227,1228,1229,1230,1231,1232,1233,1234,1235,1236,1237,1238,1239,1240,1241,1242,1243,1244,1245,1246,1250,1251,1252,1253,1254,1255,1256,1257,1258,1259,1260,1261,1262,1263,1264,1265,1266,1267,1268,1269,1270,1271,1272,1273,1274]],
['legacymapping',[750,751,752,753,756,757,758,759,760,761,762,763,764,765,766,767,768,770,771,772,773,774,775,776,777,778,779,780,781,783,784,785,789,790,791,793,794,795,797,798,799,800,801,802,803,804,805,821,823,824,825,826,827,828,829,830,831,832,838,839,854,855,856,857,858,859,860,861,862,863,864,879,880,881,882,883,884,885,886,887,888,914,915,916,917,918,919,920,921,922,923,924,925,926,927,928,930,931,934,935,936,937,938,939,940,941,942,943,944,945,946,947,948,949,950,951,953,955,956,957,958,959,960,961,962,963,964,965,966,967,968,969,970,971,972,973,974,975,976,977,978,979,980,981,982,983,984,985,986,987,988,989,990,991,992,993,994,995,996,997,998,999,1000,1001,1002,1003,1004,1005,1006,1007,1008,1026,1027,1028,1029,1030,1031,1032,1033,1034,1035,1036,1037,1038,1039,1040,1046,1047,1048,1049,1050,1051,1052,1053,1054,1055,1056,1057,1058,1059,1060,1061,1062,1063,1064,1065,1066,1067,1070,1071,1072,1073,1075,1076,1077,1078,1079,1080,1081,1082,1083,1084,1085,1086,1087,1088,1089,1090,1092,1093,1094,1095,1096,1097,1098,1099,1100,1101,1102,1103,1104,1105,1106,1107,1108,1109,1110,1111,1112,1113,1114,1115,1116,1117,1118,1119,1120,1121,1122,1124,1125,1126,1127,1128,1129,1130,1131,1132,1133,1134,1136,1137,1138,1144,1145,1146,1147,1148,1150,1151,1152,1153,1154,1156,1157,1158,1159,1160,1161,1162,1163,1164,1165,1200,1201,1202,1203,1204,1205,1206,1207,1208,1209,1210,1211,1212,1213,1214,1215,1216,1217,1218,1219,1220,1221,1222,1223,1224,1225,1226,1227,1228,1229,1230,1231,1232,1233,1234,1235,1236,1237,1238,1239,1240,1241,1242,1243,1244,1245,1246,1250,1251,1252,1253,1254,1255,1256,1257,1258,1259,1260,1261,1262,1263,1264,1265,1266,1267,1268,1269,1270,1271,1272,1273,1274]],
['mező',[750,751,752,756,757,764,765,766,767,781,783,789,793,797,838,839,854,855,856,857,858,860,862,863,864,879,881,882,883,884,885,886,887,888,914,915,917,918,919,920,924,925,926,927,928,930,931,934,937,939,940,941,942,943,944,945,951,953,955,956,958,960,961,962,963,964,966,968,969,970,973,976,977,978,979,980,981,982,984,985,986,987,988,990,991,992,993,996,998,999,1000,1001,1002,1003,1004,1005,1006,1026,1027,1028,1029,1031,1032,1033,1034,1035,1036,1037,1038,1039,1040,1046,1048,1049,1050,1056,1057,1058,1060,1061,1062,1063,1064,1065,1067,1070,1071,1072,1073,1075,1076,1078,1079,1080,1081,1085,1086,1088,1089,1090,1093,1094,1096,1112,1113,1116,1117,1118,1119,1122,1128,1129,1133,1134,1138,1144,1145,1146,1147,1148,1150,1151,1152,1153,1154,1156,1159,1161,1162,1163,1165,1200,1201,1202,1205,1208,1209,1210,1213,1214,1215,1216,1217,1218,1219,1220,1221,1222,1223,1224,1225,1226,1227,1228,1229,1230,1231,1232,1233,1234,1235,1236,1237,1238,1240,1250,1252,1253,1254,1255,1256,1257,1258,1259,1260,1261,1262,1263,1264,1265,1266,1269,1273]],
['mérőszám',[750,751,752,753]],
['aeinternalmetricvalue',[750,751,753,755]],
['aeinternalmetriclisttype',[750,754,756,757]],
['aestatetype',[750,756,781,783]],
['freestorage',[750,756,759,783]],
['ae-ben',[750,756,759,763,789,794,795,825,831,832]],
['működő',[750,756,759,763]],
['adattárolón',[750,756,759]],
['lévő',[750,756,759,789,794,795,825,831,832]],
['szabad',[750,756,759]],
['tároló',[750,756,759]],
['kapacitás',[750,756,759]],
['kbyte',[750,756,759]],
['free',[750,756,759]],
['storage',[750,756,759]],
['device',[750,756,759]],
['signalstrength',[750,756,763,783]],
['modem',[750,756,763,789,794,825,831,832]],
['mért',[750,756,763]],
['hálózati',[750,756,763]],
['térerőt',[750,756,763]],
['dbm-ig',[750,756,763]],
['terjedő',[750,756,763]],
['skálán',[750,756,763]],
['negatív',[750,756,763,914,944,947,992,995]],
['számmal',[750,756,758,763]],
['ábrázolva',[750,756,763]],
['network',[750,756,763]],
['signal',[750,756,763]],
['strength',[750,756,763]],
['measured',[750,756,763]],
['operating',[750,756,763,877,878]],
['negative',[750,756,763,914,944,947,992,995]],
['scale',[750,756,763]],
['negativeinteger',[750,756,763]],
['batterylevel',[750,756,758,783]],
['töltöttség',[750,756,758]],
['vezető',[750,756,758,1200,1250,1251]],
['nullák',[750,756,758]],
['zeros',[750,756,758,1200,1250,1251]],
['mobileconnection',[750,756,761,783]],
['legutóbbi',[750,756,761,762,854,861]],
['bejelentkezés',[750,756,761,762]],
['átviteli',[750,750,756,761,901]],
['transmission',[750,756,761]],
['during',[750,756,761,762]],
['provider',[750,756,762,783]],
['infrastruktúrát',[750,756,762]],
['biztosító',[750,756,762]],
['fizikai',[750,756,762]],
['mobilszolgáltató',[750,756,762]],
['telekom',[750,756,762]],
['telenor',[750,756,762]],
['vodafone',[750,756,762]],
['mobil',[750,756,762]],
['physical',[750,756,762]],
['infrastructure',[750,756,762]],
['0|1|2|3',[750,756,762]],
['gsmcell',[750,756,760,783]],
['legutóbb',[750,756,760,789,798]],
['cella',[750,756,760]],
['cell',[750,756,760]],
['hardwaretechnicalinfotype',[750,789,793,825]],
['műszaki',[750,771,775,789,793,825]],
['jellemzői',[750,771,775,789,793,825]],
['hw-based',[750,789,793,825]],
['features',[750,789,793,825]],
['aename',[750,793,825,827]],
['gyártói',[750,825,827,830]],
['típusnév',[750,825,827]],
['manufacturer',[750,825,827,830,840,845]],
['aehardwareversion',[750,793,825,826]],
['hardver',[750,825,826,830]],
['aesoftware',[750,793,825,828]],
['ae-n',[750,825,828]],
['futó',[750,789,790,813,816,825,828]],
['modemname',[750,793,825,831]],
['kiolvasott',[750,789,794,795,825,831,832]],
['modemsoftwareversion',[750,793,825,832]],
['szoftververziója',[750,825,832]],
['cashregistername',[750,793,825,830]],
['típusmegjelölése',[750,825,830]],
['designation',[750,825,830]],
['cashregisterhardwareversion',[750,793,825,829]],
['hardververziója',[750,825,829]],
['cashregistereventtype',[750,768,771,772]],
['e-pénztárgépben',[750,768,771,772,781,785]],
['bekövetkezett',[750,768,771,772]],
['események',[750,768,771,772]],
['naplózás',[750,768]],
['eventcode',[750,768,769,772]],
['eventdescription',[750,768,770,772]],
['descriptive',[750,768,770]],
['cashregisterpositiontype',[750,771,773,777]],
['földrajzi',[750,771,773,777,779,780]],
['geographical',[750,771,773,777]],
['latitude',[750,773,777,779]],
['nillable',[750,777,779,780]],
['szélessége',[750,777,779]],
['fokban',[750,777,779,780]],
['előjelet',[750,777,779,780]],
['használva',[750,777,779,780]],
['using',[750,777,779,780,1026,1102,1105]],
['longitude',[750,773,777,780]],
['hosszúsága',[750,777,780]],
['height',[750,773,777,778]],
['tengerszint',[750,777,778]],
['feletti',[750,777,778]],
['magassága',[750,777,778]],
['altitude',[750,777,778]],
['above',[750,777,778]],
['level',[750,777,778,840,842]],
['metres',[750,777,778]],
['cashregisterstatetype',[750,771,774,781]],
['rendszerállapot',[750,771,774,781]],
['statisztika',[750,771,774,781]],
['statistics',[750,771,774,781]],
['cashregisterworkstate',[750,774,781,784]],
['aeblockunblockstate',[750,774,781,782]],
['fiscaldaystate',[750,774,781,786]],
['állapota',[750,781,786]],
['lastsentrecordcounter',[750,774,781,788]],
['utoljára',[750,781,787,788]],
['recordcounter',[750,781,787,788,914,944,951,1017,1026,1093,1096,1133,1138,1205,1210,1238,1261,1273]],
['lásd',[750,781,787,788,914,953,954,1026,1144,1145,1146,1150,1151,1152]],
['dokumentáció',[750,781,787,788]],
['„nav',[750,781,787,788]],
['ellenőrző',[750,781,787,788,854,859,914,944,950,996,997,1026,1133,1137,1196]],
['képzése”',[750,781,787,788]],
['fejezetében',[750,781,787,788]],
['generate',[750,781,787,788]],
['chapter',[750,781,787,788]],
['development',[750,781,787,788]],
['lastrecordcounter',[750,774,781,787]],
['e-pénztárgépen',[750,781,787,789,790,813,816,819,833,834,886,888,914,928,929,944,951,1026,1093,1096,1133,1135,1138]],
['aestate',[750,774,781,783]],
['errors',[750,771,774,781,785]],
['cashregisterstate',[750,771,774,781,785]],
['rekord',[750,781,785]],
['küldése',[750,781,785]],
['jelentkezett',[750,781,785]],
['hibák',[750,771,774,781,785]],
['kódjainak',[750,781,785]],
['have',[750,781,785]],
['occurred',[750,781,785]],
['since',[750,781,785]],
['record',[750,781,785]],
['cashregistertechnicalinfotype',[750,771,775,789]],
['cashregistersoftware',[750,775,789,790]],
['details',[750,789,790,813,815,818,833,835,1013,1014,1015,1019,1020,1022]],
['imei',[750,775,789,794]],
['imsi',[750,775,789,795]],
['epénztárgépben',[750,789,795]],
['operatorsite',[750,775,789,796]],
['operatorsitetype',[750,789,796,833]],
['üzemeltetői',[750,789,796,813,815,818]],
['üzemeltetési',[750,789,796,813,815,818,833,835,836,914,928,932,944,952,1026,1133,1139]],
['hely',[750,789,796,813,815,818,833,835]],
['vattype',[750,789,800,884,885,886]],
['aktuális',[750,771,774,775,789,800,813,814,815,816,817]],
['Áfa-tábla',[]],
['table',[750,789,800,813,817,820]],
['registrationnumber',[750,775,789,798]],
['üzembehelyezési',[750,750,789,798,906]],
['latest',[750,789,798,799]],
['installation',[750,789,798]],
['communicationprotocolversion',[750,775,789,791]],
['protokoll',[750,789,791]],
['protocol',[750,789,791]],
['schemaversion',[750,775,789,799]],
['legfrissebb',[750,789,799]],
['aminek',[750,789,799]],
['megfelelnek',[750,789,799]],
['epdprocessidentifiers',[750,775,789,792]],
['epdprocessidentifierstype',[750,789,792,813]],
['jelenlegi',[750,789,792,813]],
['állapotát',[750,789,792,813]],
['előállító',[750,789,792,813]],
['végrehajtott',[750,789,792,813,814,815,816,817]],
['utasítások',[750,789,792,813]],
['valamint',[750,789,792,813]],
['legutolsó',[750,789,792,813]],
['átvett',[750,789,792,813]],
['időzített',[750,789,792,813]],
['azonosítói',[750,789,792,813]],
['process',[750,789,792,813,814,815,816,817,818,819,820,1026,1198]],
['executed',[750,789,792,813,814,815,816,817,818,819,820]],
['instructions',[750,789,792,813]],
['produce',[750,789,792,813]],
['timed',[750,789,792,813]],
['hardwaretechnicalinfo',[750,775,789,793]],
['posassignedbankaccounts',[750,775,789,797]],
['posassignedbankaccountlisttype',[750,789,797,838]],
['terminálhoz',[750,789,797,838,839]],
['rendelt',[750,789,797,838,839]],
['assigned',[750,789,797,838,839]],
['terminal',[750,789,797,838,839]],
['cashregistertimeupdatetype',[750,771,776,801]],
['állítás',[750,801]],
['oldtime',[750,776,801,805]],
['amikor',[750,801,805]],
['átállítás',[750,801,805]],
['régi',[750,801,805]],
['bekövetkezik',[750,801,805]],
['newtime',[750,776,801,804]],
['beállított',[750,801,804]],
['setting',[750,771,776,801,804]],
['changeduration',[750,776,801,802]],
['diszkréten',[750,801,802]],
['változtatja',[750,801,802]],
['időt',[750,801,802]],
['hanem',[750,801,802]],
['időtávon',[750,801,802]],
['gyorsítja',[750,801,802]],
['lassítja',[750,801,802]],
['átmenet',[750,801,802]],
['másodpercben',[750,801,802]],
['discretely',[750,801,802]],
['accelerates',[750,801,802]],
['slows',[750,801,802]],
['down',[750,801,802]],
['transition',[750,801,802]],
['changemode',[750,776,801,803]],
['időállítás',[750,801,803]],
['1-gsm',[750,801,803]],
['szinkronizáció',[750,801,803]],
['2-szervizes',[750,801,803]],
['beavatkozás',[750,801,803]],
['3-Üzemeltető',[]],
['módosítva',[750,801,803]],
['4-számítógép',[750,801,803]],
['e-pénztárgépeknél',[750,801,803]],
['számítógép',[750,801,803]],
['órájához',[750,801,803]],
['szinkronizálva',[750,801,803]],
['5-egyéb',[750,801,803]],
['automatikus',[750,801,803]],
['synchronisation',[750,801,803]],
['2-intervention',[750,801,803]],
['3-adjusted',[750,801,803]],
['4-for',[750,801,803]],
['computer-based',[750,801,803]],
['registers',[750,801,803]],
['synchronized',[750,801,803]],
['computer',[750,801,803]],
['5-other',[750,801,803]],
['automatic',[750,801,803]],
['1|2|3|4|5',[750,801,803]],
['operatorsitevalidfrom',[750,796,833,835]],
['érvényesség',[750,750,833,835,840,849,850]],
['shop',[750,796,833,836,914,928,932,940,944,952,1017,1026,1133,1139,1141,1142,1143,1205,1210,1238,1261,1273]],
['shoptype',[750,833,836,914,928,932,944,952,1026,1133,1139,1141]],
['taxpayertype',[750,833,834,837,914,928,929,933,1026,1133,1135,1140,1166]],
['üzemeltető',[750,833,834,837,914,928,929,933,1026,1133,1135,1140]],
['üzemanyagkúton',[750,750,833,833,834,837,914,914,928,928,929,933,1026,1026,1133,1133,1135,1140]],
['kétvállalkozós',[750,833,834,837,914,928,929,933,1026,1133,1135,1140]],
['üzemanyag',[750,833,837,914,928,933,1026,1133,1140]],
['tulajdonos',[750,833,837,914,928,933,1026,1133,1140]],
['fuel',[750,833,834,837,914,915,917,928,929,933,1013,1014,1015,1026,1102,1104,1133,1135,1140,1180,1181,1183,1200,1213,1230,1231,1232,1233]],
['two-operator',[750,833,834,837,914,928,929,933,1026,1133,1135,1140]],
['well',[750,833,834,837,914,928,929,933,1026,1133,1135,1140]],
['cotaxpayer',[750,796,833,834,914,928,929,940,1026,1133,1135,1205,1210,1238,1261,1273]],
['Üzemanyagkúton',[]],
['posassignedbankaccountnumber',[750,797,838,839]],
['appsoftwaretype',[750,764]],
['softwarehash',[750,790,828,854,859]],
['kiszámított',[750,854,859]],
['calculated',[750,854,859]],
['algorithm',[750,854,859]],
['softwarelastupdatetime',[750,790,828,854,861]],
['frissítésének',[750,854,861]],
['taxpayeraddressclass',[750,865,867,869]],
['productitemtype',[750,840,852,853]],
['adattípus',[750,840]],
['dtszkid',[750,840,843,853]],
['dtszk',[750,840,843]],
['productid',[750,840,844,853]],
['terméken',[750,840,844]],
['feltüntetett',[750,840,844,1026,1097,1100]],
['productname',[750,840,846,853]],
['productmanufacturer',[750,840,845,853]],
['gyártó',[750,840,845]],
['validfrom',[750,840,849,853]],
['Érvényesség',[]],
['-tól',[750,840,849]],
['validto',[750,840,850,853]],
['categorycode',[750,840,841,853]],
['kategória',[750,840,841,842,886,888]],
['categorynamelevel4',[750,840,842,853]],
['szint',[750,840,842]],
['productlisttype',[750,852]],
['productitem',[750,852,853]],
['feltételnek',[750,852,853]],
['megfelelt',[750,852,853]],
['termékeket',[750,852,853]],
['eredménylista',[750,852,853]],
['teaorcodelisttype',[750,877]],
['üzlet',[750,877,878,1026,1141,1142,1143]],
['tevékenységei',[750,877]],
['activities',[750,877,878]],
['teaorcode',[750,877,878]],
['tevékenysége',[750,877,878]],
['endpointslisttype',[750,806]],
['endpointok',[750,806]],
['endpoints',[750,806,807]],
['called',[750,806,808,811]],
['endpointtype',[750,806,807,808]],
['endpoint',[750,806,807,808,809,810]],
['hívás',[750,806,807]],
['call',[750,806,807,808,809]],
['positiveinteger',[750,808,810]],
['hívásának',[750,808,809,810]],
['sorrendje',[750,808,810]],
['kezdődően',[750,808,810]],
['sorszámú',[750,808,810]],
['endpointtal',[750,808,810]],
['először',[750,808,810]],
['meghívni',[750,808,810]],
['starting',[750,808,810]],
['lower',[750,808,810]],
['httpmethod',[750,807,808,809]],
['metódusa',[750,808,809]],
['hívjon',[750,808,811]],
['vatgrouptype',[750,879,886,887]],
['kulcsok',[750,879,882,886]],
['collectorcode',[750,879,880,887,914,956,957,966,988,989,998,1026,1050,1051,1052]],
['collectorcodetype',[750,879,880,914,956,957,988,989,1026,1051,1052,1175]],
['jele',[750,879,880,1026,1051,1052]],
['karakteren',[750,879,880,1026,1051,1052,1097,1099,1200,1250,1251]],
['collector',[750,879,880,914,956,957,988,989,1026,1049,1050,1051,1052,1053,1054,1055,1175]],
['Áfa-kulcs',[]],
['százalékban',[750,879,881,883]],
['kifejezve',[750,879,881,882,883]],
['tizedespontot',[750,879,881,883]],
['alkalmazva',[750,879,881,883]],
['kulcshoz',[750,879,881]],
['vatlabel',[750,879,882,887]],
['egyes',[750,879,882]],
['számban',[750,879,882]],
['százalékjellel',[750,879,882]],
['each',[750,879,882]],
['vatlisttype',[750,884]],
['vatvalidfrom',[750,800,885,886,888]],
['azon',[750,886,888]],
['kulcsokat',[750,886,888]],
['címkéket',[750,886,888]],
['alkalmazni',[750,886,888]],
['labels',[750,886,888]],
['must',[750,886,888]],
['vatgroup',[750,800,885,886,887]],
['cashregisterinfotype',[750,771]],
['cashregisterevent',[750,771,772]],
['naplója',[750,771,772]],
['eseményeket',[750,771,772]],
['beküldeni',[750,771,772]],
['occured',[750,771,772,774]],
['cashregistertechnicalinfo',[750,771,775]],
['állapotának',[750,771,774,775]],
['megfelelően',[750,771,774,775]],
['illetve',[750,771,774]],
['tekintetében',[750,771,774]],
['cashregisterposition',[750,771,773]],
['műholdas',[750,771,773]],
['helymeghatározásra',[750,771,773]],
['alkalmas',[750,771,773]],
['applicable',[750,771,773]],
['cashregistertimeupdate',[750,771,776]],
['állításra',[750,771,776]],
['óraállítás',[750,771,776]],
['körülményeiről',[750,771,776]],
['szolgáltatni',[750,771,776]],
['currentvatprocessid',[750,792,813,817]],
['processidentifiertype',[750,813,814,815,816,817,818,819,820,1026,1198]],
['táblát',[750,813,817,820]],
['érvényre',[750,813,814,815,816,817,818,819,820]],
['juttató',[750,813,814,815,816,817,818,819,820]],
['utasítás',[750,813,814,815,816,817,818,819,820]],
['instruction',[750,813,814,815,816,817,818,819,820]],
['enforces',[750,813,814,815,816,817,819]],
['nextvatprocessid',[750,792,813,820]],
['következő',[750,813,818,820]],
['jövőben',[750,813,818,819,820]],
['végrehajtandó',[750,813,818,819,820]],
['future',[750,813,818,819,820]],
['enforce',[750,813,818,820]],
['next',[750,813,818,819,820]],
['currentoperatorsiteprocessid',[750,792,813,815]],
['nextoperatorsiteprocessid',[750,792,813,818]],
['currentsoftwareprocessid',[750,792,813,816]],
['verziót',[750,813,816,819]],
['running',[750,813,816]],
['nextsoftwareprocessid',[750,792,813,819]],
['következően',[750,813,819]],
['futtatandó',[750,813,819]],
['currentaeblockunblockstateprocessid',[750,792,813,814]],
['állapotot',[750,813,814]],
['firmwareslicetype',[750,821]],
['letöltöthető',[750,821,824]],
['downloadable',[750,821,824]],
['firmwareslicenumber',[750,821,824]],
['firmwarehash',[750,821,823]],
['letöltött',[750,821,823]],
['segítségével',[750,821,823]],
['ellenőrizhető',[750,821,823]],
['letöltötés',[750,821,823]],
['sérült',[750,821,823]],
['downloaded',[750,821,822,823]],
['equal',[750,821,823]],
['firmwaredownloadurl',[750,821,822]],
['letöltéséhez',[750,821,822]],
['groupidentificationnumber',[834,837,929,933,1026,1135,1140,1166,1167]],
['shopname',[836,932,952,1026,1139,1141,1142]],
['shopshortname',[836,932,952,1026,1139,1141,1143]],
['európai',[914,962,964,1010]],
['gyártmánykód',[914,962,964,1010]],
['european',[914,962,964,1010]],
['numbering',[914,962,964,1010]],
['documentdatatype',[914,915,976,978,985,987]],
['változott',[914,915,921,944,946,1026,1088,1092,1093,1095,1119,1121]],
['struktúra',[914,915,921,944,946,1026,1088,1092,1093,1095,1119,1121,1200,1213]],
['documentissuedate',[914,915,920,978,987]],
['documentdatetype',[914,915,920,1026,1070,1074,1182]],
['issuestartdatetime',[914,915,923,944,949,978,987,1017,1026,1133,1136,1205,1210,1238,1261,1273]],
['nyitásának',[914,915,923,944,949,1026,1133,1136]],
['opening',[914,915,923,944,949,1026,1133,1136,1200,1208,1209]],
['healthfundinfo',[914,915,918,978,987]],
['healthfundinfotype',[914,915,918,1026,1106]],
['egészségkártya',[914,915,918,1026,1106,1108,1180]],
['információk',[914,915,917,918,919]],
['fuelcardinfo',[914,915,917,978,987]],
['fuelcardinfotype',[914,915,917,1026,1102]],
['Üzemanyagkártya',[]],
['consumesummarynumber',[914,915,916,978,987]],
['fogyasztásösszesítő',[914,915,916]],
['consume',[914,915,916,1026,1180,1181]],
['documenttype',[914,915,919,939]],
['documentdetailtype',[914,924,928,931]],
['documentcategory',[914,924,926,931]],
['documentcategorytype',[914,924,926,1026,1180]],
['amending',[914,924,926]],
['paymentinstruments',[914,924,927,931]],
['instrumenttype',[914,924,927,944,945,1026,1093,1094,1112,1200,1201,1202,1208,1209,1213,1216]],
['fizetőeszközök',[914,924,927,1026,1128,1200,1213,1217]],
['instruments',[914,924,927,1026,1128]],
['additionaldocumentdata',[914,924,925,931]],
['documentheadtype',[914,928,939,940]],
['documentdetail',[914,928,931,940]],
['documentreferencetype',[914,934,939,942]],
['originaldocumentnumber',[914,934,938,942]],
['documentunboundedindextype',[914,934,937,1026,1185]],
['cancellationreason',[914,934,935,942]],
['cancellationreasontype',[914,934,935,1026,1173]],
['sztornózás',[914,934,935,1026,1173]],
['modificationreason',[914,934,936,942]],
['modificationreasontype',[914,934,936,1026,1194]],
['documentreference',[914,919,939,942]],
['documenthead',[914,919,939,940]],
['documentlines',[914,919,939,941]],
['dokumentumon',[914,939,941,962,972,973,992,995,1026,1031,1032,1133,1134,1200,1264,1265,1266,1267,1268,1269,1272]],
['documentsummary',[914,919,939,943]],
['lineamountsdocumenttype',[914,956,962,966]],
['értékek',[914,956,957]],
['linegrossamountdocument',[914,956,958,966]],
['linegrossamountdocumenthuf',[914,956,959,966]],
['eancode',[914,961,962,964]],
['eantype',[914,962,964,1026,1186]],
['lineamountsdocument',[914,961,962,966]],
['itemnature',[914,961,962,965]],
['itemnaturetype',[914,962,965,1026,1192]],
['otherdocumentcoredatatype',[914,976,1013,1014,1015]],
['üzleti',[35,90,121,153,272,274,914,953,955,976,977,978,985,986,987,1013,1014,1015,1016,1018,1026,1119]],
['metadata',[914,953,955,976,977,985,986,1015,1016,1018]],
['metadatatype',[914,953,955,976,977,985,986,1026,1119]],
['otherdocumentdata',[914,976,978,1015]],
['types',[914,979]],
['receiptcoredatatype',[914,985,1013,1014,1016]],
['receiptdata',[914,985,987,1016]],
['invoicecoredatatype',[914,953,1013,1014,1018]],
['simplefied',[914,953]],
['summarydocumenttype',[914,988,996,998]],
['documentgrossamount',[914,992,993,999]],
['documentroundingamount',[914,944,947,992,995,999,1017]],
['kerekítés',[914,944,947,992,995,1200,1213,1214]],
['számolva',[914,944,947,992,995,1026,1097,1100]],
['előjellel',[914,944,947,992,995,1200,1201,1207]],
['ilyen',[914,944,947,992,995]],
['rounding',[914,944,947,992,995,1200,1201,1207,1213,1214,1215,1240]],
['summarydocument',[914,943,996,998]],
['ntcacontrolcode',[914,943,944,950,996,997,1017,1026,1133,1137,1205,1210,1238,1261,1273]],
['ntcacontrolcodetype',[914,944,950,996,997,1026,1133,1137,1196]],
['bizonylaton',[914,944,947,950,996,997,1013,1019,1021,1026,1133,1137,1196]],
['invoicecontroldatatype',[914,944,1013,1014,1017]],
['bejegyzés',[914,944,951,1026,1093,1096,1133,1138]],
['sorszámozva',[914,944,951,1026,1093,1096,1133,1138]],
['szigorúan',[914,944,951,1026,1093,1096,1133,1138]],
['monoton',[914,944,951,1026,1093,1096,1133,1138]],
['növekvő',[914,944,951,1026,1093,1096,1133,1138]],
['benne',[914,944,951,1026,1093,1096,1133,1138]],
['kihagyás',[914,944,951,1026,1093,1096,1133,1138]],
['numbered',[914,944,951,1026,1093,1096,1133,1138]],
['strictly',[914,944,951,1026,1093,1096,1133,1138]],
['monotonic',[914,944,951,1026,1093,1096,1133,1138]],
['ascending',[914,944,951,1026,1093,1096,1133,1138]],
['skips',[914,944,951,1026,1093,1096,1133,1138]],
['balancechange',[914,944,945,1017,1026,1093,1094,1200,1201,1202,1213,1216,1242,1244]],
['fióktartalom',[914,944,945,1026,1093,1094,1200,1201,1202,1213,1214,1215]],
['balance',[914,944,945,1026,1093,1094,1174,1199,1200,1201,1202,1208,1213,1214,1215,1216,1217,1241,1243]],
['fuelcardnumber',[917,1026,1102,1104]],
['authorizationnumber',[917,1026,1102,1103]],
['healthfundname',[918,1026,1106,1111]],
['healthfundaddress',[918,1026,1106,1107]],
['healthfundcode',[918,1026,1106,1109]],
['healthfundmembernumber',[918,1026,1106,1110]],
['healthfundcardnumber',[918,1026,1106,1108]],
['cashhufamount',[927,945,1026,1094,1112,1115,1202,1209,1216]],
['foreigncurrency',[927,945,1026,1094,1112,1116,1202,1209,1216]],
['cardpaymentamount',[927,945,1026,1094,1112,1114,1202,1209,1216]],
['szepcardamount',[927,945,1026,1094,1112,1118,1202,1209,1216]],
['aframount',[927,945,1026,1094,1112,1113,1202,1209,1216]],
['otherpayment',[927,945,1026,1094,1112,1117,1202,1209,1216]],
['documentoperation',[955,977,986,1026,1119,1122]],
['apnumber',[955,977,986,1026,1044,1045,1046,1047,1119,1120]],
['modeljét',[1013]],
['meghatározó',[1013,1200]],
['defines',[1013]],
['model',[1013]],
['passed',[1013]],
['through',[1013]],
['documentmessage',[1013]],
['customerdocumenttype',[1013,1019,1025]],
['vevőnek',[1013,1019,1025,1200,1247,1276]],
['átadandó',[1013,1014,1019,1024,1025,1200,1241,1247,1275,1276]],
['decryptkey',[1013,1019,1023,1025,1200,1247,1248,1276]],
['független',[1013,1019,1023,1200,1247,1248]],
['szimetrikus',[1013,1019,1023,1200,1247,1248]],
['kititkosításához',[1013,1019,1023,1200,1247,1248]],
['independent',[1013,1019,1023,1200,1247,1248]],
['symmetric',[1013,1019,1023,1026,1187,1188,1200,1247,1248]],
['encryption',[1013,1019,1023,1200,1247,1248]],
['receiptadditional',[1013,1019,1022,1025,1026,1027,1030]],
['documentadditionaldatatype',[1013,1019,1020,1021,1022,1026,1088,1200,1247,1249]],
['nyugtán',[1013,1019,1022]],
['ahhoz',[1013,1019,1021,1022,1200,1247,1249]],
['vevővel',[1013,1019,1020,1021,1022]],
['szeretne',[1013,1019,1020,1021,1022]],
['megosztani',[1013,1019,1020,1021,1022]],
['például',[1013,1019,1020,1021,1022,1026,1041,1043]],
['garanciára',[1013,1019,1020,1021,1022]],
['wishes',[1013,1019,1020,1021,1022]],
['share',[1013,1019,1020,1021,1022]],
['example',[1013,1019,1020,1021,1022,1026,1041,1043]],
['guarantee',[1013,1019,1020,1021,1022]],
['otherdocumentadditional',[1013,1019,1021,1025,1026,1027,1030]],
['invoiceadditional',[1013,1019,1020,1025,1026,1027,1030]],
['számlához',[1013,1014,1017,1019,1020]],
['adatkok',[1013,1019,1020]],
['coredocumenttype',[1013,1014,1024]],
['nav-nak',[1013,1014,1024,1200,1241,1275]],
['kontroll',[1013,1014,1017,1024]],
['receiptcore',[1013,1014,1016,1024,1026,1027,1030]],
['otherdocumentcore',[1013,1014,1015,1024,1026,1027,1030]],
['üzemanyagkártyás',[1013,1014,1015,1026,1181,1183,1200,1213,1230,1231,1232,1233]],
['értékesítési',[1013,1014,1015,1026,1181]],
['egészségkártyás',[1013,1014,1015,1026,1181,1183,1200,1213,1234,1235,1236,1237]],
['szállodai',[1013,1014,1015,1026,1180,1181,1183]],
['átterhelés',[1013,1014,1015,1026,1180,1183]],
['fogyasztási',[1013,1014,1015,1026,1180,1181,1183,1192]],
['vouchers',[1013,1014,1015]],
['hotel',[1013,1014,1015,1026,1180,1181,1183]],
['consumption',[1013,1014,1015,1026,1180,1181,1183,1192]],
['invoicecore',[1013,1014,1018,1024,1026,1027,1030]],
['invoicecontrol',[1013,1014,1017,1024]],
['amelyek',[1013,1014,1017]],
['bizonylatnak',[1013,1014,1017]],
['mellékletnek',[1013,1014,1017]],
['felé',[1013,1014,1017]],
['adatszolgáltatási',[1013,1014,1017]],
['customerdocument',[1013,1025,1026,1144,1145]],
['coredocument',[1013,1024,1026,1144,1146]],
['additionalhead',[1020,1021,1022,1026,1088,1089,1249]],
['attachment',[1020,1021,1022,1026,1041,1088,1091,1249]],
['additionallines',[1020,1021,1022,1026,1088,1090,1249]],
['apnumbertype',[1026,1044,1045,1046,1047,1119,1120,1171]],
['customerappeventcodetype',[1026,1176]],
['applikáció',[1026,1176]],
['eseménykód',[1026,1176]],
['digit4type',[1026,1179,1200,1250,1251]],
['file512kbinarytype',[1026,1041,1042,1190]],
['bináris',[1026,1041,1042,1190]],
['fájl',[1026,1041,1042,1190,1191]],
['512kb',[1026,1190]],
['binary',[1026,1041,1042,1190]],
['fileextensiontype',[1026,1041,1043,1191]],
['kiterjesztés',[1026,1041,1043,1191]],
['Ügyfél',[]],
['elállása',[1026,1173,1194]],
['kezelői',[1026,1173]],
['téves',[1026,1173]],
['bevitel',[1026,1173,1174]],
['incorrect',[1026,1173]],
['fizetőeszköz',[1026,1112,1125,1126,1127,1128,1129,1130,1173,1174,1200,1201,1204]],
['készleten',[1026,1173]],
['stock',[1026,1173]],
['bizonylattípus',[1026,1173]],
['kibocsátása',[1026,1173]],
['sikertelen',[1026,1173]],
['használat',[1026,1173]],
['unsuccesfull',[1026,1173]],
['ügyfél',[1026,1026,1173,1173,1194]],
['próbavásárlás',[1026,1173]],
['test',[1026,1173]],
['cashpaymenttitletype',[1026,1174,1200,1201,1204]],
['pénztári',[1026,1174,1200,1201,1204]],
['befizetés-kifizetés',[1026,1174]],
['csere',[1026,1174,1200,1201,1204]],
['jogcímei',[1026,1174,1200,1201,1204]],
['váltópénz',[1026,1174]],
['coin',[1026,1174]],
['pénztáros',[1026,1174]],
['pénzfelvétel',[1026,1174]],
['withdraw',[1026,1174]],
['cashier',[1026,1174]],
['díjbeszedés',[1026,1174]],
['collection',[1026,1174]],
['sorsjegy',[1026,1174]],
['eladás',[1026,1174]],
['lottery',[1026,1174]],
['ticket',[1026,1174]],
['pénztár',[1026,1174,1183]],
['hiány',[1026,1174]],
['deficit',[1026,1174]],
['borravaló',[1026,1174]],
['befizetés',[1026,1174,1200,1201,1204]],
['fölözés',[1026,1174]],
['skimming',[1026,1174]],
['levétel',[1026,1174]],
['kivét',[1026,1174]],
['take',[1026,1174]],
['ajándékkártya',[1026,1174]],
['gift',[1026,1174]],
['bérkifizetés',[1026,1174]],
['salary',[1026,1174]],
['munkabér',[1026,1174]],
['pre-payment',[1026,1174]],
['postaköltség',[1026,1174]],
['postal',[1026,1174]],
['rezsi',[1026,1174]],
['costs',[1026,1174]],
['Áruvásárlás',[]],
['purchasing',[1026,1174]],
['záróösszeg',[1026,1174]],
['kifizetés',[1026,1174,1200,1201,1204]],
['készpénzfelvétel',[1026,1174]],
['cashback',[1026,1174]],
['gyüjtő',[1026,1175]],
['|n|tam|aam|eam|atk|tra|sec|art|ant|eue|ho',[1026,1175]],
['deferred',[1026,1180,1181,1183]],
['milyen',[1026,1181,1199]],
['bizonylatot',[1026,1181]],
['class',[1026,1181,1199]],
['what',[1026,1181,1199]],
['Üzemanyagkártyás',[]],
['fund',[1026,1106,1107,1108,1109,1110,1111,1181,1183]],
['átterhelési',[1026,1181]],
['simplifiedinvoice',[1026,1181]],
['normalinvoice',[1026,1181]],
['uk|ek|sz|ny|pm|pj|sa|fo|ot',[1026,1183]],
['nn|nz',[1026,1183]],
['napnyitás',[1026,1183]],
['jelentés',[1026,1068,1069,1070,1183,1199,1200,1241,1245,1250]],
['napi',[1026,1049,1050,1051,1053,1054,1055,1068,1069,1070,1183,1199,1200,1213,1218,1219,1220,1221,1222,1223,1224,1225,1226,1227,1228,1229,1241,1245,1250,1252,1253,1254,1255,1256,1257,1258,1259,1260]],
['open',[1026,1183,1199,1200,1208,1241,1243]],
['cashflow',[1026,1068,1069,1070,1183,1192,1199,1200,1213,1223,1226,1250]],
['cashregister',[1026,1183,1199]],
['daily',[1026,1049,1050,1051,1053,1054,1055,1068,1069,1070,1183,1199,1200,1213,1218,1219,1220,1221,1222,1223,1224,1225,1226,1227,1228,1229,1241,1245,1250,1252,1253,1254,1255,1256,1257,1258,1259,1260]],
['documentoperationtype',[1026,1119,1122,1184]],
['documentum',[1026,1184]],
['dokumentumot',[1026,1184]],
['encryptedsymmetricinitialvectortype',[1026,1187]],
['részének',[1026,1187,1188]],
['titkosításához',[1026,1187,1188]],
['szimmetrikus',[1026,1187,1188]],
['encrypt',[1026,1187,1188]],
['part',[1026,1166,1167,1168,1187,1188]],
['encryptedsymmetrickeytype',[1026,1188]],
['Értékesítés',[]],
['sztornó',[1026,1192]],
['engedmény',[1026,1192]],
['üzletpolitikai',[1026,1192]],
['kedvezmény',[1026,1192]],
['non-business',[1026,1192]],
['policy',[1026,1192]],
['preferences',[1026,1192]],
['felár',[1026,1192]],
['extra',[1026,1192]],
['göngyöleg',[1026,1192]],
['visszaváltás',[1026,1192]],
['returnable',[1026,1192]],
['packing',[1026,1192]],
['visszáru',[1026,1192,1194]],
['vevőt',[1026,1192]],
['érintő',[1026,1192]],
['involving',[1026,1192]],
['defective',[1026,1194]],
['vásárlástól',[1026,1194]],
['customer’s',[1026,1194]],
['right',[1026,1194]],
['rescission',[1026,1194]],
['szep',[1026,1197]],
['szÉp',[]],
['kártya',[1026,1112,1118,1197]],
['azonnali',[1026,1197]],
['immediate',[1026,1112,1113,1197]],
['riportot',[1026,1199]],
['cashregisteropenbalance',[1026,1199]],
['pénztárnyitás',[1026,1199,1200,1208,1241,1243]],
['dailycashflow',[1026,1199]],
['additionaldata',[1026,1027,1030,1031,1032,1089,1133,1134,1205,1210,1238,1261,1273]],
['attachmenttype',[1026,1041,1088,1091]],
['csatoltmány',[1026,1041]],
['filebinary',[1026,1041,1042,1091]],
['csatolt',[1026,1041,1042,1043,1088,1091]],
['attached',[1026,1041,1042,1043,1088,1091]],
['fileextension',[1026,1041,1043,1091]],
['additionalheadtype',[1026,1031,1088,1089]],
['egészére',[1026,1031,1088,1089]],
['additionallinestype',[1026,1033,1088,1090]],
['tételeire',[1026,1033,1088,1090]],
['additionalline',[1026,1033,1034,1090]],
['additionallinetype',[1026,1033,1034,1035]],
['basicereceiptrequesttype',[1026,1044]],
['enyugta',[1026,1044,1046]],
['basicereceiptresponsetype',[1026,1046]],
['callbackrequired',[1026,1046,1048]],
['visszahívás',[1026,1046,1048]],
['callback',[1026,1046,1048]],
['commercecollectorlisttype',[1026,1049,1070,1072]],
['gyüjtők',[1026,1049]],
['commerce',[1026,1049,1050,1051,1070,1071,1072]],
['collectors',[1026,1049,1070,1072]],
['commercialcollector',[1026,1049,1050,1072]],
['commercecollectortype',[1026,1049,1050,1051]],
['forgalom',[1026,1049,1050,1051,1070,1071,1200,1213,1233,1237,1250,1263]],
['gyűjtők',[1026,1049,1050,1051,1070,1072]],
['collectorgrossamount',[1026,1050,1051,1053]],
['gyűjtőbe',[1026,1051,1053,1054,1055]],
['összértéke',[1026,1051,1053,1054,1055]],
['collectornetamount',[1026,1050,1051,1054]],
['collectorvatamount',[1026,1050,1051,1055]],
['dailycashflowdetailtype',[1026,1068,1069,1070,1200,1250,1255,1256,1257]],
['commercecollectorlist',[1026,1069,1070,1072,1255,1256,1257]],
['bontás',[1026,1070,1072]],
['fulfillmentdate',[1026,1069,1070,1074,1255,1256,1257]],
['bizonylatok',[1026,1070,1074]],
['fulfillment',[1026,1070,1074]],
['dailycashflowdetaillisttype',[1026,1068,1200,1250,1252,1253,1254,1258,1259,1260]],
['dailycashflowdetail',[1026,1068,1069,1252,1253,1254,1258,1259,1260]],
['tájékoztatási',[1026,1088]],
['dokumentumhoz',[1026,1088,1091]],
['documentcontroldatatype',[1026,1093]],
['rész',[1026,1093]],
['foreigncurrencytype',[1026,1097,1112,1116]],
['valutában',[1026,1097,1098,1112,1116]],
['befizetett',[1026,1097,1112,1116]],
['currencyamount',[1026,1097,1098,1116]],
['valuta',[1026,1097,1098,1100,1101]],
['valutanem',[1026,1097,1099]],
['nagybetűvel',[1026,1097,1099]],
['egységének',[1026,1097,1101]],
['kifejezett',[1026,1097,1101]],
['currencyhufamount',[1026,1097,1100,1116]],
['árfolyamon',[1026,1097,1100]],
['legalább',[1026,1102,1104]],
['négy',[1026,1102,1104,1200,1250,1251]],
['engedélyezési',[1026,1102,1103]],
['azonosítószám',[1026,1102,1103,1106,1110]],
['authorisation',[1026,1102,1103]],
['rendszám',[1026,1102,1105]],
['kizárólag',[1026,1102,1105]],
['betűket',[1026,1102,1105]],
['számokat',[1026,1102,1105]],
['feltüntetve',[1026,1102,1105]],
['egészségpénztár',[1026,1106,1107,1109,1111]],
['tagszáma',[1026,1106,1110]],
['egészségpénztári',[1026,1106,1110]],
['forint',[1026,1112,1115]],
['bankkártyás',[1026,1112,1114]],
['bevételek',[1026,1112,1113,1114,1117,1118,1200,1213,1228]],
['otherpaymenttype',[1026,1112,1117,1125]],
['fizetőeszközben',[1026,1112,1117]],
['megszerzett',[1026,1112,1117]],
['otherpaymentcode',[1026,1117,1125,1126]],
['ajÁnd|hŰsÉg|smart|gÖngy|kupon|egyeb-',[]],
['otherpaymenthufamount',[1026,1117,1125,1127]],
['egyenlege',[1026,1125,1127,1200,1213,1233,1237]],
['paymentinstrumentstype',[1026,1128]],
['paymentinstrument',[1026,1128,1129]],
['paymentinstrumenttype',[1026,1128,1129,1130]],
['documentpaymentmethod',[1026,1129,1130,1132]],
['módok',[1026,1130,1131,1132]],
['documentpaymentamount',[1026,1129,1130,1131]],
['reportheadertype',[1026,1133,1200,1201,1205,1208,1210,1213,1238,1250,1261,1269,1273]],
['boriték',[1026,1144,1147,1148,1150,1151,1153,1154]],
['tipus',[1026,1144,1150]],
['signed',[1026,1144,1150]],
['verziója',[1026,1144,1149,1150,1155]],
['aláirása',[1026,1144,1148,1150,1154]],
['corereport',[1026,1150,1152,1200,1275]],
['customerreport',[1026,1150,1151,1200,1276]],
['payer',[1026,1166,1168,1169,1170]],
['rövid',[1026,1141,1143,1166,1170]],
['short',[1026,1141,1143,1166,1170]],
['Áfa-csoport',[]],
['tagság',[1026,1166,1167,1168]],
['tagi',[1026,1166,1168]],
['Üzlet',[]],
['péntárgép',[1200]],
['beküldendő',[1200]],
['formátumát',[1200]],
['defining',[1200]],
['cashflowreporttype',[1200,1201,1241,1242]],
['reportheader',[1200,1201,1205,1208,1210,1213,1238,1242,1243,1244,1245,1246,1250,1261,1269,1273]],
['riportoknál',[1200,1201,1205,1208,1210,1213,1238,1250,1261,1269,1273]],
['fejadatok',[1200,1201,1205,1208,1210,1213,1238,1250,1261,1269,1273]],
['reports',[1200,1201,1205,1208,1210,1213,1238,1250,1261,1269,1273]],
['reportnumber',[1200,1201,1206,1208,1211,1213,1239,1242,1243,1244,1245,1246,1250,1262,1269,1274]],
['bizonylatszám',[1200,1201,1206,1208,1211,1213,1239,1250,1262,1269,1274]],
['paymenttitlecode',[1200,1201,1204,1242]],
['changeamount',[1200,1201,1203,1242]],
['bizonylathoz',[1200,1201,1203]],
['visszajáró',[1200,1201,1203]],
['roundingdifferenceamount',[1200,1201,1207,1242]],
['kerekítési',[1200,1201,1207]],
['pozitív',[1200,1201,1207]],
['szempontjából',[1200,1201,1207]],
['számolt',[1200,1201,1207]],
['difference',[1200,1201,1207]],
['cashregisteropenbalancereporttype',[1200,1208,1241,1243]],
['taxationday',[1200,1208,1212,1243]],
['openbalance',[1200,1208,1209,1243]],
['nyitó',[1200,1208,1209]],
['pénzkészlet',[1200,1208,1209]],
['cashregisterreporttype',[1200,1213,1241,1244]],
['dailyrevenuereceipt',[1200,1213,1227,1244]],
['nyugtával',[1200,1213,1219,1227]],
['bizonylatolt',[1200,1213,1219,1225,1227]],
['dailyrevenueinvoice',[1200,1213,1225,1244]],
['számlával',[1200,1213,1225]],
['dailyrevenueother',[1200,1213,1226,1244]],
['befizetéssel',[1200,1213,1226]],
['járó',[1200,1213,1223,1226]],
['incoming',[1200,1213,1226]],
['dailyrevenuesum',[1200,1213,1228,1244]],
['income',[1200,1213,1228]],
['dailycancelledreceipt',[1200,1213,1219,1244]],
['dailycancelledinvoice',[1200,1213,1218,1244]],
['dailypaymentother',[1200,1213,1223,1244]],
['kifizetéssel',[1200,1213,1223]],
['outgoing',[1200,1213,1223]],
['dailypaymentsum',[1200,1213,1224,1244]],
['kiadások',[1200,1213,1224]],
['expense',[1200,1213,1224]],
['dailymodificationreceipt',[1200,1213,1221,1244]],
['módosítások',[1200,1213,1220,1221,1222,1250,1254,1257,1260]],
['dailymodificationinvoice',[1200,1213,1220,1244]],
['dailymodificationsum',[1200,1213,1222,1244]],
['balanceamountnorounding',[1200,1213,1214,1244]],
['nélküli',[1200,1213,1214]],
['roundingamountsum',[1200,1213,1240,1244]],
['kerekítések',[1200,1213,1240]],
['balanceamountwidthrounding',[1200,1213,1215,1244]],
['kerekített',[1200,1213,1215]],
['fizetőeszközönként',[1200,1213,1216]],
['balancechangesum',[1200,1213,1217,1244]],
['dailytipamount',[1200,1213,1229,1244]],
['felszolgálói',[1200,1213,1229]],
['fuelcardsales',[1200,1213,1232,1244]],
['fuelcardmodifications',[1200,1213,1231,1244]],
['fuelcardcancellations',[1200,1213,1230,1244]],
['fuelcardtransactionsum',[1200,1213,1233,1244]],
['transactions',[1200,1213,1233]],
['healthfundsales',[1200,1213,1236,1244]],
['healthfundmodifications',[1200,1213,1235,1244]],
['healthfundcancellations',[1200,1213,1234,1244]],
['healthfundtransactionsum',[1200,1213,1237,1244]],
['dailycashflowreporttype',[1200,1241,1245,1250]],
['closurecounter',[1200,1245,1250,1251]],
['zárás',[1200,1250,1251]],
['nullákkal',[1200,1250,1251]],
['feltöltve',[1200,1250,1251]],
['four',[1200,1250,1251]],
['dailyreceipt',[1200,1245,1250,1255]],
['nyugták',[1200,1250,1255]],
['dailyreceiptcancellation',[1200,1245,1250,1256]],
['dailyreceiptmodification',[1200,1245,1250,1257]],
['dailysimplifiedinvoice',[1200,1245,1250,1258]],
['dailysimplifiedinvoicecancellation',[1200,1245,1250,1259]],
['dailysimplifiedinvoicemodification',[1200,1245,1250,1260]],
['dailyinvoice',[1200,1245,1250,1252]],
['dailyinvoicecancellation',[1200,1245,1250,1253]],
['dailyinvoicemodification',[1200,1245,1250,1254]],
['sumcommerceamount',[1200,1245,1250,1263]],
['göngyölített',[1200,1250,1263]],
['consolidated',[1200,1250,1263]],
['otherreporttype',[1200,1241,1246,1269]],
['otherdocument',[1200,1246,1269,1270]],
['otherdocumentdescription',[1200,1246,1269,1271]],
['leírás',[1200,1269,1271]],
['otherreportdatalist',[1200,1246,1269,1272]],
['otherreportdatalisttype',[1200,1264,1269,1272]],
['otherreportdata',[1200,1264,1265,1272]],
['otherreportdatatype',[1200,1264,1265,1266]],
['otherdocumentdataname',[1200,1265,1266,1267]],
['otherdocumentdatavalue',[1200,1265,1266,1268]],
['corereporttype',[1200,1241,1275]],
['cashflowreport',[1200,1241,1242,1275]],
['cashregisteropenbalancereport',[1200,1241,1243,1275]],
['cashregisterreport',[1200,1241,1244,1275]],
['dailycashflowreport',[1200,1241,1245,1275]],
['otherreport',[1200,1241,1246,1275]],
['customerreporttype',[1200,1247,1276]],
['reportadditional',[1200,1247,1249,1276]],
['riportban',[1200,1247,1249]],
['részére',[1200,1247,1249]]
 ];
 return w;
}
        