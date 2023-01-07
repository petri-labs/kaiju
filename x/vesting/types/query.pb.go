// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: kaiju/vesting/v1/query.proto

package types

import (
	context "context"
	fmt "fmt"
	query "github.com/cosmos/cosmos-sdk/types/query"
	_ "github.com/gogo/protobuf/gogoproto"
	grpc1 "github.com/gogo/protobuf/grpc"
	proto "github.com/gogo/protobuf/proto"
	_ "google.golang.org/genproto/googleapis/api/annotations"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
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

type QueryAirdropsRequest struct {
	// pagination defines an optional pagination for the request.
	Completed  bool               `protobuf:"varint,1,opt,name=completed,proto3" json:"completed,omitempty"`
	Pagination *query.PageRequest `protobuf:"bytes,2,opt,name=pagination,proto3" json:"pagination,omitempty"`
}

func (m *QueryAirdropsRequest) Reset()         { *m = QueryAirdropsRequest{} }
func (m *QueryAirdropsRequest) String() string { return proto.CompactTextString(m) }
func (*QueryAirdropsRequest) ProtoMessage()    {}
func (*QueryAirdropsRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_fed7c8be0346c387, []int{0}
}
func (m *QueryAirdropsRequest) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *QueryAirdropsRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_QueryAirdropsRequest.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *QueryAirdropsRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_QueryAirdropsRequest.Merge(m, src)
}
func (m *QueryAirdropsRequest) XXX_Size() int {
	return m.Size()
}
func (m *QueryAirdropsRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_QueryAirdropsRequest.DiscardUnknown(m)
}

var xxx_messageInfo_QueryAirdropsRequest proto.InternalMessageInfo

func (m *QueryAirdropsRequest) GetCompleted() bool {
	if m != nil {
		return m.Completed
	}
	return false
}

func (m *QueryAirdropsRequest) GetPagination() *query.PageRequest {
	if m != nil {
		return m.Pagination
	}
	return nil
}

type QueryAirdropsResponse struct {
	// airdrops contains all the queried airdrops.
	Airdrops []Airdrop `protobuf:"bytes,1,rep,name=airdrops,proto3" json:"airdrops"`
	// pagination defines the pagination in the response.
	Pagination *query.PageResponse `protobuf:"bytes,2,opt,name=pagination,proto3" json:"pagination,omitempty"`
}

func (m *QueryAirdropsResponse) Reset()         { *m = QueryAirdropsResponse{} }
func (m *QueryAirdropsResponse) String() string { return proto.CompactTextString(m) }
func (*QueryAirdropsResponse) ProtoMessage()    {}
func (*QueryAirdropsResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_fed7c8be0346c387, []int{1}
}
func (m *QueryAirdropsResponse) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *QueryAirdropsResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_QueryAirdropsResponse.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *QueryAirdropsResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_QueryAirdropsResponse.Merge(m, src)
}
func (m *QueryAirdropsResponse) XXX_Size() int {
	return m.Size()
}
func (m *QueryAirdropsResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_QueryAirdropsResponse.DiscardUnknown(m)
}

var xxx_messageInfo_QueryAirdropsResponse proto.InternalMessageInfo

func (m *QueryAirdropsResponse) GetAirdrops() []Airdrop {
	if m != nil {
		return m.Airdrops
	}
	return nil
}

func (m *QueryAirdropsResponse) GetPagination() *query.PageResponse {
	if m != nil {
		return m.Pagination
	}
	return nil
}

type QueryAirdropRequest struct {
	TargetAddr string `protobuf:"bytes,1,opt,name=target_addr,json=targetAddr,proto3" json:"target_addr,omitempty"`
	Completed  bool   `protobuf:"varint,2,opt,name=completed,proto3" json:"completed,omitempty"`
}

func (m *QueryAirdropRequest) Reset()         { *m = QueryAirdropRequest{} }
func (m *QueryAirdropRequest) String() string { return proto.CompactTextString(m) }
func (*QueryAirdropRequest) ProtoMessage()    {}
func (*QueryAirdropRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_fed7c8be0346c387, []int{2}
}
func (m *QueryAirdropRequest) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *QueryAirdropRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_QueryAirdropRequest.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *QueryAirdropRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_QueryAirdropRequest.Merge(m, src)
}
func (m *QueryAirdropRequest) XXX_Size() int {
	return m.Size()
}
func (m *QueryAirdropRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_QueryAirdropRequest.DiscardUnknown(m)
}

