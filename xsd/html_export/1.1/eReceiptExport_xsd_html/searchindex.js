
function CreateFileRefs()
{
var fr=new Array();
            
fr[1]=['http://schemas.nav.gov.hu/ERECEIPT/1.1/export', 'http___schemas_nav_gov_hu_ereceipt_1_1_export.html'];
fr[2]=['http://schemas.nav.gov.hu/NTCA/1.0/common', 'http___schemas_nav_gov_hu_ntca_1_0_common.html'];
fr[3]=['http://schemas.nav.gov.hu/OSA/3.0/base', 'http___schemas_nav_gov_hu_osa_3_0_base.html'];
fr[4]=['http://schemas.nav.gov.hu/OSA/3.0/data', 'http___schemas_nav_gov_hu_osa_3_0_data.html'];
fr[5]=['http://schemas.nav.gov.hu/ERECEIPT/1.1/communicationData', 'http___schemas_nav_gov_hu_ereceipt_1_1_communicationdata.html'];
fr[6]=['http://schemas.nav.gov.hu/ERECEIPT/1.1/documentData', 'http___schemas_nav_gov_hu_ereceipt_1_1_documentdata.html'];
fr[7]=['http://schemas.nav.gov.hu/ERECEIPT/1.1/base', 'http___schemas_nav_gov_hu_ereceipt_1_1_base.html'];
fr[8]=['http://schemas.nav.gov.hu/ERECEIPT/1.1/reportMessage', 'http___schemas_nav_gov_hu_ereceipt_1_1_reportmessage.html'];
fr[9]=['eReceiptExport.xsd', 'ereceiptexport_xsd.html'];
fr[10]=['ExportDataType', 'exportdatatype.html'];
fr[11]=['documentClass', 'documentclass.html'];
fr[12]=['documentEnvelope', 'documentenvelope.html'];
fr[13]=['reportClass', 'reportclass.html'];
fr[14]=['reportEnvelope', 'reportenvelope.html'];
fr[15]=['documentGrossAmountHUF', 'documentgrossamounthuf.html'];
fr[16]=['documentNumber', 'documentnumber.html'];
fr[17]=['elementVersion', 'elementversion.html'];
fr[18]=['exportCounter', 'exportcounter.html'];
fr[19]=['issueEndDateTime', 'issueenddatetime.html'];
fr[20]=['privateKey', 'privatekey.html'];
fr[21]=['QRCodeSignature', 'qrcodesignature.html'];
fr[22]=['QRCodeSignCertSerial', 'qrcodesigncertserial.html'];
fr[23]=['searchKey', 'searchkey.html'];
fr[24]=['searchKeyTimestamp', 'searchkeytimestamp.html'];
fr[25]=['supplierName', 'suppliername.html'];
fr[26]=['ExportEnvelopeType', 'exportenvelopetype.html'];
fr[27]=['exportElements', 'exportelements.html'];
fr[28]=['exportName', 'exportname.html'];
fr[29]=['exportTimestamp', 'exporttimestamp.html'];
fr[30]=['exportVersion', 'exportversion.html'];
fr[31]=['numberOfElements', 'numberofelements.html'];
fr[32]=['ExportEnvelope', 'exportenvelope.html'];
fr[33]=['common.xsd', 'common_xsd.html'];
fr[34]=['BasicHeaderType', 'basicheadertype.html'];
fr[35]=['headerVersion', 'headerversion.html'];
fr[36]=['requestId', 'requestid.html'];
fr[37]=['requestVersion', 'requestversion.html'];
fr[38]=['timestamp', 'timestamp.html'];
fr[39]=['BasicRequestType', 'basicrequesttype.html'];
fr[40]=['header', 'header.html'];
fr[41]=['user', 'user.html'];
fr[42]=['BasicResponseType', 'basicresponsetype.html'];
fr[43]=['header', 'header1.html'];
fr[44]=['result', 'result.html'];
fr[45]=['BasicResultType', 'basicresulttype.html'];
fr[46]=['errorCode', 'errorcode.html'];
fr[47]=['funcCode', 'funccode.html'];
fr[48]=['message', 'message.html'];
fr[49]=['notifications', 'notifications.html'];
fr[50]=['CryptoType', 'cryptotype.html'];
fr[51]=['cryptoType', 'cryptotype1.html'];
fr[52]=['GeneralErrorHeaderResponseType', 'generalerrorheaderresponsetype.html'];
fr[53]=['NotificationsType', 'notificationstype.html'];
fr[54]=['notification', 'notification.html'];
fr[55]=['NotificationType', 'notificationtype.html'];
fr[56]=['notificationCode', 'notificationcode.html'];
fr[57]=['notificationText', 'notificationtext.html'];
fr[58]=['TechnicalValidationResultType', 'technicalvalidationresulttype.html'];
fr[59]=['message', 'message1.html'];
fr[60]=['validationErrorCode', 'validationerrorcode.html'];
fr[61]=['validationResultCode', 'validationresultcode.html'];
fr[62]=['UserHeaderType', 'userheadertype.html'];
fr[63]=['login', 'login.html'];
fr[64]=['passwordHash', 'passwordhash.html'];
fr[65]=['predecessorTaxNumber', 'predecessortaxnumber.html'];
fr[66]=['requestSignature', 'requestsignature.html'];
fr[67]=['taxNumber', 'taxnumber.html'];
fr[68]=['GeneralErrorHeaderResponse', 'generalerrorheaderresponse.html'];
fr[69]=['GeneralExceptionResponse', 'generalexceptionresponse.html'];
fr[70]=['AtomicStringType100', 'atomicstringtype100.html'];
fr[71]=['AtomicStringType1024', 'atomicstringtype1024.html'];
fr[72]=['AtomicStringType128', 'atomicstringtype128.html'];
fr[73]=['AtomicStringType15', 'atomicstringtype15.html'];
fr[74]=['AtomicStringType16', 'atomicstringtype16.html'];
fr[75]=['AtomicStringType2', 'atomicstringtype2.html'];
fr[76]=['AtomicStringType200', 'atomicstringtype200.html'];
fr[77]=['AtomicStringType2048', 'atomicstringtype2048.html'];
fr[78]=['AtomicStringType255', 'atomicstringtype255.html'];
fr[79]=['AtomicStringType256', 'atomicstringtype256.html'];
fr[80]=['AtomicStringType32', 'atomicstringtype32.html'];
fr[81]=['AtomicStringType4', 'atomicstringtype4.html'];
fr[82]=['AtomicStringType4000', 'atomicstringtype4000.html'];
fr[83]=['AtomicStringType50', 'atomicstringtype50.html'];
fr[84]=['AtomicStringType512', 'atomicstringtype512.html'];
fr[85]=['AtomicStringType64', 'atomicstringtype64.html'];
fr[86]=['AtomicStringType8', 'atomicstringtype8.html'];
fr[87]=['BankAccountNumberType', 'bankaccountnumbertype.html'];
fr[88]=['BusinessResultCodeType', 'businessresultcodetype.html'];
fr[89]=['CommunityVatNumberType', 'communityvatnumbertype.html'];
fr[90]=['CountryCodeType', 'countrycodetype.html'];
fr[91]=['CountyCodeType', 'countycodetype.html'];
fr[92]=['CurrencyType', 'currencytype.html'];
fr[93]=['EntityIdType', 'entityidtype.html'];
fr[94]=['FunctionCodeType', 'functioncodetype.html'];
fr[95]=['GenericDateType', 'genericdatetype.html'];
fr[96]=['GenericDecimalType', 'genericdecimaltype.html'];
fr[97]=['GenericTimestampType', 'generictimestamptype.html'];
fr[98]=['GenericUnsignedIntegerType', 'genericunsignedintegertype.html'];
fr[99]=['LocalizationType', 'localizationtype.html'];
fr[100]=['LoginType', 'logintype.html'];
fr[101]=['PlateNumberType', 'platenumbertype.html'];
fr[102]=['PostalCodeType', 'postalcodetype.html'];
fr[103]=['RequestPageType', 'requestpagetype.html'];
fr[104]=['ResponsePageType', 'responsepagetype.html'];
fr[105]=['SHA256Type', 'sha256type.html'];
fr[106]=['SHA512Type', 'sha512type.html'];
fr[107]=['SimpleText100NotBlankType', 'simpletext100notblanktype.html'];
fr[108]=['SimpleText1024NotBlankType', 'simpletext1024notblanktype.html'];
fr[109]=['SimpleText15NotBlankType', 'simpletext15notblanktype.html'];
fr[110]=['SimpleText200NotBlankType', 'simpletext200notblanktype.html'];
fr[111]=['SimpleText255NotBlankType', 'simpletext255notblanktype.html'];
fr[112]=['SimpleText50NotBlankType', 'simpletext50notblanktype.html'];
fr[113]=['SimpleText512NotBlankType', 'simpletext512notblanktype.html'];
fr[114]=['SwiftCodeType', 'swiftcodetype.html'];
fr[115]=['TaxIdentificationNumberType', 'taxidentificationnumbertype.html'];
fr[116]=['TaxpayerIdType', 'taxpayeridtype.html'];
fr[117]=['TechnicalResultCodeType', 'technicalresultcodetype.html'];
fr[118]=['VatCodeType', 'vatcodetype.html'];
fr[119]=['invoiceBase.xsd', 'invoicebase_xsd.html'];
fr[120]=['AddressType', 'addresstype.html'];
fr[121]=['detailedAddress', 'detailedaddress.html'];
fr[122]=['simpleAddress', 'simpleaddress.html'];
fr[123]=['DetailedAddressType', 'detailedaddresstype.html'];
fr[124]=['building', 'building.html'];
fr[125]=['city', 'city.html'];
fr[126]=['countryCode', 'countrycode.html'];
fr[127]=['door', 'door.html'];
fr[128]=['floor', 'floor.html'];
fr[129]=['lotNumber', 'lotnumber.html'];
fr[130]=['number', 'number.html'];
fr[131]=['postalCode', 'postalcode.html'];
fr[132]=['publicPlaceCategory', 'publicplacecategory.html'];
fr[133]=['region', 'region.html'];
fr[134]=['staircase', 'staircase.html'];
fr[135]=['streetName', 'streetname.html'];
fr[136]=['SimpleAddressType', 'simpleaddresstype.html'];
fr[137]=['additionalAddressDetail', 'additionaladdressdetail.html'];
fr[138]=['city', 'city1.html'];
fr[139]=['countryCode', 'countrycode1.html'];
fr[140]=['postalCode', 'postalcode1.html'];
fr[141]=['region', 'region1.html'];
fr[142]=['TaxNumberType', 'taxnumbertype.html'];
fr[143]=['countyCode', 'countycode.html'];
fr[144]=['taxpayerId', 'taxpayerid.html'];
fr[145]=['vatCode', 'vatcode.html'];
fr[146]=['InvoiceAppearanceType', 'invoiceappearancetype.html'];
fr[147]=['InvoiceCategoryType', 'invoicecategorytype.html'];
fr[148]=['InvoiceDateType', 'invoicedatetype.html'];
fr[149]=['InvoiceIndexType', 'invoiceindextype.html'];
fr[150]=['InvoiceTimestampType', 'invoicetimestamptype.html'];
fr[151]=['InvoiceUnboundedIndexType', 'invoiceunboundedindextype.html'];
fr[152]=['LineNumberType', 'linenumbertype.html'];
fr[153]=['MonetaryType', 'monetarytype.html'];
fr[154]=['PaymentMethodType', 'paymentmethodtype.html'];
fr[155]=['invoiceData.xsd', 'invoicedata_xsd.html'];
fr[156]=['AdditionalDataType', 'additionaldatatype.html'];
fr[157]=['dataDescription', 'datadescription.html'];
fr[158]=['dataName', 'dataname.html'];
fr[159]=['dataValue', 'datavalue.html'];
fr[160]=['AdvanceDataType', 'advancedatatype.html'];
fr[161]=['advanceIndicator', 'advanceindicator.html'];
fr[162]=['advancePaymentData', 'advancepaymentdata.html'];
fr[163]=['AdvancePaymentDataType', 'advancepaymentdatatype.html'];
fr[164]=['advanceExchangeRate', 'advanceexchangerate.html'];
fr[165]=['advanceOriginalInvoice', 'advanceoriginalinvoice.html'];
fr[166]=['advancePaymentDate', 'advancepaymentdate.html'];
fr[167]=['AggregateInvoiceLineDataType', 'aggregateinvoicelinedatatype.html'];
fr[168]=['lineDeliveryDate', 'linedeliverydate.html'];
fr[169]=['lineExchangeRate', 'lineexchangerate.html'];
fr[170]=['AircraftType', 'aircrafttype.html'];
fr[171]=['airCargo', 'aircargo.html'];
fr[172]=['operationHours', 'operationhours.html'];
fr[173]=['takeOffWeight', 'takeoffweight.html'];
fr[174]=['BatchInvoiceType', 'batchinvoicetype.html'];
fr[175]=['batchIndex', 'batchindex.html'];
fr[176]=['invoice', 'invoice.html'];
fr[177]=['ContractNumbersType', 'contractnumberstype.html'];
fr[178]=['contractNumber', 'contractnumber.html'];
fr[179]=['ConventionalInvoiceInfoType', 'conventionalinvoiceinfotype.html'];
fr[180]=['contractNumbers', 'contractnumbers.html'];
fr[181]=['costCenters', 'costcenters.html'];
fr[182]=['customerCompanyCodes', 'customercompanycodes.html'];
fr[183]=['dealerCodes', 'dealercodes.html'];
fr[184]=['deliveryNotes', 'deliverynotes.html'];
fr[185]=['ekaerIds', 'ekaerids.html'];
fr[186]=['generalLedgerAccountNumbers', 'generalledgeraccountnumbers.html'];
fr[187]=['glnNumbersCustomer', 'glnnumberscustomer.html'];
fr[188]=['glnNumbersSupplier', 'glnnumberssupplier.html'];
fr[189]=['itemNumbers', 'itemnumbers.html'];
fr[190]=['materialNumbers', 'materialnumbers.html'];
fr[191]=['orderNumbers', 'ordernumbers.html'];
fr[192]=['projectNumbers', 'projectnumbers.html'];
fr[193]=['shippingDates', 'shippingdates.html'];
fr[194]=['supplierCompanyCodes', 'suppliercompanycodes.html'];
fr[195]=['CostCentersType', 'costcenterstype.html'];
fr[196]=['costCenter', 'costcenter.html'];
fr[197]=['CustomerCompanyCodesType', 'customercompanycodestype.html'];
fr[198]=['customerCompanyCode', 'customercompanycode.html'];
fr[199]=['CustomerDeclarationType', 'customerdeclarationtype.html'];
fr[200]=['productFeeWeight', 'productfeeweight.html'];
fr[201]=['productStream', 'productstream.html'];
fr[202]=['CustomerInfoType', 'customerinfotype.html'];
fr[203]=['customerAddress', 'customeraddress.html'];
fr[204]=['customerBankAccountNumber', 'customerbankaccountnumber.html'];
fr[205]=['customerName', 'customername.html'];
fr[206]=['customerVatData', 'customervatdata.html'];
fr[207]=['customerVatStatus', 'customervatstatus.html'];
fr[208]=['CustomerTaxNumberType', 'customertaxnumbertype.html'];
fr[209]=['groupMemberTaxNumber', 'groupmembertaxnumber.html'];
fr[210]=['CustomerVatDataType', 'customervatdatatype.html'];
fr[211]=['communityVatNumber', 'communityvatnumber.html'];
fr[212]=['customerTaxNumber', 'customertaxnumber.html'];
fr[213]=['thirdStateTaxId', 'thirdstatetaxid.html'];
fr[214]=['DealerCodesType', 'dealercodestype.html'];
fr[215]=['dealerCode', 'dealercode.html'];
fr[216]=['DeliveryNotesType', 'deliverynotestype.html'];
fr[217]=['deliveryNote', 'deliverynote.html'];
fr[218]=['DetailedReasonType', 'detailedreasontype.html'];
fr[219]=['case', 'case.html'];
fr[220]=['reason', 'reason.html'];
fr[221]=['DieselOilPurchaseType', 'dieseloilpurchasetype.html'];
fr[222]=['dieselOilQuantity', 'dieseloilquantity.html'];
fr[223]=['purchaseDate', 'purchasedate.html'];
fr[224]=['purchaseLocation', 'purchaselocation.html'];
fr[225]=['vehicleRegistrationNumber', 'vehicleregistrationnumber.html'];
fr[226]=['DiscountDataType', 'discountdatatype.html'];
fr[227]=['discountDescription', 'discountdescription.html'];
fr[228]=['discountRate', 'discountrate.html'];
fr[229]=['discountValue', 'discountvalue.html'];
fr[230]=['EkaerIdsType', 'ekaeridstype.html'];
fr[231]=['ekaerId', 'ekaerid.html'];
fr[232]=['FiscalRepresentativeType', 'fiscalrepresentativetype.html'];
fr[233]=['fiscalRepresentativeAddress', 'fiscalrepresentativeaddress.html'];
fr[234]=['fiscalRepresentativeBankAccountNumber', 'fiscalrepresentativebankaccountnumber.html'];
fr[235]=['fiscalRepresentativeName', 'fiscalrepresentativename.html'];
fr[236]=['fiscalRepresentativeTaxNumber', 'fiscalrepresentativetaxnumber.html'];
fr[237]=['GeneralLedgerAccountNumbersType', 'generalledgeraccountnumberstype.html'];
fr[238]=['generalLedgerAccountNumber', 'generalledgeraccountnumber.html'];
fr[239]=['GlnNumbersType', 'glnnumberstype.html'];
fr[240]=['glnNumber', 'glnnumber.html'];
fr[241]=['InvoiceDataType', 'invoicedatatype.html'];
fr[242]=['completenessIndicator', 'completenessindicator.html'];
fr[243]=['invoiceIssueDate', 'invoiceissuedate.html'];
fr[244]=['invoiceMain', 'invoicemain.html'];
fr[245]=['invoiceNumber', 'invoicenumber.html'];
fr[246]=['InvoiceDetailType', 'invoicedetailtype.html'];
fr[247]=['additionalInvoiceData', 'additionalinvoicedata.html'];
fr[248]=['cashAccountingIndicator', 'cashaccountingindicator.html'];
fr[249]=['conventionalInvoiceInfo', 'conventionalinvoiceinfo.html'];
fr[250]=['currencyCode', 'currencycode.html'];
fr[251]=['exchangeRate', 'exchangerate.html'];
fr[252]=['invoiceAccountingDeliveryDate', 'invoiceaccountingdeliverydate.html'];
fr[253]=['invoiceAppearance', 'invoiceappearance.html'];
fr[254]=['invoiceCategory', 'invoicecategory.html'];
fr[255]=['invoiceDeliveryDate', 'invoicedeliverydate.html'];
fr[256]=['invoiceDeliveryPeriodEnd', 'invoicedeliveryperiodend.html'];
fr[257]=['invoiceDeliveryPeriodStart', 'invoicedeliveryperiodstart.html'];
fr[258]=['paymentDate', 'paymentdate.html'];
fr[259]=['paymentMethod', 'paymentmethod.html'];
fr[260]=['periodicalSettlement', 'periodicalsettlement.html'];
fr[261]=['selfBillingIndicator', 'selfbillingindicator.html'];
fr[262]=['smallBusinessIndicator', 'smallbusinessindicator.html'];
fr[263]=['utilitySettlementIndicator', 'utilitysettlementindicator.html'];
fr[264]=['InvoiceHeadType', 'invoiceheadtype.html'];
fr[265]=['customerInfo', 'customerinfo.html'];
fr[266]=['fiscalRepresentativeInfo', 'fiscalrepresentativeinfo.html'];
fr[267]=['invoiceDetail', 'invoicedetail.html'];
fr[268]=['supplierInfo', 'supplierinfo.html'];
fr[269]=['InvoiceMainType', 'invoicemaintype.html'];
fr[270]=['batchInvoice', 'batchinvoice.html'];
fr[271]=['invoice', 'invoice1.html'];
fr[272]=['InvoiceReferenceType', 'invoicereferencetype.html'];
fr[273]=['modificationIndex', 'modificationindex.html'];
fr[274]=['modifyWithoutMaster', 'modifywithoutmaster.html'];
fr[275]=['originalInvoiceNumber', 'originalinvoicenumber.html'];
fr[276]=['InvoiceType', 'invoicetype.html'];
fr[277]=['invoiceHead', 'invoicehead.html'];
fr[278]=['invoiceLines', 'invoicelines.html'];
fr[279]=['invoiceReference', 'invoicereference.html'];
fr[280]=['invoiceSummary', 'invoicesummary.html'];
fr[281]=['productFeeSummary', 'productfeesummary.html'];
fr[282]=['ItemNumbersType', 'itemnumberstype.html'];
fr[283]=['itemNumber', 'itemnumber.html'];
fr[284]=['LineAmountsNormalType', 'lineamountsnormaltype.html'];
fr[285]=['lineGrossAmountData', 'linegrossamountdata.html'];
fr[286]=['lineNetAmountData', 'linenetamountdata.html'];
fr[287]=['lineVatData', 'linevatdata.html'];
fr[288]=['lineVatRate', 'linevatrate.html'];
fr[289]=['LineAmountsSimplifiedType', 'lineamountssimplifiedtype.html'];
fr[290]=['lineGrossAmountSimplified', 'linegrossamountsimplified.html'];
fr[291]=['lineGrossAmountSimplifiedHUF', 'linegrossamountsimplifiedhuf.html'];
fr[292]=['lineVatRate', 'linevatrate1.html'];
fr[293]=['LineGrossAmountDataType', 'linegrossamountdatatype.html'];
fr[294]=['lineGrossAmountNormal', 'linegrossamountnormal.html'];
fr[295]=['lineGrossAmountNormalHUF', 'linegrossamountnormalhuf.html'];
fr[296]=['LineModificationReferenceType', 'linemodificationreferencetype.html'];
fr[297]=['lineNumberReference', 'linenumberreference.html'];
fr[298]=['lineOperation', 'lineoperation.html'];
fr[299]=['LineNetAmountDataType', 'linenetamountdatatype.html'];
fr[300]=['lineNetAmount', 'linenetamount.html'];
fr[301]=['lineNetAmountHUF', 'linenetamounthuf.html'];
fr[302]=['LinesType', 'linestype.html'];
fr[303]=['line', 'line.html'];
fr[304]=['mergedItemIndicator', 'mergeditemindicator.html'];
fr[305]=['LineType', 'linetype.html'];
fr[306]=['lineAmountsNormal', 'lineamountsnormal.html'];
fr[307]=['lineAmountsSimplified', 'lineamountssimplified.html'];
fr[308]=['additionalLineData', 'additionallinedata.html'];
fr[309]=['advanceData', 'advancedata.html'];
fr[310]=['aggregateInvoiceLineData', 'aggregateinvoicelinedata.html'];
fr[311]=['conventionalLineInfo', 'conventionallineinfo.html'];
fr[312]=['depositIndicator', 'depositindicator.html'];
fr[313]=['dieselOilPurchase', 'dieseloilpurchase.html'];
fr[314]=['GPCExcise', 'gpcexcise.html'];
fr[315]=['intermediatedService', 'intermediatedservice.html'];
fr[316]=['lineDescription', 'linedescription.html'];
fr[317]=['lineDiscountData', 'linediscountdata.html'];
fr[318]=['lineExpressionIndicator', 'lineexpressionindicator.html'];
fr[319]=['lineModificationReference', 'linemodificationreference.html'];
fr[320]=['lineNatureIndicator', 'linenatureindicator.html'];
fr[321]=['lineNumber', 'linenumber.html'];
fr[322]=['lineProductFeeContent', 'lineproductfeecontent.html'];
fr[323]=['netaDeclaration', 'netadeclaration.html'];
fr[324]=['newTransportMean', 'newtransportmean.html'];
fr[325]=['obligatedForProductFee', 'obligatedforproductfee.html'];
fr[326]=['productCodes', 'productcodes.html'];
fr[327]=['productFeeClause', 'productfeeclause.html'];
fr[328]=['quantity', 'quantity.html'];
fr[329]=['referencesToOtherLines', 'referencestootherlines.html'];
fr[330]=['unitOfMeasure', 'unitofmeasure.html'];
fr[331]=['unitOfMeasureOwn', 'unitofmeasureown.html'];
fr[332]=['unitPrice', 'unitprice.html'];
fr[333]=['unitPriceHUF', 'unitpricehuf.html'];
fr[334]=['LineVatDataType', 'linevatdatatype.html'];
fr[335]=['lineVatAmount', 'linevatamount.html'];
fr[336]=['lineVatAmountHUF', 'linevatamounthuf.html'];
fr[337]=['MaterialNumbersType', 'materialnumberstype.html'];
fr[338]=['materialNumber', 'materialnumber.html'];
fr[339]=['NewTransportMeanType', 'newtransportmeantype.html'];
fr[340]=['aircraft', 'aircraft.html'];
fr[341]=['vehicle', 'vehicle.html'];
fr[342]=['vessel', 'vessel.html'];
fr[343]=['brand', 'brand.html'];
fr[344]=['engineNum', 'enginenum.html'];
fr[345]=['firstEntryIntoService', 'firstentryintoservice.html'];
fr[346]=['serialNum', 'serialnum.html'];
fr[347]=['OrderNumbersType', 'ordernumberstype.html'];
fr[348]=['orderNumber', 'ordernumber.html'];
fr[349]=['PaymentEvidenceDocumentDataType', 'paymentevidencedocumentdatatype.html'];
fr[350]=['evidenceDocumentDate', 'evidencedocumentdate.html'];
fr[351]=['evidenceDocumentNo', 'evidencedocumentno.html'];
fr[352]=['obligatedAddress', 'obligatedaddress.html'];
fr[353]=['obligatedName', 'obligatedname.html'];
fr[354]=['obligatedTaxNumber', 'obligatedtaxnumber.html'];
fr[355]=['ProductCodesType', 'productcodestype.html'];
fr[356]=['productCode', 'productcode.html'];
fr[357]=['ProductCodeType', 'productcodetype.html'];
fr[358]=['productCodeOwnValue', 'productcodeownvalue.html'];
fr[359]=['productCodeValue', 'productcodevalue.html'];
fr[360]=['productCodeCategory', 'productcodecategory.html'];
fr[361]=['ProductFeeClauseType', 'productfeeclausetype.html'];
fr[362]=['customerDeclaration', 'customerdeclaration.html'];
fr[363]=['productFeeTakeoverData', 'productfeetakeoverdata.html'];
fr[364]=['ProductFeeDataType', 'productfeedatatype.html'];
fr[365]=['productFeeAmount', 'productfeeamount.html'];
fr[366]=['productFeeCode', 'productfeecode.html'];
fr[367]=['productFeeMeasuringUnit', 'productfeemeasuringunit.html'];
fr[368]=['productFeeQuantity', 'productfeequantity.html'];
fr[369]=['productFeeRate', 'productfeerate.html'];
fr[370]=['ProductFeeSummaryType', 'productfeesummarytype.html'];
fr[371]=['paymentEvidenceDocumentData', 'paymentevidencedocumentdata.html'];
fr[372]=['productChargeSum', 'productchargesum.html'];
fr[373]=['productFeeData', 'productfeedata.html'];
fr[374]=['productFeeOperation', 'productfeeoperation.html'];
fr[375]=['ProductFeeTakeoverDataType', 'productfeetakeoverdatatype.html'];
fr[376]=['takeoverAmount', 'takeoveramount.html'];
fr[377]=['takeoverReason', 'takeoverreason.html'];
fr[378]=['ProjectNumbersType', 'projectnumberstype.html'];
fr[379]=['projectNumber', 'projectnumber.html'];
fr[380]=['ReferencesToOtherLinesType', 'referencestootherlinestype.html'];
fr[381]=['referenceToOtherLine', 'referencetootherline.html'];
fr[382]=['ShippingDatesType', 'shippingdatestype.html'];
fr[383]=['shippingDate', 'shippingdate.html'];
fr[384]=['SummaryByVatRateType', 'summarybyvatratetype.html'];
fr[385]=['vatRate', 'vatrate.html'];
fr[386]=['vatRateGrossData', 'vatrategrossdata.html'];
fr[387]=['vatRateNetData', 'vatratenetdata.html'];
fr[388]=['vatRateVatData', 'vatratevatdata.html'];
fr[389]=['SummaryGrossDataType', 'summarygrossdatatype.html'];
fr[390]=['invoiceGrossAmount', 'invoicegrossamount.html'];
fr[391]=['invoiceGrossAmountHUF', 'invoicegrossamounthuf.html'];
fr[392]=['SummaryNormalType', 'summarynormaltype.html'];
fr[393]=['invoiceNetAmount', 'invoicenetamount.html'];
fr[394]=['invoiceNetAmountHUF', 'invoicenetamounthuf.html'];
fr[395]=['invoiceVatAmount', 'invoicevatamount.html'];
fr[396]=['invoiceVatAmountHUF', 'invoicevatamounthuf.html'];
fr[397]=['summaryByVatRate', 'summarybyvatrate.html'];
fr[398]=['SummarySimplifiedType', 'summarysimplifiedtype.html'];
fr[399]=['vatContentGrossAmount', 'vatcontentgrossamount.html'];
fr[400]=['vatContentGrossAmountHUF', 'vatcontentgrossamounthuf.html'];
fr[401]=['vatRate', 'vatrate1.html'];
fr[402]=['SummaryType', 'summarytype.html'];
fr[403]=['summaryNormal', 'summarynormal.html'];
fr[404]=['summarySimplified', 'summarysimplified.html'];
fr[405]=['summaryGrossData', 'summarygrossdata.html'];
fr[406]=['SupplierCompanyCodesType', 'suppliercompanycodestype.html'];
fr[407]=['supplierCompanyCode', 'suppliercompanycode.html'];
fr[408]=['SupplierInfoType', 'supplierinfotype.html'];
fr[409]=['communityVatNumber', 'communityvatnumber1.html'];
fr[410]=['exciseLicenceNum', 'exciselicencenum.html'];
fr[411]=['groupMemberTaxNumber', 'groupmembertaxnumber1.html'];
fr[412]=['individualExemption', 'individualexemption.html'];
fr[413]=['supplierAddress', 'supplieraddress.html'];
fr[414]=['supplierBankAccountNumber', 'supplierbankaccountnumber.html'];
fr[415]=['supplierName', 'suppliername1.html'];
fr[416]=['supplierTaxNumber', 'suppliertaxnumber.html'];
fr[417]=['VatAmountMismatchType', 'vatamountmismatchtype.html'];
fr[418]=['case', 'case1.html'];
fr[419]=['vatRate', 'vatrate2.html'];
fr[420]=['VatRateGrossDataType', 'vatrategrossdatatype.html'];
fr[421]=['vatRateGrossAmount', 'vatrategrossamount.html'];
fr[422]=['vatRateGrossAmountHUF', 'vatrategrossamounthuf.html'];
fr[423]=['VatRateNetDataType', 'vatratenetdatatype.html'];
fr[424]=['vatRateNetAmount', 'vatratenetamount.html'];
fr[425]=['vatRateNetAmountHUF', 'vatratenetamounthuf.html'];
fr[426]=['VatRateType', 'vatratetype.html'];
fr[427]=['marginSchemeIndicator', 'marginschemeindicator.html'];
fr[428]=['noVatCharge', 'novatcharge.html'];
fr[429]=['vatAmountMismatch', 'vatamountmismatch.html'];
fr[430]=['vatContent', 'vatcontent.html'];
fr[431]=['vatDomesticReverseCharge', 'vatdomesticreversecharge.html'];
fr[432]=['vatExemption', 'vatexemption.html'];
fr[433]=['vatOutOfScope', 'vatoutofscope.html'];
fr[434]=['vatPercentage', 'vatpercentage.html'];
fr[435]=['VatRateVatDataType', 'vatratevatdatatype.html'];
fr[436]=['vatRateVatAmount', 'vatratevatamount.html'];
fr[437]=['vatRateVatAmountHUF', 'vatratevatamounthuf.html'];
fr[438]=['VehicleType', 'vehicletype.html'];
fr[439]=['engineCapacity', 'enginecapacity.html'];
fr[440]=['enginePower', 'enginepower.html'];
fr[441]=['kms', 'kms.html'];
fr[442]=['VesselType', 'vesseltype.html'];
fr[443]=['activityReferred', 'activityreferred.html'];
fr[444]=['length', 'length.html'];
fr[445]=['sailedHours', 'sailedhours.html'];
fr[446]=['InvoiceData', 'invoicedata.html'];
fr[447]=['CustomerVatStatusType', 'customervatstatustype.html'];
fr[448]=['DataNameType', 'datanametype.html'];
fr[449]=['EkaerIdType', 'ekaeridtype.html'];
fr[450]=['ExchangeRateType', 'exchangeratetype.html'];
fr[451]=['LineNatureIndicatorType', 'linenatureindicatortype.html'];
fr[452]=['LineOperationType', 'lineoperationtype.html'];
fr[453]=['MarginSchemeType', 'marginschemetype.html'];
fr[454]=['ProductCodeCategoryType', 'productcodecategorytype.html'];
fr[455]=['ProductCodeValueType', 'productcodevaluetype.html'];
fr[456]=['ProductFeeMeasuringUnitType', 'productfeemeasuringunittype.html'];
fr[457]=['ProductFeeOperationType', 'productfeeoperationtype.html'];
fr[458]=['ProductStreamType', 'productstreamtype.html'];
fr[459]=['QuantityType', 'quantitytype.html'];
fr[460]=['RateType', 'ratetype.html'];
fr[461]=['TakeoverType', 'takeovertype.html'];
fr[462]=['UnitOfMeasureType', 'unitofmeasuretype.html'];
fr[463]=['communicationData.xsd', 'communicationdata_xsd.html'];
fr[464]=['AeInternalMetric', 'aeinternalmetric.html'];
fr[465]=['aeInternalMetricId', 'aeinternalmetricid.html'];
fr[466]=['aeInternalMetricValue', 'aeinternalmetricvalue.html'];
fr[467]=['AeInternalMetricListType', 'aeinternalmetriclisttype.html'];
fr[468]=['aeInternalMetric', 'aeinternalmetric1.html'];
fr[469]=['AeStateType', 'aestatetype.html'];
fr[470]=['aeInternalMetric', 'aeinternalmetric2.html'];
fr[471]=['batteryLevel', 'batterylevel.html'];
fr[472]=['freeStorage', 'freestorage.html'];
fr[473]=['gsmCell', 'gsmcell.html'];
fr[474]=['mobileConnection', 'mobileconnection.html'];
fr[475]=['provider', 'provider.html'];
fr[476]=['signalStrength', 'signalstrength.html'];
fr[477]=['AppSoftwareType', 'appsoftwaretype.html'];
fr[478]=['softwareId', 'softwareid.html'];
fr[479]=['softwareMainVersion', 'softwaremainversion.html'];
fr[480]=['softwareOperation', 'softwareoperation.html'];
fr[481]=['CashRegisterEventType', 'cashregistereventtype.html'];
fr[482]=['eventCode', 'eventcode.html'];
fr[483]=['eventDescription', 'eventdescription.html'];
fr[484]=['CashRegisterInfoType', 'cashregisterinfotype.html'];
fr[485]=['cashRegisterEvent', 'cashregisterevent.html'];
fr[486]=['cashRegisterPosition', 'cashregisterposition.html'];
fr[487]=['cashRegisterState', 'cashregisterstate.html'];
fr[488]=['cashRegisterTechnicalInfo', 'cashregistertechnicalinfo.html'];
fr[489]=['cashRegisterTimeUpdate', 'cashregistertimeupdate.html'];
fr[490]=['CashRegisterPositionType', 'cashregisterpositiontype.html'];
fr[491]=['height', 'height.html'];
fr[492]=['latitude', 'latitude.html'];
fr[493]=['longitude', 'longitude.html'];
fr[494]=['CashRegisterStateType', 'cashregisterstatetype.html'];
fr[495]=['aeBlockUnblockState', 'aeblockunblockstate.html'];
fr[496]=['aeState', 'aestate.html'];
fr[497]=['cashRegisterWorkState', 'cashregisterworkstate.html'];
fr[498]=['errors', 'errors.html'];
fr[499]=['fiscalDayState', 'fiscaldaystate.html'];
fr[500]=['lastRecordCounter', 'lastrecordcounter.html'];
fr[501]=['lastSentRecordCounter', 'lastsentrecordcounter.html'];
fr[502]=['CashRegisterTechnicalInfoType', 'cashregistertechnicalinfotype.html'];
fr[503]=['cashRegisterSoftware', 'cashregistersoftware.html'];
fr[504]=['communicationProtocolVersion', 'communicationprotocolversion.html'];
fr[505]=['epdProcessIdentifiers', 'epdprocessidentifiers.html'];
fr[506]=['hardwareTechnicalInfo', 'hardwaretechnicalinfo.html'];
fr[507]=['imei', 'imei.html'];
fr[508]=['imsi', 'imsi.html'];
fr[509]=['operatorSite', 'operatorsite.html'];
fr[510]=['posAssignedBankAccounts', 'posassignedbankaccounts.html'];
fr[511]=['registrationNumber', 'registrationnumber.html'];
fr[512]=['schemaVersion', 'schemaversion.html'];
fr[513]=['vat', 'vat.html'];
fr[514]=['CashRegisterTimeUpdateType', 'cashregistertimeupdatetype.html'];
fr[515]=['changeDuration', 'changeduration.html'];
fr[516]=['changeMode', 'changemode.html'];
fr[517]=['newTime', 'newtime.html'];
fr[518]=['oldTime', 'oldtime.html'];
fr[519]=['EndpointsListType', 'endpointslisttype.html'];
fr[520]=['endpoints', 'endpoints.html'];
fr[521]=['EndpointType', 'endpointtype.html'];
fr[522]=['httpMethod', 'httpmethod.html'];
fr[523]=['sequence', 'sequence.html'];
fr[524]=['service', 'service.html'];
fr[525]=['url', 'url.html'];
fr[526]=['EpdProcessIdentifiersType', 'epdprocessidentifierstype.html'];
fr[527]=['currentAeBlockUnblockStateProcessId', 'currentaeblockunblockstateprocessid.html'];
fr[528]=['currentOperatorSiteProcessId', 'currentoperatorsiteprocessid.html'];
fr[529]=['currentSoftwareProcessId', 'currentsoftwareprocessid.html'];
fr[530]=['currentVatProcessId', 'currentvatprocessid.html'];
fr[531]=['nextOperatorSiteProcessId', 'nextoperatorsiteprocessid.html'];
fr[532]=['nextSoftwareProcessId', 'nextsoftwareprocessid.html'];
fr[533]=['nextVatProcessId', 'nextvatprocessid.html'];
fr[534]=['FirmwareSliceType', 'firmwareslicetype.html'];
fr[535]=['firmwareDownloadUrl', 'firmwaredownloadurl.html'];
fr[536]=['firmwareHash', 'firmwarehash.html'];
fr[537]=['firmwareSliceNumber', 'firmwareslicenumber.html'];
fr[538]=['HardwareTechnicalInfoType', 'hardwaretechnicalinfotype.html'];
fr[539]=['aeHardwareVersion', 'aehardwareversion.html'];
fr[540]=['aeName', 'aename.html'];
fr[541]=['aeSoftware', 'aesoftware.html'];
fr[542]=['cashRegisterHardwareVersion', 'cashregisterhardwareversion.html'];
fr[543]=['cashRegisterName', 'cashregistername.html'];
fr[544]=['modemName', 'modemname.html'];
fr[545]=['modemSoftwareVersion', 'modemsoftwareversion.html'];
fr[546]=['OperatorSiteType', 'operatorsitetype.html'];
fr[547]=['coTaxPayer', 'cotaxpayer.html'];
fr[548]=['operatorSiteValidFrom', 'operatorsitevalidfrom.html'];
fr[549]=['shop', 'shop.html'];
fr[550]=['taxPayer', 'taxpayer.html'];
fr[551]=['PosAssignedBankAccountListType', 'posassignedbankaccountlisttype.html'];
fr[552]=['posAssignedBankAccountNumber', 'posassignedbankaccountnumber.html'];
fr[553]=['ProductItemType', 'productitemtype.html'];
fr[554]=['categoryCode', 'categorycode.html'];
fr[555]=['categoryNameLevel4', 'categorynamelevel4.html'];
fr[556]=['dtszkId', 'dtszkid.html'];
fr[557]=['productId', 'productid.html'];
fr[558]=['productManufacturer', 'productmanufacturer.html'];
fr[559]=['productName', 'productname.html'];
fr[560]=['state', 'state.html'];
fr[561]=['unitOfMeasure', 'unitofmeasure1.html'];
fr[562]=['validFrom', 'validfrom.html'];
fr[563]=['validTo', 'validto.html'];
fr[564]=['vtsz', 'vtsz.html'];
fr[565]=['ProductListType', 'productlisttype.html'];
fr[566]=['productItem', 'productitem.html'];
fr[567]=['SoftwareType', 'softwaretype.html'];
fr[568]=['softwareDevContact', 'softwaredevcontact.html'];
fr[569]=['softwareDevCountryCode', 'softwaredevcountrycode.html'];
fr[570]=['softwareDevName', 'softwaredevname.html'];
fr[571]=['softwareDevTaxNumber', 'softwaredevtaxnumber.html'];
fr[572]=['softwareHash', 'softwarehash.html'];
fr[573]=['softwareId', 'softwareid1.html'];
fr[574]=['softwareLastUpdateTime', 'softwarelastupdatetime.html'];
fr[575]=['softwareMainVersion', 'softwaremainversion1.html'];
fr[576]=['softwareName', 'softwarename.html'];
fr[577]=['softwareOperation', 'softwareoperation1.html'];
fr[578]=['TaxpayerAddressItemType', 'taxpayeraddressitemtype.html'];
fr[579]=['taxpayerAddress', 'taxpayeraddress.html'];
fr[580]=['taxpayerAddressClass', 'taxpayeraddressclass.html'];
fr[581]=['TaxpayerAddressListType', 'taxpayeraddresslisttype.html'];
fr[582]=['taxpayerAddressItem', 'taxpayeraddressitem.html'];
fr[583]=['TaxpayerDataType', 'taxpayerdatatype.html'];
fr[584]=['incorporation', 'incorporation.html'];
fr[585]=['taxNumberDetail', 'taxnumberdetail.html'];
fr[586]=['taxpayerAddressList', 'taxpayeraddresslist.html'];
fr[587]=['taxpayerName', 'taxpayername.html'];
fr[588]=['taxpayerShortName', 'taxpayershortname.html'];
fr[589]=['vatGroupMembership', 'vatgroupmembership.html'];
fr[590]=['TeaorCodeListType', 'teaorcodelisttype.html'];
fr[591]=['teaorCode', 'teaorcode.html'];
fr[592]=['VatGroupType', 'vatgrouptype.html'];
fr[593]=['collectorCode', 'collectorcode.html'];
fr[594]=['vatContent', 'vatcontent1.html'];
fr[595]=['vatLabel', 'vatlabel.html'];
fr[596]=['vatPercentage', 'vatpercentage1.html'];
fr[597]=['VatListType', 'vatlisttype.html'];
fr[598]=['vat', 'vat1.html'];
fr[599]=['VatType', 'vattype.html'];
fr[600]=['vatGroup', 'vatgroup.html'];
fr[601]=['vatValidFrom', 'vatvalidfrom.html'];
fr[602]=['AeBlockUnblockStateType', 'aeblockunblockstatetype.html'];
fr[603]=['BlockUnblockType', 'blockunblocktype.html'];
fr[604]=['CashRegisterWorkStateType', 'cashregisterworkstatetype.html'];
fr[605]=['CertificateSigningRequestType', 'certificatesigningrequesttype.html'];
fr[606]=['CertificateType', 'certificatetype.html'];
fr[607]=['CertificateTypeType', 'certificatetypetype.html'];
fr[608]=['CMSCertificateSigningRequestType', 'cmscertificatesigningrequesttype.html'];
fr[609]=['EventCodeType', 'eventcodetype.html'];
fr[610]=['FiscalDayStateType', 'fiscaldaystatetype.html'];
fr[611]=['GpsType', 'gpstype.html'];
fr[612]=['HttpMethodType', 'httpmethodtype.html'];
fr[613]=['IncorporationType', 'incorporationtype.html'];
fr[614]=['MobileConnectionType', 'mobileconnectiontype.html'];
fr[615]=['PercentageType', 'percentagetype.html'];
fr[616]=['PrintMessageType', 'printmessagetype.html'];
fr[617]=['ProductStateType', 'productstatetype.html'];
fr[618]=['QueryCertificateResultType', 'querycertificateresulttype.html'];
fr[619]=['RegistrationNumberType', 'registrationnumbertype.html'];
fr[620]=['ServiceType', 'servicetype.html'];
fr[621]=['SoftwareIdType', 'softwareidtype.html'];
fr[622]=['SoftwareOperationType', 'softwareoperationtype.html'];
fr[623]=['TaxpayerAddressClassType', 'taxpayeraddressclasstype.html'];
fr[624]=['TeaorCodeType', 'teaorcodetype.html'];
fr[625]=['UnitOfMeasureType', 'unitofmeasuretype1.html'];
fr[626]=['UrlType', 'urltype.html'];
fr[627]=['documentData.xsd', 'documentdata_xsd.html'];
fr[628]=['DocumentDataType', 'documentdatatype.html'];
fr[629]=['consumeSummaryNumber', 'consumesummarynumber.html'];
fr[630]=['fuelCardInfo', 'fuelcardinfo.html'];
fr[631]=['healthFundInfo', 'healthfundinfo.html'];
fr[632]=['document', 'document.html'];
fr[633]=['documentIssueDate', 'documentissuedate.html'];
fr[634]=['documentNumber', 'documentnumber1.html'];
fr[635]=['issueEndDateTime', 'issueenddatetime1.html'];
fr[636]=['issueStartDateTime', 'issuestartdatetime.html'];
fr[637]=['DocumentDetailType', 'documentdetailtype.html'];
fr[638]=['additionalDocumentData', 'additionaldocumentdata.html'];
fr[639]=['documentCategory', 'documentcategory.html'];
fr[640]=['paymentInstruments', 'paymentinstruments.html'];
fr[641]=['DocumentHeadType', 'documentheadtype.html'];
fr[642]=['coTaxPayer', 'cotaxpayer1.html'];
fr[643]=['customerInfo', 'customerinfo1.html'];
fr[644]=['documentDetail', 'documentdetail.html'];
fr[645]=['shop', 'shop1.html'];
fr[646]=['taxPayer', 'taxpayer1.html'];
fr[647]=['DocumentReferenceType', 'documentreferencetype.html'];
fr[648]=['cancellationReason', 'cancellationreason.html'];
fr[649]=['modificationReason', 'modificationreason.html'];
fr[650]=['modificationIndex', 'modificationindex1.html'];
fr[651]=['originalDocumentNumber', 'originaldocumentnumber.html'];
fr[652]=['DocumentType', 'documenttype.html'];
fr[653]=['documentHead', 'documenthead.html'];
fr[654]=['documentLines', 'documentlines.html'];
fr[655]=['documentReference', 'documentreference.html'];
fr[656]=['documentSummary', 'documentsummary.html'];
fr[657]=['InvoiceControlDataType', 'invoicecontroldatatype.html'];
fr[658]=['balanceChange', 'balancechange.html'];
fr[659]=['documentNumber', 'documentnumber2.html'];
fr[660]=['documentRoundingAmount', 'documentroundingamount.html'];
fr[661]=['issueEndDateTime', 'issueenddatetime2.html'];
fr[662]=['issueStartDateTime', 'issuestartdatetime1.html'];
fr[663]=['ntcaControlCode', 'ntcacontrolcode.html'];
fr[664]=['recordCounter', 'recordcounter.html'];
fr[665]=['shop', 'shop2.html'];
fr[666]=['InvoiceCoreDataType', 'invoicecoredatatype.html'];
fr[667]=['invoiceData', 'invoicedata1.html'];
fr[668]=['metaData', 'metadata.html'];
fr[669]=['LineAmountsDocumentType', 'lineamountsdocumenttype.html'];
fr[670]=['collectorCode', 'collectorcode1.html'];
fr[671]=['lineGrossAmountDocument', 'linegrossamountdocument.html'];
fr[672]=['lineGrossAmountDocumentHUF', 'linegrossamountdocumenthuf.html'];
fr[673]=['LinesType', 'linestype1.html'];
fr[674]=['line', 'line1.html'];
fr[675]=['LineType', 'linetype1.html'];
fr[676]=['additionalLineData', 'additionallinedata1.html'];
fr[677]=['EANCode', 'eancode.html'];
fr[678]=['itemNature', 'itemnature.html'];
fr[679]=['lineAmountsDocument', 'lineamountsdocument.html'];
fr[680]=['lineDescription', 'linedescription1.html'];
fr[681]=['lineNatureIndicator', 'linenatureindicator1.html'];
fr[682]=['lineNumber', 'linenumber1.html'];
fr[683]=['productCodes', 'productcodes1.html'];
fr[684]=['quantity', 'quantity1.html'];
fr[685]=['unitOfMeasure', 'unitofmeasure2.html'];
fr[686]=['unitOfMeasureOwn', 'unitofmeasureown1.html'];
fr[687]=['unitPrice', 'unitprice1.html'];
fr[688]=['unitPriceHUF', 'unitpricehuf1.html'];
fr[689]=['OtherDocumentCoreDataType', 'otherdocumentcoredatatype.html'];
fr[690]=['metaData', 'metadata1.html'];
fr[691]=['otherDocumentData', 'otherdocumentdata.html'];
fr[692]=['ProductCodesType', 'productcodestype1.html'];
fr[693]=['productCode', 'productcode1.html'];
fr[694]=['ProductCodeType', 'productcodetype1.html'];
fr[695]=['productCodeOwnValue', 'productcodeownvalue1.html'];
fr[696]=['productCodeValue', 'productcodevalue1.html'];
fr[697]=['productCodeCategory', 'productcodecategory1.html'];
fr[698]=['ReceiptCoreDataType', 'receiptcoredatatype.html'];
fr[699]=['metaData', 'metadata2.html'];
fr[700]=['receiptData', 'receiptdata.html'];
fr[701]=['SummaryDocumentType', 'summarydocumenttype.html'];
fr[702]=['collectorCode', 'collectorcode2.html'];
fr[703]=['vatContentGrossAmount', 'vatcontentgrossamount1.html'];
fr[704]=['vatContentGrossAmountHUF', 'vatcontentgrossamounthuf1.html'];
fr[705]=['SummaryGrossDataType', 'summarygrossdatatype1.html'];
fr[706]=['documentGrossAmount', 'documentgrossamount.html'];
fr[707]=['documentGrossAmountHUF', 'documentgrossamounthuf1.html'];
fr[708]=['documentRoundingAmount', 'documentroundingamount1.html'];
fr[709]=['SummaryType', 'summarytype1.html'];
fr[710]=['ntcaControlCode', 'ntcacontrolcode1.html'];
fr[711]=['summaryDocument', 'summarydocument.html'];
fr[712]=['summaryGrossData', 'summarygrossdata1.html'];
fr[713]=['SupplierInfoType', 'supplierinfotype1.html'];
fr[714]=['communityVatNumber', 'communityvatnumber2.html'];
fr[715]=['exciseLicenceNum', 'exciselicencenum1.html'];
fr[716]=['groupMemberTaxNumber', 'groupmembertaxnumber2.html'];
fr[717]=['individualExemption', 'individualexemption1.html'];
fr[718]=['supplierAddress', 'supplieraddress1.html'];
fr[719]=['supplierBankAccountNumber', 'supplierbankaccountnumber1.html'];
fr[720]=['supplierName', 'suppliername2.html'];
fr[721]=['supplierTaxNumber', 'suppliertaxnumber1.html'];
fr[722]=['LineNatureIndicatorType', 'linenatureindicatortype1.html'];
fr[723]=['ProductCodeCategoryType', 'productcodecategorytype1.html'];
fr[724]=['ProductCodeValueType', 'productcodevaluetype1.html'];
fr[725]=['QuantityType', 'quantitytype1.html'];
fr[726]=['eReceiptBase.xsd', 'ereceiptbase_xsd.html'];
fr[727]=['AdditionalDataType', 'additionaldatatype1.html'];
fr[728]=['dataDescription', 'datadescription1.html'];
fr[729]=['dataName', 'dataname1.html'];
fr[730]=['dataValue', 'datavalue1.html'];
fr[731]=['AdditionalHeadType', 'additionalheadtype.html'];
fr[732]=['additionalData', 'additionaldata.html'];
fr[733]=['AdditionalLinesType', 'additionallinestype.html'];
fr[734]=['additionalLine', 'additionalline.html'];
fr[735]=['AdditionalLineType', 'additionallinetype.html'];
fr[736]=['additionalLineData', 'additionallinedata2.html'];
fr[737]=['lineNumber', 'linenumber2.html'];
fr[738]=['AddressType', 'addresstype1.html'];
fr[739]=['detailedAddress', 'detailedaddress1.html'];
fr[740]=['simpleAddress', 'simpleaddress1.html'];
fr[741]=['AttachmentType', 'attachmenttype.html'];
fr[742]=['fileBinary', 'filebinary.html'];
fr[743]=['fileExtension', 'fileextension.html'];
fr[744]=['BasicEReceiptRequestType', 'basicereceiptrequesttype.html'];
fr[745]=['APNumber', 'apnumber.html'];
fr[746]=['BasicEReceiptResponseType', 'basicereceiptresponsetype.html'];
fr[747]=['APNumber', 'apnumber1.html'];
fr[748]=['callbackRequired', 'callbackrequired.html'];
fr[749]=['CommerceCollectorListType', 'commercecollectorlisttype.html'];
fr[750]=['commercialCollector', 'commercialcollector.html'];
fr[751]=['CommerceCollectorType', 'commercecollectortype.html'];
fr[752]=['collectorCode', 'collectorcode3.html'];
fr[753]=['collectorGrossAmount', 'collectorgrossamount.html'];
fr[754]=['collectorNetAmount', 'collectornetamount.html'];
fr[755]=['collectorVatAmount', 'collectorvatamount.html'];
fr[756]=['CustomerInfoType', 'customerinfotype1.html'];
fr[757]=['customerAddress', 'customeraddress1.html'];
fr[758]=['customerBankAccountNumber', 'customerbankaccountnumber1.html'];
fr[759]=['customerName', 'customername1.html'];
fr[760]=['customerVatData', 'customervatdata1.html'];
fr[761]=['customerVatStatus', 'customervatstatus1.html'];
fr[762]=['CustomerTaxNumberType', 'customertaxnumbertype1.html'];
fr[763]=['groupMemberTaxNumber', 'groupmembertaxnumber3.html'];
fr[764]=['CustomerVatDataType', 'customervatdatatype1.html'];
fr[765]=['communityVatNumber', 'communityvatnumber3.html'];
fr[766]=['customerTaxNumber', 'customertaxnumber1.html'];
fr[767]=['thirdStateTaxId', 'thirdstatetaxid1.html'];
fr[768]=['DailyCashFlowDetailListType', 'dailycashflowdetaillisttype.html'];
fr[769]=['dailyCashFlowDetail', 'dailycashflowdetail.html'];
fr[770]=['DailyCashFlowDetailType', 'dailycashflowdetailtype.html'];
fr[771]=['amount', 'amount.html'];
fr[772]=['commerceCollectorList', 'commercecollectorlist.html'];
fr[773]=['count', 'count.html'];
fr[774]=['fulfillmentDate', 'fulfillmentdate.html'];
fr[775]=['DetailedAddressType', 'detailedaddresstype1.html'];
fr[776]=['building', 'building1.html'];
fr[777]=['city', 'city2.html'];
fr[778]=['countryCode', 'countrycode2.html'];
fr[779]=['door', 'door1.html'];
fr[780]=['floor', 'floor1.html'];
fr[781]=['lotNumber', 'lotnumber1.html'];
fr[782]=['number', 'number1.html'];
fr[783]=['postalCode', 'postalcode2.html'];
fr[784]=['publicPlaceCategory', 'publicplacecategory1.html'];
fr[785]=['region', 'region2.html'];
fr[786]=['staircase', 'staircase1.html'];
fr[787]=['streetName', 'streetname1.html'];
fr[788]=['DocumentAdditionalDataType', 'documentadditionaldatatype.html'];
fr[789]=['additionalHead', 'additionalhead.html'];
fr[790]=['additionalLines', 'additionallines.html'];
fr[791]=['attachment', 'attachment.html'];
fr[792]=['documentNumber', 'documentnumber3.html'];
fr[793]=['DocumentControlDataType', 'documentcontroldatatype.html'];
fr[794]=['balanceChange', 'balancechange1.html'];
fr[795]=['documentNumber', 'documentnumber4.html'];
fr[796]=['recordCounter', 'recordcounter1.html'];
fr[797]=['ForeignCurrencyType', 'foreigncurrencytype.html'];
fr[798]=['currencyAmount', 'currencyamount.html'];
fr[799]=['currencyCode', 'currencycode1.html'];
fr[800]=['currencyHufAmount', 'currencyhufamount.html'];
fr[801]=['exchangeRate', 'exchangerate1.html'];
fr[802]=['FuelCardInfoType', 'fuelcardinfotype.html'];
fr[803]=['authorizationNumber', 'authorizationnumber.html'];
fr[804]=['fuelCardNumber', 'fuelcardnumber.html'];
fr[805]=['vehicleRegistrationNumber', 'vehicleregistrationnumber1.html'];
fr[806]=['HealthFundInfoType', 'healthfundinfotype.html'];
fr[807]=['healthFundAddress', 'healthfundaddress.html'];
fr[808]=['healthFundCardNumber', 'healthfundcardnumber.html'];
fr[809]=['healthFundCode', 'healthfundcode.html'];
fr[810]=['healthFundMemberNumber', 'healthfundmembernumber.html'];
fr[811]=['healthFundName', 'healthfundname.html'];
fr[812]=['InstrumentType', 'instrumenttype.html'];
fr[813]=['afrAmount', 'aframount.html'];
fr[814]=['cardPaymentAmount', 'cardpaymentamount.html'];
fr[815]=['cashHufAmount', 'cashhufamount.html'];
fr[816]=['foreignCurrency', 'foreigncurrency.html'];
fr[817]=['otherPayment', 'otherpayment.html'];
fr[818]=['szepCardAmount', 'szepcardamount.html'];
fr[819]=['MetaDataType', 'metadatatype.html'];
fr[820]=['APNumber', 'apnumber2.html'];
fr[821]=['documentNumber', 'documentnumber5.html'];
fr[822]=['documentOperation', 'documentoperation.html'];
fr[823]=['electronicInvoiceHash', 'electronicinvoicehash.html'];
fr[824]=['taxpayerId', 'taxpayerid1.html'];
fr[825]=['OtherPaymentType', 'otherpaymenttype.html'];
fr[826]=['otherPaymentCode', 'otherpaymentcode.html'];
fr[827]=['otherPaymentHufAmount', 'otherpaymenthufamount.html'];
fr[828]=['PaymentInstrumentsType', 'paymentinstrumentstype.html'];
fr[829]=['paymentInstrument', 'paymentinstrument.html'];
fr[830]=['PaymentInstrumentType', 'paymentinstrumenttype.html'];
fr[831]=['documentPaymentAmount', 'documentpaymentamount.html'];
fr[832]=['documentPaymentMethod', 'documentpaymentmethod.html'];
fr[833]=['ReportHeaderType', 'reportheadertype.html'];
fr[834]=['additionalData', 'additionaldata1.html'];
fr[835]=['coTaxPayer', 'cotaxpayer2.html'];
fr[836]=['issueStartDateTime', 'issuestartdatetime2.html'];
fr[837]=['ntcaControlCode', 'ntcacontrolcode2.html'];
fr[838]=['recordCounter', 'recordcounter2.html'];
fr[839]=['shop', 'shop3.html'];
fr[840]=['taxPayer', 'taxpayer2.html'];
fr[841]=['ShopType', 'shoptype.html'];
fr[842]=['shopName', 'shopname.html'];
fr[843]=['shopShortName', 'shopshortname.html'];
fr[844]=['SignedDocumentEnvelopeType', 'signeddocumentenvelopetype.html'];
fr[845]=['customerEnvelopeData', 'customerenvelopedata.html'];
fr[846]=['envelopeData', 'envelopedata.html'];
fr[847]=['envelopeHash', 'envelopehash.html'];
fr[848]=['envelopeSignature', 'envelopesignature.html'];
fr[849]=['envelopeVersion', 'envelopeversion.html'];
fr[850]=['SignedReportEnvelopeType', 'signedreportenvelopetype.html'];
fr[851]=['customerEnvelopeData', 'customerenvelopedata1.html'];
fr[852]=['envelopeData', 'envelopedata1.html'];
fr[853]=['envelopeHash', 'envelopehash1.html'];
fr[854]=['envelopeSignature', 'envelopesignature1.html'];
fr[855]=['envelopeVersion', 'envelopeversion1.html'];
fr[856]=['SimpleAddressType', 'simpleaddresstype1.html'];
fr[857]=['additionalAddressDetail', 'additionaladdressdetail1.html'];
fr[858]=['city', 'city3.html'];
fr[859]=['countryCode', 'countrycode3.html'];
fr[860]=['postalCode', 'postalcode3.html'];
fr[861]=['region', 'region3.html'];
fr[862]=['TaxNumberType', 'taxnumbertype1.html'];
fr[863]=['countyCode', 'countycode1.html'];
fr[864]=['taxpayerId', 'taxpayerid2.html'];
fr[865]=['vatCode', 'vatcode1.html'];
fr[866]=['TaxPayerType', 'taxpayertype.html'];
fr[867]=['groupIdentificationNumber', 'groupidentificationnumber.html'];
fr[868]=['taxNumber', 'taxnumber1.html'];
fr[869]=['taxPayerName', 'taxpayername1.html'];
fr[870]=['taxPayerShortName', 'taxpayershortname1.html'];
fr[871]=['APNumberType', 'apnumbertype.html'];
fr[872]=['AtomicCsrType', 'atomiccsrtype.html'];
fr[873]=['CancellationReasonType', 'cancellationreasontype.html'];
fr[874]=['CashPaymentTitleType', 'cashpaymenttitletype.html'];
fr[875]=['CollectorCodeType', 'collectorcodetype.html'];
fr[876]=['CustomerAppEventCodeType', 'customerappeventcodetype.html'];
fr[877]=['CustomerVatStatusType', 'customervatstatustype1.html'];
fr[878]=['DataNameType', 'datanametype1.html'];
fr[879]=['Digit4Type', 'digit4type.html'];
fr[880]=['DocumentCategoryType', 'documentcategorytype.html'];
fr[881]=['DocumentClassType', 'documentclasstype.html'];
fr[882]=['DocumentDateType', 'documentdatetype.html'];
fr[883]=['DocumentNumberType', 'documentnumbertype.html'];
fr[884]=['DocumentOperationType', 'documentoperationtype.html'];
fr[885]=['DocumentUnboundedIndexType', 'documentunboundedindextype.html'];
fr[886]=['EANType', 'eantype.html'];
fr[887]=['EncryptedSymmetricInitialVectorType', 'encryptedsymmetricinitialvectortype.html'];
fr[888]=['EncryptedSymmetricKeyType', 'encryptedsymmetrickeytype.html'];
fr[889]=['ExchangeRateType', 'exchangeratetype1.html'];
fr[890]=['File512kBinaryType', 'file512kbinarytype.html'];
fr[891]=['FileExtensionType', 'fileextensiontype.html'];
fr[892]=['ItemNatureType', 'itemnaturetype.html'];
fr[893]=['LineNumberType', 'linenumbertype1.html'];
fr[894]=['ModificationReasonType', 'modificationreasontype.html'];
fr[895]=['MonetaryType', 'monetarytype1.html'];
fr[896]=['NtcaControlCodeType', 'ntcacontrolcodetype.html'];
fr[897]=['PaymentMethodType', 'paymentmethodtype1.html'];
fr[898]=['ProcessIdentifierType', 'processidentifiertype.html'];
fr[899]=['ReportClassType', 'reportclasstype.html'];
fr[900]=['reportMessage.xsd', 'reportmessage_xsd.html'];
fr[901]=['CashFlowReportType', 'cashflowreporttype.html'];
fr[902]=['balanceChange', 'balancechange2.html'];
fr[903]=['changeAmount', 'changeamount.html'];
fr[904]=['paymentTitleCode', 'paymenttitlecode.html'];
fr[905]=['reportHeader', 'reportheader.html'];
fr[906]=['reportNumber', 'reportnumber.html'];
fr[907]=['roundingDifferenceAmount', 'roundingdifferenceamount.html'];
fr[908]=['CashRegisterOpenBalanceReportType', 'cashregisteropenbalancereporttype.html'];
fr[909]=['openBalance', 'openbalance.html'];
fr[910]=['reportHeader', 'reportheader1.html'];
fr[911]=['reportNumber', 'reportnumber1.html'];
fr[912]=['taxationDay', 'taxationday.html'];
fr[913]=['CashRegisterReportType', 'cashregisterreporttype.html'];
fr[914]=['balanceAmountNoRounding', 'balanceamountnorounding.html'];
fr[915]=['balanceAmountWidthRounding', 'balanceamountwidthrounding.html'];
fr[916]=['balanceChange', 'balancechange3.html'];
fr[917]=['balanceChangeSum', 'balancechangesum.html'];
fr[918]=['dailyCancelledInvoice', 'dailycancelledinvoice.html'];
fr[919]=['dailyCancelledReceipt', 'dailycancelledreceipt.html'];
fr[920]=['dailyModificationInvoice', 'dailymodificationinvoice.html'];
fr[921]=['dailyModificationReceipt', 'dailymodificationreceipt.html'];
fr[922]=['dailyModificationSum', 'dailymodificationsum.html'];
fr[923]=['dailyPaymentOther', 'dailypaymentother.html'];
fr[924]=['dailyPaymentSum', 'dailypaymentsum.html'];
fr[925]=['dailyRevenueInvoice', 'dailyrevenueinvoice.html'];
fr[926]=['dailyRevenueOther', 'dailyrevenueother.html'];
fr[927]=['dailyRevenueReceipt', 'dailyrevenuereceipt.html'];
fr[928]=['dailyRevenueSum', 'dailyrevenuesum.html'];
fr[929]=['dailyTipAmount', 'dailytipamount.html'];
fr[930]=['fuelCardCancellations', 'fuelcardcancellations.html'];
fr[931]=['fuelCardModifications', 'fuelcardmodifications.html'];
fr[932]=['fuelCardSales', 'fuelcardsales.html'];
fr[933]=['fuelCardTransactionSum', 'fuelcardtransactionsum.html'];
fr[934]=['healthFundCancellations', 'healthfundcancellations.html'];
fr[935]=['healthFundModifications', 'healthfundmodifications.html'];
fr[936]=['healthFundSales', 'healthfundsales.html'];
fr[937]=['healthFundTransactionSum', 'healthfundtransactionsum.html'];
fr[938]=['reportHeader', 'reportheader2.html'];
fr[939]=['reportNumber', 'reportnumber2.html'];
fr[940]=['roundingAmountSum', 'roundingamountsum.html'];
fr[941]=['CoreReportType', 'corereporttype.html'];
fr[942]=['CashFlowReport', 'cashflowreport.html'];
fr[943]=['CashRegisterOpenBalanceReport', 'cashregisteropenbalancereport.html'];
fr[944]=['CashRegisterReport', 'cashregisterreport.html'];
fr[945]=['DailyCashFlowReport', 'dailycashflowreport.html'];
fr[946]=['OtherReport', 'otherreport.html'];
fr[947]=['CustomerReportType', 'customerreporttype.html'];
fr[948]=['decryptKey', 'decryptkey.html'];
fr[949]=['reportAdditional', 'reportadditional.html'];
fr[950]=['DailyCashFlowReportType', 'dailycashflowreporttype.html'];
fr[951]=['closureCounter', 'closurecounter.html'];
fr[952]=['dailyInvoice', 'dailyinvoice.html'];
fr[953]=['dailyInvoiceCancellation', 'dailyinvoicecancellation.html'];
fr[954]=['dailyInvoiceModification', 'dailyinvoicemodification.html'];
fr[955]=['dailyReceipt', 'dailyreceipt.html'];
fr[956]=['dailyReceiptCancellation', 'dailyreceiptcancellation.html'];
fr[957]=['dailyReceiptModification', 'dailyreceiptmodification.html'];
fr[958]=['dailySimplifiedInvoice', 'dailysimplifiedinvoice.html'];
fr[959]=['dailySimplifiedInvoiceCancellation', 'dailysimplifiedinvoicecancellation.html'];
fr[960]=['dailySimplifiedInvoiceModification', 'dailysimplifiedinvoicemodification.html'];
fr[961]=['reportHeader', 'reportheader3.html'];
fr[962]=['reportNumber', 'reportnumber3.html'];
fr[963]=['sumCommerceAmount', 'sumcommerceamount.html'];
fr[964]=['OtherReportDataListType', 'otherreportdatalisttype.html'];
fr[965]=['otherReportData', 'otherreportdata.html'];
fr[966]=['OtherReportDataType', 'otherreportdatatype.html'];
fr[967]=['otherDocumentDataName', 'otherdocumentdataname.html'];
fr[968]=['otherDocumentDataValue', 'otherdocumentdatavalue.html'];
fr[969]=['OtherReportType', 'otherreporttype.html'];
fr[970]=['otherDocument', 'otherdocument.html'];
fr[971]=['otherDocumentDescription', 'otherdocumentdescription.html'];
fr[972]=['otherReportDataList', 'otherreportdatalist.html'];
fr[973]=['reportHeader', 'reportheader4.html'];
fr[974]=['reportNumber', 'reportnumber4.html'];
fr[975]=['CoreReport', 'corereport.html'];
fr[976]=['CustomerReport', 'customerreport.html'];    
 return fr;          
}

