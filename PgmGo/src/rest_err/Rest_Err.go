package rest_err

import "net/http"

type RestErr struct {
	Message string `json: message`
	Err string `json: error`
	Code int `json: code`
	Causes []Causes `json: causes`
}

type Causes struct {
	Field string `json: field`
	Message string `json: message`
}

func NewRestErr(message, err string, code int, causes []Causes) *RestErr {
	return &RestErr{
		Message: message,
		Err: err,
		Code: code,
		Causes: causes,
	}
}

// metodo proto para interface de erro dos objs - este metodo devolve o erro especifico
func(r *RestErr) Error() string {
	return r.Message
}

// funcao para cada tipo de erro

func NewBadRequestErr(message string) *RestErr{
	return &RestErr{
		Message: message,
		Err: "bad request",
		Code: http.StatusBadRequest,
	}
}

func NewBadRequestValidationErr(message string, causes []Causes) *RestErr{
	return &RestErr{
		Message: message,
		Err: "bad request",
		Code: http.StatusBadRequest,
		Causes: causes,
	}
}

func NewInternalServerError(message string) *RestErr{
	return &RestErr{
		Message: message,
		Err: "internal server error",
		Code: http.StatusInternalServerError,
	}
}

func NewNotFoundError(message string) *RestErr{
	return &RestErr{
		Message: message,
		Err: "not found error",
		Code: http.StatusNotFound,
	}
}

func NewForbiddenError(message string) *RestErr{
	return &RestErr{
		Message: message,
		Err: "forbidden - proibido",
		Code: http.StatusForbidden,
	}
}