var xxx_messageInfo_QueryAirdropRequest proto.InternalMessageInfo

func (m *QueryAirdropRequest) GetTargetAddr() string {
	if m != nil {
		return m.TargetAddr
	}
	return ""
}

func (m *QueryAirdropRequest) GetCompleted() bool {
	if m != nil {
		return m.Completed
	}
	return false
}

type QueryAirdropResponse struct {
	Airdrop Airdrop `protobuf:"bytes,1,opt,name=airdrop,proto3" json:"airdrop"`
}

func (m *QueryAirdropResponse) Reset()         { *m = QueryAirdropResponse{} }
func (m *QueryAirdropResponse) String() string { return proto.CompactTextString(m) }
func (*QueryAirdropResponse) ProtoMessage()    {}
func (*QueryAirdropResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_fed7c8be0346c387, []int{3}
}
func (m *QueryAirdropResponse) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *QueryAirdropResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_QueryAirdropResponse.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *QueryAirdropResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_QueryAirdropResponse.Merge(m, src)
}
func (m *QueryAirdropResponse) XXX_Size() int {
	return m.Size()
}
func (m *QueryAirdropResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_QueryAirdropResponse.DiscardUnknown(m)
}

var xxx_messageInfo_QueryAirdropResponse proto.InternalMessageInfo

func (m *QueryAirdropResponse) GetAirdrop() Airdrop {
	if m != nil {
		return m.Airdrop
	}
	return Airdrop{}
}

// QueryParamsRequest is request type for the Query/Params RPC method.
type QueryParamsRequest struct {
}

func (m *QueryParamsRequest) Reset()         { *m = QueryParamsRequest{} }
func (m *QueryParamsRequest) String() string { return proto.CompactTextString(m) }
func (*QueryParamsRequest) ProtoMessage()    {}
func (*QueryParamsRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_fed7c8be0346c387, []int{4}
}
func (m *QueryParamsRequest) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *QueryParamsRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_QueryParamsRequest.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *QueryParamsRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_QueryParamsRequest.Merge(m, src)
}
func (m *QueryParamsRequest) XXX_Size() int {
	return m.Size()
}
func (m *QueryParamsRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_QueryParamsRequest.DiscardUnknown(m)
}

var xxx_messageInfo_QueryParamsRequest proto.InternalMessageInfo

// QueryParamsResponse is response type for the Query/Params RPC method.
type QueryParamsResponse struct {
	// params holds all the parameters of this module.
	Params Params `protobuf:"bytes,1,opt,name=params,proto3" json:"params"`
}

func (m *QueryParamsResponse) Reset()         { *m = QueryParamsResponse{} }
func (m *QueryParamsResponse) String() string { return proto.CompactTextString(m) }
func (*QueryParamsResponse) ProtoMessage()    {}
func (*QueryParamsResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_fed7c8be0346c387, []int{5}
}
func (m *QueryParamsResponse) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *QueryParamsResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_QueryParamsResponse.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *QueryParamsResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_QueryParamsResponse.Merge(m, src)
}
func (m *QueryParamsResponse) XXX_Size() int {
	return m.Size()
}
func (m *QueryParamsResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_QueryParamsResponse.DiscardUnknown(m)
}

var xxx_messageInfo_QueryParamsResponse proto.InternalMessageInfo

func (m *QueryParamsResponse) GetParams() Params {
	if m != nil {
		return m.Params
	}
	return Params{}
}

func init() {
	proto.RegisterType((*QueryAirdropsRequest)(nil), "kaiju.vesting.v1.QueryAirdropsRequest")
	proto.RegisterType((*QueryAirdropsResponse)(nil), "kaiju.vesting.v1.QueryAirdropsResponse")
	proto.RegisterType((*QueryAirdropRequest)(nil), "kaiju.vesting.v1.QueryAirdropRequest")
	proto.RegisterType((*QueryAirdropResponse)(nil), "kaiju.vesting.v1.QueryAirdropResponse")
	proto.RegisterType((*QueryParamsRequest)(nil), "kaiju.vesting.v1.QueryParamsRequest")
	proto.RegisterType((*QueryParamsResponse)(nil), "kaiju.vesting.v1.QueryParamsResponse")
}

func init() { proto.RegisterFile("kaiju/vesting/v1/query.proto", fileDescriptor_fed7c8be0346c387) }

