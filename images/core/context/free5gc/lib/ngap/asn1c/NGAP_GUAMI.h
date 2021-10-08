/*
 * Generated by asn1c-0.9.29 (http://lionet.info/asn1c)
 * From ASN.1 module "NGAP-IEs"
 * 	found in "../support/r14.4.0/38413-e40.asn"
 * 	`asn1c -pdu=all -fcompound-names -findirect-choice -fno-include-deps`
 */

#ifndef	_NGAP_GUAMI_H_
#define	_NGAP_GUAMI_H_


#include <asn_application.h>

/* Including external dependencies */
#include "NGAP_PLMNIdentity.h"
#include "NGAP_AMFRegionID.h"
#include "NGAP_AMFSetID.h"
#include "NGAP_AMFPointer.h"
#include <constr_SEQUENCE.h>

#ifdef __cplusplus
extern "C" {
#endif

/* Forward declarations */
struct NGAP_ProtocolExtensionContainer;

/* NGAP_GUAMI */
typedef struct NGAP_GUAMI {
	NGAP_PLMNIdentity_t	 pLMNIdentity;
	NGAP_AMFRegionID_t	 aMFRegionID;
	NGAP_AMFSetID_t	 aMFSetID;
	NGAP_AMFPointer_t	 aMFPointer;
	struct NGAP_ProtocolExtensionContainer	*iE_Extensions;	/* OPTIONAL */
	/*
	 * This type is extensible,
	 * possible extensions are below.
	 */
	
	/* Context for parsing across buffer boundaries */
	asn_struct_ctx_t _asn_ctx;
} NGAP_GUAMI_t;

/* Implementation */
extern asn_TYPE_descriptor_t asn_DEF_NGAP_GUAMI;
extern asn_SEQUENCE_specifics_t asn_SPC_NGAP_GUAMI_specs_1;
extern asn_TYPE_member_t asn_MBR_NGAP_GUAMI_1[5];

#ifdef __cplusplus
}
#endif

#endif	/* _NGAP_GUAMI_H_ */
#include <asn_internal.h>
