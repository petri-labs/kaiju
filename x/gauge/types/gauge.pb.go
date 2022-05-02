// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: merlion/gauge/v1/gauge.proto

package types

import (
	fmt "fmt"
	_ "github.com/cosmos/cosmos-sdk/types"
	github_com_cosmos_cosmos_sdk_types "github.com/cosmos/cosmos-sdk/types"
	_ "github.com/gogo/protobuf/gogoproto"
	proto "github.com/gogo/protobuf/proto"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

type Checkpoint struct {
	// unix timestamp
	Timestamp uint64                                 `protobuf:"varint,1,opt,name=timestamp,proto3" json:"timestamp,omitempty"`
	Amount    github_com_cosmos_cosmos_sdk_types.Int `protobuf:"bytes,2,opt,name=amount,proto3,customtype=github.com/cosmos/cosmos-sdk/types.Int" json:"amount"`
}

func (m *Checkpoint) Reset()         { *m = Checkpoint{} }
func (m *Checkpoint) String() string { return proto.CompactTextString(m) }
func (*Checkpoint) ProtoMessage()    {}
func (*Checkpoint) Descriptor() ([]byte, []int) {
	return fileDescriptor_978538bfbd181b7d, []int{0}
}
func (m *Checkpoint) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Checkpoint) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Checkpoint.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Checkpoint) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Checkpoint.Merge(m, src)
}
func (m *Checkpoint) XXX_Size() int {
	return m.Size()
}
func (m *Checkpoint) XXX_DiscardUnknown() {
	xxx_messageInfo_Checkpoint.DiscardUnknown(m)
}

var xxx_messageInfo_Checkpoint proto.InternalMessageInfo

func (m *Checkpoint) GetTimestamp() uint64 {
	if m != nil {
		return m.Timestamp
	}
	return 0
}

type Reward struct {
	// reward coin denom
	Denom string `protobuf:"bytes,1,opt,name=denom,proto3" json:"denom,omitempty"`
	// reward amount per second
	Rate github_com_cosmos_cosmos_sdk_types.Int `protobuf:"bytes,2,opt,name=rate,proto3,customtype=github.com/cosmos/cosmos-sdk/types.Int" json:"rate"`
	// reward finish unix time
	FinishTime uint64 `protobuf:"varint,3,opt,name=finish_time,json=finishTime,proto3" json:"finish_time,omitempty"`
	// unix time of last reward update
	LastUpdateTime uint64 `protobuf:"varint,4,opt,name=last_update_time,json=lastUpdateTime,proto3" json:"last_update_time,omitempty"`
	// cumulative reward per voting ticket
	CumulativePerTicket github_com_cosmos_cosmos_sdk_types.Int `protobuf:"bytes,5,opt,name=cumulative_per_ticket,json=cumulativePerTicket,proto3,customtype=github.com/cosmos/cosmos-sdk/types.Int" json:"cumulative_per_ticket"`
}

func (m *Reward) Reset()         { *m = Reward{} }
func (m *Reward) String() string { return proto.CompactTextString(m) }
func (*Reward) ProtoMessage()    {}
func (*Reward) Descriptor() ([]byte, []int) {
	return fileDescriptor_978538bfbd181b7d, []int{1}
}
func (m *Reward) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Reward) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Reward.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Reward) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Reward.Merge(m, src)
}
func (m *Reward) XXX_Size() int {
	return m.Size()
}
func (m *Reward) XXX_DiscardUnknown() {
	xxx_messageInfo_Reward.DiscardUnknown(m)
}

var xxx_messageInfo_Reward proto.InternalMessageInfo

func (m *Reward) GetDenom() string {
	if m != nil {
		return m.Denom
	}
	return ""
}

func (m *Reward) GetFinishTime() uint64 {
	if m != nil {
		return m.FinishTime
	}
	return 0
}

func (m *Reward) GetLastUpdateTime() uint64 {
	if m != nil {
		return m.LastUpdateTime
	}
	return 0
}

