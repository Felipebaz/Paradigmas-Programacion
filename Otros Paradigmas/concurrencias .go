import (
	"fmt"
	"sync"
	"time"
)

// Procesamiento concurrente con canales y goroutines
func procesarURL(url string, ch  chan<_ string) {
	// Simular procesamiento de la URL
	time.Sleep(time.Milisecond * 100)
	ch <- fmt.Sprintf("Procesado: %s", url)
}

func main(){
	urls := []string{
		"http://example.com",
		"http://golang.org",
		"http://github.com",
	}

	ch := make(chan string, len(urls))

	// Lanzar goroutines
	for _, url := range urls {
		go procesarURL(url, ch)
	}

	// Recibir resultados
	for i := 0; i < len(urls); i++ {
		resultado := <-ch
		fmt.Println(resultado)
	}

	// Cerrar el canal
	close(ch)
}	