var fileDescriptor_fed7c8be0346c387 = []byte{
	// 532 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x8c, 0x94, 0x41, 0x6f, 0xd3, 0x30,
	0x14, 0xc7, 0xeb, 0x0d, 0xba, 0xce, 0xbd, 0x99, 0x22, 0x55, 0xa1, 0xca, 0xaa, 0x08, 0xad, 0x61,
	0x02, 0x5b, 0x2d, 0x17, 0x24, 0xc4, 0x61, 0x3b, 0x80, 0x38, 0x31, 0x02, 0x27, 0x2e, 0xc8, 0x6d,
	0x2c, 0x13, 0xa9, 0x89, 0x33, 0xdb, 0xad, 0x18, 0xb0, 0x0b, 0x12, 0xf7, 0x49, 0x7c, 0x00, 0xc4,
	0xb7, 0xd9, 0x71, 0x12, 0x17, 0x4e, 0x08, 0xb5, 0x7c, 0x10, 0x54, 0xdb, 0xc9, 0xda, 0x11, 0xd6,
	0xdd, 0xa2, 0xe7, 0xff, 0x7b, 0xff, 0x9f, 0xff, 0xcf, 0x0a, 0xf4, 0x53, 0x26, 0xc7, 0x89, 0xc8,
	0xc8, 0x94, 0x29, 0x9d, 0x64, 0x9c, 0x4c, 0xfb, 0xe4, 0x68, 0xc2, 0xe4, 0x31, 0xce, 0xa5, 0xd0,
	0x02, 0x21, 0x77, 0x8e, 0xdd, 0x39, 0x9e, 0xf6, 0xbd, 0x16, 0x17, 0x5c, 0x98, 0x63, 0xb2, 0xf8,
	0xb2, 0x4a, 0xaf, 0xc3, 0x85, 0xe0, 0x63, 0x46, 0x68, 0x9e, 0x10, 0x9a, 0x65, 0x42, 0x53, 0x9d,
	0x88, 0x4c, 0xb9, 0xd3, 0xbd, 0x91, 0x50, 0xa9, 0x50, 0x64, 0x48, 0x15, 0xb3, 0x06, 0x64, 0xda,
	0x1f, 0x32, 0x4d, 0xfb, 0x24, 0xa7, 0x3c, 0xc9, 0x8c, 0xd8, 0x69, 0xbb, 0x15, 0x4c, 0x9c, 0x65,
	0x4c, 0x25, 0xea, 0x0a, 0x45, 0x01, 0x68, 0x14, 0xc1, 0x27, 0xd8, 0x7a, 0xb9, 0x70, 0xd9, 0x4f,
	0x64, 0x2c, 0x45, 0xae, 0x22, 0x76, 0x34, 0x61, 0x4a, 0xa3, 0x0e, 0xdc, 0x1e, 0x89, 0x34, 0x1f,
	0x33, 0xcd, 0xe2, 0x36, 0xe8, 0x82, 0xb0, 0x11, 0x5d, 0x14, 0xd0, 0x53, 0x08, 0x2f, 0x68, 0xda,
	0x1b, 0x5d, 0x10, 0x36, 0x07, 0xbb, 0xd8, 0xa2, 0xe3, 0x05, 0x3a, 0xb6, 0xd9, 0x38, 0x74, 0x7c,
	0x48, 0x39, 0x73, 0x93, 0xa3, 0xa5, 0xce, 0xe0, 0x1b, 0x80, 0xb7, 0x2f, 0xd9, 0xab, 0x5c, 0x64,
	0x8a, 0xa1, 0x27, 0xb0, 0x41, 0x5d, 0xad, 0x0d, 0xba, 0x9b, 0x61, 0x73, 0x70, 0x07, 0xff, 0x1b,
	0x31, 0x76, 0x7d, 0x07, 0x37, 0xce, 0x7e, 0xed, 0xd4, 0xa2, 0xb2, 0x05, 0x3d, 0xab, 0x00, 0xec,
	0xad, 0x05, 0xb4, 0xde, 0x2b, 0x84, 0xaf, 0xe1, 0xad, 0x65, 0xc0, 0x22, 0x9e, 0x1d, 0xd8, 0xd4,
	0x54, 0x72, 0xa6, 0xdf, 0xd2, 0x38, 0x96, 0x26, 0xa0, 0xed, 0x08, 0xda, 0xd2, 0x7e, 0x1c, 0xcb,
	0xd5, 0xfc, 0x36, 0x2e, 0xe5, 0x17, 0xbc, 0x5a, 0x4d, 0xbd, 0xbc, 0xf5, 0x63, 0xb8, 0xe5, 0xae,
	0x60, 0x46, 0x5e, 0xeb, 0xd2, 0x45, 0x47, 0xd0, 0x82, 0xc8, 0x0c, 0x3d, 0xa4, 0x92, 0xa6, 0xc5,
	0x22, 0x83, 0x17, 0xee, 0x02, 0x45, 0xd5, 0x39, 0x3d, 0x82, 0xf5, 0xdc, 0x54, 0x9c, 0x91, 0x57,
	0x65, 0x64, 0x7b, 0x9c, 0x8f, 0xd3, 0x0f, 0xbe, 0x6f, 0xc2, 0x9b, 0x66, 0x22, 0xfa, 0x02, 0x60,
	0xa3, 0x58, 0x1c, 0x0a, 0xab, 0x06, 0x54, 0x3d, 0x2d, 0xef, 0xde, 0x35, 0x94, 0x96, 0x32, 0xb8,
	0xfb, 0xf9, 0xc7, 0x9f, 0xaf, 0x1b, 0x3e, 0xea, 0x90, 0x8a, 0x87, 0x5c, 0x2e, 0xfb, 0x14, 0xc0,
	0x2d, 0xd7, 0x8a, 0x7a, 0xeb, 0x86, 0x17, 0x14, 0xe1, 0x7a, 0xa1, 0x83, 0x18, 0x18, 0x88, 0xfb,
	0x68, 0xef, 0x2a, 0x08, 0xf2, 0x71, 0xe9, 0x3d, 0x9c, 0xa0, 0x13, 0x58, 0xb7, 0xe1, 0xa1, 0xdd,
	0xff, 0xfa, 0xac, 0xec, 0xc9, 0xeb, 0xad, 0xd5, 0x39, 0x9c, 0xc0, 0xe0, 0x74, 0x90, 0x57, 0x85,
	0x63, 0x77, 0x74, 0xf0, 0xfc, 0x6c, 0xe6, 0x83, 0xf3, 0x99, 0x0f, 0x7e, 0xcf, 0x7c, 0x70, 0x3a,
	0xf7, 0x6b, 0xe7, 0x73, 0xbf, 0xf6, 0x73, 0xee, 0xd7, 0xde, 0x10, 0x9e, 0xe8, 0x77, 0x93, 0x21,
	0x1e, 0x89, 0xb4, 0xe8, 0x7f, 0xf0, 0x41, 0x64, 0xac, 0x1c, 0xf6, 0xbe, 0x1c, 0xa7, 0x8f, 0x73,
	0xa6, 0x86, 0x75, 0xf3, 0x9f, 0x78, 0xf8, 0x37, 0x00, 0x00, 0xff, 0xff, 0xcc, 0xc4, 0x7b, 0x9f,
	0x01, 0x05, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// QueryClient is the client API for Query service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type QueryClient interface {
	// Airdrops queries airdrop targets.
	Airdrops(ctx context.Context, in *QueryAirdropsRequest, opts ...grpc.CallOption) (*QueryAirdropsResponse, error)
	// Airdrops queries airdrop target for given address.
	Airdrop(ctx context.Context, in *QueryAirdropRequest, opts ...grpc.CallOption) (*QueryAirdropResponse, error)
	// Parameters queries the parameters of the module.
	Params(ctx context.Context, in *QueryParamsRequest, opts ...grpc.CallOption) (*QueryParamsResponse, error)
}

