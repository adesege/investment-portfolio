/* eslint-disable class-methods-use-this */
import CustomSelect from './CustomSelect';

class CustomSelectOption {
  public element: HTMLDivElement;

  public $selectedOption: HTMLDivElement;

  constructor(private select: CustomSelect) {
  }

  init() {
    this.$selectedOption = this.createSelectedOption();
    this.select.$container.append(this.$selectedOption);

    this.element = this.createOptions();
    this.removeHiddenOptions();

    const $customOptionFragment = document.createDocumentFragment();
    Array.from(this.select.element).forEach(this.createItem($customOptionFragment).bind(this));
    this.element.append($customOptionFragment);

    this.select.$container.append(this.element);

    this.registerEventListeners();
  }

  private createOptions() {
    const $div = document.createElement('div');
    $div.className = 'select__options';
    $div.setAttribute('role', 'listbox');
    return $div;
  }

  private createSelectedOption() {
    const $div = document.createElement('div');
    $div.className = this.select.classNames.optionSelected;
    $div.innerHTML = this.select.element.options[this.select.element.selectedIndex].innerHTML;
    $div.setAttribute('aria-label', 'unselected listbox');
    $div.setAttribute('aria-live', 'polite');
    return $div;
  }

  private removeHiddenOptions() {
    Array.from(this.select.getOptions()).forEach((o) => {
      if (o.hasAttribute('hidden') || o.hasAttribute('disabled')) o.remove();
    });
  }

  private createItem($customOptionFragment: DocumentFragment) {
    return ($option: HTMLOptionElement, index: number, $options: HTMLOptionElement[]) => {
      const $customOption = document.createElement('div');
      $customOption.className = 'select__item';
      $customOption.innerHTML = $option.innerHTML;
      $customOption.setAttribute('role', 'option');

      if (index === this.getSelectedIndex()) {
        $customOption.classList.add('select__item--selected');
      }

      $customOption.addEventListener('click', () => {
        this.$selectedOption.innerHTML = $customOption.innerHTML;
        this.select.element.value = $customOption.innerHTML;
        this.select.element.dispatchEvent(new Event('change', { bubbles: true }));
        $options.forEach(this.toggleSelectedClass($customOption));
      });

      $customOptionFragment.append($customOption);
    };
  }

  private toggleSelectedClass($customOption: HTMLDivElement) {
    const itemSelectedClassName = this.select.classNames.itemSelected;

    return ($option: HTMLOptionElement, index: number) => {
      if ($option.innerHTML === $customOption.innerHTML) {
        this.select.element.selectedIndex = index;

        Array.from($customOption.parentNode.querySelectorAll(`.${itemSelectedClassName}`))
          .forEach((p) => p.classList.remove(itemSelectedClassName));

        $customOption.classList.add(itemSelectedClassName);
      }
    };
  }

  private handleClick(event: KeyboardEvent) {
    event.stopPropagation();
    this.select.closeAllSelect(this.select.$container);

    this.select.$container.classList.toggle('select--active');
  }

  private updateFromInput() {
    const index = this.select.element.selectedIndex;
    this.$selectedOption.innerHTML = this.select.element.options[index].innerHTML;
    Array.from(this.element.querySelectorAll(`.${this.select.classNames.option}`))
      .forEach((c, i) => {
        if (i === index) c.classList.add(this.select.classNames.itemSelected);
        else c.classList.remove(this.select.classNames.itemSelected);
      });
  }

  private registerEventListeners() {
    this.$selectedOption.addEventListener('click', this.handleClick.bind(this));
    this.select.$container.addEventListener('keydown', (event) => {
      let index = this.getSelectedIndex();
      const optionsLength = this.select.getOptionsLength();
      switch (event.key) {
        case 'Enter':
        case ' ':
          this.handleClick(event);
          break;
        case 'ArrowUp': // UP
          if ((index - 1) < 0) index = optionsLength - 1;
          this.select.setSelectedIndex(index);
          this.updateFromInput();
          this.select.addActiveSelectClass();
          break;
        case 'ArrowDown': // DOWN
          if (index + 1 > optionsLength - 1) index = 0;
          this.select.setSelectedIndex(index);
          this.updateFromInput();
          this.select.addActiveSelectClass();
          break;
        case 'Escape': // ESC
        case 'Tab': // TAB
          this.select.removeActiveSelectClass();
          break;
        case 'End': // END
          this.select.setSelectedIndex(0);
          this.updateFromInput();
          this.select.addActiveSelectClass();
          break;
        case 'Home': // HOME
          this.select.setSelectedIndex(optionsLength - 1);
          this.updateFromInput();
          this.select.addActiveSelectClass();
          break;
        default: break;
      }
    });
  }

  private getSelectedIndex() {
    return this.select.element.selectedIndex;
  }
}

export default CustomSelectOption;
