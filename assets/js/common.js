var HAYAMA = {
  baseURL: 'https://jony.dev/',
  dependencies: [
    {
      name: 'axios',
      url: 'https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js',
      status: 'initial'
    }
  ],

  isReady: function () {
    return !this.dependencies.find(function (d) {
      return d.status !== 'loaded';
    });
  },

  loadDependencies: function () {
    this.dependencies.forEach(this.loadDependency);
  },

  loadedDependency: function (dependency) {
    dependency.status = 'loaded';
    if (this.isReady()) {
      document.dispatchEvent(new CustomEvent("HayamaDependenciesLoaded", {}));
    }
  },

  loadDependency: function (dependency) {
    if (dependency.status === 'initial') {
      var head = document.head;
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = dependency.url;

      var callback = function () {
        HAYAMA.loadedDependency(dependency)
      }

      // There are several events for cross browser compatibility.
      script.onreadystatechange = callback;
      script.onload = callback;

      head.appendChild(script);
    }
  },

  injectCSS: function () {
    var head = document.head;
    var script = document.createElement('link');
    script.rel = 'stylesheet';
    script.href = this.baseURL + 'assets/css/common.css';

    head.appendChild(script);
  }
};

document.addEventListener("DOMContentLoaded", function () {
  HAYAMA.loadDependencies();
  HAYAMA.injectCSS();
});

document.addEventListener('HayamaDependenciesLoaded', function () {
  console.log('HAYAMA READY!!!');
  // axios.get('https://jony.dev/index.html')
  //   .then(function(res) {
  //     console.log(res);
  //   });
});