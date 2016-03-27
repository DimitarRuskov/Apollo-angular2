import {Component} from 'angular2/core';
import {ViewEncapsulation} from 'angular2/core';

@Component({
    selector: 'im-navbar',
    template: `
        <ul id="menu">
            <li><a href="#">Home</a></li>
            <li>
                <a href="#">About ￬</a>
                <ul class="hidden">
                    <li><a href="#">Who We Are</a></li>
                    <li><a href="#">What We Do</a></li>
                </ul>
            </li>
            <li>
                <a href="#">Help ￬</a>
                <ul class="hidden">
                    <li><a href="#">Help 1</a></li>
                    <li><a href="#">Help 2</a></li>
                    <li><a href="#">Help 3</a></li>
                </ul>
            </li>
        </ul>
    `,
    styles: [`
        ul {
            list-style-type:none;
            margin:0;
            padding:0;
            position: absolute;
        }

        li {
            display:inline-block;
            float: left;
            margin-right: 1px;
        }
        
        li a {
            display:block;
            min-width:140px;
            height: 50px;
            text-align: center;
            line-height: 50px;
            font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
            color: #fff;
            background: #2f3036;
            text-decoration: none;
        }

        li:hover a {
            background: #19c589;
        }

        li:hover ul a {
            background: #f3f3f3;
            color: #2f3036;
            height: 40px;
            line-height: 40px;
        }

        li:hover ul a:hover {
            background: #19c589;
            color: #fff;
        }
        
        li ul {
            display: none;
        }

        li ul li {
            display: block;
            float: none;
        }

        li ul li a {
            width: auto;
            min-width: 100px;
            padding: 0 20px;
        }

        ul li a:hover + .hidden, .hidden:hover {
            display: block;
        }
    `]
})

export class NavbarComponent { }