type queryClient struct {
	cc grpc1.ClientConn
}

func NewQueryClient(cc grpc1.ClientConn) QueryClient {
	return &queryClient{cc}
}

func (c *queryClient) Airdrops(ctx context.Context, in *QueryAirdropsRequest, opts ...grpc.CallOption) (*QueryAirdropsResponse, error) {
	out := new(QueryAirdropsResponse)
	err := c.cc.Invoke(ctx, "/kaiju.vesting.v1.Query/Airdrops", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *queryClient) Airdrop(ctx context.Context, in *QueryAirdropRequest, opts ...grpc.CallOption) (*QueryAirdropResponse, error) {
	out := new(QueryAirdropResponse)
	err := c.cc.Invoke(ctx, "/kaiju.vesting.v1.Query/Airdrop", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *queryClient) Params(ctx context.Context, in *QueryParamsRequest, opts ...grpc.CallOption) (*QueryParamsResponse, error) {
	out := new(QueryParamsResponse)
	err := c.cc.Invoke(ctx, "/kaiju.vesting.v1.Query/Params", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// QueryServer is the server API for Query service.
type QueryServer interface {
	// Airdrops queries airdrop targets.
	Airdrops(context.Context, *QueryAirdropsRequest) (*QueryAirdropsResponse, error)
	// Airdrops queries airdrop target for given address.
	Airdrop(context.Context, *QueryAirdropRequest) (*QueryAirdropResponse, error)
	// Parameters queries the parameters of the module.
	Params(context.Context, *QueryParamsRequest) (*QueryParamsResponse, error)
}

// UnimplementedQueryServer can be embedded to have forward compatible implementations.
type UnimplementedQueryServer struct {
}

func (*UnimplementedQueryServer) Airdrops(ctx context.Context, req *QueryAirdropsRequest) (*QueryAirdropsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Airdrops not implemented")
}
func (*UnimplementedQueryServer) Airdrop(ctx context.Context, req *QueryAirdropRequest) (*QueryAirdropResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Airdrop not implemented")
}
func (*UnimplementedQueryServer) Params(ctx context.Context, req *QueryParamsRequest) (*QueryParamsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Params not implemented")
}

func RegisterQueryServer(s grpc1.Server, srv QueryServer) {
	s.RegisterService(&_Query_serviceDesc, srv)
}

func _Query_Airdrops_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(QueryAirdropsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(QueryServer).Airdrops(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/kaiju.vesting.v1.Query/Airdrops",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(QueryServer).Airdrops(ctx, req.(*QueryAirdropsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Query_Airdrop_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(QueryAirdropRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(QueryServer).Airdrop(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/kaiju.vesting.v1.Query/Airdrop",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(QueryServer).Airdrop(ctx, req.(*QueryAirdropRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Query_Params_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(QueryParamsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(QueryServer).Params(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/kaiju.vesting.v1.Query/Params",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(QueryServer).Params(ctx, req.(*QueryParamsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _Query_serviceDesc = grpc.ServiceDesc{
	ServiceName: "kaiju.vesting.v1.Query",
	HandlerType: (*QueryServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Airdrops",
			Handler:    _Query_Airdrops_Handler,
		},
		{
			MethodName: "Airdrop",
			Handler:    _Query_Airdrop_Handler,
		},
		{
			MethodName: "Params",
			Handler:    _Query_Params_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "kaiju/vesting/v1/query.proto",
}

func (m *QueryAirdropsRequest) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *QueryAirdropsRequest) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *QueryAirdropsRequest) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.Pagination != nil {
		{
			size, err := m.Pagination.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintQuery(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0x12
	}
	if m.Completed {
		i--
		if m.Completed {
			dAtA[i] = 1
		} else {
			dAtA[i] = 0
		}
		i--
		dAtA[i] = 0x8
	}
	return len(dAtA) - i, nil
}

func (m *QueryAirdropsResponse) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *QueryAirdropsResponse) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *QueryAirdropsResponse) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.Pagination != nil {
		{
			size, err := m.Pagination.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintQuery(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0x12
	}
	if len(m.Airdrops) > 0 {
		for iNdEx := len(m.Airdrops) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.Airdrops[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintQuery(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0xa
		}
	}
	return len(dAtA) - i, nil
}

func (m *QueryAirdropRequest) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *QueryAirdropRequest) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *QueryAirdropRequest) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.Completed {
		i--
		if m.Completed {
			dAtA[i] = 1
		} else {
			dAtA[i] = 0
		}
		i--
		dAtA[i] = 0x10
	}
	if len(m.TargetAddr) > 0 {
		i -= len(m.TargetAddr)
		copy(dAtA[i:], m.TargetAddr)
		i = encodeVarintQuery(dAtA, i, uint64(len(m.TargetAddr)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *QueryAirdropResponse) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *QueryAirdropResponse) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *QueryAirdropResponse) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	{
		size, err := m.Airdrop.MarshalToSizedBuffer(dAtA[:i])
		if err != nil {
			return 0, err
		}
		i -= size
		i = encodeVarintQuery(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0xa
	return len(dAtA) - i, nil
}

func (m *QueryParamsRequest) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *QueryParamsRequest) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *QueryParamsRequest) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	return len(dAtA) - i, nil
}

func (m *QueryParamsResponse) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *QueryParamsResponse) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *QueryParamsResponse) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	{
		size, err := m.Params.MarshalToSizedBuffer(dAtA[:i])
		if err != nil {
			return 0, err
		}
		i -= size
		i = encodeVarintQuery(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0xa
	return len(dAtA) - i, nil
}

func encodeVarintQuery(dAtA []byte, offset int, v uint64) int {
	offset -= sovQuery(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *QueryAirdropsRequest) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.Completed {
		n += 2
	}
	if m.Pagination != nil {
		l = m.Pagination.Size()
		n += 1 + l + sovQuery(uint64(l))
	}
	return n
}

func (m *QueryAirdropsResponse) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if len(m.Airdrops) > 0 {
		for _, e := range m.Airdrops {
			l = e.Size()
			n += 1 + l + sovQuery(uint64(l))
		}
	}
	if m.Pagination != nil {
		l = m.Pagination.Size()
		n += 1 + l + sovQuery(uint64(l))
	}
	return n
}

func (m *QueryAirdropRequest) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.TargetAddr)
	if l > 0 {
		n += 1 + l + sovQuery(uint64(l))
	}
	if m.Completed {
		n += 2
	}
	return n
}

func (m *QueryAirdropResponse) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = m.Airdrop.Size()
	n += 1 + l + sovQuery(uint64(l))
	return n
}

