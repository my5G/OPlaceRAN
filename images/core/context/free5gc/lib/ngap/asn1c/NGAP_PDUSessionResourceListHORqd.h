/*
 * Generated by asn1c-0.9.29 (http://lionet.info/asn1c)
 * From ASN.1 module "NGAP-PDU-Contents"
 * 	found in "../support/r14.4.0/38413-e40.asn"
 * 	`asn1c -pdu=all -fcompound-names -findirect-choice -fno-include-deps`
 */

#ifndef	_NGAP_PDUSessionResourceListHORqd_H_
#define	_NGAP_PDUSessionResourceListHORqd_H_


#include <asn_application.h>

/* Including external dependencies */
#include <asn_SEQUENCE_OF.h>
#include <constr_SEQUENCE_OF.h>

#ifdef __cplusplus
extern "C" {
#endif

/* Forward declarations */
struct NGAP_ProtocolIE_SingleContainer;

/* NGAP_PDUSessionResourceListHORqd */
typedef struct NGAP_PDUSessionResourceListHORqd {
	A_SEQUENCE_OF(struct NGAP_ProtocolIE_SingleContainer) list;
	
	/* Context for parsing across buffer boundaries */
	asn_struct_ctx_t _asn_ctx;
} NGAP_PDUSessionResourceListHORqd_t;

/* Implementation */
extern asn_TYPE_descriptor_t asn_DEF_NGAP_PDUSessionResourceListHORqd;

#ifdef __cplusplus
}
#endif

#endif	/* _NGAP_PDUSessionResourceListHORqd_H_ */
#include <asn_internal.h>
