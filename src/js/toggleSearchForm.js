export default function toggleSearchForm(event, searchForm) {
  searchForm.classList.toggle('search-form_opened');

  const input = searchForm.querySelector('.search-form__input');

  input.focus();
}
