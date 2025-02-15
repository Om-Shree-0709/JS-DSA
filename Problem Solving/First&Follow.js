/* Finding First and Follow in Compiler Design 
A-> Ab
A->a
*/

class Grammar {
  constructor(rules) {
    this.rules = this.removeLeftRecursion(rules);
    this.first = {};
    this.follow = {};
    this.nonTerminals = new Set(Object.keys(this.rules));
  }

  removeLeftRecursion(rules) {
    let newRules = {};
    for (let nt in rules) {
      let alpha = [],
        beta = [];
      for (let production of rules[nt]) {
        if (production.startsWith(nt)) {
          alpha.push(production.slice(1));
        } else {
          beta.push(production);
        }
      }
      if (alpha.length > 0) {
        let newNt = nt + "'";
        newRules[nt] = beta.map((b) => b + newNt);
        newRules[newNt] = alpha.map((a) => a + newNt).concat(["ε"]);
      } else {
        newRules[nt] = rules[nt];
      }
    }
    return newRules;
  }

  computeFirst() {
    for (let nt of this.nonTerminals) {
      this.first[nt] = new Set();
    }

    let changed = true;
    while (changed) {
      changed = false;
      for (let nt in this.rules) {
        for (let production of this.rules[nt]) {
          let beforeSize = this.first[nt].size;
          let firstSet = this.getFirst(production);
          this.first[nt] = new Set([...this.first[nt], ...firstSet]);
          if (this.first[nt].size > beforeSize) changed = true;
        }
      }
    }
  }

  getFirst(symbols) {
    let firstSet = new Set();
    if (symbols.length === 0) return firstSet;
    let firstSymbol = symbols[0];

    if (!this.nonTerminals.has(firstSymbol)) {
      firstSet.add(firstSymbol);
    } else {
      for (let prod of this.rules[firstSymbol]) {
        let subFirst = this.getFirst(prod);
        firstSet = new Set([...firstSet, ...subFirst]);
      }
    }
    return firstSet;
  }

  computeFollow() {
    for (let nt of this.nonTerminals) {
      this.follow[nt] = new Set();
    }
    this.follow["A"].add("$"); // Start symbol Follow(A) includes end marker

    let changed = true;
    while (changed) {
      changed = false;
      for (let nt in this.rules) {
        for (let production of this.rules[nt]) {
          for (let i = 0; i < production.length; i++) {
            let symbol = production[i];
            if (this.nonTerminals.has(symbol)) {
              let beforeSize = this.follow[symbol].size;
              let nextSymbols = production.slice(i + 1);
              let firstNext = this.getFirst(nextSymbols);

              this.follow[symbol] = new Set([
                ...this.follow[symbol],
                ...firstNext,
              ]);
              this.follow[symbol].delete("ε");

              if (nextSymbols.length === 0 || firstNext.has("ε")) {
                this.follow[symbol] = new Set([
                  ...this.follow[symbol],
                  ...this.follow[nt],
                ]);
              }
              if (this.follow[symbol].size > beforeSize) changed = true;
            }
          }
        }
      }
    }
  }

  displayResults() {
    console.log("First:");
    for (let nt in this.first) {
      console.log(`${nt}: { ${[...this.first[nt]].join(", ")} }`);
    }

    console.log("\nFollow:");
    for (let nt in this.follow) {
      console.log(`${nt}: { ${[...this.follow[nt]].join(", ")} }`);
    }
  }
}

const rules = {
  A: ["Aa", "b"],
};

const grammar = new Grammar(rules);
grammar.computeFirst();
grammar.computeFollow();
grammar.displayResults();
