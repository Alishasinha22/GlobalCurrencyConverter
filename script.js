// DOM Elements
const themeSwitch = document.getElementById('theme-switch');
const refreshBtn = document.getElementById('refresh-rates');
const amountInput = document.getElementById('amount');
const convertedAmountInput = document.getElementById('converted-amount');
const fromSymbol = document.getElementById('from-symbol');
const toSymbol = document.getElementById('to-symbol');
const fromCurrencySelected = document.getElementById('from-currency-selected');
const toCurrencySelected = document.getElementById('to-currency-selected');
const fromCurrencyList = document.getElementById('from-currency-list');
const toCurrencyList = document.getElementById('to-currency-list');
const swapCurrencies = document.getElementById('swap-currencies');
const exchangeRate = document.getElementById('exchange-rate');
const inverseRate = document.getElementById('inverse-rate');
const quickButtons = document.getElementById('quick-buttons');
const currenciesGrid = document.getElementById('currencies-grid');
const conversionHistory = document.getElementById('conversion-history');
const clearHistoryBtn = document.getElementById('clear-history');
const lastUpdated = document.getElementById('last-updated');

// Currency data for 40+ countries
const currencies = [
    { code: 'USD', name: 'US Dollar', symbol: '$', flag: 'fi fi-us', rate: 1 },
    { code: 'EUR', name: 'Euro', symbol: '€', flag: 'fi fi-eu', rate: 0.92 },
    { code: 'GBP', name: 'British Pound', symbol: '£', flag: 'fi fi-gb', rate: 0.79 },
    { code: 'JPY', name: 'Japanese Yen', symbol: '¥', flag: 'fi fi-jp', rate: 147.5 },
    { code: 'CAD', name: 'Canadian Dollar', symbol: 'C$', flag: 'fi fi-ca', rate: 1.35 },
    { code: 'AUD', name: 'Australian Dollar', symbol: 'A$', flag: 'fi fi-au', rate: 1.52 },
    { code: 'CHF', name: 'Swiss Franc', symbol: 'CHF', flag: 'fi fi-ch', rate: 0.88 },
    { code: 'CNY', name: 'Chinese Yuan', symbol: '¥', flag: 'fi fi-cn', rate: 7.25 },
    { code: 'INR', name: 'Indian Rupee', symbol: '₹', flag: 'fi fi-in', rate: 82.5 },
    { code: 'SGD', name: 'Singapore Dollar', symbol: 'S$', flag: 'fi fi-sg', rate: 1.34 },
    { code: 'NZD', name: 'New Zealand Dollar', symbol: 'NZ$', flag: 'fi fi-nz', rate: 1.64 },
    { code: 'MXN', name: 'Mexican Peso', symbol: 'MX$', flag: 'fi fi-mx', rate: 17.2 },
    { code: 'BRL', name: 'Brazilian Real', symbol: 'R$', flag: 'fi fi-br', rate: 4.92 },
    { code: 'RUB', name: 'Russian Ruble', symbol: '₽', flag: 'fi fi-ru', rate: 92.8 },
    { code: 'KRW', name: 'South Korean Won', symbol: '₩', flag: 'fi fi-kr', rate: 1310 },
    { code: 'TRY', name: 'Turkish Lira', symbol: '₺', flag: 'fi fi-tr', rate: 26.8 },
    { code: 'ZAR', name: 'South African Rand', symbol: 'R', flag: 'fi fi-za', rate: 18.9 },
    { code: 'AED', name: 'UAE Dirham', symbol: 'د.إ', flag: 'fi fi-ae', rate: 3.67 },
    { code: 'SAR', name: 'Saudi Riyal', symbol: 'ر.س', flag: 'fi fi-sa', rate: 3.75 },
    { code: 'THB', name: 'Thai Baht', symbol: '฿', flag: 'fi fi-th', rate: 35.6 },
    { code: 'IDR', name: 'Indonesian Rupiah', symbol: 'Rp', flag: 'fi fi-id', rate: 15500 },
    { code: 'MYR', name: 'Malaysian Ringgit', symbol: 'RM', flag: 'fi fi-my', rate: 4.68 },
    { code: 'PHP', name: 'Philippine Peso', symbol: '₱', flag: 'fi fi-ph', rate: 56.2 },
    { code: 'VND', name: 'Vietnamese Dong', symbol: '₫', flag: 'fi fi-vn', rate: 24300 },
    { code: 'HKD', name: 'Hong Kong Dollar', symbol: 'HK$', flag: 'fi fi-hk', rate: 7.82 },
    { code: 'SEK', name: 'Swedish Krona', symbol: 'kr', flag: 'fi fi-se', rate: 10.7 },
    { code: 'NOK', name: 'Norwegian Krone', symbol: 'kr', flag: 'fi fi-no', rate: 10.9 },
    { code: 'DKK', name: 'Danish Krone', symbol: 'kr', flag: 'fi fi-dk', rate: 6.88 },
    { code: 'PLN', name: 'Polish Złoty', symbol: 'zł', flag: 'fi fi-pl', rate: 4.12 },
    { code: 'HUF', name: 'Hungarian Forint', symbol: 'Ft', flag: 'fi fi-hu', rate: 360 },
    { code: 'CZK', name: 'Czech Koruna', symbol: 'Kč', flag: 'fi fi-cz', rate: 22.5 },
    { code: 'ILS', name: 'Israeli Shekel', symbol: '₪', flag: 'fi fi-il', rate: 3.86 },
    { code: 'CLP', name: 'Chilean Peso', symbol: 'CLP$', flag: 'fi fi-cl', rate: 870 },
    { code: 'COP', name: 'Colombian Peso', symbol: 'COL$', flag: 'fi fi-co', rate: 3950 },
    { code: 'ARS', name: 'Argentine Peso', symbol: 'ARS$', flag: 'fi fi-ar', rate: 350 },
    { code: 'PEN', name: 'Peruvian Sol', symbol: 'S/', flag: 'fi fi-pe', rate: 3.75 },
    { code: 'EGP', name: 'Egyptian Pound', symbol: 'E£', flag: 'fi fi-eg', rate: 30.9 },
    { code: 'NGN', name: 'Nigerian Naira', symbol: '₦', flag: 'fi fi-ng', rate: 770 },
    { code: 'KES', name: 'Kenyan Shilling', symbol: 'KSh', flag: 'fi fi-ke', rate: 147 },
    { code: 'PKR', name: 'Pakistani Rupee', symbol: '₨', flag: 'fi fi-pk', rate: 280 },
    { code: 'BDT', name: 'Bangladeshi Taka', symbol: '৳', flag: 'fi fi-bd', rate: 110 },
    { code: 'LKR', name: 'Sri Lankan Rupee', symbol: 'Rs', flag: 'fi fi-lk', rate: 322 },
    { code: 'NPR', name: 'Nepalese Rupee', symbol: '₨', flag: 'fi fi-np', rate: 132 }
];

