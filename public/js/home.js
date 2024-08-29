(() => {
	const menu = document.querySelector('.menu');
	const navbar = document.querySelector('.navbar');
	const menuBar = document.querySelector('#menu-bar')
	const mobileMenuBar = document.querySelector('#mobile-menu-bar')

	const pad = window.matchMedia("(max-width: 992px)")

	// const offsetData = [
	// 	{
	// 		name: 'feature',
	// 		offset: $('#features-section').offset().top,
	// 		title: '商品特色',
	// 	},
	// 	{
	// 		name: 'content',
	// 		offset: $('#content-section').offset().top,
	// 		title: '保障內容',
	// 	},
	// 	{
	// 		name: 'cost',
	// 		offset: $('#cost-section').offset().top,
	// 		title: '保費試算',
	// 	},
	// 	{
	// 		name: 'recommend',
	// 		offset: $('#recommend-section').offset().top,
	// 		title: '熱門推薦',
	// 	},
	// 	{
	// 		name: 'limit',
	// 		offset: $('#limit-section').offset().top,
	// 		title: '投保限制',
	// 	},
	// 	{
	// 		name: 'rule',
	// 		offset: $('#rule-section').offset().top,
	// 		title: '投保規定',
	// 	},
	// 	{
	// 		name: 'case',
	// 		offset: $('#case-section').offset().top,
	// 		title: '理賠案例',
	// 	},
	// 	{
	// 		name: 'qa',
	// 		offset: $('#qa-section').offset().top,
	// 		title: '旅平險小百科',
	// 	},
	// 	{
	// 		name: 'more-product',
	// 		offset: $('#more-product-section').offset().top,
	// 		title: '更多商品',
	// 	},
	// ]


	/**
	 * @description 隱藏/顯示header
	 */
	// const hideNavContent = () => {
	// 	const windowYOffest = window.pageYOffset;

	// 	// pad 以下
	// 	if (pad.matches) {
	// 		if (windowYOffest > $('#mobile-menu').offset().top - 50) {
	// 			navbar.style.top = '-63px';
	// 			mobileMenuBar.style.opacity = 1;
	// 			mobileMenuBar.style.visibility = 'visible';
	// 			mobileMenuBar.style.marginTop = 0;
	// 			// 隱藏menu bar
	// 			$('#bar-menu-items-wrapper').slideUp();
	// 		}
	// 		else {
	// 			navbar.style.top = '0';
	// 			mobileMenuBar.style.marginTop = '63px';
	// 			mobileMenuBar.style.opacity = 0;
	// 			mobileMenuBar.style.visibility = 'hidden';
	// 		}
	// 		return
	// 	}

	// 	// pc
	// 	if (windowYOffest > $('.menu').offset().top - 50) {
	// 		navbar.style.top = '-63px';
	// 		menuBar.style.marginTop = 0;
	// 	}
	// 	else {
	// 		navbar.style.top = '0';
	// 		menuBar.style.marginTop = '63px';
	// 	}
	// }
	// window.addEventListener('scroll', hideNavContent)

	/**
	 * @description 滾動時依section改變menu bar樣式
	 */
	// const changeMenuItemStyle = function () {
	// 	const windowYOffest = window.pageYOffset;
	// 	const currentSection = offsetData.reduce((a, b) => {
	// 		return Math.abs(b.offset - windowYOffest) < Math.abs(a.offset - windowYOffest) ? b : a;
	// 	});

	// 	const menuBarItem = document.querySelectorAll('[data-sect-name]');
	// 	let activeBarItem;
	// 	for (let i = 0; i < menuBarItem.length; i++) {
	// 		if (menuBarItem[i].dataset.sectName === currentSection.name) {
	// 			activeBarItem = menuBarItem[i]
	// 		}
	// 		menuBarItem[i].classList.remove('active');
	// 	}
	// 	activeBarItem.classList.add('active');
	// }

	// const changeMobileMenuText = function () {
	// 	const windowYOffest = window.pageYOffset;
	// 	const currentSection = offsetData.reduce((a, b) => {
	// 		return Math.abs(b.offset - windowYOffest) < Math.abs(a.offset - windowYOffest) ? b : a;
	// 	});
	// 	$('.mobile-menu .current-section').text(currentSection.title);
	// }

	// window.addEventListener('scroll', changeMenuItemStyle)
	// if (pad.matches) {
	// 	window.addEventListener('scroll', changeMobileMenuText)
	// }

	/**
	 * @description 切換modal的tab
	 */
	function handleTabClick() {
		// change tab style
		$('#case-modal .tab').removeClass('active');
		$(this).addClass('active');

		// show content
		const dataAttr = $(this).data('case-content');
		const contentToShow = document.querySelector(`#${dataAttr}`);

		$('#case-modal .wrapper').css('display', 'none');
		$('#case-modal .wrapper').scrollTop(0);
		contentToShow.style.display = 'flex';
	}
	// 切換 modal tab
	$('#case-modal .tab').click(
		handleTabClick
	)

	/**
	 * @description modal close 時tab切第一個
	 */
	$('#case-modal').on('hidden.bs.modal', function () {
		$('.tabs-group .tab').removeClass('active');
		$('.tabs-group .tab:first-child').addClass('active');
		$('#case-content1').css('display', 'flex');
	});

	/**
	 * @description 切換保費試算地點
	 */
	// function toggleLocation() {
	// 	$(this).addClass('active');
	// 	$(this).siblings('.button').removeClass('active');

	// 	if ($(this).text() === '國外') {
	// 		$('.oversea-ins').css('display', 'flex');
	// 	} else {
	// 		$('.oversea-ins').css('display', 'none');
	// 	}
	// };
	// $('.toggle .button').click(toggleLocation)


	const costData = {
		accident: {
			valueSelected: null,
			costSelected: null,

			option: [
				{ value: 10, cost: 100 },
				{ value: 20, cost: 200 },
				{ value: 100, cost: 300 },
			]
		},
		medicalTreatment: {
			checked: false,
			value: null,
			cost: null,
		},
		overseasDicease: {
			checked: false,
			value: null,
			cost: null,
		},
	}

	/**
	 * @description 更新保費合計
	 */
	function updateTotalCost() {
		const accidentCost = costData.accident.costSelected ? costData.accident.costSelected : 0;
		const medicalCost = costData.medicalTreatment.checked ? costData.medicalTreatment.cost : 0;
		const overseasCost = costData.overseasDicease.checked ? costData.overseasDicease.cost : 0;
		const totlaCost = accidentCost + medicalCost + overseasCost;
		$('.box-bottom').find('.total-cost').text(`${totlaCost === 0 ? ' -- ' : totlaCost} 元`)
	}

	/**
	 * @description 更新主約保費金額
	 */
	$('#cost-item-accident select').change(
		function () {
			costData.accident.valueSelected = $(this).val();
			const currentCost = costData.accident.option.find(item => item.value === +$(this).val()
			).cost;
			costData.accident.costSelected = currentCost;
			$('#cost-item-accident .cost-dollar').text(`${currentCost} 元`)

			// update costData
			costData.medicalTreatment.value = $(this).val() * 0.1;
			costData.medicalTreatment.cost = currentCost * 0.1;
			costData.overseasDicease.value = $(this).val() * 0.1;
			costData.overseasDicease.cost = currentCost * 0.1;

			// update 畫面
			if (costData.medicalTreatment.checked) {
				$('#medicalTreatment').val($(this).val() * 0.1);
				$('#medicalTreatment').parents('.item-content').find('.cost-dollar').text(`${costData.medicalTreatment.cost} 元`);
			}
			if (costData.overseasDicease.checked) {
				$('#overseasDicease').val($(this).val() * 0.1);
				$('#overseasDicease').parents('.item-content').find('.cost-dollar').text(`${costData.overseasDicease.cost} 元`);
			}
			updateTotalCost()
		},
	)

	/**
	 * @description 更新保費試算附約input及保費
	 */
	// function updateSideContractValue() {
	// 	const thisInput = $(this).parents('.item-name').siblings('.item-content').find('.form-control');

	// 	const id = $(this).parents('.item-name').siblings('.item-content').find('.form-control').prop('id');

	// 	const currentCost = costData[id].cost ? costData[id].cost : ' -- ';
	// 	const costDollar = $(this).parents('.item-name').siblings('.item-content').find('.cost-dollar');

	// 	if ($(this).is(":checked")) {
	// 		thisInput.prop("value", costData[id].value);
	// 		costData[id].checked = true;
	// 		// update 保費
	// 		costDollar.text(`${currentCost} 元`);
	// 		costDollar.css('color', '#06974F')
	// 	} else {
	// 		thisInput.prop("value", null);
	// 		costData[id].checked = false;
	// 		// update 保費
	// 		costDollar.text(' -- 元');
	// 		costDollar.css('color', '#565250')
	// 	}
	// 	updateTotalCost()
	// }
	// $('.form-check-input[type="checkbox"]').change(
	// 	updateSideContractValue,
	// )


	/**
	 * @description 旅平險小百科項目展開收合
	 */
	// function qaItemCollapes() {
	// 	$(this).find('.answer').slideToggle()
	// 	$(this).find('.symbol').toggleClass('minus');
	// 	$(this).find('.symbol').toggleClass('add');
	// }
	// $('.answer').slideToggle()
	// $('.qa-item').click(qaItemCollapes)


	// 依卡片張數調整熱門推薦卡片位置
	const cardCounts = document.querySelectorAll('.cards-container .card').length;
	let initialX

	if (cardCounts === 2) {
		initialX = 25
	} else {
		initialX = 0
	}
	$('.cards-container').css('transform', `translate(${initialX}%)`)


	/**
	 * @description swiper外層移除/加上container class
	 */
	function toggleSwiperContainer() {
		if (pad.matches) {
			$('.more-product-section').removeClass('container')
			$('.recommend-section').removeClass('container')
		} else {
			$('.more-product-section').addClass('container')
			$('.recommend-section').addClass('container')
		}
	}

	window.addEventListener('resize', toggleSwiperContainer);
	toggleSwiperContainer()


	/**
	 * @description 調整理賠案例高度
	 */
	function adjustCaseItemHeight() {
		const caseTitle = document.querySelectorAll('.case .title')
		const caseItemWrapper = document.querySelectorAll('.case-items-wrapper');
		const caseDetail = document.querySelectorAll('.case .detail');
		const titleHeight = Math.max(caseTitle[0].clientHeight, caseTitle[1].clientHeight);
		const height = Math.max(caseItemWrapper[0].clientHeight, caseItemWrapper[1].clientHeight);
		const detailHeight = Math.max(caseDetail[0].clientHeight, caseDetail[1].clientHeight);

		caseTitle[0].style.height = titleHeight + 'px';
		caseTitle[1].style.height = titleHeight + 'px';
		caseItemWrapper[0].style.height = height + 'px';
		caseItemWrapper[1].style.height = height + 'px';
		caseDetail[0].style.height = detailHeight + 'px';
		caseDetail[1].style.height = detailHeight + 'px';
	}
	if (!pad.matches) {
		adjustCaseItemHeight()
	}

	/**
	 * @description 調整熱門推薦卡片高度
	 */
	function adjustCardHeight() {
		const cardBody = document.querySelectorAll('.recommend-section .card .body');
		const heightArray = [];

		for (let i = 0; i < cardBody.length; i++) {
			heightArray.push(cardBody[i].clientHeight)
		}

		const height = Math.max(...heightArray);
		for (let i = 0; i < cardBody.length; i++) {
			cardBody[i].style.height = height + 'px';
		}
	}
	setTimeout(() => {
		adjustCardHeight()
	}, 1000);


	/**
	 * @description 隱藏/顯示底部buttons
	 */
	function hideBottomButtons() {
		const windowYOffest = window.pageYOffset;
		const keyViewBtnsElem = $('.key-view-btns');
		if (keyViewBtnsElem.length > 0) {
			const keyViewBtnsOffet = $('.key-view-btns').offset().top
			if (windowYOffest > keyViewBtnsOffet) {
				$('.fixed-bottom').css('bottom', '0px')
			} else {
				$('.fixed-bottom').css('bottom', '-100px')
			}
		}
	}

	window.addEventListener('scroll', () => {
		hideBottomButtons();
	})

	/**
	 * @description 依照card張數及裝置設定css是否置中
	 */
	const setCardsCss = () => {
		const pad = window.matchMedia("(max-width: 992px)");
		const mobile = window.matchMedia("(max-width: 576px)");
		let slidesPerView;

		const recommendSectCardsCount = document.querySelectorAll('.recommend-section .swiper-slide').length

		const productSectCardsCount = document.querySelectorAll('.more-product-section .swiper-slide').length

		if (mobile.matches) {
			slidesPerView = 1.15
		} else if (pad.matches) {
			slidesPerView = 1.5
		} else {
			slidesPerView = 3
		}

		if (recommendSectCardsCount < slidesPerView) {
			if (recommendSectCardsCount === 1 && pad.matches) {
				return
			}
			$('.recommend-section .swiper-wrapper').css('justify-content', 'center')
		}
		if (productSectCardsCount < slidesPerView) {
			if (productSectCardsCount === 1 && pad.matches) {
				return
			}
			$('.more-product-section .swiper-wrapper').css('justify-content', 'center')
		}
	}
	setCardsCss();
	window.addEventListener('resize', () => {
		setCardsCss();
	})
})();