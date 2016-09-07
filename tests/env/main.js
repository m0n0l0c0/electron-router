'use strict'

const should = require('should')

describe('Electron Environment', () => {

	it('should throw an Error', () => {
	
		let router = null
		try{ router = require( __dirname + '/../../router')('TEST') }
		catch( e ){ router = e }
		finally{ router.should.be.a.Error().and.be.match(/This module only works on an Electron environment.*/gi) }
	
	})

})
