
                var upAllOccation = [];
                var upStoreDomain = "importsmxt.myshopify.com";
                var upAppUrl = "https://timer.perfect-app.app/";
                if (!window.isTimerScriptLoaded) {

    window.isTimerScriptLoaded = true;

    window.ocation = {
        all_pages: '1',
        products: '2',
        url: '3'
    };

    const allPagesOcation = upAllOccation.includes('1');
    const productOcation = upAllOccation.includes('2');
    const urlOcation = upAllOccation.includes('3');

    window.currencySymbols = { 
        'AED': 'د.إ', 'AFN': '؋', 'ALL': 'L', 'AMD': '֏', 'ANG': 'ƒ', 'AOA': 'Kz', 'ARS': '$', 'AUD': '$', 'AWG': 'ƒ', 'AZN': '₼', 'BAM': 'KM', 'BBD': '$', 'BDT': '৳', 'BGN': 'лв', 'BHD': '.د.ب', 'BIF': 'FBu', 'BMD': '$', 'BND': '$', 'BOB': 'Bs.', 'BRL': 'R$', 'BSD': '$', 'BTN': 'Nu.', 'BWP': 'P', 'BYN': 'Br', 'BZD': '$', 'CAD': '$', 'CDF': 'FC', 'CHF': 'CHF', 'CLP': '$', 'CNY': '¥', 'COP': '$', 'CRC': '₡', 'CUP': '$', 'CVE': '$', 'CZK': 'Kč', 'DJF': 'Fdj', 'DKK': 'kr', 'DOP': '$', 'DZD': 'د.ج', 'EGP': '£', 'ERN': 'Nkf', 'ETB': 'Br', 'EUR': '€', 'FJD': '$', 'FKP': '£', 'FOK': 'kr', 'GBP': '£', 'GEL': '₾', 'GGP': '£', 'GHS': '₵', 'GIP': '£', 'GMD': 'D', 'GNF': 'FG', 'GTQ': 'Q', 'GYD': '$', 'HKD': '$', 'HNL': 'L', 'HRK': 'kn', 'HTG': 'G', 'HUF': 'Ft', 'IDR': 'Rp', 'ILS': '₪', 'IMP': '£', 'INR': '₹', 'IQD': 'ع.د', 'IRR': '﷼', 'ISK': 'kr', 'JEP': '£', 'JMD': '$', 'JOD': 'د.ا', 'JPY': '¥', 'KES': 'KSh', 'KGS': 'с', 'KHR': '៛', 'KID': '$', 'KMF': 'CF', 'KRW': '₩', 'KWD': 'د.ك', 'KYD': '$', 'KZT': '₸', 'LAK': '₭', 'LBP': 'ل.ل', 'LKR': 'Rs', 'LRD': '$', 'LSL': 'L', 'LYD': 'ل.د', 'MAD': 'د.م.', 'MDL': 'L', 'MGA': 'Ar', 'MKD': 'ден', 'MMK': 'K', 'MNT': '₮', 'MOP': 'P', 'MRU': 'UM', 'MUR': '₨', 'MVR': '.ރ', 'MWK': 'MK', 'MXN': '$', 'MYR': 'RM', 'MZN': 'MT', 'NAD': '$', 'NGN': '₦', 'NIO': 'C$', 'NOK': 'kr', 'NPR': '₨', 'NZD': '$', 'OMR': 'ر.ع.', 'PAB': 'B/.', 'PEN': 'S/.', 'PGK': 'K', 'PHP': '₱', 'PKR': '₨', 'PLN': 'zł', 'PYG': '₲', 'QAR': 'ر.ق', 'RON': 'lei', 'RSD': 'дин.', 'RUB': '₽', 'RWF': 'FRw', 'SAR': '﷼', 'SBD': '$', 'SCR': '₨', 'SDG': 'ج.س.', 'SEK': 'kr', 'SGD': '$', 'SHP': '£', 'SLE': 'Le', 'SLL': 'Le', 'SOS': 'Sh', 'SRD': '$', 'SSP': '£', 'STN': 'Db', 'SYP': '£', 'SZL': 'L', 'THB': '฿', 'TJS': 'ЅМ', 'TMT': 'm', 'TND': 'د.ت', 'TOP': 'T$', 'TRY': '₺', 'TTD': '$', 'TVD': '$', 'TWD': 'NT$', 'TZS': 'Sh', 'UAH': '₴', 'UGX': 'USh', 'USD': '$', 'UYU': '$U', 'UZS': 'сўм', 'VES': 'Bs.', 'VND': '₫', 'VUV': 'VT', 'WST': 'T', 'XAF': 'FCFA', 'XCD': '$', 'XOF': 'CFA', 'XPF': '₣', 'YER': '﷼', 'ZAR': 'R', 'ZMW': 'ZK', 'ZWL': '$' 
    };
    
    let cS; //currency symbol
    const rate = Shopify.currency.rate;
    const noImage = `${upAppUrl}/images/no_image.jpg`;
    const widgetLogo = `${upAppUrl}/images/fav_icon.svg`;
    let porductRequest = false;
    let allowBuildApp = true;

    //check if app active in Shopify customizer
    if (Shopify.designMode) { 
        const isActiveApp = document.querySelector('.up-timer-root-block-status');

        if (!isActiveApp) {
            allowBuildApp = false;
        }
    }

    if (allowBuildApp) {

        addStyles();
        function addStyles () {
            const link = document.createElement('link');

            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.id = 'up-timer-styles';
            link.href = `${upAppUrl}/css/up_timer.css`;

            document.head.appendChild(link);    
        }

        //  trigger Product Page
        if (location.href.includes('/products') && productOcation) {
            const url = location.href;
            const pathSegments = url.split('?')[0].split('/');
            const handle = pathSegments.pop() || '';

            const ocationEvent = window.ocation.products;
            const domain = upStoreDomain;
            porductRequest = true;


            fetchProductData(handle)
            .then(data => {
                const id = data.id;

                fetchData(id, ocationEvent, domain)
                .then((data) => {
                    getCurrencySymbol(data);

                    data.offers.forEach((offerData) => {
                        checkOfferBeforeBuild(offerData);
                    })
                })
            })
            .catch(error => {
                console.error(error);
            });
        }

        //  trigger All Page
        if (allPagesOcation && !porductRequest) {

            const ocationEvent = window.ocation.all_pages;
            const domain = upStoreDomain;
            const id = '';
            allPagesRequest = true;

            fetchData(id, ocationEvent, domain).then((data) => {
                getCurrencySymbol(data);

                data.offers.forEach((offerData) => {
                    checkOfferBeforeBuild(offerData);
                })
            }) 
        }

        //  trigger Url Ocation
        if (!allPagesOcation && !porductRequest && urlOcation ) {
            const ocationEvent = window.ocation.url;
            const domain = upStoreDomain;
            const id = '';
            allPagesRequest = true;


            fetchData(id, ocationEvent, domain).then((data) => {
                getCurrencySymbol(data);

                data.offers.forEach((offerData) => {
                    checkOfferBeforeBuild(offerData);
                })
            }) 
        }

        function checkOfferBeforeBuild (offerData) {
            const eventOcation =  offerData.offer.event_ocassion;

            if (eventOcation === window.ocation.url) {
                let currentUrl = window.location.href;
                const targetUrl = offerData.offer.custom_page_url

                if (currentUrl.includes('?')) {
                    currentUrl = window.location.href.split('?')[0]
                } else {
                    currentUrl = window.location.href;
                }
                
                if (currentUrl === targetUrl) {
                    buildTimer(offerData);
                }
            } else {
                buildTimer(offerData);
            }
        }

        //build preview on Shopify Design
        buildPreviewPlacement()
        function buildPreviewPlacement () {
            const shopifyElem = document.querySelector('.up-timer-root-block');

            if (Shopify.designMode && shopifyElem && shopifyElem.children.length === 0 && shopifyElem.textContent.trim() === '') {

                const style = document.createElement('style');
                style.textContent = `
                    .up-placeholder {
                        display: flex;
                        gap: 15px;
                        width: 100%;
                        background: #b4bdf1;
                        border: 1px solid #3949ab;
                        padding: 10px;
                        border-radius: 5px; 
                    }

                    .up-placeholder-logo {
                        border: 1px solid #3949ab;
                        width: 60px;
                        height: 60px;
                        border-radius: 5px;
                    }

                    .up-placeholder-text {
                        font-size: 18px;
                        line-height: 20px;
                        color: #3949ab;
                    }
                `;

                document.head.appendChild(style);

                let html = `
                    <div class="up-placeholder">
                        <img src=${widgetLogo} class="up-placeholder-logo" alt="app_logo">
                        <span class="up-placeholder-text"><strong>Here, your timer widget will be displayed,</strong> but only after you create and save your first timer.
                    </div>
                `;

                shopifyElem.innerHTML = html;
            }
        }

        function removeDesignPreview() {
            const previewPlaceholder = document.querySelector('.up-placeholder');

            if (previewPlaceholder && Shopify.designMode) {
                previewPlaceholder.remove();
            }
        }

        //Main build function
        function buildTimer(data) {
            if (isTimerShow(data) == false) {
                return;
            }

            const uniqId = generateUniqueId();
            const stylesArr = data.widget;
            addStylesFromData(data, stylesArr, uniqId);

            const title = stylesArr.timer_title_text;
            const subtitle = stylesArr.timer_subtitle_text;
            const redirectUrl = stylesArr.redirect_url;
            const dayLabel = stylesArr.input_day;
            const hourLabel = stylesArr.input_hour;
            const minLabel = stylesArr.input_minute;
            const secLabel = stylesArr.input_second;
            const btnText = stylesArr.timer_btn_text;

            //show-hide constants
            const showSep = stylesArr.show_separators;
            const showBtn = stylesArr.btn_show;
            const showClose = stylesArr.show_close_btn;

            const showDay = stylesArr.show_day;
            const showHour = stylesArr.show_hour;
            const showMin = stylesArr.show_min;
            const showSec = stylesArr.show_sec;

            const showTitle = stylesArr.display_title_show ? '' : 'up-hide';

            const upsell = buildUpsell(data);
            const runningLine = buildRunningLine(data);

            const timerHtml = `
                <div class="up-content">
                    <div class="up-cdt">
                        <div class="up-cdt__close ${showClose ? '' : 'up-hide'}">
                            <div class="up-cdt__close--el"></div>
                        </div>
                        <div class="up-cdt__content">
                            <div class="up-cdt__texts">
                                ${title ? `<h3 class="up-cdt__title">${title}</h3>` : ''}
                                ${subtitle ? `<p class="up-cdt__subtitle">${subtitle}</p>` : ''}
                            </div>

                            <div class="up-cdt__display">
                                <div class="up-cdt__block ${showDay ? '': 'up-hide'}" data-type="day">
                                    <span class="up-cdt__digit" data-type="day"></span>
                                    <span class="up-cdt__name ${showTitle}" data-type="day">${dayLabel}</span>
                                </div>
                                <span class="up-cdt__separator ${showSep && showDay ? '': 'up-hide'}" data-num="1">:</span>
                                <div class="up-cdt__block ${showHour ? '': 'up-hide'}" data-type="hour">
                                    <span class="up-cdt__digit" data-type="hour"></span>
                                    <span class="up-cdt__name ${showTitle}" data-type="hour">${hourLabel}</span>
                                </div>
                                <span class="up-cdt__separator ${showSep && showHour ? '': 'up-hide'}" data-num="2">:</span>
                                <div class="up-cdt__block ${showMin ? '': 'up-hide'}" data-type="min">
                                    <span class="up-cdt__digit" data-type="min"></span>
                                    <span class="up-cdt__name ${showTitle}" data-type="min">${minLabel}</span> 
                                </div>
                                <span class="up-cdt__separator ${showSep && showMin ? '': 'up-hide'}" data-num="3">:</span>
                                <div class="up-cdt__block ${showSec ? '': 'up-hide'}" data-type="sec">
                                    <span class="up-cdt__digit" data-type="sec"></span>
                                    <span class="up-cdt__name ${showTitle}" data-type="sec">${secLabel}</span> 
                                </div>
                            </div>
                        </div>
                        <a class="up-cdt__button" ${showBtn ? '': 'style= \'display: none;\''} target="_blank"  href="${redirectUrl}">${btnText}</a>
                    </div>
                    ${runningLine}
                    ${upsell}
                </div>`;

            const timerWrap = document.createElement('div');
            timerWrap.classList.add('up-widget-timer');
            timerWrap.classList.add('up-hide');
            timerWrap.setAttribute('id', uniqId);
            timerWrap.innerHTML = timerHtml;
            setStartPosition(timerWrap, data);

            setTimerIntoPage(data, timerWrap)
            const rootElem = document.querySelector(`#${uniqId}.up-widget-timer`);

            if (rootElem) {
                setStartTime(data, rootElem);
                closeTimerEvents(showClose, rootElem);
                initUpsellSlider(data, rootElem, uniqId);
                upsellPopup(rootElem, uniqId, data);

                window.addEventListener('resize', adjustWidgetSize);
                setTimeout(() => {
                    adjustWidgetSize(data, uniqId);
                }, 0)
            }

            setOpenAnimation(timerWrap);

            if (rootElem && !Shopify.checkout) {
                createViewStatistic(upStoreDomain ,data.offer.offer_id)
            }
        }

        function setStartPosition(timerWrap, data) {
            const content = timerWrap.querySelector('.up-content');
            const widgetAnimation = data.widget.widget_animation
            content.classList.add(widgetAnimation);
        }

        function setOpenAnimation(timerWrap) {
            const content = timerWrap.querySelector('.up-content');
            timerWrap.classList.remove('up-hide');


            setTimeout(() => {
                content.classList.add('show')
            }, 0);  
        };

        function setCloseAnimation(timerWrap) {
            const content = timerWrap.querySelector('.up-content');
            content.classList.remove('show');

            setTimeout(() => {
                timerWrap.remove();
            }, 500);
        }


        function setTimerIntoPage(data, timerWrap) {
            const pagePosition = data.offer.page_position;
            const positionType = data.offer.position_type;
            const defaultClasses = ['.product-form__buttons'];
            const customClasses = data.offer.custom_classes;

            if (pagePosition === '1') {
                const storeElement = document.querySelector('body');
                storeElement.prepend(timerWrap);

            } else if (pagePosition === '2') {

                removeDesignPreview();

                let targetElem;

                if (document.querySelector('.up-timer-root-block')) {

                    const shopifyElem = document.querySelector('.up-timer-root-block');
                    shopifyElem.appendChild(timerWrap);   
                        
                } else {

                    if (!customClasses.length) {
                        targetElem = getElement(defaultClasses);
                    } else {
                        targetElem = getElement(customClasses);
                    }

                    const storeElement = document.querySelector(`${targetElem}`);

                    if (storeElement) {
                        const elementWidth = storeElement.offsetWidth;
                        timerWrap.setAttribute('style', `max-width: ${elementWidth}px; margin: 10px 0px;`);
                        storeElement.prepend(timerWrap);
                    }
                }
            
            } else if (pagePosition === '3') {
                const storeElement = document.querySelector('body');
                storeElement.append(timerWrap);
            }

            if (positionType === '2'){
                if (pagePosition === '1') {

                    timerWrap.style.position = 'sticky';
                    timerWrap.style.top = '0';
                    timerWrap.style.width = '100%';
                    timerWrap.style.zIndex = '1000';
                } else if (pagePosition === '3') {

                    timerWrap.style.position = 'sticky';
                    timerWrap.style.bottom = '0';
                    timerWrap.style.width = '100%';
                    timerWrap.style.zIndex = '1000';
                }
            }

            function getElement(elemArr) {
                let findElem = null;
            
                elemArr.some((elem) => {
                    if (document.querySelector(elem)) {
                        findElem = elem;
                        return true;
                    }
                    return false;
                });
            
                return findElem;
            }
        }

        function generateUniqueId() {
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let uniqueId = '_';
            for (let i = 0; i < 3; i++) {
                const randomIndex = Math.floor(Math.random() * characters.length);
                uniqueId += characters[randomIndex];
            }
            return uniqueId;
        }

        function adjustWidgetSize(data, uniqId) {
        
            const widget = document.querySelector(`#${uniqId}.up-widget-timer`);
            
            if (widget) {
                const widgetWidth = widget.offsetWidth;

                const qtyUpsellProd = data.upsell_products.length;

                widget.classList.remove('widget--medium', 'widget--large');

                if (widgetWidth >= 1200) {
                    widget.classList.add('widget--large');

                    if (qtyUpsellProd == 2) {
                        widget.classList.add('max--two');
                    } else if (qtyUpsellProd == 1) {
                        widget.classList.add('max--one');
                    }

                } else if (widgetWidth >= 800) {
                    widget.classList.add('widget--medium');

                    if (qtyUpsellProd == 1) {
                        widget.classList.add('max--one');
                    }
                }
            }
        }

        function getCurrencySymbol(data) {
            const activeCurency = Shopify.currency.active;
            let symbol = window.currencySymbols[`${activeCurency}`];

            cS = symbol || '';
        }

        function closeTimerEvents(showClose, rootElem) {

            if (showClose) {
                const closeBtn = rootElem.querySelector('.up-cdt__close');

                closeBtn.addEventListener('click', () => {
                    setCloseAnimation(rootElem);
                })
            }
        }

        function isTimerShow(data) {
            const type = data.offer.time_type;
            const currentDate = new Date();

            if (type === '2') {
                const targetDate = new Date(data.offer.timer_to_date);
                if (targetDate > currentDate) {
                    return true;
                } else {
                    return false;
                }
            } if (type === '3') {
                const startDate = new Date(data.offer.timer_start_date);
                const finishDate = new Date(data.offer.timer_finish_date);

                if (currentDate >= startDate && currentDate <= finishDate) {
                    return true;
                } else {
                    return false;
                }

            } else {
                return true;
            }
        }

        function setStartTime(data, rootElem) {

            const type = data.offer.time_type;

            switch (type) {
                case '1': 
                    const stylesArr = data.widget;

                    const day = stylesArr.input_num_day;
                    const hour = stylesArr.input_num_hour;
                    const min = stylesArr.input_num_min;
                    const sec = stylesArr.input_num_sec;

                    startTimer(day, hour, min, sec, data, rootElem);
                break;
                case '2':
                    calcTimeToDate(data, type, rootElem);
                break;
                case '3':
                    calcTimeToDate(data, type, rootElem);
                break;  
            }  
        }

        function calcTimeToDate(data, type, rootElem) {

            let targetDate;
            
            if (type === "2") {
                targetDate = new Date(data.offer.timer_to_date);
            } else if (type === "3") {
                targetDate = new Date(data.offer.timer_finish_date);
            }
            
            const currentDate = new Date();

            const formatDateComponents = (date) => ({
                year: date.getFullYear(),
                month: date.getMonth() + 1,
                day: date.getDate(),
                hour: date.getHours(),
                minute: date.getMinutes()
            });

            const calculateDifference = (targetComponents, currentComponents) => {
                const millisecondsPerMinute = 1000 * 60;
                const millisecondsPerHour = millisecondsPerMinute * 60;
                const millisecondsPerDay = millisecondsPerHour * 24;

                const targetMs = new Date(targetComponents.year, targetComponents.month - 1, targetComponents.day, targetComponents.hour, targetComponents.minute).getTime();
                const currentMs = new Date(currentComponents.year, currentComponents.month - 1, currentComponents.day, currentComponents.hour, currentComponents.minute).getTime();

                let differenceMs = Math.abs(targetMs - currentMs);

                const days = Math.floor(differenceMs / millisecondsPerDay);
                differenceMs -= days * millisecondsPerDay;

                const hours = Math.floor(differenceMs / millisecondsPerHour);
                differenceMs -= hours * millisecondsPerHour;

                const minutes = Math.floor(differenceMs / millisecondsPerMinute);

                return { days: days, hours: hours, minutes: minutes };
            };

            const targetComponents = formatDateComponents(targetDate);
            const currentComponents = formatDateComponents(currentDate);

            const difference = calculateDifference(targetComponents, currentComponents);

            startTimer(difference.days, difference.hours, difference.minutes, '0', data, rootElem);
        }

        function buildUpsell(data) {
            
            if (!data.widget.upsell_show) {
                return '';
            }

            const upsellProducts = buildUpsellProducts(data);

            const upsellHtml = `
                <div class='up-upsell'>
                    <div class="up-upsell__slider">
                        ${upsellProducts}
                    </div>
                    
                    <div class="up-upsell__nav_prev">
                        <svg height="28" viewBox="0 0 48 48" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M30.83 32.67l-9.17-9.17 9.17-9.17-2.83-2.83-12 12 12 12z"/><path d="M0-.5h48v48h-48z" fill="none"/></svg>
                    </div>
                    <div class="up-upsell__nav_next">
                        <svg height="28" viewBox="0 0 48 48" width="28" xmlns="http://www.w3.org/2000/svg"><path transform="rotate(180 24 24)" d="M30.83 32.67l-9.17-9.17 9.17-9.17-2.83-2.83-12 12 12 12z"/><path d="M0-.5h48v48h-48z" fill="none"/></svg>
                    </div>
                </div>`;

            return upsellHtml;
        };

        function buildUpsellProducts(data) {

            const products = data.upsell_products;
            const btnText = data.widget.upsell_btn_text;

            let productsHtml = ''

            products.forEach(product => {

                const id = product.product_id;
                const price = product.variants[0].variantPrice * rate;
                
                let discount;
                const discountType = product.upsell_products_discount_type;

                if (discountType === "fixed") {
                    discount = product.upsell_products_discount_fixed;
                } else {
                    discount = product.upsell_products_discount;
                }
            
                const name = product.name;
                const img = product.image;
                const showDiscount = discount == 0 ? 'up-hide' : '';
                const priceDecoration = discount > 0 ? 'up-discounted' : '';

                const productHTML = `
                    <div class="up-upsell__container">
                        <input class="up_upsell_id" type='hidden' value="${id}">
                        <div class="up-upsell__left">
                            <img class="up-upsell__img" src="${img !== ''? img : noImage}" alt="productImage">
                            <div class="up-upsell__content">
                                <p class="up-upsell__title">${truncateString(name, 35)}</p>
                                <div class="up-upsell__price">
                                    <span class="up-upsell__disc--price ${priceDecoration}">${cS} ${price.toFixed(2)}</span>
                                    <span class="up-upsell__real--price ${showDiscount}">${cS} ${calcDiscount(price, discount, discountType)}</span>
                                </div>
                            </div>
                        </div>
                        <button class="up-upsell__button">${btnText}</button>
                    </div>
                `;
                productsHtml += productHTML;
            });

            return productsHtml;
        }

        function initUpsellSlider(data, rootElem, uniqId) {
            if (!data.widget.upsell_show) {
                return;
            }

            const widget = rootElem.querySelector('.up-cdt');
            const nextBtn = rootElem.querySelector('.up-upsell__nav_next');
            const prevBtn = rootElem.querySelector('.up-upsell__nav_prev');
            const qtyUpsellProd = data.upsell_products.length;
            const timeSlideData = data.widget.upsell_slide_speed;            ;
            const widgetWidth = widget.offsetWidth;

            if ((widgetWidth >= 1200 && qtyUpsellProd <= 3) ||
                (widgetWidth >= 800 && qtyUpsellProd <= 2) ||
                qtyUpsellProd <= 1) {
                nextBtn.remove();
                prevBtn.remove();
                return;
            }

            const slider = rootElem.querySelector('.up-upsell__slider');
            const slides = Array.from(rootElem.querySelectorAll('.up-upsell__container'));

            let currentIndex = 0;

            function updateSliderPosition() {
                const slideWidth = slides[0].getBoundingClientRect().width;
                const newTransform = `${currentIndex < 0 ? `translateX(${(currentIndex * -1) * slideWidth}px)` : `translateX(-${currentIndex * slideWidth}px)`}`;
                slider.style.transform = newTransform;
            }

            function cloneSlide() {
                const slides = Array.from(rootElem.querySelectorAll('.up-upsell__container'));
                const firstSlide = slides[currentIndex -1].cloneNode(true);
                slider.appendChild(firstSlide);
            }

            function showPrevSlide() {
                currentIndex--;
                slider.style.transition = 'transform 0.5s ease';
                if (currentIndex >= 0) {
                    updateSliderPosition();
                }
            }

            function showNextSlide(rootElem, uniqId) {
                currentIndex++;
                slider.style.transition = 'transform 0.5s ease';

                if (currentIndex > 0) {
                    cloneSlide(); 
                    updateSliderPosition();

                    const upsellBtns = rootElem.querySelectorAll('.up-upsell__button');
                    upsellBtns.forEach((button) => {
                        button.addEventListener('click', (e) => {

                            const upsellContainer = button.closest('.up-upsell__container')
                            const targetProductId = upsellContainer.querySelector('.up_upsell_id').value;
                            buildUpsellPopup(data, targetProductId, uniqId);
                            openPopup(uniqId, button);
                        })
                    })
                }

                if (currentIndex == 0) {
                    prevBtn.style.color= '#c3c3c3';
                } else {
                    prevBtn.style.color= '#4f5158';
                }
            }

            if (currentIndex == 0) {
                prevBtn.style.color= '#c3c3c3';
            } else {
                prevBtn.style.color= '#4f5158';
            }

            prevBtn.addEventListener('click', showPrevSlide);
            nextBtn.addEventListener('click', function() {
                showNextSlide(rootElem, uniqId);
            });

            // Update slider position on window resize
            window.addEventListener('resize', updateSliderPosition);

            // Start auto-slide
            setInterval(function() {
                showNextSlide(rootElem, uniqId);
            }, +timeSlideData * 1000);

            // Initialize slider position
            updateSliderPosition();
        }

        function buildUpsellPopup(data, targetProductId, uniqId) {

            if (document.querySelector('.up-popup')) {
                return;
            }

            const upsellProducts = buildUpsellProductsPopup(data, targetProductId);
            
            const upsellPopupHtml = `
                <div class="up-popup" id-popup="${uniqId}">
                <img class="up-popup-close" src="${upAppUrl}/images/close.svg" alt="close">
                    <div class="up-popup-wrap">
                        <div class="up-popup-content up-plate">
                            ${upsellProducts}
                        </div>
                        <div class="up-popup-footer">
                            <div class="up-popup-price-block">   
                                <div class="up-popup-price-block--item">
                                    <span class="up-popup-price-block--title">Original price:</span>
                                    <span class="up-popup-total-full-price">${cS} 0</span>
                                </div>
                                <div class="up-popup-price-block--item">
                                    <span class="up-popup-price-block--title">Discount:</span>
                                    <span class="up-popup-total-discount-price">${cS} 0</span> 
                                </div>  
                                <div class="up-popup-price-block--item">
                                    <span class="up-popup-price-block--title">Total price:</span>
                                    <span class="up-popup-total-real-price">${cS} 0</span>      
                                </div>              
                            </div>
                            <button class="up-popup-bit_btn">Buy it now</button>
                        </div>
                    </div>
                </div>
            `;


            document.body.insertAdjacentHTML('afterbegin', upsellPopupHtml);

            const closePopupBtn =  document.querySelector('.up-popup-close');
            const rootPopup =  document.querySelector('.up-popup');

            closePopupBtn.addEventListener('click', () => {
                rootPopup.remove();
                document.body.classList.remove('up-overlay');
            })  

            popupEvents(rootPopup);
            popupPurchaseActions(rootPopup, data);

            //set active first product 
            const prodContainer = rootPopup.querySelector('.up-popup-content');
            const products = prodContainer.querySelectorAll('.up-popup-upsell__container');
            products.forEach((product, index) => {
            
                if (index == 0) {
                    const targetButton = product.querySelector('.up-popup-upsell__add');
                    targetButton.click();
                }

                return;
            });
        }

        function popupEvents(rootPopup) {
            const upsellProducts = rootPopup.querySelectorAll('.up-popup-upsell__container');

            upsellProducts.forEach((product) => {
                const addBtn = product.querySelector('.up-popup-upsell__add');

                addBtn.addEventListener('click', (e) => {
                    e.target.classList.toggle('active');
                    
                    if (e.target.classList.contains('active')) {
                        e.target.innerText = 'Added';
                        e.target.closest('.up-popup-upsell__container').setAttribute('data-active', true);
                    } else {
                        e.target.innerText = 'Add';
                        e.target.closest('.up-popup-upsell__container').setAttribute('data-active', false);
                    }

                    calcTotalPrice(rootPopup);
                })

                const qtyInput = product.querySelector('.up-popup-upsell__qty');

                qtyInput.addEventListener('input', (e) =>{
                    const qty = e.target.value;
                
                    const targetProduct = e.target.closest('.up-popup-upsell__container');
                    const pricePerOne = targetProduct.querySelector('.up-popup-upsell_price_per_one').value;
                    const discPriceEl = targetProduct.querySelector('.up-popup-upsell__disc--price');
                    const calcPrice = pricePerOne * qty;


                    const discount = targetProduct.querySelector('.up-popup-upsell_discount').value;
                    const discountType = targetProduct.querySelector('.up-popup-upsell_discount_type').value;

                    if (discount > 0) {
                        const realPriceEl = targetProduct.querySelector('.up-popup-upsell__real--price');
                        const calcDiscountPrice = calcDiscount(calcPrice, discount, discountType);
                        realPriceEl.innerHTML = `${cS} ${calcDiscountPrice}`;
                    }
                
                    discPriceEl.innerHTML = `${cS} ${calcPrice.toFixed(2)}`;

                    calcTotalPrice(rootPopup);
                });

                const qtyPlusBtn = product.querySelector('.up-popup-upsell--plus');
                const qtyMinusBtn = product.querySelector('.up-popup-upsell--minus');

                qtyPlusBtn.addEventListener('click', () => {
                    const qtyInput = product.querySelector('.up-popup-upsell__qty');

                    qtyInput.value ++;

                    const event = new Event('input', {
                        bubbles: true,
                        cancelable: true
                    });

                    qtyInput.dispatchEvent(event);
                })

                qtyMinusBtn.addEventListener('click', () => {
                    const qtyInput = product.querySelector('.up-popup-upsell__qty');

                    
                    if (qtyInput.value > 1) {
                        qtyInput.value --;

                        const event = new Event('input', {
                            bubbles: true,
                            cancelable: true
                        });

                        qtyInput.dispatchEvent(event);
                    }
                })

                const variantInput = product.querySelector('.up-popup-upsell__variations');

                variantInput.addEventListener('change' , (e) => {
                    const selectedOption = e.target.options[e.target.selectedIndex];
                    const targetProduct = e.target.closest('.up-popup-upsell__container');

                    const selectedId = selectedOption.id;
                    const selectedImg = selectedOption.getAttribute('variant_img');
                    const selectedPrice = selectedOption.getAttribute('variant_price');

                    const targetProdImg = targetProduct.querySelector('.up-popup-upsell__img');
                    const targetProdId = targetProduct.querySelector('.up-popup-upsell__variant_id');
                    const targetProdPrice = targetProduct.querySelector('.up-popup-upsell__disc--price');
                    const targetPricePerOne = targetProduct.querySelector('.up-popup-upsell_price_per_one');
                    const targetQtyInput = targetProduct.querySelector('.up-popup-upsell__qty');
        
                    targetProdImg.setAttribute('src', selectedImg);
                    targetProdId.setAttribute('value', selectedId);
                    targetProdPrice.innerHTML = selectedPrice;
                    targetPricePerOne.setAttribute('value', selectedPrice);

                    const inputEvent = new Event('input', { bubbles: true });
                    targetQtyInput.dispatchEvent(inputEvent);
                })


                const infoBtn = product.querySelector('.up-popup_info_block-wrap');

                infoBtn.addEventListener('click', (e) => {
                    const handle = e.target.closest('.up-popup_info_block-wrap').getAttribute('product-handle');
                    window.open(`${window.location.origin}/products/${handle}`, '_blank');
                })

            })
        }

        function calcTotalPrice(rootPopup) {
            const price =  rootPopup.querySelector('.up-popup-total-full-price');
            const discount =  rootPopup.querySelector('.up-popup-total-discount-price');
            const totalPrice = rootPopup.querySelector('.up-popup-total-real-price');
            const bit_btn = rootPopup.querySelector('.up-popup-bit_btn')

            const products = rootPopup.querySelectorAll('.up-popup-upsell__container');
        
            let anyActiveProduct = false;
            let calcPrice = 0;
            let calcTotal = 0;
            let calcDiscount = 0;


            products.forEach((product) => {

                const status = product.getAttribute('data-active');
                if (status === 'true') {

                    anyActiveProduct = true;
                    const originalPrice = product.querySelector('.up-popup-upsell__disc--price').innerHTML;
                    calcPrice += decodePrice(originalPrice);

                    let discountedPrice;
                    if(product.querySelector('.up-popup-upsell__real--price:not(.up-hide)')) {
                        discountedPrice = product.querySelector('.up-popup-upsell__real--price').innerHTML;
                    } else {
                        discountedPrice = 0;
                    }
                    calcTotal+= discountedPrice === 0 ? decodePrice(originalPrice) : decodePrice(discountedPrice);

                    calcDiscount += discountedPrice === 0 ? 0 : decodePrice(originalPrice) - decodePrice(discountedPrice);
                }

                if (!anyActiveProduct) {
                    bit_btn.classList.add('up-popup-bit_btn--disabled');
                } else {
                    bit_btn.classList.remove('up-popup-bit_btn--disabled');
                }
            })

            price.innerHTML = `${cS} ${calcPrice.toFixed(2)}`;
            discount.innerHTML = `-${cS} ${calcDiscount.toFixed(2)}`;
            totalPrice.innerHTML = `${cS} ${calcTotal.toFixed(2)}`;
        }

        function decodePrice(value) {
            return parseFloat(value.split(' ')[1]);
        }

        function popupPurchaseActions(rootPopup, data) {
            const bitBtn = rootPopup.querySelector('.up-popup-bit_btn');

            bitBtn.addEventListener('click', () => {
                rootPopup.classList.add('up-preloader');
                createAddStatistic(upStoreDomain, data.offer.offer_id);
                createPurchaseData(rootPopup, data);
                createOrderFetch(rootPopup)
                .then((data) => {
                    location.href = data.invoice;
                });
            })
        }


        function createPurchaseData (rootPopup, data) {

            const offerId = data.offer.offer_id;
            let products = [];

            const activeProducts = rootPopup.querySelectorAll('.up-popup-upsell__container[data-active="true"]');

            activeProducts.forEach((product) => {
                const var_id = product.querySelector('.up-popup-upsell__variant_id').value;

                products.push(var_id);
            });

            const purchaseData = { offerId, products };
            localStorage.setItem('up-purchase-data', JSON.stringify(purchaseData));
        }

        function buildUpsellProductsPopup(data, targetProductId) {
            const products = data.upsell_products;
            const targetProduct = products.find(product => +product.product_id === +targetProductId);
            const otherProducts = products.filter(product => +product.product_id !== +targetProductId);

            const orderedProducts = targetProduct ? [targetProduct, ...otherProducts] : otherProducts;
            let productsHtml = '';

            orderedProducts.forEach((product) => {
                const id = product.product_id;
                const var_id = product.variants[0].product_id;
                const price = (product.variants[0].variantPrice * rate).toFixed(2);
                // const discount = product.upsell_products_discount;

                let discount;
                const discountType = product.upsell_products_discount_type;

                if (discountType === "fixed") {
                    discount = product.upsell_products_discount_fixed;
                } else {
                    discount = product.upsell_products_discount;
                }

                const name = product.name;
                const img = product.image;
                const showVariants = product.variants.length >= 2 ? '' : 'up-hide';
                const showDiscount = discount == 0 ? 'up-hide' : '';
                const priceDecoration = discount > 0 ? 'up-discounted' : '';
                const handle = product.handle;
                const variants = buildVariants(product);

                const productHTML = `
                    <div class="up-popup-upsell__container" data-active="false">
                        <input class="up-popup-upsell_id" type='hidden' value="${id}">
                        <input class="up-popup-upsell__variant_id" type='hidden' value="${var_id}">
                        <input class="up-popup-upsell_price_per_one" type='hidden' value="${price}">
                        <input class="up-popup-upsell_discount" type='hidden' value="${discount}">
                        <input class="up-popup-upsell_discount_type" type='hidden' value="${discountType}">
                        <input class="up-popup-upsell_title" type='hidden' value="${name}">

                        <div class="up-popup-upsell__left">
                            <img class="up-popup-upsell__img" src="${img !== ''? img : noImage}" alt="upsell_product">
                            <div class="up-upsell__content">
                                <span class="up-popup-upsell__label ${showDiscount}">${discountType === "fixed" ? `-${discount * rate} ${cS}` : `-${discount} %` }</span>
                                <p class="up-popup-upsell__title">${truncateString(name, 40)}</p>
                                <div class="up-popup-upsell__price">
                                    <span class="up-popup-upsell__disc--price ${priceDecoration}">${cS} ${price}</span>
                                    <span class="up-popup-upsell__real--price ${showDiscount}">${cS} ${calcDiscount(price, discount, discountType)}</span>
                                    <select class="up-popup-upsell__variations ${showVariants}" name="variations">
                                        ${variants}
                                    </select>
                                </div>
                            </div>
                            <div class="up-popup_info_block">
                                <div class="up-popup_info_block-wrap" product-handle="${handle}">
                                <svg height="24" viewBox="0 0 48 48" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h48v48h-48z" fill="none"/><path d="M22 34h4v-12h-4v12zm2-30c-11.05 0-20 8.95-20 20s8.95 20 20 20 20-8.95 20-20-8.95-20-20-20zm0 36c-8.82 0-16-7.18-16-16s7.18-16 16-16 16 7.18 16 16-7.18 16-16 16zm-2-22h4v-4h-4v4z" fill="#fff"/></svg>
                                </div>
                            </div>
                        </div>
                        <div style="display:flex; gap: 5px">
                            <div class="up-popup-upsell__qty-block">
                                <button class="up-popup-upsell--minus">-</button>
                                    <input type="number" class="up-popup-upsell__qty" min="0" value="1">
                                <button class="up-popup-upsell--plus">+</button>
                            </div>
                            <button class="up-popup-upsell__add">Add</buttom>
                        </div>
                    </div>
                `;

                productsHtml += productHTML;
            });

            return productsHtml;
        }

        function buildVariants(product) {

            let option = '';

            if(product.variants.length < 2){
                return '';
            }

            product.variants.forEach((variant) => {
                const name = variant.name;
                const id = variant.product_id;
                const img = variant.image;
                const variantPrice = variant.variantPrice;

                const optionHTML = `<option variant_img="${img}" variant_price="${variantPrice}" id="${id}">${name}</option>`;

                option += optionHTML;
            })

            return option;
        }

        function upsellPopup(rootElem, uniqId, data) {

            const upsellBtns = rootElem.querySelectorAll('.up-upsell__button');

            upsellBtns.forEach((button) => {
                button.addEventListener('click', (e) => {

                    const upsellContainer = button.closest('.up-upsell__container')
                    const targetProductId = upsellContainer.querySelector('.up_upsell_id').value;
                    buildUpsellPopup(data, targetProductId, uniqId);
                    openPopup(uniqId, button);
                })
            })
        }
        

        function openPopup(uniqId, button) {
            const popup = document.querySelector(`.up-popup[id-popup="${uniqId}"]`);

            popup.classList.add('visible');
            document.body.classList.add('up-overlay');
        }

        function truncateString(string, maxLength = 100) {
            if (string.length <= maxLength) {
                return string;
            } else {
                return string.substring(0, maxLength) + '...';
            }
        }

        function calcDiscount(price, discount, discountType) {
            let discountedPrice;

            if (discountType === "fixed") {
                discountedPrice = price - (discount * rate);
            } else {
                discountedPrice = price - (price * discount/100);
            }

            return discountedPrice.toFixed(2);
        }

        function buildRunningLine(data) {
            const showLine = data.widget.running_line_show;
            if (!showLine) { return ''}

            const title = data.widget.running_line_text;
            const icon = data.widget.running_line_icon;

            const smile = {
                'icon_none': '',
                'icon_1': '🔥',
                'icon_2': '🎁',
                'icon_3': '⚡️',
                'icon_4': '❄️',
                'icon_5': '✨️',
                'icon_6': '🎃',
                'icon_7': '⏳️',
            }

            const createTickerItems = (title, icon, smile, count) => {
                let items = '';
                for (let i = 0; i < count; i++) {
                    items += `
                        <li class="up-stock-ticker-li">
                            <span class="up-stock-ticker-text">${title}</span>
                            <span class="up-stock-ticker-icon">${smile[icon]}</span>
                        </li>
                    `;
                }
                return items;
            };
            
            const runningLineHtml = `
                <div class="up-stock-ticker">
                    <ul class="up-stock-ticker-ul">
                        ${createTickerItems(title, icon, smile, 15)}
                    </ul>
                    <ul class="up-stock-ticker-ul" aria-hidden="true">
                        ${createTickerItems(title, icon, smile, 15)}
                    </ul>
                </div>
            `;

            return runningLineHtml;
        }

        function addStylesFromData(data, stylesArr, id) {
            const styles = document.createElement('style');
            const pagePosition = data.offer.page_position;

            const stylesInner = `

                #${id}.up-widget-timer {
                    overflow: hidden;
                }

                #${id} .up-content {
                    border: ${stylesArr.cdt_bw} solid ${stylesArr.cdt_bc};
                    border-radius: ${pagePosition === "2" ? stylesArr.cdt_br : '0px'};
                }

                #${id} .up-cdt {

                    ${ stylesArr.timer_bg !== 'none' ? 
                        `background-image: url(${upAppUrl}/images/backgrounds/${stylesArr.timer_bg}.jpg);` :
                        (stylesArr.gradient_type === 'standart' ?
                            `background: ${stylesArr.cdt_bg};` :
                            `background: ${buildGradient(stylesArr.gradient_colors, stylesArr.gradient_position)};`
                        )
                    }

                    padding-left: ${stylesArr.cdt_padding_l};
                    padding-right: ${stylesArr.cdt_padding_r};
                    padding-top: ${stylesArr.cdt_padding_t};
                    padding-bottom: ${stylesArr.cdt_padding_b};
                }
                
                @media(max-width: 425px) {
                    #${id} .up-cdt {
                        padding-left: ${stylesArr.cdt_padding_l_m};
                        padding-right: ${stylesArr.cdt_padding_r_m};
                        padding-top: ${stylesArr.cdt_padding_t_m};
                        padding-bottom: ${stylesArr.cdt_padding_b_m};
                    }
                }

                #${id} .up-cdt__close {
                    top: ${stylesArr.cdt_close_size_position_y};
                    right: ${stylesArr.cdt_close_size_position_x};
                }
                
                @media(max-width: 425px) {
                    #${id} .up-cdt__close {
                        top: ${stylesArr.cdt_close_size_position_y_m};
                        right: ${stylesArr.cdt_close_size_position_x_m};
                    }
                }

                #${id} .up-cdt__close--el {
                    height: ${stylesArr.cdt_close_size};
                }
                
                @media(max-width: 425px) {
                    #${id} .up-cdt__close--el {
                        height: ${stylesArr.cdt_close_size_m};
                    }
                }

                #${id} .up-cdt__close--el::before,
                #${id} .up-cdt__close--el::after {
                    background: ${stylesArr.cdt_close_color_a};
                }
                
                #${id} .up-cdt__title {
                    color: ${stylesArr.cdt_title_color};
                    font-family: ${stylesArr.timer_font_style};
                    font-size: ${stylesArr.cdt_title_fs};
                    line-height: ${stylesArr.cdt_title_lh};
                    font-weight: ${stylesArr.cdt_title_fw};
                    font-style: ${stylesArr.cdt_title_f_style};
                }
                
                @media(max-width: 425px) {
                    #${id} .up-cdt__title {
                        line-height: ${stylesArr.cdt_title_lh_m};
                        font-size: ${stylesArr.cdt_title_fs_m};
                    }
                }

                #${id} .up-cdt__subtitle {
                    color: ${stylesArr.cdt__subtitle_color};
                    font-family: ${stylesArr.timer_font_style};
                    font-size: ${stylesArr.cdt_subtitle_fs};
                    line-height: ${stylesArr.cdt_subtitle_lh};
                    font-weight: ${stylesArr.cdt_subtitle_fw};
                    font-style: ${stylesArr.cdt_subtitle_f_style};
                }
                
                @media(max-width: 425px) {
                    #${id} .up-cdt__subtitle {
                        line-height: ${stylesArr.cdt_subtitle_lh_m};
                        font-size: ${stylesArr.cdt_subtitle_fs_m};
                    }
                }

                #${id} .up-cdt__button {
                    background: ${stylesArr.cdt_button_bg};
                    font-family: ${stylesArr.timer_font_style};
                    color: ${stylesArr.cdt_button_color};
                    font-size: ${stylesArr.cdt_button_fs};
                    line-height: ${stylesArr.cdt_button_lh};
                    border: ${stylesArr.cdt_button_bw} solid ${stylesArr.cdt_button_bc};
                    border-radius: ${stylesArr.cdt_button_br};
                    font-weight:  ${stylesArr.cdt_button_fw};
                    font-style: ${stylesArr.cdt_button_f_style};
                    padding-top: ${stylesArr.cdt_button_padding_t};
                    padding-bottom: ${stylesArr.cdt_button_padding_b};
                    padding-left: ${stylesArr.cdt_button_padding_l};
                    padding-right: ${stylesArr.cdt_button_padding_r};
                }

                #${id} .up-cdt__button:hover {
                    background: ${stylesArr.cdt_button_bg_h};
                    color: ${stylesArr.cdt_button_color_h};
                    border: ${stylesArr.cdt_button_bw} solid ${stylesArr.cdt_button_bc_h};
                }

                #${id} .up-cdt__display {
                    gap: ${stylesArr.display_gap};
                }
                
                @media(max-width: 425px) {
                    #${id} .up-cdt__display {
                    gap: ${stylesArr.display_gap_m};
                    }
                }

                #${id} .up-cdt__separator {
                    color: ${stylesArr.display_separator_color};
                    font-family: ${stylesArr.timer_font_style};
                    font-size: ${stylesArr.display_separator_fs}; 
                    line-height: ${stylesArr.display_separator_lh};
                }
                
                @media(max-width: 425px) {
                    #${id} .up-cdt__separator {
                        line-height: ${stylesArr.display_digit_lh_m};
                        font-size: ${stylesArr.display_separator_fs_m};
                    }
                }
                
                #${id} .up-cdt__digit {
                    color: ${stylesArr.display_digit_color};
                    font-family: ${stylesArr.timer_font_style};
                    background: ${stylesArr.display_digit_bg};
                    font-size: ${stylesArr.display_digit_fs};
                    line-height: ${stylesArr.display_digit_lh};
                    padding: ${stylesArr.display_digit_padding};
                    border-radius: ${stylesArr.display_digit_br};
                    font-weight: ${stylesArr.display_digit_fw};
                    font-style: ${stylesArr.display_digit_f_style};
                }
                
                @media(max-width: 425px) {
                    #${id} .up-cdt__digit {
                        line-height: ${stylesArr.display_digit_lh_m};
                        padding: ${stylesArr.display_digit_padding_m};
                        font-size: ${stylesArr.display_digit_fs_m};
                        min-width: calc(${stylesArr.display_digit_fs_m} + 5px)
                    }
                }

                #${id} .up-cdt__name {
                    color: ${stylesArr.display_title_color};
                    font-family: ${stylesArr.timer_font_style};
                    font-size: ${stylesArr.display_title_fs};
                    line-height: ${stylesArr.display_title_lh};
                    font-weight: ${stylesArr.display_title_fw};
                    font-style: ${stylesArr.display_title_f_style};
                } 
                
                #${id} .up-upsell {
                    background: ${stylesArr.upsell_bg};
                }

                #${id} .up-upsell__container {
                    padding-top: ${stylesArr.upsell_padding_t};
                    padding-bottom: ${stylesArr.upsell_padding_b};
                    padding-left: ${stylesArr.upsell_padding_l};
                    padding-right: ${stylesArr.upsell_padding_r};
                }
                
                @media(max-width: 425px) {
                    #${id} .up-upsell__container {
                        padding-top: ${stylesArr.upsell_padding_t_m};
                        padding-bottom: ${stylesArr.upsell_padding_b_m};
                        padding-left: ${stylesArr.upsell_padding_l_m};
                        padding-right: ${stylesArr.upsell_padding_r_m};
                    }
                }

                #${id} .up-upsell__img {
                    height: ${stylesArr.upsell_img_height};
                    width: ${stylesArr.upsell_img_width};
                }

                #${id} .up-upsell__title {
                    color: ${stylesArr.upsell_title_color};
                    font-size: ${stylesArr.upsell_title_fs};
                    line-height: ${stylesArr.upsell_title_lh};
                }
                
                @media(max-width: 425px) {
                    #${id} .up-upsell__title {
                        font-size: ${stylesArr.upsell_title_fs_m};
                        line-height: ${stylesArr.upsell_title_lh_m};
                    }
                }

                #${id} .up-upsell__real--price {
                    color: ${stylesArr.upsell_price_color};
                    font-size: ${stylesArr.upsell_price_fs};
                    line-height: ${stylesArr.upsell_price_lh};
                }
                
                @media(max-width: 425px) {
                    #${id} .up-upsell__real--price {
                        font-size: ${stylesArr.upsell_price_fs_m};
                        line-height: ${stylesArr.upsell_price_lh_m};
                    }
                }

                #${id} .up-upsell__disc--price {
                    color: ${stylesArr.upsell_discount_color};
                    font-size: ${stylesArr.upsell_discount_fs};
                    line-height: ${stylesArr.upsell_discount_lh};
                }
                
                @media(max-width: 425px) {
                    #${id} .up-upsell__disc--price {
                        font-size: ${stylesArr.upsell_discount_fs_m};
                        line-height: ${stylesArr.upsell_discount_lh_m};
                    }
                }

                #${id} .up-upsell__button {
                    background: ${stylesArr.upsell_button_bg};
                    border-radius: ${stylesArr.upsell_button_br};
                    color: ${stylesArr.upsell_button_color};
                    font-size: ${stylesArr.upsell_button_fs};
                    line-height: ${stylesArr.upsell_button_lh};
                    border: ${stylesArr.upsell_button_bw} solid ${stylesArr.upsell_button_bc};
                    padding-top: ${stylesArr.upsell_button_padding_t};
                    padding-bottom: ${stylesArr.upsell_button_padding_b};
                    padding-left: ${stylesArr.upsell_button_padding_l};
                    padding-right: ${stylesArr.upsell_button_padding_r};
                    white-space: nowrap;
                }
                
                @media(max-width: 425px) {
                    #${id} .up-upsell__button {
                        font-size: ${stylesArr.upsell_button_fs_m};
                        line-height: ${stylesArr.upsell_button_lh_m};
                        padding-top: ${stylesArr.upsell_button_padding_t_m};
                        padding-bottom: ${stylesArr.upsell_button_padding_b_m};
                        padding-left: ${stylesArr.upsell_button_padding_l_m};
                        padding-right: ${stylesArr.upsell_button_padding_r_m};
                    }
                }

                #${id} .up-upsell__button:hover {
                    color: ${stylesArr.upsell_button_color_h};
                    background: ${stylesArr.upsell_button_bg_h};
                    border: ${stylesArr.upsell_button_bw} solid ${stylesArr.upsell_button_bc_h};
                }

                #${id} .up-stock-ticker-ul {
                    animation: scroll ${stylesArr.running_line_speed}s linear infinite;
                    gap: ${stylesArr.running_line_gap};
                }

                #${id} .up-stock-ticker-li {
                    line-height: ${stylesArr.running_line_fs};
                }

                #${id} .up-stock-ticker-text {
                    font-family: Rubik, sans-serif;
                }

                #${id} .up-stock-ticker {
                    color: ${stylesArr.running_line_color};
                    background: ${stylesArr.running_line_bg};
                    font-size: ${stylesArr.running_line_fs};
                    padding-block: ${stylesArr.running_line_padding};
                    border-width: ${stylesArr.running_line_bw};
                    border-color: ${stylesArr.running_line_bc};
                }

            
                ${prefixCSSWithID(id, stylesArr.custom_css) }

            `;
            
            styles.innerHTML = stylesInner;
            document.head.appendChild(styles);
        }

        function prefixCSSWithID(id, cssString) {
            if (!cssString) {
                return '';
            }

            const rules = cssString.split(/(?<=})/);

            const prefixedRules = rules.map(rule => {
                rule = rule.trim();

                if (rule.startsWith('@media')) {
                    const mediaParts = rule.split('{');
                    const mediaSelector = mediaParts[0].trim();
                    const mediaContent = mediaParts.slice(1).join('{').replace(/}$/, '').trim();

                    const innerRules = mediaContent.split('}');
                    const prefixedInnerRules = innerRules.map(innerRule => {
                        const parts = innerRule.split('{');
                        if (parts.length === 2) {
                            const selectors = parts[0].split(',').map(selector => {
                                if (selector.includes('up-widget-timer')) {
                                    return `#${id}${selector.trim()}`;
                                } else if (selector.includes('??')) {
                                    return `${selector.trim().replace(/^\?\?/, '')}`;
                                } else {
                                    return `#${id} ${selector.trim()}`;
                                }
                            });
                            return `${selectors.join(', ')} {${parts[1]}}`;
                        }
                        return '';
                    }).filter(Boolean).join(' ');

                    return `${mediaSelector} { ${prefixedInnerRules} }`;


                } else {
                    const parts = rule.split('{');
                    if (parts.length === 2) {
                        const selectors = parts[0].split(',').map(selector => {
                            if (selector.includes('up-widget-timer')) {
                                return `#${id}${selector.trim()}`;
                            } else if (selector.includes('??')) {
                                return `${selector.trim().replace(/^\?\?/, '')}`;
                            } else {
                                return `#${id} ${selector.trim()}`;
                            }
                        });
                        return `${selectors.join(', ')} {${parts[1]}`;
                    }
                }

                
                return '';
            }).filter(Boolean);
            
            return prefixedRules.join(' ');
        }

        function buildGradient(colors, position) {
            const gradient = `linear-gradient(${position}deg, ${colors.join(', ')})`;
            return gradient;
        }

        function startTimer (days, hours, minutes, seconds, data, rootElem) {
            const offerId = data.offer.offer_id;
            const timeType = data.offer.time_type;
            const cookieId = getCookieId(data);


            if (getCookie(`up-timer-${offerId}-${cookieId}`) && timeType == 1) {
                const time = getCookie(`up-timer-${offerId}-${cookieId}`);
                const timeSplitted = time.split(',');

                days = timeSplitted[0];
                hours = timeSplitted[1];
                minutes = timeSplitted[2];
                seconds = timeSplitted[3];
            }

            const startValues = {
                days,
                hours,
                minutes,
                seconds
            }
            let intervalId

            clearInterval(intervalId);
            
            const day = rootElem.querySelector('.up-cdt__digit[data-type="day"]');
            const hour = rootElem.querySelector('.up-cdt__digit[data-type="hour"]');
            const min = rootElem.querySelector('.up-cdt__digit[data-type="min"]');
            const sec = rootElem.querySelector('.up-cdt__digit[data-type="sec"]');


            function updateTimer() {
                sec.innerText = seconds < 10 ? `0${seconds || 0}` : seconds || 0;
                min.innerText = minutes < 10 ? `0${minutes || 0}` : minutes || 0;
                hour.innerText = hours < 10 ? `0${hours || 0}` : hours || 0;
                day.innerText = days < 10 ? `0${days || 0}` : days || 0;

                setCookieActualTime(data, days, hours, minutes, seconds);
            }

            function countdown() {

                if (days == 0 && hours == 0 && minutes == 0 && seconds == 0) {
                    clearInterval(intervalId);
                    endTimerAction(startValues.days, startValues.hours, startValues.minutes, startValues.seconds, data, rootElem);
                    return;
                }

                seconds--;

                if (seconds < 0) {
                    seconds = 59;
                    minutes--;

                    if (minutes < 0) {
                        minutes = 59;
                        hours--;

                        if (hours < 0) {
                            hours = 23;
                            days--;
                        }
                    }
                }
                updateTimer();
            }

            intervalId = setInterval(countdown, 1000);
            updateTimer();
        }

        function endTimerAction(days, hours, minutes, seconds, data, rootElem) {
            const timerAction = data.offer.event_action;
            const offerId = data.offer.offer_id;
            const cookieId = getCookieId(data);

            if (data.offer.time_type === '1') {

                if (timerAction === '1') {
                    rootElem.remove();
                    document.cookie = `up-timer-${offerId}-${cookieId}` + '=; Max-Age=-99999999;';

                } else if (timerAction === '2') {
                    document.cookie = `up-timer-${offerId}-${cookieId}` + '=; Max-Age=-99999999;';
                    const value = [days, hours, minutes, seconds];
                    const cookieExpHours = 1
                    setCookie(`up-timer-${offerId}-${cookieId}`, value, cookieExpHours);
                    startTimer (days, hours, minutes, seconds, data, rootElem);

                } else if (timerAction === '3') {
                    const targetLocation = data.offer.custom_action_url;
                    rootElem.remove();
                    document.cookie = `up-timer-${offerId}-${cookieId}` + '=; Max-Age=-99999999;';
                    location.href = targetLocation;
                }

            } else {
                rootElem.remove();
                document.cookie = `up-timer-${offerId}-${cookieId}` + '=; Max-Age=-99999999;';
            }
        }

        function setCookieActualTime(data, days, hours, minutes, seconds) {
            const offerId = data.offer.offer_id;
            const timeType = data.offer.time_type;
            const cookieId = getCookieId(data);


            if (timeType === '1'){
                const value = [days, hours, minutes, seconds];
                const cookieExpHours = 1

                setCookie(`up-timer-${offerId}-${cookieId}`, value, cookieExpHours)
            }
        }

        function getCookieId(data) {
            const updatedTime = data.offer.offer_updated;
            const id = updatedTime.split(' ')[1].replace(/:/g, '');

            return id;
        }

        function setCookie(name, value, hours) {
            const date = new Date();
            date.setTime(date.getTime() + (hours * 60 * 60 * 1000));
            const expires = "expires=" + date.toUTCString();
            document.cookie = name + "=" + value + ";" + expires + ";path=/";
        }

        function getCookie(name) {
            var nameEQ = name + "=";
            var ca = document.cookie.split(';');
            for(var i=0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
            }
            return null;
        }

        function createDraftData(root) {
            const domain = upStoreDomain;
            const line_items = [];

            const activeProducts = root.querySelectorAll('.up-popup-upsell__container[data-active="true"]');

            activeProducts.forEach((product) => {
                const id = product.querySelector('.up-popup-upsell_id').value;
                const var_id = product.querySelector('.up-popup-upsell__variant_id').value;
                const quantity = product.querySelector('.up-popup-upsell__qty').value;

                // const discount = product.querySelector('.up-popup-upsell_discount').value;
                const discountType = product.querySelector('.up-popup-upsell_discount_type').value;
                let discount;

                const title = product.querySelector('.up-popup-upsell_title').value;
                const price = ((product.querySelector('.up-popup-upsell_price_per_one').value * 100)/rate).toString();

                if (discountType === "fixed") {
                    const discount_fixed = product.querySelector('.up-popup-upsell_discount').value;
                    discount = ((discount_fixed * 100 / rate) / +price) * 100;
                     
                } else {
                    discount = product.querySelector('.up-popup-upsell_discount').value;
                }

                line_items.push({
                    title: title,
                    product_id: +id,
                    variant_id: +var_id ,
                    quantity: quantity,
                    price: price,
                    discount: {
                        value_type: "%",
                        value: discount
                    }
                })
            })

            return {
                domain,
                line_items
            }
        }

        //createPurchaseStatistic
        if (Shopify.checkout) {
            const purchaseData = JSON.parse(localStorage.getItem('up-purchase-data'));

            if (purchaseData) {
                const lineItems = Shopify.checkout.line_items;
                const lineItemIds = lineItems.map(item => item.variant_id.toString());
                const allMatch = purchaseData.products.every(productId => lineItemIds.includes(productId));

                if (allMatch) {
                    const totalPrice = Shopify.checkout.subtotal_price

                    createPurchaseStatistic(upStoreDomain, purchaseData.offerId, totalPrice.toString());

                    localStorage.removeItem('up-purchase-data');
                }
            }
        }

        //Storefront fetch requests
        async function fetchProductData(handle) {

            const url = `${handle}.js`;
        
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return await response.json();
        }

        async function fetchData (id, ocation, domain) {
            
            const requestData = {
                "product_id": `${id}`,
                "store_domain": `${domain}`,
                "event_occation": `${ocation}`
            }

            const url = `${upAppUrl}storefront/get-offer`;
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestData)
            };

            try {
                const response = await fetch(url, options);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                } else {
                    return await response.json();
                }
            } catch (error) {
                console.error('Error', error);
                throw error;
            }
        }

        async function createOrderFetch(root) {
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "Accept": "application/json"
                },
                body: JSON.stringify(createDraftData(root))
            };

            let url =  `${upAppUrl}storefront/draft-order`;

            const resp = await fetch(url, options);

            if (!resp.ok) {
                throw new Error(`HTTP error, status = ${resp.status}`);
            }

            return await resp.json();
        }

        async function createViewStatistic(shopify_domain , timerId) {
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    shopify_domain,
                    timerId,
                    view: 1
                }),
            };

            let url =  `${upAppUrl}statistic/statistic-view`;
            
            const resp = await fetch(url, options);

            if (!resp.ok) {
                throw new Error(`HTTP error, status = ${resp.status}`);
            }

            return await resp;
        }

        async function createAddStatistic(shopify_domain, timerId) {
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    shopify_domain,
                    timerId,
                    addCard: 1
                }),
            };

            let url = `${upAppUrl}statistic/card-statistic`;
            
            const resp = await fetch(url, options);

            if (!resp.ok) {
                throw new Error(`HTTP error, status = ${resp.status}`);
            }

            return await resp.json();
        }

        async function createPurchaseStatistic(shopify_domain, timerId, profit) {
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    shopify_domain,
                    timerId,
                    profit
                }),
            };

            let url = `${upAppUrl}statistic/profit-statistic`;
            
            const resp = await fetch(url, options);

            if (!resp.ok) {
                throw new Error(`HTTP error, status = ${resp.status}`);
            }

            return await resp.json();
        }
    }
}