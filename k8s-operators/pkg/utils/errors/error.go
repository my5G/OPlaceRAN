package errors

func NewDoNotRequeueError(msg string) error {
	return &DoNotRequeueError{msg: msg}
}

type DoNotRequeueError struct {
	msg string
}

func (e *DoNotRequeueError) Error() string {
	return e.msg
}