type UserReward struct {
	// reward coin denom
	Denom string `protobuf:"bytes,1,opt,name=denom,proto3" json:"denom,omitempty"`
	// ve id
	VeId uint64 `protobuf:"varint,2,opt,name=ve_id,json=veId,proto3" json:"ve_id,omitempty"`
	// last claim unix time
	LastClaimTime uint64 `protobuf:"varint,3,opt,name=last_claim_time,json=lastClaimTime,proto3" json:"last_claim_time,omitempty"`
	// cumulative reward per voting ticket
	CumulativePerTicket github_com_cosmos_cosmos_sdk_types.Int `protobuf:"bytes,4,opt,name=cumulative_per_ticket,json=cumulativePerTicket,proto3,customtype=github.com/cosmos/cosmos-sdk/types.Int" json:"cumulative_per_ticket"`
}

func (m *UserReward) Reset()         { *m = UserReward{} }
func (m *UserReward) String() string { return proto.CompactTextString(m) }
func (*UserReward) ProtoMessage()    {}
func (*UserReward) Descriptor() ([]byte, []int) {
	return fileDescriptor_978538bfbd181b7d, []int{2}
}
func (m *UserReward) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *UserReward) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_UserReward.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *UserReward) XXX_Merge(src proto.Message) {
	xxx_messageInfo_UserReward.Merge(m, src)
}
func (m *UserReward) XXX_Size() int {
	return m.Size()
}
func (m *UserReward) XXX_DiscardUnknown() {
	xxx_messageInfo_UserReward.DiscardUnknown(m)
}

var xxx_messageInfo_UserReward proto.InternalMessageInfo

func (m *UserReward) GetDenom() string {
	if m != nil {
		return m.Denom
	}
	return ""
}

func (m *UserReward) GetVeId() uint64 {
	if m != nil {
		return m.VeId
	}
	return 0
}

func (m *UserReward) GetLastClaimTime() uint64 {
	if m != nil {
		return m.LastClaimTime
	}
	return 0
}

func init() {
	proto.RegisterType((*Checkpoint)(nil), "merlion.gauge.v1.Checkpoint")
	proto.RegisterType((*Reward)(nil), "merlion.gauge.v1.Reward")
	proto.RegisterType((*UserReward)(nil), "merlion.gauge.v1.UserReward")
}

func init() { proto.RegisterFile("merlion/gauge/v1/gauge.proto", fileDescriptor_978538bfbd181b7d) }

