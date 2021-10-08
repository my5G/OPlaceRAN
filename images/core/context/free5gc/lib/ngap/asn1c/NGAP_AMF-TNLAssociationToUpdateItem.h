/*
 * Generated by asn1c-0.9.29 (http://lionet.info/asn1c)
 * From ASN.1 module "NGAP-PDU-Contents"
 * 	found in "../support/r14.4.0/38413-e40.asn"
 * 	`asn1c -pdu=all -fcompound-names -findirect-choice -fno-include-deps`
 */

#ifndef	_NGAP_AMF_TNLAssociationToUpdateItem_H_
#define	_NGAP_AMF_TNLAssociationToUpdateItem_H_


#include <asn_application.h>

/* Including external dependencies */
#include "NGAP_CPTransportLayerInformation.h"
#include "NGAP_TNLAssociationUsage.h"
#include "NGAP_TNLAssociationWeightFactor.h"
#include <constr_SEQUENCE.h>

#ifdef __cplusplus
extern "C" {
#endif

/* Forward declarations */
struct NGAP_ProtocolExtensionContainer;

/* NGAP_AMF-TNLAssociationToUpdateItem */
typedef struct NGAP_AMF_TNLAssociationToUpdateItem {
	NGAP_CPTransportLayerInformation_t	 aMF_TNLAssociationAddress;
	NGAP_TNLAssociationUsage_t	*tNLAssociationUsage;	/* OPTIONAL */
	NGAP_TNLAssociationWeightFactor_t	*tNLAssociationWeightFactor;	/* OPTIONAL */
	struct NGAP_ProtocolExtensionContainer	*iE_Extensions;	/* OPTIONAL */
	/*
	 * This type is extensible,
	 * possible extensions are below.
	 */
	
	/* Context for parsing across buffer boundaries */
	asn_struct_ctx_t _asn_ctx;
} NGAP_AMF_TNLAssociationToUpdateItem_t;

/* Implementation */
extern asn_TYPE_descriptor_t asn_DEF_NGAP_AMF_TNLAssociationToUpdateItem;

#ifdef __cplusplus
}
#endif

#endif	/* _NGAP_AMF_TNLAssociationToUpdateItem_H_ */
#include <asn_internal.h>
