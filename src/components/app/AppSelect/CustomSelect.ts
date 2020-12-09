import CustomSelectOption from './CustomSelectOption';

/* eslint-disable class-methods-use-this */
class CustomSelect {
  public $container: HTMLDivElement;

  public readonly classNames = {
    active: 'select--active',
    itemSelected: 'select__item--selected',
    optionSelected: 'select__selected',
    option: 'select__item',
  };

  private createContainer() {
    const $div = document.createElement('div');
    $div.classList.add('select');

    this.element.parentNode.replaceChild($div, this.element);
    $div.append(this.element);
    $div.setAttribute('tabindex', '0');
    $div.setAttribute('aria-haspopup', 'listbox');
    return $div;
  }

  constructor(public element: HTMLSelectElement) {
    this.element.style.display = 'none';
    this.$container = this.createContainer();

    document.addEventListener('click', this.closeAllSelect);

    const customSelectOption = new CustomSelectOption(this);

    customSelectOption.init();
  }

  closeAllSelect(element: any) {
    Array.from(document.querySelectorAll('.select--active'))
      .filter((o) => o !== element)
      .forEach((o) => o.classList.remove('select--active'));
  }

  setSelectedIndex(index: number) {
    this.element.selectedIndex = index;
  }

  getOptions() {
    return this.element.children;
  }

  getOptionsLength() {
    return this.element.options.length;
  }

  addActiveSelectClass() {
    this.$container.classList.add(this.classNames.active);
  }

  removeActiveSelectClass() {
    this.$container.classList.remove(this.classNames.active);
  }

  destroy() {
    document.removeEventListener('click', this.closeAllSelect);
    this.$container.remove();
  }
}

export default CustomSelect;
