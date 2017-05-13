package controllers

import "github.com/astaxie/beego"

// AngularController for angular js
type AngularController struct {
	beego.Controller
}

// Get for AngularController
func (ctrl *AngularController) Get() {
	ctrl.TplName = "index_angular.html"
	ctrl.Render()
}
