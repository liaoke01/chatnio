package globals

type Hook func(data string) error
type Message struct {
	Role    string `json:"role"`
	Content string `json:"content"`
}

type ChatSegmentResponse struct {
	Quota   float32 `json:"quota"`
	Keyword string  `json:"keyword"`
	Message string  `json:"message"`
	End     bool    `json:"end"`
}

type GenerationSegmentResponse struct {
	Quota   float32 `json:"quota"`
	Message string  `json:"message"`
	Hash    string  `json:"hash"`
	End     bool    `json:"end"`
	Error   string  `json:"error"`
}