// App State
let currentFromCurrency = 'USD';
let currentToCurrency = 'EUR';
let exchangeRates = {};
let conversionHistoryData = [];
let selectorsOpen = {
    from: false,
    to: false
};

// API Configuration
const API_BASE_URL = 'https://api.frankfurter.app';
const DEFAULT_BASE = 'USD';

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    // Set up event listeners
    themeSwitch.addEventListener('change', toggleTheme);
    refreshBtn.addEventListener('click', fetchExchangeRates);
    amountInput.addEventListener('input', convertCurrency);
    swapCurrencies.addEventListener('click', swapCurrenciesHandler);
    fromCurrencySelected.addEventListener('click', toggleFromCurrencyList);
    toCurrencySelected.addEventListener('click', toggleToCurrencyList);
    clearHistoryBtn.addEventListener('click', clearHistory);
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', closeAllDropdowns);
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('currency-converter-theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeSwitch.checked = savedTheme === 'dark';
    
    // Load conversion history from localStorage
    loadHistory();
    
    // Initialize currencies
    initializeCurrencies();
    
    // Fetch exchange rates
    fetchExchangeRates();
    
    // Load quick conversion buttons
    initializeQuickButtons();
});

// Toggle theme
function toggleTheme() {
    const theme = themeSwitch.checked ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('currency-converter-theme', theme);
}

