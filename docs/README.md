@adityahegde/typescript-framework / [Modules](modules.md)

# typescript-framework

A full stack framework with Express.js for server and React.js for UI.

Check example folder for a real life use case.
Check docs folder for detailed API docs.

## Models
Utility package used to define models for a React app. Models are defined using various decorators.

# Creating a Model
To create a model in the ecosystem the model class has to extend BaseType and have ModelMetadata.Model decorator.

    import {
	  ModelMetadata,
	  TextField,
      DisplayField,
	} from "@adityahegde/models";

    @ModelMetadata.Model({
      // Overrides the singular representation.
      // By default it will be class name with 1st letter as lower case.
      singular: "sample",
      // Overrides the plural representation.
      // By default it will be output of pluralize pacakge of singular attribute.
      plural: "samples",
      // API base for the model. This is used to build the api route for this model.
      // apiPath = `${apiBase}/${plural}`
      apiBase: "/api",
      // Specifies the base class for a polymorphic inheritance.
      // NOTE: Not implemented just yet.
      polymorphic: "",
    })
    class SampleModel extends BaseType {
      @DisplayField()
      // Add field decorators at the end for other decorators to work
      @TextField()
	  public textField: string;
    }

## Server
Has various classes to easily build an endpoint for models and serving the UI.

## UI
Has different components for UI elements that are rendered based on model's configuration.
