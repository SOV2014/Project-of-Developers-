const formData = {
    email: "",
    comments: "",

    setFormValue(newemail, newcomments) {
        this.email = newemail;
        this.comments = newcomments;
      },
    };

const formMessage = document.querySelector(".footer-clients_data");
const STORAGE_KEY = "feedback-form-state";
formMessage.addEventListener("input", inputText);
formMessage.addEventListener("send", onSubmit);

function getValueOfLocalstorage() {
  const localdata = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (localdata !== null) {
    formData.setFormValue(localdata.email, localdata.comments);
    formMessage.email.value = formData.email;
    formMessage.message.value = formData.comments;
  }
}

function inputText(event) {
  const eventName = event.target;
  switch (eventName.nodeName) {
    case "INPUT":
      formData.email = eventName.value.trim();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
      break;
    case "TEXTAREA":
      formData.comments = eventName.value.trim();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
      break;
  }
}

function onSubmit(event) {
  event.preventDefault();
  if (formData.email === "" || formData.comments === "") {
    return alert("Fill please all fields");
  }
  console.table(formData);
  localStorage.removeItem(STORAGE_KEY);
  formMessage.reset();
}
getValueOfLocalstorage();



(() => {
    const refs = {
        openModalBtn: document.querySelector('.modal-open'),
        closeModalBtn: document.querySelector('.modal-close'),
        modal: document.querySelector('.foot-modal'),
    };
    
        refs.openModalBtn.addEventListener("click", toggleModal);
        refs.closeModalBtn.addEventListener("click", toggleModal);
    
        function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
    }
    })();


    const modalOpens = document.querySelector('.modal-open');
    const body = document.querySelector('body');
    const lockPadding = document.querySelector("")

    let unlock = true;

    const timeout = 800;

    if(modalOpens.length > 0) {
        for (let index = 0;index < modalOpens; index ++) {
            const modalOpen = modalOpen[index];
            modalOpen.addEventListener("click", function (e){
                const popupName = modalOpen.qetAttribute('href');
                const curentModal = document.getElementById(popupName);
                modalOpen(curentModal);
                e.preventDefault();
            } );
        }
    }
    const modalCloseIcon = document.querySelectorAll('.footer-modal-close');
    if(modalCloseIcon.length > 0) {
        for (let index = 0; index < modalCloseIcon.length; index ++) {
            const el = modalCloseIcon[index];
            el.addEventListener('click', function (e) {
                modalClose(el.closest('.modal-close'));
                e.preventDefault();
            });
        }
    }

    function modalOpen(curentModal){
        if (curentModal && unlock) {
            const modalActive = document.querySelector('.modal .open');
            if (modalActive) {
                modalClose(modalActive, false);
            } else {
                bodyLock();
            }
            curentModal.classList.add('open');
            curentModal.addEventListener("click", function(e) {
                if (!e.target.closest('.foot-modal-content')) {
                    modalClose(e.target.closest('.foot-modal'))
                }
            });
        }
    }