// Initialize currency selectors and grid
function initializeCurrencies() {
    // Populate currency selectors
    currencies.forEach(currency => {
        // From currency list
        const fromItem = document.createElement('div');
        fromItem.className = 'select-item';
        fromItem.dataset.code = currency.code;
        fromItem.innerHTML = `
            <span class="${currency.flag}"></span>
            <span>${currency.code} - ${currency.name}</span>
        `;
        fromItem.addEventListener('click', () => selectCurrency('from', currency.code));
        fromCurrencyList.appendChild(fromItem);
        
        // To currency list
        const toItem = document.createElement('div');
        toItem.className = 'select-item';
        toItem.dataset.code = currency.code;
        toItem.innerHTML = `
            <span class="${currency.flag}"></span>
            <span>${currency.code} - ${currency.name}</span>
        `;
        toItem.addEventListener('click', () => selectCurrency('to', currency.code));
        toCurrencyList.appendChild(toItem);
        
        // Currency grid card
        const currencyCard = document.createElement('div');
        currencyCard.className = 'currency-card';
        currencyCard.dataset.code = currency.code;
        currencyCard.innerHTML = `
            <div class="currency-flag">
                <span class="${currency.flag}"></span>
            </div>
            <div class="currency-details">
                <h4><span class="currency-code">${currency.code}</span> - ${currency.name}</h4>
                <p class="currency-name">${currency.symbol} ${currency.code}</p>
            </div>
        `;
        currencyCard.addEventListener('click', () => {
            // If Shift key is pressed, set as "to" currency
            if (event.shiftKey) {
                selectCurrency('to', currency.code);
            } else {
                selectCurrency('from', currency.code);
            }
        });
        currenciesGrid.appendChild(currencyCard);
    });
    
    // Set default currencies
    selectCurrency('from', currentFromCurrency);
    selectCurrency('to', currentToCurrency);
}

// Initialize quick conversion buttons
function initializeQuickButtons() {
    const quickConversions = [
        { from: 'USD', to: 'EUR', label: 'USD → EUR' },
        { from: 'EUR', to: 'GBP', label: 'EUR → GBP' },
        { from: 'USD', to: 'JPY', label: 'USD → JPY' },
        { from: 'GBP', to: 'USD', label: 'GBP → USD' },
        { from: 'USD', to: 'CAD', label: 'USD → CAD' },
        { from: 'EUR', to: 'CHF', label: 'EUR → CHF' }
    ];
    
    quickConversions.forEach(conversion => {
        const button = document.createElement('button');
        button.className = 'quick-btn';
        button.innerHTML = `
            <span class="fi ${getFlagClass(conversion.from)}"></span>
            <span>→</span>
            <span class="fi ${getFlagClass(conversion.to)}"></span>
            <span>${conversion.label}</span>
        `;
        button.addEventListener('click', () => {
            selectCurrency('from', conversion.from);
            selectCurrency('to', conversion.to);
            convertCurrency();
        });
        quickButtons.appendChild(button);
    });
}

// Get flag class for currency code
function getFlagClass(currencyCode) {
    const currency = currencies.find(c => c.code === currencyCode);
    return currency ? currency.flag : 'fi fi-xx';
}

// Fetch exchange rates from API
async function fetchExchangeRates() {
    try {
        refreshBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
        refreshBtn.disabled = true;
        
        // Using Frankfurter API (free, no API key required)
        const response = await fetch(`${API_BASE_URL}/latest?base=${DEFAULT_BASE}`);
        
        if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Update exchange rates
        exchangeRates = data.rates;
        exchangeRates[DEFAULT_BASE] = 1; // Add base currency
        
        // Update last updated time
        const now = new Date();
        lastUpdated.innerHTML = `<i class="fas fa-clock"></i> Last updated: ${now.toLocaleTimeString()}`;
        
        // Update currency rates in our array
        currencies.forEach(currency => {
            if (exchangeRates[currency.code]) {
                currency.rate = exchangeRates[currency.code];
            }
        });
        
        // Update conversion
        convertCurrency();
        
        // Show success message
        showNotification('Exchange rates updated successfully!', 'success');
        
    } catch (error) {
        console.error('Error fetching exchange rates:', error);
        
        // Fallback to default rates if API fails
        exchangeRates = {};
        currencies.forEach(currency => {
            exchangeRates[currency.code] = currency.rate;
        });
        
        // Show error message
        showNotification('Using cached rates. API connection failed.', 'error');
        
        // Update last updated time with error
        lastUpdated.innerHTML = `<i class="fas fa-exclamation-triangle"></i> Using cached rates`;
    } finally {
        refreshBtn.innerHTML = '<i class="fas fa-sync-alt"></i> Refresh Rates';
        refreshBtn.disabled = false;
    }
}