function CreateWordIndex()
{
var w=[
            
['true',[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439,440,441,442,443,444,445,446,447,448,449,450,451,452,453,454,455,456,457,458,459,460,461,462,463,464,465,466,467,468,469,470,471,472,473,474,475,476,477,478,479,480,481,482,483,484,485,486,487,488,489,490,491,492,493,494,495,496,497,498,499,500,501,502,503,504,505,506,507,508,509,510,511,512,513,514,515,516,517,518,519,520,521,522,523,524,525,526,527,528,529,530,531,532,533,534,535,536,537,538,539,540,541,542,543,544,545,546,547,548,549,550,551,552,553,554,555,556,557,558,559,560,561,562,563,564,565,566,567,568,569,570,571,572,573,574,575,576,577,578,579,580,581,582,583,584,585,586,587,588,589,590,591,592,593,594,595,596,597,598,599,600,601,602,603,604,605,606,607,608,609,610,611,612,613,614,615,616,617,618,619,620,621,622,623,624,625,626,627,628,629,630,631,632,633,634,635,636,637,638,639,640,641,642,643,644,645,646,647,648,649,650,651,652,653,654,655,656,657,658,659,660,661,662,663,664,665,666,667,668,669,670,671,672,673,674,675,676,677,678,679,680,681,682,683,684,685,686,687,688,689,690,691,692,693,694,695,696,697,698,699,700,701,702,703,704,705,706,707,708,709,710,711,712,713,714,715,716,717,718,719,720,721,722,723,724,725,726,727,728,729,730,731,732,733,734,735,736,737,738,739,740,741,742,743,744,745,746,747,748,749,750,751,752,753,754,755,756,757,758,759,760,761,762,763,764,765,766,767,768,769,770,771,772,773,774,775,776,777,778,779,780,781,782,783,784,785,786,787,788,789,790,791,792,793,794,795,796,797,798,799,800,801,802,803,804,805,806,807,808,809,810,811,812,813,814,815,816,817,818,819,820,821,822,823,824,825,826,827,828,829,830,831,832,833,834,835,836,837,838,839,840,841,842,843,844,845,846,847,848,849,850,851,852,853,854,855,856,857,858,859,860,861,862,863,864,865,866,867,868,869,870,871,872,873,874,875,876,877,878,879,880,881,882,883,884,885,886,887,888,889,890,891,892,893,894,895,896,897,898,899,900,901,902,903,904,905,906,907,908,909,910,911,912,913,914,915,916,917,918,919,920,921,922,923,924,925,926,927,928,929,930,931,932,933,934,935,936,937,938,939,940,941,942,943,944,945,946,947,948,949,950,951,952,953,954,955,956,957,958,959,960,961,962,963,964,965,966,967,968,969,970,971,972,973,974,975,976]],
['version',[9,33,34,35,37,119,155,463,477,479,502,504,512,526,529,532,538,539,542,545,567,575,627,726,844,849,850,855,900]],
['27--',[9,900]],
['--created',[9,463,900]],
['with',[9,33,34,36,155,218,219,220,241,242,296,297,299,300,301,361,363,375,417,418,446,463,469,471,521,523,534,536,567,572,592,594,595,596,613,615,627,657,660,705,708,900,913,915,950,951]],
['liquid',[9,463,900]],
['studio',[9,463,900]],
['https',[9,463,626,900]],
['liquid-technologies',[9,463,900]],
['schema',[9,33,119,155,446,463,502,512,627,726,900]],
['xmlns',[9,33,119,155,463,627,726,900]],
['base',[9,10,11,12,13,14,15,16,32,33,50,52,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,146,147,148,149,150,151,152,153,154,155,163,166,167,168,174,175,202,203,208,209,221,223,224,226,229,232,233,236,241,243,246,252,253,254,255,256,257,258,259,272,273,289,290,291,293,294,295,296,297,299,300,301,305,314,321,334,335,336,339,345,349,350,352,354,364,365,369,370,372,375,376,377,380,381,389,390,391,392,393,394,395,396,398,399,400,408,411,413,416,417,420,421,422,423,424,425,426,429,435,436,437,446,447,448,449,450,451,452,453,454,455,456,457,458,459,460,461,462,463,464,465,466,469,471,472,473,475,476,481,483,490,491,494,498,502,504,507,508,512,514,515,516,526,527,528,529,530,531,532,533,538,539,540,542,543,544,545,546,547,549,550,578,579,583,585,592,593,595,602,603,604,605,606,607,608,609,610,611,612,613,614,615,616,617,618,619,620,621,622,623,624,625,626,627,628,630,631,633,634,637,638,639,640,641,642,643,645,646,647,648,649,650,657,658,659,663,665,666,668,669,670,671,672,675,676,677,678,682,689,690,698,699,701,702,703,704,705,706,707,709,710,713,716,718,721,722,723,724,725,726,744,746,762,797,798,802,803,804,805,806,808,809,810,811,825,826,841,866,871,872,873,874,875,876,877,878,879,880,881,882,883,884,885,886,887,888,889,890,891,892,893,894,895,896,897,898,899,900,901,902,904,905,906,908,909,910,911,913,916,938,939,947,949,950,951,952,953,954,955,956,957,958,959,960,961,962,969,973,974,975,976]],
['http',[9,33,119,155,463,612,627,726,900]],
['schemas',[9,33,119,155,463,627,726,900]],
['ereceipt',[9,463,627,726,744,746,900]],
['reportmessage',[9,900]],
['export',[9,10,26,28,30,32]],
['invoicedata',[9,155,446,627,666,667]],
['data',[9,33,34,36,37,39,40,41,42,43,44,45,62,119,123,136,137,155,156,157,158,159,160,162,163,167,174,176,179,202,206,210,221,226,232,241,242,246,247,249,264,265,266,268,269,270,271,272,276,277,278,279,280,281,284,285,286,287,289,293,296,299,302,304,305,306,307,308,309,310,311,313,317,319,322,334,339,341,342,349,361,363,364,370,371,373,375,384,386,387,388,389,402,405,408,417,420,423,435,438,442,446,448,450,461,463,477,481,483,484,489,502,509,538,541,546,550,553,560,567,578,579,583,585,599,600,627,628,632,637,638,641,643,644,646,647,652,653,654,655,656,666,667,668,669,675,676,679,689,690,691,698,699,700,705,709,712,713,726,727,728,729,730,731,732,733,734,735,736,744,746,756,760,764,768,769,770,775,788,789,790,793,812,816,819,833,834,840,841,844,845,846,850,851,852,856,857,866,873,878,889,900,901,905,908,910,913,938,941,947,948,950,952,953,954,955,956,957,958,959,960,961,964,965,966,967,968,969,972,973,975,976]],
['documentdata',[9,627]],
['common',[9,10,19,24,25,26,28,29,33,119,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,153,154,155,156,157,159,163,165,177,178,195,196,197,198,202,204,205,210,211,213,214,215,216,217,218,219,220,221,225,226,227,232,234,235,237,238,239,240,241,244,245,246,250,269,272,275,282,283,305,316,331,337,338,339,343,344,346,347,348,349,351,353,357,358,378,379,382,383,406,407,408,409,410,414,415,417,418,447,448,449,451,452,453,454,455,456,457,458,459,460,461,462,463,477,479,514,517,518,534,536,546,548,551,552,553,554,555,556,557,558,559,562,563,564,567,568,569,570,571,572,574,575,576,583,587,588,589,599,601,613,617,623,625,627,628,629,635,636,647,651,657,661,662,675,680,686,694,695,713,714,715,719,720,722,723,724,725,726,727,728,730,744,746,756,758,759,764,765,767,775,776,777,778,779,780,781,782,783,784,785,786,787,797,799,802,803,804,805,806,808,809,810,811,819,823,824,833,836,841,842,843,844,847,849,850,853,855,856,857,858,859,860,861,862,863,864,865,866,869,870,873,874,877,878,884,894,895,897,900,966,967,968,969,970,971]],
['ntca',[9,33,119,155,463,627,657,663,709,710,726,833,837,896,900]],
['attributeformdefault',[9,33,119,155,463,627,726,900]],
['unqualified',[9,33,119,155,463,627,726,900]],
['elementformdefault',[9,33,119,155,463,627,726,900]],
['qualified',[9,33,119,155,463,627,726,900]],
['targetnamespace',[9,33,119,155,463,627,726,900]],
['xmlschema',[9,33,119,155,463,627,726,900]],
['import',[9,119,155,463,627,726,900]],
['schemalocation',[9,119,155,463,627,726,900]],
['namespace',[9,119,155,463,627,726,900]],
['ereceiptbase',[9,463,627,900]],
['complextype',[9,10,26,32,33,34,39,42,45,50,52,53,55,58,62,68,69,119,120,123,136,142,155,156,160,163,167,170,174,177,179,195,197,199,202,208,210,214,216,218,221,226,230,232,237,239,241,246,264,269,272,276,282,284,289,293,296,299,302,305,334,337,339,347,349,355,357,361,364,370,375,378,380,382,384,389,392,398,402,406,408,417,420,423,426,435,438,442,446,463,464,467,469,477,481,484,490,494,502,514,519,521,526,534,538,546,551,553,565,567,578,581,583,590,592,597,599,627,628,637,641,647,652,657,666,669,673,675,689,692,694,698,701,705,709,713,726,727,731,733,735,738,741,744,746,749,751,756,762,764,768,770,775,788,793,797,802,806,812,819,825,828,830,833,841,844,850,856,862,866,900,901,908,913,941,947,950,964,966,969,975,976]],
['name',[9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439,440,441,442,443,444,445,446,447,448,449,450,451,452,453,454,455,456,457,458,459,460,461,462,463,464,465,466,467,468,469,470,471,472,473,474,475,476,477,478,479,480,481,482,483,484,485,486,487,488,489,490,491,492,493,494,495,496,497,498,499,500,501,502,503,504,505,506,507,508,509,510,511,512,513,514,515,516,517,518,519,520,521,522,523,524,525,526,527,528,529,530,531,532,533,534,535,536,537,538,539,540,541,542,543,544,545,546,547,548,549,550,551,552,553,554,555,556,557,558,559,560,561,562,563,564,565,566,567,568,569,570,571,572,573,574,575,576,577,578,579,580,581,582,583,584,585,586,587,588,589,590,591,592,593,594,595,596,597,598,599,600,601,602,603,604,605,606,607,608,609,610,611,612,613,614,615,616,617,618,619,620,621,622,623,624,625,626,627,628,629,630,631,632,633,634,635,636,637,638,639,640,641,642,643,644,645,646,647,648,649,650,651,652,653,654,655,656,657,658,659,660,661,662,663,664,665,666,667,668,669,670,671,672,673,674,675,676,677,678,679,680,681,682,683,684,685,686,687,688,689,690,691,692,693,694,695,696,697,698,699,700,701,702,703,704,705,706,707,708,709,710,711,712,713,714,715,716,717,718,719,720,721,722,723,724,725,726,727,728,729,730,731,732,733,734,735,736,737,738,739,740,741,742,743,744,745,746,747,748,749,750,751,752,753,754,755,756,757,758,759,760,761,762,763,764,765,766,767,768,769,770,771,772,773,774,775,776,777,778,779,780,781,782,783,784,785,786,787,788,789,790,791,792,793,794,795,796,797,798,799,800,801,802,803,804,805,806,807,808,809,810,811,812,813,814,815,816,817,818,819,820,821,822,823,824,825,826,827,828,829,830,831,832,833,834,835,836,837,838,839,840,841,842,843,844,845,846,847,848,849,850,851,852,853,854,855,856,857,858,859,860,861,862,863,864,865,866,867,868,869,870,871,872,873,874,875,876,877,878,879,880,881,882,883,884,885,886,887,888,889,890,891,892,893,894,895,896,897,898,899,900,901,902,903,904,905,906,907,908,909,910,911,912,913,914,915,916,917,918,919,920,921,922,923,924,925,926,927,928,929,930,931,932,933,934,935,936,937,938,939,940,941,942,943,944,945,946,947,948,949,950,951,952,953,954,955,956,957,958,959,960,961,962,963,964,965,966,967,968,969,970,971,972,973,974,975,976]],
['exportdatatype',[9,10,26,27]],
['annotation',[9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439,440,441,442,443,444,445,446,447,448,449,450,451,452,453,454,455,456,457,458,459,460,461,462,463,464,465,466,467,468,469,470,471,472,473,474,475,476,477,478,479,480,481,482,483,484,485,486,487,488,489,490,491,492,493,494,495,496,497,498,499,500,501,502,503,504,505,506,507,508,509,510,511,512,513,514,515,516,517,518,519,520,521,522,523,524,525,526,527,528,529,530,531,532,533,534,535,536,537,538,539,540,541,542,543,544,545,546,547,548,549,550,551,552,553,554,555,556,557,558,559,560,561,562,563,564,565,566,567,568,569,570,571,572,573,574,575,576,577,578,579,580,581,582,583,584,585,586,587,588,589,590,591,592,593,594,595,596,597,598,599,600,601,602,603,604,605,606,607,608,609,610,611,612,613,614,615,616,617,618,619,620,621,622,623,624,625,626,627,628,629,630,631,632,633,634,635,636,637,638,639,640,641,642,643,644,645,646,647,648,649,650,651,652,653,654,655,656,657,658,659,660,661,662,663,664,665,666,667,668,669,670,671,672,673,674,675,676,677,678,679,680,681,682,683,684,685,686,687,688,689,690,691,692,693,694,695,696,697,698,699,700,701,702,703,704,705,706,707,708,709,710,711,712,713,714,715,716,717,718,719,720,721,722,723,724,725,726,727,728,729,730,731,732,733,734,735,736,737,738,739,740,741,742,743,744,745,746,747,748,749,750,751,752,753,754,755,756,757,758,759,760,761,762,763,764,765,766,767,768,769,770,771,772,773,774,775,776,777,778,779,780,781,782,783,784,785,786,787,788,789,790,791,792,793,794,795,796,797,798,799,800,801,802,803,804,805,806,807,808,809,810,811,812,813,814,815,816,817,818,819,820,821,822,823,824,825,826,827,828,829,830,831,832,833,834,835,836,837,838,839,840,841,842,843,844,845,846,847,848,849,850,851,852,853,854,855,856,857,858,859,860,861,862,863,864,865,866,867,868,869,870,871,872,873,874,875,876,877,878,879,880,881,882,883,884,885,886,887,888,889,890,891,892,893,894,895,896,897,898,899,900,901,902,903,904,905,906,907,908,909,910,911,912,913,914,915,916,917,918,919,920,921,922,923,924,925,926,927,928,929,930,931,932,933,934,935,936,937,938,939,940,941,942,943,944,945,946,947,948,949,950,951,952,953,954,955,956,957,958,959,960,961,962,963,964,965,966,967,968,969,970,971,972,973,974,975,976]],
['documentation',[9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439,440,441,442,443,444,445,446,447,448,449,450,451,452,453,454,455,456,457,458,459,460,461,462,463,464,465,466,467,468,469,470,471,472,473,474,475,476,477,478,479,480,481,482,483,484,485,486,487,488,489,490,491,492,493,494,495,496,497,498,499,500,501,502,503,504,505,506,507,508,509,510,511,512,513,514,515,516,517,518,519,520,521,522,523,524,525,526,527,528,529,530,531,532,533,534,535,536,537,538,539,540,541,542,543,544,545,546,547,548,549,550,551,552,553,554,555,556,557,558,559,560,561,562,563,564,565,566,567,568,569,570,571,572,573,574,575,576,577,578,579,580,581,582,583,584,585,586,587,588,589,590,591,592,593,594,595,596,597,598,599,600,601,602,603,604,605,606,607,608,609,610,611,612,613,614,615,616,617,618,619,620,621,622,623,624,625,626,627,628,629,630,631,632,633,634,635,636,637,638,639,640,641,642,643,644,645,646,647,648,649,650,651,652,653,654,655,656,657,658,659,660,661,662,663,664,665,666,667,668,669,670,671,672,673,674,675,676,677,678,679,680,681,682,683,684,685,686,687,688,689,690,691,692,693,694,695,696,697,698,699,700,701,702,703,704,705,706,707,708,709,710,711,712,713,714,715,716,717,718,719,720,721,722,723,724,725,726,727,728,729,730,731,732,733,734,735,736,737,738,739,740,741,742,743,744,745,746,747,748,749,750,751,752,753,754,755,756,757,758,759,760,761,762,763,764,765,766,767,768,769,770,771,772,773,774,775,776,777,778,779,780,781,782,783,784,785,786,787,788,789,790,791,792,793,794,795,796,797,798,799,800,801,802,803,804,805,806,807,808,809,810,811,812,813,814,815,816,817,818,819,820,821,822,823,824,825,826,827,828,829,830,831,832,833,834,835,836,837,838,839,840,841,842,843,844,845,846,847,848,849,850,851,852,853,854,855,856,857,858,859,860,861,862,863,864,865,866,867,868,869,870,871,872,873,874,875,876,877,878,879,880,881,882,883,884,885,886,887,888,889,890,891,892,893,894,895,896,897,898,899,900,901,902,903,904,905,906,907,908,909,910,911,912,913,914,915,916,917,918,919,920,921,922,923,924,925,926,927,928,929,930,931,932,933,934,935,936,937,938,939,940,941,942,943,944,945,946,947,948,949,950,951,952,953,954,955,956,957,958,959,960,961,962,963,964,965,966,967,968,969,970,971,972,973,974,975,976]],
['elem',[9,10]],
['típus',[9,10,17,26,33,50,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,92,93,94,98,99,100,102,103,104,105,106,107,108,109,110,111,112,113,114,115,117,119,120,142,146,148,149,150,151,152,153,155,156,167,241,244,269,305,339,343,357,446,449,450,453,454,455,456,457,458,459,460,461,462,463,464,467,469,477,484,494,514,519,521,538,544,546,551,565,567,578,580,581,583,584,586,590,592,597,598,602,603,604,605,606,608,610,613,614,617,619,620,621,623,624,625,627,637,638,641,647,652,666,669,673,675,689,692,694,698,701,705,709,722,723,724,725,726,727,733,735,738,741,743,744,746,749,751,756,762,764,768,770,788,797,802,806,819,825,828,830,841,862,866,871,872,873,874,875,876,879,881,882,883,884,885,886,887,888,889,890,891,892,893,894,895,896,897,899,900,901,908,913,941,947,950,969,971]],
['sequence',[9,10,26,33,34,39,42,45,53,55,58,62,119,123,136,142,155,156,160,163,167,170,174,175,177,179,195,197,199,202,208,214,216,218,221,226,230,232,237,239,241,246,264,272,273,275,276,282,284,289,293,296,299,302,305,334,337,339,347,349,355,357,364,370,375,378,380,382,384,389,392,398,402,406,408,417,420,423,435,438,442,463,464,467,469,477,481,484,490,494,502,514,519,520,521,523,526,534,537,538,546,551,553,565,567,578,581,583,590,592,597,599,627,628,637,641,647,650,651,652,657,666,669,673,675,689,692,694,698,701,705,709,713,726,727,731,733,735,741,744,746,749,751,756,762,768,770,775,788,793,797,802,806,812,819,825,828,830,833,841,844,850,856,862,866,900,901,908,913,947,950,964,966,969]],
['element',[9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439,440,441,442,443,444,445,446,463,464,465,466,467,468,469,470,471,472,473,474,475,476,477,478,479,480,481,482,483,484,485,486,487,488,489,490,491,492,493,494,495,496,497,498,499,500,501,502,503,504,505,506,507,508,509,510,511,512,513,514,515,516,517,518,519,520,521,522,523,524,525,526,527,528,529,530,531,532,533,534,535,536,537,538,539,540,541,542,543,544,545,546,547,548,549,550,551,552,553,554,555,556,557,558,559,560,561,562,563,564,565,566,567,568,569,570,571,572,573,574,575,576,577,578,579,580,581,582,583,584,585,586,587,588,589,590,591,592,593,594,595,596,597,598,599,600,601,627,628,629,630,631,632,633,634,635,636,637,638,639,640,641,642,643,644,645,646,647,648,649,650,651,652,653,654,655,656,657,658,659,660,661,662,663,664,665,666,667,668,669,670,671,672,673,674,675,676,677,678,679,680,681,682,683,684,685,686,687,688,689,690,691,692,693,694,695,696,697,698,699,700,701,702,703,704,705,706,707,708,709,710,711,712,713,714,715,716,717,718,719,720,721,726,727,728,729,730,731,732,733,734,735,736,737,738,739,740,741,742,743,744,745,746,747,748,749,750,751,752,753,754,755,756,757,758,759,760,761,762,763,764,765,766,767,768,769,770,771,772,773,774,775,776,777,778,779,780,781,782,783,784,785,786,787,788,789,790,791,792,793,794,795,796,797,798,799,800,801,802,803,804,805,806,807,808,809,810,811,812,813,814,815,816,817,818,819,820,821,822,823,824,825,826,827,828,829,830,831,832,833,834,835,836,837,838,839,840,841,842,843,844,845,846,847,848,849,850,851,852,853,854,855,856,857,858,859,860,861,862,863,864,865,866,867,868,869,870,900,901,902,903,904,905,906,907,908,909,910,911,912,913,914,915,916,917,918,919,920,921,922,923,924,925,926,927,928,929,930,931,932,933,934,935,936,937,938,939,940,941,942,943,944,945,946,947,948,949,950,951,952,953,954,955,956,957,958,959,960,961,962,963,964,965,966,967,968,969,970,971,972,973,974,975,976]],
['exportcounter',[9,10,18,27]],
['type',[9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,90,92,93,94,98,99,100,102,103,104,105,106,114,115,117,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439,440,441,442,443,444,445,446,447,448,449,450,452,453,454,455,456,457,459,460,461,462,463,464,467,468,469,470,474,477,478,479,480,481,482,484,485,486,487,488,489,490,492,493,494,495,496,497,499,500,501,502,503,505,506,509,510,511,513,514,517,518,519,520,521,522,523,524,525,526,527,528,529,530,531,532,533,534,535,536,537,538,540,541,543,544,546,547,548,549,550,551,552,553,554,555,556,557,558,559,560,561,562,563,564,565,566,567,568,569,570,571,572,573,574,575,576,577,578,579,580,581,582,583,584,585,586,587,588,589,590,591,592,593,594,596,597,598,599,600,601,602,603,604,605,606,607,608,610,613,614,617,619,620,621,622,623,624,625,627,628,629,630,631,632,633,634,635,636,637,638,639,640,641,642,643,644,645,646,647,648,649,650,651,652,653,654,655,656,657,658,659,660,661,662,663,664,665,666,667,668,669,670,671,672,673,674,675,676,677,678,679,680,681,682,683,684,685,686,687,688,689,690,691,692,693,694,695,696,697,698,699,700,701,702,703,704,705,706,707,708,709,710,711,712,713,714,715,716,717,718,719,720,721,722,723,724,725,726,727,728,729,730,731,732,733,734,735,736,737,738,739,740,741,742,743,744,745,746,747,748,749,750,751,752,753,754,755,756,757,758,759,760,761,762,763,764,765,766,767,768,769,770,771,772,773,774,775,776,777,778,779,780,781,782,783,784,785,786,787,788,789,790,791,792,793,794,795,796,797,799,800,801,802,806,807,812,813,814,815,816,817,818,819,820,821,822,823,824,825,827,828,829,830,831,832,833,834,835,836,837,838,839,840,841,842,843,844,845,846,847,848,849,850,851,852,853,854,855,856,857,858,859,860,861,862,863,864,865,866,867,868,869,870,871,872,873,874,875,876,877,878,879,880,881,882,883,884,885,886,887,888,889,890,891,892,893,894,895,896,897,899,900,901,902,903,904,905,906,907,908,909,910,911,912,913,914,915,916,917,918,919,920,921,922,923,924,925,926,927,928,929,930,931,932,933,934,935,936,937,938,939,940,941,942,943,944,945,946,947,948,949,950,951,952,953,954,955,956,957,958,959,960,961,962,963,964,965,966,967,968,969,970,971,972,973,974]],
['nonnegativeinteger',[9,10,17,18,26,30,31,119,152,463,469,471,472,494,500,501,514,515,534,537,627,657,664,726,770,773,793,796,833,838,893,900,901,903,908,912,913,929,950,963]],
['lang',[9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439,440,441,442,443,444,445,446,447,448,449,450,451,452,453,454,455,456,457,458,459,460,461,462,463,464,465,466,467,468,469,470,471,472,473,474,475,476,477,478,479,480,481,482,483,484,485,486,487,488,489,490,491,492,493,494,495,496,497,498,499,500,501,502,503,504,505,506,507,508,509,510,511,512,513,514,515,516,517,518,519,520,521,522,523,524,525,526,527,528,529,530,531,532,533,534,535,536,537,538,539,540,541,542,543,544,545,546,547,548,549,550,551,552,553,554,555,556,557,558,559,560,561,562,563,564,565,566,567,568,569,570,571,572,573,574,575,576,577,578,579,580,581,582,583,584,585,586,587,588,589,590,591,592,593,594,595,596,597,598,599,600,601,602,603,604,605,606,607,608,609,610,611,612,613,614,615,616,617,618,619,620,621,622,623,624,625,626,627,628,629,630,631,632,633,634,635,636,637,638,639,640,641,642,643,644,645,646,647,648,649,650,651,652,653,654,655,656,657,658,659,660,661,662,663,664,665,666,667,668,669,670,671,672,673,674,675,676,677,678,679,680,681,682,683,684,685,686,687,688,689,690,691,692,693,694,695,696,697,698,699,700,701,702,703,704,705,706,707,708,709,710,711,712,713,714,715,716,717,718,719,720,721,722,723,724,725,726,727,728,729,730,731,732,733,734,735,736,737,738,739,740,741,742,743,744,745,746,747,748,749,750,751,752,753,754,755,756,757,758,759,760,761,762,763,764,765,766,767,768,769,770,771,772,773,774,775,776,777,778,779,780,781,782,783,784,785,786,787,788,789,790,791,792,793,794,795,796,797,798,799,800,801,802,803,804,805,806,807,808,809,810,811,812,813,814,815,816,817,818,819,820,821,822,823,824,825,826,827,828,829,830,831,832,833,834,835,836,837,838,839,840,841,842,843,844,845,846,847,848,849,850,851,852,853,854,855,856,857,858,859,860,861,862,863,864,865,866,867,868,869,870,871,872,873,874,875,876,877,878,879,880,881,882,883,884,885,886,887,888,889,890,891,892,893,894,895,896,897,898,899,900,901,902,903,904,905,906,907,908,909,910,911,912,913,914,915,916,917,918,919,920,921,922,923,924,925,926,927,928,929,930,931,932,933,934,935,936,937,938,939,940,941,942,943,944,945,946,947,948,949,950,951,952,953,954,955,956,957,958,959,960,961,962,963,964,965,966,967,968,969,970,971,972,973,974,975,976]],
['exportálandó',[9,10,17,18,26,27]],
['elemek',[9,10,18,26,27,31,33]],
['számozása',[9,10,18]],
['1-től',[9,10,18,463,521,523,627,657,664,726,793,796,833,838]],
['monotonan',[9,10,18]],
['nővekvő',[9,10,18]],
['módon',[9,10,18]],
['elementversion',[9,10,17,27]],
['bizonylat',[9,10,11,12,13,15,17,19,463,494,500,501,627,628,635,636,637,639,657,661,662,698,700,726,770,773,833,836,844,846,880,881,883,892,899,900,901,908,941,942,943]],
['verzió',[9,10,17,33,34,37,463,538,539]],
['száma',[9,10,17,155,170,172,349,351,408,410,438,441,442,445,463,502,507,508,510,551,552,627,713,715,726,744,745,746,747,802,804,806,808,819,820]],
['choice',[9,10,119,120,155,210,269,305,339,357,361,402,426,627,628,647,694,726,738,764,900,941]],
['minoccurs',[9,10,15,16,19,21,22,25,26,27,33,34,35,45,46,48,49,58,59,60,62,65,119,123,124,127,128,129,130,133,134,136,141,142,143,145,155,160,162,167,169,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,199,200,202,203,204,205,206,208,209,221,222,226,227,228,229,232,234,246,247,248,249,252,256,257,258,259,260,261,262,263,264,265,266,276,278,279,281,284,285,287,305,306,307,308,309,310,311,312,313,314,315,316,317,319,320,322,323,324,325,326,327,328,329,330,331,332,333,339,343,344,345,346,370,371,375,376,384,386,402,405,408,409,410,411,412,414,463,469,470,471,472,473,474,475,476,481,483,484,485,486,489,494,496,498,502,506,510,526,527,528,529,530,531,532,533,538,539,540,541,542,543,544,545,546,547,551,553,558,563,564,567,569,571,583,586,588,589,599,600,627,628,629,630,631,637,638,641,642,643,647,648,649,652,655,657,660,675,676,677,679,680,681,683,684,685,686,687,688,705,708,709,712,713,714,715,716,719,726,731,732,735,736,751,754,755,756,757,758,759,760,762,763,770,772,775,776,779,780,781,782,785,786,788,789,790,791,797,800,801,802,803,804,805,806,807,808,809,810,811,812,813,814,815,816,817,818,819,823,830,832,833,834,835,841,843,844,849,850,851,855,856,857,858,860,861,862,863,865,866,867,870,900,901,903,907,913,918,919,920,921,922,923,924,925,926,927,929,930,931,932,933,934,935,936,937,940,950,952,953,954,955,956,957,958,959,960,969,971]],
['documentclass',[9,10,11,27]],
['documentclasstype',[9,10,11,726,881]],
['beküldött',[9,10,11,13,463,494,501]],
['típusa',[9,10,11,13,119,147,155,246,254,447,448,452,463,477,480,481,565,566,567,577,607,622,627,628,637,639,640,726,731,793,812,877,878,880,900,969,970]],
['nyugta',[9,10,11,627,698,700,726,880,881,883,887,888,900,913,921,950,956,957]],
['számla',[9,10,11,119,146,147,148,149,150,151,155,160,161,167,169,174,176,226,229,232,234,241,242,243,245,246,250,253,254,255,256,257,263,264,267,268,269,271,272,275,276,277,284,289,290,293,294,296,297,299,300,305,306,307,310,332,334,335,349,350,351,389,390,391,392,393,394,395,396,398,399,402,403,404,405,420,421,423,424,426,430,435,436,446,627,666,667,726,819,823,881,883,900,913,918,920,950,953,954,959,960]],
['egyszerűsített',[9,10,11,119,147,155,289,305,306,307,332,392,398,402,403,404,426,430,627,666,726,881,883,900,950,958,959,960]],
['document',[9,10,11,12,16,19,155,174,175,176,241,243,245,246,253,254,269,271,276,349,351,370,371,463,494,500,501,620,627,628,632,633,634,635,636,637,639,641,644,647,650,651,652,653,654,657,659,660,661,662,666,668,669,671,675,679,685,686,687,689,690,691,698,699,700,701,703,705,706,707,708,709,711,712,726,731,732,733,770,773,774,788,789,790,791,792,793,795,819,821,822,823,833,834,836,844,846,873,880,881,883,884,892,896,900,901,903,906,908,911,913,939,941,946,950,962,964,965,966,967,968,969,970,971,972,974]],
['submitted',[9,10,11,13,155,349,370,371]],
['receipt',[9,10,11,15,627,698,700,713,726,880,881,883,887,888,900,913,919,921,927,950,955,956,957]],
['invoice',[9,10,11,119,146,147,148,149,150,151,155,160,161,163,165,167,168,169,174,176,179,226,228,229,232,234,241,242,243,244,245,246,247,248,249,250,253,254,255,256,257,263,264,267,268,269,270,271,272,273,274,275,276,277,278,284,289,290,293,294,296,297,299,300,301,305,306,307,310,311,318,330,331,332,334,335,349,350,351,389,390,391,392,393,394,395,396,397,398,399,402,403,404,405,408,420,421,423,424,426,430,435,436,446,452,627,666,667,726,819,823,881,883,900,913,918,920,925,950,952,953,954,958,959,960]],
['simplified',[9,10,11,119,147,155,289,305,306,307,332,392,398,402,403,404,426,430,627,709,711,726,881,883,900,950,958,959,960]],
['documentenvelope',[9,10,12,27]],
['signeddocumentenvelopetype',[9,10,12,726,844]],
['boríték',[9,10,12,26,32,726,844,849,850,855]],
['fejlesztői',[9,10,12,14,463,494,500,501]],
['dokumentációban',[9,10,12,14]],
['meghatározott',[9,10,12,155,246,260,305,323]],
['formátumban',[9,10,12,14,21,463,605,606,608,611,626]],
['envelope',[9,10,12,726,844,847,848,849,850,851,853,854,855]],
['format',[9,10,12,21,119,120,463,605,606,608,626,726,738,900]],
['specified',[9,10,12]],
['developer',[9,10,12,463,567,568,569,570,571]],
['reportclass',[9,10,13,27]],
['reportclasstype',[9,10,13,726,899]],
['pénztárjelentés',[9,10,13,726,899,900,913,941,944]],
['pénzmozgás',[9,10,13,726,883,892,899,900,901,913,916,917,923,926,941,942]],
['voucher',[9,10,13,119,154,726,874]],
['cash',[9,10,13,119,154,155,246,248,463,484,485,487,502,507,508,609,620,726,812,815,874,897,900,901,904,908,909,941,942,945,950,963]],
['report',[9,10,13,463,484,485,487,726,850,852,883,899,900,908,913,941,942,943,944,945,947,948,949,950,975,976]],
['flow',[9,10,13,900,901,941,942,945,950,963]],
['reportenvelope',[9,10,14,27]],
['signedreportenvelopetype',[9,10,14,726,850]],
['riport',[9,10,14,463,484,726,850,852,899,900,913,941,947,948,949,975,976]],
['adatai',[9,10,14,33,34,39,40,41,42,43,62,155,174,176,202,206,210,221,232,241,264,265,266,268,269,270,271,272,276,278,279,305,313,339,341,342,349,370,371,389,402,405,408,417,438,442,463,477,502,503,509,534,538,541,546,547,548,550,567,583,585,599,600,627,641,642,643,646,647,652,654,655,657,658,666,668,689,690,691,698,699,700,705,709,712,713,726,756,760,764,768,769,770,793,794,812,816,819,833,835,840,841,866,900,901,902,908,909,950,952,953,954,955,956,957,958,959,960]],
['előírt',[9,10,14]],
['searchkeytimestamp',[9,10,24,27]],
['generictimestamptype',[9,10,19,24,26,29,33,34,38,97,463,514,517,518,546,548,553,562,563,567,574,599,601,627,628,635,636,657,661,662,726,833,836]],
['vevői',[9,10,23,24,155,179,187,726,844,845,876]],
['alkalmazában',[9,10,23,24]],
['generált',[9,10,23,24,33,93]],
['keresőkulcs',[9,10,23,24]],
['előállításának',[9,10,24]],
['időpontja',[9,10,24,26,29,155,339,345,463,567,574]],
['time',[9,10,19,24,33,34,38,119,146,463,514,515,516,517,518,567,574,627,628,635,636,657,661,662,726,833,836]],
['generation',[9,10,24]],
['search',[9,10,23,24,463,565,566]],
['generated',[9,10,23,24,33,93]],
['customer',[9,10,23,24,155,179,182,187,197,198,202,203,204,205,206,210,264,265,627,641,643,726,756,757,758,759,760,764,788,806,810,844,845,873,876,892,900,947,976]],
['application',[9,10,23,24,726,876]],
['searchkey',[9,10,23,27]],
['base64binary',[9,10,20,21,22,23,463,606,608,627,666,667,726,844,845,846,848,850,851,852,854,872,887,888,890,900,947,948]],
['értéke',[9,10,23,33,62,64,66,155,155,156,159,160,161,170,171,246,246,248,251,289,290,291,293,294,295,299,300,301,305,312,315,318,323,325,357,358,359,408,412,442,443,463,464,466,494,500,501,627,627,669,671,672,694,695,696,713,717,726,727,730,797,800,801,900,966,968]],
['value',[9,10,23,33,62,64,66,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,146,147,148,149,150,151,152,153,154,155,156,159,160,161,170,171,246,248,261,284,289,305,306,307,312,315,318,323,325,357,358,359,408,412,442,443,447,448,449,450,451,452,453,454,455,456,457,458,459,460,461,462,463,464,465,466,469,471,472,473,475,476,481,483,490,491,494,498,500,501,502,504,507,508,512,514,515,516,534,536,538,539,540,542,543,544,545,592,595,602,603,604,607,609,610,611,612,613,614,615,616,617,618,619,620,621,622,623,624,625,626,627,669,675,679,694,695,696,713,717,722,723,724,725,726,727,730,751,753,754,755,797,800,802,803,804,805,806,808,809,810,811,819,823,825,826,844,847,850,853,871,872,873,874,875,876,877,878,879,880,881,882,883,884,885,886,889,890,891,892,893,894,895,896,897,898,899,900,966,968]],
['suppliername',[9,10,25,27,155,268,408,415,627,713,720]],
['simpletext512notblanktype',[9,10,25,26,28,33,50,113,155,156,159,202,205,232,235,305,316,408,415,463,567,570,583,587,627,675,680,713,720,726,727,730,756,759]],
['eladó',[9,10,25,155,179,194,199,232,234,264,268,361,362,375,376,406,407,408,410,412,413,414,415,461,627,713,715,717,718,719,720]],
['szállító',[9,10,25,155,408,412,413,414,415,627,713,717,718,719,720]],
['neve',[9,10,25,26,28,33,62,63,119,123,135,136,137,155,202,205,232,235,349,353,408,415,463,521,524,567,570,576,583,587,588,627,713,720,726,756,759,775,787,806,811,841,842,843,856,857,866,869,870]],
['seller',[9,10,25,155,408,412,413,414,415,627,713,717,718,719,720]],
['supplier',[9,10,25,155,179,188,194,199,232,234,264,268,361,362,406,407,408,412,413,414,415,461,627,713,717,718,719,720]],
['documentnumber',[9,10,16,27,627,628,634,657,659,668,690,691,699,700,726,788,792,793,795,819,821,949]],
['documentnumbertype',[9,10,16,627,628,634,657,659,726,788,792,793,795,819,821,883,900,901,906,908,911,913,939,950,962,969,974]],
['dokumentum',[9,10,16,155,349,370,371,463,620,627,628,632,633,634,637,641,644,647,651,652,653,657,659,666,668,669,671,675,679,687,689,690,691,698,699,701,703,705,706,707,709,711,712,726,731,733,788,789,790,792,793,795,819,821,822,883,884,900,941,946,969,970,971]],
['vagy',[9,10,16,119,120,146,155,174,176,208,209,210,212,241,243,245,246,253,260,269,271,272,276,279,284,288,289,292,305,316,320,349,351,357,364,366,367,370,374,384,385,398,399,400,401,408,410,411,416,420,421,422,423,424,425,426,435,436,437,446,447,451,463,477,480,514,515,567,577,622,627,628,633,634,647,652,655,657,659,675,680,681,694,701,703,704,713,715,716,721,722,726,738,762,763,788,792,793,795,819,821,823,866,868,874,877,883,886,900,901,904]],
['módosító',[9,10,16,155,174,175,176,241,243,245,246,253,254,269,270,271,272,273,276,627,628,633,634,637,639,647,650,652,657,659,726,788,792,793,795,819,821,823,883,884]],
['okirat',[9,10,16,155,174,175,176,241,243,245,246,253,254,269,270,271,272,273,276,349,351,627,628,633,634,637,639,647,650,657,659,726,788,792,793,795,819,821,823,883,884]],
['sorszáma',[9,10,16,155,163,165,174,175,241,245,272,273,275,296,297,305,321,349,351,463,534,537,627,628,634,647,650,651,657,659,675,682,726,735,737,788,792,793,795,819,821,900,908,912,950,951]],
['sequential',[9,10,16,155,241,245,296,297,305,321,349,351,627,628,634,657,659,675,682,726,735,737,788,792,793,795,819,821,883]],
['number',[9,10,16,22,33,34,35,37,62,65,67,87,89,101,115,116,119,121,123,127,129,130,136,137,142,144,152,155,163,165,170,172,174,175,177,178,179,189,202,204,208,209,210,211,212,213,221,225,232,234,236,237,238,239,240,241,245,272,273,275,282,283,296,297,305,321,337,338,339,344,346,347,348,349,351,354,378,379,408,409,410,411,414,416,442,445,449,454,460,463,502,504,507,508,510,512,521,523,534,537,551,552,553,564,567,571,579,583,585,592,595,613,619,627,628,634,647,650,651,657,659,664,675,682,713,714,715,716,719,721,723,726,735,737,739,744,745,746,747,756,758,762,763,764,765,766,767,775,779,781,782,788,792,793,795,796,802,803,804,805,806,808,810,819,820,821,824,833,838,856,857,862,864,866,867,868,871,879,883,893,900,901,906,908,911,912,913,939,950,951,962,969,974]],
['original',[9,10,16,155,241,245,246,254,272,273,274,275,296,297,627,628,634,637,639,647,650,651,657,659,726,788,792,793,795,819,821,883,884]],
['modification',[9,10,16,155,174,175,176,241,243,245,246,253,254,269,270,271,272,274,275,276,279,296,297,298,305,319,446,452,627,628,633,634,647,649,651,652,655,657,659,726,788,792,793,795,819,821,823,883,884,894,900,913,920,921,922,931,935,950,954,957,960]],
['documentgrossamounthuf',[9,10,15,27,627,705,707,712]],
['monetarytype',[9,10,15,119,153,155,226,229,289,290,291,293,294,295,299,300,301,305,314,334,335,336,364,365,369,370,372,375,376,389,390,391,392,393,394,395,396,398,399,400,420,421,422,423,424,425,435,436,437,627,669,671,672,701,703,704,705,706,707,726,751,753,754,755,770,771,797,798,830,831,895]],
['bruttó',[9,10,15,155,284,285,289,290,291,293,294,295,305,332,384,386,389,390,391,398,399,400,402,405,420,421,422,627,669,671,672,701,703,704,705,706,707,709,712,726,751,753]],
['végösszege',[9,10,15]],
['forintban',[9,10,15,155,289,291,293,295,299,301,305,314,333,334,336,364,365,375,376,389,391,392,394,396,398,400,420,422,423,425,435,437,627,657,660,669,672,675,688,701,704,705,707,708,726,797,800,801,812,814,815,818,825,827,900,901,903,907]],
['gross',[9,10,15,155,284,285,289,290,291,293,294,295,305,332,384,386,389,390,391,398,399,400,402,405,420,421,422,627,669,671,672,701,703,704,705,706,707,709,712,726,751,753]],
['total',[9,10,15,155,226,229,726,751,753,754,755]],
['amount',[9,10,15,155,226,229,289,290,291,293,294,295,299,300,301,334,335,336,364,365,375,376,389,390,391,392,393,394,395,396,398,399,400,420,421,422,423,424,425,435,436,437,627,657,660,669,671,672,701,703,704,705,706,707,708,726,769,770,771,797,798,800,812,814,816,817,818,825,827,830,831,900,901,903,907,913,914,915,916,917,918,919,920,921,922,925,927,929,930,931,932,933,934,935,936,937,940,955,956,957]],
['issueenddatetime',[9,10,19,27,627,628,635,657,661,691,700]],
['időbélyeg',[9,10,19,33,97,119,150,627,628,635,636,657,661,662,726,833,836]],
['zárásának',[9,10,19,627,628,635,657,661]],
['pontos',[9,10,19,627,628,635,636,657,661,662,726,833,836]],
['ideje',[9,10,19,33,34,38,463,514,515,627,628,635,636,657,661,662,726,833,836]],
['órája',[9,10,19,463,484,489,627,628,635,636,657,661,662,726,833,836]],
['szerint',[9,10,19,33,34,37,90,119,123,126,133,136,139,141,155,246,250,305,330,349,370,371,392,397,461,463,490,491,492,493,514,518,627,628,635,636,657,661,662,726,775,778,785,797,799,833,836,856,859,861]],
['timestamp',[9,10,19,33,34,38,40,43,97,119,150,627,628,635,636,657,661,662,726,744,833,836]],
['exact',[9,10,19,627,628,635,636,657,661,662,726,833,836]],
['closing',[9,10,19,463,616,627,628,635,657,661,726,874,900,950,951]],
['according',[9,10,19,155,246,263,276,280,305,327,329,330,349,361,364,368,370,371,380,381,384,454,463,484,487,488,490,491,590,591,627,628,635,636,652,656,657,661,662,723,726,833,836]],
['clock',[9,10,19,463,484,489,514,516,627,628,635,636,657,661,662,726,833,836]],
['privatekey',[9,10,20,27]],
['privát',[9,10,20]],
['kulcs',[9,10,20,463,599,600,726,887,888,900,947,948]],
['qrcodesignature',[9,10,21,27]],
['aláírása',[9,10,21]],
['base64',[9,10,21,155,446,463,608,627,666,667,726,844,845,846,848,850,851,852,854]],
['code',[9,10,21,22,33,45,46,55,56,58,60,88,90,91,92,94,102,105,106,114,117,118,119,123,126,131,133,136,139,140,141,142,143,145,155,197,198,214,215,218,219,246,250,355,356,357,358,359,360,364,366,406,407,417,418,454,463,481,482,494,500,501,502,511,553,554,567,569,572,590,591,592,593,609,624,627,657,663,669,670,675,677,692,693,694,695,696,697,701,702,709,710,723,726,751,752,775,778,783,785,797,799,806,809,825,826,827,833,837,856,859,860,861,862,863,865,875,876,886,896]],
['signature',[9,10,21,33,62,66,726,844,848,850,854]],
['qrcodesigncertserial',[9,10,22,27]],
['aláírásához',[9,10,22]],
['használt',[9,10,22,155,453,463,469,473,474,475,502,504,511,546,547,550,627,641,642,646,726,833,835,840,887,888]],
['tanúsítvány',[9,10,22,463,605,606,607,608,618,620]],
['sorozatszáma',[9,10,22]],
['serial',[9,10,22,155,339,346,627,657,664,726,793,796,833,838,900,908,912,950,951]],
['certificate',[9,10,22,463,605,606,607,608,618,620]],
['used',[9,10,22,155,221,222,246,251,454,463,469,473,474,502,504,511,546,547,550,627,641,642,646,723,726,833,835,840,887,888,900,901,905,908,910,913,938,950,961,969,973]],
['sign',[9,10,22,463,490,492,493,592,594,595,596,615,627,657,660,705,708]],
['exportenvelopetype',[9,26,32]],
['exporttimestamp',[9,26,29,32]],
['exportálás',[9,26,29]],
['numberofelements',[9,26,31,32]],
['kiexportált',[9,26,31]],
['darabszáma',[9,26,31,726,770,773]],
['exportversion',[9,26,30,32]],
['verziószáma',[9,26,30,33,34,35,37,463,502,504,512]],
['exportname',[9,26,28,32]],
['állomány',[9,26,28,463,534,536,537,726,788,791,819,823,844,847,850,853]],
['exportelements',[9,26,27,32]],
['maxoccurs',[9,26,27,33,53,54,155,177,178,195,196,197,198,214,215,216,217,230,231,237,238,239,240,246,247,269,270,276,281,282,283,302,303,305,308,322,337,338,347,348,355,356,370,373,378,379,380,381,382,383,392,397,402,404,406,407,463,484,485,519,551,565,566,581,582,590,597,599,600,627,637,638,673,674,675,676,692,693,709,711,726,731,732,733,734,735,736,749,768,812,816,817,828,829,833,834,900,964]],
['exportenvelope',[9,32]],
['complexcontent',[9,32,33,52,68,69,155,208,446,726,744,746,762,841,866,900,975,976]],
['extension',[9,32,33,50,52,68,69,155,208,446,726,741,743,744,746,762,841,866,891,900,975,976]],
['envelopeversion',[12,14,726,844,849,850,855]],
['envelopedata',[12,14,726,844,846,847,848,850,852,853,854]],
['customerenvelopedata',[12,14,726,844,845,847,848,850,851,853,854]],
['envelopehash',[12,14,726,844,847,850,853]],
['envelopesignature',[12,14,726,844,848,850,854]],
['project',[33,119,155,179,192,378,379,463,627,726]],
['séma',[33,119,155,463,502,512,627,726,900]],
['author',[33,119,155,463,627,726]],
['informatikai',[33,119,155,463,627,726]],
['intézet',[33,119,155,463,627,726]],
['--atomi',[33]],
['típusok',[33]],
['atomic',[33,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,726,872]],
['types--',[33]],
['simpletype',[33,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,146,147,148,149,150,151,152,153,154,155,447,448,449,450,451,452,453,454,455,456,457,458,459,460,461,462,463,464,465,466,469,471,472,473,475,476,481,483,490,491,494,498,502,504,507,508,512,514,515,516,538,539,540,542,543,544,545,592,595,602,603,604,605,606,607,608,609,610,611,612,613,614,615,616,617,618,619,620,621,622,623,624,625,626,627,722,723,724,725,726,797,798,802,803,804,805,806,808,809,810,811,825,826,871,872,873,874,875,876,877,878,879,880,881,882,883,884,885,886,887,888,889,890,891,892,893,894,895,896,897,898,899]],
['atomicstringtype100',[33,70,107]],
['atomi',[33,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,726,872]],
['string',[33,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,99,107,108,109,110,111,112,113,114,463,464,465,466,469,473,475,481,483,494,498,502,504,507,508,512,514,516,538,539,540,542,543,544,545,592,595,602,603,604,607,609,610,611,612,614,616,618,619,620,621,622,624,626,726,825,826,871,875,876,879,880,881,883,886,891,892,896,898,899]],
['hosszra',[33,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86]],
['length',[33,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,90,91,92,116,118,155,342,442,444,463,621]],
['restriction',[33,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,146,147,148,149,150,151,152,153,154,155,447,448,449,450,451,452,453,454,455,456,457,458,459,460,461,462,463,464,465,466,469,471,472,473,475,476,481,483,490,491,494,498,502,504,507,508,512,514,515,516,538,539,540,542,543,544,545,592,595,602,603,604,605,606,607,608,609,610,611,612,613,614,615,616,617,618,619,620,621,622,623,624,625,626,627,722,723,724,725,726,797,798,802,803,804,805,806,808,809,810,811,825,826,871,872,873,874,875,876,877,878,879,880,881,882,883,884,885,886,887,888,889,890,891,892,893,894,895,896,897,898,899]],
['minlength',[33,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,89,93,100,101,102,114,155,448,454,455,463,624,627,723,724,726,802,803,804,871,872,876,878,879,886,891,898]],
['maxlength',[33,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,89,93,100,101,102,114,155,448,454,455,463,464,465,466,469,473,475,481,483,494,498,502,504,507,508,512,514,516,538,539,540,542,543,544,545,592,595,602,603,604,607,609,610,611,612,614,616,618,619,620,622,624,626,627,723,724,726,802,803,804,805,806,808,809,810,811,825,826,871,872,875,876,878,879,880,881,883,886,890,891,892,896,898,899]],
['atomicstringtype1024',[33,71,108,900,966,968]],
['atomicstringtype128',[33,72,106]],
['atomicstringtype15',[33,34,35,37,73,89,100,102,109,119,146,147,154,155,447,449,451,452,453,458,462,463,613,625,627,722,726,844,849,850,855,873,874,877,894,897]],
['atomicstringtype16',[33,74]],
['atomicstringtype2',[33,75,90,91,118]],
['atomicstringtype200',[33,76,110]],
['atomicstringtype2048',[33,77]],
['atomicstringtype255',[33,78,111,155,448,726,878]],
['atomicstringtype256',[33,79]],
['atomicstringtype32',[33,80,93,101,155,455,627,724]],
['atomicstringtype4',[33,81,92]],
['atomicstringtype4000',[33,82]],
['atomicstringtype50',[33,83,87,112,463,617]],
['atomicstringtype512',[33,84,113]],
['atomicstringtype64',[33,85,105]],
['atomicstringtype8',[33,86,88,94,116,117,155,454,456,457,461,463,623,627,723,726,884]],
['genericdatetype',[33,95]],
['Általános',[]],
['dátum',[33,95,119,148,155,179,193,382,383,726,882]],
['generic',[33,52,95,96,97,98]],
['date',[33,95,119,148,155,163,166,167,168,221,223,241,243,246,252,255,349,350,382,383,463,546,548,599,601,627,628,633,726,770,774,882]],
['pattern',[33,87,89,90,91,92,93,95,97,100,101,102,105,106,107,108,109,110,111,112,113,114,115,116,118,119,148,150,155,448,449,455,463,469,475,502,504,512,514,516,611,616,619,621,624,627,724,726,825,826,871,872,875,876,878,879,882,883,886,891,896,898]],
['genericdecimaltype',[33,96,119,153,155,459,460,627,725,726,895]],
['lebegőpontos',[33,96]],
['érték',[33,96,155,284,289,305,306,307,459,463,615,627,669,675,679,725]],
['float',[33,96]],
['point',[33,96,155,221,305,313,463,592,594,596,615]],
['decimal',[33,96,119,153,155,450,459,460,463,490,492,493,592,594,596,615,627,725,726,889,895]],
['datetime',[33,97,119,150]],
['genericunsignedintegertype',[33,98]],
['egész',[33,98,463,469,471,476,592,595,627,657,660,705,708,726,797,800,900,901,903]],
['szám',[33,98,119,123,129,136,137,142,144,155,179,184,187,188,208,209,210,212,216,217,239,240,339,346,408,411,416,449,454,460,463,553,564,627,713,716,721,723,726,762,763,764,766,775,781,819,824,856,857,862,864,866,867,871,879]],
['unsigned',[33,98]],
['integer',[33,98,115,463,469,471,476,490,491]],
['mininclusive',[33,98,103,104,119,148,149,150,151,152,155,460,463,469,476,726,882,885,893]],
['sha256type',[33,105,463,567,572]],
['sha256',[33,105,463,567,572]],
['megadására',[33,87,105,106,155,460]],
['szolgáló',[33,87,105,106,155,156,241,244,269,454,460,627,628,632,637,638,723,726,727,735]],
['field',[33,105,106,119,153,155,156,157,158,167,246,255,305,357,448,453,455,459,461,627,675,694,724,725,726,727,728,729,878,895]],
['holding',[33,105,106]],
['0-9a-f',[33,105,106,155,449,726,896]],
['sha512type',[33,106]],
['sha512',[33,106]],
['simpletext100notblanktype',[33,55,56,58,60,107,155,177,178,195,196,197,198,214,215,216,217,237,238,239,240,282,283,337,338,347,348,378,379,382,383,406,407,627,628,629,726,841,842,843,866,869,870,900,969,970]],
['legfeljebb',[33,107,108,109,110,111,112,113,155,460,463,490,492,493]],
['karaktert',[33,107,108,109,110,111,112,113]],
['tartalmazó',[33,107,108,109,110,111,112,113,155,167,305,357,461,463,565,566,627,675,694]],
['szöveg',[33,55,57,107,108,109,110,111,112,113]],
['maximum',[33,107,108,109,110,111,112,113,119,153,155,459,460,463,490,492,493,627,725,726,895]],
['characters',[33,107,108,109,110,111,112,113,463,592,593,726,751,752,797,799,900,950,951]],
['simpletext1024notblanktype',[33,45,48,55,57,58,59,108,463,553,559,900,969,971]],
['simpletext15notblanktype',[33,109,463,477,479,553,554,556,564,567,575]],
['simpletext200notblanktype',[33,110,155,218,220,463,567,568,583,588]],
['simpletext255notblanktype',[33,111,119,123,125,135,136,137,138,155,156,157,226,227,339,344,346,349,353,357,358,463,553,555,558,627,694,695,726,727,728,775,777,787,856,857,858,900,966,967]],
['simpletext50notblanktype',[33,45,46,50,51,112,119,123,124,127,128,129,130,132,133,134,136,141,155,163,165,210,213,218,219,241,245,272,275,305,331,339,343,349,351,408,410,417,418,463,553,557,567,571,576,627,647,651,675,686,713,715,726,764,767,775,776,779,780,781,782,784,785,786,802,803,804,805,806,808,809,810,811,856,861]],
['--Üzleti',[]],
['katalógus',[33]],
['business',[33,88,155,454,627,723,900,947,976]],
['catalog',[33]],
['elements--',[33]],
['bankaccountnumbertype',[33,87,155,202,204,232,234,408,414,463,551,552,627,713,719,726,756,758]],
['bankszámla',[33,87,155,232,234,463,502,510,551,552]],
['bank',[33,87,119,154,155,202,204,232,234,408,414,463,502,510,551,552,627,713,719,726,756,758]],
['account',[33,87,155,179,186,202,204,232,234,237,238,246,260,408,414,463,502,510,551,552,627,713,719,726,756,758]],
['0-9a-za-z',[33,87]],
['communityvatnumbertype',[33,89,155,210,211,408,409,627,713,714,726,764,765]],
['közösségi',[33,89,155,210,211,408,409,627,713,714,726,764,765]],
['adószám',[33,89,116,119,142,155,208,210,211,212,408,409,416,463,583,585,620,627,713,714,721,726,762,764,765,766,862]],
['community',[33,89,155,210,211,408,409,627,713,714,726,764,765]],
['registration',[33,89,101,155,221,225,463,619,620,726,802,805]],
['0-9a-z',[33,89]],
['countrycodetype',[33,90,119,123,126,136,139,463,567,569,726,775,778,856,859]],
['országkód',[33,90,119,123,126,136,139,726,775,778,856,859]],
['alpha-2',[33,90,119,123,126,133,136,139,141,726,775,778,785,856,859,861]],
['szabvány',[33,90,92,119,123,126,133,136,139,141,155,246,250,463,490,491,492,493,726,775,778,785,856,859,861]],
['country',[33,90,119,123,126,133,136,139,141,463,567,569,726,775,778,785,856,859,861]],
['countycodetype',[33,91,119,142,143,726,862,863]],
['megyekód',[33,91,119,142,143,726,862,863]],
['county',[33,91,119,142,143,726,862,863]],
['currencytype',[33,92,155,246,250,726,797,799]],
['pénznem',[33,92,155,246,251]],
['szerinti',[33,92,155,170,171,202,207,246,263,276,280,305,327,361,384,426,427,442,443,447,453,454,463,590,591,611,627,652,656,723,726,749,750,751,756,761,770,772,877]],
['hosszú',[33,92]],
['currency',[33,92,155,167,169,226,228,229,246,250,251,289,290,293,294,299,300,301,305,332,334,335,389,390,392,393,395,398,399,420,421,423,424,435,436,627,669,671,675,687,701,703,705,706,726,797,798,799,800,801,812,816]],
['three',[33,92]],
['digit',[33,92,119,142,145,726,862,865,879,886]],
['platenumbertype',[33,101,155,221,225]],
['kereskedelmi',[33,101,155,221,225]],
['gépjármű',[33,101]],
['forgalmi',[33,101,155,221,225,463,592,593,627,669,670,701,702,726,749,750,751,752,753,754,755,768,769,770,772,875,883,899,900,941,945,950]],
['rendszáma',[33,101,155,221,225]],
['csak',[33,101,155,167,169,221,225,463,484,486,494,496,502,506]],
['betűk',[33,101,155,221,225]],
['számok',[33,101,155,216,221,225,239]],
['commercial',[33,101,155,458,726,749,750,751]],
['motor',[33,101]],
['vehicle',[33,101,155,221,225,324,339,341,438,726,802,805]],
['letters',[33,101,155,221,225,726,802,805]],
['numbers',[33,101,155,177,179,180,186,187,188,190,191,192,221,225,230,231,237,239,282,337,347,378,726,802,805]],
['only',[33,101,155,167,169,221,225,296,305,319,463,484,486,494,496,502,506,726,802,805]],
['a-z0-9ÖŐÜŰ',[]],
['postalcodetype',[33,102,119,123,131,136,140,726,775,783,856,860]],
['irányítószám',[33,102,119,123,131,136,140,726,775,783,856,860]],
['a-z0-9',[33,102,114,155,448,455,627,724,726,878,898]],
['a-z0-9\s\-',[33,102]],
['swiftcodetype',[33,114]],
['swift',[33,114]],
['kódot',[33,114]],
['leíró',[33,50,114,155,446,463,481,483,726,802,806]],
['a-z2-9',[33,114]],
['a-np-z0-9',[33,114]],
['taxidentificationnumbertype',[33,115]],
['adóazonosító',[33,115,155,210,213,726,764,767]],
['identification',[33,115,119,142,144,155,156,158,208,209,210,212,213,408,411,416,448,627,713,716,721,726,727,729,762,763,764,766,767,806,810,819,824,862,864,866,867,878]],
['totaldigits',[33,115,119,152,153,155,450,459,460,463,469,472,490,491,514,515,615,627,725,726,889,893,895]],
['taxpayeridtype',[33,62,65,67,116,119,142,144,463,583,589,726,819,824,862,864]],
['nyolc',[33,116]],
['jegyű',[33,116,726,879,886]],
['törzsszám',[33,116]],
['része',[33,116]],
['8-digit',[33,116]],
['core',[33,116,119,142,144,627,666,668,689,690,691,698,699,700,726,819,824,862,864,888]],
['section',[33,116,155,170,171,221,222,241,243,245,246,248,255,272,275,305,313,314,323,324,339,349,370,371,426,427,428,431,432,434,442,443,461,627,647,651]],
['vatcodetype',[33,118,119,142,145,726,862,865]],
['--közös',[33]],
['businessresultcodetype',[33,88]],
['Üzleti',[]],
['eredmény',[33,45,47,58,61,88,117]],
['result',[33,42,44,45,47,52,58,61,68,88,117,463,565,566,618,746]],
['enumeration',[33,88,94,99,117,119,146,147,154,155,447,451,452,453,454,456,457,458,461,462,463,602,603,604,607,609,610,612,613,614,617,618,620,622,623,625,627,722,723,726,873,874,877,880,881,884,892,894,897,899]],
['error',[33,45,46,58,60,68,88,94,117,463,494,498,604,609,618,726,873]],
['hiba',[33,88,94,117,463,609,618,726,873]],
['warn',[33,88]],
['figyelmeztetés',[33,88]],
['info',[33,88,463,484,485,487,534,620]],
['tájékoztatás',[33,88,463,616,620]],
['information',[33,88,155,241,244,269,463,494,500,501,616,627,628,630,631,632,657,658,726,788,793,794,802,806,900,947,949]],
['entityidtype',[33,34,36,93]],
['azonosító',[33,93,155,179,185,230,231,349,351,448,449,463,553,556,557,726,878,898]],
['a-za-z0-9',[33,93,100]],
['functioncodetype',[33,45,47,94]],
['funkciókód',[33,94]],
['function',[33,94]],
['sikeres',[33,94]],
['művelet',[33,94,726,819,822,884]],
['successful',[33,94]],
['operation',[33,52,68,69,94,119,151,155,296,297,463,477,480,546,549,567,577,620,622,627,641,645,657,665,726,819,822,833,839,884]],
['localizationtype',[33,99]],
['lokalizációt',[33,99]],
['jelölő',[33,99]],
['localization',[33,99]],
['magyar',[33,99,119,155,463,469,475]],
['hungarian',[33,99,155,305,314,364,365,375,376,454,627,723]],
['angol',[33,99]],
['english',[33,99]],
['német',[33,99]],
['german',[33,99]],
['logintype',[33,62,63,100]],
['felhasználónév',[33,100]],
['login',[33,41,62,63,100,463,469,474,475]],
['requestpagetype',[33,103]],
['lapozó',[33,103,104]],
['paraméter',[33,103,104]],
['kérések',[33,103]],
['számára',[33,103,104,155,232,234]],
['page',[33,103,104]],
['parameter',[33,103,104]],
['requests',[33,103]],
['responsepagetype',[33,104]],
['válaszok',[33,104]],
['responses',[33,104]],
['technicalresultcodetype',[33,58,61,117]],
['technikai',[33,58,62,63,64,65,67,117,463,609,616,620,726,873]],
['technical',[33,58,62,63,64,65,67,117,463,464,467,468,469,470,484,488,502,506,538,609,616,620,726,873]],
['critical',[33,117]],
['kritikus',[33,117]],
['basicheadertype',[33,34,39,40,42,43,726,744]],
['kérés',[33,34,36,37,38,39,40,41,62,66,463,605,608,726,744]],
['tranzakcionális',[33,34,39,40,42,43]],
['transactional',[33,34,39,40,42,43]],
['request',[33,34,36,37,38,39,40,41,62,66,463,605,608,726,744]],
['requestid',[33,34,36,40,43,744]],
['válasz',[33,34,36,37,38,42,43,69,463,583,726,746]],
['azonosítója',[33,34,36,155,156,158,463,464,465,469,473,477,478,526,527,528,529,530,531,532,533,567,573,621,627,628,629,726,727,729]],
['minden',[33,34,36,52]],
['üzenetváltásnál',[33,34,36]],
['adószámonként',[33,34,36]],
['egyedi',[33,34,36,155,156,158,272,273,448,463,469,473,627,628,629,647,650,726,727,729,878]],
['identifier',[33,34,36,155,449,463,469,473,526,529,531,532,533,553,556,557,627,628,629,726,802,803,898]],
['response',[33,34,36,37,38,42,43,58,68,69,463,583,726,746]],
['unique',[33,34,36,155,156,158,272,273,448,463,469,473,627,628,629,647,650,726,727,729,878]],
['taxnumber',[33,34,36,41,62,67,547,550,642,646,726,835,840,866,868]],
['every',[33,34,36,52,68,69]],
['exchange',[33,34,36,119,154,155,163,164,167,169,241,242,246,251,302,304,450,627,628,726,797,801,889]],
['transaction',[33,34,36,726,892,900,913,937]],
['keletkezésének',[33,34,38]],
['requestversion',[33,34,37,40,43,744]],
['hogy',[33,34,37,155,272,274,370,374,463,534,536]],
['hívó',[33,34,37]],
['melyik',[33,34,37]],
['interfész',[33,34,37,155,305,330,726,844,849,850,855]],
['küld',[33,34,37,726,881,899]],
['adatot',[33,34,37,463,484,486,489]],
['várja',[33,34,37]],
['választ',[33,34,37]],
['indicating',[33,34,37,155,370,374]],
['which',[33,34,37,155,208,210,212,272,274,275,296,297,463,521,523,524,627,647,651]],
['datastructure',[33,34,37]],
['client',[33,34,37]],
['sends',[33,34,37]],
['expected',[33,34,37]],
['headerversion',[33,34,35,40,43,744]],
['header',[33,34,35,39,40,42,43,52,68,155,264,627,641,746,900,901,905,908,910,913,938,950,961,969,973]],
['basicrequesttype',[33,39]],
['alap',[33,39,42,44,45,726,844,850]],
['adatok',[33,39,42,44,45,155,160,162,163,179,226,246,249,264,267,276,277,280,281,284,285,286,287,289,293,299,305,306,307,309,310,311,317,322,334,361,363,364,370,373,375,384,386,387,388,420,423,435,463,627,628,632,637,641,644,652,653,656,666,667,669,675,679,726,744,746,788,802,806,844,845,846,848,850,851,852,854,900,947,948,949,964,969,972]],
['basic',[33,39,42,44,45,726,744,746]],
['user',[33,39,41,62,63,64,65,67,726,873]],
['userheadertype',[33,39,41,62]],
['authentikációs',[33,39,41,62,463,620]],
['authentication',[33,39,41,62,463,607]],
['basicresponsetype',[33,42,52,726,746]],
['basicresulttype',[33,42,44,45,69]],
['válaszeredmény',[33,42,44,45]],
['funccode',[33,44,45,47,69]],
['feldolgozási',[33,45,46,47,48,58,59]],
['processing',[33,45,46,47,48,58,59,155,179,246,249,305,311]],
['errorcode',[33,44,45,46,69]],
['hibakód',[33,45,46,58,60]],
['message',[33,44,45,48,58,59,69,463,609,616]],
['üzenet',[33,45,48,58,59,463,502,513,609,616]],
['notifications',[33,44,45,49,53,69]],
['notificationstype',[33,45,49,53]],
['egyéb',[33,45,49,53,119,154,155,179,246,247,249,305,311,332,349,351,447,451,454,458,463,469,475,609,622,627,689,691,722,723,726,731,732,733,734,735,736,788,789,790,812,817,825,826,833,834,873,874,877,880,881,883,894,897,899,900,913,923,926,941,946,947,949,964,965,966,967,968,969,970,971]],
['értesítések',[33,45,49,53]],
['miscellaneous',[33,45,49,53]],
['cryptotype',[33,50,51,62,64,66,463,534,536,726,819,823,844,847,850,853]],
['kriptográfiai',[33,50]],
['metódust',[33,50]],
['denoting',[33,50]],
['cryptographic',[33,50]],
['method',[33,50,119,154,155,246,259,463,477,480,514,516,521,522,567,577,726,819,822,830,832,897]],
['simplecontent',[33,50]],
['attribute',[33,50,51]],
['required',[33,50,51,64,66,536,726,746,748,823,847,853]],
['generalerrorheaderresponsetype',[33,52,68]],
['hibatípus',[33,52]],
['rest',[33,52,68,69]],
['operációra',[33,52,68,69]],
['fault',[33,52]],
['notification',[33,49,53,54,55,56,57]],
['notificationtype',[33,53,54,55]],
['unbounded',[33,49,53,54,155,177,178,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,214,215,216,217,230,231,237,238,239,240,244,246,247,267,269,270,278,280,281,282,283,302,303,305,308,322,326,329,337,338,347,348,355,356,370,373,378,379,380,381,382,383,392,397,402,403,404,406,407]],
['Értesítés',[]],
['notificationcode',[33,54,55,56]],
['notificationtext',[33,54,55,57]],
['text',[33,55,57,155,218,220]],
['technicalvalidationresulttype',[33,58]],
['validációs',[33,58,60,61]],
['választípus',[33,58]],
['validation',[33,58,60,61,463,546,548,599,601]],
['validationresultcode',[33,58,61]],
['validationerrorcode',[33,58,60]],
['felhasználó',[33,62,63,64,65,67]],
['passwordhash',[33,41,62,64]],
['jelszavának',[33,62,64]],
['hash',[33,62,64,66,463,534,536,726,819,823,844,847,850,853]],
['password',[33,62,64]],
['rendszerben',[33,62,67,119,148,149,150,151]],
['regisztrált',[33,62,67]],
['adózó',[33,62,67,463,546,547,550,578,579,583,587,588,589,627,641,642,646,726,797,801,833,835,840,866,868,869,870]],
['adószáma',[33,62,65,67,155,208,209,232,236,349,354,408,411,463,567,571,627,713,716,726,762,763,866,868]],
['nevében',[33,62,65,67]],
['tevékenykedik',[33,62,65,67]],
['taxpayer',[33,62,65,67,119,142,145,463,509,546,548,550,565,578,579,580,581,582,583,586,587,588,589,620,623,627,641,646,653,726,833,840,862,865,905,910,938,961,973]],
['whose',[33,62,65,67]],
['operates',[33,62,65,67]],
['predecessortaxnumber',[33,41,62,65]],
['jogelőd',[33,62,65]],
['requestsignature',[33,41,62,66]],
['aláírásának',[33,62,66]],
['--Általános',[]],
['responses--',[33]],
['generalerrorheaderresponse',[33,68]],
['összes',[33,68,69]],
['vonatkozó',[33,68,69,155,167,246,247,272,273,305,322,327,361,463,502,513,627,647,650,726,731,733,734,735,736,788,789,790]],
['hibaválasz',[33,68]],
['generikus',[33,68,69]],
['elementje',[33,68,69,155,446]],
['general',[33,68,69,155,179,186,237,238,900,901,905,908,910,913,938,950,961,969,973]],
['generalexceptionresponse',[33,69]],
['kivétel',[33,69,155,170,171,218,442,443]],
['exception',[33,69]],
['online',[119,148,149,150,151,155,463,477,480,567,577,622]],
['rendszer',[119,155,463,514,515,616,627,726,744,746,897]],
['invoicebase',[119,155]],
['invoiceappearancetype',[119,146,155,246,253]],
['megjelenési',[119,146,155,246,253]],
['formája',[119,146,155,246,253]],
['form',[119,146,155,246,253,627,666,667,726,844,845,846,848,850,851,852,854]],
['appearance',[119,146,155,246,253]],
['paper',[119,146,155,458]],
['papír',[119,146,155,458]],
['alapú',[119,146,463,477,480,494,496,502,506,514,516,538,567,577,622]],
['issued',[119,146,155,167,169,463,606]],
['electronic',[119,146,155,230,231,458,463,567,568,726,819,823]],
['elektronikus',[119,146,463,567,568,726,819,823]],
['formában',[119,146]],
['előállított',[119,146]],
['non-edi',[119,146]],
['unknown',[119,146]],
['szoftver',[119,146,463,502,503,526,529,532,534,535,538,541,567,572,574,620]],
['képes',[119,146]],
['azonosítani',[119,146]],
['kiállításkor',[119,146]],
['ismert',[119,146]],
['software',[119,146,463,477,478,479,480,502,503,526,529,532,534,535,536,538,541,545,567,568,569,570,571,572,573,574,575,576,577,620,621,622]],
['cannot',[119,146]],
['identify',[119,146]],
['issue',[119,146,155,241,243,349,350,627,628,633]],
['invoicecategorytype',[119,147,155,246,254]],
['normal',[119,147,155,284,305,306,726,881]],
['normál',[119,147,155,284,305,306,726,881]],
['gyűjtő',[119,147,155,167,169,284,305,310,463,592,593,627,669,670,701,702,726,751,752]],
['aggregate',[119,147,155,167,168,169,284,305,310,370,372]],
['gyűjtőszámla',[119,147,155,167,168]],
['invoicedatetype',[119,148,155,163,166,167,168,221,223,241,243,246,252,255,256,257,258,339,345,349,350]],
['system',[119,148,149,150,151,155,230,231,463,484,487,494,514,515,616,726,897]],
['2010-01-01',[119,148,726,882]],
['invoiceindextype',[119,149]],
['sorszám',[119,149,151,627,657,664,726,793,796,833,838,883,885]],
['index',[119,149,151,726,885]],
['maxinclusive',[119,149,155,460,463,469,471,615]],
['invoicetimestamptype',[119,150]],
['2010-01-01t00',[119,150]],
['invoiceunboundedindextype',[119,151,155,174,175,272,273]],
['kötegelt',[119,151,155,174,269,270]],
['számlaművelethez',[119,151]],
['batch',[119,151,155,174,175,269,270]],
['linenumbertype',[119,152,155,296,297,305,321,380,381,627,675,682,726,735,737,893]],
['tételszám',[119,152,726,893]],
['line',[119,152,155,278,284,285,286,287,293,296,297,298,299,302,303,304,305,319,320,322,334,451,452,627,654,673,674,675,681,722,726,893]],
['pénzérték',[119,153,726,895]],
['számjegy',[119,142,143,145,153,155,459,627,725,726,802,804,862,863,865,895]],
['tizedesjegyet',[119,153,155,459,627,725,726,895]],
['tartalmazhat',[119,153,155,459,627,725,726,895]],
['money',[119,153,726,895]],
['input',[119,153,726,873,874,895]],
['digits',[119,142,143,153,155,459,627,725,726,862,863,895]],
['that',[119,120,153,155,459,463,494,498,502,505,526,527,528,529,530,531,532,533,565,566,627,725,726,738,895,900,947,949]],
['include',[119,153,155,459,460,627,725,726,895]],
['places',[119,153,155,459,460,463,490,492,493,615,627,725,726,895]],
['fractiondigits',[119,153,155,450,459,460,463,615,627,725,726,889,895]],
['paymentmethodtype',[119,154,155,246,259,726,830,832,897]],
['fizetés',[119,154,155,246,259,726,830,831,832,897]],
['módja',[119,154,155,246,259,463,514,516,726,819,822,830,832]],
['payment',[119,154,155,160,162,163,165,166,246,258,259,627,637,640,726,812,813,817,825,826,827,828,829,830,831,832,874,897,900,901,904]],
['transfer',[119,154]],
['banki',[119,154]],
['átutalás',[119,154]],
['készpénz',[119,154,726,812,815,897]],
['card',[119,154,627,628,630,726,802,804,806,808,812,814,818,874,881,883,897,900,913,930,931,932,933,934,935,936,937]],
['bankkártya',[119,154,726,897]],
['hitelkártya',[119,154,726,897]],
['helyettesítő',[119,154,726,897]],
['eszköz',[119,154,155,170,305,324,339,340,341,438,463,620,726,897]],
['debit',[119,154,726,897]],
['credit',[119,154,726,897]],
['other',[119,154,155,179,246,247,249,251,305,308,311,332,339,341,349,351,438,447,451,454,458,463,469,475,609,622,627,675,676,689,691,722,723,726,731,732,733,734,788,789,790,812,817,825,826,833,834,873,874,877,880,881,883,894,897,899,900,913,923,926,941,946,947,949,964,966,969]],
['cash-substitute',[119,154,726,897]],
['instrument',[119,154,726,812,828,829,830,873,874,897,900,913,916]],
['utalvány',[119,154,726,874]],
['váltó',[119,154]],
['pénzhelyettesítő',[119,154]],
['bill',[119,154]],
['non-cash',[119,154]],
['addresstype',[119,120,155,202,203,232,233,349,352,408,413,627,713,718,726,738,756,757,806,807,841,866]],
['amely',[119,120,155,208,210,212,463,534,536,726,738]],
['egyszerű',[119,120,122,136,726,738,740,856]],
['részletes',[119,120,121,123,155,218,463,583,585,726,738,739,775]],
['címet',[119,120,726,738]],
['tartalmaz',[119,120,155,302,304,446,726,738]],
['address',[119,120,121,122,123,136,137,155,202,203,232,233,349,352,408,413,463,565,578,579,580,581,582,583,586,623,627,713,718,726,738,739,740,756,757,775,806,807,856,857]],
['includes',[119,120,726,738]],
['either',[119,120,726,738]],
['simple',[119,120,122,136,726,738,740,856]],
['detailed',[119,120,121,123,155,218,463,583,585,726,738,739,775]],
['simpleaddress',[119,120,122,203,233,352,413,547,549,550,642,645,646,665,718,726,738,740,757,807,835,839,840,841,866]],
['simpleaddresstype',[119,120,122,136,155,221,224,726,738,740,856]],
['detailedaddress',[119,120,121,203,233,352,413,547,549,550,642,645,646,665,718,726,738,739,757,807,835,839,840,841,866]],
['detailedaddresstype',[119,120,121,123,463,578,579,726,738,739,775]],
['címadatok',[119,123,136,137,726,775,856,857]],
['countrycode',[119,121,122,123,126,136,139,224,579,726,739,740,775,778,856,859]],
['region',[119,121,122,123,133,136,141,224,579,726,739,740,775,785,856,861]],
['tartomány',[119,123,133,136,141,726,775,785,856,861]],
['kódja',[119,123,133,136,141,155,179,182,194,197,198,406,407,454,463,481,482,567,572,609,627,723,726,775,785,806,809,825,826,856,861]],
['amennyiben',[119,123,131,133,136,140,141,155,246,256,257,408,412,463,484,489,627,713,717,726,775,783,785,856,860,861]],
['értelmezhető',[119,123,131,133,136,140,141,726,775,783,785,856,860,861]],
['adott',[119,123,133,136,141,155,167,168,305,320,384,386,387,388,398,399,400,420,421,422,423,424,425,435,436,437,451,463,592,594,599,600,627,675,678,681,701,703,704,722,726,735,736,751,753,754,755,775,785,856,861,892]],
['országban',[119,123,133,136,141,726,775,785,856,861]],
['alpha',[119,123,133,136,141,726,775,785,856,861]],
['province',[119,123,133,136,141,726,775,785,856,861]],
['appropriate',[119,123,133,136,141,726,775,785,856,861]],
['given',[119,123,133,136,141,155,167,168,199,305,320,361,362,384,386,387,388,398,399,400,420,421,422,423,424,425,435,436,437,451,627,675,681,701,703,704,722,726,751,753,754,755,775,785,856,861]],
['postalcode',[119,121,122,123,131,136,140,224,579,726,739,740,775,783,856,860]],
['értékkel',[119,123,131,136,140,726,775,783,856,860]],
['kell',[119,123,131,136,140,463,484,485,486,489,494,496,502,506,521,523,524,599,601,616,726,775,783,856,860]],
['kitölteni',[119,123,131,136,140,463,484,486,494,496,502,506,726,775,783,856,860]],
['interpreted',[119,123,131,136,140,726,775,783,856,860]],
['need',[119,123,131,136,140,726,775,783,856,860]],
['filled',[119,123,131,136,140,155,167,169,463,494,496,502,506,726,775,783,856,860,900,950,951]],
['city',[119,121,122,123,125,136,138,224,579,726,739,740,775,777,856,858]],
['település',[119,123,125,136,138,726,775,777,856,858]],
['settlement',[119,123,125,136,138,155,246,263,726,775,777,856,858]],
['streetname',[119,121,123,135,579,726,739,775,787]],
['közterület',[119,123,132,135,136,137,726,775,784,787,856,857]],
['public',[119,123,132,135,136,137,155,305,323,726,775,784,787,856,857]],
['place',[119,123,132,135,136,137,155,221,224,726,775,784,787,856,857]],
['publicplacecategory',[119,121,123,132,579,726,739,775,784]],
['jellege',[119,123,132,136,137,155,296,298,627,675,678,726,775,784,856,857,892]],
['category',[119,123,132,463,553,554,555,599,601,726,775,784,873]],
['házszám',[119,123,130,136,137,726,775,782,856,857]],
['house',[119,123,130,136,137,726,775,782,856,857]],
['building',[119,121,123,124,579,726,739,775,776]],
['Épület',[]],
['staircase',[119,121,123,134,579,726,739,775,786]],
['lépcsőház',[119,123,134,726,775,786]],
['floor',[119,121,123,128,136,137,579,726,739,775,780,856,857]],
['emelet',[119,123,128,136,137,726,775,780,856,857]],
['door',[119,121,123,127,136,137,579,726,739,775,779,856,857]],
['ajtó',[119,123,127,136,137,726,775,779,856,857]],
['lotnumber',[119,121,123,129,579,726,739,775,781]],
['helyrajzi',[119,123,129,136,137,726,775,781,856,857]],
['címtípus',[119,136,726,856]],
['additionaladdressdetail',[119,122,136,137,224,726,740,856,857]],
['további',[119,136,137,155,156,305,308,339,341,438,627,637,638,675,676,726,727,735,856,857]],
['further',[119,136,137,463,494,500,501,726,856,857]],
['taxnumbertype',[119,142,155,208,209,232,236,349,354,408,411,416,463,583,585,627,713,716,721,726,762,763,862,866,867,868]],
['taxpayerid',[119,142,144,208,209,212,236,354,411,416,585,668,690,699,716,721,726,762,763,766,819,824,862,864,867,868]],
['adóalany',[119,142,144,726,819,824,862,864]],
['törzsszáma',[119,142,144,726,819,824,862,864]],
['csoportos',[119,142,144,726,819,824,862,864]],
['esetén',[119,142,144,155,167,168,169,246,248,251,252,254,261,284,289,293,294,296,297,299,300,301,305,306,307,319,332,357,359,392,402,403,426,430,463,484,486,494,496,502,506,546,550,592,594,596,615,627,637,639,641,646,657,660,669,675,679,694,696,705,708,726,727,730,819,824,833,840,862,864,866,867,868,892,900,950,951]],
['csoportazonosító',[119,142,144,155,208,209,210,212,408,411,416,627,713,716,721,726,762,763,764,766,819,824,862,864,866,867]],
['taxable',[119,142,144,155,305,323,463,613,726,819,824,862,864]],
['person',[119,142,144,155,305,323,447,463,613,726,819,824,862,864,877]],
['case',[119,142,144,155,167,168,218,219,220,246,248,251,254,261,284,289,293,294,296,297,299,300,301,305,306,307,319,417,418,426,429,430,432,433,463,484,487,489,546,547,550,627,637,639,641,642,646,669,675,679,726,819,824,833,835,840,862,864]],
['group',[119,142,144,155,208,209,210,212,408,411,416,463,583,589,627,713,716,721,726,762,763,764,766,770,772,819,824,862,864,866,867,868]],
['taxation',[119,142,144,145,155,221,293,294,299,300,301,305,313,426,427,431,453,726,819,824,862,864,865]],
['arrangement',[119,142,144,726,819,824,862,864]],
['vatcode',[119,142,145,208,209,212,236,354,411,416,585,716,721,726,762,763,766,862,865,867,868]],
['adóalanyiság',[119,142,145,726,862,865]],
['típusának',[119,142,145,726,862,865]],
['jelzésére',[119,142,145,726,862,865]],
['indicate',[119,142,145,726,862,865]],
['countycode',[119,142,143,208,209,212,236,354,411,416,585,716,721,726,762,763,766,862,863,867,868]],
['customervatstatustype',[155,202,207,447,726,756,761,877]],
['vevő',[155,179,182,197,198,199,202,203,204,205,206,207,210,264,265,361,362,375,376,447,461,627,641,643,726,756,757,758,759,760,761,764,788,806,810,877,900,901,907,947,949]],
['státusz',[155,447,463,610,726,877]],
['customers',[155,202,207,447,726,756,761,877]],
['status',[155,202,207,447,463,494,553,560,620,726,756,761,877]],
['domestic',[155,210,212,447,726,764,766,877]],
['belföldi',[155,210,212,408,416,426,431,447,461,463,620,627,713,721,726,764,766,877]],
['alany',[155,447,726,877]],
['subject',[155,447,726,877]],
['természetes',[155,305,318,447,726,877]],
['személy',[155,447,726,877]],
['külföldi',[155,167,169,447,726,877]],
['non-vat',[155,447,726,877]],
['non-natural',[155,447,726,877]],
['foreign',[155,167,169,246,251,447,726,797,812,816,877]],
['private',[155,447,463,613,726,877]],
['natural',[155,305,314,318,447,726,877]],
['datanametype',[155,156,158,448,726,727,729,878]],
['adatmező',[155,156,157,158,448,726,727,728,729,878]],
['ekaeridtype',[155,230,231,449]],
['ekÁer',[]],
['exchangeratetype',[155,163,164,167,169,246,251,450,726,797,801,889]],
['Árfolyam',[]],
['adat',[155,156,159,241,242,246,247,305,308,450,463,553,560,578,581,582,627,637,638,657,660,675,676,705,708,726,727,730,731,732,733,734,735,736,788,789,790,833,834,873,889,900,941,947,964,965,966,967,968,975,976]],
['rate',[155,163,164,167,169,226,228,246,251,284,288,289,292,364,367,369,384,385,386,387,388,398,401,417,419,420,421,422,423,424,425,426,434,435,436,437,450,456,460,463,592,594,595,596,599,600,726,797,801,889]],
['minexclusive',[155,450,726,889]],
['linenatureindicatortype',[155,305,320,451,627,675,681,722]],
['tételsor',[155,296,305,319,320,451,627,675,681,722]],
['termékértékesítés',[155,246,260,305,320,451,627,675,681,722]],
['szolgáltatás',[155,208,209,210,212,246,260,302,303,305,308,315,316,320,408,411,451,454,463,477,480,521,524,525,567,577,620,622,626,627,673,674,675,676,680,681,713,716,722,723,726,762,763]],
['nyújtás',[155,246,260,305,320,451,627,675,681,722]],
['jellegének',[155,296,305,319,320,451,627,675,681,722]],
['jelzése',[155,246,260,262,272,274,305,320,370,374,451,627,675,681,722]],
['indication',[155,305,320,451,627,675,681,722]],
['nature',[155,305,320,451,627,675,678,681,722,726,892]],
['supply',[155,246,260,296,305,319,320,324,339,408,411,426,451,627,675,681,713,716,722,900,908,909]],
['goods',[155,208,209,210,212,246,260,305,320,408,411,451,453,454,627,675,681,713,716,722,723,726,762,763,874,892,894]],
['services',[155,208,209,210,212,246,260,305,320,408,411,451,454,627,675,681,713,716,722,723,726,762,763]],
['product',[155,199,200,201,276,278,281,302,303,305,308,316,322,323,325,326,327,339,343,346,349,355,356,357,358,359,360,361,362,363,364,365,366,368,369,370,371,372,373,374,375,376,451,454,455,457,458,461,463,553,557,559,560,620,627,652,654,673,674,675,676,680,683,692,693,694,695,696,697,722,723,724,726,873,892]],
['service',[155,221,222,276,278,302,303,305,308,315,316,339,345,357,398,399,400,420,421,422,423,424,425,435,436,437,451,454,463,469,475,514,516,520,521,524,525,620,622,626,627,652,654,673,674,675,676,680,694,701,703,704,722,723,726,892]],
['besorolható',[155,451,627,722]],
['non-qualifiable',[155,451,627,722]],
['lineoperationtype',[155,296,298,452]],
['számlatétel',[155,296,298,452]],
['módosítás',[155,272,274,275,276,279,296,305,319,446,452,627,647,649,651,652,655,900,913,931,935]],
['create',[155,296,297,452,726,884]],
['modify',[155,452,726,884]],
['marginschemetype',[155,426,427,453]],
['különbözet',[155,426,427,453,900,901,907]],
['szabályozás',[155,426,427,453]],
['inputting',[155,453,455,627,724]],
['margin-scheme',[155,426,427,453]],
['travel',[155,453]],
['agency',[155,453]],
['utazási',[155,453]],
['irodák',[155,453]],
['agencies',[155,453]],
['second',[155,453]],
['hand',[155,453]],
['cikkek',[155,453]],
['second-hand',[155,453]],
['artwork',[155,453]],
['műalkotások',[155,453]],
['works',[155,453]],
['antiques',[155,453]],
['gyűjteménydarabok',[155,453]],
['régiségek',[155,453]],
['collector’s',[155,453]],
['items',[155,302,305,329,380,381,453,627,673,675,726,733,734,751,753,754,755,788,790]],
['productcodecategorytype',[155,357,360,454,627,694,697,723]],
['termékkód',[155,355,356,357,358,359,360,454,455,627,692,693,694,695,696,697,723,724]],
['fajtájának',[155,357,360,454,627,694,697,723]],
['jelölésére',[155,454,627,723]],
['mark',[155,454,627,723]],
['kind',[155,160,161,357,360,454,627,694,697,723]],
['vtsz',[155,357,360,454,463,553,564,566,627,694,697,723]],
['vámtarifa',[155,454,463,553,564,627,723]],
['customs',[155,454,463,553,564,627,723]],
['tariff',[155,454,463,553,564,627,723]],
['jegyzék',[155,454,627,723]],
['list',[155,454,463,467,484,485,494,498,519,565,566,581,583,586,592,597,599,612,620,627,723,726,749,768,900,964,969,972]],
['kombinált',[155,454,627,723]],
['nómenklatúra',[155,454,627,723]],
['rendelet',[155,221,305,313,454,627,723]],
['melléklete',[155,454,627,723]],
['combined',[155,454,627,723]],
['nomenclature',[155,454,627,723]],
['annex',[155,454,627,723]],
['jövedéki',[155,305,314,408,410,454,627,713,715,723]],
['törvény',[155,246,263,276,280,305,329,380,381,426,433,454,627,652,656,723]],
['lxviii',[155,221,222,408,410,454,627,713,715,723]],
['e-tko',[155,454,627,723]],
['adminisztratív',[155,454,627,723]],
['hivatkozási',[155,272,454,627,647,723]],
['administrative',[155,454,627,723]],
['reference',[155,272,454,627,647,723]],
['defined',[155,454,627,723]],
['excise',[155,221,222,305,314,408,410,454,627,713,715,723]],
['duties',[155,305,314,454,627,723]],
['termék',[155,199,200,302,303,305,308,316,364,368,454,458,463,553,559,560,627,673,674,675,676,680,723,726,873]],
['korm',[155,454,627,723]],
['melléklet',[155,454,627,723,900,947,949,976]],
['csomagolószer-katalógus',[155,454,627,723]],
['packaging',[155,454,458,627,723]],
['catalogue',[155,454,627,723]],
['title',[155,454,627,723,726,874,900,901,904]],
['schedule',[155,454,627,723]],
['government',[155,454,627,723]],
['decree',[155,221,305,313,454,627,723]],
['környezetvédelmi',[155,305,327,361,363,375,454,627,723]],
['termékkódja',[155,454,627,723]],
['environmental',[155,305,327,361,363,375,454,627,723]],
['protection',[155,305,327,361,363,375,454,627,723]],
['Építményjegyzék',[]],
['classification',[155,454,627,723]],
['inventory',[155,454,627,723]],
['construction',[155,454,627,723]],
['teszor',[155,454,627,723]],
['termékek',[155,454,627,723]],
['szolgáltatások',[155,454,627,723]],
['osztályozási',[155,454,627,723]],
['rendszere',[155,454,627,723]],
['activity',[155,454,627,723]],
['regulation',[155,454,627,723]],
['vállalkozás',[155,454,627,723]],
['által',[155,232,234,454,463,469,476,502,504,512,514,516,609,626,627,723,726,797,801,900]],
['képzett',[155,454,463,502,512,627,723]],
['enterprise',[155,246,262,454,627,723]],
['productcodevaluetype',[155,357,359,455,627,694,696,724]],
['codes',[155,179,182,183,194,197,214,305,326,355,357,406,455,463,494,498,592,627,675,683,692,694,724]],
['productfeemeasuringunittype',[155,364,367,456]],
['díjtétel',[155,364,367,456]],
['egység',[155,246,251,305,330,331,364,369,456,462,463,464,467,468,469,470,553,561,617,625,627,675,685,686]],
['unit',[155,167,169,226,228,229,246,251,305,318,330,331,332,333,364,367,369,456,462,463,484,486,538,541,544,553,561,617,625,627,675,685,686,687,688]],
['darab',[155,364,367,456,462,463,534,537,625]],
['piece',[155,364,367,456,462,463,625]],
['kilogramm',[155,456,462,463,625]],
['kilogram',[155,170,173,199,200,456,462,463,625]],
['productfeeoperationtype',[155,370,374,457]],
['termékdíj',[155,199,200,305,322,325,349,361,362,363,364,365,366,369,370,371,372,373,374,375,376,457]],
['összesítés',[155,155,370,374,384,392,392,397,398,402,403,404,457,627,701,709,711,726,749,750,751]],
['summary',[155,276,280,281,370,374,384,389,402,405,457,627,628,629,652,656,705,709,712,726,880,881,883,892]],
['refund',[155,370,374,457]],
['visszaigénylés',[155,457]],
['deposit',[155,305,312,370,374,457]],
['raktárba',[155,370,374,457]],
['szállítás',[155,457]],
['productstreamtype',[155,199,201,458]],
['termékáram',[155,199,201,361,362,458]],
['stream',[155,199,201,361,362,458]],
['battery',[155,458,463,469,471]],
['akkumulátor',[155,458,463,469,471]],
['csomagolószer',[155,458]],
['products',[155,458,463,565,566]],
['petrol',[155,458]],
['kőolajtermék',[155,458]],
['petroleum',[155,458]],
['elektromos',[155,458]],
['elektronikai',[155,458]],
['berendezés',[155,458]],
['electric',[155,458]],
['appliance',[155,458]],
['equipment',[155,458]],
['tire',[155,458]],
['gumiabroncs',[155,458]],
['reklámhordozó',[155,458]],
['printing',[155,458,463,609]],
['plastic',[155,458]],
['műanyag',[155,458]],
['chemical',[155,458]],
['vegyipari',[155,458]],
['irodai',[155,458]],
['stationery',[155,458]],
['quantitytype',[155,170,172,173,199,200,221,222,305,328,332,333,364,368,438,439,440,441,442,444,445,459,627,675,684,687,688,725]],
['mennyiségi',[155,305,318,330,331,459,462,463,625,627,675,685,686,725]],
['quantity',[155,221,222,303,305,328,364,368,459,627,674,675,684,725]],
['values',[155,459,627,725]],
['ratetype',[155,226,228,417,419,426,430,434,460]],
['arány',[155,460]],
['közötti',[155,460]],
['tizedesjegy',[155,460,463,490,492,493]],
['pontossággal',[155,460,463,490,492,493]],
['between',[155,460]],
['takeovertype',[155,375,377,461]],
['átvállalás',[155,375,377,461]],
['adatait',[155,305,446,461,627,675]],
['takeover',[155,361,363,375,377,461]],
['lxxxv',[155,305,327,349,361,370,371,461]],
['bekezdés',[155,461]],
['első',[155,246,257,339,345,461]],
['forgalomba',[155,339,345,461]],
['hozó',[155,461]],
['vállalja',[155,375,376,461]],
['termékdíj-kötelezettségét',[155,375,376,461]],
['takes',[155,375,376,461]],
['over',[155,375,376,461,463,514,515]],
['buyer’s',[155,461]],
['liability',[155,375,376,461]],
['basis',[155,461]],
['paragraph',[155,221,305,313,314,315,323,349,370,371,461]],
['alpontja',[155,461]],
['szerződés',[155,461]],
['alapján',[155,199,305,329,361,362,380,381,426,428,461]],
['átvállalja',[155,461]],
['contract',[155,177,178,179,180,221,222,461]],
['buyer',[155,461,900,947,949]],
['supplier’s',[155,375,376,408,410,461,627,713,715]],
['sub-point',[155,461]],
['unitofmeasuretype',[155,305,330,462,463,553,561,625,627,675,685]],
['mennyiség',[155,305,328,462,463,553,561,617,625,627,675,684]],
['measure',[155,305,318,330,331,462,463,553,561,617,625,627,675,685,686]],
['metrikus',[155,462,463,625]],
['tonna',[155,462,463,625]],
['metric',[155,462,463,464,465,466,625]],
['kilowatt',[155,462,463,625]],
['hour',[155,462,463,625]],
['minute',[155,462,463,625]],
['perc',[155,462,463,611,625]],
['month',[155,462,463,625]],
['hónap',[155,462,463,625]],
['liter',[155,221,222,462,463,625]],
['kilometer',[155,462,463,625]],
['kilométer',[155,462,463,625]],
['cubic',[155,438,439,462,463,625]],
['meter',[155,462,463,625]],
['köbméter',[155,462,463,625]],
['méter',[155,462,463,625]],
['linear',[155,462,463,625]],
['folyóméter',[155,462,463,625]],
['carton',[155,462,463,625]],
['karton',[155,462,463,625]],
['pack',[155,462,463,625]],
['csomag',[155,462,463,625]],
['saját',[155,357,358,359,462,463,625,627,694,695,696]],
['megnevezés',[155,462,463,553,555,559,625]],
['additionaldatatype',[155,156,246,247,305,308,627,637,638,675,676,726,727,731,732,735,736,833,834]],
['leírására',[155,156,241,244,269,627,628,632,637,638,726,727,735]],
['additional',[155,156,627,637,638,726,727,735,887,900,947,949,976]],
['description',[155,156,157,226,227,305,316,463,627,637,638,675,680,726,727,728,735,900,969,971]],
['dataname',[155,156,158,247,308,638,676,726,727,729,732,736,834]],
['datadescription',[155,156,157,247,308,638,676,726,727,728,732,736,834]],
['tartalmának',[155,156,157,726,727,728,844,849,850,855]],
['szöveges',[155,156,157,726,727,728]],
['leírása',[155,156,157,218,219,220,226,227,417,418,726,727,728]],
['content',[155,156,157,305,322,417,419,426,430,463,592,594,726,727,728,844,849,850,855]],
['datavalue',[155,156,159,247,308,638,676,726,727,730,732,736,834]],
['advancedatatype',[155,160,305,309]],
['előleghez',[155,160,305,309]],
['kapcsolódó',[155,160,162,163,305,308,309,329,380,381,627,675,676,900,901,903]],
['advance',[155,160,161,162,163,164,165,166,305,309,726,874]],
['related',[155,160,162,163,264,265,266,268,305,309,327,361,627,641,643]],
['advanceindicator',[155,160,161,309]],
['boolean',[155,160,161,170,171,241,242,246,248,260,261,262,263,272,274,302,304,305,312,315,318,323,325,408,412,426,428,431,442,443,627,713,717,726,746,748]],
['Értéke',[]],
['tétel',[155,160,161,167,168,284,285,286,287,289,290,291,293,294,295,296,297,299,300,301,302,303,305,306,307,312,315,318,321,322,334,335,336,627,669,671,672,673,674,675,678,679,682,726,735,737,892]],
['előleg',[155,160,161,162,163,166,726,874]],
['jellegű',[155,160,161,305,312]],
['item',[155,160,161,167,168,169,179,189,226,228,229,282,283,284,289,290,291,293,294,295,299,300,301,302,303,305,306,307,308,312,315,317,318,321,325,327,334,335,336,361,463,534,537,578,581,582,627,669,671,672,673,674,675,676,678,679,682,726,735,736,737,892]],
['charge',[155,160,161,305,322,364,368,426,431,463,469,471,726,892]],
['advancepaymentdata',[155,160,162,309]],
['advancepaymentdatatype',[155,160,162,163]],
['fizetéshez',[155,160,162]],
['előlegfizetéshez',[155,163]],
['advanceoriginalinvoice',[155,162,163,165]],
['előlegszámlának',[155,163,165]],
['amelyben',[155,163,165]],
['előlegfizetés',[155,163,164,165]],
['történt',[155,163,165,208,209,210,212,272,274,408,411,627,713,716,726,762,763]],
['containing',[155,163,165,293,294,299,300,301,463,565,566]],
['advancepaymentdate',[155,162,163,166]],
['fizetésének',[155,163,166]],
['dátuma',[155,163,166,167,168,221,223,246,252,255,726,770,774]],
['advanceexchangerate',[155,162,163,164]],
['során',[155,163,164,221,222,246,260,463,469,474,475,534,536]],
['alkalmazott',[155,163,164,246,251,426,434,726,797,801,900,901,905,908,910,913,938,950,961,969,973]],
['árfolyam',[155,155,163,164,167,169,246,251,450,726,889]],
['applied',[155,163,164,167,169,246,251,426,434,463,599,601]],
['aggregateinvoicelinedatatype',[155,167,305,310]],
['számlára',[155,167,246,247,272,273,627,647,650]],
['speciális',[155,167]],
['adatokat',[155,167,463,526,528,531]],
['including',[155,167,305,306,357,627,675,694]],
['special',[155,167]],
['lineexchangerate',[155,167,169,310]],
['tételhez',[155,167,169,226,228,229,305,308,317,627,675,676]],
['tartozó',[155,167,169,226,228,229,305,317,384,386,387,388,398,399,400,420,421,422,423,424,425,435,436,437,463,592,594,627,701,703,704,726,751,753,754,755,900,947,949]],
['egységre',[155,167,169]],
['vonatkoztatva',[155,167,169]],
['pénznemben',[155,167,169]],
['kiállított',[155,167,169,463,494,500,606]],
['kitöltendő',[155,167,169,284,289,305,306,307,627,669,675,679]],
['pertaining',[155,167,169]],
['this',[155,167,169,246,248,255,463,534,535,536]],
['should',[155,167,169,199,246,251,255,361,362,463,484,485,487,494,496,502,506,521,523]],
['linedeliverydate',[155,167,168,310]],
['teljesítési',[155,167,168,726,770,774]],
['delivery',[155,167,168,179,184,216,217,246,255,256,257,420,421,422,423,424,425,435,436,437]],
['aircrafttype',[155,170,339,340]],
['légi',[155,170,339,340]],
['közlekedési',[155,170,305,324,339,340,341,438]],
['aircraft',[155,170,324,339,340]],
['takeoffweight',[155,170,173,340]],
['felszállási',[155,170,173]],
['tömeg',[155,170,173]],
['kilogrammban',[155,170,173,199,200]],
['take-off',[155,170,173]],
['weight',[155,170,173,199,200]],
['aircargo',[155,170,171,340]],
['jármű',[155,170,171,221,225,339,342,442,443]],
['tartozik',[155,170,171,442,443]],
['means',[155,170,171,305,324,339,442,443]],
['transport',[155,170,171,230,231,305,324,339,442,443]],
['exempt',[155,170,171,426,442,443]],
['from',[155,170,171,199,361,362,408,412,442,443,463,469,476,521,523,534,535,553,562,627,713,717]],
['operationhours',[155,170,172,340]],
['repült',[155,170,172]],
['órák',[155,170,172,442,445]],
['aviated',[155,170,172]],
['hours',[155,170,172,442,445]],
['batchinvoicetype',[155,174,269,270]],
['documents',[155,174,269,270]],
['batchindex',[155,174,175,270]],
['kötegen',[155,174,175]],
['belül',[155,174,175,627,657,664,726,793,796,833,838]],
['within',[155,174,175,627,657,664,726,793,796,833,838]],
['invoicetype',[155,174,176,269,271,276]],
['single',[155,174,176,269,271,276,627,652]],
['contractnumberstype',[155,177,179,180]],
['szerződésszámok',[155,177]],
['contractnumber',[155,177,178,180]],
['szerződésszám',[155,177,178,179,180]],
['conventionalinvoiceinfotype',[155,179,246,249,305,311]],
['számlafeldolgozást',[155,179,246,249,305,311]],
['segítő',[155,179,246,249,305,311]],
['egyezményesen',[155,179,246,249,305,311]],
['nevesített',[155,179,246,249,305,311]],
['conventionally',[155,179,246,249,305,311]],
['named',[155,179,246,249,305,311]],
['assist',[155,179,246,249,305,311]],
['ordernumbers',[155,179,191,249,311]],
['ordernumberstype',[155,179,191,347]],
['megrendelésszám',[155,179,191,347,348]],
['order',[155,179,191,347,348,463,521,523]],
['deliverynotes',[155,179,184,249,311]],
['deliverynotestype',[155,179,184,216]],
['szállítólevél',[155,179,184,216,217]],
['notes',[155,179,184,216]],
['shippingdates',[155,179,193,249,311]],
['shippingdatestype',[155,179,193,382]],
['szállítási',[155,179,193,382,383]],
['shipping',[155,179,193,382,383]],
['dates',[155,179,193,382]],
['contractnumbers',[155,179,180,249,311]],
['suppliercompanycodes',[155,179,194,249,311]],
['suppliercompanycodestype',[155,179,194,406]],
['vállalati',[155,179,182,194,197,198,406,407]],
['company',[155,179,182,194,197,198,406,407,463,613]],
['customercompanycodes',[155,179,182,249,311]],
['customercompanycodestype',[155,179,182,197]],
['dealercodes',[155,179,183,249,311]],
['dealercodestype',[155,179,183,214]],
['beszállító',[155,179,183,214,215]],
['dealer',[155,179,183,214,215]],
['costcenters',[155,179,181,249,311]],
['costcenterstype',[155,179,181,195]],
['költséghely',[155,179,181,195,196]],
['cost',[155,179,181,195,196,726,874]],
['centers',[155,179,181,195]],
['projectnumbers',[155,179,192,249,311]],
['projectnumberstype',[155,179,192,378]],
['projektszám',[155,179,192,378,379]],
['generalledgeraccountnumbers',[155,179,186,249,311]],
['generalledgeraccountnumberstype',[155,179,186,237]],
['főkönyvi',[155,179,186,237,238]],
['számlaszám',[155,179,186,237,238]],
['ledger',[155,179,186,237,238]],
['glnnumberssupplier',[155,179,188,249,311]],
['glnnumberstype',[155,179,187,188,239]],
['kiállítói',[155,179,188]],
['globális',[155,179,187,188,239,240]],
['helyazonosító',[155,179,187,188,239,240]],
['global',[155,179,187,188,239,240]],
['location',[155,179,187,188,239,240,463,484,486,490,546,548,549,627,641,645,657,665,726,833,839]],
['glnnumberscustomer',[155,179,187,249,311]],
['materialnumbers',[155,179,190,249,311]],
['materialnumberstype',[155,179,190,337]],
['anyagszám',[155,179,190,337,338]],
['material',[155,179,190,337,338]],
['itemnumbers',[155,179,189,249,311]],
['itemnumberstype',[155,179,189,282]],
['cikkszám',[155,179,189,282,283]],
['ekaerids',[155,179,185,249,311]],
['ekaeridstype',[155,179,185,230]],
['ekaer',[155,179,185,230,231]],
['id-s',[155,179,185,230]],
['költséghelyek',[155,195]],
['costcenter',[155,181,195,196]],
['center',[155,195,196]],
['kódjai',[155,197,406]],
['customercompanycode',[155,182,197,198]],
['customerdeclarationtype',[155,199,361,362]],
['nyilatkozata',[155,199,361,362]],
['mentesül',[155,199,361,362]],
['megfizetése',[155,199,361,362]],
['alól',[155,199,361,362]],
['akkor',[155,199,246,255,256,257,361,362,463,484,489,514,515]],
['érintett',[155,199,296,297,361,362,364,368]],
['based',[155,199,361,362,463,494,496,502,506]],
['statement',[155,199,361,362]],
['purchaser',[155,199,361,362,375,376]],
['exempted',[155,199,361,362,408,412,627,713,717]],
['paying',[155,199,361,362]],
['then',[155,199,361,362,463,484,489]],
['affected',[155,199,361,362]],
['productstream',[155,199,201,362]],
['productfeeweight',[155,199,200,362]],
['köteles',[155,199,200]],
['tömege',[155,199,200]],
['obliged',[155,199,200]],
['customerinfotype',[155,202,264,265,627,641,643,726,756]],
['customervatstatus',[155,202,207,265,643,726,756,761]],
['státusza',[155,202,207,463,553,560,726,756,761]],
['customervatdata',[155,202,206,265,643,726,756,760]],
['customervatdatatype',[155,202,206,210,726,756,760,764]],
['alanyisági',[155,202,206,210,726,756,760,764]],
['subjectivity',[155,202,206,210,726,756,760,764]],
['customername',[155,202,205,265,643,726,756,759]],
['customeraddress',[155,202,203,265,643,726,756,757]],
['címe',[155,202,203,232,233,349,352,408,413,627,713,718,726,756,757,806,807]],
['customerbankaccountnumber',[155,202,204,265,643,726,756,758]],
['bankszámlaszáma',[155,202,204,232,234,408,414,627,713,719,726,756,758]],
['customertaxnumbertype',[155,208,210,212,726,762,764,766]],
['alatt',[155,208,209,210,212,408,411,627,713,716,726,762,763]],
['számlán',[155,208,210,212,241,242,246,248,255,276,278,305,330,331]],
['szereplő',[155,208,210,212,276,278,305,330,331,627,652,654,657,660,663,675,685,686,705,708,709,710,726,731,732,833,834,837,896,900,947,949,964,965,966,967,968,969,972]],
['termékbeszerzés',[155,208,209,210,212,408,411,627,713,716,726,762,763]],
['igénybevétele',[155,208,209,210,212,726,762,763]],
['lehet',[155,208,210,212,627,657,664,726,762,764,766,793,796,833,838]],
['under',[155,208,209,210,212,408,411,420,421,422,423,424,425,426,428,435,436,437,627,713,716,726,762,763]],
['purchase',[155,208,209,210,212,221,223,224,726,762,763,873]],
['done',[155,208,209,210,212,408,411,627,713,716,726,762,763]],
['groupmembertaxnumber',[155,208,209,212,268,408,411,627,713,716,726,762,763,766]],
['csoport',[155,208,209,408,411,463,583,589,627,713,716,726,762,763]],
['member',[155,208,209,408,411,627,713,716,726,762,763,806,810,866,868]],
['when',[155,208,209,408,411,463,514,518,627,713,716,726,762,763]],
['customertaxnumber',[155,206,210,212,726,760,764,766]],
['communityvatnumber',[155,206,210,211,268,408,409,627,713,714,726,760,764,765]],
['thirdstatetaxid',[155,206,210,213,726,760,764,767]],
['harmadik',[155,210,213,726,764,767]],
['országbeli',[155,210,213,726,764,767]],
['third',[155,210,213,726,764,767]],
['state',[155,210,213,463,469,484,487,488,494,495,496,497,499,502,505,526,527,553,560,566,602,604,609,610,726,764,767]],
['kódok',[155,214,463,597]],
['dealercode',[155,183,214,215]],
['deliverynote',[155,184,216,217]],
['note',[155,216,217]],
['detailedreasontype',[155,218,426,432,433]],
['mentesség',[155,218]],
['indokolása',[155,218]],
['justification',[155,218]],
['exemption',[155,218,284,288,289,292,384,385,398,401,426,432]],
['eset',[155,218,219,220,417,418]],
['kóddal',[155,218,219,417,418]],
['notation',[155,218,219,220,417,418]],
['reason',[155,218,220,432,433,627,647,648,649,726,873,894]],
['szöveggel',[155,218,220]],
['dieseloilpurchasetype',[155,221,305,313]],
['gázolaj',[155,221,222,223,224,305,313]],
['adózottan',[155,221,305,313]],
['történő',[155,221,296,305,313,319,370,374]],
['beszerzésének',[155,221,305,313]],
['acquisition',[155,221,305,313]],
['after',[155,221,305,313,463,484,485,487,599,601,616]],
['purchaselocation',[155,221,224,313]],
['beszerzés',[155,221,223,224]],
['helye',[155,221,224,463,484,486,490,546,549,627,641,645,657,665,726,833,839]],
['purchasedate',[155,221,223,313]],
['vehicleregistrationnumber',[155,221,225,313,630,726,802,805]],
['dieseloilquantity',[155,221,222,313]],
['gépi',[155,221,222]],
['bérmunka-szolgáltatás',[155,221,222]],
['felhasznált',[155,221,222]],
['mennyisége',[155,221,222,364,368]],
['literben',[155,221,222]],
['fordítandó',[155,221,222]],
['helyett',[155,221,222]],
['diesel',[155,221,222]],
['work',[155,221,222,463,494,497,604]],
['machinery',[155,221,222]],
['hire',[155,221,222]],
['discountdatatype',[155,226,305,317]],
['Árengedmény',[]],
['discount',[155,226,227,228,229,305,317,726,892]],
['discountdescription',[155,226,227,317]],
['árengedmény',[155,155,226,226,227,228,229,305,317]],
['discountvalue',[155,226,229,317]],
['összege',[155,226,229,299,300,301,334,335,336,364,365,375,376,389,390,391,392,393,394,395,396,398,399,400,420,421,422,423,424,425,435,436,437,627,657,660,701,703,704,705,706,707,708,726,770,771,797,798,830,831,900,901,903,907,913,914,918,919,920,921,923,925,926,927,929,930,931,932,934,935,936,940]],
['pénznemében',[155,226,229,289,290,293,294,299,300,305,332,334,335,389,390,392,393,395,398,399,420,421,423,424,435,436,627,669,671,675,687,701,703,705,706]],
['egységár',[155,226,228,229,305,332,333,627,675,687,688]],
['tartalmazza',[155,226,228,229]],
['expressed',[155,226,228,229,246,251,289,290,291,293,294,295,299,300,301,305,332,333,334,335,336,389,390,391,392,393,394,395,396,420,421,422,423,424,425,435,436,437,463,469,476,592,594,595,596,627,669,671,672,675,687,688,705,706,707]],
['included',[155,226,228,229]],
['price',[155,226,228,229,305,332,333,627,675,687,688]],
['discountrate',[155,226,228,317]],
['aránya',[155,226,228]],
['ekaerid',[155,185,230,231]],
['stands',[155,230,231]],
['trade',[155,230,231]],
['control',[155,230,231,627,657,663,709,710,726,793,833,837,896]],
['fiscalrepresentativetype',[155,232,264,266]],
['pénzügyi',[155,232,233,234,235,236,264,266]],
['képviselő',[155,232,233,234,235,236,264,266]],
['fiscal',[155,232,233,234,235,236,264,266,463,494,499,610]],
['representative',[155,232,233,234,235,236,264,266]],
['fiscalrepresentativetaxnumber',[155,232,236,266]],
['fiscalrepresentativename',[155,232,235,266]],
['fiscalrepresentativeaddress',[155,232,233,266]],
['fiscalrepresentativebankaccountnumber',[155,232,234,266]],
['kibocsátó',[155,232,234,264,268]],
['megnyitott',[155,232,234,900,908,912]],
['opened',[155,232,234,463,610,900,908,912]],
['issuer',[155,232,234,264,268]],
['számlaszámok',[155,237]],
['generalledgeraccountnumber',[155,186,237,238]],
['glnnumber',[155,187,188,239,240]],
['invoicedetailtype',[155,246,264,267]],
['részletező',[155,246,264,267,627,637,641,644]],
['detail',[155,246,264,267,627,637,641,644,726,768,769,770]],
['invoicecategory',[155,246,254,267]],
['eredeti',[155,246,254,272,275,296,297,627,637,639,647,651,726,884]],
['invoicedeliverydate',[155,246,255,267]],
['teljesítés',[155,246,252,255]],
['szerepel',[155,241,242,246,248,255]],
['azonos',[155,246,255]],
['keltével',[155,246,255]],
['does',[155,241,242,246,255,463,514,515]],
['exist',[155,246,255]],
['considered',[155,246,255,349,351]],
['such',[155,246,255,260,349,351]],
['invoicedeliveryperiodstart',[155,246,257,267]],
['időszakra',[155,246,256,257]],
['vonatkozik',[155,246,256,257,272,275,370,374,627,647,651]],
['időszak',[155,246,252,256,257]],
['napja',[155,246,252,256,257]],
['first',[155,246,257,339,345,463,521,523]],
['period',[155,246,252,256,257]],
['invoicedeliveryperiodend',[155,246,256,267]],
['utolsó',[155,246,252,256,463,484,485,487,494,498]],
['last',[155,246,252,256,463,469,473,474,475,494,498,500,501,502,505,526,567,574]],
['invoiceaccountingdeliverydate',[155,246,252,267]],
['számviteli',[155,246,252,305,315]],
['accounting',[155,246,248,252,305,315]],
['accomplishment',[155,246,252]],
['event',[155,246,252,305,332,463,481,482,483,484,485,609,726,876]],
['periodicalsettlement',[155,246,260,267]],
['annak',[155,246,260,272,274,370,374]],
['felek',[155,246,260]],
['időszakonkénti',[155,246,260]],
['elszámolásban',[155,246,260]],
['fizetésben',[155,246,260]],
['állapodnak',[155,246,260]],
['ellenértékét',[155,246,260]],
['időpontra',[155,246,260]],
['állapítják',[155,246,260]],
['indicates',[155,241,242,246,260,272,274,302,304]],
['where',[155,246,260,463,592,594,596]],
['agreement',[155,246,260]],
['parties',[155,246,260]],
['gives',[155,246,260]],
['rise',[155,246,260]],
['successive',[155,246,260]],
['statements',[155,246,260]],
['payments',[155,246,260,726,874]],
['relating',[155,246,260]],
['consideration',[155,246,260,293,294,299,300,301]],
['agreed',[155,246,260]],
['upon',[155,246,260]],
['applies',[155,246,260]],
['specific',[155,246,260,726,735,736,744,746]],
['periods',[155,246,260]],
['smallbusinessindicator',[155,246,262,267]],
['kisadózó',[155,246,262]],
['marking',[155,246,248,261,262,263,284,288,289,292,296,305,319,384,385,398,401,426,427,431,432,627,669,670,701,702]],
['tax-bracket',[155,246,262]],
['currencycode',[155,246,250,267,726,797,799,816]],
['pénzneme',[155,246,250]],
['exchangerate',[155,246,251,267,726,797,801,816]],
['huf-tól',[155,246,251]],
['különböző',[155,246,251,357,627,694]],
['huf-ban',[155,246,251]],
['than',[155,246,251,900,947,949]],
['mentioned',[155,246,251]],
['utilitysettlementindicator',[155,246,263,267]],
['közmű',[155,246,263]],
['elszámoló',[155,246,263]],
['jelölése',[155,246,248,261,263,284,288,289,292,296,305,319,357,360,384,385,398,401,426,427,431,432,627,669,670,694,697,701,702]],
['clxxxviii',[155,246,263]],
['fact',[155,246,248,261,263,384,385,398,401]],
['utility',[155,246,263]],
['selfbillingindicator',[155,246,261,267]],
['Önszámlázás',[]],
['önszámlázás',[155,155,246,246,261,261]],
['self-billing',[155,246,261]],
['paymentmethod',[155,246,259,267]],
['paymentdate',[155,246,258,267]],
['fizetési',[155,246,258,305,325,726,830,831,832,897]],
['határidő',[155,246,258]],
['deadline',[155,246,258]],
['cashaccountingindicator',[155,246,248,267]],
['pénzforgalmi',[155,246,248]],
['elszámolás',[155,246,248]],
['indicated',[155,246,248]],
['invoiceappearance',[155,246,253,267]],
['conventionalinvoiceinfo',[155,246,249,267]],
['additionalinvoicedata',[155,246,247,267]],
['relation',[155,246,247,305,308,317,339,341,438,627,675,676,726,731,732,833,834]],
['invoicedatatype',[155,241,446,627,666,667]],
['adatszolgáltatás',[155,241,242,272,274,296,302,304,305,319,463,484,485,487,627,628,726,793]],
['invoicenumber',[155,241,245,446]],
['pont',[155,241,245]],
['invoiceissuedate',[155,241,243,446]],
['kelte',[155,241,243,349,350,627,628,633]],
['completenessindicator',[155,241,242,446]],
['jelöli',[155,241,242,302,304]],
['maga',[155,241,242]],
['több',[155,241,242]],
['whether',[155,241,242,272,274,302,304,370,374]],
['identical',[155,241,242]],
['contain',[155,241,242,296,297]],
['more',[155,241,242]],
['invoicemain',[155,241,244,446]],
['invoicemaintype',[155,241,244,269]],
['számlaadatok',[155,241,244,269]],
['közös',[155,241,244,269]],
['describe',[155,241,244,269,627,628,632]],
['invoiceheadtype',[155,264,276,277]],
['fejléc',[155,264,627,641]],
['supplierinfo',[155,264,268,277]],
['supplierinfotype',[155,264,268,408,627,713]],
['customerinfo',[155,264,265,277,627,641,643,653]],
['fiscalrepresentativeinfo',[155,264,266,277]],
['invoicedetail',[155,264,267,277]],
['adata',[155,264,267,463,481,483]],
['batchinvoice',[155,244,269,270]],
['invoicereferencetype',[155,272,276,279]],
['érvénytelenítés',[155,272,276,279,627,647,652,655,900,913,918,919,930,934]],
['cancellation',[155,272,276,279,627,647,648,652,655,726,873,884,892,900,913,918,919,930,934,950,953,956,959]],
['originalinvoicenumber',[155,272,275,279]],
['melyre',[155,272,275,627,647,651]],
['occurs',[155,272,275,296,297,463,514,518,627,647,651]],
['modifywithoutmaster',[155,272,274,279]],
['olyan',[155,272,274]],
['alapszámlára',[155,272,274]],
['hivatkozik',[155,272,274]],
['amelyről',[155,272,274]],
['történni',[155,272,274]],
['references',[155,272,274,305,329,380,381]],
['will',[155,272,274,463,526,531,533]],
['exchanged',[155,272,274]],
['modificationindex',[155,272,273,279,627,647,650,655]],
['referring',[155,272,273,627,647,650]],
['invoicereference',[155,176,271,276,279]],
['invoicehead',[155,176,271,276,277]],
['egészét',[155,276,277,627,652,653]],
['jellemző',[155,276,277,627,652,653]],
['concerning',[155,276,277,627,652,653]],
['whole',[155,276,277,463,592,595,627,652,653,657,660,705,708,726,731,788,789]],
['invoicelines',[155,176,271,276,278]],
['linestype',[155,276,278,302,627,652,654,673]],
['tételek',[155,276,278,302,305,627,652,654,673,675,726,751,753,754,755]],
['appearing',[155,276,278,627,652,654]],
['productfeesummary',[155,176,271,276,281]],
['productfeesummarytype',[155,276,281,370]],
['termékdíjjal',[155,276,281,364,368]],
['kapcsolatos',[155,276,281,361,363,375]],
['összesítő',[155,276,280,281,389,402,405,627,652,656,705,709,712,726,880,881,883,892]],
['charges',[155,276,281,364,366,370,372,373]],
['invoicesummary',[155,176,271,276,280]],
['summarytype',[155,276,280,402,627,652,656,709]],
['cikkszámok',[155,282]],
['itemnumber',[155,189,282,283]],
['lineamountsnormaltype',[155,284,305,306]],
['completed',[155,284,289,305,306,307,627,669,675,679]],
['linenetamountdata',[155,284,286,306]],
['linenetamountdatatype',[155,284,286,299]],
['nettó',[155,284,286,299,300,301,305,332,384,387,392,393,394,423,424,425,726,751,754]],
['linevatrate',[155,284,288,289,292,306,307]],
['vatratetype',[155,284,288,289,292,384,385,398,401,426]],
['adómérték',[155,284,288,289,292,384,385,398,401,417,419,426]],
['adómentesség',[155,284,288,289,292,384,385,398,401,426,432]],
['linevatdata',[155,284,287,306]],
['linevatdatatype',[155,284,287,334]],
['linegrossamountdata',[155,284,285,306]],
['linegrossamountdatatype',[155,284,285,293]],
['lineamountssimplifiedtype',[155,289,305,307]],
['linegrossamountsimplified',[155,289,290,307]],
['linegrossamountsimplifiedhuf',[155,289,291,307]],
['linegrossamountnormal',[155,285,293,294]],
['tartalmú',[155,293,294,299,300,301]],
['különbözeti',[155,293,294,299,300,301]],
['adózás',[155,293,294,299,300,301,426,431]],
['ellenérték',[155,293,294,299,300,301]],
['margin',[155,293,294,299,300,301]],
['scheme',[155,293,294,299,300,301]],
['linegrossamountnormalhuf',[155,285,293,295]],
['linemodificationreferencetype',[155,296,305,319]],
['módosításról',[155,296,305,319]],
['goal',[155,296,305,319]],
['about',[155,296,305,319]],
['changes',[155,296,305,319]],
['updates',[155,296,305,319]],
['linenumberreference',[155,296,297,319]],
['módosítással',[155,296,297]],
['tételének',[155,296,297]],
['linenumber',[155,296,297,303,305,321,627,674,675,682,726,734,735,737]],
['létrehozása',[155,296,297]],
['meglévő',[155,296,297]],
['tételsorok',[155,296,297]],
['számozásának',[155,296,297]],
['folytatásaként',[155,296,297]],
['shall',[155,296,297]],
['increment',[155,296,297]],
['existing',[155,296,297]],
['lines',[155,296,297]],
['lineoperation',[155,296,298,319]],
['módosításának',[155,296,298]],
['linenetamount',[155,286,299,300]],
['összegével',[155,299,300,301]],
['csökkentett',[155,299,300,301]],
['reduced',[155,299,300,301]],
['linenetamounthuf',[155,286,299,301]],
['mergeditemindicator',[155,278,302,304]],
['méretcsökkentés',[155,302,304]],
['miatt',[155,302,304,463,609]],
['összevont',[155,302,304]],
['soradatokat',[155,302,304]],
['contains',[155,302,304]],
['merged',[155,302,304]],
['size',[155,302,304]],
['reduction',[155,302,304]],
['linetype',[155,302,303,305,627,673,674,675]],
['linemodificationreference',[155,303,305,319]],
['referencestootherlines',[155,303,305,329]],
['referencestootherlinestype',[155,305,329,380]],
['hivatkozások',[155,305,329,380,381]],
['tételekre',[155,305,329,380,381,726,733,734]],
['szükséges',[155,305,329,380,381,463,534,535,726,746,748]],
['connected',[155,305,329,380,381]],
['necessary',[155,305,329,380,381,463,592,594,596,615,627,657,660,705,708,900,950,951]],
['advancedata',[155,303,305,309]],
['productcodes',[155,303,305,326,627,674,675,683]],
['productcodestype',[155,305,326,355,627,675,683,692]],
['termékkódok',[155,305,326,355,627,675,683,692]],
['lineexpressionindicator',[155,303,305,318]],
['egysége',[155,305,318,364,367]],
['mértékegységben',[155,305,318]],
['kifejezhető',[155,305,318]],
['expressible',[155,305,318]],
['linenatureindicator',[155,303,305,320,627,674,675,681]],
['linedescription',[155,303,305,316,627,674,675,680]],
['megnevezése',[155,305,316,463,538,544,553,558,627,675,680,900,966,967]],
['unitofmeasure',[155,303,305,330,463,553,561,566,627,674,675,685]],
['kanonikus',[155,305,330,627,675,685]],
['kifejezése',[155,305,330,331,627,675,685,686]],
['specifikáció',[155,305,330]],
['canonical',[155,305,330,627,675,685]],
['representation',[155,305,330,627,675,685]],
['interface',[155,305,330,463,616,726,844,849,850,855,900]],
['specification',[155,305,330]],
['unitofmeasureown',[155,303,305,331,627,674,675,686]],
['literális',[155,305,331,627,675,686]],
['literal',[155,305,331,627,675,686]],
['unitprice',[155,303,305,332,627,674,675,687]],
['esetben',[155,305,332]],
['invoices',[155,305,332]],
['cases',[155,305,332,426,429,463]],
['unitpricehuf',[155,303,305,333,627,674,675,688]],
['linediscountdata',[155,303,305,317]],
['lineamountsnormal',[155,303,305,306]],
['beleértve',[155,305,306]],
['gyűjtőszámlát',[155,305,306]],
['aggregated',[155,305,306]],
['lineamountssimplified',[155,303,305,307]],
['intermediatedservice',[155,303,305,315]],
['közvetített',[155,305,315]],
['intermediated',[155,305,315]],
['article',[155,305,315,627,675,677,723]],
['aggregateinvoicelinedata',[155,303,305,310]],
['newtransportmean',[155,303,305,324]],
['newtransportmeantype',[155,305,324,339]],
['értékesítés',[155,305,324,339,398,399,400,420,421,422,423,424,425,426,435,436,437,627,701,703,704,726,726,883,892,900,913,925,927,932,936]],
['depositindicator',[155,303,305,312]],
['betétdíj',[155,305,312]],
['bottle',[155,305,312]],
['container',[155,305,312]],
['obligatedforproductfee',[155,303,305,325]],
['tételt',[155,305,325]],
['kötelezettség',[155,305,325,361,363,375]],
['terheli',[155,305,323,325]],
['liable',[155,305,323,325]],
['gpcexcise',[155,303,305,314]],
['földgáz',[155,305,314]],
['villamos',[155,305,314]],
['energia',[155,305,314]],
['szén',[155,305,314]],
['adója',[155,305,314]],
['duty',[155,305,314]],
['electricity',[155,305,314]],
['coal',[155,305,314]],
['forints',[155,305,314,364,365,375,376]],
['dieseloilpurchase',[155,303,305,313]],
['netadeclaration',[155,303,305,323]],
['neta',[155,305,323]],
['tv-ben',[155,305,323]],
['adókötelezettség',[155,305,323]],
['alanyát',[155,305,323]],
['ciii',[155,305,323]],
['obligation',[155,305,323]],
['determined',[155,305,323]],
['health',[155,305,323,627,628,631,726,806,807,808,809,810,811,880,881,883,900,913,934,935,936,937]],
['productfeeclause',[155,303,305,327]],
['productfeeclausetype',[155,305,327,361]],
['termékdíjról',[155,305,327,361]],
['szóló',[155,305,327,361]],
['tételre',[155,305,327,361,726,735,736]],
['záradékok',[155,305,327,361]],
['clauses',[155,305,327,361]],
['lineproductfeecontent',[155,303,305,322]],
['productfeedatatype',[155,305,322,364,370,373]],
['tartalmára',[155,305,322]],
['conventionallineinfo',[155,303,305,311]],
['additionallinedata',[155,303,305,308,627,674,675,676,726,734,735,736]],
['linevatamount',[155,287,334,335]],
['linevatamounthuf',[155,287,334,336]],
['anyagszámok',[155,337]],
['materialnumber',[155,190,337,338]],
['brand',[155,324,339,343]],
['gyártmány',[155,339,343]],
['serialnum',[155,324,339,346]],
['alvázszám',[155,339,346]],
['gyári',[155,339,346]],
['gyártási',[155,339,346]],
['chassis',[155,339,346]],
['enginenum',[155,324,339,344]],
['motorszám',[155,339,344]],
['engine',[155,339,344,438,439,440]],
['firstentryintoservice',[155,324,339,345]],
['helyezés',[155,339,345]],
['entry',[155,339,345]],
['into',[155,339,345]],
['vehicletype',[155,339,341,438]],
['szárazföldi',[155,339,341,438]],
['motorised',[155,339,341,438]],
['land',[155,339,341,438]],
['vessel',[155,324,339,342,442]],
['vesseltype',[155,339,342,442]],
['vízi',[155,339,342,442]],
['megrendelésszámok',[155,347]],
['ordernumber',[155,191,347,348]],
['paymentevidencedocumentdatatype',[155,349,370,371]],
['bevallását',[155,349,370,371]],
['igazoló',[155,349,370,371]],
['verifying',[155,349,370,371]],
['declaration',[155,349,370,371]],
['evidencedocumentno',[155,349,351,371]],
['evidencedocumentdate',[155,349,350,371]],
['obligatedname',[155,349,353,371]],
['kötelezett',[155,349,352,353,354]],
['obligator',[155,349,352,353]],
['obligatedaddress',[155,349,352,371]],
['obligatedtaxnumber',[155,349,354,371]],
['obligated',[155,349,354]],
['productcode',[155,326,355,356,627,683,692,693]],
['productcodetype',[155,355,356,357,364,366,627,692,693,694]],
['termék-',[155,357,627,694]],
['szolgáltatáskódokat',[155,357,627,694]],
['different',[155,357,426,429,627,694]],
['productcodecategory',[155,356,357,360,366,627,693,694,697]],
['productcodevalue',[155,356,357,359,366,627,693,694,696]],
['productcodeownvalue',[155,356,357,358,366,627,693,694,695]],
['productfeetakeoverdata',[155,327,361,363]],
['productfeetakeoverdatatype',[155,361,363,375]],
['átvállalásával',[155,361,363,375]],
['connection',[155,361,363,375,463,614]],
['customerdeclaration',[155,327,361,362]],
['productfeecode',[155,322,364,366,373]],
['productfeequantity',[155,322,364,368,373]],
['productfeemeasuringunit',[155,322,364,367,373]],
['productfeerate',[155,322,364,369,373]],
['díjtétele',[155,364,369]],
['productfeeamount',[155,322,364,365,373]],
['összegzés',[155,370]],
['productfeeoperation',[155,281,370,374]],
['visszaigénylésre',[155,370,374]],
['beszállításra',[155,370,374]],
['concerns',[155,370,374]],
['productfeedata',[155,281,370,373]],
['productchargesum',[155,281,370,372]],
['összesen',[155,370,372,900,913,915,917,922,924,928,933,937]],
['paymentevidencedocumentdata',[155,281,370,371]],
['takeoverreason',[155,363,375,377]],
['iránya',[155,375,377]],
['jogszabályi',[155,375,377]],
['alapja',[155,375,377]],
['direction',[155,375,377]],
['legal',[155,375,377]],
['takeoveramount',[155,363,375,376]],
['átvállalt',[155,375,376]],
['taken',[155,375,376]],
['projektszámok',[155,378]],
['projectnumber',[155,192,378,379]],
['referencetootherline',[155,329,380,381]],
['dátumok',[155,382]],
['shippingdate',[155,193,382,383]],
['summarybyvatratetype',[155,384,392,397]],
['mértékek',[155,384]],
['rates',[155,384,392,397,463,599,601]],
['vatrate',[155,384,385,397,398,401,404,417,419,429]],
['vatratenetdata',[155,384,387,397]],
['vatratenetdatatype',[155,384,387,423]],
['adómértékhez',[155,384,386,387,388,420,421,422,423,424,425,435,436,437]],
['vatratevatdata',[155,384,388,397]],
['vatratevatdatatype',[155,384,388,435]],
['vatrategrossdata',[155,384,386,397]],
['vatrategrossdatatype',[155,384,386,420]],
['summarygrossdatatype',[155,389,402,405,627,705,709,712]],
['invoicegrossamount',[155,389,390,405]],
['invoicegrossamounthuf',[155,389,391,405]],
['summarynormaltype',[155,392,402,403]],
['calculation',[155,392,397,398,402,403,404,627,701,709,711]],
['totals',[155,392,397,398,402,403,404,627,701,709,711]],
['summarybyvatrate',[155,392,397,403]],
['Összesítés',[]],
['Áfa-mérték',[]],
['invoicenetamount',[155,392,393,403]],
['invoicenetamounthuf',[155,392,394,403]],
['invoicevatamount',[155,392,395,403]],
['invoicevatamounthuf',[155,392,396,403]],
['summarysimplifiedtype',[155,398,402,404]],
['vatcontentgrossamount',[155,398,399,404,627,701,703,711]],
['adótartalomhoz',[155,398,399,400,627,701,703,704]],
['szolgáltatásnyújtás',[155,398,399,400,420,421,422,423,424,425,435,436,437,627,701,703,704]],
['sale',[155,398,399,400,627,701,703,704,726,874,883]],
['vatcontentgrossamounthuf',[155,398,400,404,627,701,704,711]],
['summarynormal',[155,280,402,403]],
['summarysimplified',[155,280,402,404]],
['summarygrossdata',[155,280,402,405,627,656,709,712]],
['suppliercompanycode',[155,194,406,407]],
['suppliertaxnumber',[155,268,408,416,627,713,721]],
['nyújtása',[155,408,411,627,713,716]],
['supplieraddress',[155,268,408,413,627,713,718]],
['supplierbankaccountnumber',[155,268,408,414,627,713,719]],
['individualexemption',[155,268,408,412,627,713,717]],
['alanyi',[155,408,412,627,713,717]],
['mentes',[155,408,412,627,713,717]],
['individually',[155,408,412,627,713,717]],
['exciselicencenum',[155,268,408,410,627,713,715]],
['adóraktári',[155,408,410,627,713,715]],
['engedélyének',[155,408,410,627,713,715]],
['warehouse',[155,408,410,627,713,715]],
['license',[155,408,410,627,713,715]],
['vatamountmismatchtype',[155,417,426,429]],
['adóalap',[155,417,426,429]],
['felszámított',[155,417,426,428,429]],
['eltérésének',[155,417,426,429]],
['mismatching',[155,417,426,429]],
['levied',[155,417,426,429]],
['adótartalom',[155,417,419]],
['vatrategrossamount',[155,386,420,421]],
['sales',[155,420,421,422,423,424,425,435,436,437,726,881,892,900,913,925,927,932,936]],
['vatrategrossamounthuf',[155,386,420,422]],
['vatratenetamount',[155,387,423,424]],
['vatratenetamounthuf',[155,387,423,425]],
['adómentes',[155,426]],
['vatpercentage',[155,288,292,385,401,426,434,463,592,596,600]],
['mértéke',[155,426,434,463,592,595]],
['vatcontent',[155,288,292,385,401,426,430,463,592,594,600]],
['tartalom',[155,426,430,463,592,594]],
['vatexemption',[155,288,292,385,401,426,432]],
['vatoutofscope',[155,288,292,385,401,426,433]],
['hatályán',[155,426,433]],
['kívüli',[155,426,433]],
['scope',[155,426,433]],
['vatdomesticreversecharge',[155,288,292,385,401,426,431]],
['fixed',[155,426,428,431]],
['fordított',[155,426,431]],
['national',[155,426,431]],
['reverse',[155,426,431]],
['marginschemeindicator',[155,288,292,385,401,426,427]],
['vatamountmismatch',[155,288,292,385,401,426,429]],
['esetei',[155,426,429]],
['novatcharge',[155,288,292,385,401,426,428]],
['nincs',[155,426,428,463,602,604,726,873]],
['charged',[155,426,428]],
['vatratevatamount',[155,388,435,436]],
['vatratevatamounthuf',[155,388,435,437]],
['enginecapacity',[155,341,438,439]],
['hengerűrtartalom',[155,438,439]],
['köbcentiméterben',[155,438,439]],
['capacity',[155,438,439,463,469,472]],
['centimetre',[155,438,439]],
['enginepower',[155,341,438,440]],
['teljesítmény',[155,438,440]],
['kw-ban',[155,438,440]],
['power',[155,438,440,463,609]],
['futott',[155,438,441]],
['kilométerek',[155,438,441]],
['travelled',[155,438,441]],
['distance',[155,438,441]],
['hajó',[155,442,444]],
['hossza',[155,442,444]],
['méterben',[155,442,444,463,490,491]],
['hull',[155,442,444]],
['metre',[155,442,444]],
['activityreferred',[155,342,442,443]],
['sailedhours',[155,342,442,445]],
['hajózott',[155,442,445]],
['sailed',[155,442,445]],
['root',[155,446]],
['amelyet',[155,446,463,521,524,616]],
['kódoltan',[155,446]],
['invoiceapi',[155,446]],
['sémaleíró',[155,446]],
['encoding',[155,446]],
['equivalent',[155,446]],
['definition',[155,446]],
['e-pénztárgépek',[463]],
['kommunikációs',[463,502,504]],
['eseteiben',[463]],
['leírását',[463,494,500,501]],
['e-cash',[463,481,484,485,486,487,488,489,490,491,492,493,494,496,497,498,500,502,503,504,505,506,509,514,516,521,524,526,529,532,538,542,543,546,547,548,549,550,599,601,604,616,620,622,626,627,641,642,645,646,657,664,665,726,744,745,746,747,793,796,819,820,833,835,838,839,840,881,899,900,908,913,941,943,944,950,951]],
['register',[463,481,484,485,486,487,488,489,490,491,492,493,494,496,497,498,500,502,503,504,505,506,507,508,509,521,524,526,529,532,538,542,543,546,547,548,549,550,599,601,604,609,616,620,622,626,627,641,642,645,646,657,664,665,726,744,745,746,747,793,796,819,820,833,835,838,839,840,881,899,900,908,913,941,943,944,950,951]],
['communication',[463,502,504,627,675,685]],
['e-pénztárgép',[463,484,486,487,488,489,490,491,492,493,494,496,497,502,504,505,506,509,512,521,524,526,538,542,543,546,548,549,550,604,620,622,626,627,641,645,646,657,665,726,744,745,746,747,819,820,833,839,840,881,899]],
['communicationdata',[463,627,726,900]],
['square',[463,625]],
['négyzetméter',[463,625]],
['productstatetype',[463,553,560,617]],
['active',[463,617]],
['aktív',[463,617]],
['blockunblocktype',[463,603]],
['blokkolás',[463,603,620]],
['block',[463,494,495,602,603,604,609,620]],
['unblock',[463,602,603,609,620]],
['feloldás',[463,603,620]],
['cashregisterworkstatetype',[463,494,497,604]],
['állapot',[463,469,494,495,496,497,602,604,609,620]],
['működik',[463,602,604]],
['blokkolva',[463,602,604]],
['working',[463,602,604]],
['blocked',[463,602,604,609]],
['blokkolt',[463,602,604,609]],
['állapotban',[463,602,604]],
['hibás',[463,604,726,873,894]],
['aeblockunblockstatetype',[463,494,495,602]],
['blokkolási',[463,494,495,602]],
['gpstype',[463,490,492,493,611]],
['wgs84',[463,490,491,492,493,611]],
['koordináták',[463,611]],
['másodperc',[463,611]],
['coordinates',[463,611]],
['degrees',[463,490,492,493,611]],
['minutes',[463,611]],
['seconds',[463,514,515,611]],
['httpmethodtype',[463,521,522,612]],
['metódusok',[463,612]],
['listája',[463,494,498,519,592,597,599,612,900,964,969,972]],
['methods',[463,612,726,830,831]],
['post',[463,612]],
['incorporationtype',[463,583,584,613]],
['gazdasági',[463,583,584,613]],
['incorporation',[463,583,584,613]],
['organization',[463,613]],
['társaság',[463,613]],
['economical',[463,613]],
['self',[463,613]],
['employed',[463,613]],
['egyéni',[463,613]],
['vállalkozó',[463,613]],
['entrepreneur',[463,613]],
['adószámos',[463,613]],
['magánszemély',[463,613]],
['mobileconnectiontype',[463,469,474,614]],
['Átviteli',[]],
['technológia',[463,469,474,614]],
['mobile',[463,614]],
['technology',[463,469,474,614]],
['percentagetype',[463,592,594,596,615]],
['százalékos',[463,615]],
['százalékjel',[463,592,594,596,615]],
['nélkül',[463,469,471,592,594,596,615]],
['szükség',[463,592,594,596,615,627,657,660,705,708,900,950,951]],
['tizedesponttal',[463,615]],
['tizedesjegyre',[463,615]],
['kerekítve',[463,615]],
['percentage',[463,592,594,595,596,615]],
['without',[463,469,471,592,594,596,615,900,913,914]],
['rounded',[463,615]],
['printmessagetype',[463,616]],
['interfészen',[463,616,900]],
['átadott',[463,616]],
['pénztárzárást',[463,616]],
['követően',[463,599,601,616]],
['nyomtatni',[463,616]],
['nyomtatón',[463,616]],
['print',[463,616,620]],
['printed',[463,616]],
['printer',[463,616]],
['a-za-z0-9aáeéiíoóöőuúüűaÁeÉiÍoÓÖŐuÚÜŰ',[]],
['certificatesigningrequesttype',[463,605]],
['aláírási',[463,605,608]],
['signing',[463,605,607,608]],
['atomiccsrtype',[463,605,726,872]],
['cmscertificatesigningrequesttype',[463,608]],
['certificatetype',[463,606]],
['certificatetypetype',[463,607]],
['autentikációs',[463,607]],
['aláíró',[463,607]],
['querycertificateresulttype',[463,618]],
['lekérdezés',[463,583,618,620]],
['eredménye',[463,618]],
['query',[463,583,618,620]],
['complete',[463,618]],
['kész',[463,618]],
['progress',[463,618]],
['folyamatban',[463,618]],
['registrationnumbertype',[463,502,511,619]],
['Üzembehelyezési',[]],
['servicetype',[463,521,524,620]],
['lista',[463,467,565,581,583,586,620,726,768]],
['pénztárgép',[463,609,620]],
['blocking',[463,620]],
['unblocking',[463,620]],
['download',[463,620]],
['terméktörzs',[463,620]],
['letöltés',[463,620]],
['update',[463,514,516,518,567,574,620]],
['frissítés',[463,620]],
['Üzemeltetés',[]],
['befejezése',[463,620]],
['lekérdezése',[463,620]],
['hello',[463,620]],
['operator',[463,502,509,514,516,526,528,531,620]],
['site',[463,502,509,526,528,531,546,548,620,623]],
['adózói',[463,546,548,565,578,580,581,582,583,586,620,623]],
['adatlekérdezés',[463,620]],
['owner',[463,546,547,550,620,627,641,642,646,726,833,835,840]],
['change',[463,514,515,620,627,657,658,726,793,794,874,900,901,902,903,913,916,917]],
['Átszemélyesítés',[]],
['küldés',[463,620]],
['ellenőrzés',[463,620]],
['regisztráció',[463,620]],
['renew',[463,620]],
['megújítása',[463,620]],
['expired',[463,620]],
['lejárt',[463,620]],
['törzs',[463,620]],
['sound',[463,620]],
['hangfálj',[463,620]],
['file',[463,534,537,620,726,741,742,788,791,819,823,844,847,850,853,890,891]],
['logo',[463,620]],
['logó',[463,620]],
['beküldés',[463,620]],
['machine',[463,620]],
['submission',[463,620]],
['send',[463,620]],
['missing',[463,620]],
['hiányzó',[463,620]],
['beküldése',[463,620]],
['softwareidtype',[463,477,478,567,573,621]],
['program',[463,477,478,479,480,567,568,569,570,571,573,575,576,577,621]],
['0-9a-z\-',[463,621]],
['softwareoperationtype',[463,477,480,567,577,622]],
['epénztárgép',[463,502,507,622]],
['működési',[463,477,480,567,577,622]],
['hardveres',[463,477,480,567,577,622]],
['ae-based',[463,477,480,567,577,622]],
['hardware',[463,477,480,538,539,542,543,567,577,622]],
['android',[463,622]],
['felhős',[463,622]],
['cloud',[463,622]],
['huawei',[463,622]],
['taxpayeraddressclasstype',[463,578,580,623]],
['székhely',[463,623]],
['headquarter',[463,623]],
['telephely',[463,623]],
['office',[463,623]],
['branch',[463,623]],
['fióktelep',[463,623]],
['teaorcodetype',[463,590,591,624]],
['teÁor',[]],
['urltype',[463,521,525,534,535,626]],
['meghívandó',[463,519,521,525,626]],
['szabványos',[463,626]],
['url-je',[463,521,525,626]],
['host',[463,626]],
['port',[463,626]],
['resource',[463,626]],
['standard',[463,490,492,493,626]],
['reqested',[463,626]],
['fiscaldaystatetype',[463,494,499,610]],
['adóügyi',[463,494,499,610,900,908,912]],
['nyitott',[463,610]],
['closed',[463,610]],
['zárt',[463,610]],
['eventcodetype',[463,481,482,609]],
['esemény',[463,481,482,483,609]],
['bekapcsolása',[463,609]],
['shutdown',[463,609]],
['leállása',[463,609]],
['blokkolta',[463,609]],
['magát',[463,609]],
['itself',[463,609]],
['vége',[463,609]],
['küldött',[463,609]],
['megjelenítése',[463,609]],
['nyomtatása',[463,609]],
['nyugtázva',[463,609]],
['display',[463,609]],
['sent',[463,484,485,487,494,498,501,609,726,881,899,900,941,975]],
['confirmed',[463,609]],
['fontos',[463,609]],
['jelentése',[463,609]],
['reporting',[463,609]],
['important',[463,609]],
['events',[463,484,485,609]],
['aeinternalmetric',[463,464,467,468,469,470,496]],
['belső',[463,464,465,466,467,468,469,470,494,498]],
['mérőszámai',[463,464,467,468,469,470]],
['internal',[463,464,465,466,467,468,469,470,494,498]],
['indicators',[463,464,467,468,469,470]],
['aeinternalmetricid',[463,464,465,468]],
['appinfo',[463,464,465,466,469,470,471,472,473,474,475,476,477,478,479,480,481,483,484,485,486,487,488,489,490,491,492,493,494,496,497,498,502,503,504,506,507,508,510,511,512,513,514,515,516,517,518,534,536,537,538,539,540,541,542,543,544,545,551,552,567,568,569,570,571,572,573,574,575,576,577,592,593,594,595,596,597,598,599,600,601,627,628,629,630,631,632,633,634,635,636,637,638,639,640,641,643,644,647,648,649,650,651,652,653,654,655,656,657,658,659,660,661,662,663,664,666,667,668,669,670,671,672,673,674,675,676,677,678,679,680,681,682,683,684,685,686,687,688,689,690,691,692,693,694,695,696,697,698,699,700,701,702,703,704,705,706,707,708,709,710,711,712,713,714,715,716,717,718,719,720,721,726,727,728,729,730,731,732,733,734,735,736,737,738,739,740,746,747,748,749,750,751,752,753,754,755,756,757,758,759,760,761,762,763,764,765,766,767,770,771,772,773,775,776,777,778,779,780,781,782,783,784,785,786,787,788,789,790,792,793,794,795,796,797,798,799,800,801,802,803,804,805,806,807,808,809,810,811,812,813,814,815,816,817,818,819,820,821,822,824,825,826,827,828,829,830,831,832,833,834,836,837,838,844,845,846,847,848,850,851,852,853,854,856,857,858,859,860,861,862,863,864,865,900,901,902,903,904,905,906,907,908,909,910,911,912,913,914,915,916,917,918,919,920,921,922,923,924,925,926,927,928,929,930,931,932,933,934,935,936,937,938,939,940,941,942,943,944,945,946,950,951,952,953,954,955,956,957,958,959,960,961,962,963,964,965,966,967,968,969,970,971,972,973,974]],
['legacymapping',[463,464,465,466,469,470,471,472,473,474,475,476,477,478,479,480,481,483,484,485,486,487,488,489,490,491,492,493,494,496,497,498,502,503,504,506,507,508,510,511,512,513,514,515,516,517,518,534,536,537,538,539,540,541,542,543,544,545,551,552,567,568,569,570,571,572,573,574,575,576,577,592,593,594,595,596,597,598,599,600,601,627,628,629,630,631,632,633,634,635,636,637,638,639,640,641,643,644,647,648,649,650,651,652,653,654,655,656,657,658,659,660,661,662,663,664,666,668,669,670,671,672,673,674,675,676,677,678,679,680,681,682,683,684,685,686,687,688,689,690,691,692,693,694,695,696,697,698,699,700,701,702,703,704,705,706,707,708,709,710,711,712,713,714,715,716,717,718,719,720,721,726,727,728,729,730,731,732,733,734,735,736,737,738,739,740,746,747,748,749,750,751,752,753,754,755,756,757,758,759,760,761,762,763,764,765,766,767,770,771,772,773,775,776,777,778,779,780,781,782,783,784,785,786,787,788,789,790,792,793,794,795,796,797,798,799,800,801,802,803,804,805,806,807,808,809,810,811,812,813,814,815,816,817,818,819,820,821,822,824,825,826,827,828,829,830,831,832,833,834,836,837,838,844,845,846,847,848,850,851,852,853,854,856,857,858,859,860,861,862,863,864,865,900,901,902,903,904,905,906,907,908,909,910,911,912,913,914,915,916,917,918,919,920,921,922,923,924,925,926,927,928,929,930,931,932,933,934,935,936,937,938,939,940,941,942,943,944,945,946,950,951,952,953,954,955,956,957,958,959,960,961,962,963,964,965,966,967,968,969,970,971,972,973,974]],
['mező',[463,464,465,469,470,477,478,479,480,494,496,502,506,510,551,552,567,568,569,570,571,573,575,576,577,592,594,595,596,597,598,599,600,601,627,628,630,631,632,633,637,638,639,640,641,643,644,647,650,652,653,654,655,656,657,658,664,666,668,669,671,673,674,675,676,677,679,681,682,683,686,689,690,691,692,693,694,695,697,698,699,700,701,703,704,705,706,709,711,712,713,714,715,716,717,718,719,726,727,728,729,731,732,733,734,735,736,737,738,739,740,746,748,749,750,756,757,758,760,761,762,763,764,765,767,770,771,772,773,775,776,778,779,780,781,785,786,788,789,790,793,794,796,812,813,816,817,818,819,822,828,829,833,834,838,844,845,846,847,848,850,851,852,853,854,856,859,861,862,863,865,900,901,902,905,908,909,910,913,914,915,916,917,918,919,920,921,922,923,924,925,926,927,928,929,930,931,932,933,934,935,936,937,938,940,950,952,953,954,955,956,957,958,959,960,961,962,963,964,965,966,969,973]],
['mérőszám',[463,464,465,466]],
['aeinternalmetricvalue',[463,464,466,468]],
['aeinternalmetriclisttype',[463,467,469,470]],
['aestatetype',[463,469,494,496]],
['freestorage',[463,469,472,496]],
['ae-ben',[463,469,472,476,502,507,508,538,544,545]],
['működő',[463,469,472,476]],
['adattárolón',[463,469,472]],
['lévő',[463,469,472,502,507,508,538,544,545]],
['szabad',[463,469,472]],
['tároló',[463,469,472]],
['kapacitás',[463,469,472]],
['kbyte',[463,469,472]],
['free',[463,469,472]],
['storage',[463,469,472]],
['device',[463,469,472]],
['signalstrength',[463,469,476,496]],
['modem',[463,469,476,502,507,538,544,545]],
['mért',[463,469,476]],
['hálózati',[463,469,476]],
['térerőt',[463,469,476]],
['dbm-ig',[463,469,476]],
['terjedő',[463,469,476]],
['skálán',[463,469,476]],
['negatív',[463,469,476,627,657,660,705,708]],
['számmal',[463,469,471,476]],
['ábrázolva',[463,469,476]],
['network',[463,469,476]],
['signal',[463,469,476]],
['strength',[463,469,476]],
['measured',[463,469,476]],
['operating',[463,469,476,590,591]],
['negative',[463,469,476,627,657,660,705,708]],
['scale',[463,469,476]],
['negativeinteger',[463,469,476]],
['batterylevel',[463,469,471,496]],
['töltöttség',[463,469,471]],
['vezető',[463,469,471,900,950,951]],
['nullák',[463,469,471]],
['leading',[463,469,471,900,950,951]],
['zeros',[463,469,471,900,950,951]],
['mobileconnection',[463,469,474,496]],
['legutóbbi',[463,469,474,475,567,574]],
['bejelentkezés',[463,469,474,475]],
['átviteli',[463,463,469,474,614]],
['transmission',[463,469,474]],
['during',[463,469,474,475]],
['provider',[463,469,475,496]],
['infrastruktúrát',[463,469,475]],
['biztosító',[463,469,475]],
['fizikai',[463,469,475]],
['mobilszolgáltató',[463,469,475]],
['telekom',[463,469,475]],
['telenor',[463,469,475]],
['vodafone',[463,469,475]],
['mobil',[463,469,475]],
['physical',[463,469,475]],
['infrastructure',[463,469,475]],
['0|1|2|3',[463,469,475]],
['gsmcell',[463,469,473,496]],
['legutóbb',[463,469,473,502,511]],
['cella',[463,469,473]],
['cell',[463,469,473]],
['hardwaretechnicalinfotype',[463,502,506,538]],
['műszaki',[463,484,488,502,506,538]],
['jellemzői',[463,484,488,502,506,538]],
['hw-based',[463,502,506,538]],
['features',[463,502,506,538]],
['aename',[463,506,538,540]],
['gyártói',[463,538,540,543]],
['típusnév',[463,538,540]],
['manufacturer',[463,538,540,543,553,558]],
['aehardwareversion',[463,506,538,539]],
['hardver',[463,538,539,543]],
['aesoftware',[463,506,538,541]],
['softwaretype',[463,502,503,538,541,567]],
['ae-n',[463,538,541]],
['futó',[463,502,503,526,529,538,541]],
['modemname',[463,506,538,544]],
['kiolvasott',[463,502,507,508,538,544,545]],
['modemsoftwareversion',[463,506,538,545]],
['szoftververziója',[463,538,545]],
['cashregistername',[463,506,538,543]],
['típusmegjelölése',[463,538,543]],
['designation',[463,538,543]],
['cashregisterhardwareversion',[463,506,538,542]],
['hardververziója',[463,538,542]],
['cashregistereventtype',[463,481,484,485]],
['e-pénztárgépben',[463,481,484,485,494,498]],
['bekövetkezett',[463,481,484,485]],
['események',[463,481,484,485]],
['naplózás',[463,481]],
['eventcode',[463,481,482,485]],
['eventdescription',[463,481,483,485]],
['descriptive',[463,481,483]],
['cashregisterpositiontype',[463,484,486,490]],
['földrajzi',[463,484,486,490,492,493]],
['geographical',[463,484,486,490]],
['latitude',[463,486,490,492]],
['nillable',[463,490,492,493]],
['szélessége',[463,490,492]],
['fokban',[463,490,492,493]],
['előjelet',[463,490,492,493]],
['használva',[463,490,492,493]],
['using',[463,490,492,493,726,802,805]],
['longitude',[463,486,490,493]],
['hosszúsága',[463,490,493]],
['height',[463,486,490,491]],
['tengerszint',[463,490,491]],
['feletti',[463,490,491]],
['magassága',[463,490,491]],
['altitude',[463,490,491]],
['above',[463,490,491]],
['level',[463,490,491,553,555]],
['metres',[463,490,491]],
['cashregisterstatetype',[463,484,487,494]],
['rendszerállapot',[463,484,487,494]],
['statisztika',[463,484,487,494]],
['statistics',[463,484,487,494]],
['cashregisterworkstate',[463,487,494,497]],
['aeblockunblockstate',[463,487,494,495]],
['fiscaldaystate',[463,487,494,499]],
['állapota',[463,494,499]],
['lastsentrecordcounter',[463,487,494,501]],
['utoljára',[463,494,500,501]],
['recordcounter',[463,494,500,501,627,657,664,726,793,796,833,838,905,910,938,961,973]],
['lásd',[463,494,500,501,627,666,667,726,844,845,846,850,851,852]],
['dokumentáció',[463,494,500,501]],
['„nav',[463,494,500,501]],
['ellenőrző',[463,494,500,501,567,572,627,657,663,709,710,726,833,837,896]],
['képzése”',[463,494,500,501]],
['fejezetében',[463,494,500,501]],
['generate',[463,494,500,501]],
['verification',[463,494,500,501,567,572]],
['chapter',[463,494,500,501]],
['development',[463,494,500,501]],
['lastrecordcounter',[463,487,494,500]],
['e-pénztárgépen',[463,494,500,502,503,526,529,532,546,547,599,601,627,641,642,657,664,726,793,796,833,835,838]],
['aestate',[463,487,494,496]],
['errors',[463,484,487,494,498]],
['cashregisterstate',[463,484,487,494,498]],
['rekord',[463,494,498]],
['küldése',[463,494,498]],
['jelentkezett',[463,494,498]],
['hibák',[463,484,487,494,498]],
['kódjainak',[463,494,498]],
['have',[463,494,498]],
['occurred',[463,494,498]],
['since',[463,494,498]],
['record',[463,494,498]],
['cashregistertechnicalinfotype',[463,484,488,502]],
['cashregistersoftware',[463,488,502,503]],
['details',[463,502,503,526,528,531,546,548]],
['imei',[463,488,502,507]],
['imsi',[463,488,502,508]],
['epénztárgépben',[463,502,508]],
['operatorsite',[463,488,502,509]],
['operatorsitetype',[463,502,509,546]],
['üzemeltetői',[463,502,509,526,528,531]],
['üzemeltetési',[463,502,509,526,528,531,546,548,549,627,641,645,657,665,726,833,839]],
['hely',[463,502,509,526,528,531,546,548]],
['vattype',[463,502,513,597,598,599]],
['aktuális',[463,484,487,488,502,513,526,527,528,529,530]],
['Áfa-tábla',[]],
['current',[463,484,487,488,502,505,513,526,527,528,529,530,627,675,678,726,892]],
['table',[463,502,513,526,530,533]],
['registrationnumber',[463,488,502,511]],
['üzembehelyezési',[463,463,502,511,619]],
['latest',[463,502,511,512]],
['installation',[463,502,511]],
['communicationprotocolversion',[463,488,502,504]],
['protokoll',[463,502,504]],
['protocol',[463,502,504]],
['schemaversion',[463,488,502,512]],
['legfrissebb',[463,502,512]],
['aminek',[463,502,512]],
['üzenetek',[463,502,512,900]],
['megfelelnek',[463,502,512]],
['epdprocessidentifiers',[463,488,502,505]],
['epdprocessidentifierstype',[463,502,505,526]],
['jelenlegi',[463,502,505,526]],
['állapotát',[463,502,505,526]],
['előállító',[463,502,505,526]],
['végrehajtott',[463,502,505,526,527,528,529,530]],
['utasítások',[463,502,505,526]],
['valamint',[463,502,505,526]],
['legutolsó',[463,502,505,526]],
['átvett',[463,502,505,526]],
['időzített',[463,502,505,526]],
['folyamat',[463,502,505,526,527,528,529,530,531,532,533,726,898]],
['azonosítói',[463,502,505,526]],
['process',[463,502,505,526,527,528,529,530,531,532,533,726,898]],
['executed',[463,502,505,526,527,528,529,530,531,532,533]],
['instructions',[463,502,505,526]],
['produce',[463,502,505,526]],
['received',[463,502,505,526]],
['timed',[463,502,505,526]],
['hardwaretechnicalinfo',[463,488,502,506]],
['posassignedbankaccounts',[463,488,502,510]],
['posassignedbankaccountlisttype',[463,502,510,551]],
['terminálhoz',[463,502,510,551,552]],
['rendelt',[463,502,510,551,552]],
['assigned',[463,502,510,551,552]],
['terminal',[463,502,510,551,552]],
['cashregistertimeupdatetype',[463,484,489,514]],
['állítás',[463,514]],
['oldtime',[463,489,514,518]],
['amikor',[463,514,518]],
['átállítás',[463,514,518]],
['régi',[463,514,518]],
['bekövetkezik',[463,514,518]],
['newtime',[463,489,514,517]],
['beállított',[463,514,517]],
['setting',[463,484,489,514,517]],
['changeduration',[463,489,514,515]],
['diszkréten',[463,514,515]],
['változtatja',[463,514,515]],
['időt',[463,514,515]],
['hanem',[463,514,515]],
['időtávon',[463,514,515]],
['gyorsítja',[463,514,515]],
['lassítja',[463,514,515]],
['átmenet',[463,514,515]],
['másodpercben',[463,514,515]],
['discretely',[463,514,515]],
['accelerates',[463,514,515]],
['slows',[463,514,515]],
['down',[463,514,515]],
['interval',[463,514,515]],
['transition',[463,514,515]],
['changemode',[463,489,514,516]],
['időállítás',[463,514,516]],
['1-gsm',[463,514,516]],
['szinkronizáció',[463,514,516]],
['2-szervizes',[463,514,516]],
['beavatkozás',[463,514,516]],
['3-Üzemeltető',[]],
['módosítva',[463,514,516]],
['4-számítógép',[463,514,516]],
['e-pénztárgépeknél',[463,514,516]],
['számítógép',[463,514,516]],
['órájához',[463,514,516]],
['szinkronizálva',[463,514,516]],
['5-egyéb',[463,514,516]],
['automatikus',[463,514,516]],
['synchronisation',[463,514,516]],
['2-intervention',[463,514,516]],
['3-adjusted',[463,514,516]],
['4-for',[463,514,516]],
['computer-based',[463,514,516]],
['registers',[463,514,516]],
['synchronized',[463,514,516]],
['computer',[463,514,516]],
['5-other',[463,514,516]],
['automatic',[463,514,516]],
['1|2|3|4|5',[463,514,516]],
['operatorsitevalidfrom',[463,509,546,548]],
['érvényesség',[463,463,546,548,553,562,563]],
['kezdete',[463,546,548]],
['start',[463,546,548]],
['shop',[463,509,546,549,627,641,645,653,657,665,726,833,839,841,842,843,905,910,938,961,973]],
['shoptype',[463,546,549,627,641,645,657,665,726,833,839,841]],
['taxpayertype',[463,546,547,550,627,641,642,646,726,833,835,840,866]],
['üzemeltető',[463,546,547,550,627,641,642,646,726,833,835,840]],
['üzemanyagkúton',[463,463,546,546,547,550,627,627,641,641,642,646,726,726,833,833,835,840]],
['kétvállalkozós',[463,546,547,550,627,641,642,646,726,833,835,840]],
['üzemanyag',[463,546,550,627,641,646,726,833,840]],
['tulajdonos',[463,546,550,627,641,646,726,833,840]],
['fuel',[463,546,547,550,627,628,630,641,642,646,726,802,804,833,835,840,880,881,883,900,913,930,931,932,933]],
['two-operator',[463,546,547,550,627,641,642,646,726,833,835,840]],
['well',[463,546,547,550,627,641,642,646,726,833,835,840]],
['cotaxpayer',[463,509,546,547,627,641,642,653,726,833,835,905,910,938,961,973]],
['Üzemanyagkúton',[]],
['posassignedbankaccountnumber',[463,510,551,552]],
['appsoftwaretype',[463,477]],
['softwareid',[463,477,478,503,541,567,573]],
['softwareoperation',[463,477,480,503,541,567,577]],
['softwaremainversion',[463,477,479,503,541,567,575]],
['főverziója',[463,477,479,567,575]],
['main',[463,477,479,567,575,627,666,668,689,690,698,699,726,819]],
['softwarename',[463,503,541,567,576]],
['softwarehash',[463,503,541,567,572]],
['algoritmussal',[463,567,572]],
['kiszámított',[463,567,572]],
['calculated',[463,567,572]],
['algorithm',[463,567,572]],
['softwarelastupdatetime',[463,503,541,567,574]],
['frissítésének',[463,567,574]],
['softwaredevname',[463,503,541,567,570]],
['fejlesztőjének',[463,567,568,569,570,571]],
['softwaredevcontact',[463,503,541,567,568]],
['elérhetősége',[463,567,568]],
['contact',[463,567,568]],
['softwaredevcountrycode',[463,503,541,567,569]],
['iso-3166',[463,567,569]],
['alpha2',[463,567,569]],
['országkódja',[463,567,569]],
['softwaredevtaxnumber',[463,503,541,567,571]],
['taxpayeraddressitemtype',[463,578,581,582]],
['címsor',[463,578,581,582]],
['taxpayeraddressclass',[463,578,580,582]],
['taxpayeraddress',[463,578,579,582]],
['címadatai',[463,578,579]],
['productitemtype',[463,553,565,566]],
['adattípus',[463,553]],
['dtszkid',[463,553,556,566]],
['dtszk',[463,553,556]],
['productid',[463,553,557,566]],
['terméken',[463,553,557]],
['feltüntetett',[463,553,557,726,797,800]],
['productname',[463,553,559,566]],
['productmanufacturer',[463,553,558,566]],
['gyártó',[463,553,558]],
['validfrom',[463,553,562,566]],
['Érvényesség',[]],
['-tól',[463,553,562]],
['validity',[463,553,562,563]],
['validto',[463,553,563,566]],
['categorycode',[463,553,554,566]],
['kategória',[463,553,554,555,599,601]],
['categorynamelevel4',[463,553,555,566]],
['szint',[463,553,555]],
['taxpayeraddresslisttype',[463,581,583,586]],
['taxpayeraddressitem',[463,581,582,586]],
['productlisttype',[463,565]],
['productitem',[463,565,566]],
['keresési',[463,565,566]],
['feltételnek',[463,565,566]],
['megfelelt',[463,565,566]],
['termékeket',[463,565,566]],
['eredménylista',[463,565,566]],
['match',[463,565,566]],
['criteria',[463,565,566]],
['taxpayerdatatype',[463,583]],
['taxpayername',[463,547,550,583,587,642,646,726,835,840,866,869]],
['taxpayershortname',[463,547,550,583,588,642,646,726,835,840,866,870]],
['rövidített',[463,583,588]],
['shortened',[463,583,588]],
['taxnumberdetail',[463,583,585]],
['vatgroupmembership',[463,583,589]],
['tagsága',[463,583,589]],
['membership',[463,583,589]],
['taxpayeraddresslist',[463,583,586]],
['teaorcodelisttype',[463,590]],
['üzlet',[463,590,591,726,841,842,843]],
['tevékenységei',[463,590]],
['activities',[463,590,591]],
['teaorcode',[463,590,591]],
['tevékenysége',[463,590,591]],
['endpointslisttype',[463,519]],
['endpointok',[463,519]],
['endpoints',[463,519,520]],
['called',[463,519,521,524]],
['endpointtype',[463,519,520,521]],
['endpoint',[463,519,520,521,522,523]],
['hívás',[463,519,520]],
['paraméterei',[463,519,520]],
['parameters',[463,484,488,519,520]],
['call',[463,519,520,521,522]],
['positiveinteger',[463,521,523]],
['hívásának',[463,521,522,523]],
['sorrendje',[463,521,523]],
['kezdődően',[463,521,523]],
['kisebb',[463,521,523]],
['sorszámú',[463,521,523]],
['endpointtal',[463,521,523]],
['először',[463,521,523]],
['meghívni',[463,521,523]],
['requested',[463,521,523,525]],
['starting',[463,521,523]],
['lower',[463,521,523]],
['httpmethod',[463,520,521,522]],
['metódusa',[463,521,522]],
['hívjon',[463,521,524]],
['vatgrouptype',[463,592,599,600]],
['kulcsok',[463,592,595,599]],
['collectorcode',[463,592,593,600,627,669,670,679,701,702,711,726,750,751,752]],
['collectorcodetype',[463,592,593,627,669,670,701,702,726,751,752,875]],
['jele',[463,592,593,726,751,752]],
['karakteren',[463,592,593,726,751,752,797,799,900,950,951]],
['collector',[463,592,593,627,669,670,701,702,726,749,750,751,752,753,754,755,875]],
['érvényes',[463,592,596]],
['Áfa-kulcs',[]],
['százalékban',[463,592,594,596]],
['kifejezve',[463,592,594,595,596]],
['tizedespontot',[463,592,594,596]],
['alkalmazva',[463,592,594,596]],
['valid',[463,592,596]],
['kulcshoz',[463,592,594]],
['vatlabel',[463,592,595,600]],
['egyes',[463,592,595]],
['számban',[463,592,595]],
['százalékjellel',[463,592,595]],
['each',[463,592,595]],
['vatlisttype',[463,597]],
['vatvalidfrom',[463,513,598,599,601]],
['azon',[463,599,601]],
['időpont',[463,599,601]],
['amit',[463,599,601]],
['kulcsokat',[463,599,601]],
['címkéket',[463,599,601]],
['alkalmazni',[463,599,601]],
['labels',[463,599,601]],
['must',[463,599,601]],
['vatgroup',[463,513,598,599,600]],
['cashregisterinfotype',[463,484]],
['cashregisterevent',[463,484,485]],
['naplója',[463,484,485]],
['eseményeket',[463,484,485]],
['beküldeni',[463,484,485]],
['occured',[463,484,485,487]],
['previous',[463,484,485,487]],
['cashregistertechnicalinfo',[463,484,488]],
['állapotának',[463,484,487,488]],
['megfelelően',[463,484,487,488]],
['illetve',[463,484,487]],
['tekintetében',[463,484,487]],
['cashregisterposition',[463,484,486]],
['műholdas',[463,484,486]],
['helymeghatározásra',[463,484,486]],
['alkalmas',[463,484,486]],
['applicable',[463,484,486]],
['cashregistertimeupdate',[463,484,489]],
['állításra',[463,484,489]],
['került',[463,484,489]],
['óraállítás',[463,484,489]],
['körülményeiről',[463,484,489]],
['szolgáltatni',[463,484,489]],
['been',[463,484,489]],
['currentvatprocessid',[463,505,526,530]],
['processidentifiertype',[463,526,527,528,529,530,531,532,533,726,898]],
['táblát',[463,526,530,533]],
['érvényre',[463,526,527,528,529,530,531,532,533]],
['juttató',[463,526,527,528,529,530,531,532,533]],
['utasítás',[463,526,527,528,529,530,531,532,533]],
['instruction',[463,526,527,528,529,530,531,532,533]],
['enforces',[463,526,527,528,529,530,532]],
['nextvatprocessid',[463,505,526,533]],
['következő',[463,526,531,533]],
['jövőben',[463,526,531,532,533]],
['végrehajtandó',[463,526,531,532,533]],
['future',[463,526,531,532,533]],
['enforce',[463,526,531,533]],
['next',[463,526,531,532,533]],
['currentoperatorsiteprocessid',[463,505,526,528]],
['nextoperatorsiteprocessid',[463,505,526,531]],
['currentsoftwareprocessid',[463,505,526,529]],
['verziót',[463,526,529,532]],
['running',[463,526,529]],
['nextsoftwareprocessid',[463,505,526,532]],
['következően',[463,526,532]],
['futtatandó',[463,526,532]],
['currentaeblockunblockstateprocessid',[463,505,526,527]],
['állapotot',[463,526,527]],
['firmwareslicetype',[463,534]],
['letöltöthető',[463,534,537]],
['downloadable',[463,534,537]],
['firmwareslicenumber',[463,534,537]],
['firmwarehash',[463,534,536]],
['letöltött',[463,534,536]],
['segítségével',[463,534,536]],
['ellenőrizhető',[463,534,536]],
['letöltötés',[463,534,536]],
['sérült',[463,534,536]],
['downloaded',[463,534,535,536]],
['equal',[463,534,536]],
['firmwaredownloadurl',[463,534,535]],
['letöltéséhez',[463,534,535]],
['groupidentificationnumber',[547,550,642,646,726,835,840,866,867]],
['shopname',[549,645,665,726,839,841,842]],
['shopshortname',[549,645,665,726,839,841,843]],
['európai',[627,675,677,723]],
['gyártmánykód',[627,675,677,723]],
['european',[627,675,677,723]],
['numbering',[627,675,677,723]],
['documentdatatype',[627,628,689,691,698,700]],
['változott',[627,628,634,657,659,726,788,792,793,795,819,821]],
['struktúra',[627,628,634,657,659,726,788,792,793,795,819,821,900,913]],
['documentissuedate',[627,628,633,691,700]],
['documentdatetype',[627,628,633,726,770,774,882]],
['issuestartdatetime',[627,628,636,657,662,691,700,726,833,836,905,910,938,961,973]],
['nyitásának',[627,628,636,657,662,726,833,836]],
['opening',[627,628,636,657,662,726,833,836,900,908,909]],
['healthfundinfo',[627,628,631,691,700]],
['healthfundinfotype',[627,628,631,726,806]],
['egészségkártya',[627,628,631,726,806,808,880]],
['információk',[627,628,630,631,632]],
['found',[627,628,631]],
['fuelcardinfo',[627,628,630,691,700]],
['fuelcardinfotype',[627,628,630,726,802]],
['Üzemanyagkártya',[]],
['consumesummarynumber',[627,628,629,691,700]],
['fogyasztásösszesítő',[627,628,629]],
['consume',[627,628,629,726,880,881]],
['documenttype',[627,628,632,652]],
['documentdetailtype',[627,637,641,644]],
['documentcategory',[627,637,639,644]],
['documentcategorytype',[627,637,639,726,880]],
['amending',[627,637,639]],
['paymentinstruments',[627,637,640,644]],
['instrumenttype',[627,637,640,657,658,726,793,794,812,900,901,902,908,909,913,916]],
['fizetőeszközök',[627,637,640,726,828,900,913,917]],
['instruments',[627,637,640,726,828]],
['additionaldocumentdata',[627,637,638,644]],
['documentheadtype',[627,641,652,653]],
['documentdetail',[627,641,644,653]],
['documentreferencetype',[627,647,652,655]],
['originaldocumentnumber',[627,647,651,655]],
['documentunboundedindextype',[627,647,650,726,885]],
['cancellationreason',[627,647,648,655]],
['cancellationreasontype',[627,647,648,726,873]],
['sztornózás',[627,647,648,726,873]],
['modificationreason',[627,647,649,655]],
['modificationreasontype',[627,647,649,726,894]],
['documentreference',[627,632,652,655]],
['documenthead',[627,632,652,653]],
['documentlines',[627,632,652,654]],
['dokumentumon',[627,652,654,675,685,686,705,708,726,731,732,833,834,900,964,965,966,967,968,969,972]],
['documentsummary',[627,632,652,656]],
['lineamountsdocumenttype',[627,669,675,679]],
['értékek',[627,669,670]],
['linegrossamountdocument',[627,669,671,679]],
['linegrossamountdocumenthuf',[627,669,672,679]],
['eancode',[627,674,675,677]],
['eantype',[627,675,677,726,886]],
['lineamountsdocument',[627,674,675,679]],
['itemnature',[627,674,675,678]],
['itemnaturetype',[627,675,678,726,892]],
['otherdocumentcoredatatype',[627,689]],
['üzleti',[33,88,627,666,668,689,690,691,698,699,700,726,819]],
['metadata',[627,666,668,689,690,698,699]],
['metadatatype',[627,666,668,689,690,698,699,726,819]],
['otherdocumentdata',[627,689,691]],
['types',[627,692]],
['receiptcoredatatype',[627,698]],
['receiptdata',[627,698,700]],
['invoicecoredatatype',[627,666]],
['simplefied',[627,666]],
['base64-ben',[627,666,667,726,844,845,846,848,850,851,852,854]],
['kódolt',[627,666,667,726,844,845,846,848,850,851,852,854]],
['tartalma',[627,666,667,726,844,845,846,850,851,852]],
['encoded',[627,666,667,726,844,845,846,848,850,851,852,854]],
['summarydocumenttype',[627,701,709,711]],
['documentgrossamount',[627,705,706,712]],
['documentroundingamount',[627,657,660,705,708,712]],
['kerekítés',[627,657,660,705,708,900,913,914]],
['számolva',[627,657,660,705,708,726,797,800]],
['előjellel',[627,657,660,705,708,900,901,907]],
['ilyen',[627,657,660,705,708]],
['rounding',[627,657,660,705,708,900,901,907,913,914,915,940]],
['summarydocument',[627,656,709,711]],
['ntcacontrolcode',[627,656,657,663,709,710,726,833,837,905,910,938,961,973]],
['ntcacontrolcodetype',[627,657,663,709,710,726,833,837,896]],
['bizonylaton',[627,657,660,663,709,710,726,833,837,896]],
['invoicecontroldatatype',[627,657]],
['bejegyzés',[627,657,664,726,793,796,833,838]],
['sorszámozva',[627,657,664,726,793,796,833,838]],
['szigorúan',[627,657,664,726,793,796,833,838]],
['monoton',[627,657,664,726,793,796,833,838]],
['növekvő',[627,657,664,726,793,796,833,838]],
['benne',[627,657,664,726,793,796,833,838]],
['kihagyás',[627,657,664,726,793,796,833,838]],
['numbered',[627,657,664,726,793,796,833,838]],
['strictly',[627,657,664,726,793,796,833,838]],
['monotonic',[627,657,664,726,793,796,833,838]],
['ascending',[627,657,664,726,793,796,833,838]],
['skips',[627,657,664,726,793,796,833,838]],
['balancechange',[627,657,658,726,793,794,900,901,902,913,916,942,944]],
['fióktartalom',[627,657,658,726,793,794,900,901,902,913,914,915]],
['változásának',[627,657,658,726,793,794,900,901,902]],
['balance',[627,657,658,726,793,794,874,899,900,901,902,908,913,914,915,916,917,941,943]],
['fuelcardnumber',[630,726,802,804]],
['authorizationnumber',[630,726,802,803]],
['healthfundname',[631,726,806,811]],
['healthfundaddress',[631,726,806,807]],
['healthfundcode',[631,726,806,809]],
['healthfundmembernumber',[631,726,806,810]],
['healthfundcardnumber',[631,726,806,808]],
['cashhufamount',[640,658,726,794,812,815,902,909,916]],
['foreigncurrency',[640,658,726,794,812,816,902,909,916]],
['cardpaymentamount',[640,658,726,794,812,814,902,909,916]],
['szepcardamount',[640,658,726,794,812,818,902,909,916]],
['aframount',[640,658,726,794,812,813,902,909,916]],
['otherpayment',[640,658,726,794,812,817,902,909,916]],
['documentoperation',[668,690,699,726,819,822]],
['apnumber',[668,690,699,726,744,745,746,747,819,820]],
['electronicinvoicehash',[668,690,699,726,819,823]],
['apnumbertype',[726,744,745,746,747,819,820,871]],
['customerappeventcodetype',[726,876]],
['applikáció',[726,876]],
['eseménykód',[726,876]],
['digit4type',[726,879,900,950,951]],
['file512kbinarytype',[726,741,742,890]],
['bináris',[726,741,742,890]],
['fájl',[726,741,742,890,891]],
['512kb',[726,890]],
['binary',[726,741,742,890]],
['fileextensiontype',[726,741,743,891]],
['kiterjesztés',[726,741,743,891]],
['Ügyfél',[]],
['elállása',[726,873,894]],
['kezelői',[726,873]],
['téves',[726,873]],
['bevitel',[726,873,874]],
['incorrect',[726,873]],
['fizetőeszköz',[726,812,825,826,827,828,829,830,873,874,900,901,904]],
['készleten',[726,873]],
['stock',[726,873]],
['bizonylattípus',[726,873]],
['kibocsátása',[726,873]],
['sikertelen',[726,873]],
['használat',[726,873]],
['unsuccesfull',[726,873]],
['ügyfél',[726,726,873,873,894]],
['próbavásárlás',[726,873]],
['test',[726,873]],
['cashpaymenttitletype',[726,874,900,901,904]],
['pénztári',[726,874,900,901,904]],
['befizetés-kifizetés',[726,874]],
['csere',[726,874,900,901,904]],
['jogcímei',[726,874,900,901,904]],
['váltópénz',[726,874]],
['coin',[726,874]],
['pénztáros',[726,874]],
['pénzfelvétel',[726,874]],
['withdraw',[726,874]],
['cashier',[726,874]],
['díjbeszedés',[726,874]],
['collection',[726,874]],
['sorsjegy',[726,874]],
['eladás',[726,874]],
['lottery',[726,874]],
['ticket',[726,874]],
['pénztár',[726,874,883]],
['hiány',[726,874]],
['deficit',[726,874]],
['borravaló',[726,874]],
['befizetés',[726,874,900,901,904]],
['fölözés',[726,874]],
['skimming',[726,874]],
['levétel',[726,874]],
['kivét',[726,874]],
['take',[726,874]],
['ajándékkártya',[726,874]],
['gift',[726,874]],
['bérkifizetés',[726,874]],
['salary',[726,874]],
['munkabér',[726,874]],
['pre-payment',[726,874]],
['postaköltség',[726,874]],
['postal',[726,874]],
['rezsi',[726,874]],
['costs',[726,874]],
['Áruvásárlás',[]],
['purchasing',[726,874]],
['záróösszeg',[726,874]],
['kifizetés',[726,874,900,901,904]],
['készpénzfelvétel',[726,874]],
['cashback',[726,874]],
['gyüjtő',[726,875]],
['|n|tam|aam|eam|atk|tra|sec|art|ant|eue|ho',[726,875]],
['fogyasztási',[726,880,881,883,892]],
['consumption',[726,880,881,883,892]],
['deferred',[726,880,881,883]],
['szállodai',[726,880,881,883]],
['átterhelés',[726,880,883]],
['hotel',[726,880,881,883]],
['milyen',[726,881,899]],
['bizonylatot',[726,881]],
['class',[726,881,899]],
['what',[726,881,899]],
['Üzemanyagkártyás',[]],
['értékesítési',[726,881]],
['egészségkártyás',[726,881,883,900,913,934,935,936,937]],
['fund',[726,806,807,808,809,810,811,881,883]],
['átterhelési',[726,881]],
['simplifiedinvoice',[726,881]],
['normalinvoice',[726,881]],
['nn|nz',[726,883]],
['napnyitás',[726,883]],
['jelentés',[726,768,769,770,883,899,900,941,945,950]],
['napi',[726,749,750,751,753,754,755,768,769,770,883,899,900,913,918,919,920,921,922,923,924,925,926,927,928,929,941,945,950,952,953,954,955,956,957,958,959,960]],
['bármely',[726,883]],
['ascii',[726,883]],
['nagybetű',[726,883]],
['open',[726,883,899,900,908,941,943]],
['cashflow',[726,768,769,770,883,892,899,900,913,923,926,950]],
['cashregister',[726,883,899]],
['daily',[726,749,750,751,753,754,755,768,769,770,883,899,900,913,918,919,920,921,922,923,924,925,926,927,928,929,941,945,950,952,953,954,955,956,957,958,959,960]],
['uppercase',[726,883]],
['letter',[726,883]],
['documentoperationtype',[726,819,822,884]],
['documentum',[726,884]],
['dokumentumot',[726,884]],
['storno',[726,884]],
['érvénytelenítése',[726,884]],
['encryptedsymmetricinitialvectortype',[726,887]],
['kiegészítő',[726,887]],
['részének',[726,887,888]],
['titkosításához',[726,887,888]],
['szimmetrikus',[726,887,888]],
['symmetric',[726,887,888,900,947,948]],
['encrypt',[726,887,888]],
['part',[726,866,867,868,887,888]],
['encryptedsymmetrickeytype',[726,888]],
['Értékesítés',[]],
['sztornó',[726,892]],
['engedmény',[726,892]],
['üzletpolitikai',[726,892]],
['kedvezmény',[726,892]],
['non-business',[726,892]],
['policy',[726,892]],
['preferences',[726,892]],
['felár',[726,892]],
['extra',[726,892]],
['göngyöleg',[726,892]],
['visszaváltás',[726,892]],
['returnable',[726,892]],
['packing',[726,892]],
['visszáru',[726,892,894]],
['returned',[726,892]],
['vevőt',[726,892]],
['érintő',[726,892]],
['tranzakció',[726,892]],
['involving',[726,892]],
['defective',[726,894]],
['vásárlástól',[726,894]],
['customer’s',[726,894]],
['right',[726,894]],
['rescission',[726,894]],
['szep',[726,897]],
['szÉp',[]],
['kártya',[726,812,818,897]],
['azonnali',[726,897]],
['immediate',[726,812,813,897]],
['riportot',[726,899]],
['cashregisteropenbalance',[726,899]],
['pénztárnyitás',[726,899,900,908,941,943]],
['dailycashflow',[726,899]],
['receiptadditional',[726,727,730]],
['otherdocumentadditional',[726,727,730]],
['invoiceadditional',[726,727,730]],
['additionaldata',[726,727,730,731,732,789,833,834,905,910,938,961,973]],
['receiptcore',[726,727,730]],
['otherdocumentcore',[726,727,730]],
['invoicecore',[726,727,730]],
['attachmenttype',[726,741,788,791]],
['csatoltmány',[726,741]],
['attachment',[726,741,788,791,949]],
['filebinary',[726,741,742,791]],
['csatolt',[726,741,742,743,788,791]],
['attached',[726,741,742,743,788,791]],
['fileextension',[726,741,743,791]],
['például',[726,741,743]],
['example',[726,741,743]],
['additionalheadtype',[726,731,788,789]],
['egészére',[726,731,788,789]],
['additionallinestype',[726,733,788,790]],
['tételeire',[726,733,788,790]],
['additionalline',[726,733,734,790]],
['additionallinetype',[726,733,734,735]],
['basicereceiptrequesttype',[726,744]],
['enyugta',[726,744,746]],
['specifikus',[726,744,746]],
['általános',[33,52,95,96,97,98,726,744,746,900,901,905,908,910,913,938,950,961,969,973]],
['basicereceiptresponsetype',[726,746]],
['callbackrequired',[726,746,748]],
['visszahívás',[726,746,748]],
['callback',[726,746,748]],
['commercecollectorlisttype',[726,749,770,772]],
['gyüjtők',[726,749]],
['commerce',[726,749,750,751,770,771,772]],
['collectors',[726,749,770,772]],
['commercialcollector',[726,749,750,772]],
['commercecollectortype',[726,749,750,751]],
['forgalom',[726,749,750,751,770,771,900,913,933,937,950,963]],
['gyűjtők',[726,749,750,751,770,772]],
['collectorgrossamount',[726,750,751,753]],
['gyűjtőbe',[726,751,753,754,755]],
['összértéke',[726,751,753,754,755]],
['collectornetamount',[726,750,751,754]],
['collectorvatamount',[726,750,751,755]],
['dailycashflowdetailtype',[726,768,769,770,900,950,955,956,957]],
['commercecollectorlist',[726,769,770,772,955,956,957]],
['bontás',[726,770,772]],
['count',[726,769,770,773,955,956,957]],
['fulfillmentdate',[726,769,770,774,955,956,957]],
['bizonylatok',[726,770,774]],
['fulfillment',[726,770,774]],
['dailycashflowdetaillisttype',[726,768,900,950,952,953,954,958,959,960]],
['dailycashflowdetail',[726,768,769,952,953,954,958,959,960]],
['documentadditionaldatatype',[726,788,900,947,949]],
['tájékoztatási',[726,788]],
['additionalhead',[726,788,789,949]],
['dokumentumhoz',[726,788,791]],
['additionallines',[726,788,790,949]],
['documentcontroldatatype',[726,793]],
['rész',[726,793]],
['foreigncurrencytype',[726,797,812,816]],
['valutában',[726,797,798,812,816]],
['befizetett',[726,797,812,816]],
['összeg',[726,797,812,816]],
['currencyamount',[726,797,798,816]],
['valuta',[726,797,798,800,801]],
['valutanem',[726,797,799]],
['nagybetűvel',[726,797,799]],
['egységének',[726,797,801]],
['kifejezett',[726,797,801]],
['currencyhufamount',[726,797,800,816]],
['összegének',[726,797,800]],
['árfolyamon',[726,797,800]],
['legalább',[726,802,804]],
['négy',[726,802,804,900,950,951]],
['engedélyezési',[726,802,803]],
['azonosítószám',[726,802,803,806,810]],
['authorisation',[726,802,803]],
['rendszám',[726,802,805]],
['kizárólag',[726,802,805]],
['betűket',[726,802,805]],
['számokat',[726,802,805]],
['feltüntetve',[726,802,805]],
['egészségpénztár',[726,806,807,809,811]],
['tagszáma',[726,806,810]],
['egészségpénztári',[726,806,810]],
['forint',[726,812,815]],
['bankkártyás',[726,812,814]],
['bevételek',[726,812,813,814,817,818,900,913,928]],
['otherpaymenttype',[726,812,817,825]],
['fizetőeszközben',[726,812,817]],
['megszerzett',[726,812,817]],
['lenyomata',[726,819,823,844,847,850,853]],
['otherpaymentcode',[726,817,825,826]],
['ajÁnd|hŰsÉg|smart|gÖngy|kupon|egyeb-',[]],
['otherpaymenthufamount',[726,817,825,827]],
['egyenlege',[726,825,827,900,913,933,937]],
['paymentinstrumentstype',[726,828]],
['paymentinstrument',[726,828,829]],
['paymentinstrumenttype',[726,828,829,830]],
['documentpaymentmethod',[726,829,830,832]],
['módok',[726,830,831,832]],
['documentpaymentamount',[726,829,830,831]],
['reportheadertype',[726,833,900,901,905,908,910,913,938,950,961,969,973]],
['boriték',[726,844,847,848,850,851,853,854]],
['tipus',[726,844,850]],
['signed',[726,844,850]],
['verziója',[726,844,849,850,855]],
['coredocument',[726,844,846]],
['customerdocument',[726,844,845]],
['aláirása',[726,844,848,850,854]],
['corereport',[726,850,852,900,975]],
['customerreport',[726,850,851,900,976]],
['payer',[726,866,868,869,870]],
['rövid',[726,841,843,866,870]],
['short',[726,841,843,866,870]],
['Áfa-csoport',[]],
['tagság',[726,866,867,868]],
['tagi',[726,866,868]],
['Üzlet',[]],
['péntárgép',[900]],
['beküldendő',[900]],
['formátumát',[900]],
['meghatározó',[900]],
['defining',[900]],
['messages',[900]],
['cashflowreporttype',[900,901,941,942]],
['reportheader',[900,901,905,908,910,913,938,942,943,944,945,946,950,961,969,973]],
['riportoknál',[900,901,905,908,910,913,938,950,961,969,973]],
['fejadatok',[900,901,905,908,910,913,938,950,961,969,973]],
['reports',[900,901,905,908,910,913,938,950,961,969,973]],
['reportnumber',[900,901,906,908,911,913,939,942,943,944,945,946,950,962,969,974]],
['bizonylatszám',[900,901,906,908,911,913,939,950,962,969,974]],
['paymenttitlecode',[900,901,904,942]],
['changeamount',[900,901,903,942]],
['bizonylathoz',[900,901,903]],
['visszajáró',[900,901,903]],
['roundingdifferenceamount',[900,901,907,942]],
['kerekítési',[900,901,907]],
['pozitív',[900,901,907]],
['szempontjából',[900,901,907]],
['számolt',[900,901,907]],
['difference',[900,901,907]],
['cashregisteropenbalancereporttype',[900,908,941,943]],
['taxationday',[900,908,912,943]],
['openbalance',[900,908,909,943]],
['nyitó',[900,908,909]],
['pénzkészlet',[900,908,909]],
['cashregisterreporttype',[900,913,941,944]],
['dailyrevenuereceipt',[900,913,927,944]],
['nyugtával',[900,913,919,927]],
['bizonylatolt',[900,913,919,925,927]],
['dailyrevenueinvoice',[900,913,925,944]],
['számlával',[900,913,925]],
['dailyrevenueother',[900,913,926,944]],
['befizetéssel',[900,913,926]],
['járó',[900,913,923,926]],
['incoming',[900,913,926]],
['dailyrevenuesum',[900,913,928,944]],
['income',[900,913,928]],
['dailycancelledreceipt',[900,913,919,944]],
['dailycancelledinvoice',[900,913,918,944]],
['dailypaymentother',[900,913,923,944]],
['kifizetéssel',[900,913,923]],
['outgoing',[900,913,923]],
['dailypaymentsum',[900,913,924,944]],
['kiadások',[900,913,924]],
['expense',[900,913,924]],
['dailymodificationreceipt',[900,913,921,944]],
['módosítások',[900,913,920,921,922,950,954,957,960]],
['dailymodificationinvoice',[900,913,920,944]],
['dailymodificationsum',[900,913,922,944]],
['balanceamountnorounding',[900,913,914,944]],
['nélküli',[900,913,914]],
['roundingamountsum',[900,913,940,944]],
['kerekítések',[900,913,940]],
['balanceamountwidthrounding',[900,913,915,944]],
['kerekített',[900,913,915]],
['fizetőeszközönként',[900,913,916]],
['balancechangesum',[900,913,917,944]],
['dailytipamount',[900,913,929,944]],
['felszolgálói',[900,913,929]],
['fuelcardsales',[900,913,932,944]],
['fuelcardmodifications',[900,913,931,944]],
['fuelcardcancellations',[900,913,930,944]],
['fuelcardtransactionsum',[900,913,933,944]],
['transactions',[900,913,933]],
['healthfundsales',[900,913,936,944]],
['healthfundmodifications',[900,913,935,944]],
['healthfundcancellations',[900,913,934,944]],
['healthfundtransactionsum',[900,913,937,944]],
['dailycashflowreporttype',[900,941,945,950]],
['closurecounter',[900,945,950,951]],
['zárás',[900,950,951]],
['nullákkal',[900,950,951]],
['feltöltve',[900,950,951]],
['four',[900,950,951]],
['dailyreceipt',[900,945,950,955]],
['nyugták',[900,950,955]],
['dailyreceiptcancellation',[900,945,950,956]],
['érvénytelenítések',[900,950,953,956,959]],
['dailyreceiptmodification',[900,945,950,957]],
['dailysimplifiedinvoice',[900,945,950,958]],
['számlák',[900,950,952,958]],
['dailysimplifiedinvoicecancellation',[900,945,950,959]],
['dailysimplifiedinvoicemodification',[900,945,950,960]],
['dailyinvoice',[900,945,950,952]],
['dailyinvoicecancellation',[900,945,950,953]],
['dailyinvoicemodification',[900,945,950,954]],
['sumcommerceamount',[900,945,950,963]],
['göngyölített',[900,950,963]],
['consolidated',[900,950,963]],
['otherreporttype',[900,941,946,969]],
['otherdocument',[900,946,969,970]],
['otherdocumentdescription',[900,946,969,971]],
['leírás',[900,969,971]],
['otherreportdatalist',[900,946,969,972]],
['otherreportdatalisttype',[900,964,969,972]],
['otherreportdata',[900,964,965,972]],
['otherreportdatatype',[900,964,965,966]],
['otherdocumentdataname',[900,965,966,967]],
['otherdocumentdatavalue',[900,965,966,968]],
['corereporttype',[900,941,975]],
['nav-nak',[900,941,975]],
['átadandó',[900,941,947,975,976]],
['cashflowreport',[900,941,942,975]],
['cashregisteropenbalancereport',[900,941,943,975]],
['cashregisterreport',[900,941,944,975]],
['dailycashflowreport',[900,941,945,975]],
['otherreport',[900,941,946,975]],
['customerreporttype',[900,947,976]],
['vevőnek',[900,947,976]],
['decryptkey',[900,947,948,976]],
['független',[900,947,948]],
['szimetrikus',[900,947,948]],
['kititkosításához',[900,947,948]],
['independent',[900,947,948]],
['encryption',[900,947,948]],
['reportadditional',[900,947,949,976]],
['riportban',[900,947,949]],
['ahhoz',[900,947,949]],
['részére',[900,947,949]]
 ];
 return w;
}
        