func (m *QueryParamsRequest) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	return n
}

func (m *QueryParamsResponse) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = m.Params.Size()
	n += 1 + l + sovQuery(uint64(l))
	return n
}

func sovQuery(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozQuery(x uint64) (n int) {
	return sovQuery(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *QueryAirdropsRequest) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowQuery
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
			return fmt.Errorf("proto: QueryAirdropsRequest: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: QueryAirdropsRequest: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Completed", wireType)
			}
			var v int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowQuery
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				v |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			m.Completed = bool(v != 0)
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Pagination", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowQuery
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthQuery
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthQuery
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.Pagination == nil {
				m.Pagination = &query.PageRequest{}
			}
			if err := m.Pagination.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipQuery(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthQuery
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
func (m *QueryAirdropsResponse) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowQuery
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
			return fmt.Errorf("proto: QueryAirdropsResponse: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: QueryAirdropsResponse: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Airdrops", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowQuery
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthQuery
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthQuery
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Airdrops = append(m.Airdrops, Airdrop{})
			if err := m.Airdrops[len(m.Airdrops)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Pagination", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowQuery
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthQuery
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthQuery
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.Pagination == nil {
				m.Pagination = &query.PageResponse{}
			}
			if err := m.Pagination.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipQuery(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthQuery
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
func (m *QueryAirdropRequest) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowQuery
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
			return fmt.Errorf("proto: QueryAirdropRequest: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: QueryAirdropRequest: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field TargetAddr", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowQuery
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
				return ErrInvalidLengthQuery
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthQuery
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.TargetAddr = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Completed", wireType)
			}
			var v int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowQuery
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				v |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			m.Completed = bool(v != 0)
		default:
			iNdEx = preIndex
			skippy, err := skipQuery(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthQuery
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
func (m *QueryAirdropResponse) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowQuery
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
			return fmt.Errorf("proto: QueryAirdropResponse: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: QueryAirdropResponse: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Airdrop", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowQuery
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthQuery
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthQuery
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.Airdrop.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipQuery(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthQuery
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
func (m *QueryParamsRequest) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowQuery
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
			return fmt.Errorf("proto: QueryParamsRequest: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: QueryParamsRequest: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		default:
			iNdEx = preIndex
			skippy, err := skipQuery(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthQuery
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
func (m *QueryParamsResponse) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowQuery
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
			return fmt.Errorf("proto: QueryParamsResponse: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: QueryParamsResponse: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Params", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowQuery
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthQuery
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthQuery
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.Params.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipQuery(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthQuery
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
func skipQuery(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowQuery
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
					return 0, ErrIntOverflowQuery
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
					return 0, ErrIntOverflowQuery
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
				return 0, ErrInvalidLengthQuery
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupQuery
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthQuery
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthQuery        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowQuery          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupQuery = fmt.Errorf("proto: unexpected end of group")
)
