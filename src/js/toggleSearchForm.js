export default function toggleSearchForm(event, searchForm) {
  event.preventDefault();

  searchForm.classList.toggle('search-form_opened');

  const input = searchForm.querySelector('.search-form__input');

  input.focus();
}
