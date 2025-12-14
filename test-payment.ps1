Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Testing Payment Integration" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Test 1: Check if activation page is accessible
Write-Host "Test 1: Activation Page Accessibility" -ForegroundColor Yellow
try {
    $response = Invoke-WebRequest -Uri "http://localhost:3000/activation" -UseBasicParsing
    Write-Host "SUCCESS: Activation page is accessible" -ForegroundColor Green
    Write-Host "  Status Code: $($response.StatusCode)" -ForegroundColor Gray
    Write-Host ""
} catch {
    Write-Host "ERROR: Activation page not accessible: $($_.Exception.Message)" -ForegroundColor Red
    Write-Host ""
}

# Test 2: Check for Monnify SDK script in the page
Write-Host "Test 2: Monnify SDK Script Check" -ForegroundColor Yellow
try {
    $response = Invoke-WebRequest -Uri "http://localhost:3000/activation" -UseBasicParsing
    if ($response.Content -match "sdk\.monnify\.com") {
        Write-Host "SUCCESS: Monnify SDK script found in page" -ForegroundColor Green
        Write-Host "  Script URL: https://sdk.monnify.com/plugin/monnify.js" -ForegroundColor Gray
    } else {
        Write-Host "WARNING: Monnify SDK script not found in page" -ForegroundColor Yellow
    }
    Write-Host ""
} catch {
    Write-Host "ERROR: Error checking page content: $($_.Exception.Message)" -ForegroundColor Red
    Write-Host ""
}

# Test 3: Check environment variables
Write-Host "Test 3: Environment Variables Check" -ForegroundColor Yellow
if (Test-Path ".env.local") {
    Write-Host "SUCCESS: .env.local file exists" -ForegroundColor Green
    $envContent = Get-Content ".env.local" -Raw
    if ($envContent -match "NEXT_PUBLIC_MONNIFY_API_KEY") {
        Write-Host "  SUCCESS: MONNIFY_API_KEY is set" -ForegroundColor Green
    } else {
        Write-Host "  WARNING: MONNIFY_API_KEY not found" -ForegroundColor Yellow
    }
    if ($envContent -match "NEXT_PUBLIC_MONNIFY_CONTRACT_CODE") {
        Write-Host "  SUCCESS: MONNIFY_CONTRACT_CODE is set" -ForegroundColor Green
    } else {
        Write-Host "  WARNING: MONNIFY_CONTRACT_CODE not found" -ForegroundColor Yellow
    }
} else {
    Write-Host "WARNING: .env.local file not found" -ForegroundColor Yellow
    Write-Host "  Make sure to create .env.local with your Monnify credentials" -ForegroundColor Gray
}
Write-Host ""

# Test 4: Instructions
Write-Host "Test 4: Manual Testing Instructions" -ForegroundColor Yellow
Write-Host "To test the payment flow:" -ForegroundColor White
Write-Host "  1. Open http://localhost:3000/activation in your browser" -ForegroundColor Gray
Write-Host "  2. Check browser console for 'Monnify SDK loaded successfully'" -ForegroundColor Gray
Write-Host "  3. Click 'ACTIVATE NOW' button" -ForegroundColor Gray
Write-Host "  4. Monnify payment modal should open" -ForegroundColor Gray
Write-Host "  5. Use Monnify test credentials to complete payment" -ForegroundColor Gray
Write-Host ""
Write-Host "Alternative: Open test-payment.html in browser for standalone test" -ForegroundColor Cyan
Write-Host ""

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Testing Complete!" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
