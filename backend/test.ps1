$body = @{
    name = "Teste"
    email = "teste@test.com"
    projeto = "Teste"
    message = "Teste"
} | ConvertTo-Json

Invoke-WebRequest -Uri 'https://backend-portfolio.vercel.app/api/send-email' `
  -Method POST `
  -Headers @{'Content-Type'='application/json'} `
  -Body $body | Select-Object -ExpandProperty Content