var fileDescriptor_978538bfbd181b7d = []byte{
	// 407 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xac, 0x52, 0x4d, 0x6b, 0xdb, 0x40,
	0x10, 0xb5, 0x52, 0xd9, 0xe0, 0x29, 0x6d, 0xc3, 0x26, 0x05, 0x11, 0x82, 0x1c, 0x7c, 0x08, 0xbe,
	0x58, 0x8b, 0xe9, 0x3f, 0x70, 0xa0, 0x25, 0xb7, 0x22, 0x92, 0x4b, 0x2f, 0x62, 0x25, 0x4d, 0xe5,
	0xc5, 0xda, 0x5d, 0xb1, 0xbb, 0x52, 0x3f, 0x7e, 0x45, 0xfb, 0x9b, 0x7a, 0xc9, 0x31, 0xc7, 0xd2,
	0x43, 0x28, 0xf6, 0x1f, 0x29, 0xda, 0x55, 0x49, 0x4e, 0x39, 0x84, 0x9c, 0xb4, 0xf3, 0xe6, 0xcd,
	0x7b, 0x7a, 0xc3, 0xc0, 0xa9, 0x40, 0x5d, 0x73, 0x25, 0x69, 0xc5, 0xda, 0x0a, 0x69, 0xb7, 0xf2,
	0x8f, 0xa4, 0xd1, 0xca, 0x2a, 0x72, 0x38, 0x74, 0x13, 0x0f, 0x76, 0xab, 0x93, 0xe3, 0x4a, 0x55,
	0xca, 0x35, 0x69, 0xff, 0xf2, 0xbc, 0x93, 0xb8, 0x50, 0x46, 0x28, 0x43, 0x73, 0x66, 0x7a, 0x8d,
	0x1c, 0x2d, 0x5b, 0xd1, 0x42, 0x71, 0xe9, 0xfb, 0x73, 0x0d, 0x70, 0xb1, 0xc1, 0x62, 0xdb, 0x28,
	0x2e, 0x2d, 0x39, 0x85, 0xa9, 0xe5, 0x02, 0x8d, 0x65, 0xa2, 0x89, 0x82, 0xb3, 0x60, 0x11, 0xa6,
	0xf7, 0x00, 0x79, 0x0f, 0x13, 0x26, 0x54, 0x2b, 0x6d, 0x74, 0x70, 0x16, 0x2c, 0xa6, 0xeb, 0xe4,
	0xe6, 0x6e, 0x36, 0xfa, 0x73, 0x37, 0x3b, 0xaf, 0xb8, 0xdd, 0xb4, 0x79, 0x52, 0x28, 0x41, 0x07,
	0x3b, 0xff, 0x59, 0x9a, 0x72, 0x4b, 0xed, 0xb7, 0x06, 0x4d, 0x72, 0x29, 0x6d, 0x3a, 0x4c, 0xcf,
	0x7f, 0x1e, 0xc0, 0x24, 0xc5, 0x2f, 0x4c, 0x97, 0xe4, 0x18, 0xc6, 0x25, 0x4a, 0x25, 0x9c, 0xd9,
	0x34, 0xf5, 0x05, 0x59, 0x43, 0xa8, 0x99, 0xc5, 0x27, 0xda, 0xb8, 0x59, 0x32, 0x83, 0x97, 0x9f,
	0xb9, 0xe4, 0x66, 0x93, 0xf5, 0x01, 0xa2, 0x17, 0x2e, 0x0c, 0x78, 0xe8, 0x8a, 0x0b, 0x24, 0x0b,
	0x38, 0xac, 0x99, 0xb1, 0x59, 0xdb, 0x94, 0xcc, 0xa2, 0x67, 0x85, 0x8e, 0xf5, 0xba, 0xc7, 0xaf,
	0x1d, 0xec, 0x98, 0x39, 0xbc, 0x2d, 0x5a, 0xd1, 0xd6, 0xcc, 0xf2, 0x0e, 0xb3, 0x06, 0x75, 0x66,
	0x79, 0xb1, 0x45, 0x1b, 0x8d, 0x9f, 0xf4, 0x7f, 0x47, 0xf7, 0x62, 0x1f, 0x51, 0x5f, 0x39, 0xa9,
	0xf9, 0xaf, 0x00, 0xe0, 0xda, 0xa0, 0x7e, 0x74, 0x2f, 0x47, 0x30, 0xee, 0x30, 0xe3, 0xa5, 0x5b,
	0x4c, 0x98, 0x86, 0x1d, 0x5e, 0x96, 0xe4, 0x1c, 0xde, 0xb8, 0x1c, 0x45, 0xcd, 0xb8, 0x78, 0x18,
	0xf6, 0x55, 0x0f, 0x5f, 0xf4, 0xe8, 0xe3, 0x29, 0xc2, 0x67, 0x4b, 0xb1, 0xfe, 0x70, 0xb3, 0x8b,
	0x83, 0xdb, 0x5d, 0x1c, 0xfc, 0xdd, 0xc5, 0xc1, 0x8f, 0x7d, 0x3c, 0xba, 0xdd, 0xc7, 0xa3, 0xdf,
	0xfb, 0x78, 0xf4, 0x69, 0xf9, 0x40, 0x76, 0x38, 0xdd, 0xe5, 0x77, 0x25, 0xf1, 0x7f, 0x41, 0xbf,
	0x0e, 0x77, 0xee, 0x1c, 0xf2, 0x89, 0xbb, 0xce, 0x77, 0xff, 0x02, 0x00, 0x00, 0xff, 0xff, 0xd3,
	0x00, 0xca, 0x46, 0x05, 0x03, 0x00, 0x00,
}