// Convert currency
function convertCurrency() {
    const amount = parseFloat(amountInput.value) || 0;
    
    // Get rates for current currencies
    const fromRate = exchangeRates[currentFromCurrency] || getCurrencyRate(currentFromCurrency);
    const toRate = exchangeRates[currentToCurrency] || getCurrencyRate(currentToCurrency);
    
    // Calculate conversion
    const convertedAmount = amount * (toRate / fromRate);
    
    // Update UI
    convertedAmountInput.value = formatCurrency(convertedAmount, currentToCurrency);
    
    // Update symbols
    updateCurrencySymbols();
    
    // Update exchange rate display
    const rate = toRate / fromRate;
    const inverse = 1 / rate;
    
    exchangeRate.textContent = `1 ${currentFromCurrency} = ${formatCurrency(rate, currentToCurrency, 4)}`;
    inverseRate.textContent = `1 ${currentToCurrency} = ${formatCurrency(inverse, currentFromCurrency, 4)}`;
    
    // Update active currency cards
    updateActiveCurrencyCards();
    
    // Save to history if amount is valid
    if (amount > 0) {
        saveToHistory(amount, convertedAmount);
    }
}

// Get currency rate from our array
function getCurrencyRate(currencyCode) {
    const currency = currencies.find(c => c.code === currencyCode);
    return currency ? currency.rate : 1;
}

// Format currency for display
function formatCurrency(amount, currencyCode, decimals = 2) {
    // Find currency for symbol
    const currency = currencies.find(c => c.code === currencyCode);
    const symbol = currency ? currency.symbol : currencyCode;
    
    // Format number with commas
    const formattedAmount = amount.toLocaleString('en-US', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
    });
    
    // Return formatted string (symbol at the end for some currencies)
    if (['USD', 'EUR', 'GBP', 'JPY', 'CAD', 'AUD', 'NZD', 'SGD', 'HKD'].includes(currencyCode)) {
        return `${symbol}${formattedAmount}`;
    } else {
        return `${formattedAmount} ${symbol}`;
    }
}

// Update currency symbols
function updateCurrencySymbols() {
    const fromCurrency = currencies.find(c => c.code === currentFromCurrency);
    const toCurrency = currencies.find(c => c.code === currentToCurrency);
    
    fromSymbol.textContent = fromCurrency ? fromCurrency.symbol : currentFromCurrency;
    toSymbol.textContent = toCurrency ? toCurrency.symbol : currentToCurrency;
}

// Select currency
function selectCurrency(type, currencyCode) {
    // Update current currency
    if (type === 'from') {
        currentFromCurrency = currencyCode;
        updateSelectedCurrencyDisplay('from', currencyCode);
    } else {
        currentToCurrency = currencyCode;
        updateSelectedCurrencyDisplay('to', currencyCode);
    }
    
    // Close dropdown
    closeAllDropdowns();
    
    // Update conversion
    convertCurrency();
}

// Update selected currency display
function updateSelectedCurrencyDisplay(type, currencyCode) {
    const currency = currencies.find(c => c.code === currencyCode);
    if (!currency) return;
    
    const element = type === 'from' ? fromCurrencySelected : toCurrencySelected;
    element.innerHTML = `
        <span class="${currency.flag}"></span>
        <span>${currency.code} - ${currency.name}</span>
    `;
    
    // Update active state in dropdown
    const items = type === 'from' ? fromCurrencyList.children : toCurrencyList.children;
    for (let item of items) {
        item.classList.toggle('active', item.dataset.code === currencyCode);
    }
}

// Toggle currency lists
function toggleFromCurrencyList(event) {
    event.stopPropagation();
    fromCurrencyList.classList.toggle('show');
    selectorsOpen.from = !selectorsOpen.from;
    
    // Close other dropdown
    if (selectorsOpen.to) {
        toCurrencyList.classList.remove('show');
        selectorsOpen.to = false;
    }
}

function toggleToCurrencyList(event) {
    event.stopPropagation();
    toCurrencyList.classList.toggle('show');
    selectorsOpen.to = !selectorsOpen.to;
    
    // Close other dropdown
    if (selectorsOpen.from) {
        fromCurrencyList.classList.remove('show');
        selectorsOpen.from = false;
    }
}

// Close all dropdowns
function closeAllDropdowns() {
    fromCurrencyList.classList.remove('show');
    toCurrencyList.classList.remove('show');
    selectorsOpen.from = false;
    selectorsOpen.to = false;
}

