(function (arr) {
  arr.forEach((item) => {
    if (item.hasOwnProperty('append')) {
      return;
    }

    Object.defineProperty(item, 'append', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function append() {
        let argArr = Array.prototype.slice.call(arguments),
          docFrag = document.createDocumentFragment();

        argArr.forEach((argItem) => {
          const isNode = argItem instanceof Node;
          docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
        });

        this.appendChild(docFrag);
      },
    });
  });
}([Element.prototype, Document.prototype, DocumentFragment.prototype]));
