class Tooltip {

    constructor (
        options = {
            type : 'info',
            expire : 5000,
            close_btn : false,
            position : 'tooltip-top-right'
        }, 
        title = 'Information', 
        msg = '') {

        this.options = options;
        this.title = title;
        this.msg = msg;

        Tooltip.prototype.tooltipEle = {
            html: '',
            ev: false
        };

        Tooltip.prototype.listEle = [];
        Tooltip.prototype.doc = this.onInit();
    }

    onInit() {
        let s = document.createElement('script');
        s.type = 'text/javascript';
        s.src = 'node_modules/@fortawesome/fontawesome-free/js/all.min.js';
        s.async= 'async';
        document.body.appendChild(s);

        if (!document.getElementById('tooltip-container')) {
           let tag = document.createElement('div');
           tag.id = 'tooltip-container';
           tag.classList = 'tooltip tooltip-top tooltip-right tooltip-widget'
           tag.style = 'z-index: 99999;'
           document.body.appendChild(tag);
        }
        return document.getElementById('tooltip-container');
    }

    addTooltip(options, title, msg) {
        this.options = options;
        this.title = title;
        this.msg = msg;

        let id = Tooltip.prototype.listEle.length;

        let close_btn = this.options.close_btn ? '<i class="fas fa-times tooltip-close-btn tooltip-close-btn" id="close-btn-"' + id + '></i>' : '';

        Tooltip.prototype.tooltipEle = {
            html: `
            <div class="tooltip-item ui-corner-all ui-shadow tooltip-` + this.options.type + `" 
                style="display: block;" id="tooltip-id-` + id + `">
                <div class="tooltip-item-content">
                ` + close_btn + `

                    <i class="fas fa-` + this.iconRenderize(this.options.type) + `-circle tooltip-icon"></i>

                    <div class="tooltip-message">
                        <span class="tooltip-title">` + this.title + `</span>
                        <span style="overflow-wrap: break-word;">` + this.msg + `</span>
                    </div>
                    <div style="clear: both;"></div>
                </div>
            </div>
            `,
            ev: false
        };

        Tooltip.prototype.listEle.push(Tooltip.prototype.tooltipEle);

        this.configure(id);
    }

    configure(id){
        Tooltip.prototype.elements = '';
        Tooltip.prototype.listEle.forEach((ele) => {
            Tooltip.prototype.elements += ele.html;
        });
        Tooltip.prototype.doc.innerHTML = Tooltip.prototype.elements;

        if (this.options.expire > 0){
            setTimeout(() => {
                let tooltip = document.getElementById('tooltip-id-' + id);
                tooltip.parentNode.removeChild(tooltip);
                Tooltip.prototype.listEle.splice(id, 1);
            }, this.options.expire);
        }

        let btn = document.getElementById('close-btn-' + id);
        if (btn != undefined) {
            btn.addEventListener("click", (e) => {
                let tooltip = btn.parentNode.parentNode;
                tooltip.parentNode.removeChild(tooltip);
                console.log(btn.parentNode);
                Tooltip.prototype.listEle.splice(i, 1);
                //this.configure();
            });
        }
    }


    iconRenderize(opc) {

        switch(opc) {
            case 'warning':
                return 'exclamation';
            break;
            case 'success':
                return 'check';
            break;
            case 'error':
                return 'times';
            break;
            default: 
                return 'info';
        }
    }

}