// Swap currencies
function swapCurrenciesHandler() {
    // Swap currency codes
    [currentFromCurrency, currentToCurrency] = [currentToCurrency, currentFromCurrency];
    
    // Update displays
    updateSelectedCurrencyDisplay('from', currentFromCurrency);
    updateSelectedCurrencyDisplay('to', currentToCurrency);
    
    // Update conversion
    convertCurrency();
    
    // Add animation effect
    swapCurrencies.style.transform = 'rotate(180deg)';
    setTimeout(() => {
        swapCurrencies.style.transform = 'rotate(0deg)';
    }, 300);
}

// Update active currency cards
function updateActiveCurrencyCards() {
    const cards = document.querySelectorAll('.currency-card');
    cards.forEach(card => {
        if (card.dataset.code === currentFromCurrency || card.dataset.code === currentToCurrency) {
            card.classList.add('active');
        } else {
            card.classList.remove('active');
        }
    });
}

// Save conversion to history
function saveToHistory(originalAmount, convertedAmount) {
    const historyItem = {
        from: currentFromCurrency,
        to: currentToCurrency,
        originalAmount,
        convertedAmount,
        rate: (convertedAmount / originalAmount).toFixed(6),
        timestamp: new Date().toISOString()
    };
    
    // Add to beginning of array
    conversionHistoryData.unshift(historyItem);
    
    // Keep only last 10 items
    if (conversionHistoryData.length > 10) {
        conversionHistoryData = conversionHistoryData.slice(0, 10);
    }
    
    // Save to localStorage
    localStorage.setItem('currency-converter-history', JSON.stringify(conversionHistoryData));
    
    // Update history display
    updateHistoryDisplay();
}

// Load history from localStorage
function loadHistory() {
    const savedHistory = localStorage.getItem('currency-converter-history');
    if (savedHistory) {
        try {
            conversionHistoryData = JSON.parse(savedHistory);
            updateHistoryDisplay();
        } catch (error) {
            console.error('Error loading history:', error);
            conversionHistoryData = [];
        }
    }
}

// Update history display
function updateHistoryDisplay() {
    if (conversionHistoryData.length === 0) {
        conversionHistory.innerHTML = `
            <div class="history-empty">
                <i class="fas fa-history"></i>
                <p>Your conversion history will appear here</p>
            </div>
        `;
        return;
    }
    
    conversionHistory.innerHTML = '';
    
    conversionHistoryData.forEach(item => {
        const historyItem = document.createElement('div');
        historyItem.className = 'history-item';
        
        const fromCurrency = currencies.find(c => c.code === item.from);
        const toCurrency = currencies.find(c => c.code === item.to);
        
        const time = new Date(item.timestamp);
        const timeString = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        
        historyItem.innerHTML = `
            <div>
                <div class="history-amount">
                    ${formatCurrency(item.originalAmount, item.from)} → ${formatCurrency(item.convertedAmount, item.to)}
                </div>
                <div class="history-rate">
                    1 ${item.from} = ${parseFloat(item.rate).toFixed(4)} ${item.to}
                </div>
            </div>
            <div class="history-time">${timeString}</div>
        `;
        
        // Add click to reuse this conversion
        historyItem.addEventListener('click', () => {
            selectCurrency('from', item.from);
            selectCurrency('to', item.to);
            amountInput.value = item.originalAmount;
            convertCurrency();
        });
        
        conversionHistory.appendChild(historyItem);
    });
}

// Clear history
function clearHistory() {
    if (conversionHistoryData.length === 0) return;
    
    if (confirm('Are you sure you want to clear your conversion history?')) {
        conversionHistoryData = [];
        localStorage.removeItem('currency-converter-history');
        updateHistoryDisplay();
        showNotification('History cleared', 'success');
    }
}

// Show notification
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
        <span>${message}</span>
    `;
    
    // Add styles for notification
    const style = document.createElement('style');
    style.textContent = `
        .notification {
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 20px;
            border-radius: 8px;
            color: white;
            display: flex;
            align-items: center;
            gap: 10px;
            z-index: 1000;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            animation: slideIn 0.3s ease;
        }
        .notification-success {
            background-color: var(--success-color);
        }
        .notification-error {
            background-color: var(--danger-color);
        }
        .notification-info {
            background-color: var(--primary-color);
        }
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
    `;
    document.head.appendChild(style);
    
    // Add to document
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
            if (style.parentNode) {
                style.parentNode.removeChild(style);
            }
        }, 300);
    }, 3000);
}

// Initialize with default conversion
convertCurrency();
