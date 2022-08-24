import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}


export const ADMINCONNECTEDROUTES: RouteInfo[] = [
  { path:'/projects/projectdetails/:id', title: 'ProjectDetails',  icon: 'webstories', class: '' }
]

export const ADMINROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/projects', title: 'Projects',  icon: 'webstories', class: '' },
    {path: '/users', title: 'Users',  icon: 'person', class: ''},
    {path: '/customers', title: 'Customers',  icon: 'handshake', class: ''},
    {path: '/departments', title: 'Departments',  icon: 'group', class: ''},
    {path: '/fields', title: 'Fields',  icon: 'hub', class: ''},
    {path: '/jobTitles', title: 'JobTitles',  icon: 'work', class: ''},   
];



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ADMINROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