func (m *Checkpoint) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Checkpoint) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *Checkpoint) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	{
		size := m.Amount.Size()
		i -= size
		if _, err := m.Amount.MarshalTo(dAtA[i:]); err != nil {
			return 0, err
		}
		i = encodeVarintGauge(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0x12
	if m.Timestamp != 0 {
		i = encodeVarintGauge(dAtA, i, uint64(m.Timestamp))
		i--
		dAtA[i] = 0x8
	}
	return len(dAtA) - i, nil
}

func (m *Reward) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Reward) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *Reward) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	{
		size := m.CumulativePerTicket.Size()
		i -= size
		if _, err := m.CumulativePerTicket.MarshalTo(dAtA[i:]); err != nil {
			return 0, err
		}
		i = encodeVarintGauge(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0x2a
	if m.LastUpdateTime != 0 {
		i = encodeVarintGauge(dAtA, i, uint64(m.LastUpdateTime))
		i--
		dAtA[i] = 0x20
	}
	if m.FinishTime != 0 {
		i = encodeVarintGauge(dAtA, i, uint64(m.FinishTime))
		i--
		dAtA[i] = 0x18
	}
	{
		size := m.Rate.Size()
		i -= size
		if _, err := m.Rate.MarshalTo(dAtA[i:]); err != nil {
			return 0, err
		}
		i = encodeVarintGauge(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0x12
	if len(m.Denom) > 0 {
		i -= len(m.Denom)
		copy(dAtA[i:], m.Denom)
		i = encodeVarintGauge(dAtA, i, uint64(len(m.Denom)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *UserReward) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *UserReward) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *UserReward) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	{
		size := m.CumulativePerTicket.Size()
		i -= size
		if _, err := m.CumulativePerTicket.MarshalTo(dAtA[i:]); err != nil {
			return 0, err
		}
		i = encodeVarintGauge(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0x22
	if m.LastClaimTime != 0 {
		i = encodeVarintGauge(dAtA, i, uint64(m.LastClaimTime))
		i--
		dAtA[i] = 0x18
	}
	if m.VeId != 0 {
		i = encodeVarintGauge(dAtA, i, uint64(m.VeId))
		i--
		dAtA[i] = 0x10
	}
	if len(m.Denom) > 0 {
		i -= len(m.Denom)
		copy(dAtA[i:], m.Denom)
		i = encodeVarintGauge(dAtA, i, uint64(len(m.Denom)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintGauge(dAtA []byte, offset int, v uint64) int {
	offset -= sovGauge(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *Checkpoint) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.Timestamp != 0 {
		n += 1 + sovGauge(uint64(m.Timestamp))
	}
	l = m.Amount.Size()
	n += 1 + l + sovGauge(uint64(l))
	return n
}

func (m *Reward) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Denom)
	if l > 0 {
		n += 1 + l + sovGauge(uint64(l))
	}
	l = m.Rate.Size()
	n += 1 + l + sovGauge(uint64(l))
	if m.FinishTime != 0 {
		n += 1 + sovGauge(uint64(m.FinishTime))
	}
	if m.LastUpdateTime != 0 {
		n += 1 + sovGauge(uint64(m.LastUpdateTime))
	}
	l = m.CumulativePerTicket.Size()
	n += 1 + l + sovGauge(uint64(l))
	return n
}

func (m *UserReward) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Denom)
	if l > 0 {
		n += 1 + l + sovGauge(uint64(l))
	}
	if m.VeId != 0 {
		n += 1 + sovGauge(uint64(m.VeId))
	}
	if m.LastClaimTime != 0 {
		n += 1 + sovGauge(uint64(m.LastClaimTime))
	}
	l = m.CumulativePerTicket.Size()
	n += 1 + l + sovGauge(uint64(l))
	return n
}

func sovGauge(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozGauge(x uint64) (n int) {
	return sovGauge(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *Checkpoint) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowGauge
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: Checkpoint: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Checkpoint: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Timestamp", wireType)
			}
			m.Timestamp = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGauge
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Timestamp |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Amount", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGauge
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthGauge
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthGauge
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.Amount.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipGauge(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthGauge
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *Reward) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowGauge
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: Reward: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Reward: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Denom", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGauge
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthGauge
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthGauge
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Denom = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Rate", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGauge
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthGauge
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthGauge
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.Rate.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 3:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field FinishTime", wireType)
			}
			m.FinishTime = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGauge
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.FinishTime |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 4:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field LastUpdateTime", wireType)
			}
			m.LastUpdateTime = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGauge
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.LastUpdateTime |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 5:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field CumulativePerTicket", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGauge
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthGauge
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthGauge
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.CumulativePerTicket.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipGauge(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthGauge
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *UserReward) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowGauge
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: UserReward: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: UserReward: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Denom", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGauge
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthGauge
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthGauge
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Denom = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field VeId", wireType)
			}
			m.VeId = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGauge
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.VeId |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 3:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field LastClaimTime", wireType)
			}
			m.LastClaimTime = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGauge
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.LastClaimTime |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field CumulativePerTicket", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGauge
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthGauge
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthGauge
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.CumulativePerTicket.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipGauge(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthGauge
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipGauge(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowGauge
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowGauge
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowGauge
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthGauge
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupGauge
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthGauge
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthGauge        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowGauge          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupGauge = fmt.Errorf("proto: unexpected end of group")
)
